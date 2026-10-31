# Reimburse

Reimburse is an internal-request product prototype for Reimbursement, Payment Request, and Overtime. Product rules live in the PRD. The active design is a Pencil canvas with flow and redesign variants. No production API or workflow is evidenced; the React dashboard and static HTML gallery are sample UI only.

## Run

- React/Vite dashboard: from `prototype/react-dashboard/`, run `npm run dev -- --host 127.0.0.1 --port 4177`. Verified in-browser at `http://127.0.0.1:4177/`.
- Static prototype gallery: from repository root, run `python3 -m http.server 4178 --bind 127.0.0.1`, then open `http://127.0.0.1:4178/prototype/`. Verified at `#requester`.

## Active documents

- [Product requirements](PRD.md): requirements and business rules.
- [Open product and source conflicts](docs/product/open-questions.md): unresolved items only.
- [Implementation status](docs/progress/implementation.md): code evidence, verified routes, and scope boundary.
- [Design foundations](docs/design/foundations.md): visual and token handoff.
- [Screen inventory and design coverage](docs/design/screens.md).
- [Reusable components](docs/design/components.md).
- [UX guidance](docs/design/ux.md).
- [UI copy](docs/design/copy.md).
- [Design fixtures](docs/design/fixtures.md).
- [Design tokens CSS handoff](docs/design/tokens.css): draft; not imported by prototype code.

## Design and history

- Active design source: [`design/reimburse.pen`](design/reimburse.pen), opened in Pencil.
- Export index: [`design/png/INDEX.md`](design/png/INDEX.md). Existing exports are snapshots; the active canvas takes precedence.
- Historical documents, explorations, and reviews: [`docs/history/`](docs/history/README.md).
- Pre-cleanup document backup: [`docs/history/pre-cleanup-20261031/`](docs/history/pre-cleanup-20261031/).
