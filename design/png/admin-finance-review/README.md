# Admin Finance review · issue #15

PG-06 is **Ready for Owner Review**, not Approved. PG-04 queue and PG-10 remain existing candidates. PG-08 received the limited text/state patch below; it is not a complete decision-flow handoff or an Approved baseline. These are static specimens, not proof of working authorization, upload, calculations, submission, keyboard or screen-reader behavior.

## PG-08 Admin Finance: patch teks/state

Baseline ter-resolve: `main@03d3acb458850a41d678c5b4711ed50d15d38c5e`; branch baru `design/admin-finance-pg08`. Working tree awal bersih. Sumber kanvas patch: `design/reimburse.pen`, SHA-256 `0f2cbeeaa7dfe315423e44022b4eac7c399640505f9301eb4e3c6e734d673099`. SHA kanvas terbaru ini hanya dicatat di sini.

### Koreksi lanjutan PR #19: galeri dan gate Approver

Koreksi ini berangkat dari HEAD `f142a49062c68737f6ac62c3b031c954f914ad33` pada branch yang sama, `design/admin-finance-pg08`. Working tree awal bersih. Tidak membuka branch/PR baru, tidak menyentuh PR #17, tidak merge.

**1. TERBUKTI: artefak galeri basi.** Sebelum koreksi, `zVZZY.png` dan `U6TVT.png` masih byte-identik dengan artefak baseline `main@03d3acb`, sedangkan isi layer editable berubah pada pass pertama PG-08. Riwayat ekspor sebelumnya juga menyatakan kedua galeri belum disegarkan. Ini verifikasi provenance/layer, bukan kesimpulan pembacaan PNG. Contoh teks layer persis:
- `zVZZY` → frame `iPcOE`, node `P7c7G`: baseline `Field terpilih dibuka untuk Requester; instruksi publik akan dikirim.`; kini `PAY-000018 · Maya Pratama\nField dibuka: Fee dan dokumen. Field lain tidak dibuka.\nInstruksi publik: belum diisi. Kembali dan isi instruksi sebelum meminta Revision.\nSetelah dikirim, status Revision. Catatan internal tidak dikirim ke Requester.` (notasi `\n` adalah pemisah baris).
- `zVZZY` → frame `WAO0I`, node `v0vcM`: baseline `Nilai lama, nilai baru dan alasan akan dicatat dalam audit.`; kini memuat nilai lama Rp4.500.000 dan baru Rp4.400.000 serta alasan belum diisi, sesuai verifikasi pass pertama di bawah.
- `zVZZY` → frame `OkzZU`, node `B72Kb`: baseline `Pengajuan yang ditolak tidak dapat diedit. Alasan penolakan akan dicatat.`; kini menyebut PAY-000018, Maya Pratama, alasan belum diisi, dan status Rejected.
- `U6TVT` → frame `eGvPW`, node `S39Jby`: baseline `Freelance · Fee Rp4.500.000`; kini `PAY-000018\nFreelance · Maya Pratama · Fee Rp4.500.000`.
- Empat konfirmasi Desktop (`c0W2bn`, `iPcOE`, `WAO0I`, `OkzZU`) memang tile langsung `zVZZY`; `eGvPW` tile langsung `U6TVT`. Pass pertama sebenarnya mengubah tujuh tile Desktop dan satu Narrow, bukan hanya empat tile total.

**2. TERBUKTI: D2GU5 belum diblokir.** Frame `c0W2bn`, node tombol `D2GU5`, source `fFmN2`: sebelum patch properti `enabled` tidak disetel (**true efektif**), `opacity` tidak disetel (**1 efektif**), nama layer persis `Finance Approved`. Label `D2GU5/U7Cbs` persis `Teruskan ke Approver`; `eq2MD.enabled:false` hanya menyembunyikan ikon panah, bukan men-disable tombol. Explanation `y2pz3` sebelumnya persis:

```text
Pengajuan: PAY-000018 · Maya Pratama · Freelance
Fee pemeriksaan: Rp4.500.000
Periksa Tax treatment dan Approver tujuan sebelum meneruskan. Nama Approver belum dicontohkan.
Setelah diteruskan: Finance Approved (validasi Finance), bukan Approved atau Paid.
```

Pembanding PG-06 `PRHXV/O8SGI4` persis `Penerusan tidak tersedia karena Approver belum ditetapkan. Hubungi Admin pengaturan.`; tidak ada tombol penerusan tampil pada frame itu. Nama yang belum dicontohkan bukan bukti konfigurasi runtime kosong. Sesuai permintaan owner, koreksi menyatakan kondisi unavailable secara eksplisit **pada specimen** dan menerapkan gate-nya, bukan mengarang nama Approver.

