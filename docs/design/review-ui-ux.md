# Review UI/UX per story dan state

## Batas bukti

- Disusun dari [kanvas tersimpan `a28b2aa`][canvas], README render per folder ([Dashboard][dashboard], [Daftar Desktop][list-desktop], [Daftar Mobile][list-mobile], [Reimbursement][reimbursement], [Payment Request/Overtime][payment-overtime], [Admin Finance][finance]), [screens.md][screens], [ux.md][ux], [components.md][components], [copy.md][copy], [foundations.md][foundations], [fixtures.md][fixtures], [PRD.md][prd], dan [open-questions.md][questions] pada snapshot tersebut.
- Bukan audit visual piksel: spacing, alignment, dan kontras per render tidak diukur ulang. Tidak ada klaim baru tentang kelulusan aksesibilitas visual.
- Semua layar statis. Runtime, keyboard, screen reader, upload, dan permission belum diuji.
- Status approval per story merujuk [screens.md][screens], tidak diulang di sini. Kritik ini tidak memberi approval atau membuka ulang baseline.

Dokumen ini membahas masalah tugas dan saran per state, bukan inventaris frame, matriks penyelesaian, atau urutan pengerjaan. Tautan sumber dipatok ke `a28b2aa` karena branch dokumen berangkat dari `main`, terpisah dari PR #16. README render dapat memuat bukti historis; untuk PG-06 Admin Finance, gunakan paket terbaru yang disebut dalam README tersebut. Nama, angka, dan riwayat spesimen adalah data contoh, bukan rekaman transaksi.

Setiap baris memakai format **state → masalah → saran konkret**. ID hanya diberikan pada temuan yang memerlukan tindak lanjut; baris “tidak ada temuan tambahan” tidak dihitung. Saran pada story yang memiliki baseline tidak otomatis menjadi blocker atau izin mengubah baseline. Risiko implementasi ditulis sebagai hal yang belum ditentukan/diuji, bukan kegagalan runtime yang sudah ditemukan.

## Platform dan konsekuensi implementasi

MVP adalah web di browser. Frame Mobile adalah web responsif 390×844, bukan aplikasi native. Konsekuensi yang belum tercakup desain adalah virtual keyboard yang dapat menutupi sticky action, tinggi viewport dinamis (`dvh`), iOS auto-zoom pada input dengan ukuran font di bawah 16px, back browser yang harus menutup sheet sebelum meninggalkan layar, URL per layar, konflik autosave antar tab, perbedaan penanganan export PDF di browser iOS/Android, dan reflow pada 320px. Semua ini urusan implementasi dan pengujiannya, bukan alasan membuat spesimen desain baru; jangan menganggap gambar fixed viewport sudah membuktikan perilakunya.

## Tiga blocker produk untuk kontrak UI

Ketiganya tercatat di [open-questions.md][questions]. Ini memblokir finalisasi perilaku UI yang terdampak, bukan seluruh pekerjaan teknis yang tidak bergantung pada jawabannya.

| Keputusan | Masalah bagi UI | Keputusan minimal yang diperlukan |
| --- | --- | --- |
| Nominal yang ditampilkan | Keputusan tampilan sudah diambil di kanvas PG-06: total setelah koreksi adalah nilai otoritatif; nominal invoice dan riwayat tetap nilai asli sebagai pembanding. Yang masih terbuka hanya semantik nominal pada Dashboard/daftar. | **Masih terbuka:** tetapkan bagaimana Dashboard/daftar merepresentasikan keputusan PG-06. Jangan perlakukan ini sebagai kontradiksi dengan tampilan koreksi di PG-06 atau memilih dari fixture terminal. |
| Gate konfirmasi rekening | Belum jelas apakah rekening yang belum dikonfirmasi menghalangi Tinjau atau Submit Payment Request. | **Butuh keputusan produk:** tindakan mana yang diblokir dan pesan pemulihannya. PRD tetap membatasi KTP/rekening ke Admin; jangan membuka data sensitif untuk menyelesaikan ambiguitas ini. |
| Lebar format nomor | Contoh empat dan enam digit tidak konsisten antara daftar dan detail. | **Butuh keputusan produk:** lebar representasi nomor publik yang digunakan UI. Prefix, sequence per organisasi/layanan, dan nomor yang tidak berubah tetap mengikuti PRD. Jangan menetapkan padding baru dari contoh. |

