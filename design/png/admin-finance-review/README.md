# Admin Finance review · issue #15

PG-06 is **Ready for Owner Review**, not Approved. PG-08 received the scoped hierarchy pass below and remains a draft candidate. PG-04 queue and PG-10 are unchanged. These are static specimens, not proof of working authorization, upload, calculations, submission, keyboard or screen-reader behavior.

## PG-08 polish iterasi 3 · Commit 2: paritas Narrow

Branch/PR tetap `design/pg08-hierarchy` / #20, melanjutkan `8762aab4d7843d9d2ee59e5d4ea20124bdd8e4a4`. Owner mengonfirmasi **9 frame baru**, bukan 7. Sumber Commit 2 `design/reimburse.pen`, SHA-256 `c19b7b743363cb9f51e545420c5d74cdd093ace41d12fceebde44b7ec9af45e3`.

**Klarifikasi frame vs file:** `F1maXE`, `QB9Kq`, dan `xpoXz` semuanya **frame lama** yang sudah ada di canvas baseline `03d3acb`; ketiga **file PNG-nya baru ditambahkan ke Git pada commit 1 (`8762aab`)**, bukan frame baru. Sembilan frame yang benar-benar baru pada commit 2 adalah daftar berikut.

| State Narrow baru | Frame ID / PNG | Panel sumber Desktop commit 1 | Ukuran frame / PNG native 2× |
| --- | --- | --- | --- |
| Konfirmasi Finance Approved | `zZaog` / `zZaog.png` | `c0W2bn/gvPjM` | 390×844 / 780×1688 |
| Konfirmasi Revision | `z05UCS` / `z05UCS.png` | `iPcOE/sYA1i` | 390×844 / 780×1688 |
| Koreksi | `AhKS5` / `AhKS5.png` | `HDq48/zLcNC` | 390×844 / 780×1688 |
| Konfirmasi Koreksi | `Z7xFI` / `Z7xFI.png` | `WAO0I/yKjPw` | 390×895 / 780×1790 |
| Reject | `FwnFG` / `FwnFG.png` | `xpoXz/Xztxj` | 390×844 / 780×1688 |
| Konfirmasi Reject | `e7EmQ` / `e7EmQ.png` | `OkzZU/jylI9` | 390×844 / 780×1688 |
| Pending vendor proof · menunggu validasi | `mFA4I` / `mFA4I.png` | `HP1TH/AiGBH` | 390×1212 / 780×2424 |
| Pending vendor proof · tidak valid | `PIWbH` / `PIWbH.png` | `Y9z8O/MD2sP` | 390×1156 / 780×2312 |
| Pending vendor proof · tervalidasi | `hE9jn` / `hE9jn.png` | `Z31zwX/TwrCG` | 390×1156 / 780×2312 |

### Implementasi dan pewarisan

