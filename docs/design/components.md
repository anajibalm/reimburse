# Reusable components

**Source:** active Pencil canvas [`../../design/reimburse.pen`](../../design/reimburse.pen). **Observed 31 Oct 2026:** 40 reusable component sources, 242 `ref` instances, and no references to missing source components. Earlier counts of 33 sources / 303 references describe a prior canvas snapshot.

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

Mobile compositions reuse `fFmN2` buttons, `R5NHOj` status badges and `HVFcd` active Dashboard navigation, with scoped typography/shape overrides following reference Foundations. Existing component sources and variables are unchanged. Full-content sources are deliberately long, while screen viewports remain 390 × 844; see [`screens.md`](screens.md) for dimensions, state evidence and static interaction limitations.

## Usage boundaries

- Canvas variables include `fieldBorder = #858D97` and `redesign-control-border = #7F8790`. Their control mapping differs or remains unresolved; see [`foundations.md`](foundations.md).
- Keep status text visible; color is supplementary. Use exact PRD status tokens.
- Keep sample values marked `Data contoh`.
- Pen nodes are visual specimens. They do not prove navigation, filtering, submission, validation, dialog behavior, keyboard access, or screen-reader output.
- Old handoff IDs for PG-02 compositions (`mhjio`, `ye3Sw`, `T6817v`, `c7j3d`, `hArFP`, `gUzaB`, `lS6bt`) did not resolve in the current canvas inspection. Search the live canvas by name before editing a composition; do not reuse stale IDs.