## PG-02 Dashboard

Dasar: [handoff Dashboard dalam screens.md][screens], [README Mobile][dashboard], dan [UX lintas layar][ux]. Tidak ada temuan blocking tambahan yang ditetapkan oleh sumber untuk scope visual ini; tidak perlu memaksakan redesign.

| State | Masalah | Saran konkret |
| --- | --- | --- |
| Normal | Tidak ada temuan tambahan: prioritas perhatian, layanan, status, dan pengajuan terbaru sudah dijelaskan. | Pertahankan urutan tugas tersebut; jangan mengganti menjadi KPI nominal baru. |
| Stress | Tidak ada temuan tambahan: tugas yang banyak memiliki penyajian ringkas dan bukti scroll. | Pertahankan akses ke sisa tugas; jangan mengecilkan teks untuk memasukkan seluruh tugas ke satu viewport. |
| Empty | Tidak ada temuan tambahan: penjelasan dan aksi membuat pengajuan tersedia. | Pertahankan layanan aktif sebagai jalan keluar, bukan menampilkan data contoh seolah data pengguna. |
| Loading | Tidak ada temuan tambahan: keadaan memuat dibedakan dari kosong. | Jangan menampilkan nol pengajuan sebelum respons data tiba. |
| Error | Tidak ada temuan tambahan: sebab contoh dan Coba lagi tersedia. | Saat implementasi, gunakan sebab yang benar-benar diketahui; jangan menyalin sebab koneksi untuk semua error. |
| Service disabled | Tidak ada temuan tambahan: membuat baru dipisahkan dari akses pengajuan lama. | Pertahankan pengajuan lama dan tindak lanjutnya, meskipun layanan tidak muncul dalam pilihan membuat baru. |
| Service picker | Tidak ada temuan tambahan: pilihan layanan aktif serta kontrol tutup tersedia. | Pertahankan konteks Dashboard ketika picker ditutup; jangan menambah layanan yang tidak aktif. |
| Draft resumable | Tidak ada temuan tambahan: Lanjutkan dan informasi simpan/kedaluwarsa tersedia. | Pertahankan perbedaan draft dengan pengajuan workflow; implementasi harus mengambil draft yang benar. |
| Draft access-revoked | Tidak ada temuan tambahan: alasan terkunci dibedakan dari kedaluwarsa. | Jangan memberi Lanjutkan/Submit seolah akses masih aktif; pengajuan lama yang sudah masuk workflow bukan draft terkunci. |
| Wardrobe permission | Tidak ada temuan tambahan: navigasi hanya pada state berizin. | Pertahankan batas izin tanpa menyiratkan Requester dapat mengedit atau menghapus wardrobe. |
| Profile sheet | Tidak ada temuan tambahan: identitas, Keluar, dan tutup tersedia. | Pertahankan fungsi sheet yang ringkas; tidak perlu menambah pengaturan profil di luar scope. |
| Chart status | Tidak ada temuan tambahan pada kontrak jumlah/label yang didokumentasikan; proporsi tidak diukur ulang. | Pertahankan label dan hitungan tekstual sebagai informasi utama; jangan mengambil angka fixture sebagai metrik produk. |

## PG-04 Daftar Pengajuan

Dasar: [README Desktop][list-desktop] dan [Mobile][list-mobile]. Saran berikut menyempurnakan kontrak pemulihan/filter, bukan menyatakan baseline visual gagal.

