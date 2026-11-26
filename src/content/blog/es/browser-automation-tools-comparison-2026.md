---
title: "Automatización del navegador con agentes de IA: ChatGPT Chrome, Playwriter y agent-browser"
seoTitle: "ChatGPT Chrome, Playwriter y agent-browser: prueba de 2026"
description: "Compará ChatGPT Chrome Extension, Playwriter y agent-browser de Vercel para trabajar con sesiones abiertas en el navegador, ejecutar scripts y hacer tareas con IA."
pubDate: 2026-01-16
updatedDate: 2026-07-27
tags: ["ai", "browser-automation", "tools", "comparison", "playwright"]
ctaVariant: systemsBuild
---

Volví a hacer esta comparación el 27 de julio de 2026. El artículo original incluía Claude in Chrome, pero ahora no puedo probar Claude. Para esta actualización comparé las versiones actuales de ChatGPT Chrome Extension, Playwriter y agent-browser de Vercel con una búsqueda real en Wikipedia.

Mi recomendación:

- Usá **ChatGPT Chrome Extension** para tareas dentro de una conversación que necesitan las pestañas y las sesiones que ya tenés abiertas en Chrome.
- Usá **agent-browser** para scripts que tenés que ejecutar más de una vez y que tienen que correr solos en otro navegador.
- Usá **Playwriter** cuando un agente necesita controlar con más detalle la sesión de Chrome que ya estás usando.

## Tabla para elegir una herramienta <!-- heading-id: decision-table -->

| Criterio | ChatGPT Chrome Extension | Playwriter | agent-browser |
| --- | --- | --- | --- |
| **Tiempo para la tarea completa** | 1,95 s | 9,96 s, de los cuales 7,61 s fueron de espera mientras cargaba Wikipedia | 3,49 s, de los cuales 2,37 s fueron para iniciar el navegador y abrir Wikipedia |
| **¿Terminó la tarea?** | Sí | Sí | Sí |
| **Sitios donde ya iniciaste sesión** | Usa las pestañas y sesiones que ya tenés abiertas en Chrome | Usa tu Chrome de manera predeterminada. También puede usar otro navegador o uno en la nube | Usa otro navegador de manera predeterminada. Podés reutilizar un perfil de Chrome o una sesión guardada |
| **Scripts que se ejecutan solos** | Poco adecuado: está hecho para conversaciones, no para scripts que corren solos | Sirve cuando un script necesita controlar Chrome con detalle. Requiere una extensión y una conexión con Chrome | La opción más adecuada: está hecho para ejecutar scripts, usar otros navegadores y correr varios pasos juntos |
| **Cómo lo usa el agente** | Directamente en ChatGPT o Codex | Escribe y ejecuta código que controla Chrome | Envía comandos al navegador desde un script o una terminal |
| **Qué lee y qué captura** | El texto y los controles de la página, más una captura | El texto y los controles de la página, más una captura que incluye la barra de Playwriter | El texto y los controles de la página, más una captura. También puede agregar etiquetas numeradas |

Los tiempos se midieron de distintas maneras. Chrome y Playwriter midieron cuánto tardaron sus propias acciones. Yo medí agent-browser desde la terminal. En Playwriter, la mayor parte del tiempo correspondió a la espera mientras cargaba Wikipedia. En agent-browser, la mayor parte del tiempo correspondió al inicio del navegador y la apertura de la página.

## Qué probé <!-- heading-id: what-i-tested -->