- Semua sembilan card **disalin dari panel Desktop commit 1**; urutan diadaptasi menjadi judul/subjudul → alert → form/data → tombol. Group intro gap12, antar grup24, action controls full-width44 dengan gap12; grup sekunder/destruktif/utama vendor proof mengikuti urutan sumber. Tidak membuat source reusable/variabel/global baru.
- Header seluruh **11 state Admin Narrow** kini persis `Pemeriksaan payment request`: sembilan header baru menggunakan instance `yLJBd`; dua existing `B6WHG/e4rWfs` dan `L4sG2D/e4rWfs` juga diseragamkan. Tidak mengubah header Requester/PG-02/04/06 di luar scope.
- Minta Revision existing `QB9Kq` diperbarui, **bukan frame baru**: card `Wgkuo`, judul `K61MF` 16/600, subjudul `p2Er8` 13px abu, alert `f2fub` sebelum data, action group `ISize`, tombol `SZDZv` full-width44/opacity0.5. Header/copy unik lama dipertahankan kecuali penggantian casing header yang diminta; subtitle/cause memakai copy Desktop. Card internal disusun ulang dengan ID baru untuk geometri bersih; frame ID `QB9Kq` tetap sama.
- Placeholder `Belum diisi` tetap 14px italic `#6B7280` **hanya** untuk Alasan/Instruksi publik di summary. Requester/Tax treatment summary tetap `Belum dicontohkan` plain14px `#111`. Select form tetap `Pilih aturan aktif`. Semua nilai/copy terlihat pada sembilan card dibandingkan sebagai multiset terhadap panel sumber: **sama persis**, termasuk instruksi publik/alasan yang belum diisi, tanpa mengarang data.
- Konfirmasi Koreksi `Z7xFI`: fee lama tercoret, fee baru 24/700, dan `Selisih: turun Rp100.000` diwarisi utuh; layout fee menjadi bertumpuk, arah panah ke bawah. Nominal tetap `Rp 4.500.000` / `Rp 4.400.000`. Tidak memakai format selisih negatif.
- Tombol yang bisa diperbaiki Finance tetap tampil opacity0.5 sesuai sumber; Approver unavailable tetap tidak dirender pada `zZaog`. **Original `D2GU5` tidak diubah**; semua Desktop, termasuk seluruh root `zVZZY`, identik commit 1. Ini specimen visual, bukan disabled/authorization runtime.
- Tiga varian vendor proof mempertahankan chip `Pending vendor proof`, file/status dokumen, alert warning/error/success dan button state masing-masing dari sumber Desktop. Chip panjang ditempatkan di kanan label fee dan nominal28px mendapat baris penuh agar `Rp 4.500.000` tidak pecah menjadi dua baris. Nilai, warna, font dan state tidak ditafsir ulang.
- Data sensitif tetap `Admin · lihat sesuai izin`, dengan link berindent 120+16px; label grid120px, gap16. Tax select Narrow label di atas dan full-width44. Tidak ada nama Approver, tarif pajak, field wajib atau gate baru.

### Ekspor dan verifikasi Commit 2

**12 PNG output**: sembilan PNG baru pada tabel, **`QB9Kq.png` dan `eGvPW.png` ikut disegarkan karena dua state existing wajib berubah**, serta **`U6TVT.png`**. Dua PNG existing diperlukan agar galeri tidak memuat header/card lama. Tidak mengekspor ulang Desktop, `F1maXE.png`, `xpoXz.png`, atau galeri Desktop.

Galeri Narrow `U6TVT` sekarang memuat 11 state, layout enam kolom lalu lima kolom pada dua baris; ukuran kanvas **2900×2548**, PNG **5800×5096**. Disusun mekanis sRGB RGBA `Copy` dari 11 PNG individual native2× dan cached heading `lftOV` native2× pada koordinat schema; tidak ada resize/upscale. **11 tile + 1 heading**, semuanya pixel-identik terhadap input (`magick compare -metric AE`: **0 (0)**). Ukuran akhir di bawah cap8192 pada kedua sumbu.

Bounds final **0 masalah pada node tampil** untuk seluruh sembilan frame baru dan dua existing Narrow (`QB9Kq`, `eGvPW`). Screenshot live konfirmasi, form Koreksi/Reject, Revision existing, serta tiga varian bukti diperiksa untuk wrapping/overflow/urutan. Assertion file memverifikasi tepat9 screen baru, header exact, sumber/variabel/refs valid, original D2GU5 dan root Desktop/frozen tetap identik, serta data/copy/control-state diwarisi sumber.

Penyimpanan hanya mengganti subtree `U6TVT`, tidak mengambil state live lain. Tidak ada perubahan editor tambahan yang di-stage. Baseline alignment, tabular numerals dan sticky positioning tetap CSS handoff, **tidak diklaim terverifikasi di Pen**. Runtime/API/authorization, keyboard/focus/screen reader, kalkulasi pajak dan persistence audit belum diuji. Tidak merge; PR #17 tidak disentuh.

## Riwayat PG-08 polish iterasi 3 · Commit 1

Branch/PR tetap `design/pg08-hierarchy` / #20, dari HEAD `7a157d99f0d9daa2a03b83fa72cb4d840f289587`. Working tree awal bersih. Ini hanya item **1, 2, 3, 4, 5, 6, 7, 8, 10**; tidak memasukkan pekerjaan paritas Narrow item 9 ke commit ini. Sumber Commit 1 `design/reimburse.pen`, SHA-256 historis `286777a06fb7b9b403130eef9f88e7498e3ed2f85a66a729ef7370c5e39d5e53`. Hash kanvas terbaru berada pada bagian Commit 2 di atas.

