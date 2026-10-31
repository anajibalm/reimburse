# Arah Visual v2: Reimburse

**Status:** historical proposal for review, not applied as a final contract. The live canvas has later separate Requester flow and `REDESIGN` variants; see [`../../design/foundations.md`](../../design/foundations.md) and [`../../../design/reimburse.pen`](../../../design/reimburse.pen).

## Pembacaan referensi

Referensi pengguna mengarah ke empat prinsip yang konsisten:

1. **Bento yang punya fungsi.** Quicken, HoneyBook, dan Hootsuite memakai panel berbeda ukuran karena tugasnya berbeda, bukan sekadar dekorasi. Panel utama mendapat ruang paling besar; tugas cepat dan aktivitas menjadi panel pendukung.
2. **Rounded financial dashboard.** Quicken dan Copilot memakai radius lembut, permukaan terang, dan pemisahan antar-area yang jelas. Bentuk rounded membuat produk finansial terasa lebih mudah didekati, tetapi tabel/detail tetap harus cukup tegas.
3. **Electric blue sebagai aksen tindakan.** Referensi finansial memakai biru sebagai sinyal kontrol, link, dan fokus. Biru tidak boleh mewarnai semua permukaan.
4. **Light SaaS workspace.** HoneyBook, Hootsuite, dan Wrike memulai dengan tugas yang harus dilakukan, bukan kumpulan angka. Ini cocok dengan Requester yang perlu tahu apa yang harus dilakukan berikutnya.

Referensi yang dibuka:

