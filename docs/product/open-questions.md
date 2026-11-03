# Pertanyaan produk yang belum ditetapkan

PRD tetap sumber aturan bisnis. Dokumen ini hanya mencatat gap yang terlihat saat membandingkan [`../../PRD.md`](../../PRD.md), keputusan lama, dan desain aktif pada 31 Okt 2026. Catatan visual tidak mengubah PRD.

## Entity dan akses

- PRD mewajibkan Entity secara eksplisit untuk Reimbursement. Form Payment Request dan Overtime pada desain juga menampilkan Entity. Belum ada aturan PRD yang menetapkan apakah Entity wajib untuk dua layanan tersebut, Entity mana yang boleh dipilih tiap Requester, atau apakah akses dibatasi per Entity.
- Asumsi desain lama mengusulkan satu organisasi dengan beberapa Entity: label generik `Entity`, nama tampilan per organisasi, dan kolom Entity di form/baris walau hanya ada satu. Dashboard aktif masih menampilkan nama contoh `PT Contoh A/B/C`; belum jelas apakah itu placeholder lama atau arah tampilan yang masih dipilih.

## Payment Request: template dan konfirmasi rekening

- PRD menetapkan field wajib mengikuti template aktif berdasarkan recipient dan Quotation, tetapi tidak merinci daftar field/dokumen untuk tiap kombinasi KOL, Talent, dan Freelance. Varian desain menunjukkan pilihan dan ketergantungan template, bukan menetapkan daftar field baru.
- PRD menyatakan Requester hanya mengonfirmasi rekening dan KTP/rekening hanya untuk Admin, tetapi tidak menetapkan secara eksplisit apakah konfirmasi yang belum dilakukan memblokir Tinjau atau Submit. Desain tidak menetapkan aturan pemblokiran; keputusan produk tetap diperlukan.

## Finance queue: age warning

- PRD meminta age warning pada antrean Finance, tetapi belum menetapkan ambang usia atau aturan peringatan. Contoh usia dalam desain tidak menetapkan ambang atau kebijakan baru.

## Nilai dan status yang ditampilkan

- **TERJAWAB — nominal dashboard/daftar:** keputusan PG-06 menetapkan total setelah koreksi sebagai nilai otoritatif; nominal invoice dan riwayat tetap nilai asli sebagai pembanding. Rujukan: [`foundations.md`, “PG-06 ringkasan pemeriksaan · draft handoff`](../design/foundations.md#pg-06-ringkasan-pemeriksaan--draft-handoff). Keputusan ini mengikat tampilan PG-06; PRD belum diubah. Catatan UX lama memilih nominal saat dikirim, sedangkan layar desain terminal menampilkan nilai akhir; catatan tersebut dipertahankan sebagai riwayat, dan perbedaan kini diselesaikan oleh keputusan ini.
- PRD memakai status `Return to Admin` dan `Maker Done`, tetapi tidak menetapkan label khusus Requester. Catatan UX lama mengusulkan “Sedang ditinjau” dan “Pembayaran disiapkan”. Pilihan label itu belum masuk PRD.
- Bentuk dashboard (angka status vs. jumlah proses berjalan), penyajian Draft, stepper riwayat aktual, penempatan Cancel, dan menu profil/logout tercatat pada desain lama. Perlakukan sebagai eksplorasi/arah visual, bukan aturan bisnis, kecuali tertulis dalam PRD.
- Arah tanda selisih nominal (over-claim vs under-claim) belum ditetapkan PRD. Fixture hanya menunjukkan dua nilai pembanding; fixture tidak menyatakan tanda `+` atau `-` maupun arah selisih.

## Batas layar dan nomor contoh

- PRD memakai peran “relevant” untuk beberapa detail bersama; screen inventory dan desain menunjukkan Requester, Admin, Approver terkait, Maker, dan Releaser sesuai permission. Rincian data yang boleh dilihat tiap peran mengikuti PRD, tetapi pemetaan akses per role pada setiap detail belum lengkap dalam PRD.
- PRD memberi contoh nomor publik `REIM-0001` / `PAY-0001` / `OT-0001`. Data contoh pada desain memakai bentuk enam digit seperti `REIM-000041`, sementara beberapa varian dashboard menampilkan `REIM-0041`. Lebar format yang dimaksud belum dipastikan; semua nilai tersebut tetap data contoh.

## Konflik sumber visual

- Canvas `design/reimburse.pen` mendefinisikan `fieldBorder = #858D97` dan menamai `3.36:1` sebagai field boundary; canvas juga mendefinisikan `redesign-control-border = #7F8790`. Foundations/01 menggunakan keterangan nilai pertama. Peran token kedua pada kontrol redesign belum ditetapkan; jangan samakan atau menimpa token tanpa review desain.
- Canvas memuat flow Requester, screen redesign, dan state PG-02. Owner sudah menyetujui baseline PG-02 Desktop/Mobile; PR #2 → #4 → #6 telah merged berurutan sesuai otorisasi. Persetujuan itu tidak berlaku otomatis pada flow lama berlabel “Belum diselaraskan”. Owner menyetujui kandidat PG-04 Desktop `9bea1db` dan visual Mobile sebagai baseline; PR #8 sudah merged. Persetujuan visual tidak otomatis mengizinkan merge PR lain. Lihat handoff `docs/design/screens.md` untuk node kandidat dan gate review, tanpa menganggap semua varian sepasang atau sinkron.

## Sumber dan keterlacakan

- Header PRD lama versi 0.2 mencantumkan `screenshot-2026-10-27_12-54-41.pdf` dan `prototype/checkpoint-v0.html`; keduanya tidak ada pada pohon repo yang diperiksa. `prototype/checkpoint-v0 (1).html` tersedia, tetapi hash-nya identik dengan `prototype/index.html`; repo tidak membuktikan file mana yang menjadi sumber discovery.
- HTML, gambar, dan export statis bukan bukti bahwa perilaku produksi telah diimplementasikan. Lihat [`../progress/implementation.md`](../progress/implementation.md) untuk batas bukti kode.

Jangan mengisi gap di sini dengan dugaan. Keputusan bisnis perlu masuk ke PRD; keputusan desain final perlu tercermin di canvas aktif dan handoff terkait.
