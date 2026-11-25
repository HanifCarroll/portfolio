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
    text: "I use a Gmail or Hotmail address for the business",
    group: "get-found",
    entries: ["domain-and-email"],
  },
  {
    text: "I don’t know who registered my website’s address",
    group: "get-found",
    entries: ["domain-and-email", "account-ownership"],
  },
  {
    text: "Google shows the wrong hours or phone number for my business",
    group: "get-found",
    entries: ["google-business-profile"],
  },
  {
    text: "Customers leave reviews and nobody replies",
    group: "get-found",
    entries: ["google-business-profile"],
  },
  {
    text: "I have a list of customer emails and never send them anything",
    group: "get-found",
    entries: ["email-marketing"],
  },
  {
    text: "I post on social media only when I remember",
    group: "get-found",
    entries: ["social-media-scheduling"],
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
    text: "I write invoices by hand or in a Word file",
    group: "get-paid",
    entries: ["invoicing-and-accounting"],
  },
  {
    text: "I sort a year of receipts for my accountant at the end of the year",
    group: "get-paid",
    entries: ["invoicing-and-accounting"],
  },
  {
    text: "I take orders by message and send photos and prices one by one",
    group: "get-paid",
    entries: ["online-stores"],
  },
  {
    text: "Clients agree to a quote by message and I have nothing signed",
    group: "get-paid",
    entries: ["e-signatures"],
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
    entries: ["online-booking", "inventory-and-orders"],
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
    text: "I find out a product is sold out when a customer asks for it",
    group: "day-to-day",
    entries: ["inventory-and-orders"],
  },
  {
    text: "I collect customer details on paper and type them in later",
    group: "day-to-day",
    entries: ["forms-and-surveys"],
  },
  {
    text: "My files are spread across phones, laptops, and email",
    group: "day-to-day",
    entries: ["shared-files"],
  },
  {
    text: "I send tasks to my team in WhatsApp and can’t tell which ones are done",
    group: "day-to-day",
    entries: ["team-chat-and-tasks"],
  },
  {
    text: "I make the staff schedule on paper and send a photo to the group",
    group: "day-to-day",
    entries: ["staff-scheduling"],
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
    text: "I write the same kinds of emails and descriptions every week",
    group: "save-time",
    entries: ["ai-assistants"],
  },
  {
    text: "I don’t know if two of my apps can share information",
    group: "save-time",
    entries: ["connecting-apps"],
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
    text: "I sign in to my email and bank with only a password",
    group: "stay-safe",
    entries: ["two-factor-sign-in"],
  },
  {
    text: "My business files are on one computer and nowhere else",
    group: "stay-safe",
    entries: ["backups"],
  },
  {
    text: "A designer or former employee controls one of our accounts",
    group: "stay-safe",
    entries: ["account-ownership"],
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
  {
    text: "I don’t know what “the cloud” means for my files",
    group: "concepts",
    entries: ["the-cloud"],
  },
  {
    text: "I pay for several apps and don’t know the total each month",
    group: "concepts",
    entries: ["saas-subscriptions"],
  },
  {
    text: "I’ve tried several apps and none of them fits how we work",
    group: "concepts",
    entries: ["custom-software"],
  },
] as const;