### Diterapkan dan bukti node

1. **Dedup konfirmasi.** Dihapus hanya lima layer duplikat: `k9leZs` (subjudul Finance Approved sama dengan judul), `P7c7G` (footer Revision sama dengan `u7S0fr`), `v0vcM` (footer Koreksi sama dengan `TBTpB`), `xxSEH` dan `B72Kb` (subjudul/footer Reject yang mengulang alert). Judul 16/600 dipertahankan. Alert Reject `vZkQT` sekarang memuat seluruh informasi satu kali: `Isi alasan penolakan sebelum menolak. Setelah ditolak, status Rejected dan pengajuan tidak dapat diedit. Reject tidak membuka field. Alasan penolakan akan dicatat.` Konsekuensi tidak hilang saat dedup.
2. **Placeholder vs data di summary saja.** `jXEJs`, `f6C1d`, `mHnaM` = `Belum diisi`, 14px italic `#6B7280` untuk instruksi/alasan Finance. Tax summary `Yls9x`, `snGfq`, `DGGKH`, `bl57X` = `Belum dicontohkan`, plain 14px `#111`; Requester tetap `Belum dicontohkan`. Placeholder select di form tetap `Pilih aturan aktif`. Tidak memakai `#9CA3AF`.
3. **Perubahan fee di atas summary Koreksi.** `DpwNw` / `UvbKe` menampung row fee existing `dqhBg`, `JpG73` yang dipindahkan keluar kotak abu. `kTpaK` = `Fee sebelumnya`, nilai `b4M869` = `Rp 4.500.000`, 13px abu/strikethrough. Garis coret `RmUDw` berada dalam wrapper `Y9Q9Qq`, lebarnya 83px mengikuti lebar teks yang diukur renderer (bukan perkiraan). Ini memastikan coretan ikut tersimpan, karena properti text strikethrough tidak dipertahankan round-trip tool. `BzQ7J` = `Fee setelah koreksi`, `sQeDm` = `Rp 4.400.000`, 24/700. Ikon arah `w4sWk3`; `fnitQ` = `Selisih: turun Rp100.000`, 13px accent. Tidak memakai bentuk negatif. Row Alasan koreksi tetap key-value 14px.
4. **Data sensitif.** Wrapper row/link `Z79Xez`, `dNMVh`, `HO8X6`, `EGfWO`, `xRGe8`; indent link `fm8E4`, `xKRIt`, `TeFDB`, `B9xUU`, `tJoMe`. Jarak atas 8, indent wrapper 140 Desktop / 120 Narrow ditambah inset internal link 16 agar label link tepat sejajar awal kolom nilai (label width + gap 16). `AmXSS`, `i9qZ1`, `qlAG8`, `d7bGOE`, `xjs7l` tetap link-style 13px. Row Akses dan izin Admin tidak berubah.
5. **Chip di semua 14 state existing PG-08.** Ditambahkan chip 24px/radius999 pada konfirmasi Revision/Koreksi/Reject (`XrQ6Y`, `PnH9d`, `y8Mkon`), form Revision/Koreksi/Reject (`J6PLH`, `FhMkZ`, `UozSh`), unavailable Approver (`vaop0`) dan Narrow Revision existing (`uz6Iq`); chip review dan Finance Approved existing dipertahankan. Semua konfirmasi masih Pending sebelum aksi, bukan status transisi yang sudah terjadi. Dua belas header Desktop `lin72`, `AqhBn`, `EPUxs`, `qmSrf`, `zfTrP`, `H4iS7`, `jQ7VN`, `W5bhW`, `BMKwh`, `aVG8t`, `eImma`, `j5JrJ` kini hanya `PAY-000018`. Ini menggantikan aturan header vendor-proof pass sebelumnya sesuai item 5 terbaru; status tetap terbaca di chip.
6. **Form Desktop satu pola.** `HDq48`, `LjcEB`, `xpoXz` memakai kiri form dan kanan 320px, title 16/600, alert lalu tombol. Kolom berbagi padding card 24; offset heading internal menyelaraskan alert ke field pertama. Bukti posisi y relatif layar: `Gbn9p` / `k8lKy3` = **203/203**; `UVFMr` / `BfcZJ` = **229/229**; `x8wNO` / `yV2tL` = **203/203**. Reject memakai `m8oWt9` (info), `e6Mt2t` (aksi), `yV2tL` (alert merah), Batal + Tolak pengajuan. Fee lama `Gbn9p/g6qurL` = `Fee sebelum koreksi`; helper `qZW0T` = `Tidak dapat diubah` (12px); wrapper `wgjCe` gap6. Background read-only tetap abu.
7. **Tax treatment.** Row Desktop `yWMSu`, `A79Ff`, `Fok13`, `BPwLu` align center, value wrapper 320px, kontrol select tinggi40. Narrow `uK8D9` vertikal: label di atas, select full-width44. Isi pilihan/aturan tidak diubah, tidak menambah rate/gate.
8. **Dua kasus blocker.** `D2GU5` identik dengan HEAD sebelumnya, tetap `enabled:false`: tidak dirender, sebab tersedia di alert `UubXU`; tidak dijadikan tombol redup. Kasus repairable Finance (`h3Mer`, `s8e4r`, `NGXDk`, `hWwD3`, `Z8EAWK`, `VBqTW`, `KHq1b`, `u1omdq`) diberi opacity0.5 dan nama layer `disabled specimen`; cause ada di alert. Node proof yang sebelumnya tersembunyi kini dirender untuk menggambarkan disabled-visible. **`enabled` di Pen adalah visibilitas layer, bukan kemampuan klik/authorization**: tidak ada callback, aturan bisnis, atau logic aplikasi yang diubah; disabled runtime tetap belum diuji. Alert baru `Zs9JP/YEzvw` dan `XmUUM/kgXdp` meminta instruksi/alasan, bukan gate baru.
10. **Spacing Narrow utama dipertahankan dan diuji.** `bfBxj.gap=24` (Dokumen ke area aksi), `p8Wgyf.gap=12` (Koreksi ke Minta Revision), `qFm2l.gap=8` (helper), `Dm2AX.gap=24` (helper ke Tolak). Akibat tax bertumpuk/link berindent, ukuran eGvPW menjadi **390×1076**, viewport konten390×980; semua aksi tetap tampak. Header casing Narrow dan restyle Minta Revision ditunda ke item9/commit2.

