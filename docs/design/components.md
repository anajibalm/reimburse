# Reusable components

**Source:** active Pencil canvas [`../../design/reimburse.pen`](../../design/reimburse.pen). **Observed after the PR #16 correction pass:** 84 reusable component sources, 1,585 `ref` instances, and no references to missing source components. Earlier counts describe prior canvas snapshots.

## Current source IDs

| Component source | ID | Intended design use |
|---|---|---|
| `Component/Status/Badge` | `ugMIf` | Text-labelled status badge. |
| `Component/Navigation/Requester item` | `rcSIl` | Requester navigation item. |
| `Component/Action/Service` | `OutTg` | Service action. |
| `Component/Button/Primary` | `fFmN2` | Primary action button. |
| `Component/Request/Attention row` | `ejaL8` | Request needing attention. |
| `Component/Status/Summary row` | `cveXh` | Status and count row. |
| `Component/Request/Recent row` | `ZED2N` | Recent request. |
| `Component/Navigation/Mobile/Pengajuan active` | `IenEv` | Selected mobile request navigation. |
| `Component/Navigation/Mobile/Dashboard active` | `HVFcd` | Selected mobile dashboard navigation. |
| `Component/Navigation/Desktop/Rail/Pengajuan active` | `OqKxN` | Selected desktop request navigation. |
| `Component/Button/Secondary` | `WQYrQ` | Secondary action. |
| `Component/Button/Destructive` | `yMFz0` | Destructive action. |
| `Component/Button/Icon` | `mwWWZ` | Icon-only specimen; needs an accessible name in code. |
| `Component/Field/Text input` | `jSgCJ` | Text field. |
| `Component/Field/Select` | `bEhaY` | Select field. |
| `Component/Filter/Chip` | `OIn8U` | Filter chip. |
| `Component/Status/Draft save` | `ZG1Vb` | Draft save status. |
| `Component/Field/Search` | `NdxOT` | Search field. |
| `Component/Card/Surface` | `R3SjN` | Surface container. |
| `Component/Amount/Metadata` | `GRgG6` | Amount with metadata. |
| `Component/Evidence/Upload row` | `dDnbj` | Evidence file row. |
| `Component/State/Reimbursement/Wardrobe proposal` | `R5Sfm7` | Conditional wardrobe specimen, not default category. |
| `Component/Payment Request/Recipient choices` | `JaAzO` | KOL/Talent/Freelance choices. |
| `Component/Workflow/Event row` | `Kqzs2` | Illustrative workflow history row. |
| `Component/State/Empty` | `RqG5U` | Empty state. |
| `Component/State/Loading` | `rsjnI` | Loading state. |
| `Component/State/Error` | `T6Z2A4` | Error and recovery specimen. |
| `Component/State/Notice` | `fNnTg` | Revision, proof, and status notice. |
| `Component/Dialog/Confirm action` | `UAO5L` | Confirmation dialog specimen. |
| `Component/Notification/Item` | `bppZh` | Notification specimen. |
| `Component/Navigation/Desktop sample` | `YXAsq` | Desktop navigation specimen. |
| `Component/Navigation/Mobile sample` | `FhVEI` | Mobile navigation specimen. |
| `Component/Request/List row` | `kohdT` | Request list row. |
| `Component/Card/Light` | `O2KcPY` | Light card. |
| `Component/Card/Dark` | `LQCBa` | Dark card. |
| `Component/Tile/Status` | `N5wobu` | Status tile. |
| `Component/Bar/Status` | `OUYex` | Status bar specimen. |
| `Component/Sidebar/Rail` | `Odk8q` | Sidebar rail. |
| `Component/Page/Header` | `gzK11` | Page header. |
| `Recent status badge 0` | `R5NHOj` | Current canvas source name as observed. |

## PG-02 Mobile additions, issue #5

