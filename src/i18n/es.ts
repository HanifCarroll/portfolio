import { EMAIL } from "../consts.ts";
import { CONTACT_LIMITS } from "../lib/contact-fields.ts";
import type { en } from "./en.ts";

export const es = {
  locale: { format: "es-AR", openGraph: "es_AR", label: "Español" },
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    work: "Cómo trabajo",
    blog: "Blog",
    guide: "Guía de herramientas",
    notes: "Notas",
    agencies: "Agencias",
    atlas: "Build Atlas",
    email: "Correo",
    homeLabel: "Inicio de Hanif Carroll",
    primary: "Navegación principal",
    mobile: "Navegación en el celular",
    open: "Abrir el menú",
    closeNav: "Cerrar el menú",
    job: "Ingeniero de software independiente",
    footer: "Pie de página",
    footerNav: "Navegación del pie de página",
    skip: "Ir al contenido",
    contents: "Índice",
    contentsOpen: "Abrir el índice",
    contentsClose: "Cerrar el índice",
    contentsMobile: "Índice en el celular",
    close: "Cerrar",
    chapters: "Capítulos",
  },
  projectArchive: {
    description:
      "Proyectos para negocios chicos, además de aplicaciones y productos que desarrollé: sitios web, herramientas, automatizaciones y funciones de IA.",
    intro:
      "Proyectos para clientes y productos propios. En cada caso explico cuál era el problema, qué decidí y qué entregué.",
    technologies: "Tecnologías que usé:",
    groups: {
      "small-business-work": {
        label: "Proyectos para negocios chicos",
        description: "Sitios web, tiendas online y herramientas de gestión para negocios chicos.",
      },
      "client-product-work": {
        label: "Startups y productos",
        description:
          "Trabajos que hice con fundadores, desde publicar una aplicación hasta mantenerla y mejorarla después.",
      },
      "products-experiments": {
        label: "Productos y experimentos",
        description:
          "Productos propios y prototipos que hice para probar ideas con software que ya se puede usar.",
      },
    },
  },
  projectDetail: {
    project: "Proyecto",
    breadcrumb: "Ubicación en el sitio",
    engagement: "Tipo de trabajo",
    responsibility: "Mi responsabilidad",
    role: "Mi función",
    status: "Estado",
    year: "Año",
    liveDemo: "Demo disponible",
    liveProduct: "Producto disponible",
    tryDemo: "Probá la demo",
    visitProduct: "Visitá el producto",
    repository: "Ver el repositorio",
    visual: "Imagen del proyecto",
    facts: "Datos del proyecto",
    builtWith: "Tecnologías que usé",
    technologies: "Tecnologías principales",
    feedback: "Opinión del cliente",
    workingTogether: "Qué dice el cliente",
  },
  imageViewer: {
    expanded: "Imagen ampliada",
    close: "Cerrar la imagen",
    view: "Vista de la imagen",
    fit: "Ajustar a la pantalla",
    full: "Tamaño original",
    zoomOut: "Reducir la imagen",
    zoomIn: "Ampliar la imagen",
    zoom: "Nivel de ampliación",
    original: "Abrir la imagen original",
    scroll: "Imagen. Desplazate para verla completa cuando está ampliada",
    preview: "Ampliar",
  },
  seo: {
    defaultImageAlt:
      "Retrato de Hanif Carroll junto al texto en inglés Freelance Software Engineer.",
    previewImage: "Imagen de vista previa",
  },
  action: {
    bookCall: "Agendá una llamada",
    bookCallInline: "agendar una llamada",
    emailMe: "Escribime",
    emailProblem: "Contame qué problema tenés",
    seeProjects: "Ver proyectos",
  },
  closing: {
    title: "¿Necesitás un sitio web, una herramienta o una automatización para tu negocio?",
    body: "Contame qué problema tenés en tu negocio o agendá una llamada. Lo reviso gratis y te digo cómo lo resolvería y cuánto costaría.",
    agencyPrompt: "¿Trabajás en una agencia?",
    agencyLink: "También desarrollo proyectos a nombre de tu agencia.",
  },
  service: {
    general:
      "Primero veo cómo funciona tu negocio y qué podría mejorar con tecnología. Después desarrollo o configuro lo que necesitás. Tengo disponibilidad para proyectos nuevos.",
    systemsTitle: "¿Buscás un ingeniero de software para un proyecto?",
    systemsBody:
      "Trabajo con negocios chicos desde la primera charla hasta que el equipo puede usar el software que desarrollé o configuré. Tengo disponibilidad para proyectos nuevos.",
    caseTitle: "¿Necesitás algo parecido para tu negocio?",
  },
  price: "El precio mínimo de un proyecto es de USD 500. Te doy un precio fijo antes de empezar.",
  date: { lastUpdated: "Última actualización" },
  contact: {
    title: "Contame qué problema tenés en tu negocio | Hanif Carroll",
    description:
      "Contame qué problema tenés en tu negocio. Lo reviso gratis y te respondo con una propuesta y un precio.",
    heading: "Contame qué problema tenés",
    intro:
      "Contame en pocas frases qué está pasando en tu negocio. Lo reviso gratis y te respondo por correo para decirte cómo lo resolvería y cuánto costaría.",
    fields: {
      name: "Tu nombre",
      email: "Tu correo electrónico",
      business: "Nombre o sitio web de tu negocio (opcional)",
      message: "¿Cuál es el problema?",
    },
    honeypot: "Dejá este campo vacío",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    directEmail: "También podés escribirme a",
    or: "o",
    errors: {
      name: "Escribí tu nombre.",
      email: "Ingresá un correo electrónico válido.",
      message: "Contame cuál es el problema.",
      nameTooLong: `Escribí tu nombre en hasta ${CONTACT_LIMITS.name} caracteres.`,
      businessTooLong: `Escribí el nombre o sitio web de tu negocio en hasta ${CONTACT_LIMITS.business} caracteres.`,
      messageTooLong: `Escribí tu mensaje en hasta ${CONTACT_LIMITS.message.toLocaleString("es-AR")} caracteres.`,
    },
    successHeading: "Mensaje enviado",
    successBody: "Gracias. Recibí tu mensaje y te voy a responder por correo.",
    failure: `No se pudo enviar tu mensaje. Intentá de nuevo o escribime a ${EMAIL}.`,
    invalidHeading: "Revisá el formulario",
    failedHeading: "No se pudo enviar tu mensaje",
    home: "Volvé al inicio",
  },
} satisfies typeof en;
