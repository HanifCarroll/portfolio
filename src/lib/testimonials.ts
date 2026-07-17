export interface Testimonial {
  label?: "Client note";
  name: string;
  role: string;
  company: string;
  attribution: string;
  text: string;
  featuredText: string;
}

export const testimonials = {
  monicaLondono: {
    label: "Client note",
    name: "Monica Londoño",
    role: "Co-founder",
    company: "Punto de Partida",
    attribution: "Co-founder, Punto de Partida",
    text: "Hanif quickly understood our needs, both from a business and aesthetic perspective, and translated them into a clean, functional website in no time. His professionalism and data-driven approach made the entire process seamless. The result exceeded our expectations.",
    featuredText:
      "Hanif quickly understood our needs, both from a business and aesthetic perspective, and translated them into a clean, functional website in no time.",
  },
  markisZarate: {
    label: "Client note",
    name: "Markis Zarate",
    role: "Founder, Creative & Graphic Designer",
    company: "Zarate Studios",
    attribution: "Founder, Zarate Studios",
    text: "Hanif delivers high quality work with strong attention to detail. He's reliable, communicates great, and has a sharp technical mind. Whether handling complex builds, troubleshooting under pressure, or adapting to shifting priorities, he was dependable every step of the way. He's the kind of developer who not only gets the job done but elevates the process for everyone involved.",
    featuredText:
      "He's reliable, communicates great, and has a sharp technical mind. Whether handling complex builds, troubleshooting under pressure, or adapting to shifting priorities, he was dependable every step of the way.",
  },
  sarahHibner: {
    name: "Sarah Hibner",
    role: "Senior Product Designer",
    company: "LeagueApps",
    attribution: "Senior Product Designer, LeagueApps",
    text: "Hanif was a pleasure to work with! He suggested design-to-engineering hand-off improvements to make our workflow more efficient, provided great feedback during story time reviews, asked insightful follow-up questions during design reviews, and brought my Figma designs to life so we could deliver value to our users.",
    featuredText:
      "He suggested design-to-engineering hand-off improvements to make our workflow more efficient, asked insightful follow-up questions during design reviews, and brought my Figma designs to life so we could deliver value to our users.",
  },
} as const satisfies Record<string, Testimonial>;
