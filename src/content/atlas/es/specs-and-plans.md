---
title: "Especificaciones y planes de ejecución"
section: agent
summary: "Requisitos escritos y un plan que se actualiza, para que los agentes desarrollen lo que pediste y el trabajo largo pueda continuar entre sesiones."
---

## Qué son <!-- heading-id: what-it-is -->

Una especificación describe qué estás desarrollando y qué significa que esté «terminado»: el comportamiento, los casos límite y cómo verificarlo. Un plan de ejecución divide el trabajo en etapas y registra el avance, las decisiones y lo que no se había previsto a medida que trabajás. Guardás los dos en el repositorio para que cualquier agente o persona pueda retomar el trabajo donde lo dejó quien trabajó antes.

## Cuándo los necesitás <!-- heading-id: when-you-need-it -->

- Le diste a un agente un pedido de una línea y tomó una docena de decisiones que no querías.
- Desarrollar una función lleva más de una sesión y cada sesión nueva empieza desde cero.
- Varias personas o agentes trabajan en la misma función.

«Agregá autenticación a la API» no es una especificación. Una especificación dice qué roles pueden acceder a cada endpoint, qué pasa cuando vence un token y cómo probarlo. Podés cambiar un plan a medida que aprendés. Aprobarlo no impide modificarlo.

## Opciones populares <!-- heading-id: popular-choices -->

- **GitHub Spec Kit**: divide el trabajo en principios del proyecto, especificación de la función, plan técnico y tareas, con pasos para aclararlos y verificarlos antes de programar.
- **OpenSpec**: flujo de especificaciones más liviano que guarda los cambios propuestos y las especificaciones actuales en el repositorio. Incluye skills y comandos para que los agentes propongan, apliquen y archiven cada cambio.
- **PLANS.md**: patrón de OpenAI para un plan de ejecución que reúne todo lo necesario: el propósito, las etapas, las verificaciones, el avance y las decisiones.
- **Entrevista previa**: pedile al agente que te haga preguntas hasta que la idea quede clara antes de escribir la especificación. La skill «grill me» de Matt Pocock hace eso.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Antes de escribir código, entrevistame sobre [la función] hasta que puedas escribir una especificación con el comportamiento, los casos límite y las verificaciones de aceptación. Guardala en `specs/[feature].md`. Después escribí un plan de ejecución en `plans/[feature].md` con las etapas y cómo verificar cada una. Actualizá el avance y las decisiones del plan a medida que trabajes.
