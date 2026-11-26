---
title: "En vez de revisar el código de IA, dale herramientas para comprobarlo"
pubDate: "2026-01-22"
description: "Pasar de revisar el código que genera la IA a darles a los agentes formas de comprobar los resultados y detectar sus propios errores."
ctaVariant: systemsBuild
---

Lo que cambió mi forma de trabajar con Claude Code fue pensar la tarea de otra manera:

**Tu tarea no es revisar el código que genera la IA. Es darle herramientas para comprobar el resultado.**

## Cambiá cómo se comprueban los resultados <!-- heading-id: change-the-feedback-loop -->

Pensá en cómo incorporarías a un desarrollador nuevo. No te quedarías al lado revisando cada tecla que toca. Te asegurarías de que pueda usar:

- El conjunto de pruebas
- El linter y el verificador de tipos
- Los entornos de prueba previos a producción
- Los registros y el monitoreo
- La posibilidad de ejecutar la aplicación y ver qué pasa

Después revisarías sus decisiones de diseño y la cobertura de las pruebas, no los puntos y coma.

Los agentes de IA requieren las mismas herramientas. Cuanto menos demore cada comprobación, menos tiempo hace falta para iterar hasta conseguir una solución que funcione.

## Cómo depuré un extractor de datos que fallaba <!-- heading-id: debugging-a-broken-scraper -->

Ayer estaba trabajando con Claude Code en un extractor web que importa eventos de Meetup. La importación «funcionaba» porque no daba errores, pero el resultado no servía. Todos los eventos tenían `venue: null`.

Sin registros, habría tenido que hacer esto:

1. Preguntarle a Claude qué podría estar fallando.
2. Recibir una lista de posibilidades.
3. Agregar `console.log` a mano.
4. Volver a ejecutar el extractor.
5. Leer el resultado.
6. Contarle a Claude qué pasó.
7. Repetir.

Son muchos pasos de ida y vuelta que dependen de mí.

En vez de eso, le pedí a Claude que configurara el registro en un archivo, `logs/server.log`. Ahora Claude puede ejecutar:

```bash
tail -f logs/server.log
```

Y consultar qué pasa exactamente en tiempo real.

Con acceso a los registros, Claude diagnosticó el problema en el primer intento. El extractor intentaba interceptar respuestas de GraphQL, que incluían los datos de los lugares de los eventos. Meetup había cambiado algo y la intercepción ya no funcionaba. Entonces, el extractor pasaba a leer el DOM, donde no estaban los datos del lugar.

La solución fue agregar un paso que consulta la página de cada evento para completar los datos del lugar. Con acceso a lo que estaba pasando, Claude detectó el problema, identificó la causa e implementó la corrección.

## Herramientas de verificación <!-- heading-id: verification-tools -->

Los registros son una forma de comprobar resultados. También estoy incorporando estas otras herramientas:

[Compará tres opciones de automatización del navegador](/es/blog/browser-automation-tools-comparison-2026/) si necesitás decidir cómo va a inspeccionar y usar el navegador un agente.

| Herramienta | Qué podés comprobar |
| --- | --- |
| **Registros** | «¿Qué pasó?» |
| **Automatización del navegador** | «¿Qué ve el usuario?» |
| **Verificación de tipos** | «¿Tiene una estructura válida?» |
| **Pruebas** | «¿Sigue funcionando?» |
| **DevTools y análisis de rendimiento** | «¿Es lo bastante rápido?» |

Cada una le permite a la IA comprobar el resultado sin esperar a que lo revises a mano.

Con cada comprobación que puede hacer el agente, tengo que pegar el resultado en el chat una vez menos.

## Qué significa esto en la práctica <!-- heading-id: what-this-means-in-practice -->

Cuando empiezo una sesión con Claude Code, ahora me pregunto:

1. **¿Qué significa que «funcione»?** (Definí qué condiciones se tienen que cumplir).
2. **¿Cómo puede comprobarlo Claude?** (Dale herramientas de verificación).
3. **¿Cuál es la forma más rápida de comprobarlo?** (Reducí el tiempo de ciclo).

Para el extractor de Meetup, que «funcione» significaba obtener eventos con los datos del lugar. La herramienta de verificación eran los registros. Para ver el resultado enseguida, usaba `tail -f logs/server.log`.

Claude podía ejecutar el extractor, consultar los registros, identificar el problema y corregirlo sin que yo tuviera que pasarle la información.

## Revisá las decisiones en vez de cada línea de código <!-- heading-id: review-decisions-not-keystrokes -->

Creo que el desarrollo con IA está pasando de este tipo de instrucción:

> «Escribí el código y después lo reviso»

A esta otra:

> «Acá están las herramientas para comprobar el resultado. Estas son las condiciones que tiene que cumplir. Empezá».

Sigo revisando las decisiones de arquitectura, la cobertura de las pruebas y la seguridad. No reviso cada punto y coma ni el nombre de cada línea del registro.

## Qué me falta aprender <!-- heading-id: what-i-still-need-to-learn -->

Todavía estoy aprendiendo qué formas de trabajar sirven. Algunas preguntas que me quedan:

- ¿A qué otras formas de comprobar resultados deberían tener acceso los agentes de IA?
- ¿Cómo equilibrás la autonomía con los límites?
- ¿Cuándo deja de servir este enfoque?
