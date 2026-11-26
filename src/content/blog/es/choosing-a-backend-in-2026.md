---
title: "Cómo elegir un backend en 2026: ¿Convex, InsForge o Supabase?"
description: "Una comparación práctica de tres plataformas de backend para desarrolladores independientes y CTO de startups. Cuándo usar cada una, ejemplos de código y mi opinión después de trabajar con Supabase."
pubDate: 2026-01-15
hidden: true
tags: ["backend", "supabase", "convex", "insforge", "comparison"]
ctaVariant: general
---

Necesitás un backend. Supabase era la opción que ya conocía y usaba por defecto.

Acababa de armar con Supabase una aplicación de eventos que usa IA y me había gustado usarlo. Pero seguía escuchando a desarrolladores hablar muy bien de Convex e InsForge.

Me dio curiosidad. ¿Qué tienen de especial? ¿En qué casos elegirías una de estas opciones en vez de Supabase?

Comparé las tres según las condiciones que suelen determinar qué backend conviene: el modelo de datos, el funcionamiento en tiempo real, la madurez y el flujo de desarrollo.

---

## Resumen <!-- heading-id: the-short-version -->

- **Supabase** es la opción segura y madura. Usa PostgreSQL, tiene la comunidad más grande y ya se probó a gran escala.
- **Convex** conviene más si el tiempo real es la función principal, no un agregado. Las consultas se actualizan automáticamente sin configuración.
- **InsForge** sirve para desarrollar con IA cuando querés que el agente controle la infraestructura por MCP en vez de limitarse a generar código.
- Las tres plataformas son de código abierto y podés alojarlas por tu cuenta.
- **Mi recomendación:** empezá por el requisito más importante (¿SQL? ¿Tiempo real? ¿Desarrollo con IA?) y elegí en función de eso.

## A quién le sirve esta comparación <!-- heading-id: who-this-is-for -->

Esta comparación es para:

- **Desarrolladores independientes y fundadores que trabajan solos** que están eligiendo las tecnologías para su próximo proyecto paralelo
- **CTO de startups** que evalúan backends para un producto nuevo
- **Personas que programan con IA** (usuarios de Cursor o Claude Code) que quieren saber si vale la pena probar InsForge
- **Usuarios de Supabase** que quieren saber si hay una opción mejor

Si trabajás en una empresa con un equipo dedicado a DevOps o tenés que cumplir requisitos de instalación en tu propia infraestructura (HIPAA o gobierno), probablemente esta comparación no te sirva.

## Las tres plataformas <!-- heading-id: the-three-contenders -->

Resumen de las opciones:

| | **Supabase** | **Convex** | **InsForge** |
| --- | --- | --- | --- |
| **En una frase** | Postgres para todo | Tiempo real por defecto | Backend que tu agente de IA puede controlar |
| **Base de datos** | PostgreSQL (relacional) | Base de documentos (reactiva) | PostgreSQL |
| **Año de fundación** | 2020 | 2021 | 2025 |
| **Código abierto** | Sí | Sí | Sí |
| **Para qué conviene más** | Aplicaciones CRUD y equipos que prefieren SQL | Aplicaciones colaborativas o en tiempo real | Desarrollo con IA en Cursor o Claude Code |

## Supabase: la opción madura <!-- heading-id: supabase-the-mature-choice -->

Supabase se convirtió en la opción más común por un motivo. Con un solo panel podés usar PostgreSQL con una buena interfaz, autenticación, almacenamiento y funciones en tiempo real.

### Ventajas <!-- heading-id: what-it-does-well -->

**Base en PostgreSQL.** Podés usar SQL, transacciones ACID, joins y todas las extensiones de Postgres. Si sabés SQL, podés empezar a trabajar enseguida.

**Plan gratis generoso.** 50.000 usuarios activos por mes, solicitudes a la API sin límite y 500 MB de almacenamiento para la base de datos. Podés armar y publicar un producto real sin pagar nada.

**Herramientas incluidas.** Tenés autenticación, almacenamiento, tiempo real y funciones de borde en un solo lugar. No tenés que integrar cinco servicios distintos.

**La comunidad más grande.** Si tenés un problema, probablemente alguien de Stack Overflow o Reddit ya lo resolvió. La documentación es excelente y hay tutoriales para casi todos los frameworks.

**Alojamiento propio.** No quedás atado al proveedor. Si la versión alojada ya no te alcanza o necesitás más control, podés ejecutarla por tu cuenta.

### Limitaciones <!-- heading-id: where-it-falls-short -->

