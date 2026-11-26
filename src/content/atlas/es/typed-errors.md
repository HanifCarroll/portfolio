---
title: "Errores tipados y efectos"
section: code
summary: "Incorpora al tipo de cada función las formas en que puede fallar, para que el código que la llama tenga que manejarlas."
---

## Qué son <!-- heading-id: what-it-is -->

En la mayoría del código TypeScript, cualquier función puede lanzar cualquier valor y el tipo de la función no lo indica. En cambio, las bibliotecas de errores tipados devuelven los errores como valores. El tipo de la función indica qué devuelve si funciona y qué errores puede producir. Effect también incluye en el tipo las dependencias, los reintentos, los timeouts y la concurrencia.

## Cuándo los necesitás <!-- heading-id: when-you-need-it -->

- Tenés bloques `try/catch` por todas partes y aun así quedan errores sin manejar.
- Un error en una parte aparece en otra que no tiene relación como `undefined is not a function`.
- Tu código llama a servicios poco confiables y necesita manejar reintentos, timeouts y cancelaciones de la misma forma cada vez.

Los agentes trabajan mejor cuando el compilador indica qué falta. Si un handler no maneja un tipo de error, falla el build y el agente lo corrige sin que tengas que detectar vos qué faltó.

## Opciones populares <!-- heading-id: popular-choices -->

- **Effect**: biblioteca de TypeScript para errores tipados, inyección de dependencias, concurrencia, reintentos y validación de esquemas. Permite hacer mucho, pero lleva tiempo aprender a usarla.
- **Effect language service**: plugin de TypeScript que agrega diagnósticos específicos de Effect al editor y a la verificación de tipos. Detecta errores sin manejar y servicios que faltan, entre otros problemas.
- **neverthrow**: un tipo `Result` chico para errores tipados y nada más. Es fácil adoptarlo en una parte del código.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Usá [Effect / neverthrow] para manejar errores en [la capa de servicios]. Modelá cada falla esperada como un tipo de error con nombre y devolvelo en vez de lanzarlo. Manejá cada caso de error en el límite donde lo convertimos en una respuesta para el usuario. Lanzá excepciones solo cuando un bug deba provocar una caída.
