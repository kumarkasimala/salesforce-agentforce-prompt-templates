# Structured Outputs

Structured outputs make prompt behavior easier to validate, route, automate, and audit.

For enterprise workflows, free-form text is often not enough. Downstream systems may need specific fields, predictable formats, validation rules, and clear failure behavior.

## Why Structured Outputs Matter

Structured outputs help teams:

- validate model responses before using them
- route results into workflows or tools
- reduce ambiguity for downstream systems
- support automation and human review
- detect regressions during evaluation
- improve observability and auditing

## Recommended Fields

Common fields include:

- `summary`
- `reasoning_basis`
- `recommended_action`
- `citations`
- `confidence`
- `missing_context`
- `escalate`
- `policy_warnings`
- `safety_status`
- `validation_errors`

## Example Output Contract

```json
{
  "summary": "Short summary of the issue or answer.",
  "reasoning_basis": [
    "Grounded fact or source-backed observation."
  ],
  "recommended_action": "Next best action for the user or agent.",
  "citations": [
    {
      "source_id": "knowledge_article_123",
      "claim": "The specific claim supported by the source."
    }
  ],
  "missing_context": [],
  "escalate": false,
  "policy_warnings": [],
  "confidence": "medium"
}
```

## Validation Rules

A structured output contract should define:

- required fields
- optional fields
- allowed enum values
- maximum field length
- nested object structure
- citation requirements
- fallback behavior
- escalation conditions

## When to Use Structured Outputs

Use structured outputs when:

- another system consumes the response
- the output triggers a workflow
- the result must be stored in a database
- the response needs validation
- the answer must include citations
- the system needs escalation or safety flags
- consistency matters more than expressive writing

## Anti-Patterns

Avoid:

- relying on free-form output for automation
- asking for JSON without validating it
- mixing user-facing prose with machine-required fields
- omitting required escalation fields
- allowing the model to invent citations or source ids
- changing the output shape without versioning the template

## Goal

The goal is to make prompt outputs predictable enough for production systems while still allowing the model to generate useful, context-aware content.
