---
version: alpha
name: Reimbursement Bento Ledger
description: "DRAFT — acuan visual internal workflow keuangan. Screenshot jadi referensi visual; PRD jadi otoritas kebutuhan. Nilai token adalah perkiraan implementasi, bukan hasil ukur."
colors:
  primary: "#0866D9"
  primary-strong: "#064FA8"
  ink: "#191B20"
  text: "#252A31"
  muted: "#626C78"
  canvas: "#F0F1F2"
  surface: "#FFFFFF"
  surface-subtle: "#F7F8FA"
  border: "#E3E6EA"
  field-border: "#858D97"
  dark-surface: "#17191D"
  inverse-text: "#FFFFFF"
  accent-soft: "#E8F1FF"
  success: "#16794B"
  warning: "#986000"
  danger: "#B42318"
  success-soft: "#E9F5EE"
  warning-soft: "#FFF5E5"
  danger-soft: "#FDECEA"
  danger-strong-surface: "#3B2B2D"
  danger-strong-text: "#FFC5C1"
  danger-strong-dot: "#F17C75"
typography:
  page-title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.03em"
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
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1.35
  support:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.4
rounded:
  control: 8px
  panel: 14px
  shell: 18px
  pill: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 40px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.inverse-text}"
    rounded: "{rounded.control}"
    height: 44px
    padding: 10px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    height: 44px
    padding: 10px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    height: 44px
    padding: 12px
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.panel}"
    padding: 20px
  panel-emphasis:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.inverse-text}"
    rounded: "{rounded.panel}"
    padding: 20px
  filter-chip:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    height: 32px
    padding: 8px
  workspace:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.inverse-text}"
  text-support:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
  navigation-selected:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.primary}"
  status-success:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.success}"
  status-warning:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.warning}"
  status-danger:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.danger}"
  decorative-divider:
    backgroundColor: "{colors.border}"
    height: 1px
  field-boundary:
    backgroundColor: "{colors.field-border}"
    height: 1px
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
> **Historical handoff:** superseded by [`../../design/foundations.md`](../../design/foundations.md) and active [`../../../design/reimburse.pen`](../../../design/reimburse.pen). Values below were estimates at the time, not current authority.

## Overview

**Status: DRAFT; uji pada layar nyata sebelum dianggap final.** Screenshot adalah sumber visual; `PRD.md` menetapkan isi, peran, izin, dan workflow. Adaptasi komposisi rail samping, header ringkas, dashboard asimetris, panel terang, nominal jelas, dan aksen electric blue. Promosi/analitik screenshot diganti dengan tindak lanjut, pengajuan, status, dan bukti. Screenshot tidak menetapkan token exact.

**Keyakinan token:** screenshot tidak membuktikan nilai warna, font, atau ukuran yang presisi. Semua angka/warna YAML adalah **PILIHAN IMPLEMENTASI** yang diinformasikan perkiraan visual; sesuaikan setelah render.

### Design Read
- **ENERGY 2 / RHYTHM 2 / MOTION 1.** Ritme bento hanya pada dashboard; form/detail mengutamakan tugas berurutan. Motion terbatas pada respons interaksi.

- **Motif identitas:** panel berukuran sesuai tugas; electric blue untuk aksi/fokus; satu dark summary dashboard; status selalu tertulis.

## Colors

- `canvas` = latar workspace; `surface` = panel/form; `surface-subtle` = kelompok kontrol sekunder tanpa membuat tiap kelompok menjadi kartu. `ink` dan `text` untuk judul, nominal, isi; `muted` hanya untuk metadata non-kritis.
- `dark-surface` dipakai paling banyak pada satu area per layar. Dashboard memakai bidang gelap untuk `Status berjalan`: ringkasan status adalah informasi finansial yang layak mendapat kontras dan menyeimbangkan panel perhatian, sedangkan tiga layanan Requester tetap setara karena PRD tidak memprioritaskan satu layanan. Form/detail tidak mendapat panel gelap otomatis. `success`, `warning`, `danger` selalu disertai label atau ikon.
- `field-border` adalah **PILIHAN IMPLEMENTASI** bagi input/select/search. `#858D97` memberi kontras terukur 3.36:1 terhadap `surface` putih; ukur ulang setiap keadaan saat render.
- Pasangan status-chip ter-render: `success` 4.85:1 (`#E9F5EE`), `warning` 4.85:1 (`#FFF5E5`), `danger` 5.75:1 (`#FDECEA`). Nilai warna tetap pilihan implementasi; status selalu memakai label teks.
- Varian Revision gelap pada task row dashboard: dot `#F17C75`/`#3B2B2D` = 5.02:1; label `#FFC5C1`/`#3B2B2D` = 8.93:1. Teks `Revision` tetap menjadi penanda utama.

