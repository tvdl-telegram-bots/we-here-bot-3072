import { z } from "zod";

export const CLIENT_ENV = {
  METADATA_BASE: z
    .string()
    .parse(
      process.env.NEXT_PUBLIC_METADATA_BASE ||
        decodeURIComponent(
          process.env.NEXT_PUBLIC_METADATA_BASE__URLENCODED || ""
        )
    ),
};
