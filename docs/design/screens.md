# Screen design coverage

**Status:** checked against active Pencil canvas, 31 Oct 2026. Business requirements and permissions remain in [`../../PRD.md`](../../PRD.md). Active design source: [`../../design/reimburse.pen`](../../design/reimburse.pen). Canvas controls are static; do not infer interaction or implementation.

## Canvas groups

- Foundations: `AREA/01 Foundations` (`DDugW`) with `VD4Fy` and `ceXop`.
- Reusable components: `AREA/02 Components` (`h1ssGO`).
- Requester flows: Desktop `aCU9x` → `CkeTr`; Mobile `O1TbO` → `ABhFi`.
- PG-02 dashboard state specimens under `AREA/STATES PG-02` (`GmonS`).
- Separate `REDESIGN` frames for dashboard/forms and an accessibility handoff. Mobile dashboard redesign explicitly says `Belum diselaraskan`.

Flow and `REDESIGN` are distinct variants. No source marks one complete redesign direction as selected final. Inspect exact frame names/children in Pencil before working from a particular layer.

## PG-02 Desktop polish, issue #3

Owner-directed baseline: saved local Desktop polish is preserved, including 447 added, 89 removed and 262 modified nodes relative to bootstrap commit `1a6af91`. This is not a new foundation redesign. Active state area is `S7pOm`; profile menu specimen is `z3abW3`. Archived/unaligned flows remain outside this scope.

Stress specimen `p1Vshc` retains counts 5/4/3 and total 12. The 299 px chart retains two 4 px gaps; colored area 291 px has widths 121.25 / 97 / 72.75 px, exactly 5/12 / 4/12 / 3/12 (41.7% / 33.3% / 25%). Other chart styling and content are unchanged by this correction. Evidence: [`p1Vshc.png`](../../design/png/pg02-desktop/p1Vshc.png). Live canvas screenshot and bounds inspection found no enabled non-stripe overflow in the stress screen. These are sample data and static visual checks, not interaction tests.

