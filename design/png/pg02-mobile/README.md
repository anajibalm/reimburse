# PG-02 Mobile: render untuk review

Issue #5. Baseline Desktop: `113a418`, PR #4; dependensi transitif: bootstrap PR #2. Desain statis, bukan aplikasi berjalan. Polish pada issue/PR yang sama: keterangan `Data contoh · Requester` hanya di nama frame, badge `5` pada bell menggantikan helper header, dan menu profil memakai bottom sheet yang konsisten dengan picker layanan. Seluruh 15 viewport diterapkan; Foundations, sumber komponen lama, informasi bisnis dan pola scroll dipertahankan.

Setiap viewport berukuran 390 × 844, diekspor 2× menjadi **780 × 1688**. Gambar ditampilkan pada lebar 390 agar proporsi perangkat tetap; klik tautan PNG untuk melihat resolusi penuh. Overview hanya navigasi cepat, bukan bukti keterbacaan.

## Normal
[PNG resolusi penuh](JIPY2.png)

<img src="JIPY2.png" width="390" alt="Dashboard Mobile normal dengan dua tugas perhatian" />

## Stress: 8 tugas perhatian
[PNG resolusi penuh](ZKFu6.png)

<img src="ZKFu6.png" width="390" alt="Stress dengan delapan tugas dan tiga tugas pertama di konten scroll" />

## Empty
[PNG resolusi penuh](r1eeyO.png)

<img src="r1eeyO.png" width="390" alt="Belum ada pengajuan, aksi buat pengajuan dan layanan aktif" />

## Loading
[PNG resolusi penuh](xwfXZ.png)

<img src="xwfXZ.png" width="390" alt="Memuat ringkasan dengan skeleton data" />

## Error
[PNG resolusi penuh](wH6eU.png)

<img src="wH6eU.png" width="390" alt="Pengajuan tidak dapat dimuat dan aksi Coba lagi" />

## Service disabled
[Viewport awal](ubUWJ.png) · [PNG layanan setelah scroll](Qyayp.png)

<img src="Qyayp.png" width="390" alt="Overtime tidak tersedia untuk pengajuan baru, tetapi data pengajuan lama tetap ditampilkan" />

## Service picker terbuka
[PNG resolusi penuh](Dbjwn.png)

<img src="Dbjwn.png" width="390" alt="Sheet pemilih tiga layanan aktif, dengan kontrol tutup" />

## Drafts
[Viewport awal](sKIid.png) · [PNG Draft setelah scroll](CjdB9.png)

<img src="CjdB9.png" width="390" alt="Draft yang bisa dilanjutkan dan draft terkunci karena akses layanan dicabut" />

## Wardrobe permission
[PNG resolusi penuh](y8W79.png)

<img src="y8W79.png" width="390" alt="Navigasi Wardrobe hanya pada state dengan Can view wardrobe" />

## Profile bottom sheet terbuka
[PNG resolusi penuh](u99Hlb.png)

<img src="u99Hlb.png" width="390" alt="Bottom sheet Maya A., peran Requester, aksi Keluar dan tutup, sejajar 16 px dari bawah seperti picker layanan" />

## Normal: status setelah scroll
[PNG resolusi penuh](cG46Q.png)

<img src="cG46Q.png" width="390" alt="Ringkasan status normal dan awal daftar pengajuan terbaru" />

## Stress: status 5/4/3 setelah scroll
[PNG resolusi penuh](Od6Qd.png)

<img src="Od6Qd.png" width="390" alt="12 pengajuan berjalan, proporsi 5/4/3, Entity panjang dan nominal Rp 125.000.000" />

## Normal: akhir scroll
[PNG resolusi penuh](s24EP.png)

<img src="s24EP.png" width="390" alt="Akhir daftar pengajuan dan aksi Lihat semuanya, di atas navigasi tetap" />

## Extent konten lengkap
- [Normal, 780 × 4170](cD8aK.png)
- [Stress, 780 × 4702](ktDJv.png)
- [Overview 10 state](review-overview.png)

Konten lengkap tetap terlihat di shared-source board `XyHpr`; viewport sengaja memotong konten vertikal. Spesimen setelah scroll memakai offset konten sumber yang sama. Scroll, klik, keyboard, focus trap, dan screen reader belum diimplementasikan atau diuji oleh canvas.

## Verifikasi finalisasi
- JSON tersimpan memuat seluruh 15 viewport dan 10 sumber reusable.
- Perbandingan rekursif terhadap `113a418`: seluruh node lama identik; tidak ada node lama dihapus; variabel identik.
- Stress: lebar warna 129.1667 / 103.3333 / 77.5 px dari area warna 310 px, tepat 5/12 / 4/12 / 3/12. Dua gap 4 px dipertahankan.
- Pemeriksaan bounds shared-source board tidak melaporkan masalah layout.
- PNG individual dirender ulang dari canvas tersimpan pada skala 2×.
- Verifikasi polish terhadap `342afca`: hanya 25 teks presentasi dihapus (10 disclosure konten + 15 helper header), 30 node badge ditambahkan, dan properti node lama hanya berubah pada nama frame, offset y, serta alignment baris CTA. Seluruh data bisnis dan sumber komponen tetap.
- Semua 15 viewport memiliki satu badge bell `5`, tanpa dua teks helper lama di UI. Setiap nama frame viewport memuat `Data contoh · Requester`.
- Picker (252 px) dan profil (170 px) sama-sama berakhir di y=828, inset 16 px dari bawah viewport 844 px. Offset spesimen scroll diperbarui sesuai extent yang berkurang 32 px; section tujuan tetap.
- SHA-256 `design/reimburse.pen`: `da17e7b60a92fcc3f1c8cdcdf996ca69c5f5407134b16ae16051279bbbed90dd`.
