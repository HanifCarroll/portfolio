---
title: "Armé un robot para crear contenido porque odio hacerlo"
pubDate: "2025-08-19"
description: "Cómo automaticé mi proceso de creación de contenido con un flujo funcional con IA que convierte transcripciones de llamadas en publicaciones listas para programar."
hidden: true
ctaVariant: systemsBuild
---

Publicaba de manera irregular en redes sociales porque odio redactar publicaciones. Ya tenía el material original en Notion: horas de transcripciones de mis sesiones de coaching. Revisarlas a mano para sacar ideas llevaba tiempo que no quería dedicarle.

En menos de un día, armé una interfaz de línea de comandos (CLI) con IA que convierte una transcripción en una semana de borradores para redes sociales, adaptados a cada plataforma. Lo que antes llevaba horas ahora lo reviso una vez por semana en 15 minutos que dedico solo a eso.

Más adelante, convertí ese flujo en un producto con un objetivo más específico. [Mirá el sistema que genera borradores a partir de transcripciones.](/es/projects/vox-prismatic/)

## Conservá la fuente y automatizá el proceso <!-- heading-id: preserve-the-source-automate-the-process -->

Mi objetivo nunca fue generar contenido genérico con IA. El sistema tenía que partir de cosas que yo había dicho.

El sistema no escribe *en mi lugar*. Automatiza el proceso que yo habría hecho a mano. Yo sigo eligiendo las ideas, editando los borradores y aprobando qué se programa.

La estrategia se basa en **cinco tipos distintos de publicaciones** que ajusté con ayuda de la IA:

- **Problema**: un problema que aparece en la transcripción.
- **Evidencia**: un resultado concreto que aparece en la transcripción.
- **Método**: una forma de trabajar que usé en la práctica.
- **Postura contraria**: una afirmación que contradice el consejo habitual.
- **Modelo mental**: un concepto que quiero que alguien pueda volver a usar.

Con esos cinco tipos, evito que todos los borradores tengan la misma estructura.

## Un proceso de cinco etapas para crear contenido <!-- heading-id: a-five-stage-content-pipeline -->

Dividí el proceso en cinco etapas, con una revisión humana antes de generar las publicaciones y otra antes de programarlas.

1.  **Procesamiento de la transcripción**: el sistema importa las transcripciones sin editar de Notion, usa IA para limpiarlas y después extrae un conjunto de ideas estructuradas con potencial para una publicación.
2.  **Revisión de ideas**: es la primera revisión humana. Reviso rápido las ideas que se extrajeron con IA. Apruebo las que coinciden con mi experiencia y rechazo las que no.
3.  **Generación de publicaciones**: el sistema usa las ideas aprobadas en un prompt más elaborado para generar con IA publicaciones adaptadas a LinkedIn y X.
4.  **Revisión de publicaciones**: es la segunda revisión humana. Reviso los borradores generados, hago los ajustes finales que hagan falta y los apruebo para que se programen.
5.  **Programación de publicaciones**: por último, el sistema manda todas las publicaciones aprobadas directamente a la **[API de Postiz](https://postiz.com)** para programarlas sin copiar y pegar nada a mano.

En este video podés ver todo el proceso, desde que se procesa una transcripción sin editar hasta que se programan las publicaciones finales.

<div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 3rem 0 6rem 0;">
  <iframe
    src="https://www.youtube.com/embed/w0ICSv55nxo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>

## Las decisiones que tomé al armar la herramienta <!-- heading-id: the-decisions-that-shaped-the-tool -->

### Notion, Gemini y una regla para no inventar datos <!-- heading-id: notion-gemini-and-a-no-hallucination-rule -->

Uso **Notion** como base de datos central de todo el sistema. Ahí se guardan todas las transcripciones, ideas y publicaciones. Lo elegí porque ya tenía guardadas ahí las transcripciones.

La instrucción no incluye solo la idea extraída. El sistema también vuelve a mandarle a Google Gemini **toda la transcripción original** como contexto.

Así reduzco la posibilidad de que el modelo genere métricas o resultados que no aparecen en la conversación original. Igual comparo cada borrador con la fuente.

### Por qué elegí la programación funcional <!-- heading-id: why-i-chose-a-functional-style -->

Armé la aplicación en TypeScript con **Bun** como entorno de ejecución.

Más importante: la escribí con un **estilo de programación funcional**. Creo que para la IA es más fácil analizar y modificar código de este estilo que código tradicional orientado a objetos. La lógica queda más clara y predecible, algo ideal para este tipo de flujo que transforma datos sin guardar estado.

### Un selector de fecha en vez de otro formato para recordar <!-- heading-id: a-date-picker-instead-of-another-format-to-remember -->

El módulo de programación usa un **selector interactivo de fecha y hora** con horarios sugeridos. Elijo cuándo publicar en vez de escribir la fecha en el formato correcto.

## Los 45 minutos que dediqué a revisar la API <!-- heading-id: the-45-minute-api-detour -->

Mientras integraba una instancia autogestionada de Postiz para programar publicaciones, mis solicitudes fallaban aunque yo seguía la documentación de la API.

Después de unos 45 minutos, encontré la causa: la documentación indicaba el endpoint `/public/v1`, pero mi instancia requería `/api`.

## El resultado <!-- heading-id: the-result -->

Ahora estoy incorporando esta herramienta a mi rutina semanal. Mi plan es elegir una transcripción por semana y completar todo el proceso en una sesión de 15 minutos dedicada a eso: procesarla, revisar las ideas, editar los borradores y programar las publicaciones.

Todavía no tengo métricas a largo plazo. Lo que tengo es una revisión semanal de 15 minutos: elijo una transcripción, reviso las ideas extraídas, edito los borradores y los programo. Todavía no sé si voy a hacerlo todas las semanas.
