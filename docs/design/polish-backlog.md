# Backlog polish visual lintas story

Baseline kerja: `docs/polish-backlog@32b6fc24eb00745686aa19f4ddc47da96b9165a9` · 4 Nov 2026.

## Aturan masuk

- Catat hanya temuan visual/UX yang dapat ditunjuk ke story aktif dan sumber bukti yang ada.
- Item tidak mengubah aturan bisnis atau menyelesaikan pertanyaan produk; rujuk [`open-questions.md`](../product/open-questions.md) untuk itu.
- Gate penundaan: kerjakan setelah MVP 0.2, kecuali temuan yang memblokir approval berjalan.
- Selesaikan sebagai pasangan Desktop + Mobile/Narrow; gunakan komponen dan arah visual yang sudah disetujui.
- Jangan membuka ulang baseline Approved/Frozen untuk preferensi opsional. Hindari duplikasi status, coverage, dan next action matrix dari [`screens.md`](screens.md).
- Tiap item menyebut asal temuan dan alasan penundaan. Kerjakan saat story terkait masuk ke scope; dokumentasikan hasil pada render README terkait, bukan kronologi di backlog.

## Item tertunda

### PG-04 · Admin Finance queue

- **Asal temuan:** `docs/design/screens.md`, Story Completion Matrix SF7.1: detail Requester/context pada row Desktop; filter belum menunjukkan hasil pilihan; outcome narrow loading/error/filter belum terpetakan.
- **Alasan ditunda:** gate backlog: setelah MVP 0.2, kecuali temuan ini memblokir approval berjalan. Ambang age warning tetap keputusan produk, bukan asumsi desain.
- **Bukti render:** [README Admin Finance review](../../design/png/admin-finance-review/README.md#pg-04-existing-finance-queue).

### PG-05/06 · Requester Reimbursement

- **Asal temuan:** `docs/design/screens.md`, Story Completion Matrix F3/F6: error validasi menunjukkan field terisi; pesan detail netral memakai warna danger; pemetaan kategori/Wardrobe perlu jelas.
- **Alasan ditunda:** gate backlog: setelah MVP 0.2, kecuali temuan ini memblokir approval berjalan. Validasi harus membedakan error nyata dari fixture; pemetaan kategori mengikuti aturan produk yang berlaku.
- **Bukti render:** [README Requester Reimbursement](../../design/png/reimbursement-requester/README.md).

### PG-07/08 · Requester Payment Request

- **Asal temuan:** `docs/design/screens.md`, Story Completion Matrix F4/F6: target recipient 28 px; recovery file/link/upload belum lengkap; Narrow identity belum lengkap pada Admin counterpart.
- **Alasan ditunda:** gate backlog: setelah MVP 0.2, kecuali temuan ini memblokir approval berjalan. Jangan menggambar field wajib atau gate sebelum keputusan template/konfirmasi bank tersedia; samakan komponen Narrow setelah keputusan terkait ada.
- **Bukti render:** [README Payment Request / Overtime Requester](../../design/png/payment-overtime-requester/README.md).

### PG-09/10 · Requester Overtime

- **Asal temuan:** `docs/design/screens.md`, Story Completion Matrix F5/F6: form dua tanggal Mobile butuh bukti posisi akhir; recovery bukti tanggal hilang belum terlihat; perlakuan cancel/status berbeda dari PG-06.
- **Alasan ditunda:** gate backlog: setelah MVP 0.2, kecuali temuan ini memblokir approval berjalan. Pertahankan fixture tarif dan jangan menciptakan ambang minimum atau perilaku bisnis yang belum disahkan.
- **Bukti render:** [README Payment Request / Overtime Requester](../../design/png/payment-overtime-requester/README.md).

### PG-06 · Admin Finance Reimbursement

- **Asal temuan:** review pass PG-06 dan catatan P1 pada [README render Admin Finance](../../design/png/admin-finance-review/README.md#pg-06-ready-for-owner-review): helper terpisah di tiap tombol, label “Koreksi terakhir”, app bar Narrow, lebar nomor `REIM` ([open question](../product/open-questions.md#batas-layar-dan-nomor-contoh)), bentuk Selisih pada konfirmasi vs key-value pada detail, serta breadcrumb vs “← Antrean”.
- **Alasan ditunda:** gate backlog: setelah MVP 0.2, kecuali salah satu temuan terbukti memblokir approval berjalan. Jangan mengubah penanda status atau navigasi yang telah siap direview tanpa bukti blocker.
- **Bukti render:** [README render Admin Finance](../../design/png/admin-finance-review/README.md#pg-06-ready-for-owner-review).

### PG-06 · Perbedaan yang ditunda, bukan pelanggaran

- Banner hijau “Koreksi tersimpan” adalah umpan balik aksi, bukan badge status pembayaran. DITUNDA; jangan buka ulang sebagai temuan status.
- Judul “Revisi” dan token status `Revision` berbeda fungsi (judul vs token). DITUNDA; jangan tandai sebagai pelanggaran konsistensi.
- **Bukti render:** [README render Admin Finance](../../design/png/admin-finance-review/README.md#pg-06-ready-for-owner-review).

### PG-08 · Admin Finance Payment Request

- **Asal temuan:** `docs/design/screens.md`, Story Completion Matrix SF7.2: identitas Narrow belum lengkap; confirmation belum menampilkan selected fields, old/new/reason, dan target Approver setara pola PG-06.
- **Alasan ditunda:** gate backlog: setelah MVP 0.2, kecuali temuan ini memblokir approval berjalan. Terapkan pola keputusan tanpa membuka data sensitif di luar akses Admin atau mengarang tax treatment.
- **Bukti render:** [README Admin Finance review](../../design/png/admin-finance-review/README.md#pg-08-and-pg-10-existing-candidates).

### PG-10 · Admin Finance Overtime

- **Asal temuan:** `docs/design/screens.md`, Story Completion Matrix SF7.2: identitas Narrow dan isi confirmation/audit belum setara PG-06.
- **Alasan ditunda:** gate backlog: setelah MVP 0.2, kecuali temuan ini memblokir approval berjalan. Pertahankan fixture `(2 + 2) × Rp100.000 = Rp400.000` dan jangan mengarang konfigurasi tarif.
- **Bukti render:** [README Admin Finance review](../../design/png/admin-finance-review/README.md#pg-08-and-pg-10-existing-candidates).

## Bukan backlog

- Belum diputuskan field/template Payment Request per recipient, gate konfirmasi rekening, Entity/akses Entity, ambang age warning, label Requester untuk Return to Admin/Maker Done, lebar nomor `REIM`, dan representasi tanda selisih. Lihat [`open-questions.md`](../product/open-questions.md).
- `fieldBorder` vs `redesign-control-border`: source conflict remains unresolved; see [Foundations](foundations.md#canvas-values-and-unresolved-token-mapping) and [`open-questions.md`](../product/open-questions.md#konflik-sumber-visual).
- Perilaku runtime, authorization, upload/OCR, keyboard/focus, screen reader, dan contrast numerik tidak terbukti oleh PNG statis; jangan jadikan render sebagai bukti implementasi.