Shared-source board `XyHpr` contains `Component/PG-02 Mobile/Content/Normal` (`cD8aK`) and state content sources: stress `ktDJv`, empty `A0TrpX`, loading `ETo1F`, error `OzT4j`, service disabled `R5pMt`, picker `GZTkJ`, drafts `uejEq`, Wardrobe permission `aXibN`, profile `GQXOn`. Viewports instance these sources; scrolled views use the same source with a vertical offset, not separate content datasets.

Mobile compositions reuse `fFmN2` buttons, `R5NHOj` status badges and `HVFcd` active Dashboard navigation, with scoped typography/shape overrides following reference Foundations. Existing component sources and variables are unchanged. Mobile source and viewport frame names carry `Data contoh · Requester`; the disclosure is not UI copy. Unread badge `5` is scoped to each Mobile bell; no shared source was modified for it. Profile and picker sheets share bottom alignment and surface/control styling. Full-content sources are deliberately long, while screen viewports remain 390 × 844; see [`screens.md`](screens.md) for dimensions, state evidence and static interaction limitations.

## Shared Desktop chrome, issue #7 / PR #8

Board `C5b1W` (`COMPONENTS/Desktop shared chrome · Dashboard + Pengajuan`) contains two shared sources:

| Source | ID | Use |
|---|---|---|
| `Component/Desktop/Requester sidebar` | `TFVJz` | 23 screen instances: 10 Dashboard/state screens and 13 PG-04 Desktop screens. Page-active colors, greeting/count, service sub-selection, optional Wardrobe, and profile-open state are descendant overrides. |
| `Component/Desktop/Page header · page variants` | `Igbr1` | Same 23 screens. Dashboard variant `P5kQ8L` and Pengajuan variant `cyhjq` toggle via `enabled`; instance names and the saved descendant `enabled` overrides identify the page. Variants preserve approved, different header geometry rather than forcing one visual arrangement. |

The original PG-04 header subtree (`cyhjq`) was moved into the source; its existing primary-button instance `xaXdi` remains connected to `fFmN2`. Original Dashboard header elements were moved from `j5omxK` into the Dashboard variant. Other extracted headers are connected instances of the shared source, not flattened button copies. Existing search/status/action instances outside chrome retain their original IDs and references. Legacy `Odk8q`, `OqKxN`, `gzK11` specimens and other already-correct component sources/instances are not replaced or restyled.

Sidebar default is Dashboard active; Pengajuan active overrides only selected-item fills/weights. Optional permission/menu nodes are disabled by default and enabled only by the matching state overrides. Header Dashboard is 1160 × 91 at workspace origin; Pengajuan is 1112 × 63 within the existing list layout. No typography, copy, business data, viewport or Foundation variables change. Preserve Dashboard picker-shadow stacking: the shared header must precede the picker/content nodes.

[Source render, Dashboard render and regression report](../../design/png/desktop-chrome/README.md): 23 before/after 2× PNGs are byte-identical (0 changed pixels). The two board previews are extra instances, not additional product screens. PG-04 Mobile remains untouched and gated on Desktop review.

## PG-04 Mobile additions, issue #7

Board `ajYH7` contains `Component/PG-04 Mobile/Request row` (`jzecl`) and ten reusable content variants for normal, filtered, no-results, empty, loading, error, service-disabled, export generating/error/denied. Row instances override ID, title, Entity/date, nested status, amount and next step, with 44 px detail target. State viewports reference these source contents rather than duplicating list data.

Shared toolbar `ruMUp` provides Filter with active count and Urutkan across all ten content states; removable chips instance `xkwe5`. Unified sheet `LvtoT` contains a scroll viewport with service/status/date; date group `OPcBq` has 16 px spacing and contains `Hapus tanggal`. The fixed footer contains only `Terapkan` / `Hapus filter` at 8 px separation. Sheet viewport height 532 px; scroll is visual handoff, not implementation.