Dependency: Desktop branch starts at bootstrap `1a6af91` (PR #2 OPEN, no GitHub review recorded at inspection), explicitly authorized by the owner. No merge performed.

## PG-02 Mobile, issue #5

**Owner-approved visual baseline:** Mobile polish in commit `8618785` is approved as the Mobile visual baseline. Saved canvas SHA-256: `da17e7b60a92fcc3f1c8cdcdf996ca69c5f5407134b16ae16051279bbbed90dd`. Reverification found all 15 fixed viewports and bell badges consistent with the saved source; fresh 2× exports of all 15 viewports and both full-content extents are byte-identical to the committed PNGs. No additional design changes were made. This approval is not a merge, production acceptance, or runtime interaction/accessibility verification; PR #6 still depends on Desktop PR #4.

[Individual state renders for review](../../design/png/pg02-mobile/README.md): 15 viewport PNGs at 780 × 1688 (2×), plus full normal/stress extents. Final saved JSON was verified to contain all 15 viewports and 10 reusable content sources. Recursive comparison against `113a418` found every pre-existing node and variable unchanged; initial finalization added no design edits. Subsequent owner-requested polish in the same issue/PR removes sample/role helper text from the UI, adds the unread count to each bell, and aligns profile/picker sheets to a common bottom inset.

Based on Desktop commit `113a418`, PR #4, dependent in turn on bootstrap PR #2. Owner authorized the Desktop visual baseline; this does not claim merged or GitHub-approved PRs. New Mobile screens are separate from archived unsynchronized mobile explorations.

Fixed viewport: 390 × 844. Header 132 px, body viewport 626 px, bottom navigation 86 px. Long content stays at readable size and scrolls vertically in implementation; static canvas uses intentional viewport clipping plus separate scrolled specimens. Full content remains visible in shared-source board `XyHpr` (normal extent `cD8aK`, 390 × 2085; stress `ktDJv`, 390 × 2351). No actual scrolling, navigation, modal handling or keyboard behavior is implemented by the Pen file.

| Mobile state | Viewport / evidence in `design/png/pg02-mobile/` |
|---|---|
| Normal with two attention tasks | `JIPY2.png` |
| Stress with eight attention tasks, first three shown | `ZKFu6.png` |
| Empty | `r1eeyO.png` |
| Loading | `xwfXZ.png` |
| Error + retry | `wH6eU.png` |
| Service disabled | `ubUWJ.png`, scrolled `Qyayp.png` |
| Service picker open | `Dbjwn.png` |
| Drafts, resumable and access-revoked locked | `sKIid.png`, scrolled `CjdB9.png` |
| Wardrobe permission | `y8W79.png` |
| Profile menu open | `u99Hlb.png` |
| Normal status / scroll end | `cG46Q.png`, `s24EP.png` |
| Stress chart + long Entity / amount | `Od6Qd.png` |
| Full normal / stress content | `cD8aK.png`, `ktDJv.png` |

Visual decisions: ink prioritizes attention tasks, blue marks actions/services, white separates supporting data; DM Sans and semantic colors inherit reference Foundations. One column follows attention → active services → status → latest requests. Spacing uses 8/12/16/20 px to separate related metadata and tasks. Services retain equal touch targets. Existing badge, primary button and active Mobile navigation sources are instanced; content sources are reusable by viewport and scroll specimens. ENERGY 1 / RHYTHM 2 / MOTION 1; no new visual foundation or motion effects. Icons follow existing Lucide foundation and remain paired with labels or explicit layer names.

Checks: full-content bounds inspection reports no layout problems; viewport clipping is intentional only in the vertical scroll region. Buttons, tabs, header icons, close controls and nav targets are at least 44 px high. Stress chart colored widths 129.1667 / 103.3333 / 77.5 px across 310 px, with two 4 px gaps in a 318 px rail: exact 5/4/3. Sample-data disclosure lives in each Mobile screen/content frame name (`Data contoh · Requester`), not in the product UI. All 15 viewports have one blue unread badge `5` on the bell, replacing the header helper text. Header/viewport/navigation dimensions remain unchanged; existing scroll specimens were realigned to their original sections after removing the disclosure row. Picker and profile use the same x=16, width=358, radius=24, padding=20, scrim/close treatment and 16 px bottom inset (picker y=576, height=252; profile y=658, height=170). Statuses, complete amounts, request IDs, public Finance notes, draft expiry/access-revoked distinctions and service/permission visibility are retained. Wardrobe is absent without permission; Overtime is absent from new-service actions when disabled, while its existing request remains visible.

Static interaction handoff: create → service picker; active service → existing form flow (not modified); Revision → existing detail/revision flow; Upload bukti → existing Payment Request proof flow; latest/draft tabs → their respective specimens; resumable draft → existing draft flow, locked draft has no resume action; all requests → existing PG-04; bell → existing notifications flow; profile → profile sheet, close/scrim/Escape → return focus to trigger; Keluar → existing auth handling; retry → reload dashboard; Wardrobe only with permission. Implement body vertical scrolling with fixed header/nav and retain bottom content padding. Runtime focus trapping, accessible names/announcements, scroll interaction, keyboard and screen-reader checks remain unverified, not canvas PASS claims. No other flow was designed or implemented.

## PG-04 alignment, issue #7: Desktop review gate

**Current delivery:** Requester Desktop only, awaiting owner review. Branch `design/pg04-request-list` starts from merged `main` commit `e5f7682`. Owner authorized merges in sequence #2 → #4 → #6; all three were verified MERGED, and their original heads remain ancestors of main. Main's canvas matched the approved PG-02 checksum `da17e7b60a92fcc3f1c8cdcdf996ca69c5f5407134b16ae16051279bbbed90dd`. Earlier OPEN/dependency notes in this handoff are historical; these dependencies are now merged.

Read references: legacy PG-04 Desktop `cmfPt` and Mobile `UnqY7`, still under the unaligned flow family. Both are preserved, not relabeled as approved. The new Desktop candidate is `k0okVa`, 1440 × 960, following the approved Dashboard shell (248 px Requester rail, selected Pengajuan, inset gray workspace, white list surface, DM Sans, restrained blue actions). It preserves the legacy four request numbers/titles/services/statuses/amounts/next steps; Entity/date metadata comes from approved Dashboard fixtures. Default order is descending date. Six-digit legacy sample identifiers remain unchanged, not a new numbering rule.

[Individual 2× renders and acceptance notes](../../design/png/pg04-desktop/README.md): normal `k0okVa`, filtered `i2vM8K`, no results `EyHtN`, empty `V3myh`, loading `F65id0`, error `T0RTci`, service disabled `my54M`, status menu `ORuMN`, date filter `a2cZo`, export format menu `HKI9M`, export generating `IVTFX`, export error `gFHa4`, export denied `it9Zo`. Sample disclosure is in frame names, not product UI helper text. All ten PRD workflow status tokens are visible in the status-filter specimen; Draft is not a workflow status and remains in the existing Dashboard/form flow.

Presentation rationale: one list surface supports scanning rather than a card per request; metadata/status/amount/next step have stable aligned columns. Existing search/button/status sources are instanced with scoped visual overrides; the approved Requester rail is copied and its selected state changes only in the copies. Search + service/status/date filters preserve context. List export offers CSV/Excel and must apply filters, tenant/ownership and permission rules; PDF remains in existing detail/export flows, not a new PG-04 list feature. Changing service access hides Overtime from new-service navigation while retaining its existing request. No bulk decision, direct cancel, editable terminal request or sensitive profile data is introduced.

Static handoff: filter/search/date/sort changes recompute results and reset pagination; no-result recovery clears search, empty recovery opens existing service picker, error retry reloads without discarding filter inputs. Detail targets existing PG-06/08/10; Revision only opens permitted fields there, vendor-proof actions only for Payment Request. Export entry routes existing PG-17 behavior; generating/failed/denied specimens only show feedback within the list, not a new export flow. Previous/next are disabled for the one-page fixture. Requester scope is own requests within the account organization; Admin queue expansion is not part of this delivery.

Checks: saved JSON contains 13 fixed Desktop frames with selected Pengajuan; legacy data and all status tokens retained. Every node from merged main (including Foundations, Components, approved Desktop/Mobile and both PG-04 reference screens) is recursively identical; variables unchanged. Canvas bounds inspection reports no enabled layout problems. PNGs are 2880 × 1920. `impeccable detect --json reimburse.pen` returned `[]`; this is not a substitute for runtime/accessibility testing. Controls are visual specimens only; filters, export, keyboard, focus and authorization are not implemented by Pen. Operate mode, ENERGY 1 / RHYTHM 2 / MOTION 1; no new theme or motion effects.

### Shared chrome extraction before Mobile

Owner requested reuse rather than further visual polish. Shared sidebar `TFVJz` and header `Igbr1` in board `C5b1W` now serve 13 PG-04 Desktop and 10 Dashboard/state screens, with page-active/state overrides. Existing search, badge and button instances outside the extracted chrome remain connected and keep their IDs; the normal PG-04 header's original primary-button instance is retained inside the shared source. The two header variants preserve the approved differences in geometry. Old legacy component specimens are not promoted to replace the approved appearance.

[Regression evidence](../../design/png/desktop-chrome/README.md): all 23 before/after renders at 2× are byte-identical, including all PG-04 states and Dashboard normal/picker/permission/drafts/empty/loading/error/service-disabled/stress/profile. Re-exported PG-04 PNGs therefore have no artificial binary diff. Dashboard normal and component-board renders are provided separately. Existing local canvas arrangement (frame positions and area labels) was present at task start and retained; no re-layout of the user's canvas organization was performed.

**Stop gate:** PG-04 Mobile is not started. After owner reviews Desktop, Mobile must adapt this candidate to a fixed viewport with vertical scrolling, preserving information/permissions/states. Do not merge the PG-04 PR or continue another flow without owner approval.

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