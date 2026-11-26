---
title: "Máquina de estados o statechart"
section: code
summary: "Expresa la lógica compleja como estados y transiciones explícitos en vez de repartirla entre varias flags."
---

## Qué es <!-- heading-id: what-it-is -->

Una máquina de estados enumera todos los estados posibles y todos los eventos que permiten pasar de uno a otro. Un checkout podría estar en `browsing`, `entering details`, `paying`, `paid` o `failed`. Un statechart agrega estados anidados y paralelos para flujos más complejos. No podés llegar a combinaciones imposibles, como estar cargando y en error a la vez.

## Cuándo la necesitás <!-- heading-id: when-you-need-it -->

- Estás manejando booleanos como `isLoading`, `isError` y `hasSubmitted`, y dejan de coincidir entre sí.
- Un flujo de varios pasos (onboarding, checkout, subida de archivos o llamada de voz) tiene bugs solo en recorridos poco comunes.
- Tenés que explicarle la lógica a alguien que no lee código.

Los agentes suelen agregar otra flag cada vez que corrigen un bug. Con una máquina de estados, cada corrección tiene que expresarse como un estado o una transición con nombre. Así podés seguir leyendo y probando la lógica con facilidad.

## Opciones populares <!-- heading-id: popular-choices -->

- **XState**: biblioteca para máquinas de estados y statecharts que permite expresar la lógica compleja de una aplicación de forma explícita y fácil de visualizar. Incluye un editor visual.
- **Zag**: lógica de componentes de UI ya armada (menús, diálogos y comboboxes), implementada con máquinas de estados. Funciona con cualquier framework.
- **Reducers simples**: para casos chicos, un reducer con un tipo unión `status` ofrece la mayor parte del beneficio sin usar una biblioteca.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Modelá [el flujo de checkout] como una máquina de estados con [XState]. Enumerá cada estado y evento de forma explícita. Poné los efectos secundarios en actions o actors, no en los componentes, y escribí una prueba para cada transición, incluidas las que ocurren cuando algo falla. Generá un diagrama de la máquina de estados para que pueda revisarlo.
