---
title: "Fuzzer"
section: tests
summary: "Throws huge numbers of generated, often malformed inputs at your code to find crashes."
---

## What it is

A fuzzer feeds your code huge numbers of generated inputs, many of them malformed, and watches for crashes, hangs and broken assertions. Coverage-guided fuzzers track which code paths each input reaches. Then they mutate the inputs that reached new code, so they work their way deeper with each round.

A fuzzer is a close cousin of [property-based testing](/atlas/property-based-testing/). Property tests check that a rule holds across random inputs. Fuzzers run longer and hunt for inputs that break anything.

## When you need it

- Your code parses input you don't control: file uploads, user-written text, webhooks, network protocols.
- You expose an API, and you want to know what happens when someone sends requests your client would never send.
- A bug report traces back to a strange input nobody thought to test.
- An agent wrote a parser or validator, and its tests only cover the cases it thought of.

That last case matters most when agents write the code. They write tests for the inputs they imagined. A fuzzer finds the inputs neither of you imagined.

## Popular choices

Code-level fuzzers (fuzz a function directly):

- **Jazzer.js**: Coverage-guided fuzzer for Node.js that runs inside the process. It integrates with Jest.
- **Atheris**: Google's coverage-guided fuzzer for Python.
- **Go native fuzzing**: Built into `go test -fuzz`. Nothing to install.
- **cargo-fuzz**: The standard fuzzing tool for Rust.
- **AFL++**: The heavyweight for C, C++ and compiled binaries. It does well in fuzzing benchmarks.

API fuzzers (fuzz a running service over HTTP):

- **Schemathesis**: Generates requests from an OpenAPI or GraphQL schema, including edge cases and stateful workflows, and runs from the CLI, pytest, or CI. The easiest place to start if you have an OpenAPI spec.
- **RESTler**: Microsoft's stateful REST API fuzzer. It learns how requests depend on each other, such as creating a resource before deleting it.
- **WuppieFuzz**: TNO's REST API fuzzer, built on LibAFL. It generates request sequences from an OpenAPI spec and uses code coverage to find deeper bugs.

Continuous fuzzing:

- **OSS-Fuzz**: Google's free service that fuzzes open-source projects around the clock and files bugs.

## What to tell your agent

> Add fuzz testing to this project. Find the functions that parse or validate untrusted input and write a fuzz target for each one using [Jazzer.js / Atheris / Go native fuzzing]. If the project has an OpenAPI spec, also add a Schemathesis run against the local server. Add a short fuzz job to CI with a time limit, and save any crashing inputs as regression tests.
