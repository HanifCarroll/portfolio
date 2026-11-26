---
title: "Escáner de seguridad para agentes y MCP"
section: agent
summary: "Verifica si hay prompt injection, tool poisoning o filtraciones de secretos en agentes de IA, servidores MCP y skills."
---

## Qué es <!-- heading-id: what-it-is -->

Los agentes leen texto no confiable (páginas web, correos, documentos y descripciones de herramientas) y después actúan con permisos reales. Un escáner de seguridad para agentes busca problemas que pueden surgir en ese proceso: instrucciones ocultas en descripciones de herramientas, servidores MCP que cambiaron después de que los aprobaste, credenciales expuestas y vías por las que los datos privados podrían llegar a un atacante.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Instalás servidores MCP o skills de agente que escribió otra gente.
- Tu agente lee contenido externo y también puede acceder a datos privados o enviar mensajes.
- Publicás una función de IA y querés probar si resiste prompt injection antes de que la prueben los atacantes.

La combinación riesgosa es que un mismo agente tenga datos privados, contenido no confiable y una forma de enviar datos afuera. Los escáneres ayudan, pero es más seguro no darle las tres cosas a un mismo agente. [Más sobre qué instalás realmente cuando instalás una skill](/es/blog/what-are-you-really-installing-when-you-install-a-skill/).

## Opciones populares <!-- heading-id: popular-choices -->

- **Agent Scan** (Snyk, antes MCP-Scan de Invariant Labs): escáner de seguridad para agentes de IA, servidores MCP y skills de agente. Señala prompt injection, tool poisoning, credenciales expuestas y flujos de datos riesgosos.
- **Promptfoo red-teaming**: genera ataques contra tu propia aplicación con LLM, entre ellos prompt injection e intentos de filtrar datos. Informa cuáles funcionaron.
- **garak**: escáner de vulnerabilidades de LLM de código abierto de NVIDIA. Evalúa si los modelos permiten jailbreaks o filtraciones y si presentan otras fallas.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Ejecutá [Agent Scan] sobre los servidores MCP y las skills que usa este proyecto. Resumí los problemas que detecte. Después enumerá todas las herramientas que puede invocar nuestro agente y marcá cuáles leen contenido no confiable, acceden a datos privados o pueden enviar datos afuera. Proponé cambios para que ninguna ejecución de un agente tenga las tres cosas.
