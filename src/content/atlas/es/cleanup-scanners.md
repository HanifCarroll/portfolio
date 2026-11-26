---
title: "Escáneres de duplicación y código sin uso"
section: guardrails
summary: "Detectan lógica copiada y código sin uso para que puedas armar una lista concreta de cambios."
---

## Qué son <!-- heading-id: what-it-is -->

Los escáneres de duplicación detectan bloques de código idénticos o casi idénticos. Los de código sin uso detectan archivos, exports, dependencias y tipos que no se usan. Con ambos podés convertir «limpiá el código» en una lista concreta de problemas que el agente puede revisar uno por uno.

## Cuándo los necesitás <!-- heading-id: when-you-need-it -->

- Los agentes agregan repetidamente otras versiones de lógica que ya existe.
- La base de código crece con cada función nueva y nunca se achica.
- Recibís un proyecto que se desarrolló rápido con IA.

Los escáneres detectan texto duplicado, no significado duplicado. Si la misma regla de negocio está escrita de dos maneras distintas, el escaneo no la detecta. Acompañá el escaneo con una tarea explícita para unificar código: «implementá [esta regla] en un solo lugar».

## Opciones populares <!-- heading-id: popular-choices -->

- **Knip**: detecta archivos, exports y dependencias sin uso en proyectos de JavaScript y TypeScript.
- **jscpd**: detecta código copiado y pegado en más de 150 lenguajes.
- **ast-grep**: busca patrones estructurales. Sirve para detectar la misma lógica escrita de maneras un poco distintas.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Ejecutá [Knip] y [jscpd] y resumí los resultados. Eliminá el código y las dependencias sin uso. Para cada duplicación real, unificá el código en una sola implementación, conservá las diferencias que importan, actualizá las llamadas y eliminá las copias anteriores. Hacelo en commits chicos y ejecutá las pruebas después de cada uno.
