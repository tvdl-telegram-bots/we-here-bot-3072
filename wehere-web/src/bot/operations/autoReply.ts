import type { WithoutId } from "mongodb";

import { createMessage } from "./createMessage";
import { getAvailability } from "./getAvailability";
import { notifyNewMessage } from "./notifyNewMessage";

import type { EssentialContext } from "@/types";
import type { Locale } from "@/typing/common";
import {
  PersistentThreadMessage,
  type PersistentObjectId,
} from "@/typing/server";

function composeMessage(
  ctx: EssentialContext,
  {
    threadId,
    locale,
    available,
  }: { threadId: PersistentObjectId; locale: Locale; available: boolean }
): WithoutId<PersistentThreadMessage> {
  return {
    threadId,
    direction: "from_angel",
    originChatId: null,
    originMessageId: null,
    text: available
      ? ctx.withLocale(locale)("html-auto-reply-when-available")
      : ctx.withLocale(locale)("html-auto-reply-when-unavailable"),
    entities: null,
    plainText: true,
    createdAt: Date.now(),
  };
}

export async function isAutoReplyNeeded(
  ctx: EssentialContext,
  { threadId }: { threadId: PersistentObjectId }
) {
  try {
    const availability = await getAvailability(ctx);

    const lastMessage = await ctx.db
      .collection("thread_message")
      .findOne(
        { threadId, direction: "from_mortal" },
        { sort: { createdAt: -1 }, limit: 1 }
      )
      .then(PersistentThreadMessage.parse)
      .catch(() => undefined);

    // We compare two timestamps:
    // 1. the last message from mortal
    // 2. the last update of availability
    // If the last message is newer than the last update of availability,
    // we don't send the auto-reply.

    if (!lastMessage?.createdAt) return true;
    if (!availability.since) return false;
    return lastMessage.createdAt < availability.since;
  } catch (e) {
    // just for safety
    console.error(e);
    return false;
  }
}

export async function autoReply(
  ctx: EssentialContext,
  { threadId, locale }: { threadId: PersistentObjectId; locale: Locale }
) {
  const availability = await getAvailability(ctx);
  const message = composeMessage(ctx, {
    threadId,
    locale,
    available: availability.value,
  });
  await createMessage(ctx, { message });
  await notifyNewMessage(ctx, { message });
}
