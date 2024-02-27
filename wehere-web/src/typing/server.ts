import { ObjectId } from "mongodb";
import { z } from "zod";

import {
  ChatId,
  Locale,
  MessageDirection,
  MessageId,
  Role,
  ThreadPlatform,
  Timestamp,
  UserId,
} from "./common";

import * as Telegram from "@/typing/telegram";

export const PersistentObjectId = z.instanceof(ObjectId);

export type PersistentObjectId = z.infer<typeof PersistentObjectId>;

export const PersistentThread = z.object({
  _id: PersistentObjectId,
  name: z.string().nullish(), // unique
  emoji: z.string().nullish(),
  createdAt: Timestamp.nullish(),
  platform: ThreadPlatform.nullish(),
});

export type PersistentThread = z.infer<typeof PersistentThread>;

export const PersistentMortalSubscription = z.object({
  _id: PersistentObjectId,
  chatId: ChatId, // primary key
  threadId: z.instanceof(ObjectId).nullish(),
  updatedAt: Timestamp.nullish(),
});

export type PersistentMortalSubscription = z.infer<
  typeof PersistentMortalSubscription
>;

export const PersistentAngelSubscription = z.object({
  _id: PersistentObjectId,
  chatId: ChatId, // primary key
  replyingToThreadId: z.instanceof(ObjectId).nullish(),
  updatedAt: Timestamp.nullish(),
});

export type PersistentAngelSubscription = z.infer<
  typeof PersistentAngelSubscription
>;

export const PersistentThreadMessage = z.object({
  _id: PersistentObjectId,
  threadId: PersistentObjectId,
  direction: MessageDirection,
  originChatId: ChatId.nullish(),
  originMessageId: MessageId.nullish(),
  text: z.string().nullish(),
  entities: Telegram.MessageEntity.array().nullish(),
  plainText: z.boolean().nullish(),
  createdAt: Timestamp.nullish(),
});

export type PersistentThreadMessage = z.infer<typeof PersistentThreadMessage>;

export const PersistentChat = z.object({
  _id: PersistentObjectId,
  chatId: ChatId,
  locale: Locale.nullish(),
  updatedAt: Timestamp.nullish(),
});

export type PersistentChat = z.infer<typeof PersistentChat>;

export const PersistentRole = z.object({
  userId: UserId,
  role: Role.nullish(),
  updatedAt: Timestamp.nullish(),
});

export type PersistentRole = z.infer<typeof PersistentRole>;