PG-04 Mobile reuses the approved PG-02 header composition and existing `IenEv` Pengajuan-active navigation, `NdxOT` search, `R5NHOj` status, `jSgCJ` fields, and `fFmN2` / `WQYrQ` actions. Existing source nodes were not changed. Bottom sheets are static specimens with 44 px options/close targets; the unified filter sheet has an intentionally clipped scroll region and end-position specimens. Full state mapping and render links: [`screens.md`](screens.md) and [`../../design/png/pg04-mobile/README.md`](../../design/png/pg04-mobile/README.md).

## Reimbursement Requester candidates, issue #9

`HZlnt` is a reusable Mobile form content source; `Kc4qh` is a reusable Reimbursement detail content source. Viewports instance these with state-specific descendant overrides. Existing `jSgCJ`, `dDnbj`, `fFmN2`, `WQYrQ`, `R5NHOj`, `TFVJz`, `Igbr1` and `IenEv` sources are unchanged. Revision, evidence and status are visual handoff only: opacity or labels must not replace backend authorization or validation. See [`screens.md`](screens.md) and [state renders](../../design/png/reimbursement-requester/README.md).

### Reimbursement evidence/invoice closure

`cyWLX` contains reusable `Ni2at` invoice specimen (nested existing `dDnbj` primary proof), `ZbNcU` file/link choice, `qKcNz` link entry, and seven reusable state content sources. Desktop/Mobile state specimens instance those sources. Two-invoice fixture totals Rp 1.500.000 (Rp 1.250.000 + Rp 250.000); after removing the second invoice Rp 1.250.000. Additional proof contributes zero to total. Existing component sources and variables are unchanged. Flow annotation board `t37lr` names screen IDs and is static; see [render index](../../design/png/reimbursement-requester/README.md).

## Payment Request and Overtime review corrections · issue #13

Board `o0h9YD` contains the reusable Overtime date entry `IF8Ci`, with distinct date/start/end controls, evidence row and calculated duration/subtotal. PG-09 one-date and two-date form specimens instance it with date-specific overrides. Requester detail sources `F07dGp` (Payment Request) and `amQuh` (Overtime) compose the approved PG-06 `Kc4qh` detail pattern, including status, read-only summary, evidence and history; PG-08/10 main and workflow-status specimens instance them. Cancellation confirmation and validation states stay separate. These remain static candidates, not runtime or authorization evidence.

## Admin Finance shared sources · issue #15 / PR #16

| Source | ID | Use |
|---|---|---|
| `Component / Admin Finance sidebar` | `fTzqJ` | Shared Desktop Admin shell, derived from approved Requester sidebar `TFVJz` with Admin role, active queue navigation and operational guidance. |
| `Component / Admin Finance narrow header` | `yLJBd` | Shared 390 px header retaining approved brand mark, Admin Finance role and page title. |
| `Component / Admin Finance decision summary` | `G1vZd` | Shared confirmation summary used by Revision `QdWeP` and Finance Approved `AvxAT`. |

Desktop Admin screens continue to instance approved page header `Igbr1`; queue/review status labels instance `R5NHOj`. Narrow queue rows instance `jzecl`, and correction/document actions reuse `WQYrQ`; Payment Request tax treatment reuses `bEhaY`. Sample disclosure is in frame names/handoff, not UI copy. These references establish canvas reuse only, not runtime behavior or authorization.

## Usage boundaries

- Canvas variables include `fieldBorder = #858D97` and `redesign-control-border = #7F8790`. Their control mapping differs or remains unresolved; see [`foundations.md`](foundations.md).
- Keep status text visible; color is supplementary. Use exact PRD status tokens.
- Keep sample values marked `Data contoh`.
- Pen nodes are visual specimens. They do not prove navigation, filtering, submission, validation, dialog behavior, keyboard access, or screen-reader output.
- Old handoff IDs for PG-02 compositions (`mhjio`, `ye3Sw`, `T6817v`, `c7j3d`, `hArFP`, `gUzaB`, `lS6bt`) did not resolve in the current canvas inspection. Search the live canvas by name before editing a composition; do not reuse stale IDs.