## Typography

- Gunakan satu sans-serif netral. **Inter adalah PILIHAN IMPLEMENTASI**, bukan font yang teridentifikasi dari screenshot; fallback `system-ui`.
- Urutan: judul halaman ringkas; nominal/total paling menonjol; judul panel; isi; label; metadata. Nominal konsisten format mata uang, sejajarkan ke kanan dalam tabel, gunakan angka tabular bila tersedia.
- Bedakan hierarki lewat ukuran/ketebalan, bukan kapital penuh atau warna saja. Teks bantuan/error tetap terbaca; jangan pakai `muted` untuk instruksi penting.
- Ukuran dan bobot di YAML adalah **PILIHAN IMPLEMENTASI**.

## Layout

- **Desktop, perkiraan dari screenshot dan frame Pen:** shell memakai rail kiri sekitar seperlima lebarnya, header ringkas, dan konten ber-inset. Titik awal **PILIHAN IMPLEMENTASI** pada viewport 1280px: rail 196px (frame aktif Pen saat ini), inset konten 24px, ruang kerja sekitar 1084px. Screenshot menunjukkan rail sekitar seperlima shell; ukur ulang proporsi setelah render pada viewport target.
- Dashboard memakai grid dua kolom dengan konten utama sekitar 60–65% dan area pendukung 35–40%; satu baris konten utama dapat membentang lebar di bawah. Ukuran panel ditentukan oleh tugas dan kepadatan, bukan variasi dekoratif. Tidak ada masonry.
- Samakan tepi baris panel dan urutan baca; hindari masonry. Ukuran panel mengikuti prioritas dan isi. Jarak awal: 8px dalam grup kontrol, 12–16px antarkelompok terkait, 24px antarbagian. Jangan jadikan setiap elemen kartu: gunakan baris, divider, list, dan grup form datar bila lebih mudah dipindai.
- **Usulan mobile — tidak ditunjukkan screenshot:** rail menjadi menu/header ringkas; grid jadi satu kolom; judul dan aksi utama tetap mudah ditemukan; panel ditumpuk menurut prioritas; metrik sekunder di bawah tindak lanjut; filter membungkus atau masuk disclosure; tabel padat boleh scroll horizontal. Form satu kolom. Uji urutan pada layar Requester nyata.
- Prioritas mobile: tindak lanjut `Revision`/bukti tertunda → buat/lanjutkan pengajuan → ringkasan status → pengajuan terbaru. Admin berorientasi desktop menurut PRD; layar Admin mobile yang tersedia tetap harus terbaca dan aman.

## Elevation & Depth

- Pisahkan bidang terutama dengan kontras permukaan, alignment, dan border tipis; hindari outline tebal. Lebar/warna border adalah perkiraan implementasi.
- Shadow shell `0 12px 32px rgba(25, 32, 42, 0.10)` adalah **PILIHAN IMPLEMENTASI** dari kedalaman shell pada referensi; sebagian besar panel datar. Bayangan lembut tidak berulang pada setiap kartu.

## Shapes

- Panel memakai radius lebih besar dari tombol/input. `rounded` YAML adalah **PILIHAN IMPLEMENTASI**; screenshot hanya menunjukkan sudut lunak, bukan ukuran pastinya.
- Bentuk pill hanya untuk filter ringkas, pilihan pendek, dan status kecil. Tombol, input, panel utama memakai persegi panjang membulat secukupnya. Jangan pill-kan semua kontrol.
- Pakai `colors.border` untuk divider struktur dan `colors.field-border` hanya untuk batas input/select/search; token CSS `--border-hairline` memberi ukuran 1px. Jangan pakai divider low-contrast untuk menunjukkan batas kontrol.

## Components

