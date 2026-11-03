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

The latest owner-directed PG-06 two-pass brief supersedes the earlier local 22/700 amount rule: hero 28/700 with 34px line-height; invoice and audit amounts 13/500 with 18px line-height; section/card titles 16/600. Text 14px uses 20px line-height, 13px uses 18px. Existing global tokens and Approved boards are untouched. Owner-specified local divider `#EEE` and helper `#6B7280` are scoped to PG-06, not new global colors.

**Pass 1, layout only:** fixed 140px Desktop / 120px Narrow labels, 16px label/value gap, 12px between field rows; 32px Desktop / 24px Narrow section rhythm; heading-to-first-content 12px. Outer card padding is 24px Desktop / 20px Narrow. The final locked divider rule wins over earlier 24/24 and hero-to-divider 20 instructions: 16px above/below Desktop, 12px above/below Narrow, excluding the 1px rule. Approver is the last row in Rincian pengajuan, with its status-gate sub-row and no separate divider/column. Secondary actions have 12px gaps and one helper below them; decision group starts 24px later, Reject/primary gap is 16px. Controls are 44px tall with 16px horizontal padding. File cards use 12px/16px padding, 13/600 filename, 12px state, 2px internal text gap. Form heading/description gap 8px, field gaps 16px, label/input and input/helper 6px, last-field/actions 24px; gray key-value summaries have 16px padding and 8px row gaps. Explicit values such as 20px card padding and 6px input gaps are brief-specific exceptions to the spacing scale.

**Pass 2, copy/state:** Nominal invoice remains visible in every PG-06 specimen at 13/500; only unequal amounts get a difference badge. Corrected hero is Rp1.200.000, comparator Rp1.250.000, with history amounts kept at 13/500 rather than display scale. The single 12/18 helper below group (a) combines the existing correction/audit and public/internal sentences, color `#6B7280`, max-width 60ch. No separate helpers remain beside each secondary action.

Keputusan produk untuk PG-06: total setelah koreksi adalah nilai otoritatif; nominal invoice dan riwayat tetap nilai asli sebagai pembanding.

Draft `$warning-line` still maps to `--warning-line: #98600040`, existing warning hue at approximately 25% alpha. Warning-soft remains `#FFF5E5`. The inline alert has 1px border, radius 8px, padding 12px/16px, 16px info icon, 8px icon/text gap and 13/18 text. It sits immediately above Teruskan ke Approver, with 24px before the alert and 12px between alert and primary. Simpan salinan privat is a recovery action below the file card, not the alert's attachment point.

**Warning grammar extension, draft for owner review:** warning means a party must act before continuation, not only Requester. Until the private copy is saved, forwarding is **visible disabled**, not hidden, in `i8by7`, `Ngiia` and `MFCrl`. Canvas `enabled: true` controls visibility, not native disabled behavior; muted styling and layer name `Finance Approved · Disabled · private-copy-required` express the specimen state. Implementation must use an actual disabled control, not styling alone. Old Desktop gate companion `O4I60g` is removed; `i8by7` remains a blocked variation of the same review page, not a separate gate destination. No permissions/status rules change.

**Renderer limitation, not a verified feature:** the Pen schema has neither baseline alignment nor font-feature/tabular-numeral properties. Canvas uses fixed columns and top alignment; it does not prove exact first-baseline alignment or tabular digit widths. Scoped draft `.pg06-review` rules in `tokens.css` specify `align-items: baseline` and `font-variant-numeric: tabular-nums` for implementation. These rules are not imported by a product app. Verify baseline, digit widths, keyboard and disabled behavior in the eventual frontend; do not report them as passing canvas tests.

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