| State | Masalah | Saran konkret |
| --- | --- | --- |
| Normal | Tidak ada temuan tambahan: identitas, status, nominal, next step, dan detail tersedia. | Pertahankan aksi keputusan di detail, bukan menambah cancel atau keputusan massal ke daftar. |
| Filtered | Tidak ada temuan tambahan: pilihan aktif/chip mempertahankan konteks hasil. | Pertahankan hitungan filter sesuai chip; pencarian tetap terpisah dari hitungan tersebut. |
| No results | **L01:** Hapus pencarian tidak memulihkan hasil bila penyebabnya kombinasi filter yang masih aktif. | Sebutkan filter aktif dalam penjelasan dan arahkan ke Hapus filter yang sudah ada; jangan menghapus semua input tanpa penjelasan. |
| Empty | Tidak ada temuan tambahan: dibedakan dari hasil pencarian kosong. | Gunakan Buat pengajuan untuk keadaan tanpa data, bukan untuk kombinasi filter yang tidak cocok. |
| Loading | Tidak ada temuan tambahan: data belum tersedia tidak disamakan dengan daftar kosong. | Pertahankan filter saat memuat; jangan membuat hasil sebelumnya tampak sebagai respons filter baru. |
| Error | Tidak ada temuan tambahan: retry tanpa membuang filter sudah disebut dalam handoff. | Pertahankan kata kunci, layanan, status, tanggal, dan urutan saat Coba lagi. |
| Service disabled | Tidak ada temuan tambahan: filter historis dan request lama tetap tersedia. | Pertahankan pemisahan filter layanan dengan pilihan membuat pengajuan baru. |
| Filter status | Tidak ada temuan tambahan: token workflow PRD tersedia. | Draft tidak dimasukkan sebagai status workflow; Pending vendor proof tetap bermakna khusus Payment Request. |
| Filter tanggal | **L02:** Contoh rentang valid belum menjelaskan pemulihan ketika tanggal akhir mendahului tanggal mulai. | Validasi di dekat tanggal akhir, jelaskan rentang tidak valid, tahan Terapkan, dan pertahankan kedua input agar dapat diperbaiki. |
| Export menu | Tidak ada temuan tambahan: CSV/Excel sesuai daftar dan izin; PDF berada di detail. | Pertahankan pemisahan format tersebut, tanpa memasukkan file sensitif ke export daftar. |
| Export generating | **L03:** Kontrak yang dibaca belum menjelaskan konteks file ketika pengguna mengganti filter saat export berjalan. | Ikat job ke filter saat diminta dan ulangi konteks itu pada umpan balik/hasil; jangan memberi kesan file mengikuti filter layar yang berubah kemudian. Ini kontrak implementasi, belum bukti bug runtime. |
| Export error | Tidak ada temuan tambahan pada pesan retry dan pemeliharaan input. | Coba lagi harus memakai konteks export yang gagal sebagaimana L03, bukan diam-diam mengubah isinya. |
| Export denied | Tidak ada temuan tambahan: tidak tersedia izin dibedakan dari kegagalan membuat file. | Pertahankan penjelasan Hubungi Admin tanpa menjanjikan akses akan diberikan atau mematikan akses daftar yang masih sah. |
| Pagination | **L04:** Fixture satu halaman belum menjelaskan pemulihan halaman aktif sesudah filter mengurangi hasil atau setelah kembali dari detail. | Gunakan reset halaman saat filter/urutan berubah sesuai handoff; simpan halaman/filter saat hanya kembali dari detail. Jangan menafsirkan tombol fixture nonaktif sebagai pagination yang sudah selesai diimplementasi. |

## PG-05/06 Reimbursement Requester

Dasar: [README Reimbursement][reimbursement], [screens.md][screens], serta aturan F3/F6 dan workflow dalam [PRD][prd].