Hanya **dua stored nodes diubah**:
- `D2GU5`: `enabled:false`, `opacity:0.45`, nama layer `Teruskan ke Approver · disabled specimen · Approver belum tersedia`. Label tetap `Teruskan ke Approver`. Dalam schema Pen, `enabled:false` berarti node tidak dirender; aksi penerusan tidak tampil, mengikuti PRHXV, bukan sekadar tombol aktif yang diredupkan. Ini bukan bukti disabled/authorization runtime.
- `y2pz3`, teks sesudah patch persis:

```text
Pengajuan: PAY-000018 · Maya Pratama · Freelance
Fee pemeriksaan: Rp4.500.000
Approver belum tersedia pada specimen ini. Penerusan tidak tersedia sampai Approver ditetapkan. Hubungi Admin pengaturan.
Status tetap Pending. Finance Approved adalah validasi Finance, bukan Approved atau Paid.
```

**Komposisi galeri mekanis, tanpa upscale:**
- Ekspor langsung `zVZZY` pada scale 2 meminta **12320×6480**, tetapi exporter menghasilkan **8192×4309** karena batas 8192px. Hasil capped hanya pengujian temporer, tidak dipakai sebagai tile/heading atau output akhir.
- `zVZZY.png` akhir **12320×6480**: 12 tile Desktop native **2880×1920** pada posisi `(2x,2y)` dari frame kanvas, ditambah cached heading `PgoGm`, teks `ADMIN FINANCE · PG-08 / Desktop`, native **946×56** pada `(80,60)`.
- `U6TVT.png` akhir **5800×2100**: dua tile Narrow native **780×1688** pada `(80,200)` dan `(1020,200)`, ditambah cached heading `lftOV`, teks `ADMIN FINANCE · PG-08 / Narrow`, native **922×51** pada `(80,60)`.
- Tile yang sudah tersedia 2× dipakai langsung dari PNG individual terbaru: `c0W2bn` (setelah patch gate), `iPcOE`, `WAO0I`, `OkzZU`, `HP1TH`, `Y9z8O`, `Z31zwX`, `eGvPW`. Enam tile yang cache-nya masih 1×/belum ada (`L4uNC`, `LjcEB`, `HDq48`, `xpoXz`, `F1maXE`, `QB9Kq`) dan dua heading dirender native 2× ke cache temporer untuk input komposisi saja. PNG individual lain di repo tidak ditimpa/di-commit. Heading lama galeri 0,5× tidak di-upscale.
- ImageMagick menyusun sRGB RGBA dengan `Copy` pada latar transparan, tanpa operasi resize. Semua **14 crop tile + 2 crop heading** dibandingkan kembali dengan inputnya menggunakan `magick compare -metric AE`: masing-masing **0 (0)**, pixel-identik. Dimensi dan posisi mengikuti schema, bukan tebakan dari PNG.

**Output tambahan yang berubah hanya tiga PNG:** `c0W2bn.png`, `zVZZY.png`, `U6TVT.png`. Galeri tidak lagi historis/basi untuk PG-08. Tidak ada node baru, perubahan source reusable, variabel global, dimensi/layout, atau PG-02/04/06. Bounds konten tampil `c0W2bn` tidak bermasalah; section keputusan diperiksa melalui screenshot live. Fingerprint live/disk dua node dan scope diff diperiksa sebelum commit. Tidak ada perubahan editor tambahan yang ikut di-stage.

Tidak diverifikasi ulang: runtime/API/authorization, persistensi, kalkulasi pajak, keyboard/focus, screen reader, contrast numerik, atau konfigurasi Approver nyata. Kesimpulan enabled-state berasal dari node/schema, bukan PNG.

### Verifikasi sebelum patch: layer editable, bukan PNG