**Responsabilidad compartida.** En Supabase, vos te ocupás de proteger el acceso a los datos con políticas de seguridad por fila (Row Level Security o RLS), mantener el rendimiento de las consultas con los índices adecuados y administrar las migraciones del esquema. Tenés mucho control, pero también más lugares donde pueden aparecer errores.

**El tiempo real requiere configuración.** La función de tiempo real de Supabase lee el WAL (registro de escritura anticipada) de PostgreSQL, no tus consultas directamente. Tenés que activarla para cada tabla y decidir con cuidado cómo estructurar las suscripciones.

**Complejidad de RLS.** Con la seguridad por fila podés controlar el acceso en detalle, pero las políticas pueden volverse complejas a medida que crece tu aplicación. En mi proyecto tuve un problema de recursión. Las políticas de RLS consultaban una tabla que también tenía políticas de RLS y eso provocaba un bucle infinito. La solución fue simple (una función SECURITY DEFINER), pero es el tipo de problema que cuesta prever hasta que pasa.

> **Consejo:** si no tenés cuidado, las políticas de RLS también pueden reducir mucho el rendimiento. Crear un índice para las columnas que usás en las políticas (como `user_id`) puede hacer que una consulta sea 100 veces más rápida en tablas grandes. Envolver las funciones en `select` (por ejemplo, `(select auth.uid()) = user_id` en vez de `auth.uid() = user_id`) permite que el optimizador guarde el resultado en caché en vez de llamar a la función por cada fila.

**El uso sin conexión queda a tu cargo.** Si la aplicación tiene que funcionar sin conexión y sincronizarse más tarde, vas a tener que desarrollar esa parte o agregar otra biblioteca.

**Tenés que integrar las partes.** Supabase incluye todos los componentes, pero al usarlos puede parecer que estás conectando herramientas distintas en vez de usar una plataforma unificada. La autenticación, la base de datos, el almacenamiento y el tiempo real funcionan juntos, pero no se usan como un solo producto del mismo modo que en algunas alternativas.

### Mi experiencia al desarrollar BA Events <!-- heading-id: my-experience-building-ba-events -->

Usé Supabase para desarrollar BA Events, una aplicación con IA para encontrar eventos en Buenos Aires. Esto fue lo que observé:

**La autenticación funcionó bien** una vez que entendí el flujo PKCE para enlaces de acceso. Seguí la documentación y, en una tarde, dejé funcionando la autenticación con correo y contraseña y con enlaces de acceso.

**Tuve que corregir un error de RLS.** Me pasó lo de la recursión: mi comprobación de acceso de administrador causaba un bucle infinito. Una vez que entendí el problema, lo resolví con una función SECURITY DEFINER simple. No fue grave, pero conviene tenerlo en cuenta.

**En general, pude trabajar sin problemas.** Pasé de no tener nada a desplegar un MVP en poco tiempo. La base en SQL me facilitó las consultas complejas y en ningún momento sentí que la plataforma me limitara.

## Convex: tiempo real por defecto <!-- heading-id: convex-real-time-by-default -->

El equipo de Convex eligió otro enfoque. En vez de agregar tiempo real a una base de datos tradicional, diseñó todo el sistema para reaccionar a cambios desde el primer día.

### Ventajas <!-- heading-id: what-it-does-well-1 -->

**Tiempo real por defecto.** No tenés que activar el tiempo real ni configurar WebSockets. Cada consulta ya es una suscripción que se actualiza cuando cambian los datos.

```typescript
// This automatically updates when data changes
const events = useQuery(api.events.list);
```

No hay canales ni suscripciones que administrar, ni tareas de limpieza. Cuando cambian los datos, se actualiza la interfaz.

**TypeScript de principio a fin.** Convex genera los tipos automáticamente a partir de tu esquema. Los tipos del frontend coinciden con la estructura exacta de tus datos y el IDE marca errores antes de que ejecutes nada.

```typescript
// Schema defines your types
const events = defineTable({
  name: v.string(),
  date: v.string(),
  venueId: v.id("venues"),
});

// Frontend automatically knows the shape
const events = useQuery(api.events.list);
// events is typed as Array<{ name: string, date: string, venueId: Id<"venues"> }>
```

**Baja latencia con muchas conexiones.** Convex informa una latencia de menos de 50 ms con 5.000 conexiones simultáneas. Es importante para aplicaciones en tiempo real donde la velocidad de respuesta importa.

**Lógica del backend en funciones.** El código de tu servidor consiste en funciones de TypeScript. No tenés que definir endpoints REST ni administrar rutas de API.

