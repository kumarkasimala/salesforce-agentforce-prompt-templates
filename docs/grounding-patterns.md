# Grounding Patterns

Grounded CRM prompts should distinguish between trusted enterprise data and untrusted user text.

## Pattern

1. Resolve trusted CRM records first.
2. Retrieve approved knowledge or policy snippets.
3. Mark customer-provided text as untrusted data.
4. Require citations when the output makes factual or policy claims.
5. Escalate when required sources are missing.

## Anti-Pattern

Do not let user-supplied text override system instructions, approved policy, or tool permissions.

