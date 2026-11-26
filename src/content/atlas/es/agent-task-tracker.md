---
title: "Gestor de tareas para agentes"
section: agent
summary: "Una lista de tareas que los agentes pueden leer y actualizar sin ayuda, para que el trabajo que lleva más tiempo no se pierda entre sesiones."
---

## Qué es <!-- heading-id: what-it-is -->

Un gestor de tareas para agentes registra el trabajo pendiente en issues estructurados que los agentes pueden crear, tomar, actualizar y cerrar desde la línea de comandos. Los buenos gestores registran qué tareas dependen de cuáles, así que un agente puede consultar «¿qué puedo hacer ahora?» en vez de volver a leer un archivo TODO largo en Markdown.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Los agentes dejan tareas pendientes sin registrar cuando termina una sesión.
- Tus archivos TODO.md crecen, se desactualizan y se contradicen.
- Ejecutás varios agentes y necesitás que tomen tareas distintas sin interferir entre sí.

También podés guardar los requisitos en el gestor en vez de repartirlos entre varios prompts de chat. Así es más fácil [revisar el código](/es/atlas/ai-code-review/).

## Opciones populares <!-- heading-id: popular-choices -->

- **Beads (`bd`)**: gestor de issues de Steve Yegge para agentes de programación. Guarda las tareas en un grafo con dependencias para que los agentes puedan gestionar trabajo que dura mucho tiempo sin archivos TODO en Markdown.
- **GitHub Issues + CLI `gh`**: los agentes ya conocen el comando `gh` y el resto del equipo puede seguir viendo los issues.
- **Linear**: seguimiento rápido de issues con un servidor MCP e integraciones con agentes.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Registrá el trabajo en [Beads / GitHub Issues]. Si encontrás una tarea que no vas a hacer ahora, registrala como issue en vez de dejar un comentario TODO. Al empezar una sesión, elegí la tarea pendiente con más prioridad que no esté bloqueada. Al terminar, actualizá su estado y anotá qué falta.
