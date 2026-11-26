---
title: "Servidor MCP para tu producto"
section: ai
summary: "Permite que los asistentes de IA y los agentes usen tu producto directamente con el permiso del usuario."
---

## Qué es <!-- heading-id: what-it-is -->

El Model Context Protocol (MCP) es un estándar para que aplicaciones de IA como ChatGPT, Claude, Cursor y Codex invoquen herramientas externas. Un servidor MCP para tu producto expone un conjunto chico de acciones y datos, como «buscá mis pedidos» o «creá una reserva», que el asistente de un usuario puede invocar en su nombre. En los servidores MCP remotos, los usuarios suelen iniciar sesión con OAuth. Así, el asistente actúa con los permisos de ese usuario y no tiene otros permisos.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Tus usuarios ya trabajan con asistentes de IA y quieren usar tu producto desde ahí.
- Querés que, además de la aplicación web y la API, los agentes sean otra forma de encontrar y usar tu producto.
- Tenés una API, pero es demasiado amplia o de nivel demasiado bajo para que un modelo la use bien.

Diseñá las herramientas para un modelo, no para un programador. Unas pocas herramientas con nombres claros que completen una tarea real cada una funcionan mejor que reproducir todos los endpoints de la API. Tratá cada llamada a una herramienta como una entrada no confiable y pedí confirmaciones claras para las operaciones de escritura.

## Opciones populares <!-- heading-id: popular-choices -->

- **MCP TypeScript SDK / Python SDK**: SDKs oficiales para desarrollar servidores y clientes.
- **FastMCP**: framework de Python de más alto nivel que convierte funciones con decoradores en herramientas MCP.
- **Cloudflare Agents SDK**: aloja servidores MCP remotos en Cloudflare Workers, con OAuth y estado por usuario incluidos.
- **Better Auth MCP and OAuth provider plugins**: agregan el flujo OAuth que esperan los clientes MCP a una aplicación que ya usa Better Auth.
- **MCP Inspector**: herramienta oficial para llamar y depurar manualmente las herramientas de tu servidor.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Agregá un servidor MCP remoto a esta aplicación con [MCP TypeScript SDK]. Exponé estas herramientas: [search_bookings, create_booking, cancel_booking], cada una con una descripción clara y un esquema de entrada de [Zod](/es/atlas/schema-validation/). Exigí inicio de sesión con OAuth para que cada llamada se ejecute como el usuario autenticado y verificá los permisos dentro de cada herramienta. Escribí pruebas que invoquen cada herramienta, incluida una llamada de un usuario que no sea dueño de los datos.