```typescript
export const create = mutation({
  args: { name: v.string(), date: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert("events", args);
  },
});
```

**Código abierto y alojamiento propio.** Podés alojarlo por tu cuenta si lo necesitás por motivos de cumplimiento o costo. Convex publicó el código del backend, el panel y la CLI a principios de 2025.

**Responsabilidad a cargo de la plataforma.** Convex se ocupa de la autorización, la caché y la consistencia. Cuando escribís una consulta o una mutación, Convex garantiza que se ejecute correctamente sin que tengas que administrar políticas de RLS ni invalidar la caché. Hay menos formas de introducir errores.

**Actions para usar API externas.** Si necesitás llamar a servicios de terceros (Stripe, OpenAI o SendGrid), Convex ofrece una función específica llamada Actions. Las acciones se ejecutan en un contexto separado de las consultas a la base de datos. Así, tus operaciones principales con datos siguen siendo rápidas y deterministas.

```typescript
// Actions for external API calls
export const sendEmail = action({
  args: { to: v.string(), subject: v.string() },
  handler: async (ctx, args) => {
    await sendgrid.send({ to: args.to, subject: args.subject });
    // Can also call mutations to update database
    await ctx.runMutation(api.emails.markSent, { to: args.to });
  },
});
```

**Esquema en TypeScript.** En vez de escribir migraciones de SQL, definís el esquema en TypeScript y Convex genera todo lo demás. Ya no tenés que preguntar «¿ejecuté esa migración?». El esquema queda en el código y lo versionás con tu aplicación.

**Funciones de IA y RAG incluidas.** Convex incluye búsqueda vectorial y componentes de RAG. Podés guardar embeddings, hacer búsquedas semánticas y agregar funciones de IA sin integrar una base de datos vectorial aparte. Según Convex, el 80 % de las aplicaciones hechas en su plataforma usan IA, y las herramientas están orientadas a ese uso.

### Limitaciones <!-- heading-id: where-it-falls-short-1 -->

**Base de documentos, no relacional.** No hay SQL. Si venís de Postgres y pensás en joins y claves foráneas, en Convex tenés que pensar de otra forma. Las relaciones se modelan distinto.

**Límite de ancho de banda.** El plan gratis tiene un límite de 1 GB de ancho de banda. Algunos desarrolladores lo alcanzaron antes de lo previsto. Conviene medirlo si tu aplicación hace muchas lecturas.

**La paginación y la caché necesitan mejoras.** Algunos desarrolladores dicen que la caché no funciona como esperaban y que las consultas paginadas no siempre la aprovechan bien.

**Sin análisis de gran volumen.** Si necesitás hacer agregaciones grandes o consultas del tipo map-reduce, vas a tener que enviar los datos a otra base dedicada a análisis.

**Ecosistema más chico.** Hay menos tutoriales, menos respuestas en Stack Overflow y menos gente que haya tenido tu mismo problema. La comunidad crece, pero todavía no tiene el tamaño de la de Supabase.

### Cuándo conviene usar Convex <!-- heading-id: when-convex-shines -->

Convex está pensado para aplicaciones donde el tiempo real no es una función más, sino la función principal:

- **Herramientas de colaboración** (del estilo de Figma, con edición simultánea)
- **Aplicaciones de chat**
- **Paneles que se actualizan en el momento**
- **Juegos multijugador**
- **Cualquier aplicación donde los usuarios esperan actualizaciones instantáneas**

Si armás una aplicación CRUD tradicional donde el tiempo real sería útil pero no esencial, Convex puede ser más de lo que necesitás. Pero si el valor principal de tu aplicación depende de actualizaciones inmediatas, con Convex evitás bastante complejidad.

## InsForge: un backend diseñado para agentes <!-- heading-id: insforge-the-agent-native-backend -->

InsForge es el más nuevo. Salió en noviembre de 2025. Pero que esté diseñado para IA no significa que agregue funciones de IA a tu aplicación. Significa que los agentes de IA pueden controlar la infraestructura de tu backend.

![Página de inicio de InsForge con funciones de backend diseñadas para IA](/blog/backend-comparison/insforge-homepage.png)

### El problema que resuelve InsForge <!-- heading-id: the-problem-insforge-solves -->

El equipo de InsForge parte de esta idea: **programar ahora es lo más fácil.** Con Cursor, Claude Code o herramientas parecidas, podés armar un prototipo funcional en horas. Pero para tenerlo listo para producción todavía hay que hacer trabajo manual:

