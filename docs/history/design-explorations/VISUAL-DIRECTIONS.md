# Visual direction review

**Status:** historical options-only review. Not applied as final direction. Current design variants are in [`../../design/screens.md`](../../design/screens.md) and [`../../../design/reimburse.pen`](../../../design/reimburse.pen); neither selects a final `REDESIGN` variant.

Surface: Requester dashboard as Monitor + Operate. The screen prioritizes the next task, request status, and access to three services.

## A: Editorial ledger

- Typography: serif display for greeting and request names, sans for controls.
- Composition: one primary reimbursement action followed by a ledger list.
- Palette: warm paper, forest green, yellow action surface.
- Density: calm, readable.
- Reason: ledger structure keeps status and next action close without metric-card noise.
- Trade-off: lowest visual risk, least playful.

## B: Focus desk

- Typography: compact sans with high contrast.
- Composition: dark work surface with one next-task panel and compact request rows.
- Palette: navy, muted blue, one yellow action accent.
- Density: highest.
- Reason: strong contrast separates active work from history for frequent status checks.
- Trade-off: heavier for long form work and less welcoming on mobile.

## C: Warm studio

- Typography: humanist serif brand voice with plain sans body.
- Composition: conversational greeting, asymmetric primary action, compact status list.
- Palette: warm cream, coral action, lavender work surface.
- Density: balanced with visible personality.
- Reason: humanizes administrative work while keeping status labels textual and readable.
- Trade-off: needs stricter rules around nominal/status contrast before production.

## Reference use

Mobbin references were opened and used for patterns, not copied layouts:

- Airwallex, Expensify, Xero requester/dashboard patterns: task and status hierarchy.
- Xero expense form: evidence and transaction details as one sequence.
- QuickBooks, Mercury, Revolut Business, Aboard review screens: document and request data side by side.

## Scope

No product behavior changed. No PRD change. Next step after direction selection: apply selected direction to Reimbursement form and Finance review, then extract shared tokens/components.
