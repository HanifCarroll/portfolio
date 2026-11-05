---
title: "Property-based testing"
section: repo
summary: "Tests a rule against hundreds of generated inputs instead of a few you picked by hand."
---

## What it is

A normal test checks one example: `sort([3, 1, 2])` returns `[1, 2, 3]`. A property test states a rule that should always hold, such as "the output is sorted and has the same items as the input." The library then generates hundreds of random inputs to try to break it. When one fails, it shrinks the input to the smallest case that still fails.

## When you need it

- Your logic has rules that hold for every input: encoding then decoding returns the original, totals never go negative, a parser accepts anything the printer produces.
- Bugs keep showing up for inputs nobody thought to test, like empty lists, unicode or very large numbers.
- You want tests that survive a rewrite of the implementation.

This matters more with agents. An agent writes tests for the cases it imagined. Property tests check the cases nobody imagined, and they make a good contract that any rewrite has to satisfy.

## Popular choices

- **fast-check**: Property-based testing for TypeScript. It generates random inputs and shrinks failures to minimal cases. Works with Vitest and Jest.
- **Hypothesis**: The standard for Python.
- **Schemathesis**: Property-based testing for whole APIs, generated from an OpenAPI or GraphQL schema. See [Fuzzer](/atlas/fuzzer/).

## What to tell your agent

> Add property-based tests with [fast-check] for [the pricing and date logic]. For each function, write down the rules that should always hold, then write a property test for each rule. When a property test finds a failing case, add that case as a regular test too.