Hice la misma tarea con cada herramienta en la [página principal de Wikipedia (en inglés)](https://en.wikipedia.org/wiki/Main_Page), sin modificar el sitio:

1. Abrir Wikipedia y confirmar la URL y el título.
2. Encontrar el campo de búsqueda.
3. Buscar `Browser automation`.
4. Confirmar que Wikipedia abre el artículo `Headless browser`.
5. Sacar una captura de lo que se ve en la página.
6. Pedirle a la herramienta que encuentre un botón que no existe, sin hacer clic en nada más.

Playwriter usó un ancho de página menor, donde el buscador aparecía primero como un enlace. Por eso hizo falta un clic adicional para mostrar el formulario. Las tres herramientas llegaron al mismo artículo.

Para el botón que faltaba, Chrome y Playwriter informaron que no estaba sin hacer clic en nada. agent-browser esperó un segundo y devolvió su mensaje habitual: `element not found`.

## Versiones que probé <!-- heading-id: versions-tested -->

Hice la prueba en una Mac con Apple Silicon y macOS 27.0.

Ejecuté Playwriter y agent-browser desde la terminal. Usé la extensión de Chrome dentro de ChatGPT o Codex.

| Herramienta | Versión que probé | Navegador de la prueba | Cómo la ejecuté |
| --- | --- | --- | --- |
| ChatGPT Chrome Extension | Compilación `26.721.41059` del complemento incluido | Chrome `150.0.0.0` | `@Chrome`, después `chrome.tabs.new()`, `tab.goto()`, `tab.playwright.domSnapshot()`, localizadores y `tab.screenshot()` |
| Playwriter | `0.4.0` | Chrome `150.0.0.0` | `$HOME/.bun/bin/playwriter`, sesión `8`, `snapshot()`, controles de Playwright y herramientas de captura |
| agent-browser | `0.33.0` | Chrome for Testing `148.0.7778.97` | `$HOME/.bun/bin/agent-browser`, sesión `portfolio-comparison-20260727-wikipedia`, limitada a Wikipedia, con controles del navegador y capturas |

Para la prueba de Chrome usé la extensión incluida en vez de un comando de terminal. En la [documentación de Chrome Extension de OpenAI (en inglés)](https://learn.chatgpt.com/docs/chrome-extension) podés consultar los permisos por sitio, el acceso a pestañas abiertas de Chrome y cómo usar `@Chrome`. La [documentación oficial de Playwriter (en inglés)](https://playwriter.dev/) explica la extensión, la línea de comandos, los controles detallados de Chrome y la opción de usar otro navegador. El [repositorio y la documentación de agent-browser (en inglés)](https://github.com/vercel-labs/agent-browser#readme) explican la línea de comandos, cómo ejecutar varios pasos juntos, las capturas con números, las sesiones separadas y las formas de reutilizar sesiones abiertas.

## Resultados <!-- heading-id: results -->

| Paso | ChatGPT Chrome Extension | Playwriter | agent-browser |
| --- | ---: | ---: | ---: |
| Abrir Wikipedia | 706 ms | 7,61 s | 2,37 s |
| Encontrar o abrir el buscador | 113 ms | 323 ms | 130 ms |
| Escribir la búsqueda | 61 ms | 25 ms | 200 ms |
| Buscar y confirmar | 1,01 s | 1,88 s | 300 ms |
| Sacar la captura | 67 ms | 121 ms | 490 ms |
| **Tarea completa** | **1,95 s** | **9,96 s** | **3,49 s** |
| Comprobar que falta un botón | 57 ms, sin coincidencias | 6 ms, sin coincidencias | 1,47 s, error `element not found` |

Con las tres herramientas pude abrir Wikipedia, usar su buscador, abrir el artículo `Headless browser`, comprobar el encabezado y obtener una captura legible.

### ChatGPT Chrome Extension <!-- heading-id: chatgpt-chrome-extension -->

La extensión mostró el campo de búsqueda y el encabezado final en una representación breve de la página en texto:

```text
- search:
  - searchbox "Search Wikipedia"
  - button "Search"
- main:
  - heading "Headless browser" [level=1]
```

La captura mostró la página de Wikipedia para escritorio sin etiquetas ni controles de la herramienta. Es lo que menos configuración requiere cuando arrancás una tarea en ChatGPT o Codex y necesitás las pestañas o sesiones que ya tenés abiertas en Chrome.

La extensión está hecha para tareas en el navegador dentro de una conversación, así que no es una buena opción para pruebas automatizadas o scripts que tienen que correr sin intervención de una persona.

### Playwriter <!-- heading-id: playwriter -->

Playwriter completó la tarea en 9,96 s después de abrir una sesión de navegador aparte. Wikipedia tardó 7,61 s en cargar y, con menos ancho, hizo falta un clic para mostrar el formulario de búsqueda.

La captura incluyó la barra de Playwriter. También funcionó la opción de sacar capturas con etiquetas, y la representación en texto incluyó los controles de la barra. Las etiquetas pueden ayudar a ubicar los controles, pero el agente también recibe la interfaz de la herramienta como parte de la página.

Al principio, la conexión local del navegador ya estaba en uso. Playwriter reinició esa conexión y después completó la tarea sin otro problema.

### agent-browser <!-- heading-id: agent-browser -->

agent-browser abrió otro navegador sin ninguna sesión guardada. Iniciar el navegador y abrir Wikipedia llevó 2,37 s. La tarea completa llevó 3,49 s.

La representación en texto mostró los controles de búsqueda, y la captura mostró Wikipedia sin controles agregados por la herramienta. También se pueden agregar etiquetas numeradas que corresponden a los elementos de la representación en texto.

Cuando le pedí que encontrara el botón que faltaba, devolvió esto:

<blockquote class="error-output" lang="en">
  <p>Element not found: #missing-action. Verify the selector, role, or name is correct and the element exists in the DOM.</p>
</blockquote>

Para la actualización tuve que hacer un ajuste manual en esta Mac. El instalador de paquetes de Bun omitió parte de la configuración, así que agent-browser no se abría. Hice que el archivo instalado se pudiera ejecutar y la comprobación de funcionamiento no encontró problemas.

## Cómo usar las sesiones que ya tenés abiertas <!-- heading-id: using-your-existing-sign-ins -->

ChatGPT Chrome Extension y Playwriter usan tu Chrome. Son las opciones más directas cuando la tarea depende de una pestaña donde ya iniciaste sesión. Eso es cómodo, pero también le da al agente acceso a las pestañas que usás. Importa qué permisos le das por sitio y que definas la tarea con precisión.

agent-browser abre otro navegador y no comparte tus sesiones de manera predeterminada. Podés reutilizar un perfil de Chrome o una sesión guardada cuando la tarea lo requiera. Para scripts que corren solos, yo usaría un navegador separado.

[Mirá un sistema en uso con controles para la automatización del navegador.](/es/projects/linkedin-tools/)

## Qué uso ahora <!-- heading-id: what-i-use-now -->

Antes usaba Playwriter para todas las tareas en el navegador. Ahora casi siempre uso ChatGPT Chrome Extension. Uso `@Chrome` desde la conversación para que el agente pueda trabajar en las pestañas de Chrome y con la sesión que ya tengo abiertas.
