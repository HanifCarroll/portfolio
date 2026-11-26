---
title: "Headless browser y scraping"
section: code
summary: "Un headless browser carga y controla páginas web reales desde el código para recopilar datos o completar tareas en sitios sin API."
---

## Qué es <!-- heading-id: what-it-is -->

Un headless browser es un motor de navegador real que controlás desde tu código: abre páginas, ejecuta su JavaScript, hace clic, completa formularios y lee el resultado. Así podés obtener datos de sitios sin API o automatizar tareas en esos sitios. Los servicios de navegadores alojados ejecutan los navegadores por vos, con grabación de sesiones, proxies y manejo de verificaciones de bots. Con las herramientas más nuevas, un modelo de IA decide dónde hacer clic para que el script funcione mejor cuando cambia la página.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Necesitás datos de sitios sin API: avisos, precios, eventos o registros públicos.
- Tu producto o agente tiene que completar pasos en otro sitio.
- Una solicitud HTTP simple devuelve una página vacía porque el contenido se genera con JavaScript.

Los scrapers fallan cuando cambian los sitios, así que preparate para eso. Guardá la página original junto con los datos extraídos, validá esos datos con un [esquema](/es/atlas/schema-validation/) y configurá una alerta si hay una caída repentina en la cantidad de resultados. Respetá los términos y los límites de solicitudes de cada sitio. Para agentes que trabajan en tu navegador con la sesión iniciada, mirá [esta comparación](/es/blog/browser-automation-tools-comparison-2026/).

## Opciones populares <!-- heading-id: popular-choices -->

- **Playwright**: biblioteca estándar para controlar Chromium, Firefox y WebKit desde el código.
- **Crawlee**: framework de crawling basado en Playwright y Puppeteer, con colas, reintentos y rotación de proxies.
- **Cheerio**: parseo rápido de HTML sin navegador, para páginas que no necesitan JavaScript.
- **Browserbase**: headless browsers alojados con reproducción de sesiones, proxies y funciones stealth.
- **Cloudflare Browser Rendering**: Chrome en modo headless disponible dentro de Cloudflare Workers.
- **Stagehand / Browser Use**: automatización del navegador con IA. Un modelo determina dónde hacer clic a partir de una instrucción en lenguaje natural.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Armá un scraper para [sitio] con [Playwright / Crawlee]. Probá primero una solicitud HTTP simple con Cheerio y usá un navegador solo si el contenido necesita JavaScript. Validá cada registro extraído con un esquema, guardá el HTML original para depurar, respetá un límite de [N solicitudes por minuto] y ejecutalo como un [background job](/es/atlas/background-jobs/) con reintentos. Avisame si una ejecución devuelve muchos menos resultados de lo habitual.
