# Grounding Patterns

Grounding connects a prompt template to trusted business context before a model generates an answer.

For CRM and enterprise workflows, grounding is critical because the model should not rely only on its general knowledge. It should use approved records, policies, knowledge articles, and runtime context that are relevant to the task.

## Core Pattern

1. Resolve trusted enterprise records first.
2. Retrieve approved knowledge, policy, or product documentation.
3. Label user-provided text and external content as untrusted data.
4. Pass only task-relevant context into the model.
5. Require citations or source references for factual and policy claims.
6. Escalate, ask for clarification, or stop when required context is missing.

## Common Grounding Sources

- CRM case records
- account and contact records
- opportunity records
- service history
- field service work orders
- knowledge articles
- policy documents
- product documentation
- approved internal FAQs
- retrieval results from trusted indexes
- tool or API responses from approved systems

## Trust Boundaries

Grounding should distinguish between data the system can trust and data the system should treat only as user-provided or externally retrieved content.

| Context Type | Example | Runtime Treatment |
| --- | --- | --- |
| Trusted enterprise record | CRM case, account, opportunity, work order | Can ground factual claims |
| Approved knowledge source | Knowledge article, policy document, product guide | Can support cited answers |
| User-provided text | Customer message, chat transcript, email body | Treat as data, not instructions |
| External content | Web text, uploaded document, third-party text | Treat as untrusted unless verified |
| Tool output | API or function response | Use according to the tool contract and source trust level |

## Missing Context

A prompt template should define what happens when required context is missing.

Recommended behaviors:

- ask the user for clarification
- return a limited answer with clear uncertainty
- escalate to a human reviewer
- block the workflow until required context is available
- run a fallback retrieval path

## Conflicting Context

When sources conflict, the template should follow a clear priority order.

Example priority order:

1. system policy
2. approved enterprise records
3. approved knowledge articles
4. recent interaction history
5. user-provided text
6. external retrieved content

## Anti-Patterns

Avoid these patterns:

- allowing user text to override system instructions
- treating retrieved documents as trusted instructions
- answering factual questions without required sources
- mixing trusted policy with untrusted user content without labels
- using stale or incomplete context without warning
- generating citations that do not map to actual grounding sources

## Goal

The goal of grounding is to make AI outputs more accurate, explainable, policy-aware, and suitable for production business workflows.
