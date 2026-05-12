# Reference Architecture

This repository models enterprise CRM prompt templates as governed workflow specifications.

A production prompt template is more than text. It defines how a business task is grounded, executed, validated, observed, and improved over time.

## High-Level Flow

```text
User or Workflow Intent
        |
        v
Prompt Template
        |
        v
Context Resolution
        |
        v
Grounding Sources
        |
        v
Tool / Action Contracts
        |
        v
Policy + Trust Boundaries
        |
        v
Model Execution
        |
        v
Structured Output
        |
        v
Evaluation
        |
        v
Telemetry + Feedback Loop
```

## 1. User or Workflow Intent

The system starts with a business task.

Examples:

- summarize a service case
- draft a grounded support reply
- classify an escalation
- prepare a sales account brief
- analyze opportunity risk
- prepare a field service visit
- create an agent handoff summary

The prompt template should clearly describe the user outcome or workflow outcome it supports.

## 2. Prompt Template

The prompt template defines the task, inputs, rules, and output expectations.

A strong template includes:

- template id and version
- business intent
- required inputs
- optional inputs
- trust boundaries
- grounding requirements
- allowed tools or actions
- output contract
- guardrails
- evaluation cases
- telemetry metadata

## 3. Context Resolution

Context resolution gathers the data needed to complete the task.

Examples:

- retrieve a CRM case
- load account details
- retrieve knowledge articles
- fetch recent customer interactions
- query product documentation
- call an approved API
- load policy guidance

The resolver should return only task-relevant context.

## 4. Grounding Sources

Grounding sources provide the factual basis for the model response.

Common sources include:

- CRM records
- service history
- knowledge articles
- policy documents
- product documentation
- approved internal FAQs
- retrieval index results
- trusted tool responses

Grounding improves accuracy, explainability, and trust.

## 5. Tool / Action Contracts

Some templates may use tools or actions.

A tool contract should define:

- tool name
- purpose
- input schema
- output schema
- allowed use cases
- disallowed use cases
- failure behavior
- audit or telemetry requirements

Tools should not be called just because the model asks for them. The runtime should enforce allowed tool usage.

## 6. Policy + Trust Boundaries

The runtime should separate trusted instructions from untrusted data.

Trusted content may include:

- system instructions
- developer instructions
- approved policies
- output contracts
- workflow rules
- tool permissions

Untrusted content may include:

- customer messages
- emails
- chat transcripts
- uploaded files
- retrieved web text
- external documents
- unverified tool output

Untrusted content should be treated as data, not instructions.

## 7. Model Execution

The model receives the task, trusted instructions, relevant context, and output contract.

The runtime should control:

- model selection
- prompt assembly
- context ordering
- tool availability
- safety checks
- output format expectations

## 8. Structured Output

For enterprise workflows, structured output is often safer than free-form text.

Structured output can support:

- validation
- workflow routing
- database writes
- downstream automation
- escalation checks
- human review
- audit trails

## 9. Evaluation

Prompt templates should be evaluated before and after release.

Evaluation should test:

- factuality
- completeness
- grounding quality
- citation behavior
- policy compliance
- structured output validity
- prompt injection resistance
- missing-context behavior
- conflicting-context behavior
- tone and usefulness

## 10. Telemetry + Feedback Loop

Telemetry makes prompt execution observable.

Useful signals include:

- template id
- template version
- model name
- grounding sources used
- retrieval status
- tool calls
- latency
- token usage
- validation result
- safety result
- error category

These signals can be used to improve templates, context resolution, evaluation cases, and runtime policies.

## Design Goal

The goal is to move from one-off prompts to reusable AI workflow specifications that can be reviewed, tested, versioned, governed, and improved like software.
