# Agent coding protocol

Repository policy: [`AGENTS.md`](AGENTS.md). Product authority: [`PRD.md`](PRD.md). This workflow adapts CIC's issue-driven process; CIC's architecture, stack, paths, and configuration do not apply here.

## Delivery flow

1. Read `AGENTS.md`, the live issue and relevant source-of-truth documents. Inspect branch, upstream, staged files, and working tree. Preserve existing changes.
2. Confirm acceptance and scope. Select task-matched skills from the installed skill catalog; read matched skill instructions before use. Do not copy another repository's stack, configuration, or repo-specific process details.
3. Work on a feature/chore/docs branch from `main`, one issue and one PR per scoped change. Use Conventional Commits. Stage explicit reviewed paths only.
4. Edit canonical docs in place. Do not create `-v2`, `-revised`, backup, or dated copies for routine corrections; Git history records revisions. Design checkpoint backups are allowed only when specifically required for safe canvas work.
5. Run available checks for changed workspace and any impacted prototype. Review diff and staged paths; run `git diff --check` before commit. Record exact command results and gaps in the PR.
6. Push branch and open PR targeting `main`. Do not merge; owner reviews and decides.

## Scope boundaries

- Exactly two application workspaces: `apps/api` and `apps/web`, managed by existing npm.
- `apps/api`: business logic, authorization, and database; service/domain modules remain internal.
- `apps/web`: Requester/Admin UI through API only.
- Add `packages/` only when actual shared code requires it.
- Keep prototypes as references. Workspace bootstrap does not select framework or implement business behavior.
- Keep design canvas, foundation, and assets untouched unless issue explicitly includes design work.
- Never claim a scaffold is a working production application. No production readiness claim without direct evidence.

## Stop and report

Preserve unrelated local edits. Never reset, clean, stash, force-push over remote history, or merge. If auth/permission blocks delivery, complete independent work and report exact blocker. PR must state scope, acceptance evidence, checks, and unfinished production work without implying completion.