1. **TERBUKTI: identitas Narrow kurang.** `L4uNC/lin72/kpCLO` = `PAY-000018 · Pending`; `L4uNC/r7hPY` = `Freelance · Maya Pratama · Fee Rp4.500.000`. `eGvPW/S39Jby` hanya `Freelance · Fee Rp4.500.000`. Pembacaan seluruh teks Narrow tidak menemukan nomor pengajuan atau nama penerima: yang hilang dibanding Desktop adalah **PAY-000018** dan **Maya Pratama**, bukan field wajib baru.
2. **TERBUKTI: konfirmasi Finance Approved umum.** `c0W2bn/y2pz3` = `Validasi Finance selesai. Pengajuan akan diteruskan kepada Approver yang ditetapkan.`; `D2GU5/U7Cbs` = `Finance Approved`. Tidak ada fee pemeriksaan/nama Approver. Pembanding PG-06 `AvxAT`: `Gfoq2` = `Rp1.250.000`; `lEniw` = `Sari A.`; `hOz7b/U7Cbs` = `Teruskan ke Approver`. **TIDAK TERBUKTI** selected fields, nilai lama/baru, dan alasan adalah isi konfirmasi Finance Approved PG-06: itu isi state Revision/koreksi yang berbeda. Patch memperjelas identitas, fee, aksi, serta membedakan validasi Finance dari Approved/Paid. Pada pass pertama, **nama target Approver PG-08 belum tersedia**, tidak diisi dengan Sari A. dari layanan lain. Koreksi lanjutan di atas kemudian mengubahnya menjadi specimen unavailable dengan gate penerusan eksplisit; bukan klaim konfigurasi runtime.
3. **TERBUKTI: konfirmasi Revision/Reject umum.** `iPcOE/P7c7G` = `Field terpilih dibuka untuk Requester; instruksi publik akan dikirim.`; tombol `h3Mer/U7Cbs` = `Konfirmasi`. Form `LjcEB/kQ4mR` = `Fee dan dokumen`, berada dalam `UVFMr` (Revision selection), dengan `KEiKJ` (Selected checkbox, icon `square-check`). Namun `xdABN/P9sHXg` = `Jelaskan perubahan yang diminta`, masih placeholder. PG-06 `QdWeP/Iqaqm` = `Invoice dan bukti`, `I7hWfo` = `Mohon unggah invoice yang terbaca jelas.`; instruksi itu tidak dipinjam ke Payment Request. `OkzZU/B72Kb` = `Pengajuan yang ditolak tidak dapat diedit. Alasan penolakan akan dicatat.`; tombol `NGXDk/U7Cbs` = `Konfirmasi`; form `xpoXz/x8wNO/P9sHXg` = `Jelaskan alasan penolakan`, masih placeholder. **TIDAK TERBUKTI** Reject seharusnya membuka field: PRD menyatakan Rejected tidak dapat diedit. Patch menampilkan kelompok yang benar-benar dipilih dan kekosongan instruksi/alasan; tidak mengarang isi publik. Tiga tombol konfirmasi incomplete ditandai disabled secara visual/layer-state saja, bukan runtime controls.
4. **TIDAK TERBUKTI: rate/nominal pajak karangan pada PG-08 yang diperiksa.** `HDq48/NEjaB` = `Fee contoh Rp4.400.000; pajak dihitung sesuai Tax treatment aktif.`; `L4uNC/FDDBH/orwNG` dan `eGvPW/EdEFJ/orwNG` = `Pilih aturan aktif`. Tidak ditemukan rate persen, nominal pajak, atau net payout fiktif. Rp4.500.000/Rp4.400.000 adalah fee contoh. Tax treatment, rate, kalkulasi, dan gate tidak diubah atau ditambahkan.
5. **TIDAK TERBUKTI: akses dokumen sensitif diperluas pada specimen PG-08.** `L4uNC/xswZY` = `KTP dan rekening · akses Admin · Lihat sesuai izin`; `AmXSS/GvpjL` = `Lihat KTP / rekening · Admin`. `eGvPW/xzKJL` = `KTP dan rekening · Admin · lihat sesuai izin`; `xjs7l/GvpjL` = `Lihat KTP / rekening · Admin`. `HP1TH/vsRO7`, `Y9z8O/uLxB3`, `Z31zwX/emc6l` memakai teks akses Admin yang sama dengan Desktop; tombol `i9qZ1/GvpjL`, `qlAG8/GvpjL`, `d7bGOE/GvpjL` juga `Lihat KTP / rekening · Admin`. Tidak ada specimen PG-08 Approver/Requester yang memperluas izin tersebut. Tidak ada perubahan akses; authorization runtime belum diuji.

Temuan tambahan yang **TERBUKTI**:
- `WAO0I/v0vcM` = `Nilai lama, nilai baru dan alasan akan dicatat dalam audit.` tidak memuat nilai yang sudah ada pada form koreksi `HDq48`: `Gbn9p/P9sHXg` = `Rp4.500.000`, `nhMIq/P9sHXg` = `Rp4.400.000`, sedangkan `WEV7Z/P9sHXg` = `Jelaskan koreksi` masih placeholder. Patch membawa nilai lama/baru dan menunjukkan alasan belum diisi; status tetap Pending, bukan penerusan ke Approver.
- `HP1TH/aVG8t/kpCLO`, `Y9z8O/eImma/kpCLO`, `Z31zwX/j5JrJ/kpCLO` semuanya `PAY-000018 · Pending`; badge `taZBi/U0zly`, `CFjdt/U0zly`, `T1SHA/U0zly` semuanya `Pending vendor proof`. Header diselaraskan dengan badge tanpa mengubah badge/gate vendor proof.

### Node diubah dan hasil patch

