---
title: "Una buena arquitectura reduce el costo cuando sube el precio de los tokens"
seoTitle: "Cómo una buena arquitectura reduce el costo de los tokens"
pubDate: "2026-05-27"
description: "A medida que se reducen los subsidios al precio de los tokens de IA, quienes desarrollen sistemas modulares, con comprobaciones rápidas y modelos intercambiables, van a tener una ventaja de costos."
hidden: true
ctaVariant: systemsBuild
tags:
  - AI agents
  - software architecture
  - engineering workflow
---

Los tokens están cada vez más caros. Es una buena noticia para quienes diseñaron bien sus sistemas.

Hace poco empecé a comparar modelos con pruebas A/B en los agentes de mi flujo de trabajo: distintos niveles de razonamiento para planificar, modelos más chicos para los pasos mecánicos y modelos de frontera para las partes que realmente los necesitan.

Empecé para evaluar el costo. Al poco tiempo, también estaba poniendo a prueba qué tan bien había diseñado mi sistema.

Al hacer las pruebas, vi algo con claridad: un flujo que depende del modelo más caro para todos los pasos es frágil cuando cambian los precios, los límites o las promociones.

«¿Todavía puedo pagarlo?» no es la pregunta que conviene hacerse.

Yo preguntaría si en tu flujo los modelos son componentes o si son todo el sistema.

Si usás un solo modelo de frontera para resolver lo más difícil de principio a fin, quedás expuesto. Dependés de aumentos de precio, modelos que se retiran, límites de solicitudes o cualquier otro cambio que venga después. Si los modelos son componentes intercambiables de un sistema que controlás, el costo de cada modelo importa mucho menos porque podés derivar tareas a otro.

## La arquitectura te permite controlar el costo <!-- heading-id: architecture-is-cost-control -->

Si el código tiene muchas dependencias entre partes, necesitás usar el modelo más capaz para cada tarea porque cualquier cambio afecta a todo el sistema.

Con una buena arquitectura, tenés opciones.

Con interfaces claras, módulos independientes, tipado fuerte y pruebas que corren en segundos con cada commit, podés usar un modelo más chico y barato para modificar un módulo chico con límites claros. El cambio afecta a menos partes del sistema. Si el resultado es incorrecto, lo sabés en segundos.

Detectar los errores tan rápido reduce la presión para que el modelo produzca el resultado correcto en el primer intento.

Por eso SOLID, los buenos tipos y las interfaces claras vuelven a importar de una manera que no importaban cuando vos eras la única persona que escribía el código. Los principios que te permiten incorporar a un desarrollador junior a un proyecto también te permiten asignar un ticket a un modelo abierto más chico.

## Para planificar necesitás límites en el código <!-- heading-id: planning-only-works-when-boundaries-exist -->

No escribo especificaciones largas por adelantado. Hago prototipos. Pero sí dedico tiempo a una buena arquitectura.

Cuando usás un agente para dividir una tarea, el plan que obtenés es una especificación breve. Solo sirve si los límites del plan coinciden con límites que existen en el código.

Con un planificador no vas a conseguir límites que no existen.

Si todo tu código forma un único grafo de dependencias implícitas, elegir distintos modelos aporta poco. Con un plan podés dividir el trabajo, pero cada agente que lo implemente igual necesita contexto sobre todo el sistema para no romper algo que no tiene que ver con su parte. Terminás pagando por el modelo más capaz para todo.

Si el sistema tiene partes bien delimitadas, podés planificar y asignar el trabajo según esos límites. Podés usar modelos más chicos para los cambios mecánicos y más razonamiento para las decisiones de diseño ambiguas. La revisión puede hacerse por separado de la implementación. En vez de una sola conversación cara, tenés un proceso de desarrollo por etapas.

## Medí en vez de adivinar <!-- heading-id: measure-instead-of-guessing -->

Algunos resultados de las pruebas A/B me sorprendieron.

Para ciertas tareas que le mandaba a un modelo de frontera, no hacía falta usarlo. Un par de tareas que me parecían fáciles dieron resultados notablemente mejores con más razonamiento. No habría anticipado ninguno de los dos resultados.

La única forma de saberlo es medir. Y solo podés medir si ya tenés un sistema donde podés cambiar un modelo por otro.

Eso significa elegir el modelo al ejecutar el flujo, no por convicción. No necesitás el mismo modelo para planificar, implementar, revisar, investigar y hacer cambios mecánicos. Para cada rol necesitás un modelo lo suficientemente capaz y suficientes comprobaciones para detectar errores rápido.

## Los tokens más caros siguen siendo útiles <!-- heading-id: premium-tokens-still-matter -->

Esto todavía no es un método terminado. Los modelos de frontera siguen siendo importantes para los problemas que requieren razonamiento difícil. Tampoco digo que usar un modelo abierto en su lugar no tenga costo.

Vas a seguir pagando por tokens más caros, pero solo en los pasos que los necesitan, en vez de pagar por ellos en cada cambio de código de manera predeterminada.

Aunque los modelos de frontera sigan mejorando, en los próximos años les va a ir bien a quienes puedan ajustar qué modelo usa cada parte de sus sistemas.

Si te preocupa el aumento de precios, no empieces preguntando a qué modelo cambiar.

Preguntate si tu código está lo bastante bien estructurado como para poder cambiar de modelo.
