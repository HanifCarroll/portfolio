---
title: "Pipeline para agentes de voz"
section: ai
summary: "Conecta el reconocimiento de voz, un modelo de lenguaje y la síntesis de voz para conversar en tiempo real."
---

## Qué es <!-- heading-id: what-it-is -->

Un agente de voz recibe audio, procesa lo que dice la persona y genera una respuesta hablada en tiempo real. El pipeline suele incluir speech-to-text (STT), un LLM y text-to-speech (TTS), además de las partes difíciles entre esos pasos: detectar cuándo terminó de hablar la persona, manejar las interrupciones y mantener la demora lo bastante corta para que se sienta como una conversación. Algunas configuraciones usan modelos speech-to-speech que omiten los pasos que usan texto.

## Cuándo lo necesitás <!-- heading-id: when-you-need-it -->

- Estás desarrollando un agente telefónico para reservas, soporte o recepción de solicitudes.
- Querés una interfaz de voz en tu aplicación.
- Querés que la gente pueda hablar con tu producto sin usar las manos.

La latencia es la principal restricción de diseño. Cada paso agrega demora, y la gente nota cuando la demora total supera aproximadamente un segundo.

## Opciones populares <!-- heading-id: popular-choices -->

- **LiveKit**: plataforma WebRTC y Agents SDK de código abierto para aplicaciones de IA con voz y video. LiveKit Cloud ofrece un plan gratuito con alojamiento, créditos de inferencia y un número de teléfono. ChatGPT Advanced Voice funciona en LiveKit Cloud.
- **Pipecat**: framework de Python de código abierto de Daily para alojar tus propios agentes de voz y multimodales. Conecta los pasos de STT, LLM y TTS en un solo pipeline.
- **Vapi**: plataforma alojada de agentes de voz que te permite elegir los proveedores de STT, LLM y TTS. Es popular entre las agencias que desarrollan agentes telefónicos.
- **Retell AI**: plataforma alojada con más elementos listos para usar. Incluye plantillas, pruebas de simulación y analytics de llamadas.

## Qué pedirle a tu agente <!-- heading-id: what-to-tell-your-agent -->

> Desarrollá un agente de voz para [reservar turnos] con [LiveKit Agents / Pipecat]. Usá [proveedores de STT, LLM y TTS], admití interrupciones y limitá las herramientas que puede invocar a [consultar disponibilidad y crear reservas]. Por cada llamada telefónica, registrá la transcripción y las invocaciones de herramientas. Escribí unas pocas conversaciones de prueba con guion que incluyan cancelaciones y pedidos poco claros.