| Frame | Node | Hasil |
| --- | --- | --- |
| eGvPW | S39Jby | `PAY-000018`, lalu `Freelance · Maya Pratama · Fee Rp4.500.000` pada baris berikutnya |
| c0W2bn | y2pz3, D2GU5/U7Cbs; D2GU5 pada koreksi lanjutan | Identitas dan Fee Rp4.500.000; kini Approver unavailable pada specimen dan penerusan diblokir; status tetap Pending. Label aksi tetap `Teruskan ke Approver`, tetapi `D2GU5.enabled:false`; rincian gate di atas |
| iPcOE | P7c7G, h3Mer/U7Cbs, h3Mer | Identitas, `Field dibuka: Fee dan dokumen. Field lain tidak dibuka.`, instruksi publik belum diisi; setelah dikirim status Revision, catatan internal tidak dikirim; aksi `Minta Revision`, opacity 0.45, nama layer disabled specimen |
| WAO0I | v0vcM, s8e4r/U7Cbs, s8e4r | Identitas, Fee Rp4.500.000 → Rp4.400.000; alasan belum diisi; koreksi tidak meneruskan, tetap Pending; audit lama/baru/actor/waktu/alasan; aksi `Simpan koreksi`, opacity 0.45, nama layer disabled specimen |
| OkzZU | B72Kb, NGXDk/U7Cbs, NGXDk | Identitas, alasan penolakan belum diisi; setelah ditolak Rejected/tidak dapat diedit; Reject tidak membuka field Revision; aksi `Tolak pengajuan`, opacity 0.45, nama layer disabled specimen |
| HP1TH | aVG8t/kpCLO | `PAY-000018 · Pending vendor proof` |
| Y9z8O | eImma/kpCLO | `PAY-000018 · Pending vendor proof` |
| Z31zwX | j5JrJ/kpCLO | `PAY-000018 · Pending vendor proof` |

**Batas hasil:** belum ada happy-path konfirmasi dengan instruksi publik/alasan konkret karena form sumber masih placeholder, serta belum ada contoh nama Approver PG-08. Patch tidak menyatakan paritas penuh dengan PG-06 atau kesiapan approval. Tidak ada field wajib/template, rate pajak, atau gate rekening baru. PRD tetap otoritas.

### Ekspor dan pemeriksaan

Pada pass pertama, hanya **8 frame berubah** yang diekspor, masing-masing PNG native 2×: [eGvPW](eGvPW.png) (780×1688); [c0W2bn](c0W2bn.png), [iPcOE](iPcOE.png), [WAO0I](WAO0I.png), [OkzZU](OkzZU.png), [HP1TH](HP1TH.png), [Y9z8O](Y9z8O.png), [Z31zwX](Z31zwX.png) (2880×1920). Empat PNG konfirmasi sebelumnya belum ada di paket; frame-nya sudah ada, tidak dibuat ulang. Ekspor lama eGvPW/vendor proof berukuran 1×; ekspor baru dirender native 2×, bukan upscale PNG lama. `L4uNC`, `HDq48`, `LjcEB`, `QB9Kq` tidak berubah/tidak diekspor. Galeri `zVZZY`/`U6TVT` belum diekspor pada pass pertama; keduanya kini disegarkan melalui komposisi native 2× pada koreksi lanjutan di atas.

Checklist:
- Tepat **12 stored nodes** berubah (12 teks/instance-content dan tambahan nama/opacity pada tiga ref tombol yang sama). Tidak ada ID/node/source/ref baru, penghapusan, perubahan children/order, layout/dimensi/typography, atau variabel global.
- Semua source reusable tetap identik; instance sidebar/header/badge yang sudah ada tetap dipakai (`fTzqJ`, `yLJBd`, `Igbr1`, `R5NHOj`). `G1vZd` dan `F07dGp` dibaca sebagai referensi, tidak diubah atau dipaksakan menjadi instance baru karena batas tanpa node baru. PG-02/PG-04/PG-06 dan semua root non-PG-08 identik baseline.
- Bounds seluruh 8 frame: nol masalah pada node enabled. Empat temuan clipping berada pada node `enabled:false` yang sudah ada (`hWwD3`, `ZFnld`, `Z8EAWK`, `k0owxg`), bukan konten tampil. Screenshot live eGvPW, empat konfirmasi, dan HP1TH diperiksa untuk wrapping/alignment/overflow. Screenshot bukan dasar verdict teks.
- Tidak diverifikasi: authorization/API, persistence audit, tax calculation aktual, upload/validasi dokumen, interaksi/disabled runtime, keyboard/focus, screen reader, contrast numerik, atau regresi visual seluruh layanan. Dokumen sensitif di luar scope PG-08 tidak diaudit menyeluruh.
- Tidak ada perubahan editor tambahan yang ikut di-stage; hanya patch teks/state eksplisit. Tidak menyentuh docs lain, PG-06, PR #17, atau merge.

## Riwayat PG-06

## Patch copy terverifikasi, issue #15

Sumber patch: kanvas `design/reimburse.pen` pada commit `d51b5a33902f4be31f53684a84113fc79f2364b4`, SHA-256 `7f3413a961d4674c60f3500ba6ef49fee441a629b0bf19e9355b11d14cbed496`. Posisi lokal `SpqpD.y = 115` dipertahankan unstaged; nilai committed tetap 100. PNG yang diekspor tidak mencakup `SpqpD`. Verifikasi membandingkan dengan HEAD sebelumnya pada branch `design/admin-finance-review`, bukan `main`.