- Cambiar de pestaña para abrir los paneles de Supabase o Firebase
- Copiar claves de API y pegarlas en archivos `.env`
- Hacer clic en interfaces gráficas para configurar proveedores de OAuth
- Crear tablas de la base de datos desde interfaces web
- Escribir políticas de RLS que son difíciles de depurar con agentes de IA

Un agente de IA puede indicarte cada paso («andá a esta URL, hacé clic en ese botón, pegá esta clave»), pero no puede hacerlos por su cuenta. Las plataformas existentes se diseñaron para personas que hacen clic en paneles, no para agentes que llaman a una API.

### Ventajas <!-- heading-id: what-it-does-well-2 -->

**Arquitectura centrada en MCP.** InsForge ofrece acceso a todo el backend mediante Model Context Protocol (MCP). Podés conectar un agente de IA directamente para crear tablas, configurar la autenticación, administrar el almacenamiento y desplegar funciones. Todo se hace por código sin que tengas que usar un panel.

```bash
# Connect Claude Code to InsForge via MCP
npx @insforge/install --client claude-code \
  --env API_KEY=ik_your_api_key \
  --env API_BASE_URL=https://your-app.insforge.app
```

**Podés delegar el desarrollo al agente.** Pedile a Claude Code «armame un clon de Instagram» y puede hacer esto sin intervención:

- Crear tablas de usuarios, publicaciones, comentarios y me gusta
- Configurar Google OAuth y autenticación con correo y contraseña
- Configurar contenedores de almacenamiento de imágenes
- Generar el frontend completo

No tenés que recorrer el panel ni copiar y pegar claves de API. Podés delegar toda la configuración de infraestructura al agente.

**API uniformes y predecibles.** Todos los endpoints siguen los mismos patrones y devuelven respuestas deterministas. Esto reduce los datos o instrucciones que genera la IA sin respaldo. Una vez que le das al agente la información sobre el sistema, puede generar código correcto sin mucho contexto.

**RLS se maneja de otra forma.** La seguridad por fila de Supabase está activada por defecto, lo que hace que las consultas fallen si no hay políticas. No confirmé cómo aplica InsForge el acceso por fila, así que todavía no puedo comparar su modelo de seguridad con el de RLS de Supabase.

### Limitaciones <!-- heading-id: where-it-falls-short-2 -->

**Muy nuevo.** La empresa se fundó en julio de 2025. Sus fundadores habían trabajado como ingenieros en Amazon, Databricks, Meta y TikTok. Consiguió USD 1,5 millones de financiación en 2025. El equipo es sólido, pero la plataforma se probó en menos situaciones, por lo que hay más incertidumbre.

**Limitado a ciertas herramientas de IA.** La integración por MCP funciona mejor con Claude Code, Cursor y Windsurf. Si no usás esas herramientas, perdés el beneficio principal.

**Menos funciones.** InsForge salió deliberadamente solo con autenticación, base de datos y almacenamiento (muchas menos funciones que Supabase). El equipo quiere resolver primero el uso con agentes de IA.

**Documentación en etapa inicial.** Si encontrás casos poco comunes, quizás no estén documentados. La comunidad es chica, pero crece.

### Cuándo conviene usar InsForge <!-- heading-id: when-insforge-shines -->

InsForge tiene sentido cuando:

- **Desarrollás principalmente con asistentes de código con IA** (Cursor, Claude Code o Windsurf)
- **No querés alternar** entre tu editor y los paneles del backend
- **Te importa más tener un MVP pronto que la escala en producción** (siempre podés migrar más adelante)
- **Estás armando un prototipo** y querés hacer la menor cantidad posible de trabajo manual de infraestructura
- **Querés ver** cómo evoluciona el desarrollo con asistentes de IA

Si no usás herramientas de IA para programar, InsForge pierde su ventaja principal. Te conviene más el panel de Supabase porque es más maduro. Pero si trabajás casi siempre en Cursor o Claude Code, con InsForge podés evitar trabajo manual que otros backends todavía requieren.

## Comparación de código <!-- heading-id: code-comparison -->

Estas son las mismas tareas en las tres plataformas.

### Suscribirte a datos en tiempo real <!-- heading-id: real-time-data-subscription -->

**Supabase:**

```typescript
// Setup: enable realtime on table first
const channel = supabase
  .channel("events")
  .on("postgres_changes", { event: "*", schema: "public", table: "events" }, (payload) => {
    console.log("Change received:", payload);
    // Manually update your state
  })
  .subscribe();

// Don't forget to unsubscribe
return () => supabase.removeChannel(channel);
```

