# Enterprise CRM Prompt Template Patterns

Public, original examples and design notes for enterprise CRM prompt templates inspired by common Salesforce and Agentforce-style workflows.

I am a Software Architect at Salesforce working on Prompt Builder. This repository is my personal public work. It contains original, generic examples and design notes for enterprise prompt template patterns. It does not contain Salesforce confidential information, internal code, proprietary Prompt Builder templates, customer data, or non-public implementation details.

## Core Idea

Enterprise prompt templates are not just prompts.

In production AI systems, a prompt template can behave like a governed workflow specification. It may define the business task, required context, grounding sources, tool usage, output contract, policy boundaries, evaluation rules, and observability metadata.

This repository demonstrates how CRM prompt templates can be designed as reusable, testable, and governable software artifacts.

## Purpose

The goal is to show how enterprise prompt templates can be designed, grounded, evaluated, and governed for CRM workflows.

The examples emphasize prompt engineering as enterprise system design:

- prompt lifecycle management
- context grounding and runtime data resolution
- structured outputs and validation
- tool/action integration
- policy-aware execution
- trust boundaries and prompt injection defense
- evaluation and regression testing
- telemetry and observability

## Example Categories

- Service case summarization
- Customer support reply drafting
- Knowledge-grounded answer generation
- Sales account research
- Opportunity risk analysis
- Field service visit preparation
- Escalation classification
- Agent handoff summaries
- Trust and safety policy checks
- Structured output generation
- Prompt injection boundary handling
- Agent action preparation

## Reference Architecture

```text
Prompt Template
   -> Context Resolution
   -> Grounding Sources
   -> Tool / Action Contracts
   -> Policy + Trust Boundaries
   -> Model Execution
   -> Structured Output
   -> Evaluation
   -> Telemetry + Feedback Loop
```

See [Reference Architecture](./docs/reference-architecture.md) for the full design model.

## Template Structure

```yaml
id: service_case_summary_v1
name: Service Case Summary
domain: service-cloud
intent: Summarize a customer service case for an agent or workflow.
inputs:
  - case_subject
  - case_description
  - recent_comments
  - knowledge_matches
grounding:
  required_sources:
    - crm_case
    - knowledge_base
runtime:
  context_resolution:
    - resolve_case_record
    - retrieve_knowledge_matches
  allowed_tools:
    - knowledge_search
    - case_history_lookup
output_contract:
  format: markdown
  sections:
    - issue
    - customer_context
    - attempted_resolution
    - recommended_next_step
guardrails:
  - do_not_invent_policy
  - cite_grounding_sources
  - escalate_if_missing_critical_context
  - separate_untrusted_customer_text_from_system_instructions
evals:
  - factuality
  - completeness
  - policy_compliance
  - tone
telemetry:
  - template_id
  - template_version
  - grounding_sources
  - output_validation_status
```

## Repository Layout

```text
templates/
  service/
  sales/
  field-service/
  governance/
evals/
  promptfoo/
docs/
  reference-architecture.md
  prompt-template-design.md
  template-taxonomy.md
  prompt-template-lifecycle.md
  grounding-patterns.md
  structured-outputs.md
  evaluation-methodology.md
  governance-checklist.md
  prompt-injection-boundaries.md
examples/
  README.md
```

## Included Examples

- [Service Case Summary](./templates/service/case-summary.yaml)
- [Grounded Support Reply](./templates/service/support-reply.yaml)
- [Sales Account Research Brief](./templates/sales/account-research.yaml)
- [Opportunity Risk Analysis](./templates/sales/opportunity-risk.yaml)
- [Field Service Visit Preparation](./templates/field-service/visit-prep.yaml)
- [Prompt Injection Review](./templates/governance/prompt-injection-review.yaml)

## Recommended Reading Path

1. Start with [Reference Architecture](./docs/reference-architecture.md).
2. Review [Prompt Template Design](./docs/prompt-template-design.md).
3. Read [Grounding Patterns](./docs/grounding-patterns.md).
4. Review [Structured Outputs](./docs/structured-outputs.md).
5. Review [Prompt Injection Boundaries](./docs/prompt-injection-boundaries.md).
6. Use [Evaluation Methodology](./docs/evaluation-methodology.md) to design tests.
7. Use the [Governance Checklist](./docs/governance-checklist.md) before release.

## Validate Examples

```bash
npm run validate:yaml
```

## Contribution Principles

- Keep all examples public and generic.
- Do not include customer data.
- Do not copy proprietary Salesforce prompts.
- Use realistic but fictional CRM scenarios.
- Include evaluation cases for every template.
- Document grounding assumptions and failure modes.
- Document trust boundaries for user-provided and externally retrieved content.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidance.

## License

MIT