| State | Masalah | Saran konkret |
| --- | --- | --- |
| Form/draft | **R01:** Pemetaan aktif untuk kategori bersyarat, termasuk usulan Props & Wardrobe, belum jelas dalam paket form utama. | Kaitkan perubahan kategori dengan field yang relevan dan sumber proposal existing; sifat usulan tetap opsional, ukuran wajib hanya pada subkategori yang ditetapkan PRD. Jangan menjadikan wardrobe field default semua kategori. |
| Upload error | Tidak ada temuan tambahan: file gagal dan Coba lagi dibedakan, data form dipertahankan. | Pertahankan retry pada file yang gagal; jangan mengosongkan invoice lain atau menampilkan bukti sebagai tersimpan sebelum selesai. |
| OCR fallback | Tidak ada temuan tambahan: fallback manual sudah dijelaskan. | Pertahankan field manual dan kewajiban memeriksa hasil OCR; kegagalan/kuota OCR tidak boleh menjadi gate Submit. |
| Validasi | **R02:** `J0Yv9L`/`ptGJ0` meminta kelengkapan, tetapi fixture masih terlihat terisi; pengguna tidak tahu field yang salah. | Pakai input kosong/tidak valid yang benar-benar sesuai pesan; letakkan sebab dan pemulihan dekat field, dengan ringkasan yang mengarah ke field tersebut. Jangan mengganti contoh terisi dengan banner umum saja. |
| Draft access revoked | Tidak ada temuan tambahan: draft tidak dapat dikirim dan alasannya tersedia. | Pertahankan datanya; bedakan dari request lama yang masih wajib dapat ditindaklanjuti sesuai PRD. |
| Link bukti: input/invalid/attached | Tidak ada temuan tambahan: sumber, format link, Batal, dan menunggu validasi sudah dipisahkan. | Pertahankan penjelasan link tidak harus publik. Jangan memindahkan gate salinan privat sebelum Finance Approved menjadi gate Submit Requester. |
| Uploading | Tidak ada temuan tambahan: bukti wajib belum selesai menyimpan menahan Submit. | Pertahankan input/invoice lain dan kejelasan file mana yang masih diproses; jangan menjadikan animasi upload bukti keberhasilan simpan. |
| Simpan draft: sukses/saving | Tidak ada temuan tambahan pada pembedaan sedang menyimpan dan tersimpan. | Isi timestamp sukses hanya setelah simpan berhasil; draft tetap tidak menjadi Pending dan mengikuti retensi 90 hari PRD. |
| Simpan draft: gagal | **R03:** “Data tetap ada” belum membedakan data pada layar dengan data yang berhasil tersimpan dan bisa dilanjutkan. | Nyatakan “Perubahan belum tersimpan” dan arahkan ke Simpan draft untuk mencoba ulang; jangan memberi jaminan dapat dilanjutkan di perangkat lain sebelum simpan berhasil. Pertahankan input selama pemulihan. |
| Tinjau sebelum submit | **R04:** `P1dlX` masih menyerupai form dengan Tinjau & kirim; Mobile menunjuk akhir form, sehingga batas meninjau dan mengirim belum tegas. | Tampilkan ringkasan kategori, invoice, primary proof, dan total read-only; gunakan Kirim pengajuan untuk komit terakhir dan Kembali untuk mengoreksi tanpa menghapus isian. Tidak perlu menambah tahapan approval. |
| Duplicate confirmation | Tidak ada temuan tambahan: nomor invoice, tanggal, nominal dan Kirim tetap/Batal sudah tersedia. | Pertahankan konteks tersebut; Batal kembali ke draft, bukan membatalkan request atau menghapus invoice. |
| Submit → Pending | Tidak ada temuan tambahan pada pengakuan keberhasilan dan menunggu Finance. | Saat implementasi, tampilkan sukses setelah nomor/status diterima; respons yang belum pasti jangan diperlakukan sebagai kegagalan yang menyuruh mengirim request baru. |
| Revision | **R05:** Requester membuka bukti tertentu sementara pemilihan kelompok field oleh Admin perlu dipetakan secara eksplisit; opacity tidak cukup menjadi kontrak edit. | Tentukan pemetaan ID field/kelompok yang dikirim Admin ke field terbuka, tampilkan instruksi publik di dekatnya, pertahankan bukti lama dan konteks terkunci. Resubmit kembali ke Finance; jangan menyimpulkan hak edit dari tampilan pudar. |

### Detail status: satu template tiga blok

**R06:** Pesan netral pada detail Reimbursement memakai penekanan yang menyerupai error, sehingga status menunggu dapat terbaca sebagai masalah. Gunakan treatment informasi netral untuk menunggu; warning untuk tindakan Requester; danger untuk penolakan/kegagalan sesuai konteks. Ini kritik semantik terhadap sumber, bukan pengukuran kontras baru.

**R07:** Beberapa detail mengulang token status tanpa menjawab siapa yang bertindak berikutnya. Pakai satu template, tidak satu desain baru untuk setiap status:

1. Status + next step: token PRD, aktor berikutnya dan tindakan Requester bila memang ada.
2. Ringkasan read-only: identitas, konteks, invoice/bukti yang boleh dilihat, nominal dengan semantik yang sudah diputuskan produk.
3. Riwayat aktual: hanya event yang benar-benar tercatat dengan aktor/waktu dan alasan publik sesuai izin. Jangan mengisi tahapan yang belum terjadi atau memindahkan catatan internal ke sini.

