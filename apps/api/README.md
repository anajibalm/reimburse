# API application boundary

`apps/api` owns business logic, authorization, and database access. Reimbursement, Payment Request, and Overtime are internal modules of this application, not separate applications or deployments.

This ticket creates workspace boundaries only. No API framework, production code, database, authentication, or business behavior is selected or implemented. See [PRD architecture](../../PRD.md#5-architecture).
