---
title: "Sandbox para agentes"
section: agent
summary: "Limita a qué puede acceder un agente en tu computadora y en tu red, para que pueda trabajar sin supervisión de forma segura."
---

## Qué es <!-- heading-id: what-it-is -->

Un sandbox restringe en qué archivos puede escribir un agente, a qué direcciones de red puede conectarse y qué comandos puede ejecutar. Puede venir incluido en el agente o ejecutarse en un contenedor o en una máquina virtual descartable en la nube. Dentro de esos límites, el agente trabaja sin pedir permiso en cada paso.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Aprobás cada comando y ya dejaste de leerlos.
- Querés que los agentes se ejecuten durante horas o durante la noche.
- El agente trabaja con código de un cliente, datos sensibles o algo conectado a producción.

Los pedidos de aprobación protegen menos de lo que parece porque la gente aprueba sin leer con atención. Un límite obligatorio que no depende de que alguien preste atención es más seguro y rápido. Dales credenciales de desarrollo a los agentes que desarrollan, nunca credenciales de producción.

## Opciones populares <!-- heading-id: popular-choices -->

- **Sandboxes integrados**: Codex y Claude Code incluyen aislamiento a nivel del sistema operativo para limitar la escritura de archivos y el acceso a la red.
- **Dev containers / Docker**: ejecutá el agente dentro de un contenedor con solo el proyecto montado.
- **E2B**: sandboxes descartables en la nube para ejecutar agentes y código generado con IA.
- **Agentes en la nube**: Codex cloud, Claude Code on the web, Cursor background agents y herramientas similares ejecutan cada tarea en un entorno remoto aislado.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Configurá un [dev container] para que el agente pueda trabajar en este proyecto. Montá solo el repositorio, limitá la red a [los registros de paquetes y nuestra API de staging] y habilitá solo las credenciales de desarrollo. Documentá en AGENTS.md cómo iniciarlo.