PRD memuat sepuluh status workflow, **bukan sepuluh status terminal**. Paid, Rejected, dan Cancelled adalah terminal. Tabel ini adalah saran isi template, bukan perubahan transisi atau persetujuan desain.

| State | Masalah khusus di luar R06/R07 | Isi status + next step yang disarankan |
| --- | --- | --- |
| Pending | **R09:** Konfirmasi pembatalan memakai penekanan aksi utama biasa meskipun konsekuensinya final. | Jelaskan menunggu Finance. Batalkan pengajuan hanya sebelum Admin mulai memproses, sesuai PRD; konfirmasi memakai sumber destructive existing, menyebut konsekuensi dan nomor tetap terpakai. Setelah diproses, hilangkan aksi dan jelaskan sebabnya. |
| Revision | Tidak ada temuan tambahan selain pemetaan R05. | Tampilkan instruksi publik dan Perbaiki pengajuan yang membuka hanya field ditandai. Ringkasan lain tetap read-only. |
| Finance Approved | Tidak ada temuan tambahan selain next step R07. | “Pemeriksaan Finance selesai; menunggu Approver.” Jangan menyebut pengajuan sudah memperoleh approval bisnis atau sudah dibayar. |
| Approved | Tidak ada temuan tambahan selain next step R07. | Jelaskan approval selesai dan menunggu persiapan pembayaran; jangan menjanjikan tanggal pembayaran yang belum ditetapkan. |
| Return to Admin | Tidak ada temuan tambahan selain next step R07. | Jelaskan sedang kembali ke Admin beserta alasan publik yang diizinkan. Tidak membuka edit Requester sebelum ada Revision yang menandai field. |
| Maker Done | Tidak ada temuan tambahan selain next step R07. | “Pembayaran disiapkan, belum dirilis.” Requester tidak memperoleh aksi Maker/Releaser. |
| Pending vendor proof | Tidak berlaku untuk Reimbursement menurut PRD. | Jangan membuat state Reimbursement ini untuk melengkapi galeri; gunakan hanya pada Payment Request. |
| Rejected | Tidak ada temuan tambahan pada alasan dan keadaan read-only. | Tampilkan alasan publik, tidak memberi edit/resubmit. Pengajuan baru adalah request baru, bukan melanjutkan nomor yang ditolak. |
| Cancelled | Tidak ada temuan tambahan pada keadaan read-only. | Nyatakan dibatalkan dan nomor tetap terpakai; tidak memberi Lanjutkan atau edit. |
| Paid | **R08:** Pada contoh Paid, baris bukti pembayaran menggantikan baris invoice sehingga jejak bukti asal sulit ditelusuri dari detail. | Bedakan bukti pembayaran dari invoice dan pertahankan akses ke bukti asal sesuai izin. Status tetap read-only; tanggal/referensi/bukti pembayaran mengikuti PRD, bukan fixture yang dianggap rekaman nyata. |

## PG-07/08 Payment Request

Dasar: [README Payment Request/Overtime][payment-overtime], [PRD][prd], dan [open questions][questions].

