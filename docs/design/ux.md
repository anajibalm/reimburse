# UX lintas layar

**Status:** design guidance, 31 Okt 2026. PRD controls business rules and access. Canvas currently contains Requester flow variants and separate `REDESIGN` frames; see [`screens.md`](screens.md) for observed coverage. This file states design intent, not tested application behavior.

## Catatan presentasi UI non-normatif

- Dashboard Requester merangkum pengajuan yang perlu perhatian, layanan aktif, hitungan status, dan pengajuan terbaru. Tidak menampilkan KPI nominal total; angka contoh memakai label `Data contoh`.
- Angka utama pada varian dashboard lama menunjukkan jumlah pengajuan berjalan. Detail tampilan ini bukan metrik PRD yang sudah disahkan.
- Catatan UI lama mengusulkan menampilkan status yang sudah dicapai, bukan stepper tahap masa depan.
- Catatan UI lama menempatkan `Draft (n)` di area pengajuan terbaru bila ada. Contoh sebelumnya menampilkan layanan, Entity, waktu simpan, `Lanjutkan`, status terkunci jika akses dicabut, dan hint kedaluwarsa saat sisa 7 hari atau kurang. Ini rancangan presentasi draft, bukan alur backend.
- Cancel dapat ditampilkan di detail hanya saat pengajuan `Pending` dan Admin belum mulai memproses; kelayakan status mengikuti PRD.
- Tampilkan detail Requester PG-06/08/10 sesuai izin; data sensitif mengikuti matriks akses PRD.
- Tampilkan Wardrobe di navigasi hanya untuk Requester yang memiliki `Can view wardrobe`.

- Urutan baca: tindakan Revision/bukti vendor → layanan aktif → status → daftar terbaru; ini menyusun informasi, tidak menyiratkan alur workflow baru.

## Navigasi dan orientasi

- Desktop memakai rail Requester yang sama pada dashboard, daftar, form, dan detail; layar aktif konsisten.
- Mobile memakai header ringkas dan bottom navigation; dashboard dan daftar punya state aktif yang sesuai.
- Judul layar menyebut tugas/layanan; detail selalu menampilkan nomor pengajuan dan status.
- Aksi pengajuan baru hanya memuat layanan yang diaktifkan untuk akun. Pengajuan lama tetap terlihat dan dapat ditindaklanjuti setelah akses layanan berubah, sesuai PRD. Pada baseline PG-02 dan kandidat PG-04, keterangan `Data contoh` berada di nama frame/handoff, bukan helper text dalam UI.

## Urutan tugas

- Dashboard: Revision / bukti vendor tertunda → buat pengajuan layanan yang aktif → ringkasan status → pengajuan terbaru.
- Request list: cari/filter → identifikasi layanan/ticket/status/nominal/next step → buka detail.
- Form: konteks → kategori/recipient/date entries → invoice/bukti → ringkasan jumlah → simpan/kirim.
- Detail: status/nominal → bukti yang boleh dilihat → next step/riwayat.
- Mobile: satu kolom mengikuti urutan ini; jangan mengecilkan form menjadi dua kolom.

## Form dan state

- Setiap field punya label; status autosave, validasi, upload, OCR/manual fallback dan error tampil di dekat tugas yang terdampak.
- Field error menyebut sebab dan pemulihan; error upload tidak membuang field lain.
- Revision menandai hanya field yang dapat diedit; instruksi publik dekat field; resubmit terlihat sebagai kelanjutan.
- Overtime: tampilkan validasi bukti per tanggal; bila ada entri tanpa bukti, nonaktifkan `Kirim pengajuan`, jelaskan bukti yang kurang dekat entri, dan pertahankan `Simpan draft`.
- Draft disimpan tanpa workflow; state `Pending` dan tombol Cancel hanya ditampilkan sesuai eligibility PRD.
- Destructive Cancel perlu konfirmasi dengan konsekuensi jelas.

## Status, bukti, privasi

- Teks status selalu ditampilkan; warna/status dot hanya redundan.
- Jelaskan langkah selanjutnya dan bedakan `Finance Approved`, `Approved`, `Maker Done`, dan `Paid`.
- Bukti berbentuk baris/preview terbatas dengan jenis, nama, status upload/validasi, dan aksi yang sesuai role.
- Nomor rekening/KTP dan bukti privat mengikuti matrix akses `PRD.md`; mockup tidak boleh menyiratkan akses lebih luas.

## Batas implementasi

Canvas shows static hierarchy and specimens. Navigation, filtering, submission, dialogs, autosave, validation, upload, OCR, keyboard/focus, zoom/reflow, and screen-reader behavior require code implementation and separate verification. Current code evidence lives in [`../progress/implementation.md`](../progress/implementation.md).