### Verdict sebelum patch, dari layer editable, bukan PNG

1. **TERBUKTI**: helper persis `Status menjadi Finance Approved. Ini validasi Finance, bukan business approval atau Paid.` berjumlah **8**. Enam berada bersama badge `Pending`: `Kr0gH` → helper `NhIhB`, badge `PaKPd/U0zly`; `IPbJL` → `Iobl2`, `rmnVd/U0zly`; `pSkHH` → `ZoQMK`, `WSb8r/U0zly`; `Fdupv` → `da167`, `j8l7Lj/U0zly`; `El9ow` → `gYGst`, `OWLIP/U0zly`; `phpZn` → `hps4I`, `OTzOD/U0zly`. Dua lainnya: `AvxAT/ffKvn` dan `jTy7R/HQu0d`, frame konfirmasi tanpa badge status; keduanya tidak diubah. Badge Pending tidak diubah.
2. **TERBUKTI** inkonsistensi istilah, **TIDAK TERBUKTI** bahwa hero memakai kata contoh. Hero/caption persis `Total pengajuan setelah koreksi`: `dRbB4` → `QAiKr`, `y41Z2/heZsY`; `FyrQ7` → `Gpjxo`, `D3blH/heZsY`; `d0R8t` → `tcK08`, `B7x8T/heZsY`. Calculation persis `Total contoh setelah koreksi · Rp1.200.000`: `a5jkj/JhPBo`, `CYzIN/wAeCz`, `Wym3I/N2lBe`, `k99ii/FwIFc`. Hanya Calculation yang diubah.
3. **TERBUKTI** copy ambigu: `Nominal sebelumnya · tidak diubah` merujuk nilai lama `Rp1.250.000`, bukan nilai pengajuan baru `Rp1.200.000`. Frame/node label/nilai lama/nilai baru: `a5jkj` → `cIRko/g6qurL`, `cIRko/P9sHXg`, `cFuVs/P9sHXg`; `CYzIN` → `avlam/g6qurL`, `avlam/P9sHXg`, `W4AG7R/P9sHXg`; `Wym3I` → `B1mJL/g6qurL`, `B1mJL/P9sHXg`, `zh5KZ/P9sHXg`; `k99ii` → `FsD0w/g6qurL`, `FsD0w/P9sHXg`, `ENP8R/P9sHXg`. Label baru di semua pasangan persis `Nominal pengajuan setelah koreksi`. Nominal tidak diubah.
4. **TERBUKTI** absen: seluruh teks `dRbB4`, `FyrQ7`, `d0R8t` dibaca; tidak ada Selisih atau nominal Rp50.000 dengan label lain. Nilai lama/baru ada, tetapi bukan baris selisih. Detail hasil koreksi memiliki `Selisih` / `Rp 50.000`: `IPbJL` → `jbOOe`/`XerKQ`; `Fdupv` → `s07No`/`gbq4f`; `phpZn` → `Pcf5b`/`mwps7`. Patch memakai layer konsekuensi konfirmasi yang sudah ada, bukan menambah baris/node.
5. **TIDAK TERBUKTI**: label tombol destruktif persis `Tolak pengajuan`, bukan nominal: `NORQW/fiCgD/D3xtJ`, `b84ip/MTrUn/D3xtJ`. Tidak diubah. Nominal invoice terpisah: `NORQW/EQhgw` dan `b84ip/e2XnA`, keduanya `Rp 1.250.000`.

### Perubahan, 17 layer teks / 13 frame

| Frame | Node diubah | Teks sesudah patch |
| --- | --- | --- |
| Kr0gH, IPbJL, pSkHH, Fdupv, El9ow, phpZn | NhIhB, Iobl2, ZoQMK, da167, gYGst, hps4I (urutan berpasangan) | `Setelah diteruskan: Finance Approved (validasi Finance), bukan business approval atau Paid.` |
| a5jkj, CYzIN, Wym3I, k99ii | JhPBo, wAeCz, N2lBe, FwIFc (urutan berpasangan) | `Total pengajuan setelah koreksi · Rp1.200.000` |
| a5jkj, CYzIN, Wym3I, k99ii | cIRko/g6qurL, avlam/g6qurL, B1mJL/g6qurL, FsD0w/g6qurL (urutan berpasangan) | `Nominal sebelum koreksi` |
| dRbB4 | jAMMq | `Selisih: turun Rp50.000. Koreksi tidak meneruskan pengajuan. Status tetap Pending. Nilai lama, nilai baru dan alasan dicatat dalam audit.` |
| FyrQ7, d0R8t | zWkOX, wQYR2 (urutan berpasangan) | `Selisih: turun Rp50.000. Koreksi tidak meneruskan pengajuan. Status tetap Pending; file invoice asli tidak diubah.` |

