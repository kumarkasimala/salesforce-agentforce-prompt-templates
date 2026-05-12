# Governance Checklist

Use this checklist before publishing or deploying an enterprise prompt template.

The goal is to make each template easier to review, test, operate, and improve over time.

## Template Ownership

- Does the template have a clear business purpose?
- Is there a named owner or owning team?
- Is the intended user or workflow clearly described?
- Is the template versioned?
- Is there a change history or release process?

## Inputs and Trust Boundaries

- Are all required inputs listed?
- Are optional inputs clearly identified?
- Does the template distinguish trusted enterprise data from untrusted user or external content?
- Are customer messages, email bodies, chat transcripts, uploaded files, and retrieved passages treated as data rather than instructions?
- Are sensitive inputs handled according to privacy and security requirements?

## Grounding

- Are grounding sources required for factual or policy claims?
- Are approved CRM records, knowledge articles, policies, or retrieval sources listed?
- Does the template define what happens when required context is missing?
- Does the template define how conflicting sources should be handled?
- Are citation or source-reference expectations clear?

## Runtime Behavior

- Are allowed tools, actions, or retrieval steps listed?
- Are disallowed tools or actions clearly restricted?
- Are escalation conditions defined?
- Are fallback behaviors documented?
- Does the template avoid letting user-supplied text redefine system behavior?

## Output Contract

- Is the output contract explicit?
- Are required fields listed?
- Are allowed formats defined, such as markdown, JSON, or structured object output?
- Are validation rules defined for downstream systems?
- Does the template define what to do when the output cannot be safely generated?

## Safety and Policy

- Are prompt injection boundaries documented?
- Are safety rules and policy constraints clearly stated?
- Does the template define refusal or escalation behavior for unsafe requests?
- Does the template avoid exposing hidden instructions, secrets, or internal policy text?
- Are privacy and compliance concerns considered?

## Evaluation

- Does the template include regression tests?
- Are normal, edge-case, and failure-case examples included?
- Are prompt injection attempts tested?
- Are missing-context and conflicting-context cases tested?
- Is structured output validation tested?
- Are quality, safety, and policy-compliance checks included?

## Observability

- Are useful telemetry fields defined?
- Can executions be debugged without logging sensitive raw data?
- Are prompt version, model, context sources, tool calls, validation status, and error categories captured?
- Are evaluation results connected to future template improvements?

## Release Readiness

A template is ready for production use when it has:

- a clear business purpose
- documented inputs and trust boundaries
- required grounding sources
- explicit runtime behavior
- a validated output contract
- safety and policy boundaries
- regression tests
- observability metadata
- a release and rollback path
