import { Db } from "mongodb";

import { ChatId, Locale } from "@/typing/common";
import { PersistentChat } from "@/typing/server";

const DEFAULT_LOCALE: Locale = "vi";

export async function getChatLocale(ctx: { db: Db }, chatId: ChatId) {
  const persistentChat = await ctx.db
    .collection("chat")
    .findOne({ chatId: { $eq: chatId } })
    .then((doc) => PersistentChat.parse(doc))
    .catch(() => undefined);
  return persistentChat?.locale || DEFAULT_LOCALE;
}
