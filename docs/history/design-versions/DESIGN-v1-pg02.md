---
version: alpha
name: Reimbursement PG-02 Desktop
description: "Values captured from final Pen frame PG-02 Dashboard · Desktop · Viewport at 1440 × 900. This spec describes this frame only; do not extrapolate to unreviewed screens."
colors:
  primary: "#0866D9"
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
rounded:
  card: 24px
  action-row: 20px
  pill: 999px
  inactive-navigation: 8px
spacing:
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
---
> **Historical handoff:** superseded by [`../../design/foundations.md`](../../design/foundations.md) and active [`../../../design/reimburse.pen`](../../../design/reimburse.pen). This snapshot only described one desktop frame; its measurements do not define current variants.
## Overview

Scope: accepted PG-02 Requester desktop frame only. Tokens below are read from its Pen nodes, not estimated from the reference image. Other roles, screen families, and breakpoints remain unspecified.

## Colors

- Workspace uses `canvas`; surface cards are white; service rows use `surface-subtle`; attention panel uses `dark-surface`.
- `primary` is the bright blue used by the main task button, service icons, the Finance Approved marker, and the recent-list link in the current frame. Status colors always retain written labels.
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

- Cards have no visible border; frame fill and stroke match. Main panels use 24px radius; service-launcher rows use 20px; action buttons and selected navigation use pill radius. The inactive navigation row uses 8px radius.
- Primary and secondary action buttons are 44px high and pill-shaped. Service-launcher rows are 72px-high rounded action cards, not standalone button shapes. No shadow token appears in this frame.

## Components

- **Sidebar:** selected Dashboard row is dark, pill-shaped, 40px high, with white icon and label. Inactive items remain on white.
- **Attention:** one dark panel holds next-action context, task count, request reason, status, amount, and permitted action. Per-request dividers remain subtle.
- **Service launchers:** neutral subtle rows with equal visual weight; no service is promoted over others.
- **Status summary:** four large counts, written status names, example nominal, colored marker, and one segmented bar. Bar segments correspond to one example request per status.
- **Recent requests:** show only requests absent from the attention panel. Do not repeat active attention items.
- **Buttons:** primary task action uses blue; secondary action uses white. Both use pill geometry.

## Aturan gaya

- Kartu hitam hanya untuk satu blok `Perlu perhatian` per layar; biru hanya untuk aksi utama; kartu tanpa border; angka ringkasan besar dan rapat; semua tombol berbentuk pill.
- Aturan biru adalah target gaya. Frame final masih memakai biru pada status `Finance Approved`, ikon layanan, dan link `Lihat semua pengajuan`; jangan menyamarkan selisih ini sebagai konsistensi.
- Baris peluncur layanan adalah kartu aksi radius 20px, bukan tombol pill.

## Do's and Don'ts

- Pertahankan jarak, warna, radius, dan hierarki di atas hanya saat mengadaptasi PG-02 desktop; jangan menyebarkannya ke layar lain sebelum disetujui.
- Jangan menambah metrik, data, status, panel gelap kedua, border kartu, atau aksen baru.
- Angka dan request yang ditampilkan adalah data contoh; status tertulis tetap utama, bukan warna.
- Cek kontras dan clipping pada hasil render setiap revisi. Nilai kontras dalam file ini berasal dari warna node frame, bukan jaminan untuk opacity atau efek lain.

