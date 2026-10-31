# Web application boundary

`apps/web` is the single frontend for Requester and Admin. It accesses product data through `apps/api`; it does not access the database directly.

This ticket creates workspace boundaries only. No frontend framework, production UI, authentication, API integration, or business behavior is selected or implemented. The existing prototype remains a reference under `prototype/`. See [PRD architecture](../../PRD.md#5-architecture).