### Export / checks Commit 1

**14 frame berubah + 2 galeri**, diekspor sebelum commit: `L4uNC.png`, `eGvPW.png`, `c0W2bn.png`, `iPcOE.png`, `WAO0I.png`, `OkzZU.png`, `HDq48.png`, `LjcEB.png`, `xpoXz.png`, `HP1TH.png`, `Y9z8O.png`, `Z31zwX.png`, `F1maXE.png`, `QB9Kq.png`, `zVZZY.png`, `U6TVT.png`. `QB9Kq` hanya menerima chip pada commit ini, bukan pekerjaan item9. Semua tile galeri kini punya perubahan nyata (chip/header/style), bukan ekspor ulang state yang tak berubah.

Individual native2×: Desktop2880×1920, eGvPW780×2152, QB9Kq780×1688. Galeri mekanis sRGB RGBA `Copy`: Desktop12320×6480, Narrow5800×2432; posisi sesuai schema, tanpa resize/upscale. Semua 14 tile + 2 heading crop **AE=0** terhadap input PNG terbaru. Cap8192 pada exporter Desktop tetap dihindari dengan komposisi; heading memakai cache native2×.

Verifikasi: seluruh 14 frame **0 bounds problems pada node tampil**, screenshot representatif dibaca untuk tampilan (bukan untuk menyimpulkan copy/state). Pemeriksaan file memastikan hanya dua root PG-08 berubah, reusable sources/variabel/global dan PG-02/04/06 identik; refs valid; D2GU5 identik; penghapusan hanya lima duplikat di atas. Tidak ada perubahan editor tambahan yang ikut disimpan/di-stage. PNG dan .pen masuk commit yang sama.

**Batas schema:** sticky positioning, baseline alignment, dan `font-variant-numeric: tabular-nums` tidak tersedia sebagai perilaku Pen. Kolom kanan dan posisi alert diterapkan secara statis; tidak diklaim sticky saat scroll atau numeralnya tabular. Catatan CSS implementasi (bukan app code):

