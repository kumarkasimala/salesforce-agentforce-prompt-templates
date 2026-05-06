# Salesforce Agentforce Prompt Template Examples

Public, original examples of enterprise CRM prompt templates inspired by common Salesforce and Agentforce use cases.

This repository does not contain Salesforce confidential information, internal code, proprietary Prompt Builder templates, customer data, or non-public implementation details. The examples are original public templates designed to demonstrate enterprise prompt engineering patterns.

## Purpose

The goal is to show how enterprise prompt templates can be designed, grounded, evaluated, and governed for CRM workflows.

The examples emphasize prompt engineering as enterprise system design: lifecycle management, context grounding, data resolution, structured outputs, tool/action integration, policy-aware execution, and observability.

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

## Template Structure

```yaml
id: service_case_summary_v1
name: Service Case Summary
domain: service-cloud
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
  prompt-template-design.md
  grounding-patterns.md
  governance-checklist.md
  structured-outputs.md
  prompt-injection-boundaries.md
```

## Contribution Principles

- Keep all examples public and generic.
- Do not include customer data.
- Do not copy proprietary Salesforce prompts.
- Include evaluation cases for every template.
- Document grounding assumptions and failure modes.

## License

MIT
