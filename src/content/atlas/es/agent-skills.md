---
title: "Skills de agente"
section: agent
summary: "Procedimientos y conocimientos prácticos que un agente carga solo cuando los necesita para una tarea."
---

## Qué es <!-- heading-id: what-it-is -->

Una skill es una carpeta con un archivo `SKILL.md` y, si hacen falta, scripts, plantillas y ejemplos. En la descripción se indica cuándo usarla. Si una tarea coincide con la descripción, el agente carga todas las instrucciones. Si no, el costo de tener la skill es casi nulo. Las skills contienen procedimientos, como «cómo escribimos una migración» o «cómo revisamos un PR», que no corresponden al archivo [AGENTS.md](/es/atlas/agent-instructions-file/) que se carga siempre.

## Cuándo las necesitás <!-- heading-id: when-you-need-it -->

- Tu AGENTS.md se está haciendo largo por los procedimientos paso a paso.
- Repetís el mismo proceso de varios pasos en distintos proyectos.
- Querés que los agentes hagan una tarea como la hacés vos, no como indique un prompt genérico.

Escribí la descripción como una regla de selección: cuándo usar la skill, cuándo no y qué resultado produce. Probá una skill nueva en una sesión nueva. Si solo funciona en la conversación donde la armaste, todavía no está lista. Las skills que descargás contienen supuestos de quien las escribió, así que leelas antes de instalarlas. [Más sobre esos supuestos](/es/blog/what-are-you-really-installing-when-you-install-a-skill/).

## Opciones populares <!-- heading-id: popular-choices -->

- **Escribí las tuyas**: enumerá las tareas que realmente hacés y escribí una skill para cada una, como diagnosticar un job fallido en tu sistema o ejecutar tu lista de controles de calidad en dispositivos móviles. Por lo general, esto da mejores resultados que usar un catálogo.
- **Skills de Matt Pocock**: skills de ingeniería populares y de código abierto, entre ellas entrevistas para definir especificaciones y revisión de arquitectura.
- **Compound Engineering plugin (Every)**: un flujo completo para planificar, trabajar, revisar y anotar lo aprendido, distribuido como skills y comandos.
- **Catálogos de skills de Anthropic y OpenAI**: ejemplos oficiales de skills para documentos, planillas, diseño y más.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Convertí [la forma en que acabamos de publicar esta versión] en una skill. Escribí una descripción que indique cuándo usarla y cuándo no. Guardá los pasos y las plantillas en la carpeta de la skill e incluí un ejemplo resuelto. Después probala con una tarea similar en una sesión nueva y corregí lo que no funcione.
