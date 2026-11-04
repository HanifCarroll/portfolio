---
title: "Voice agent pipeline"
section: ai
summary: "Connects speech recognition, a language model and speech synthesis into a real-time conversation."
---

## What it is

A voice agent listens, thinks and speaks in real time. The pipeline usually has speech-to-text (STT), an LLM, and text-to-speech (TTS), plus the hard parts in between: detecting when the person has finished talking, handling interruptions, and keeping the delay short enough to feel like a conversation. Some setups use speech-to-speech models that skip the text steps.

## When you need it

- You're building a phone agent for bookings, support or intake.
- You want a voice interface in your app.
- You want people to be able to talk to your product hands-free.

Latency is the main design constraint. Every step adds delay, and people notice anything over about a second.

## Popular choices

- **LiveKit**: Open-source WebRTC platform and Agents SDK for voice and video AI. LiveKit Cloud has a free tier with hosting, inference credits and a phone number. ChatGPT Advanced Voice runs on it.
- **Pipecat**: Open-source Python framework from Daily for self-hosted voice and multimodal agents. It connects STT, LLM, and TTS steps into one pipeline.
- **Vapi**: Hosted voice-agent platform that lets you choose the STT, LLM, and TTS providers. Popular with agencies building phone agents.
- **Retell AI**: A more packaged hosted platform, with templates, simulation testing, and call analytics.

## What to tell your agent

> Build a voice agent for [appointment booking] with [LiveKit Agents / Pipecat]. Use [STT, LLM and TTS providers], support interruptions, and keep the tools it can call limited to [checking availability and creating bookings]. Log each call's transcript and tool calls, and write a few scripted test conversations covering cancellations and unclear requests.
