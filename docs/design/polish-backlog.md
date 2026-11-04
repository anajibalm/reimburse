# Backlog polish visual lintas story

Baseline kerja: branch `design/admin-finance-review`, PR #16 · 4 Nov 2026.

## Aturan masuk

- Catat hanya temuan visual/UX yang dapat ditunjuk ke story aktif dan sumber bukti yang ada.
- Item tidak mengubah aturan bisnis atau menyelesaikan pertanyaan produk; rujuk [`open-questions.md`](../product/open-questions.md) untuk itu.
- Tunda polish yang bukan blocker pada batas story aktif, kebutuhan owner approval, atau keputusan PRD.
- Selesaikan sebagai pasangan Desktop + Mobile/Narrow; gunakan komponen dan arah visual yang sudah disetujui.
- Jangan membuka ulang baseline Approved/Frozen untuk preferensi opsional. Hindari duplikasi status, coverage, dan next action matrix dari [`screens.md`](screens.md).
- Tiap item menyebut asal temuan dan alasan penundaan. Kerjakan saat story terkait masuk ke scope; dokumentasikan hasil pada render README terkait, bukan kronologi di backlog.

## Item tertunda

### PG-04 · Admin Finance queue

- **Asal temuan:** `docs/design/screens.md`, Story Completion Matrix SF7.1: detail Requester/context pada row Desktop; filter belum menunjukkan hasil pilihan; outcome narrow loading/error/filter belum terpetakan.
- **Alasan ditunda:** penyelesaian PG-06 menjadi prioritas dalam PR #16; ambang age warning belum ditetapkan di PRD dan tetap keputusan produk, bukan asumsi desain.
- **Bukti render:** [README Admin Finance review](../../design/png/admin-finance-review/README.md#pg-04-existing-finance-queue).

### PG-05/06 · Requester Reimbursement

- **Asal temuan:** `docs/design/screens.md`, Story Completion Matrix F3/F6: error validasi menunjukkan field terisi; pesan detail netral memakai warna danger; pemetaan kategori/Wardrobe perlu jelas.
- **Alasan ditunda:** bukan blocker pada paket Admin Finance yang sedang direview; validasi harus membedakan error nyata dari fixture, dan pemetaan kategori harus mengikuti aturan produk yang berlaku.
- **Bukti render:** [README Requester Reimbursement](../../design/png/reimbursement-requester/README.md).

### PG-07/08 · Requester Payment Request

- **Asal temuan:** `docs/design/screens.md`, Story Completion Matrix F4/F6: target recipient 28 px; recovery file/link/upload belum lengkap; Narrow identity belum lengkap pada Admin counterpart.
- **Alasan ditunda:** template per recipient dan apakah konfirmasi bank memblokir submit belum ditetapkan; jangan menggambar field wajib atau gate sebagai aturan baru. Samakan komponen Narrow setelah keputusan produk terkait tersedia.
- **Bukti render:** [README Payment Request / Overtime Requester](../../design/png/payment-overtime-requester/README.md).

### PG-09/10 · Requester Overtime

- **Asal temuan:** `docs/design/screens.md`, Story Completion Matrix F5/F6: form dua tanggal Mobile butuh bukti posisi akhir; recovery bukti tanggal hilang belum terlihat; perlakuan cancel/status berbeda dari PG-06.
- **Alasan ditunda:** bukan blocker untuk PR #16; pertahankan fixture tarif dan jangan menciptakan ambang minimum atau perilaku bisnis yang belum disahkan.
- **Bukti render:** [README Payment Request / Overtime Requester](../../design/png/payment-overtime-requester/README.md).

### PG-08 · Admin Finance Payment Request

- **Asal temuan:** `docs/design/screens.md`, Story Completion Matrix SF7.2: identitas Narrow belum lengkap; confirmation belum menampilkan selected fields, old/new/reason, dan target Approver setara pola PG-06.
- **Alasan ditunda:** PR #16 menyiapkan review PG-06; perlu menerapkan pola keputusan yang sama tanpa membuka data sensitif di luar akses Admin dan tanpa mengarang tax treatment.
- **Bukti render:** [README Admin Finance review](../../design/png/admin-finance-review/README.md#pg-08-and-pg-10-existing-candidates).

### PG-10 · Admin Finance Overtime

- **Asal temuan:** `docs/design/screens.md`, Story Completion Matrix SF7.2: identitas Narrow dan isi confirmation/audit belum setara PG-06.
- **Alasan ditunda:** berada di luar paket visual PG-06; koreksi harus mempertahankan fixture `(2 + 2) × Rp100.000 = Rp400.000` dan tidak mengarang konfigurasi tarif.
- **Bukti render:** [README Admin Finance review](../../design/png/admin-finance-review/README.md#pg-08-and-pg-10-existing-candidates).

## Bukan backlog

- Belum diputuskan field/template Payment Request per recipient, gate konfirmasi rekening, Entity/akses Entity, ambang age warning, label Requester untuk Return to Admin/Maker Done, dan representasi tanda selisih. Ini pertanyaan produk; lihat [`open-questions.md`](../product/open-questions.md).
- Auth/login, dashboard Admin PG-03, administrasi master/permission/import, wardrobe search, detail/export/notifications, dan approval/Maker/Releaser journeys adalah story/flow terpisah, bukan polish tambahan yang dapat disisipkan ke item di atas. Scope dan kelengkapan story tetap di [`screens.md`](screens.md).
- Perilaku runtime, authorization, upload/OCR, keyboard/focus, screen reader, dan contrast numerik tidak terbukti oleh PNG statis; jangan jadikan render sebagai bukti implementasi.