```css
.pg08-review .form-decisions { position: sticky; top: 24px; align-self: start; }
.pg08-review { font-variant-numeric: tabular-nums; }
.pg08-review .key-value-row { align-items: baseline; }
```

Runtime/API/authorization, disabled/read-only behavior, tax calculation, keyboard/focus/screen reader belum diuji. Tidak merge, tidak menyentuh PR #17, tidak membuat branch/PR baru.

**Klarifikasi terselesaikan:** owner mengonfirmasi sembilan frame; paritas Narrow item9 diselesaikan pada Commit 2 di atas, terpisah dari Commit 1 ini.

## Riwayat PG-08 hierarchy · branch design/pg08-hierarchy

Baseline: `03d3acb458850a41d678c5b4711ed50d15d38c5e`. **Baseline ini tidak memuat PR #19. Empat perbaikan wajib diimplementasikan ulang dalam pass ini, bukan diwarisi dari #19.** Sumber pass hierarchy awal `design/reimburse.pen`, SHA-256 historis `ad827c7e0da4ed951ac04f3b5ecd9f53bd5b7f3b3625c3603dd13470a5322ac7`. Hash kanvas terbaru berada pada bagian iterasi 3 di atas.

### Diterapkan

- Ringkasan review: `Fee pemeriksaan` 13px abu, `Rp 4.500.000` 28/700 dengan line-height 34, badge di kanan. Divider 1px `#EEE`, 20px setelah baris nominal. Pending memakai abu; Pending vendor proof kuning. Chip 24px, padding 0/10, radius 999, teks 12/500. Kondisi bukti invalid tidak dijadikan status PRD baru.
- Grid rincian: judul 16/600, jarak 12; label 140px Desktop / 120px Narrow, gap 16, row gap 12. Label 13px `#6B7280`, nilai 14/500 `#111`. Approver row terakhir, tanpa divider tersendiri. `c0W2bn` menampilkan sub-baris `Approver belum tersedia`. Tidak mengarang nama Approver; detail lain memakai penunjuk generik yang sudah ada, `Approver yang ditetapkan`.
- **Penerima tidak disamakan dengan Requester.** Nama Maya Pratama dari konteks Freelance ditampilkan dalam row Penerima; row Requester transparan `Belum dicontohkan`, sebab tidak ada nama pembuat pengajuan pada sumber. Row tambahan ini hanya memisahkan fakta yang sudah ada, bukan field wajib/template baru.
- Section `Data identitas & rekening`: row Akses = `Admin · lihat sesuai izin`; tautan `Lihat KTP / rekening` 13px terpisah dari keputusan. Tidak ada perluasan akses peran.
- Section Dokumen: jarak judul-card 12, file card padding 12/16, nama 13/600, status 12. Nama file dan kondisi validasinya dipertahankan.
- Area aksi: kolom kanan 320px Desktop, full-width dan bertumpuk di Narrow; tombol 44px, gap dalam grup 12, antar grup 24. Grup sekunder/outline destruktif/utama terpisah. Helper sekunder disatukan dalam satu paragraf 12/18, jarak 8. `Reject` dan label status sebagai CTA diganti hanya sesuai arahan menjadi aksi eksplisit `Tolak pengajuan` / `Teruskan ke Approver`.
- Alert tepat sebelum area tombol, gap 12, border 1, radius 8, padding 12/16, ikon 16, teks 13/18. Warning memakai `#FEF9E7` sesuai brief; error `#FDECEA`, sukses `#E9F5EE`, dan warna semantic primary/danger/warning/success memakai token existing. Tidak menambah atau mengubah variabel global.
- Empat konfirmasi: judul 16/600 dan deskripsi 13 abu dengan gap 8; ringkasan kotak abu padding 16 berisi key-value rows, bukan blok teks `\n`. Data Fee lama/baru, kelompok `Fee dan dokumen`, dan placeholder instruksi/alasan berasal dari form yang sudah ada. Placeholder tetap placeholder, bukan instruksi publik/alasan yang dikarang. Peringatan Reject dan gate Approver memakai alert; penjelasan status/audit memakai helper 12/18, gap 12. Tombol berada di kolom keputusan, gap 12 dan offset grup 24.
- Form Desktop `HDq48` / `LjcEB`: tinggi mengikuti konten; label-input 6, antar field 16, helper kalkulasi 6 dari input baru, grup keputusan offset 24. Fee lama abu dengan label persis `Fee sebelum koreksi (tidak diubah)`, Fee baru aktif; kedua fee berdampingan. Audit/privacy copy dan field wajib yang sudah ada dipertahankan. Tidak ditambahkan form/state Narrow di luar daftar scope; Narrow yang tersedia dan diubah adalah detail `eGvPW`.
- Padding card 24 Desktop / 20 Narrow; section rhythm 32 / 24. Workspace Desktop tetap penuh, card tidak lagi stretch. Narrow detail menjadi **390×1054**, viewport konten **390×958**, sehingga seluruh konten/aksi tampak pada canvas; tidak ada crop aksi bawah. Galeri Narrow disesuaikan menjadi 2900×1200. Pengecualian 6px/20px berasal dari brief, bukan skala baru.
- Nominal hanya dinormalisasi menjadi `Rp 4.500.000` / `Rp 4.400.000`. Tidak mengubah nominal, rate pajak, status, field wajib atau gate lain. Tidak mengubah template atau mengklaim read-only/disabled runtime dari gambar.

