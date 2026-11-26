---
title: "Especificaciones formales y verificación"
section: tests
summary: "Define cómo debe comportarse un flujo. Un verificador recorre todos los caminos en busca de reglas que no se cumplen."
---

## Qué son <!-- heading-id: what-it-is -->

Una especificación formal describe un sistema como un conjunto de estados y pasos entre ellos, con reglas que siempre se tienen que cumplir: «un pedido pagado nunca vuelve a pendiente», «un saldo nunca puede ser negativo». Un verificador explora las posibles secuencias de pasos e informa la secuencia exacta que rompe una regla. Las pruebas solo verifican los caminos que alguien escribió. Un model checker verifica todos, dentro de los límites que definas.

Funciona en dos niveles. Una especificación de alto nivel modela el flujo, como un registro, un checkout o un protocolo de sincronización, sin incluir código. Los contratos a nivel de código anotan las funciones reales con lo que requieren y garantizan. Un prover verifica que la implementación cumpla esos contratos.

## Cuándo las necesitás <!-- heading-id: when-you-need-it -->

- Tu aplicación tiene una máquina de estados implícita repartida entre handlers, jobs y webhooks, y nadie sabe enumerar todos los caminos posibles. Mirá [Máquinas de estados](/es/atlas/state-machines/).
- Hay bugs por el orden de los pasos: reintentos, dos usuarios a la vez o un webhook que llega antes de la redirección.
- Romper una regla saldría caro, por ejemplo, cobrarle dos veces a un cliente, mostrarle a alguien datos que no debería ver o perder registros. Aunque pasen, las pruebas solo cubren los casos que alguien consideró y vos querés verificar todos los caminos.

Las especificaciones funcionan bien con agentes. Una persona puede revisar la especificación porque es corta y, si falla una verificación, el agente recibe la secuencia exacta para poder corregir el problema y volver a probar. Este método suele detectar bugs distintos de los que detectan las pruebas unitarias que escriben los agentes. También sirve en proyectos que ya existen: podés modelar un flujo por vez.

## Opciones populares <!-- heading-id: popular-choices -->

- **Quint**: lenguaje de especificación basado en TLA+, con tipos, una sintaxis fácil de usar para programadores, un REPL, un simulador aleatorio y un model checker. Sirve para modelar flujos de aplicaciones antes de escribir el código o mientras lo escribís.
- **TLA+**: lenguaje de especificación y model checker de uso establecido para sistemas concurrentes y distribuidos. Quint se basa en él.
- **LemmaScript**: contratos para TypeScript escritos como comentarios (`requires`, `ensures`, `invariant`) que se verifican con Dafny. Se usa a un nivel más bajo que Quint y verifica las funciones reales.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Modelá [el checkout y el flujo del webhook de pago] como una especificación en [Quint]. Enumerá todos los estados y acciones y escribí invariantes para las reglas que siempre se tienen que cumplir, como [nunca se cobra dos veces un pedido]. Ejecutá el simulador y el model checker. Cuando falle una verificación, mostrame la secuencia y corregí la especificación o el código. Después agregá contratos de [LemmaScript] a [las funciones de cálculo de precios] y verificalos durante el build.
