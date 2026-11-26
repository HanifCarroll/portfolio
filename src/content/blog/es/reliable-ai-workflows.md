---
title: "Cómo aprendés a armar flujos de trabajo confiables con IA a partir de las fallas"
seoTitle: "Cómo aprendés a armar flujos de trabajo confiables con IA a partir de las fallas"
description: "Entendés mejor cómo hacer confiable un flujo de trabajo con IA cuando revisás una ejecución fallida y detectás qué decisión, aprobación o condición de detención llegó demasiado tarde."
pubDate: "2026-07-16"
tags:
  - AI workflows
  - workflow design
  - human judgment
  - evaluation
ctaVariant: general
---

Dejé que un flujo de producción de videos con IA siguiera generando material antes de decidir si valía la pena repetir el primer resultado.

Empecé con una grabación de veintiún minutos que quería convertir en videos cortos. Las herramientas podían detectar posibles fragmentos, agregar subtítulos y preparar archivos para distintas plataformas. Por eso el proceso siguió.

Cuando lo frené, ya había cinco videos subtitulados y veinte conjuntos de archivos para distintas plataformas. Había mucho material que parecía terminado para revisar, pero no había un ejemplo acordado con el cual compararlo.

No se había publicado nada. Los archivos se conservaron sin distribuirlos. Pero ya se había dedicado tiempo a aplicar en varios videos una idea que yo todavía no había aceptado.

Las herramientas ejecutaron los pasos que permitía el procedimiento. El error estaba en el orden de las decisiones.

<figure>
  <img src="/blog/reliable-ai-workflows/production-before-approval.webp" alt="De una grabación original se generan cinco videos terminados y muchos conjuntos de archivos para los pasos siguientes antes de aprobar un resultado representativo." />
  <figcaption>Se generaron varios resultados que parecían terminados antes de que alguien aprobara un ejemplo.</figcaption>
</figure>

### Aprobá un ejemplo antes de seguir con la producción <!-- heading-id: move-approval-before-production -->

El flujo debería haberse detenido después de producir un video completo. Yo tenía que decidir si la historia funcionaba, si el ritmo era adecuado, si se podían leer los subtítulos y si valía la pena repetir el tratamiento general del video. Solo después tenía sentido producir los videos restantes o preparar material para varias plataformas.

El nuevo procedimiento es más simple.

Con IA se analiza la grabación completa y se sugieren unas pocas historias que se entienden por separado. Yo elijo las historias y designo una como prueba piloto. El sistema genera ese video y se detiene. Reviso el video terminado tal cual quedó. Si lo apruebo, el estilo general de edición y subtítulos del piloto se usa como base para los videos restantes. Si no lo apruebo, ajustamos un video en vez de un grupo entero.

No habría podido escribir ese procedimiento a la perfección al principio porque todavía no había visto cuánto costaba pedir la aprobación demasiado tarde.

### El contexto y el procedimiento resuelven problemas distintos <!-- heading-id: context-and-procedure-solve-different-problems -->

Estuve pensando en dos aspectos del desempeño de los agentes que puedo mejorar directamente: el contexto y el procedimiento. Un sistema puede fallar por otros motivos, pero estos son los dos aspectos que sigo ajustando a medida que aprendo a hacer una tarea.

El contexto es la información a la que tiene acceso el agente: el material original, los objetivos, las decisiones anteriores, los ejemplos, las restricciones y el estado actual que deberían servirle para hacer la tarea.

El procedimiento es el orden en que se hace el trabajo: qué puede hacer el agente, qué tiene que devolver, qué se revisa, dónde se detiene el proceso y qué decisiones siguen a cargo de una persona.

En el flujo de video, tener más contexto no habría corregido el problema principal. Aunque el sistema hubiera procesado la grabación a la perfección, podría haber producido demasiado antes de que yo tomara la decisión que importaba.

En el primer procedimiento, la revisión se hacía después de la producción. Al revisar la ejecución fallida, vi que la aprobación tenía que determinar si se seguía produciendo. Eso es distinto de agregar más instrucciones a un prompt.

La dificultad es que muchas veces no podés determinar el orden correcto hasta haber hecho la tarea suficientes veces.

### Identificá la primera falla con consecuencias <!-- heading-id: find-the-first-material-failure -->

Al principio, le das a la IA el mejor procedimiento que tenés, lo ejecutás y revisás qué pasa. Algunas partes funcionan. Otras fallan de maneras que no habías previsto. Al revisar una ejecución fallida, podés ver que al modelo le faltaba contexto, pero también podés descubrir que la tarea era demasiado grande, que se tomó una decisión demasiado tarde o que no había una condición para detener el proceso.

Estoy probando una forma simple de revisar estas ejecuciones. Antes de probar, definí qué tiene que pasar para dar por aprobada cada etapa importante. Si la ejecución falla de varias maneras, anotá la primera etapa que hizo que el trabajo que dependía de ella fuera poco confiable o se hiciera antes de tiempo.

En este caso, la primera falla importante ocurrió cuando el proceso siguió después de producir un video representativo sin esperar la aprobación. No hacía falta investigar los archivos posteriores como problemas separados. Todos se habían generado porque faltaba el mismo paso de aprobación.

<figure>
  <img src="/blog/reliable-ai-workflows/pilot-approval-gate.webp" alt="El video elegido como prueba piloto llega al paso de aprobación. Cuatro videos más quedan sin producir a la espera de esa aprobación." />
  <figcaption>La producción de los demás videos depende de que alguien apruebe el video piloto.</figcaption>
</figure>

Después cambiá una parte del procedimiento. Agregá la fuente que falta. Dividí un paso en dos. Pedile al modelo que devuelva algo que puedas verificar. Devolvé una decisión a una persona. Agregá una condición para detener el proceso.

### Agregá un punto de control y volvé a probar <!-- heading-id: add-one-gate-then-test-again -->

Esto todavía es una hipótesis de trabajo. No creo que cada falla tenga que convertirse en otra regla ni que cada resultado malo implique que el procedimiento necesita otro punto de control. Si intentás prever todas las excepciones, el proceso puede volverse demasiado rígido.

Quiero saber si, a partir de la falla, puedo identificar algo que se mantiene en esa tarea. En este caso, sí: hay que aprobar un ejemplo antes de repetir la producción.

Cuando un proceso con ayuda de IA no da el resultado que esperabas, ¿cambiás el prompt o cambiás el procedimiento donde lo usás?
