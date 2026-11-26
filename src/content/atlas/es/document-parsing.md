---
title: "Procesamiento de documentos para RAG"
section: ai
summary: "Convierte PDFs, archivos de Word y presentaciones en texto legible y estructuras que puede usar un modelo."
---

## Qué es <!-- heading-id: what-it-is -->

La generación aumentada por recuperación (RAG) le proporciona al modelo fragmentos relevantes de tus documentos antes de que responda. Eso solo funciona si primero convertís los documentos en texto legible. Un parser de documentos lee PDFs, archivos de Word, presentaciones y documentos escaneados. Genera Markdown o JSON que conserva los encabezados, las tablas, las listas y el orden de lectura.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Tu producto responde preguntas sobre documentos: contratos, manuales, informes o artículos de investigación.
- Las respuestas de tu sistema RAG son malas y descubrís que la causa son tablas mal convertidas o texto en el orden incorrecto.
- Necesitás extraer datos estructurados de PDFs.

Si el parser procesa mal un documento, limita todo lo que viene después sin que sea fácil darse cuenta. Ningún prompt ni modelo puede reconstruir una tabla que quedó convertida en números desordenados.

## Opciones populares <!-- heading-id: popular-choices -->

- **Docling**: parser de documentos de código abierto de IBM. Convierte PDFs, DOCX, PPTX y archivos similares en Markdown o JSON estructurado para RAG y pipelines con LLM. Procesa bien las tablas y la disposición de la página, y se ejecuta en local.
- **Unstructured**: biblioteca de código abierto y API alojada compatible con muchos tipos de archivo. Divide los documentos en elementos con tipo.
- **LlamaParse**: parser alojado de LlamaIndex. Procesa bien PDFs complejos.
- **MarkItDown**: conversor liviano de Microsoft de muchos tipos de archivo a Markdown. Es rápido y analiza menos la disposición de la página.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Usá [Docling] para convertir a Markdown los documentos que se suban antes de indexarlos. Conservá los encabezados y las tablas. Dividí el contenido en chunks según las secciones, no por una cantidad fija de caracteres. Guardá el archivo original y el número de página con cada chunk para poder citarlos en las respuestas. Agregá como fixtures de prueba unos documentos de ejemplo con tablas difíciles de procesar.
