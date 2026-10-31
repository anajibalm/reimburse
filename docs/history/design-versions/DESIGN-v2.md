---
version: alpha
name: Reimbursement PG-02 Desktop
description: "PG-02 Desktop is visual authority. Retained compatibility tokens preserve existing handoff and active reusable-component contracts."
colors:
  primary: "#0866D9"
  primary-strong: "#064FA8"
  field-border: "#858D97"
  accent-soft: "#E8F1FF"
  canvas: "#F0F1F2"
  surface: "#FFFFFF"
  surface-subtle: "#F7F8FA"
  dark-surface: "#17191D"
  dark-badge: "#2C2D31"
  ink: "#191B20"
  text: "#252A31"
  muted: "#626C78"
  border: "#E3E6EA"
  inverse-text: "#FFFFFF"
  inverse-muted: "#D8DDE5"
  primary-soft: "#E8F1FF"
  success: "#16794B"
  success-soft: "#E9F5EE"
  warning: "#986000"
  warning-soft: "#FFF5E5"
  danger: "#B42318"
  danger-strong-surface: "#3B2B2D"
  danger-strong-text: "#FFC5C1"
  danger-strong-dot: "#F17C75"
  danger-soft: "#FDECEA"
typography:
  page-title:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 700
  panel-title:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 700
  row-title:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
  label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
  support:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
  metadata:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: 400
  summary-count:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 700
    letterSpacing: "-1.2px"
  amount:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 700
  amount-large:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  section-title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  card: 24px
  action-row: 20px
  pill: 999px
  inactive-navigation: 8px
  control: 8px
  panel: 14px
  shell: 18px
  status-tile: 20px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 40px
  content-inset: 28px
  card-gap: 16px
  section-gap: 12px
  attention-padding: 20px
  create-panel-padding: 20px
  recent-panel-padding: 18px
  status-panel-padding: 12px
  compact-gap: 8px
  service-row-gap: 10px
  service-row-height: 72px
  navigation-height: 40px
components:
  workspace:
    backgroundColor: "{colors.canvas}"
  primary:
    backgroundColor: "{colors.primary}"
  subtle-surface:
    backgroundColor: "{colors.surface-subtle}"
  text-muted:
    textColor: "{colors.muted}"
  frame-divider:
    backgroundColor: "{colors.border}"
  task-count-badge:
    backgroundColor: "{colors.dark-badge}"
    textColor: "{colors.inverse-text}"
  attention-support:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.inverse-muted}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.inverse-text}"
    rounded: "{rounded.pill}"
    height: 44px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    height: 44px
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
  panel-attention:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.inverse-text}"
    rounded: "{rounded.card}"
  service-launcher:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.ink}"
    rounded: "{rounded.action-row}"
    height: 72px
  navigation-selected:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.inverse-text}"
    rounded: "{rounded.pill}"
    height: 40px
  status-success:
    backgroundColor: "{colors.success-soft}"
    textColor: "{colors.success}"
  status-warning:
    backgroundColor: "{colors.warning-soft}"
    textColor: "{colors.warning}"
  status-danger:
    backgroundColor: "{colors.danger-soft}"
    textColor: "{colors.danger}"
  status-finance-approved:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
  card-light:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
  card-dark:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.inverse-text}"
    rounded: "{rounded.card}"
  status-tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.status-tile}"
    height: 120px
  status-bar:
    rounded: "{rounded.pill}"
    height: 14px
  sidebar-rail:
    backgroundColor: "{colors.surface}"
    width: 196px
  page-header:
    height: 50px
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.inverse-text}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    height: 44px
    padding: 12px
  filter-chip:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    height: 40px
    padding: 8px
  navigation-mobile-selected:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.primary}"
  text-support:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
  decorative-divider:
    backgroundColor: "{colors.border}"
    height: 1px
  field-boundary:
    backgroundColor: "{colors.field-border}"
    height: 1px
  panel-emphasis:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.inverse-text}"
    rounded: "{rounded.panel}"
    padding: 20px
  panel-status-summary:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.inverse-text}"
    rounded: "{rounded.panel}"
  status-success-tint:
    backgroundColor: "{colors.success-soft}"
    textColor: "{colors.success}"
  status-warning-tint:
    backgroundColor: "{colors.warning-soft}"
    textColor: "{colors.warning}"
  status-danger-tint:
    backgroundColor: "{colors.danger-soft}"
    textColor: "{colors.danger}"
  status-danger-emphasis:
    backgroundColor: "{colors.danger-strong-surface}"
    textColor: "{colors.danger-strong-text}"
  status-danger-dot:
    backgroundColor: "{colors.danger-strong-dot}"
    height: 7px
    width: 7px
