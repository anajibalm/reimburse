# Copy UI

**Status:** draft UI-copy guidance, 31 Okt 2026. Product status names and rules follow [`../../PRD.md`](../../PRD.md). Copy recommendations here do not change business rules or claim implemented behavior.

## Istilah

| Konsep | Gunakan | Catatan |
|---|---|---|
| Request | Pengajuan | Objek yang dibuat Requester. |
| Service | Layanan | `Reimbursement`, `Payment Request`, `Overtime` tetap sebagai nama layanan pada navigasi. |
| Ticket ID | Nomor pengajuan | PRD example: `REIM-0001`, `PAY-0001`, `OT-0001`. Active visual examples vary in digit width; see [`../product/open-questions.md`](../product/open-questions.md). |
| Next step | Langkah berikutnya | Nyatakan tindakan yang harus dilakukan, bukan sekadar status. |
| Draft | Draft | Gunakan `Simpan draft`, `Draft tersimpan`, `Gagal menyimpan draft`. |
| Revision | Revision | Nama status PRD; instruksi yang menyertainya diterjemahkan ke bahasa Indonesia. |
| Finance Approved | Finance Approved | Berbeda dari `Approved`; tidak diterjemahkan. |
| Return to Admin | Return to Admin | Status PRD; jelaskan tindakan susulan dengan teks Indonesia. |
| Maker Done | Maker Done | Disiapkan, belum dibayar. |
| Pending vendor proof | Pending vendor proof | Status Payment Request; sebut bukti vendor yang diminta. |
| Rejected / Cancelled / Paid | Rejected / Cancelled / Paid | Status final PRD; selalu tampilkan teks status. |
| Data contoh | Data contoh | Wajib terlihat dekat data realistis yang bukan data live. |
| Clock In / Clock Out | Mulai / Selesai | Label input waktu Overtime. |

## Label dan tindakan

| Tujuan | Teks |
|---|---|
| Layanan Reimbursement | `Buat reimbursement` |
| Layanan Payment Request | `Ajukan payment` |
| Layanan Overtime | `Catat overtime` |
| Mulai tindakan Revision | `Perbaiki bukti` atau nama field yang diminta |
| Bukti Payment Request | `Unggah bukti vendor` |
| Simpan sementara | `Simpan draft` |
| Kirim request | `Kirim pengajuan` |
| Lihat daftar | `Lihat semua pengajuan` |
| Konfirmasi pembatalan | `Batalkan pengajuan` |
| Kembali | `Kembali` |
| Buka bukti | `Lihat bukti` |

## Instruksi, empty state dan error

- Instruksi Revision menyebut field yang boleh diubah dan apa yang perlu diperbaiki; tempatkan dekat field terkait.
- Error upload menyebut berkas yang gagal dan cara mencoba ulang; jangan menghapus field lain.
- OCR gagal: `Hasil tidak terbaca. Isi data secara manual.`
- Bukti wajib belum ada: `Unggah bukti transaksi sebelum mengirim pengajuan.`
- Bukti Overtime per tanggal belum lengkap: `Bukti wajib sebelum mengirim`. Ajakan umum: `Petakan bukti bersama ke tanggal yang tercakup.`
- Empty list: `Belum ada pengajuan. Buat pengajuan untuk memulai.` dengan aksi `Buat pengajuan`.
- Error memuat sebab yang diketahui dan satu langkah pemulihan; hindari `Terjadi kesalahan` tanpa tindak lanjut.
- Konfirmasi cancel menyebut nomor pengajuan tetap digunakan dan pengajuan tidak dapat dilanjutkan; aksi `Batalkan pengajuan` / `Kembali`.

## Sample-data wording

Semua nama, organisasi, nomor, nominal, tanggal, status dan riwayat aktor pada Pen adalah **Data contoh**. Riwayat status terminal memakai actor/time fiktif untuk mengilustrasikan field audit, bukan rekaman kejadian nyata.