- [Quicken dashboard](https://mobbin.com/screens/2c73cf61-ae0e-452a-b38e-c360115a6216): panel Accounts besar, grafik Net Worth, Recent Transactions, Bills & Income.
- [Copilot financial dashboard](https://mobbin.com/screens/4e13cc80-a9e1-48b0-8882-c8857758acc5): grouping rounded, hierarchy balance dan aktivitas.
- [Mercury dashboard](https://mobbin.com/screens/d7aa120c-c488-4f38-bf61-78460910320d): finansial minimal dengan panel terstruktur.
- [Hootsuite workspace](https://mobbin.com/screens/5aff7542-0a89-481d-af47-2b0d2ca78098): Getting Started menjadikan tugas sebagai checklist yang mudah dilanjutkan.
- [HoneyBook dashboard](https://mobbin.com/screens/45bc05e0-e55f-4da9-a6b0-67ea0661d47e): Create new sebagai daftar tindakan utama, bukan tiga kartu layanan yang sama besar.
- [Wrike productivity dashboard](https://mobbin.com/screens/26ded28b-1313-4eee-b493-0ed5624513a1): panel To do, To review, dan completed memakai struktur kerja yang berbeda.
- [Origin dashboard](https://mobbin.com/screens/bbeb85f3-15da-4e7d-aeef-1ca7e223e01e): referensi untuk aksen biru elektrik dan komposisi ringan.

Mobbin memberi inspirasi pola dan hierarki. Layout, copy, warna final, dan identitas Reimburse tetap original.

## Arah 1: Electric Bento Ledger

### Karakter

Light fintech workspace dengan panel rounded, aksen electric blue, dan daftar pengajuan sebagai pusat kerja.

### Komposisi Requester dashboard

- Sidebar tipis untuk Dashboard, Pengajuan, dan Bantuan. Menu Admin tidak muncul untuk Requester.
- Header sederhana: greeting, organisasi aktif, notifikasi, avatar.
- Panel utama lebar: **Perlu perhatian**. Isinya hanya request yang berstatus Revision atau membutuhkan tindakan.
- Panel kanan: **Ringkasan pengajuan** dengan status Pending, Finance Approved, Paid. Angka hanya ditampilkan bila berasal dari data nyata; prototype memakai label `[REAL DATA]` atau contoh yang jelas.
- Bar tindakan: tiga layanan ditampilkan sebagai tindakan berbeda, bukan tiga kartu identik:
  - Reimbursement: `Buat reimbursement`
  - Payment Request: `Ajukan payment`
  - Overtime: `Catat overtime`
- Panel bawah: aktivitas pengajuan terbaru, memakai baris padat dengan status, tanggal, dan langkah berikutnya.

### Visual

- Background: off-white dingin.
- Surface: putih dengan radius 18px, border sangat tipis atau tanpa border jika pemisahan ruang sudah cukup.
- Accent: electric blue hanya untuk tombol utama, link aktif, focus ring, dan status aksi.
- Status: tetap memakai label teks dan warna pendukung, bukan warna sebagai satu-satunya informasi.
- Tipografi: sans humanist dengan angka nominal lebih tebal dan sedikit lebih besar.

### Kelebihan

- Paling dekat dengan referensi fintech yang diberikan.
- Bento tetap melayani prioritas tugas, bukan hiasan.
- Terasa modern tanpa mengorbankan kejelasan Finance.

### Risiko

- Terlalu banyak panel dapat kembali menjadi dashboard generik.
- Harus membatasi jumlah panel utama dan menghindari empat metric card setara.

## Arah 2: Rounded Finance Desk

### Karakter

Dashboard terang yang lebih tenang dan profesional. Rounded digunakan untuk mengelompokkan konteks, bukan membuat semua elemen menjadi kapsul.

### Komposisi Requester dashboard

- Area utama dimulai dari pertanyaan: **Apa yang perlu kamu selesaikan?**
- Satu panel besar berisi request Revision dengan preview bukti kecil, nominal, dan CTA `Perbaiki pengajuan`.
- Di sampingnya, panel `Status berjalan` berbentuk timeline ringkas: Pending → Finance review → Approved → Paid.
- Layanan baru berada dalam satu baris tindakan dengan ukuran berbeda berdasarkan frekuensi: Reimbursement paling besar karena paling kompleks, Payment Request dan Overtime lebih kecil.
- Riwayat terbaru berbentuk list dengan filter status sederhana.

### Visual

- Background: warm grey sangat terang.
- Surface: putih, radius 20px untuk panel besar; radius 10px untuk input dan row.
- Accent: biru elektrik lebih gelap untuk CTA dan active state.
- Secondary colors: mint untuk Paid, amber untuk Pending, coral untuk Revision. Masing-masing selalu disertai label.
- Tipografi: sans bersih, heading medium, nominal bold.

### Kelebihan

- Paling mudah dibaca pengguna non-Finance.
- Status dan bukti hadir dalam konteks yang sama.
- Cocok untuk desktop dan mobile karena struktur dapat turun menjadi urutan tugas.

### Risiko

- Bisa menjadi terlalu aman jika tidak ada komposisi asimetris atau aksen identitas.
- Radius besar perlu dijaga agar tidak terasa seperti template SaaS umum.

## Arah 3: Blue Workspace / Light Command Center

### Karakter

Workspace SaaS minimal dengan electric blue sebagai identitas lebih kuat. Lebih padat dan lebih operasional, tetapi tetap light mode.

### Komposisi Requester dashboard

- Header horizontal dengan logo teks, switcher organisasi, pencarian request, dan avatar.
- Kolom utama `My requests` dengan segmented filter: Semua, Perlu tindakan, Dalam proses, Selesai.
- Kolom samping `Quick actions` berisi tiga tindakan langsung dengan ikon yang relevan.
- Panel `Next step` menonjolkan satu tindakan terpenting dan alasan singkat.
- Panel bawah memakai activity stream, bukan chart dekoratif.

### Visual

- Background putih dengan bidang biru pucat sangat terbatas pada panel fokus.
- Electric blue dipakai pada active tab, CTA, link, dan focus ring.
- Hampir tanpa shadow; hierarchy dibuat dengan ukuran, whitespace, dan garis pemisah.
- Ikon satu keluarga, solid sederhana, hanya untuk tindakan nyata: receipt, wallet, clock, arrow-up-right.
- Tipografi sans yang rapat tetapi bukan monospace.

### Kelebihan

- Paling cepat untuk pengguna yang sering membuka kembali pengajuan.
- Navigasi dan filter jelas.
- Memiliki identitas lebih kuat tanpa dark mode atau dekorasi berlebihan.

### Risiko

- Dapat terasa terlalu seperti tool operasional.
- Perlu copy yang ramah agar tidak terasa dingin.

## Rekomendasi

**Pilih Arah 1 sebagai basis**, lalu ambil dua elemen Arah 2:

- Arah 1 memberi karakter fintech dan struktur bento yang diminta.
- Arah 2 memberi konteks bukti, nominal, dan langkah berikutnya yang lebih aman untuk pekerjaan Finance.
- Jangan mengambil bento sebagai susunan kartu kosong. Setiap panel harus menjawab satu pertanyaan kerja Requester.

### Bentuk dashboard yang direkomendasikan

1. Header ringkas.
2. Panel besar `Perlu perhatian`.
3. Panel `Status berjalan`.
4. Tiga tindakan layanan dengan bobot berbeda.
5. List `Pengajuan terbaru`.
6. Mobile: urutan `Perlu perhatian` → CTA layanan → `Status berjalan` → terbaru.

## Aturan yang harus dipertahankan

- Requester tidak melihat menu administrasi.
- Nominal, status, dan langkah berikutnya selalu terbaca tanpa membuka panel tambahan.
- Status tidak hanya dibedakan dengan warna.
- Tidak ada angka tren atau statistik yang belum memiliki sumber.
- Tidak ada chart jika tidak membantu keputusan Requester.
- Bento dipakai untuk hierarchy tugas, bukan dekorasi.
- Mobile bukan desktop yang diperkecil; urutan mengikuti tindakan paling penting.

## Dampak perilaku yang perlu dikonfirmasi nanti

- Dashboard membutuhkan definisi `Perlu perhatian`: minimal Revision dan request yang membutuhkan tindakan Requester.
- Urutan status membutuhkan data workflow yang konsisten.
- Preview bukti di dashboard membutuhkan aturan akses file privat dan fallback jika bukti belum tersedia.
- Ini usulan UX, bukan perubahan PRD final.
