# Design foundations

**Status:** handoff for review, 2 Nov 2026. The active design source is [`../../design/reimburse.pen`](../../design/reimburse.pen). PRD owns product rules. This file records the current canvas structure and key visual foundations; it does not turn static screens into implemented behavior.

## Active canvas

- `AREA/01 Foundations` (`DDugW`) contains `Foundations 01 · Visual direction and tokens` (`VD4Fy`) and `Foundations 02 · Layout and composition` (`ceXop`). Both label implementation values as provisional.
- `AREA/02 Components` (`h1ssGO`) contains reusable component sources and specimens.
- Requester flows sit under Desktop (`aCU9x` → `CkeTr`) and Mobile (`O1TbO` → `ABhFi`). Separate `REDESIGN` frames exist; `REDESIGN/03 Requester dashboard · Mobile` is marked `Belum diselaraskan`.
- `REDESIGN/09 Accessibility states & handoff` (`s0JUr`) is a visual handoff specimen. Its keyboard, zoom, forced-colors, and screen-reader requirements need implementation and testing; the canvas does not prove them.

For screen-level coverage and known variant limits, see [`screens.md`](screens.md). For reusable-source names and current IDs, see [`components.md`](components.md).

## Visual direction

Canvas Foundations/01 describes a light Requester workspace informed by bento composition: quiet rail, large task panel, supporting service and status areas, and a wide recent-request list. The design uses electric blue for action/focus, one dark status surface, visible textual status labels, and equal visual weight for the three services. Foundations/02 shows dashboard, form, and detail composition recipes. These are design rules for review, not PRD business rules.

The canvas calls colors, typeface, sizes, and layout choices implementation estimates. Do not infer source-image pixel values or final production tokens from those estimates.

## Canvas values and unresolved token mapping

Foundations/01 displays these values: canvas `#F0F1F2`, surface `#FFFFFF`, electric/action blue `#0866D9`, ink `#191B20`, dark surface `#17191D`, and spacing samples `4`, `8`, `12`, `16`, `24`, `32` px. Its spacing/radius board lists control `4`, field `8`, panel `14`, and shell `18` px. The values remain draft.

The live canvas defines `fieldBorder = #858D97` and `redesign-control-border = #7F8790`. Foundations/01 labels the first `3.36:1 on white` and describes it as meeting the 3:1 non-text boundary threshold. The role and screen mapping of the second token have not been reconciled. Preserve both until design review; do not replace them by inference. The light `line = #E3E6EA` variable is separate from field-border values.

Anotasi `GWrQ6` (`Annotation · Unresolved control border tokens`) ditambahkan ke
`VD4Fy` untuk mencatat kedua token tersebut beserta pernyataan bahwa pemetaannya
belum diputuskan. Tidak ada nilai variabel yang diubah. Karena blok anotasi
menambah tinggi, `VD4Fy` tumbuh 860 → 1050 px dan export
`reference/FOUNDATIONS-01-Visual-direction-and-tokens.png` diperbarui.

Canvas Foundations/01 also records selected status contrast values: success 4.85:1, warning 4.85:1, and danger 5.75:1 on tinted surfaces. These are canvas notes, not a fresh contrast audit of every rendered screen, state, opacity, or export.

## Token status netral

Dua variabel ditambahkan untuk membedakan status yang menunggu tanpa memakai
warna semantik atau biru aksi. Keduanya diukur pada `$subtle` `#F7F8FA`:

| Variabel | Nilai | Kontras | Dipakai |
|---|---|---:|---|
| `status-neutral-1` | `#65737C` | 4.60:1 | `Pending` (antre, belum diproses Admin) |
| `status-neutral-2` | `#4D5662` | 7.00:1 | `Finance Approved`, `Approved`, `Return to Admin`, `Maker Done` |

`status-neutral-1` hanya memiliki margin 0.10 di atas ambang 4.5:1 untuk teks
12 px; opacity atau alpha tidak boleh diterapkan pada subtree yang memuat badge.
Total variabel kanvas menjadi 43. Nilai tetap draft sampai diuji pada layar
produk.

## PG-06 ringkasan pemeriksaan · draft handoff

Owner-directed PG-06 refactor uses existing Foundations/01 ink `#191B20`, muted `#626C78`, line `#E3E6EA`, warning `#986000` and warning-soft `#FFF5E5`. Amounts are 22/700, section titles 16/700, key labels 13/400, values 14/500 and helper text 12/400. This is local PG-06 alignment, not a change to Approved foundation boards or global canvas variables. No 28/700 amount or 14/600 value proposal is applied.

Draft token `$warning-line` maps to `--warning-line: #98600040` in `tokens.css`: the existing warning hue at approximately 25% alpha, not a new palette. The PG-06 private-copy alert uses this literal locally because no global canvas variable may be added/changed in this pass; warning-soft also maps to the existing CSS handoff color. Alert: 1px border, radius 8px, padding 12px, info icon 16px, text 13/400, immediately before Simpan salinan privat.

**Warning grammar extension, draft for owner review:** warning means a party must act before the workflow can continue, not only the Requester. Here Admin Finance must validate and save the private evidence copy. This does not change status names, Pending's neutral badge, permissions or button logic; existing Approved specimens are untouched.

Key-value rows retain a fixed 140px Desktop / 110px Narrow label column and a filling value column, both left aligned; labels wrap within their own column. Rows use 8px gaps and 6px vertical padding. Sections are separated by 20px; 1px line dividers mark only 1|2 and 3|4. Invoice amount is omitted when equal to the displayed request total. Public/internal and correction-audit helpers belong next to their corresponding actions, not in request information.

## Frame sizes observed

Canvas frames use multiple sizes. Examples directly observed in the active file:

| Frame family | Desktop | Mobile |
|---|---:|---:|
| PG-04 list and PG-06/08/10 detail variants | 1440 × 900 | 390 × 844 |
| Dashboard redesign | 1440 × 960 | 390 × 1475; marked unsynchronized |
| Reimbursement, Payment Request, Overtime form redesign | 1280 × 1180 | 390 × 1680 |

Treat sizes as frame dimensions, not tested browser breakpoints or guarantees of no clipping at other viewport sizes. Flow and redesign variants may differ in content and state.

## Code and CSS handoff are separate

- [`tokens.css`](tokens.css) is a draft CSS handoff. It is not imported by `prototype/react-dashboard` and is not a production stylesheet.
- `prototype/react-dashboard/src/App.css` has its own stylesheet values, DM Sans/Manrope typography, and a 220px sidebar. Those running values differ from the Pen and draft handoff; do not claim token implementation or visual parity.
- Current screenshot exports are indexed in [`../../design/png/INDEX.md`](../../design/png/INDEX.md). The active canvas is authority for present screen names and variants; old export filenames are evidence of prior captures, not canonical layer names.

No production API, authentication, data source, real workflow, private-file behavior, or responsive accessibility behavior is established by this design handoff. See [`../progress/implementation.md`](../progress/implementation.md) for code evidence.