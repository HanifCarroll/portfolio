---
title: "Document parsing for RAG"
section: ai
summary: "Turns PDFs, Word files and slides into clean text and structure that a model can use."
---

## What it is

Retrieval-augmented generation (RAG) feeds a model relevant pieces of your documents before it answers. That only works if the documents were turned into good text first. A document parser reads PDFs, Word files, slides and scans and outputs Markdown or JSON that keeps headings, tables, lists and reading order.

## When you need it

- Your product answers questions about documents: contracts, manuals, reports, research papers.
- Your RAG answers are poor and the cause turns out to be garbled tables or text in the wrong order.
- You need to pull structured data out of PDFs.

Bad parsing quietly limits everything after it. No prompt or model can fix a table that was flattened into a jumble of numbers.

## Popular choices

- **Docling**: IBM's open-source document parser. It converts PDFs, DOCX, PPTX, and similar files into structured Markdown or JSON for RAG and LLM pipelines. Strong on tables and layout, runs locally.
- **Unstructured**: Open-source library and hosted API that handles many file types and splits documents into typed elements.
- **LlamaParse**: LlamaIndex's hosted parser, good on complex PDFs.
- **MarkItDown**: Microsoft's lightweight converter from many file types to Markdown. Quick, with less layout analysis.

## What to tell your agent

> Use [Docling] to convert uploaded documents to Markdown before indexing. Keep headings and tables, split chunks along section boundaries instead of fixed character counts, and store the source file and page number with each chunk so answers can cite them. Add a few sample documents with tricky tables as test fixtures.