---
> **Historical handoff:** superseded by [`../../design/foundations.md`](../../design/foundations.md) and active [`../../../design/reimburse.pen`](../../../design/reimburse.pen). PG-02 desktop authority and compatibility claims below describe an earlier canvas state; inspect current canvas before use.
## Overview

Scope: PG-02 Requester Desktop is visual authority for this page. Legacy/adjacent-frame tokens remain when referenced by current CSS handoff or active reusable sources; they do not redefine PG-02.

## Colors

- Workspace uses `canvas`; surface cards are white; service rows use `surface-subtle`; attention panel uses `dark-surface`.
- `primary` is used in PG-02 for the primary action, recent-list link, service icons, and `Finance Approved` status marker/segment. Status colors also retain written labels.
- Visible status colors: `success`/`success-soft`, `warning`/`warning-soft`, `danger`/`danger-soft`, and `primary`/`primary-soft` for Finance Approved.
- Contrast ratios calculated from these frame values: white on dark surface 17.60:1; inverse-muted on dark 12.90:1; primary button white on blue 5.37:1; muted on white 5.34:1; muted on subtle 5.02:1; success, warning, danger, and Finance Approved label pairs 4.85:1, 4.85:1, 5.75:1, and 4.72:1 respectively. These pairs exceed WCAG AA for normal text; verify rendered exports after changes.

