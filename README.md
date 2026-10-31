# Reimburse

Reimburse is an internal-request product for Reimbursement, Payment Request, and Overtime. Product scope and rules live in [PRD.md](PRD.md). Production architecture has exactly two npm workspaces: `apps/api` and `apps/web`. Domain services are internal API modules, not separate deployments.

This repository currently contains architecture/documentation scaffolding and design references. `apps/api` and `apps/web` do not contain production implementations. The runnable React/Vite dashboard and static HTML gallery under `prototype/` are sample UI only, not production applications.

## Workspace

- `apps/api/`: boundary for business logic, authorization, and database access. Framework and implementation remain undecided.
- `apps/web/`: Requester/Admin frontend boundary; product data must be accessed through API. Framework and implementation remain undecided.
- `prototype/`: design/review reference and existing sample UI; not part of production workspace.
- `design/reimburse.pen`: active design canvas. Design documents and references live under `docs/design/`.
- `packages/`: absent until concrete shared code is required.

Root uses npm workspaces. No production commands are available yet; the workspace packages are boundaries only.

## Run existing prototype

- React/Vite sample dashboard: from `prototype/react-dashboard/`, run `npm run dev -- --host 127.0.0.1 --port 4177`.
- Static HTML sample gallery: from repository root, run `python3 -m http.server 4178 --bind 127.0.0.1`, then open `http://127.0.0.1:4178/prototype/`.

## Source of truth

- [PRD](PRD.md): product scope, business rules, approved architecture, and unresolved technical decisions.
- [Open product/source questions](docs/product/open-questions.md): unresolved product or source conflicts.
- [Implementation status](docs/progress/implementation.md): observed code and verification evidence.
- [Design foundations](docs/design/foundations.md), [screen inventory](docs/design/screens.md), [components](docs/design/components.md), [UX guidance](docs/design/ux.md), [copy](docs/design/copy.md), [fixtures](docs/design/fixtures.md), [tokens](docs/design/tokens.css): active design handoffs.
- [`AGENTS.md`](AGENTS.md): primary agent policy. [`CLAUDE.md`](CLAUDE.md) points to it. [`VIBE_CODING_PROTOCOL.md`](VIBE_CODING_PROTOCOL.md): concise delivery workflow.
- [`docs/README.md`](docs/README.md): documentation map.

Update canonical source documents in place; Git history records corrections. Do not create version copies for routine edits.
