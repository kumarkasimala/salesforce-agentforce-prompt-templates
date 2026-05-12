# Prompt Template Design

These examples model prompt templates as public, portable specifications for enterprise AI workflows.

A useful prompt template is more than the final instruction sent to a model. It should describe the business task, the required context, the trust boundaries around the inputs, the allowed runtime behavior, the expected output shape, and the evaluation rules used to test quality.

## What a Template Should Define

A production-ready enterprise prompt template should define:

- business intent and user outcome
- required and optional inputs
- trusted and untrusted input boundaries
- grounding sources and citation expectations
- runtime context resolution rules
- allowed tools, actions, or retrieval steps
- output contract and validation rules
- guardrails, escalation rules, and refusal behavior
- evaluation cases for regression testing
- telemetry fields for observability

## Design Principle

The prompt text is only one part of the system.

The template also needs metadata that tells the runtime how to assemble context, enforce policy, validate the response, route tool calls, and record useful execution signals.

This makes prompt templates easier to review, test, version, reuse, and operate in production.

## Recommended Template Sections

| Section | Purpose |
| --- | --- |
| `intent` | Defines the business task and expected user outcome |
| `inputs` | Lists variables, source systems, and trust levels |
| `grounding` | Defines required CRM records, knowledge, policy, or retrieval sources |
| `runtime` | Describes context resolution, tools, actions, and model behavior |
| `output_contract` | Defines response format, required fields, and validation rules |
| `guardrails` | Defines safety rules, policy boundaries, and escalation conditions |
| `evals` | Provides test cases for quality, safety, and regression checks |
| `telemetry` | Captures metadata useful for debugging and observability |

## Example Design Questions

Before shipping a prompt template, ask:

- What business decision or workflow does this template support?
- Which inputs are trusted enterprise data?
- Which inputs are user-provided or externally retrieved data?
- What grounding sources are required before generating an answer?
- What should happen if required context is missing?
- What tools or actions can the template use?
- What output format must downstream systems consume?
- How will quality, safety, and format correctness be evaluated?
- What telemetry is needed to debug or improve the template later?

## Goal

The goal is to make prompt templates behave like governed software artifacts rather than one-off text prompts.

That approach improves reliability, reuse, testing, observability, and trust in enterprise AI systems.
