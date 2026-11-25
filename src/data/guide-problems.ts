// The one list of owner problems. The /guide/ index and each entry's "Problems this solves" both render from it.
// `entries` are guide slugs (files in src/content/guide). `bun run check:projects` checks every slug exists
// and every entry has at least one problem.
export const guideProblems = [
  {
    text: "My website doesn’t bring in customers",
    group: "get-found",
    entries: ["website-builders"],
  },
  {
    text: "I don’t have a website, or I don’t like sharing the one I have",
    group: "get-found",
    entries: ["website-builders"],
  },
  {
    text: "I book appointments by phone or by message, one at a time",
    group: "get-found",
    entries: ["online-booking"],
  },
  {
    text: "Clients forget their appointments and don’t show up",
    group: "get-found",
    entries: ["online-booking"],
  },
  {
    text: "Customers want to pay by card and I can’t take it",
    group: "get-paid",
    entries: ["payments-and-point-of-sale"],
  },
  {
    text: "I send my bank details by message and then check who paid",
    group: "get-paid",
    entries: ["payments-and-point-of-sale"],
  },
  {
    text: "I add up the day’s sales by hand",
    group: "get-paid",
    entries: ["payments-and-point-of-sale"],
  },
  {
    text: "I keep customer details in my phone, a notebook, and my email",
    group: "day-to-day",
    entries: ["customer-list"],
  },
  {
    text: "People ask for a quote and never hear back",
    group: "day-to-day",
    entries: ["customer-list"],
  },
  {
    text: "I track orders and bookings on paper or in WhatsApp",
    group: "day-to-day",
    entries: ["whatsapp-business", "online-booking"],
  },
  {
    text: "I use my personal WhatsApp number for the business",
    group: "day-to-day",
    entries: ["whatsapp-business"],
  },
  {
    text: "I type the same prices and opening hours into every new chat",
    group: "day-to-day",
    entries: ["whatsapp-business"],
  },
  {
    text: "I copy information between apps by hand",
    group: "save-time",
    entries: ["automation-tools"],
  },
  {
    text: "I update spreadsheets by hand",
    group: "save-time",
    entries: ["automation-tools"],
  },
  {
    text: "My team shares one password for everything",
    group: "stay-safe",
    entries: ["password-managers"],
  },
  {
    text: "I keep passwords in a notebook or a note on my phone",
    group: "stay-safe",
    entries: ["password-managers"],
  },
  {
    text: "People who left the business can still sign in to our accounts",
    group: "stay-safe",
    entries: ["password-managers"],
  },
  {
    text: "I want to switch apps but don’t know if I can take my records with me",
    group: "concepts",
    entries: ["your-data"],
  },
  {
    text: "I pay for an app and don’t know how to download what I’ve put in it",
    group: "concepts",
    entries: ["your-data"],
  },
] as const;
