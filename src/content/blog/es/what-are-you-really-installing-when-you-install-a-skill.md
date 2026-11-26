---
title: "¿Qué instalás realmente cuando instalás una habilidad de agente?"
seoTitle: "¿Qué instalás realmente cuando instalás una habilidad de agente?"
pubDate: "2026-09-02"
description: "Las habilidades de agente combinan capacidades prácticas con supuestos sobre qué es un buen trabajo. Deberías poder ver la doctrina de una habilidad antes de instalarla."
ctaVariant: systemsBuild
tags:
  - AI agents
  - developer tools
  - software architecture
  - engineering workflow
---

Imaginate que estás instalando una habilidad para revisar código.

Querés que tu agente revise bien el código.

Pero ¿qué quiere decir «bien»?

Una habilidad podría exigir pruebas para cada cambio de comportamiento y dar prioridad a las convenciones de toda la organización.

Otra podría cuestionar las abstracciones innecesarias, tratar los cambios reversibles como cambios que requieren menos formalidades y evitar la preparación para un aumento hipotético de escala.

¿Cuál es mejor?

La primera podría ser la indicada para alguien que desarrolla software en una empresa de la lista Fortune 500, donde muchos equipos trabajan en los mismos sistemas y un cambio chico puede tener consecuencias mucho después de que su autor haya dejado de trabajar ahí.

La segunda podría ser justo lo que necesita alguien que desarrolla un proyecto personal por su cuenta.

Ningún enfoque es necesariamente mejor. Las circunstancias son distintas, pero también lo son los criterios que se aplican en cada una.

Eso plantea un problema en la forma en que hablamos de las habilidades de agente.

## Las ideas que incluye una habilidad <!-- heading-id: the-hidden-layer -->

Entonces, ¿qué obtenés en realidad?

Más que una forma de revisar un diff.

Cuando descargás una habilidad de revisión de código que escribió otra persona, también podrías estar adoptando sus supuestos sobre cuántas pruebas alcanzan o cuándo se justifica agregar complejidad.

Sin embargo, solemos incluir esos criterios junto con la capacidad en sí. A todo eso le decimos habilidad.

Creo que sirve darle un nombre a la otra parte: doctrina.

Con doctrina me refiero a las ideas y prioridades relativamente estables que orientan las decisiones en distintas situaciones.

Por ejemplo:

> Mantener la complejidad tiene un costo continuo. Preferí la arquitectura más simple que cumpla con los requisitos actuales. No agregues infraestructura para un aumento hipotético de escala en el futuro.

Eso no es una habilidad. No la «ejecutás».

Es una idea sobre cómo se debería desarrollar software que influye en muchas decisiones además de la revisión de código.

La distinción es esta: una habilidad es la capacidad de hacer un tipo de trabajo. La doctrina influye en cómo usás esa capacidad.

La distinción es conceptual. Los archivos de habilidades que usamos hoy suelen incluir ambas cosas.

Una habilidad de revisión de código podría indicarle a un agente que evite abstracciones para necesidades hipotéticas porque su autor cree que mantener la complejidad tiene un costo continuo. Otra podría favorecer el uso de los mismos patrones en toda la organización porque su autor cree que coordinar el trabajo entre equipos es más importante que mantener simple cada parte del sistema.

Esas instrucciones no son hechos neutrales sobre la revisión de código. Expresan distintas ideas sobre qué hace que un software sea bueno.

Una doctrina también puede influir en varias habilidades. Si creés que mantener la complejidad tiene un costo continuo, esa idea no solo va a influir en cómo revisás código. También va a influir en cómo decidís sobre arquitectura, pruebas y muchas decisiones técnicas más chicas.

Por eso, entender una habilidad por separado es más difícil de lo que su nombre sugiere.

## Lo mismo pasa en marketing <!-- heading-id: marketing-makes-this-distinction-harder-to-ignore -->

La distinción se ve mejor fuera del software.

Pensá en el marketing.

Imaginate que descargás una habilidad llamada launch-product.

Una versión sigue el enfoque de respuesta directa y se enfoca en la oferta, la conversión y las pruebas de distintas formas de generar más demanda.

Otra sigue un enfoque de marketing de marca y le da más importancia a distinguirse, a llegar a un público amplio y a lo que recuerdan los compradores con el tiempo.

Una tercera versión parte de la idea de que el marketing funciona mejor cuando te ganás la atención y la confianza de un público más chico y bien definido.

Tres profesionales excelentes en marketing podrían escribir esas habilidades y aun así recomendar acciones totalmente distintas para el mismo producto.

No es que uno «sepa de marketing» y los demás no. Tienen ideas distintas sobre cómo funcionan los mercados y qué da buenos resultados.

Si instalo una de esas habilidades, adopto más que un procedimiento.

También adopto la forma de pensar de una escuela de marketing.

Lo que parecía un conjunto de técnicas de marketing también incluía una teoría sobre cómo funciona el marketing.

## Mostrá las ideas antes de la instalación <!-- heading-id: making-the-hidden-layer-visible -->

No hace falta decidir dónde debería quedar la doctrina para usar esta distinción de una forma útil.

Como mínimo, quien vaya a instalar una habilidad debería poder ver antes en qué ideas se basa.

En la descripción de una habilidad de revisión de código podría decir que el autor la escribió para un equipo chico en el que la mayoría de los cambios son reversibles, y que por lo general prefiere mantener el código simple hoy antes que prepararse para requisitos futuros hipotéticos.

Eso podría dar lugar a dependencias doctrinales, a una doctrina definida para el agente que influya en varias habilidades o hasta a una abstracción distinta de las habilidades.

Por ahora, la propuesta es más limitada. Si una habilidad depende de una forma particular de entender el software, el marketing, el diseño o cualquier otra disciplina, quien la instale debería poder ver esa perspectiva y no confundirla con una técnica neutral.

La doctrina también tiene un límite que vale la pena señalar.

La doctrina expresa lo que podemos explicar sobre qué es un buen trabajo. El gusto nos ayuda a reconocer cualidades que nuestros principios no alcanzan a describir del todo. Quizás parte de ese gusto se pueda transmitir mejor con ejemplos y críticas que con otro conjunto de instrucciones.

## Qué incluye una habilidad <!-- heading-id: what-comes-with-a-skill -->

Una habilidad de revisión de código puede incluir una teoría sobre qué es un buen código y para qué sirve el software.

Lo mismo pasa en otras disciplinas: las habilidades incluyen ideas sobre cómo funciona cada disciplina y qué se considera un buen trabajo en ella.

Esas teorías ya están en los archivos que llamamos habilidades.

Ya estamos instalando doctrina. Como mínimo, deberíamos saber cuál.