**Convex:**

```typescript
// Just works
const events = useQuery(api.events.list);
// Automatically re-renders when data changes
// No cleanup needed
```

**InsForge:**

```typescript
// Similar to Supabase. InsForge uses PostgreSQL under the hood
const { data } = useInsForge("events", { realtime: true });
// The difference: your AI agent set this up without you touching a dashboard
```

![Diagrama del flujo de datos en tiempo real que compara Supabase, Convex e InsForge](/blog/backend-comparison/realtime-dataflow-diagram.jpg)

### Crear un registro <!-- heading-id: creating-a-record -->

**Supabase:**

```typescript
const { data, error } = await supabase
  .from("events")
  .insert({ name: "Concert", date: "2025-01-15" })
  .select();

if (error) {
  console.error("Error:", error);
}
```

**Convex:**

```typescript
const createEvent = useMutation(api.events.create);

// Type-safe, auto-validated against schema
await createEvent({ name: "Concert", date: "2025-01-15" });
```

**InsForge:**

```typescript
// The code looks similar to Supabase
await insforge.events.create({ name: "Concert", date: "2025-01-15" });

// But the setup was different: you told Claude Code "add an events table"
// and it created the table, types, and API via MCP. No dashboard needed
```

## Comparación directa <!-- heading-id: head-to-head-comparison -->

### Funciones en tiempo real <!-- heading-id: real-time-capabilities -->

| | Supabase | Convex | InsForge |
| --- | --- | --- | --- |
| **Configuración necesaria** | Sí (se activa por tabla) | Ninguna | Mínima |
| **Mecanismo** | Usa el WAL | Suscripciones nativas | WebSocket + LISTEN/NOTIFY |
| **Latencia con carga** | 100 a 200 ms (p99) | Menos de 50 ms | Varía |
| **Cómo funciona** | Te suscribís a eventos | Las consultas se actualizan solas | Tiempo real estándar |

### Experiencia de desarrollo <!-- heading-id: developer-experience -->

| | Supabase | Convex | InsForge |
| --- | --- | --- | --- |
| **Seguridad de tipos** | Manual o generada | Automática de principio a fin | Estándar |
| **Dificultad de aprendizaje** | Baja si sabés SQL | Media (otra forma de pensar los datos) | Baja si usás herramientas de IA |
| **Cómo se configura** | Panel y copiar y pegar | CLI y código | Agente de IA por MCP |
| **Documentación** | Excelente | Buena | En expansión |
| **Tamaño de la comunidad** | Grande | Mediano | Chico |

### Madurez y riesgo <!-- heading-id: maturity-and-risk -->

| | Supabase | Convex | InsForge |
| --- | --- | --- | --- |
| **Antigüedad** | 5 años | 4 años | Menos de 1 año |
| **Financiación** | USD 116 millones o más | USD 26 millones | USD 1,5 millones |
| **Uso en producción** | Miles de aplicaciones | En aumento | Primeros usuarios |
| **Alojamiento propio** | Sí | Sí | Sí |

![Cuadro comparativo de Supabase, Convex e InsForge](/blog/backend-comparison/comparison-chart.jpg)

## Cómo elegir <!-- heading-id: decision-framework -->

### Cuándo elegir Supabase <!-- heading-id: choose-supabase-if -->

- Necesitás SQL y un modelo de datos relacional.
- Te importa el ecosistema de Postgres: las extensiones, las herramientas y lo familiar que te resulta.
- El tiempo real te vendría bien, pero no es tu función principal.
- Querés contar con la comunidad más grande para resolver problemas.
- Quizás necesites alojarlo por tu cuenta más adelante.
- Estás desarrollando una aplicación CRUD tradicional.

### Cuándo elegir Convex <!-- heading-id: choose-convex-if -->

- El tiempo real es la función principal de tu aplicación.
- Estás desarrollando experiencias colaborativas o multijugador.
- Te gusta mucho TypeScript y querés seguridad de tipos de principio a fin sin trabajo adicional.
- Querés la forma más simple de trabajar con reactividad.
- Te sirve una base de documentos sin SQL.
- Querés que la interfaz se actualice sin más configuración cuando cambian los datos.

### Cuándo elegir InsForge <!-- heading-id: choose-insforge-if -->

