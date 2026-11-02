# Payment Request and Overtime Requester · issue #13

Static light design candidates, not approved baselines or production behavior. Saved canvas SHA-256: `e05fcc854a53cb5c0e15411464f16e585dbf305f8aa4ec50d82daf4724d26be5`. Mobile viewports are 390×844 with intentional clipped vertical scroll; scroll and interactions are not implemented in the canvas.

## Main screens

| Story | Desktop | Mobile | All state specimens |
| --- | --- | --- | --- |
| PG-07 Payment Request form | [form](S5218F.png) | [form](OdlSF.png) | [Desktop](U6Y5wA.png) · [Mobile](OiW1x.png) |
| PG-08 Payment Request detail | [Pending vendor proof](ndXmd.png) | [Pending vendor proof](GlDnt.png) | [Desktop](QVApG.png) · [Mobile](LEe0N.png) |
| PG-09 Overtime form | [form](vgz3I.png) | [form](KOKNM.png) | [Desktop](L8zWo.png) · [Mobile](gD2YW.png) |
| PG-10 Overtime detail | [detail](YLNgQ.png) | [detail](X8Q07.png) | [Desktop](uZBOo.png) · [Mobile](WAOjq.png) |

## Subsequent review corrections

- PG-07 uses one recipient-choice control and presents Tax treatment as read-only Admin-selected information.
- PG-09 date entries use reusable source `IF8Ci`: separate date/start/end inputs, proof filename and action, mapped dates, duration and subtotal. [Shared sources](o0h9YD.png).
- PG-08/10 main details and workflow-status specimens use reusable sources `F07dGp` / `amQuh`, composed from the approved PG-06 detail pattern. Confirmation and form-validation specimens remain separate. Main detail specimens include identity, status badge, read-only summary, viewable proof and history; PG-08 has a single vendor-proof upload action.

## Four requested corrections

- Recipient choices: [KOL / Talent / Freelance component variants](UJEkg.png); exact template fields follow active configuration, not a rule defined by this design.
- Public rejection reason: Payment Request [Desktop](jIFJf.png) / [Mobile](kWVDD.png); Overtime [Desktop](dMyzn.png) / [Mobile](AyrNu.png). Text is illustrative public-facing sample data.
- Overtime date entries: [one-date Desktop](DeHu2.png) / [Mobile](cXKJd.png), then [two-date Desktop](vgz3I.png) / [Mobile](KOKNM.png). Shared proof is mapped to both dates; each subtotal is Rp210.000. `(2 jam + 2 jam) × Rp105.000/jam = Rp420.000`.
- Bank confirmation: [unconfirmed Mobile, scrolled](rqQUv.png); [confirmed Desktop](qB6yM.png) / [Mobile, scrolled](jq1DB.png). KTP/account details are not displayed. PRD does not explicitly decide whether an unconfirmed account blocks a subsequent action; no blocking rule is asserted.

## Evidence and limitations

The visual field variants specify selection and template dependency, not concrete KOL/Talent/Freelance field lists. Revision and status examples are visual handoffs and do not establish authorization, input handling, validation, uploads, submission, keyboard or screen-reader behavior. Some states use compact summary panels rather than complete implementation-level detail. Explicit sample public rejection reasons are not actual audit data. See `docs/product/open-questions.md` for unresolved business decisions.

The saved canvas retains all IDs and unchanged non-child properties of the `f78fc50e` baseline; variables are unchanged and all local refs resolve. Four representative baseline 2× renders (`k0okVa`, `jSSv3`, `TmbX6`, `WHMQ7`) matched committed PNGs byte-for-byte. Layout checks on the eight candidate groups excluded intentional scroll clipping and disabled nodes; runtime accessibility is not verified.
