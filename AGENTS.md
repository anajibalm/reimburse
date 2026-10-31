# Reimburse agent rules

## Product and architecture authority

- `PRD.md` is canonical for product scope, requirements, business rules, and the approved architecture. Do not infer product behavior from prototypes, screenshots, or design files.
- `docs/product/open-questions.md` is canonical for unresolved product/source conflicts only; update it in place when resolution changes.
- `apps/api/` owns business logic, authorization, and database access. Reimbursement, Payment Request, and Overtime are internal API modules, not separate applications or deployments.
- `apps/web/` is the Requester/Admin frontend and accesses data through the API only.
- `prototype/` is reference/sample UI, not a production application. Never promote it to production by assumption.
- `design/reimburse.pen` is the active design canvas. `docs/design/` holds active design handoffs; screenshots and exports are evidence, not authority. Do not modify canvas, design foundations, or design assets unless the task explicitly asks.
- `docs/progress/implementation.md` is canonical for observed implementation and verification evidence. Update it in place when implementation status changes.
- `README.md` is the repository entrypoint. This file is the primary agent policy; `CLAUDE.md` points here.

## Scope and safety

- Follow approved issue scope. Preserve unrelated/local work; inspect Git status before edits. Never reset, clean, stash, or overwrite user work.
- Do not change business rules while changing architecture or docs unless explicitly requested and approved.
- Frameworks, database/ORM, auth, storage, OCR, jobs, and deployment remain undecided unless PRD or an explicit owner decision changes them. Do not select one by convention or scaffold production implementations ahead of a ticket.
- Keep exactly two application workspaces: `apps/api` and `apps/web`. Add `packages/` only when a concrete shared implementation is required.
- Do not add dependencies, automation, CI, app code, or design changes without scoped need.
- Never create versioned copies for routine corrections. Edit the canonical document in place; preserve history through Git. Create snapshots/backups only when task explicitly requires a recoverable design checkpoint.
- Never commit secrets, local environment files, dependencies, generated builds, or transient artifacts. Stage reviewed paths only.
- Report prototype/mock behavior as such. Do not claim production API, auth, database, workflow, or deployment without exercised evidence.

## Agent workflow

- Read this file, the live issue and relevant canonical product/design/implementation documents before work. Read applicable local contribution/protocol instructions when present.
- Select skills based on task: inspect available skills first when unsure; read each matched skill before using its workflow. Use the GitHub skill for issue/branch/commit/PR work. Do not copy another repository's architecture, settings, stack, or repository-specific assumptions.
- Work on a task branch and one scoped issue/PR. Preserve existing modifications; do not merge without owner approval.
- Before editing, map acceptance to files and checks. Reuse repository conventions. Keep changes minimal and update affected canonical docs in the same change.
- Verify changed behavior using available project commands and the actual affected surface. Report exact commands and outcomes, plus unverified areas.
- Before commit, review staged paths and run `git diff --check`. Use conventional commit messages. Push the branch and open a PR; never merge it.
- Reports to owner use concise Indonesian. Keep code identifiers, commands, error text, and official product/status names unchanged.