| State | Masalah | Saran konkret |
| --- | --- | --- |
| Form | **P01:** Form utama belum memetakan checklist dokumen dan jalur upload/link/recovery selengkap kebutuhan template; teks “terunggah” belum menjadi kontrak interaksi. | Bentuk checklist dari template recipient + Quotation aktif, dengan status per dokumen dan aksi tambah/ganti/coba lagi. Reuse pola evidence existing, tetapi bedakan profil reusable dari dokumen khusus request dan jangan mengarang dokumen wajib per recipient. |
| Ganti recipient | **P02:** Varian pilihan tidak menjelaskan nasib fee, dokumen dan konfirmasi lama ketika recipient diganti. | Tampilkan dampak perubahan sebelum data ditimpa dan pertahankan draft selama pengguna memutuskan. Untuk field/profil mana yang boleh dibawa ke recipient baru, **butuh keputusan produk**; jangan diam-diam memindahkan dokumen sensitif atau menghapus input. |
| Tax read-only | Tidak ada temuan tambahan: pilihan Tax Treatment ditetapkan Admin dan Requester tidak diberi editor pajak. | Pertahankan keterangan dipilih saat review; jangan menampilkan angka pajak/net yang belum dihitung dari aturan aktif sebagai nilai final. |
| Konfirmasi rekening | **P03:** Kontrak aksi sesudah state belum/sudah dikonfirmasi belum diputuskan. | Tampilkan dua keadaan dengan hasil konfirmasi yang jelas; **butuh keputusan produk** untuk gate Tinjau/Submit sebagaimana tabel blocker. Jangan memilih salah satu gate atau membuka KTP/nomor rekening kepada Requester. |
| Pending vendor proof: belum diunggah/terunggah | Tidak ada temuan tambahan pada pemisahan aksi upload dan menunggu validasi Admin. | Setelah terunggah, jelaskan menunggu Admin; jangan menganggapnya tervalidasi atau langsung melanjutkan approval/payment. |
| Pending vendor proof: perlu diperbaiki | **P04:** Contoh perlu-perbaikan masih memakai penjelasan “Admin belum memvalidasi”, sehingga penolakan bukti tertukar dengan antre validasi. | Bedakan menunggu validasi dengan bukti tidak valid; tampilkan alasan publik spesifik dari Admin, nama bukti terkait dan Unggah ulang. Pertahankan bukti lama sesuai aturan berkas PRD. |
| Revision | Tidak ada temuan tambahan pada instruksi publik, penerima terkunci dan dokumen ditandai. | Pertahankan edit terbatas; kirim ulang ke Finance, bukan langsung ke Approver atau pembayaran. |
| Alasan penolakan publik | **P05:** “Dokumen tidak memenuhi persyaratan” pada fixture terlalu umum untuk membantu Requester menghindari kesalahan saat membuat pengajuan baru. | Tampilkan alasan publik yang benar-benar ditulis Admin tentang dokumen/ketidaksesuaian terkait; jangan mengarang sebab atau menampilkan catatan internal. Tetap tidak menyediakan edit pada Rejected. |

## PG-09/10 Overtime

Dasar: [README Payment Request/Overtime][payment-overtime], aturan bukti dalam [ux.md][ux] dan F5/F6 dalam [PRD][prd].

| State | Masalah | Saran konkret |
| --- | --- | --- |
| Form satu tanggal | Tidak ada temuan tambahan pada pemisahan tanggal, mulai/selesai, bukti, durasi dan subtotal. | Pertahankan satu Project/Batch dan tampilkan tarif hasil aturan aktif; jangan mengunci tarif contoh sebagai konfigurasi. |
| Form dua tanggal | **O01:** Paket Mobile belum menunjukkan posisi akhir form dua tanggal tempat aksi simpan/kirim dapat diperiksa. | Pastikan Tambah tanggal, Simpan draft, total dan Tinjau & kirim dapat dicapai lewat scroll tanpa mengecilkan field. Untuk handoff implementasi, jelaskan area scroll dan padding akhir; jangan menganggap potongan viewport berarti data hilang. |
| Bukti bersama lintas tanggal | **O02:** Label file menjelaskan dua tanggal tercakup, tetapi cara mengubah pemetaan setelah tanggal ditambah/dihapus belum dijelaskan. | Buat cakupan tanggal pada bukti eksplisit dan dapat diperiksa; setelah perubahan entri, tampilkan ulang cakupan aktual. Jangan menghapus file yang masih dipakai entri lain atau menganggap file otomatis mencakup tanggal baru. |
| Bukti per tanggal belum lengkap | **O03:** State pemulihan untuk tanggal yang belum punya bukti belum diperlihatkan dalam paket, padahal UX guideline menentukannya. | Sebut tanggal yang belum tercakup di dekat entri, tahan Kirim pengajuan, dan pertahankan Simpan draft serta bukti entri lain. Jangan hanya memberi pesan umum “lengkapi bukti”. |
| Detail | Tidak ada temuan tambahan pada rincian tanggal, durasi/subtotal, total, dan bukti bersama yang didokumentasikan. | Pertahankan snapshot tarif/perhitungan sesuai PRD dan gunakan riwayat aktual. Pembeda nominal awal/hasil koreksi tetap menunggu keputusan produk; jangan menambah rate/minimum dari fixture. |

