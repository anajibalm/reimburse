# Screen design coverage

**Status:** checked against active Pencil canvas, 31 Oct 2026. Business requirements and permissions remain in [`../../PRD.md`](../../PRD.md). Active design source: [`../../design/reimburse.pen`](../../design/reimburse.pen). Canvas controls are static; do not infer interaction or implementation.

## Canvas groups

- Foundations: `AREA/01 Foundations` (`DDugW`) with `VD4Fy` and `ceXop`.
- Reusable components: `AREA/02 Components` (`h1ssGO`).
- Requester flows: Desktop `aCU9x` → `CkeTr`; Mobile `O1TbO` → `ABhFi`.
- PG-02 dashboard state specimens under `AREA/STATES PG-02` (`GmonS`).
- Separate `REDESIGN` frames for dashboard/forms and an accessibility handoff. Mobile dashboard redesign explicitly says `Belum diselaraskan`.

Flow and `REDESIGN` are distinct variants. No source marks one complete redesign direction as selected final. Inspect exact frame names/children in Pencil before working from a particular layer.

## Current inspected coverage

| Screen family | Desktop | Mobile | Evidence / limit |
|---|---|---|---|
| PG-04 request list | `cmfPt` | `UnqY7` | List, service filters, search; static design. |
| PG-06 Reimbursement detail | `n5an3` | `BaWKt` | Detail and Revision. |
| PG-06 cancel and terminal states | `Lo1BS`, `I87wz5`, `SnnT5`, `qlYKJ` | `BA2J6`, `jZKg1`, `O5mE9`, `mqTu5` | Pending cancel, Rejected, Paid, Cancelled variants. |
| PG-08 Payment Request detail | `U1COM` | `pQbdJ` | Pending vendor proof. |
| PG-07 Payment Request Revision | `jz5hp` | `MRY0h` | Revision form. |
| PG-10 Overtime detail | `pi0RS` | `Yf035` | Detail. |
| PG-09 Overtime Revision | `bV3uk` | `LgYoG` | Revision form. |
| Requester dashboard and forms | Separate `REDESIGN` frames, exact names in active canvas | Dashboard redesign marked `Belum diselaraskan`; form frames present | Variants, not a selected final direction. |

The table records inspected node IDs, not an exhaustive PRD screen inventory. PRD PG-01, PG-03, PG-11–PG-19 remain product requirements; this inventory does not establish complete designs for them.

## Design references and data

- [`../../design/png/INDEX.md`](../../design/png/INDEX.md) indexes current export files. The index records frame IDs at export time; use the active canvas for present names/structure. Earlier `requester-flow-review-final/` paths and several frame-name claims in the previous handoff no longer resolve.
- [`fixtures.md`](fixtures.md) labels example data and parallel scenarios. All names, organizations, amounts, dates, request IDs, statuses, and actor histories in canvas are `Data contoh`, not production data.
- [`ux.md`](ux.md) gives visual guidance. [`components.md`](components.md) documents component source IDs and verified current source/reference counts.

## Coverage limit

Canvas shows visual specimens, not running product behavior. Login, complete Admin settings, full Finance/Approver/Maker/Releaser flow, actual submission, upload, OCR, keyboard/screen-reader behavior, breakpoint/zoom coverage, and end-to-end operation are not established by these screens. See [`../progress/implementation.md`](../progress/implementation.md) for code evidence and [`../product/open-questions.md`](../product/open-questions.md) for unresolved conflicts.