Ekspor patch ini mencakup **13 PNG individual 2×**: `Kr0gH.png`, `IPbJL.png`, `pSkHH.png`, `Fdupv.png`, `El9ow.png`, `phpZn.png`, `a5jkj.png`, `CYzIN.png`, `Wym3I.png`, `k99ii.png`, `dRbB4.png`, `FyrQ7.png`, `d0R8t.png`. Setelah itu, hanya `k99ii.png` diekspor ulang karena frame koreksi narrow memakai teks baru; 12 PNG individual lain tidak disentuh. **Dua galeri PG-06 disegarkan** dari PNG individual saat ini. Daftar 30/34 PNG di bawah adalah catatan pass terdahulu, bukan ekspor patch ini.

Checklist verifikasi patch:
- Seluruh node ID dan struktur children dipertahankan; tidak ada node/source reusable baru atau perubahan variabel global. PG-02/PG-04 dan semua root selain dua root PG-06 tidak berubah.
- Perubahan bermakna hanya 17 content/instance-content; editor saat save menormalisasi 106 teks PG-06 dari fontWeight tidak disetel menjadi default `normal`, tanpa perubahan tampilan. Tidak ada perubahan ukuran/layout/desain.
- Bounds 13 frame: tidak ada clipping di luar delapan perpotongan scroll-content/viewport yang disengaja. Screenshot live representatif `a5jkj`, `dRbB4`, `FyrQ7`, dan section helper `XnJHj` diperiksa untuk alignment, wrapping, keterbacaan, dan layout; screenshot tidak dipakai untuk membuktikan temuan teks.
- Tidak diverifikasi: runtime/API, persistensi audit, interaksi, keyboard/focus, screen reader, pengukuran contrast WCAG numerik, atau regresi visual menyeluruh seluruh screen. P1 lain tetap di luar scope. Approved baselines tidak dirender ulang. Status tetap Ready for Owner Review, bukan Approved.
- Tidak menyentuh PR #17, tidak push/merge, tidak mengubah docs lain.

## Catatan historis: spacing/alignment polish

Saved source for the PG-06 spacing/alignment polish, 3 Nov 2026: `design/reimburse.pen`, SHA-256 `2766b3bd5f42b409d14f1821fc5e8c51cd711131c020dc8e4948ffd2496489b4`; observed disk mtime `2026-11-03 22:12:06 +0700`. Disk/live root fingerprints match: `k3Z6yT: 38b29b1d`, `QkNNL: 1831ed5b`. This package is compared with HEAD at verification (`15b66a0`); earlier packages are historical, not the current export source. Full MVP scope in PRD, including master data, settings, permissions, import/export and audit, is unchanged; only the two PG-06 roots change.

## PG-06 Ready for Owner Review

| Specimen | Desktop refreshed | Narrow specimen |
| --- | --- | --- |
| Review | [Kr0gH](Kr0gH.png) | [pSkHH](pSkHH.png) |
| Revision form | [M18Zn4](M18Zn4.png) | [E2LETd](E2LETd.png) · **not re-exported** |
| Correction form | [a5jkj](a5jkj.png) | [Wym3I](Wym3I.png) |
| Reject form | [SpqpD](SpqpD.png) | [Uumk3](Uumk3.png) |
| Finance Approved confirmation | [AvxAT](AvxAT.png) | [jTy7R](jTy7R.png) |
| Missing Approver | [PRHXV](PRHXV.png) | [LeyaV](LeyaV.png) |
| Revision confirmation | [QdWeP](QdWeP.png) | [Lobuu](Lobuu.png) |
| Correction confirmation | [dRbB4](dRbB4.png) | [FyrQ7](FyrQ7.png) |
| Reject confirmation | [NORQW](NORQW.png) | [b84ip](b84ip.png) |
| Inline private-copy gate | [i8by7](i8by7.png) | [Ngiia](Ngiia.png) |
| Revision validation | [BVkTP](BVkTP.png) | [TMFSr](TMFSr.png) · **not re-exported** |
| Correction validation | [CYzIN](CYzIN.png) | [k99ii](k99ii.png) · **not re-exported** |
| Reject validation | [DNK1L](DNK1L.png) | [AqkVX](AqkVX.png) · **not re-exported** |
| Saved correction/audit | [IPbJL](IPbJL.png) | [Fdupv](Fdupv.png) |
| End-scroll views | Not applicable | [Detail El9ow](El9ow.png) · [Correction d0R8t](d0R8t.png) · [History phpZn](phpZn.png) · [Gate MFCrl](MFCrl.png) |
| Full gallery: 14 Desktop / 18 Narrow | [k3Z6yT](k3Z6yT.png) | [QkNNL](QkNNL.png) |

The earlier pass re-exported 30 PNGs: 14 Desktop specimens, 14 Narrow specimens and two galleries. Separately, 34 PNGs differed against `1296b9c`; those counts describe different scopes. This patch then re-exported only `k99ii.png` and refreshed both galleries. No other individual PNG changed.

