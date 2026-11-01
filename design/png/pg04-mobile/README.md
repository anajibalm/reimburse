# PG-04 Mobile: kandidat untuk review

Issue #7 / PR #8. Desktop commit `9bea1db` sudah disetujui owner sebagai baseline. Semua viewport 390 × 844, diekspor 2× menjadi **780 × 1688**; klik tautan untuk gambar penuh. Nama, nomor, Entity, tanggal dan nominal adalah **Data contoh**, ditandai pada nama frame/handoff.

## Normal dan scroll
[Normal awal](jSSv3.png) · [Daftar setelah scroll](J3IVxP.png) · [Akhir daftar, pagination dan Export](MyyEK.png) · [Konten normal lengkap 780×3112](rFEiu.png)

<img src="jSSv3.png" width="390" alt="Pencarian, filter, urutan dan pengajuan pertama" /> <img src="J3IVxP.png" width="390" alt="Daftar setelah scroll menampilkan nomor, Entity, tanggal, status, nominal, next step dan detail" /> <img src="MyyEK.png" width="390" alt="Akhir daftar dengan pagination dan Export di atas bottom navigation" />

## Filter dan hasil
[Filtered awal](SVqzr.png) · [Filtered setelah scroll](P5aoJ.png) · [No results](g29tW.png) · [Empty](iKaGO.png) · [Loading](woVE2.png) · [Error](kZoBb.png)

<img src="P5aoJ.png" width="390" alt="Hasil Payment Request dengan status Pending vendor proof" /> <img src="g29tW.png" width="390" alt="Tidak ada hasil pencarian dan aksi hapus pencarian" /> <img src="kZoBb.png" width="390" alt="Error memuat pengajuan dan aksi coba lagi" />

## Bottom sheets
[Layanan](WXk4E.png) · [Status](bUJ52.png) · [Status setelah scroll](IA9cX.png) · [Tanggal](dRKeV.png) · [Urutkan](ugfAV.png) · [Export CSV/Excel](oeHMy.png)

<img src="WXk4E.png" width="390" alt="Bottom sheet filter layanan termasuk Overtime" /> <img src="bUJ52.png" width="390" alt="Bottom sheet status, dapat digulir untuk seluruh token status" /> <img src="dRKeV.png" width="390" alt="Bottom sheet dua field tanggal dengan Terapkan dan Hapus tanggal" />

## Layanan dinonaktifkan
[Awal](NSu34.png) · [Filter layanan tetap memuat Overtime](IHevC.png) · [Pengajuan Overtime lama setelah scroll](c8p1s.png) · [Picker pengajuan baru hanya layanan aktif](MJZ0k.png) · [Konten lengkap 780×3264](QRtPs.png)

<img src="IHevC.png" width="390" alt="Filter historis tetap mencantumkan Overtime" /> <img src="c8p1s.png" width="390" alt="Pengajuan Overtime lama tetap ada dengan detail dan status" /> <img src="MJZ0k.png" width="390" alt="Picker buat pengajuan hanya menampilkan Reimbursement dan Payment Request aktif" />

## Export states
[Generating awal](sIy5S.png) · [Generating setelah scroll](dktSx.png) · [Error awal](EEKmt.png) · [Error setelah scroll](LP79A.png) · [Denied awal](ACAdA.png) · [Denied setelah scroll](n0arg.png)

<img src="dktSx.png" width="390" alt="Export sedang disiapkan" /> <img src="LP79A.png" width="390" alt="Export gagal dan aksi coba lagi" /> <img src="n0arg.png" width="390" alt="Export ditolak karena izin" />

## Verifikasi
- File `design/reimburse.pen` tersimpan memiliki **25 viewport Mobile 390×844**, 10 reusable content sources dan reusable row `jzecl`; masing-masing viewport memakai navigasi `IenEv` aktif.
- JSON rekursif terhadap Desktop-approved `9bea1db`: semua node lama dan variabel identik. Render PG-04 Desktop dan Dashboard Desktop juga byte-identik dengan baseline.
- Row instances mempertahankan nomor, judul/layanan, Entity/tanggal, status, nominal, next step dan target detail 44 px. Filter layanan/status/tanggal, urutan dan pagination tersedia dalam desain.
- Bounds shared-source board tidak melaporkan masalah. Clipping vertikal viewport/sheet status sengaja menggambarkan scroll; specimen offset dan konten lengkap disertakan.
- State layanan nonaktif tetap menyajikan filter dan pengajuan Overtime lama; picker create hanya layanan aktif.
- SHA-256 canvas: `b5d9dc728a2d4535324e49cf8cf210a08cd2495bfd5cfce8494ad23b6a006608`.

**Batas bukti:** seluruh layar adalah desain statis. Scroll, pencarian, filter, export, akses detail, permission enforcement, keyboard/focus dan screen reader belum diimplementasikan/diuji. Tidak merge atau melanjutkan flow lain.