### Empat perbaikan yang diimplementasikan ulang

| Perbaikan | Node / bukti akhir |
| --- | --- |
| Approver unavailable: penerusan tidak dirender | `c0W2bn/D2GU5.enabled:false`; nama `Teruskan ke Approver · disabled specimen · Approver belum tersedia`. Bukan tombol redup. Alert `YONv9/UubXU`: `Penerusan tidak tersedia karena Approver belum ditetapkan. Hubungi Admin pengaturan.` Tidak membuat nama Approver. |
| Label konfirmasi aksi eksplisit | `iPcOE/h3Mer/U7Cbs` = `Minta Revision`; `WAO0I/s8e4r/U7Cbs` = `Simpan koreksi`; `OkzZU/NGXDk/U7Cbs` = `Tolak pengajuan`. State enabled mengikuti baseline (true), bukan state incomplete/opacity dari buffer PR #19. |
| Identitas Narrow lengkap | `eGvPW/LjzQt` = `PAY-000018`; `eGvPW/S39Jby` = `Maya Pratama` pada row Penerima. Fee dan Tipe ditampilkan terpisah, tidak dihapus. |
| Header vendor proof selaras badge | `aVG8t/kpCLO`, `eImma/kpCLO`, `j5JrJ/kpCLO` = `PAY-000018 · Pending vendor proof`, sama dengan badge existing `taZBi`, `CFjdt`, `T1SHA`. Enabled-state validasi/penerusan vendor proof dari baseline dipertahankan. |

### Node dan frame yang berubah

**398 node baru**, **127 existing node berubah properties**, **0 existing node dihapus**, tanpa reusable source baru. Child order/parent diubah hanya dalam 11 frame scope. Kelompok baru berupa layout, grid, label/nilai, divider dan alert. Reusable sources, semua variabel, PG-02/04/06, semua root lain, serta state PG-08 `xpoXz`, `F1maXE`, `QB9Kq` identik baseline. Shell/header/sidebar existing tetap di-instance, tidak diubah sumbernya.

| Frame | Container existing utama | Kelompok baru / node penting |
| --- | --- | --- |
| L4uNC | f6A4DU, VXaz8 | g8vApN (info), VUZg9 (aksi), p8f2Oj (grid) |
| eGvPW | bfBxj, Dm2AX, wbgdR | h4BB9 (info), nqTY3 (aksi), u2CKhG (grid), S6cZX (helper) |
| HP1TH | AiGBH, gRdVH | I8t36R, H1aWD, KrLiz (warning) |
| Y9z8O | MD2sP, d5zen | n1fNcX, d3xQCY, zSyso (error) |
| Z31zwX | TwrCG, w8ggF | Swqwg, j50pH, YBnXc (success) |
| c0W2bn | gvPjM, P1CE3, D2GU5 | xtLo4 (summary), UsxHo (fee), YONv9 (gate alert) |
| iPcOE | sYA1i, qAYAA, h3Mer | XUjfh (summary), z1s4M (aksi) |
| WAO0I | yKjPw, h4nAYL, s8e4r | hZWwM (summary), zGQpr (aksi) |
| OkzZU | jylI9, f449QP, NGXDk | WZfiP (summary), vNwc2 (alert) |
| HDq48 | zLcNC, HRcuk | sFUWP (info), ToX0o (fee pair), k8lKy3 (audit alert) |
| LjcEB | f9eCpT, B93TL | OPv0m (info), aChJk (fields), BfcZJ (privacy alert) |