- **Navigasi:** rail desktop mengelompokkan area tugas; satu item aktif kontras, lainnya tenang. Tampilkan layanan dan aksi sesuai izin, tanpa menyamakan Requester dengan fungsi Admin berizin (`Can approve`, `Can make payment`, `Can release payment`, `Can view wardrobe`). Mobile memakai menu ringkas.
- **Panel:** panel terang untuk tugas dan data terkait. Dashboard memiliki satu panel gelap `Status berjalan` untuk membedakan ringkasan seluruh status dari layanan yang dapat dimulai dan pengajuan yang perlu tindakan. Tidak ada panel gelap dekoratif pada form atau detail.
- **Tombol/input:** satu aksi primer per area keputusan; aksi sekunder netral; tindakan destruktif jelas. Input punya label terlihat dan bantuan/unit bila perlu. Error menjelaskan penyebab dan langkah berikutnya. Jangan gunakan pill untuk tombol utama.
- **Filter:** kontrol ringkas inline; chip untuk pilihan terpilih; pertahankan nilai pilihan dan sediakan reset. **Tabel/list:** desktop memakai kolom selaras, status dan nominal eksplisit, navigasi baris; mobile mempertahankan konteks baris dan header saat scroll, bukan menyembunyikan data penting.
- **Status/nominal:** tampilkan nama status tepat dan langkah berikutnya. Bedakan `Finance Approved` dari `Approved`, `Maker Done` dari `Paid`. Format mata uang konsisten; jangan andalkan warna saja. Requester hanya melihat pengajuannya; Admin dibatasi organisasi/izin. Mask data sensitif sesuai PRD.
- **Bukti/feedback:** tampilkan file sebagai baris atau preview terbatas dengan nama, tipe, status unggah/validasi, dan aksi yang diizinkan. Jangan bocorkan konten privat lewat thumbnail. Buat OCR/manual fallback, upload error, konfirmasi duplikasi, autosave, dan hasil simpan/kirim jelas. Kegagalan unggah tidak menghapus field; pisahkan instruksi publik dan catatan internal. Tampilkan fokus keyboard dan error non-warna.

### Penerapan layar

- **Dashboard Requester (PG-02):** grid dua kolom, panel utama `Perlu perhatian` di kiri; aksi layanan dan ringkasan status di kolom pendukung kanan; daftar terbaru melintasi lebar di baris bawah. `Revision`/`Pending vendor proof` tetap memimpin urutan perhatian. Panel `Status berjalan` memakai satu bidang gelap sebagai ringkasan finansial yang menyeimbangkan panel aktivitas utama, mengadaptasi panel laporan/keuangan gelap pada referensi tanpa menyalin promosi. Kartu layanan tetap setara karena PRD tidak menetapkan prioritas bisnis. Mobile menumpuk panel menurut urutan tindakan dan mempertahankan bidang gelap hanya pada ringkasan status.
- **Form Reimbursement (PG-05):** urutkan konteks/kategori → banyak invoice → bukti wajib. Grup field datar, bukan kartu per input. Total serta simpan/kirim mudah ditemukan; ringkasan dapat berada di kolom samping desktop, setelah input di mobile. Revision membuka hanya field yang ditandai beserta instruksinya. Pertahankan data pada error unggah; jelaskan konsekuensi duplikasi dan pembatalan.
- **Form Overtime (PG-09):** setiap entri tanggal menampilkan jam, durasi, tarif/nominal contoh, dan bukti yang dipetakan ke tanggal itu. Bukti wajib yang belum ada memberi pesan pada entri dan menonaktifkan kirim; `Simpan draft` tetap tersedia. Di mobile, entri bertumpuk dan status bukti tetap dekat tanggal pemiliknya.
- **Review Finance (PG-06 dan layar review terkait):** identitas request, nominal, status, konteks, dan bukti di area utama; keputusan dan timeline/audit dibedakan jelas. Kolom keputusan sekunder boleh di desktop; mobile susun detail lalu area aksi yang jelas. Revision/Reject/Return mengikuti izin, alasan, dan batas field PRD. Pisahkan validasi Finance, approval bisnis, dan rilis pembayaran. Desain tidak menggantikan otorisasi.

## Do's and Don'ts

- **Lakukan:** jaga alignment, ritme jarak, hierarki nominal, status tertulis, ruang kosong, dan satu aksi kuat per area tugas. Sesuaikan ukuran panel dengan prioritas/isi.
- **Lakukan:** gunakan kanvas terang, permukaan putih, aksen biru terukur, serta kontras gelap secara hemat. Uji mobile, overflow, fokus keyboard, dan kontras pada layar nyata.
- **Hindari:** menyalin merek FinGoals, iklan/gambar promosi, analitik investasi, atau statistik screenshot yang bukan kebutuhan PRD.
- **Hindari:** memakai tampilan prototype lama sebagai identitas, mengarang aturan/izin, membuat semua elemen kartu/pill, atau menyembunyikan bukti kurang, error, batas Revision, perbedaan approval/pembayaran, dan penolakan izin.