- Desktop (14): `Kr0gH`, `M18Zn4`, `a5jkj`, `SpqpD`, `AvxAT`, `PRHXV`, `QdWeP`, `dRbB4`, `NORQW`, `i8by7`, `BVkTP`, `CYzIN`, `DNK1L`, `IPbJL`.
- Narrow (14): `pSkHH`, `Wym3I`, `Uumk3`, `Lobuu`, `FyrQ7`, `b84ip`, `jTy7R`, `LeyaV`, `Ngiia`, `Fdupv`, `El9ow`, `d0R8t`, `phpZn`, `MFCrl`.
- Galleries (2): `k3Z6yT`, `QkNNL`.
- Unchanged/not exported during the earlier 30-PNG pass (no Selisih row): `E2LETd` (Revision form), `TMFSr` (Revision validation), `k99ii` (Correction validation), `AqkVX` (Reject validation). `k99ii` was exported after that pass for this patch.

Individual Desktop entries are 2880×1920, Narrow 780×1688; full galleries are 12320×8560 and 5800×5820 at native 2×. Both galleries are mechanically composed from current individual PNGs plus their cached headings because direct frame export is capped at 8192px: 14 Desktop tiles for `k3Z6yT.png`, 18 Narrow tiles for `QkNNL.png`. No individual export is scaled up. Scroll positions are specimens, not new business states.

**Latest polish, presentation only:** section rhythm remains 32px Desktop / 24px Narrow, divider spacing 16/16 and 12/12, title/content gap 12px. Kr0gH column gap is 32px; total label and right action box both start at y=24. Approver helper uses 156px Desktop indentation / none Narrow. Selisih is a plain neutral-2 key-value row, and audit rows have no nested gray surface; audit amounts stay 13/500. Correction values use horizontal Desktop / vertical Narrow order, corrected 28/700 and gray struck-through previous value, with no right-card hero. Correction cards size to content while the workspace still fills height.

Alert now precedes the entire decision group, with 12px to the first control and 12px between Reject and Teruskan; group A is 24px before the alert. MFCrl file/save/group gaps are 16/24. Status, enabled-state and copy remain unchanged except the word-preserving Selisih label/value split. Global variables and Approved source definitions remain unchanged.

**Desktop confirmations are dedicated pages/states, not modal dialogs:** `QdWeP` (Revision), `dRbB4` (correction), `NORQW` (Reject), `AvxAT` (Finance Approved) retain the Admin sidebar and now use a breadcrumb, explicit confirmation page title and a height-filling workspace body. Do not infer modal scrims, dialog overlays or focus traps. `FyrQ7` / `d0R8t` show the same Narrow correction confirmation at initial/end-scroll positions. The three saved-correction specimens all show total Rp1.200.000; Rp1.250.000 remains the original invoice/history value. Owner approval is still pending.

Final verification: enabled non-scroll bounds findings `k3Z6yT` **0**, `QkNNL` **0**, across 32 PG-06 specimens; `MFCrl` independently **0**. Thirteen Narrow scroll-content intersections with their fixed viewports are intentional and excluded. Saved totals: 85 reusable sources, 1,761 refs, 43 variables; zero missing refs. No new source was created, so `components.md` is unchanged. Only the two PG-06 root subtrees differ from the verification HEAD; other roots, reusable definitions and variables are unchanged. Disk reconciliation: 11,277 → 11,280 nodes including document (11,276 → 11,279 stored nodes). New IDs are only text labels `Pcf5b`, `jbOOe`, `s07No`; no deleted IDs. Frame count HEAD/disk is 4667/4667, with identical frame ID sets. Desktop subtree: 204 frames, HEAD/disk frame-set hash `7e8bf8c8`; Narrow: 354, hash `e7705927`, matching the previously reported live numbers. No wrapper frames were created. Complete text-content diff: new labels are “Selisih”; `XerKQ`, `gbq4f`, `mwps7` change “Selisih Rp 50.000” to “Rp 50.000”. No other text-content or instance-content override changes. PNG dimensions and composition are recorded above. **Baseline alignment and tabular numeral rendering are not verified:** the Pen schema lacks these properties; exact CSS is provided as an unimported draft handoff in tokens.css. Disabled buttons are visual specimens with explicit layer-state names, not tested runtime controls. No runtime interaction, authorization, audit persistence, upload/OCR, keyboard/focus or screen-reader behavior was tested. Owner approval is still required; do not merge.

## PG-04 existing Finance queue

Existing candidate, unchanged in this package: [Desktop](m4tUMY.png), [narrow](jSaaB.png), [narrow after scroll](bVMzc.png); [Desktop gallery](h1VqYU.png) / [narrow gallery](AMw0P.png). These PNGs were not re-exported in the PG-06 package.

## PG-08 and PG-10 existing candidates

- PG-08 Payment Request: [Desktop](L4uNC.png) / [narrow](eGvPW.png), [Desktop gallery](zVZZY.png) / [narrow gallery](U6TVT.png).
- PG-10 Overtime: [Desktop](r9jGF.png) / [narrow](WeO1A.png), [Desktop gallery](V1JYpe.png) / [narrow gallery](RP4Zo.png).