- Contrast warning: `border` (#E3E6EA) is 1.25:1 against white and 1.11:1 against `canvas`. Frame uses it only as a decorative sidebar divider; it is not sufficient for an essential control boundary (3:1 non-text criterion). DESIGN.md CLI does not analyze this divider pair.

## Typography

- Frame uses Inter. Page heading 24/700; panel headings 18/700; request titles and primary amounts 14/600–700; labels/support 11–13; ticket metadata 10; status counts 36/700 with `-1.2px` letter spacing.
- Keep summary count large and tight. Use muted color only for secondary text; attention instructions use the lighter inverse color.

## Layout

- Frame is 1440 × 900. Requester rail is 196px; desktop content inset is 28px. Main panel grid uses 16px gap; heading-to-grid spacing is 12px.
- Panel padding: attention 20px, create request 20px, recent list 18px, status summary 12px. Recent/status compact gaps are 8px; service rows use 10px spacing.
- `Buat pengajuan` and `Perlu perhatian` align at 360px high. Service rows distribute vertically within the panel; no extra content or metrics implied.
- This file does not define mobile behavior; mobile frame was not part of this token extraction.

## Shapes

- PG-02 cards have no border; major cards radius 24px, status tiles 20px, service launchers 20px, status/action pills 999px, inactive nav 8px. All buttons are pills.
- Service launcher is a named exception: 72px-high rounded row, not pill button. No shadow token appears in this frame.

## Components

- **Sidebar:** selected Dashboard item uses dark pill, 40px high; inactive items stay on white. PG-02 uses dedicated rail source.
- **Attention:** one dark `Perlu perhatian` card holds context, task count, requests, status, amount, and action.
- **Service launchers:** shared neutral rows with equal weight; radius 20px is the named button-shape exception.
- **Status:** `Tile/Status` presents count, amount, marker and label; `Bar/Status` mirrors four sample counts. Recent list excludes attention requests.
- **Reusable PG-02 sources:** `Component/Card/Light`, `Component/Card/Dark`, `Component/Tile/Status`, `Component/Bar/Status`, `Component/Sidebar/Rail`, `Component/Page/Header`.
- **Buttons:** blue primary action; task link, service icons and `Finance Approved` status also use blue. Visible buttons use pill shape.

## Aturan gaya

- Satu kartu gelap `Perlu perhatian` per layar; biru dipakai pada aksi utama, tautan, ikon layanan, dan status `Finance Approved`; kartu tanpa border; angka ringkasan besar dan rapat; semua tombol berbentuk pill.
- Pengecualian tombol: peluncur layanan berbentuk baris ber-radius 20px.

## Token compatibility audit

Token dipertahankan bila masih dirujuk oleh handoff CSS, definisi component, atau sumber reusable aktif. `tokens.css` berstatus draft dan menyatakan tidak diimpor oleh prototype/production.

| Token from `DESIGN-v0.md` | Consumer checked | Result |
|---|---|---|
| `colors.primary-strong` | `button-primary-hover`; `tokens.css --color-primary-strong` | Restored; handoff is not imported by prototype/production. |
| `colors.field-border` | `$fieldBorder` in `jSgCJ`, `bEhaY`, `NdxOT`; `tokens.css --color-field-border` | Restored; active input/select/search sources use `#858D97`. |
| `colors.accent-soft` | No current Pen source uses old name; `IenEv`/`HVFcd` use `$primarySoft` with same `#E8F1FF` value | Restored as legacy alias. |
| `colors.danger-strong-surface` | `ejaL8` Revision status source uses `#3B2B2D`; `status-danger-emphasis` | Restored. |
| `colors.danger-strong-text` | `ejaL8` Revision status source uses `#FFC5C1`; `status-danger-emphasis` | Restored. |
| `colors.danger-strong-dot` | `ejaL8` Revision status source uses `#F17C75`; `status-danger-dot` | Restored. |
| `typography.amount-large` | `tokens.css --font-size-amount-large` | Restored; CSS handoff not imported. |
| `typography.section-title` | `tokens.css --font-size-section-title` | Restored; CSS handoff not imported. |
| `typography.body` | `tokens.css --font-size-body` | Restored; CSS handoff not imported. |
| `rounded.control` | `jSgCJ`, `bEhaY`, `NdxOT`, `WQYrQ`, `yMFz0`; `tokens.css --radius-control` | Restored as 8px; PG-02 buttons remain pill. |
| `rounded.panel` | `panel-emphasis`, `panel-status-summary`; `tokens.css --radius-panel` | Restored for compatibility panels. |
| `rounded.shell` | `tokens.css --radius-shell` | Restored; CSS handoff not imported. |
| `spacing.xs` | `tokens.css --space-xs` | Restored; Pen nodes use numeric gap/padding values. |
| `spacing.sm` | `tokens.css --space-sm` | Restored; Pen nodes use numeric gap/padding values. |
| `spacing.md` | `tokens.css --space-md` | Restored; Pen nodes use numeric gap/padding values. |
| `spacing.lg` | `tokens.css --space-lg` | Restored; Pen nodes use numeric gap/padding values. |
| `spacing.xl` | `tokens.css --space-xl` | Restored; Pen nodes use numeric gap/padding values. |
| `spacing.2xl` | `tokens.css --space-2xl` | Restored; Pen nodes use numeric gap/padding values. |
| `spacing.3xl` | `tokens.css --space-3xl` | Restored; Pen nodes use numeric gap/padding values. |
| `components.input` | `jSgCJ` and `bEhaY` field-source patterns | Restored; 44px control, control radius, text/surface. |
| `components.filter-chip` | `OIn8U` | Restored at current 40px height (not v0 32px). |
| `components.button-primary-hover` | Static spec only; no hover state rendered by Pen | Restored; dynamic state unverified. |
| `components.text-support` | Compatibility text/surface pair; no separate active instance | Restored. |
| `components.decorative-divider` | `$line` sidebar divider style; no standalone divider component | Restored. |
| `components.field-boundary` | `$fieldBorder` on active field/select/search sources | Restored. |
| `components.panel-emphasis` | Compatibility alias for dark panel; new PG-02 source is `Component/Card/Dark` | Restored. |
| `components.panel-status-summary` | Mobile `Status berjalan` panel in `j2VAyn`/`NN8CZ` | Restored; not PG-02 Desktop panel style. |
| `components.status-success-tint` | `ugMIf`/`ZED2N` Paid status surfaces | Restored. |
| `components.status-warning-tint` | `ugMIf`/`ZED2N` Pending status surfaces | Restored. |
| `components.status-danger-tint` | `ugMIf`/`ZED2N` Revision/Rejected status surfaces | Restored. |
| `components.status-danger-emphasis` | `ejaL8` dark Revision badge source | Restored; PG-02 instance currently overrides it to light status chip. |
| `components.status-danger-dot` | `ejaL8` Revision marker source | Restored.

## Do's and Don'ts

- Pertahankan jarak, warna, radius, dan hierarki di atas hanya saat mengadaptasi PG-02 desktop; jangan menyebarkannya ke layar lain sebelum disetujui.
- Jangan menambah metrik, data, status, panel gelap kedua, border kartu, atau aksen baru.
- Angka dan request yang ditampilkan adalah data contoh; status tertulis tetap utama, bukan warna.
- Cek kontras dan clipping pada hasil render setiap revisi. Nilai kontras dalam file ini berasal dari warna node frame, bukan jaminan untuk opacity atau efek lain.

