// Catalog copy for entries that still link to English. Remove each row once its Spanish page ships.
export const deferredGuideCopy: Record<string, { title: string; summary: string; tools?: string[] }> = {
  "account-ownership": {
    title: "Quién es dueño de tus cuentas y tu dominio",
    summary: "Cómo asegurarte de que el negocio controle su dominio, su sitio web y sus otras cuentas en vez de un diseñador o un exempleado.",
    tools: ["Un correo del negocio para las cuentas", "Un gestor de contraseñas", "Una lista simple de cuentas"],
  },
  "ai-assistants": {
    title: "Asistentes de IA para el trabajo diario",
    summary: "Aplicaciones de chat como ChatGPT. Escribís un pedido y recibís un borrador, un resumen o una explicación que podés revisar y usar.",
  },
  backups: {
    title: "Copias de seguridad",
    summary: "Copias adicionales de tus archivos y registros. Se guardan en otro lugar para que puedas recuperarlos si los perdés.",
    tools: ["Copias de seguridad integradas", "Servicios de copias de seguridad online", "Exportaciones de tus aplicaciones"],
  },
  "connecting-apps": {
    title: "Cómo conectar aplicaciones (integraciones y API)",
    summary: "Qué son una integración y una API, en palabras simples, y cómo comprobar si podés conectar dos de las aplicaciones que usás.",
    tools: ["La página de integraciones de la aplicación", "Una herramienta de automatización", "Una conexión a medida"],
  },
  "custom-software": {
    title: "Cuándo contratar a un desarrollador",
    summary: "Cuándo alcanza con una aplicación que ya existe y cuándo vale la pena pagar por una herramienta chica hecha para tu negocio.",
    tools: ["Una aplicación con ajustes de configuración", "Una aplicación con automatizaciones", "Una herramienta chica a medida", "Una aplicación a medida"],
  },
  "domain-and-email": {
    title: "Dominio y correo del negocio",
    summary: "Tu propia dirección web y direcciones de correo que la usan, como hola@yourbusiness.com.",
  },
  "e-signatures": {
    title: "Contratos y firmas electrónicas",
    summary: "Aplicaciones para que tus clientes firmen presupuestos y contratos desde el celular o la computadora. Podés consultar quién firmó y cuándo.",
  },
  "email-marketing": {
    title: "Marketing por correo y boletines",
    summary: "Servicios para enviar un mismo correo a toda tu lista de clientes. Incluyen un formulario de suscripción y una forma de darse de baja.",
  },
  "forms-and-surveys": {
    title: "Formularios y encuestas",
    summary: "Formularios online para pedir los mismos datos a cada cliente y guardar las respuestas en una sola tabla.",
  },
  "google-business-profile": {
    title: "Google Business Profile y reseñas",
    summary: "La ficha con tus horarios, dirección, fotos y reseñas que aparece en Google Search y Maps.",
  },
  "inventory-and-orders": {
    title: "Inventario y pedidos",
    summary: "Una lista del stock disponible y de todos los pedidos que se actualiza cada vez que vendés o reponés mercadería.",
    tools: ["Tu sistema de punto de venta o tu plataforma de tienda", "Zoho Inventory", "Sortly", "Una planilla compartida"],
  },
  "invoicing-and-accounting": {
    title: "Facturación y contabilidad",
    summary: "Aplicaciones para emitir facturas, registrar cuánto ganás y cuánto gastás, y darle a tu contador los informes que necesita.",
    tools: ["QuickBooks Online", "Xero", "Zoho Books", "ARCA (antes AFIP)"],
  },
  "online-stores": {
    title: "Tiendas online",
    summary: "Un sitio web donde tus clientes pueden ver tus productos, pagar y elegir entre envío y retiro.",
  },
  "saas-subscriptions": {
    title: "Suscripciones de software (SaaS)",
    summary: "Una empresa ejecuta el software en sus propias computadoras. Vos lo usás desde un navegador o una aplicación y normalmente pagás por mes o por año.",
    tools: ["Por usuario", "Por local o cuenta", "Según el uso", "Planes gratis"],
  },
  "shared-files": {
    title: "Archivos y documentos compartidos",
    summary: "Una sola carpeta online para los archivos del negocio. Todo el equipo edita la misma copia de cada documento.",
    tools: ["Google Drive", "Microsoft OneDrive y SharePoint", "Dropbox"],
  },
  "social-media-scheduling": {
    title: "Programación de publicaciones en redes sociales",
    summary: "Aplicaciones en las que escribís publicaciones con anticipación y definís en qué día y horario se publica cada una.",
  },
  "staff-scheduling": {
    title: "Horarios del equipo",
    summary: "Aplicaciones para armar los horarios semanales. El equipo ve sus turnos en el celular y vos aprobás los cambios de turno entre personas.",
  },
  "team-chat-and-tasks": {
    title: "Chat y tareas del equipo",
    summary: "Un chat para el trabajo y una lista de tareas compartida donde podés ver quién está haciendo cada tarea y cuáles ya se terminaron.",
  },
  "the-cloud": {
    title: "La nube",
    summary: "Computadoras que una empresa opera en sus centros de datos. Las usás por internet en vez de comprar las tuyas.",
    tools: ["Las aplicaciones en la nube que ya usás", "Almacenamiento en la nube", "Alojamiento en la nube"],
  },
  "two-factor-sign-in": {
    title: "Inicio de sesión con dos factores",
    summary: "Una segunda verificación al iniciar sesión, como un código de una aplicación. Si alguien te roba la contraseña, no puede entrar solo con eso.",
    tools: ["Una aplicación de autenticación", "Claves de acceso (passkeys)", "Códigos por mensaje de texto"],
  },
};
