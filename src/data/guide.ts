import type { Locale } from "../i18n/index.ts";

// Business tools guide groups, in the order an owner meets them. Each group is a goal, not a product category.
export const guideGroups = [
  {
    id: "get-found",
    title: "Get found and win customers",
    description: "Tools for appearing in search results and letting customers book or buy.",
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

const guideGroupsEs: Record<(typeof guideGroups)[number]["id"], { title: string; description: string }> = {
  "get-found": { title: "Cómo aparecer en búsquedas y conseguir clientes", description: "Herramientas para aparecer en los resultados de búsqueda y para que tus clientes puedan reservar o comprar." },
  "get-paid": { title: "Cómo cobrar y llevar las cuentas", description: "Herramientas para cobrar, enviar facturas y registrar cuánto ganás y cuánto gastás." },
  "day-to-day": { title: "Cómo organizar el día a día", description: "Herramientas para gestionar clientes, pedidos, archivos y el trabajo del equipo." },
  "save-time": { title: "Cómo ahorrar tiempo", description: "Formas de copiar y actualizar datos de manera automática en tus aplicaciones, sin que tu equipo tenga que hacerlo." },
  "stay-safe": { title: "Cómo proteger tus cuentas", description: "Pasos para proteger tus cuentas y asegurarte de que estén a nombre del negocio." },
  concepts: { title: "Conceptos útiles", description: "Explicaciones breves de términos que vas a escuchar cuando compres software." },
};

export const getGuideGroups = (locale: Locale) =>
  locale === "es" ? guideGroups.map(({ id }) => ({ id, ...guideGroupsEs[id] })) : guideGroups;

export const guideSections = {
  "what-it-is": { en: "What it is", es: "Qué es" },
  "when-you-need-it": { en: "When you need it", es: "Cuándo lo necesitás" },
  "popular-choices": { en: "Popular choices", es: "Opciones populares" },
  "what-to-watch-for": { en: "What to watch for", es: "Qué revisar" },
  "what-i-can-help-with": { en: "What I can help with", es: "En qué puedo ayudarte" },
  sources: { en: "Sources", es: "Fuentes" },
};

export const guideCopy = {
  en: {
    title: "Business tools guide",
    seoTitle: "Business tools guide for small businesses | Hanif Carroll",
    description: "Plain explanations of the tools small businesses use, from booking and payments to passwords. Find your problem, then read what solves it, the popular choices, and what to watch for.",
    intro: "For owners of small businesses who want to know which tools they need and what to watch for. Find your problem in the list below, or browse the tools by what you want to do.",
    findProblem: "Find your problem",
    or: " or ",
    contactBefore: "Don’t see yours? ",
    contactLink: "Tell me about a problem in your business",
    contactAfter: ", and I’ll suggest the simplest fix.",
    problems: "Problems this solves",
    allTopics: "All topics in the guide",
    pagination: "Previous and next entries",
    previous: "← Previous",
    next: "Next →",
    fallback: "",
  },
  es: {
    title: "Guía de herramientas para negocios",
    seoTitle: "Guía de herramientas para negocios chicos | Hanif Carroll",
    description: "Explicaciones simples de las herramientas que usan los negocios chicos, desde los turnos y los cobros hasta las contraseñas. Buscá tu problema y leé cómo resolverlo, qué opciones se usan y qué revisar.",
    intro: "Para dueños de negocios chicos que quieren saber qué herramientas necesitan y qué revisar. Buscá tu problema en la lista de abajo o mirá las herramientas según lo que quieras hacer.",
    findProblem: "Buscá tu problema",
    or: " o ",
    contactBefore: "¿No encontrás tu problema? ",
    contactLink: "Contame sobre un problema en tu negocio",
    contactAfter: " y te propongo la solución más simple.",
    problems: "Problemas que podés resolver",
    allTopics: "Todos los temas de la guía",
    pagination: "Tema anterior y tema siguiente",
    previous: "← Anterior",
    next: "Siguiente →",
    fallback: " (en inglés)",
  },
};

/** Tool names are the bold labels in an entry's "Popular choices" list. */
export const guideTools = (body = "", locale: Locale = "en") =>
  [
    ...(body.split(`## ${guideSections["popular-choices"][locale]}`)[1]?.split("\n## ")[0] ?? "").matchAll(
      /^- \*\*(.+?)\*\*/gm,
    ),
  ].map((match) => match[1]);