## PG-06 Admin Finance: review paket keputusan

Konteks sumber adalah paket **Ready for Owner Review**, belum Approved. Penilaian di bawah merupakan review atas [paket tersimpan terbaru][finance], bukan persetujuan. Tidak ada temuan substansial tambahan dari pembacaan isi dan handoff yang mengharuskan membuka ulang paket ini; batas runtime tetap berlaku.

| State | Masalah | Saran konkret |
| --- | --- | --- |
| Review detail | Tidak ada temuan tambahan: identitas request/Requester, konteks invoice/nominal, bukti dan aksi tersedia pada pasangan Desktop–Narrow. | Pertahankan identitas tersebut saat membuka keputusan; jangan menyusutkan narrow menjadi kumpulan tombol tanpa objek yang diperiksa. |
| Konfirmasi Revision | Tidak ada temuan tambahan: kelompok field, instruksi publik dan pemisahan catatan internal sudah konkret. | Pertahankan teks yang benar-benar akan dikirim; mengubah pilihan di form harus tercermin dalam konfirmasi. |
| Konfirmasi Koreksi | Tidak ada temuan tambahan: nilai lama/baru, total dan alasan ditampilkan. | Pertahankan ringkasan sebelum Simpan koreksi; jangan mengganti nilai lama pada jejak audit. |
| Konfirmasi Reject | Tidak ada temuan tambahan: alasan publik, konsekuensi dan tindakan destructive sudah jelas. | Pertahankan Batal sebagai kembali tanpa keputusan; catatan internal tidak ikut dikirim ke Requester. |
| Konfirmasi Finance Approved | Tidak ada temuan tambahan: identitas, nominal hasil pemeriksaan dan tujuan Approver ditampilkan. | Pertahankan pembeda Finance validation dengan business approval; jangan mengubahnya menjadi Paid. |
| Validasi field wajib | Tidak ada temuan tambahan: instruksi/alasan yang kosong memiliki error dekat field dan input lain tetap ada. | Pada implementasi, tahan keputusan yang tidak valid sambil mempertahankan input; hasil statis bukan bukti validasi server. |
| Gate Approver | Tidak ada temuan tambahan: tanpa Approver, penerusan tidak tersedia dan sebabnya dijelaskan. | Pertahankan gate PRD; jangan memilih Approver fallback yang tidak dikonfigurasi. |
| Gate salinan privat | Tidak ada temuan tambahan: validasi dan simpan salinan privat menjadi pemulihan sebelum Finance Approved. | Jangan menganggap klik Simpan salinan privat sama dengan keberhasilan penyimpanan; tunggu hasil yang terverifikasi. |
| Hasil koreksi dan jejak audit | Tidak ada temuan tambahan: old/new, alasan, actor/time serta status yang tetap Pending tersedia pada contoh. | Isi blok ini dari hasil simpan/audit sebenarnya, bukan dari input optimistis yang belum berhasil. Jangan menampilkan actor/time fixture pada produk berjalan. |

## Punch list MVP sebelum implementasi perilaku terkait

Daftar ini hanya gate keputusan atau perlindungan data, bukan salinan Definition of Done visual. Bagian teknis yang tidak bergantung pada jawaban produk tetap dapat dikerjakan. Tidak ada permintaan merombak baseline, menambah galeri, atau mengulang audit piksel.

### PG-02 Dashboard

- Putuskan semantik nominal dan lebar nomor publik sebelum mengikat tampilan final Dashboard ke data transaksi; rujuk tiga blocker produk di atas. Tidak ada punch list redesign tambahan.

### PG-04 Daftar Pengajuan

- Selesaikan keputusan nominal/format nomor untuk konsistensi daftar dan detail.
- Definisikan konteks export yang dipertahankan saat generating/retry agar file tidak salah filter (L03).
- Tetapkan pemulihan rentang tanggal dan reset/pemulihan halaman agar pengguna tidak terjebak pada hasil yang tidak sesuai input (L02/L04).

### PG-05/06 Reimbursement Requester