Both are existing candidates, unchanged and not re-exported in this package.

## Shared status handoff

Existing badge grammar `fawD6`/`vgxDh`, approval evidence board `x5aDgA`, and unresolved token notes are documented in [components](../../../docs/design/components.md) and [foundations](../../../docs/design/foundations.md). [Story Completion matrix and reading index](../../../docs/design/screens.md#story-completion-current-working-index) separate approved baselines, candidates, historical frames and the PG-06 review package. The shared source definitions were not changed by the PG-06 pass; these earlier shared PNGs were not refreshed.

## Main review screens

| Story | Desktop | Narrow viewport | State gallery |
| --- | --- | --- | --- |
| PG-04 Finance queue | [Antrean with current shell](m4tUMY.png) | [Antrean start](jSaaB.png) · [after scroll](bVMzc.png) | [Desktop](h1VqYU.png) · [Narrow](AMw0P.png) |
| PG-06 Reimbursement review | [Detail](Kr0gH.png) | [Detail with correction action](pSkHH.png) | [Desktop](k3Z6yT.png) · [Narrow](QkNNL.png) |
| PG-08 Payment Request review | [Detail](L4uNC.png) | [Detail with correction, tax and documents](eGvPW.png) | [Desktop](zVZZY.png) · [Narrow](U6TVT.png) |
| PG-10 Overtime review | [Detail](r9jGF.png) | [Detail with correction action](WeO1A.png) | [Desktop](V1JYpe.png) · [Narrow](RP4Zo.png) |

## Earlier individual state snapshots

Except for the 30 PNGs explicitly listed as refreshed in the current PG-06 polish package above, the links below are existing historical exports. Use the updated PG-06 root galleries for the current state variations; do not assume these individual snapshots were regenerated.

- Queue [filtered results](Wjjux.png); [private evidence copy required](i8by7.png).
- Revision: [Reimbursement](M18Zn4.png), [Payment Request](LjcEB.png), [Overtime](KXoh7.png). Public instruction and internal note are separate visual fields.
- Finance correction: [Reimbursement](a5jkj.png), [Payment Request](HDq48.png), [Overtime](ziAcH.png). Overtime example: `(2 + 2) × Rp105.000 = Rp420.000`; corrected `(2 + 2) × Rp100.000 = Rp400.000`. Payment tax calculation follows an active rule and no tax rate is invented.
- [Pending vendor proof](HP1TH.png), [invalid](Y9z8O.png), [validated](Z31zwX.png). Invalid proof does not show Finance Approved; the validated specimen still requires all other checks.
- Example [Revision confirmation](QdWeP.png) names the opened fields and exact public instruction. [Finance Approved confirmation](AvxAT.png) repeats the request identity, checked amount and destination Approver. See also [Reject confirmation](NORQW.png) and [Approver missing](PRHXV.png).
- Shared Admin sources: Desktop sidebar `fTzqJ` ([render](fTzqJ.png)), narrow header `yLJBd` ([render](yLJBd.png)), and decision summary `G1vZd` ([render](G1vZd.png)). The Desktop sidebar derives from approved Requester source `TFVJz`; Desktop headers continue to instance `Igbr1`; status labels instance `R5NHOj`. Sample disclosure is kept in frame names and this handoff rather than product UI.

## Restored editable IDs

The prior editor states were absent from the saved file and local editable checkpoints. They were recreated from existing components and checked against the earlier PNGs: `Fwsmh` → `Y9z8O` (invalid proof), `dMvX0` → `Z31zwX` (validated proof), and `Xpc1p` → `bIgtn` (filtered row inside `Wjjux`). The first two new renders and the filtered screen render are byte-identical to their earlier PNGs. Old IDs are historical mapping only, not links or live canvas targets.

## Earlier correction verification and boundaries

The following records the prior correction pass, not a rerun of the entire batch in the current package.

Saved source contains all three restored IDs, the three shared Admin sources, the queue scroll specimen `bVMzc`, and all original baseline IDs, with no missing local refs. Four representative Requester baseline renders (`k0okVa`, `jSSv3`, `TmbX6`, `WHMQ7`) were byte-identical to committed PNGs during this correction pass; this is not exhaustive visual regression. All eight Admin story groups reported zero enabled non-scroll layout problems after save. Narrow views are static 390×844 scroll handoffs; `bVMzc` proves the lower queue rows retain amount and a visible `Buka detail` action. Admin Finance controls are specimens only; Approver, Maker and Releaser authority is not granted by these screens. The review states do not establish API enforcement, access isolation, audit persistence, tax calculations, or real file validation.

Entity, template and bank-confirmation gates remain unresolved in `docs/product/open-questions.md`. The PRD does not specify an age-warning threshold; the age example does not define one. `yMffT` remains unchanged and unclassified.
