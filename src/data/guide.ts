// Business tools guide groups, in the order an owner meets them. Each group is a goal, not a product category.
export const guideGroups = [
  {
    id: "get-found",
    title: "Get found and win customers",
    description: "Tools for showing up in searches and letting customers book or buy.",
  },
  {
    id: "get-paid",
    title: "Get paid and keep the books",
    description:
      "Tools for taking payments, sending invoices, and tracking what you earn and spend.",
  },
  {
    id: "day-to-day",
    title: "Run the day to day",
    description: "Tools for customers, orders, files, and the team.",
  },
  {
    id: "save-time",
    title: "Save time",
    description: "Ways to have your apps copy and update information instead of your team.",
  },
  {
    id: "stay-safe",
    title: "Stay safe",
    description: "Steps that protect your accounts and make sure the business owns them.",
  },
  {
    id: "concepts",
    title: "Words worth knowing",
    description: "Short explanations of terms you’ll hear when you buy software.",
  },
] as const;

/** Tool names are the bold labels in an entry's "Popular choices" list. */
export const guideTools = (body = "") =>
  [
    ...(body.split("## Popular choices")[1]?.split("\n## ")[0] ?? "").matchAll(
      /^- \*\*(.+?)\*\*/gm,
    ),
  ].map((match) => match[1]);