- Pemetaan kategori/field bersyarat dan Revision ke field yang benar-benar dapat diedit harus eksplisit (R01/R05).
- Bedakan saving/saved/error serta tangani konflik autosave antar tab tanpa menimpa isian diam-diam (R03 dan batas platform).
- Tentukan pemulihan upload/link serta retensi bukti lama; Submit menunggu primary proof tersimpan, OCR gagal tetap dapat manual.
- Perjelas batas tinjau versus kirim dan penanganan respons submit yang belum pasti agar tidak mendorong pengiriman ganda (R04).
- Kunci edit terminal, pertahankan bukti asal terpisah dari bukti pembayaran, dan jelaskan konsekuensi cancel agar dokumen atau pengajuan tidak hilang karena salah tindakan (R08/R09).

### PG-07/08 Payment Request

- Tetapkan gate konfirmasi rekening melalui keputusan produk sebelum mengimplementasikan enable/disable Tinjau/Submit (P03).
- Kontrak template aktif harus memberi checklist dokumen yang benar; jangan menebak kewajiban KOL/Talent/Freelance (P01).
- Tentukan dampak ganti recipient terhadap input/dokumen/konfirmasi dan lindungi draft sebelum perubahan destruktif (P02).
- Bedakan upload selesai, menunggu validasi dan bukti perlu diperbaiki tanpa membuang bukti lama (P04).

### PG-09/10 Overtime

- Definisikan pemetaan file ke tanggal dan perubahan cakupannya ketika entri berubah, tanpa menghapus file yang masih digunakan (O02).
- State tanggal tanpa bukti harus mempertahankan draft/bukti lain dan menahan pengiriman sesuai UX guideline (O03).
- Pastikan aksi akhir form dua tanggal tetap dapat dicapai pada browser kecil/ber-keyboard virtual, tanpa mengubah kalkulasi atau tarif dari fixture (O01).

### PG-06 Admin Finance

- Konfirmasi harus memakai pilihan/nilai/alasan terkini; cegah perubahan di tab lain diterima seolah masih sama dengan ringkasan yang dikonfirmasi.
- Terapkan field/reason wajib, gate Approver dan salinan privat di server juga; saat keputusan gagal disimpan, pertahankan isian review.
- Simpan koreksi dan jejak audit secara konsisten sebelum menampilkan hasil sukses; pengulangan aksi tidak boleh mencatat keputusan ganda tanpa kendali.
- Pisahkan respons instruksi/alasan publik dari catatan internal dan dokumen sesuai permission PRD. Spesimen yang benar tidak membuktikan pembatasan data sudah bekerja.

[canvas]: https://github.com/anajibalm/reimburse/blob/a28b2aa/design/reimburse.pen
[screens]: https://github.com/anajibalm/reimburse/blob/a28b2aa/docs/design/screens.md
[ux]: https://github.com/anajibalm/reimburse/blob/a28b2aa/docs/design/ux.md
[components]: https://github.com/anajibalm/reimburse/blob/a28b2aa/docs/design/components.md
[copy]: https://github.com/anajibalm/reimburse/blob/a28b2aa/docs/design/copy.md
[foundations]: https://github.com/anajibalm/reimburse/blob/a28b2aa/docs/design/foundations.md
[fixtures]: https://github.com/anajibalm/reimburse/blob/a28b2aa/docs/design/fixtures.md
[prd]: https://github.com/anajibalm/reimburse/blob/a28b2aa/PRD.md
[questions]: https://github.com/anajibalm/reimburse/blob/a28b2aa/docs/product/open-questions.md
[dashboard]: https://github.com/anajibalm/reimburse/blob/a28b2aa/design/png/pg02-mobile/README.md
[list-desktop]: https://github.com/anajibalm/reimburse/blob/a28b2aa/design/png/pg04-desktop/README.md
[list-mobile]: https://github.com/anajibalm/reimburse/blob/a28b2aa/design/png/pg04-mobile/README.md
[reimbursement]: https://github.com/anajibalm/reimburse/blob/a28b2aa/design/png/reimbursement-requester/README.md
[payment-overtime]: https://github.com/anajibalm/reimburse/blob/a28b2aa/design/png/payment-overtime-requester/README.md
[finance]: https://github.com/anajibalm/reimburse/blob/a28b2aa/design/png/admin-finance-review/README.md