- Trabajás casi todo el tiempo en **Cursor, Claude Code o Windsurf** y no querés cambiar al panel.
- Querés **usar tu agente de IA para configurar la infraestructura**, no solo para generar código.
- Por ahora te importa más tener un MVP rápido que la escala en producción.
- No te molesta estar entre los primeros en usar herramientas que se conectan por MCP.
- Estás armando un prototipo y podés migrar a Supabase más adelante si hace falta.
- Querés ver cómo es desarrollar con herramientas diseñadas para agentes.

## Qué elegiría para mi próximo proyecto <!-- heading-id: what-id-pick-for-my-next-project -->

Desarrollé BA Events con Supabase. Después de publicarlo, llegué a estas conclusiones:

**Qué funcionó:** la autenticación fue confiable una vez configurada. La base en SQL me facilitó las consultas complejas. Podía escribir joins y agregaciones sin dificultad. Las respuestas de la comunidad me ahorraron horas cuando encontré casos poco comunes.

**Para mi próximo proyecto:**

Si **depende mucho del tiempo real** (chat, colaboración o actualizaciones inmediatas como función principal), usaría **Convex**. Me interesa que las consultas se actualicen sin configuración adicional. Prefiero dedicar tiempo a las funciones en vez de configurar WebSockets.

Si es una **aplicación CRUD tradicional** con relaciones complejas entre datos, seguiría con **Supabase**. SQL ya se probó en muchas aplicaciones, el ecosistema es enorme y la plataforma hace lo que necesito.

Si **quiero armar un prototipo rápido** con Claude Code y delegar todo al agente (incluida la configuración de infraestructura), probaría **InsForge**. La integración por MCP me permite hacer todo desde el editor. Todavía está en una etapa inicial, pero vale la pena probar ese flujo donde delegás todo al agente.

No hay una opción que sea la mejor para todos. La elección depende de lo que estés desarrollando y de cómo trabajás.

## Preguntas frecuentes <!-- heading-id: faq -->

### ¿Puedo migrar de una plataforma a otra más adelante? <!-- heading-id: can-i-migrate-from-one-platform-to-another-later -->

Sí, pero hay diferencias. Supabase e InsForge usan PostgreSQL, así que migrar entre los dos es relativamente simple: exportá el esquema y los datos, y ajustá el código del cliente. Convex usa una base de documentos. Para migrar desde o hacia Convex, tenés que reestructurar el modelo de datos y reescribir las consultas. Tenelo en cuenta si estás armando un prototipo.

### ¿Cuál tiene el mejor plan gratis? <!-- heading-id: which-has-the-best-free-tier -->

El de Supabase es el más generoso para usos típicos: 50.000 usuarios activos por mes, solicitudes a la API sin límite y una base de datos de 500 MB. El plan gratis de Convex ofrece buenas condiciones, pero tiene un límite de 1 GB de ancho de banda que algunos desarrolladores alcanzan antes de lo previsto. El plan gratis de InsForge es competitivo, pero la plataforma es más nueva y los límites pueden cambiar.

### ¿Necesito saber SQL para usar alguna de estas plataformas? <!-- heading-id: do-i-need-to-know-sql-for-any-of-these -->

Solo Supabase requiere que sepas SQL. Convex usa funciones de TypeScript para todas las operaciones con datos, sin SQL. InsForge usa PostgreSQL, pero si lo usás como está previsto, podés delegar al agente de IA la generación de la mayor parte del SQL.

### ¿Voy a quedar atado al proveedor? <!-- heading-id: what-about-vendor-lock-in -->

Las tres plataformas son de código abierto y podés alojarlas por tu cuenta, lo que reduce el riesgo de depender de un proveedor. Supabase tiene la opción de alojamiento propio más madura. Convex abrió su código a principios de 2025. InsForge también es de código abierto. El mayor riesgo de dependencia está en cómo se usan la API y el SDK, no en la infraestructura.

## Probá el requisito que más importa <!-- heading-id: try-the-constraint-that-matters -->

Antes de elegir, desarrollá la misma función chica con las dos opciones que mejor se ajusten a tu requisito principal. Probá una consulta relacional si importa SQL, una vista con actualizaciones inmediatas si importa el tiempo real o un cambio de infraestructura si importa que el agente pueda controlarla. Vas a ver mejor la diferencia en una función que funcione que en otra tabla comparativa.

---

**¿Querés ver una aplicación que usa Supabase?** Mirá [BA Events](https://ba-events.com), la aplicación que hice con esa plataforma. Si te interesan más comparaciones como esta, [seguime en X](https://x.com/hanifcarroll), donde cuento lo que voy aprendiendo mientras desarrollo.
