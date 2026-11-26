// Remove routes as each translation PR lands. A new English route is not exempt.
export const deferredPages: string[] = [];

export const deferredEntries = {
  "case-studies": [],
  blog: [],
  atlas: [
    "voice-agents",
  ],
  guide: [],
} as const;