### Ekspor dan verifikasi

**13 PNG output**, hanya 11 frame berubah dan dua galeri yang memuatnya: `L4uNC.png`, `eGvPW.png`, `c0W2bn.png`, `iPcOE.png`, `WAO0I.png`, `OkzZU.png`, `HDq48.png`, `LjcEB.png`, `HP1TH.png`, `Y9z8O.png`, `Z31zwX.png`, `zVZZY.png`, `U6TVT.png`. Individual Desktop native 2× = 2880×1920; Narrow = 780×2108. PNG di luar daftar tidak ditimpa.

Galeri dikomposisi mekanis native 2×: Desktop **12320×6480**, Narrow **5800×2400**; tile pada koordinat `(2x,2y)` dari schema. Ini menghindari cap exporter 8192px yang sudah teramati pada pass PG-08 sebelumnya (ekspor langsung 12320×6480 menjadi 8192×4309). Input memakai 11 PNG individual terbaru; tiga tile unchanged (`xpoXz`, `F1maXE`, `QB9Kq`) dan dua heading dirender ke cache temporer 2× saja, bukan mengubah output individual di repo. Heading `PgoGm` dan `lftOV` tetap sama. Komposisi sRGB RGBA `Copy`, tidak ada resize/upscale; **14 tile + 2 heading** dibandingkan crop-nya dengan input memakai `magick compare -metric AE`, semuanya **0 (0)**.

Pemeriksaan akhir:
- `Get` bounds pada semua 11 frame: **0 masalah pada node enabled** setelah reflow geometri final. Screenshot live Desktop detail, vendor invalid, dua form, empat konfirmasi dan Narrow diperiksa untuk hierarchy, wrapping, alignment, keterbacaan dan overflow.
- Scope diff struktural: old IDs dipertahankan; tidak ada missing refs, sumber reusable/variabel/global atau root frozen berubah. Empat perbaikan wajib diuji dengan assertion terhadap file tersimpan. Detector layout pada `.pen` mengembalikan `[]`; ini bukan pengganti pemeriksaan visual/schema.
- Buffer live awal memuat state lama yang tidak ada di file baseline. File disinkronkan dari **hanya 11 subtree hasil execute** dan tinggi galeri Narrow, bukan dengan menyalin seluruh buffer. State di luar scope tidak ikut disimpan/di-commit. Tidak ada perubahan editor tambahan di-stage.
- Tidak diverifikasi: authorization/API, persistensi audit, kalkulasi pajak runtime, interaksi/focus/keyboard/screen reader atau konfigurasi Approver nyata. Disabled/read-only adalah specimen visual; data contoh bukan transaksi nyata. Tidak menyentuh PR #17 atau merge.

### CSS handoff: belum bisa dirender oleh schema Pen

Baseline alignment dan `tabular-nums` **tidak didukung schema Pen dan tidak diklaim terverifikasi**. Canvas memakai alignment `start` pada key-value rows, `center` pada amount/badge. Catatan berikut hanya handoff implementasi, tidak mengubah `docs/design/tokens.css` atau app:

```css
.pg08-review { font-variant-numeric: tabular-nums; }
.pg08-review .key-value-row {
  display: grid;
  grid-template-columns: 140px minmax(0, 1fr);
  column-gap: 16px;
  align-items: baseline;
}
.pg08-review[data-layout="narrow"] .key-value-row {
  grid-template-columns: 120px minmax(0, 1fr);
}
.pg08-review .key-value-grid { row-gap: 12px; }
.pg08-review .hero-amount { font-size: 28px; line-height: 34px; font-weight: 700; }
```

## Riwayat PG-06 (tidak diubah pada pass ini)

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

PG-08 remains a draft candidate; its scoped hierarchy frames and galleries were refreshed in the pass documented above. PG-10 is unchanged and was not re-exported.

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
