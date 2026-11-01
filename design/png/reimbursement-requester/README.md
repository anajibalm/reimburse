# Reimbursement Requester PG-05/06 · review desain light

Issue #9. Data dan identitas pada layar adalah **Data contoh**; nomor/Entity/nominal adalah fixture, bukan data produksi. Canvas merupakan desain statis, bukan aplikasi berjalan.

## Form, draft dan bukti
| State | Desktop | Mobile |
|---|---|---|
| Form / draft tersimpan | [nvoWQ](nvoWQ.png) | [Svvdf](Svvdf.png), [bukti & ringkasan setelah scroll](giIk1.png) |
| Upload error | [e70Mg2](e70Mg2.png) | [mfPXt](mfPXt.png), [bukti setelah scroll](Jvjuv.png) |
| OCR fallback / input manual | [qDiCi](qDiCi.png) | [c9tTm9](c9tTm9.png), [bukti setelah scroll](MxZPW.png) |
| Validasi | [J0Yv9L](J0Yv9L.png) | [ptGJ0](ptGJ0.png) |
| Akses draft dicabut | [njFhn](njFhn.png) | [dbpos](dbpos.png), [akhir setelah scroll](Mfq9K.png) |
| Link bukti / salinan privat | [OxNdc](OxNdc.png) | [r12CVS](r12CVS.png), [bukti setelah scroll](AQcb9.png) |
| Upload berlangsung | [Xq4H7](Xq4H7.png) | [aPHyt](aPHyt.png), [bukti setelah scroll](SqbyR.png) |
| Menyimpan draft | [GTkI6](GTkI6.png) | [Me8Mp](Me8Mp.png) |
| Draft save error | [mvbZo](mvbZo.png) | [oY79N](oY79N.png) |
| Tinjau sebelum submit | [P1dlX](P1dlX.png) | [form dan ringkasan](giIk1.png) |
| Duplicate confirmation | [LEdkT](LEdkT.png) | [dMHYP](dMHYP.png) |
| Submit / Pending preview | [z8YBS](z8YBS.png) | [zlyqq](zlyqq.png) |
| Revision | [WZMW6](WZMW6.png) | [pG0cU](pG0cU.png), [bukti setelah scroll](H5mMn.png) |

## Detail/status
| Status | Desktop | Mobile |
|---|---|---|
| Revision | [GJQ5m](GJQ5m.png) | [YsuVt](YsuVt.png) |
| Pending / cancel eligible | [Q9PiC](Q9PiC.png) | [S6el5](S6el5.png) |
| Pending / Admin mulai memproses | [mvU7k](mvU7k.png) | [UFlVB](UFlVB.png) |
| Cancel confirmation | [Z1A71B](Z1A71B.png) | [DgIJE](DgIJE.png) |
| Finance Approved | [PfHhN](PfHhN.png) | [ICWdT](ICWdT.png) |
| Approved | [U8kXxK](U8kXxK.png) | [Uq7f9](Uq7f9.png) |
| Return to Admin | [ATmA1](ATmA1.png) | [YwzpP](YwzpP.png) |
| Maker Done | [XErY4](XErY4.png) | [ne88Z](ne88Z.png) |
| Paid | [sacCH](sacCH.png) | [TpMkc](TpMkc.png) |
| Rejected | [DDpXL](DDpXL.png) | [xtUwX](xtUwX.png) |
| Cancelled | [s8CMy](s8CMy.png) | [hmrdR](hmrdR.png) |

## Aturan dan batas review
PRD menetapkan satu kategori, minimal satu invoice dan primary proof, additional proof tidak menambah total, JPG/JPEG/PNG 10 MB dan PDF 25 MB, OCR fallback manual, link disalin privat sebelum Finance Approved, serta upload gagal tidak menghapus data lain. Draft bukan workflow, expired 90 hari, dan akses layanan dicabut mengunci submit draft. Revision hanya field yang ditandai dengan instruksi publik; bukti lama tidak dihapus. Pending dapat dibatalkan hanya sebelum Admin mulai memproses; duplicate memiliki pilihan `Kirim tetap` / `Batal`.

Form/date/evidence fields dan tombol menggunakan sumber existing `jSgCJ`, `dDnbj`, `fFmN2`, `WQYrQ`; header/sidebar `Igbr1`/`TFVJz` dan Mobile nav `IenEv` dipertahankan. Detail Mobile `Kc4qh` dan form Mobile `HZlnt` reusable. Scroll Mobile ditunjukkan dengan fixed viewport 390×844 dan spesimen offset; bukan interaksi berjalan.

**Keterbatasan yang masih perlu review:** pemilihan file/link dan multiple invoice ditunjukkan sebagai teks/aksi visual, bukan dialog/file interaction. Submit berhasil ditunjukkan sebagai spesimen Pending statis, bukan transisi terhubung. Draft expiry dan data akhir setelah koreksi Finance mengikuti PRD/open questions dan belum diubah menjadi aturan baru. Tidak ada bukti fungsi API, permission runtime, penyimpanan privat, OCR, keyboard/focus, screen reader, atau scroll interaktif. Resolusi nilai nominal setelah koreksi Finance tetap terbuka di `docs/product/open-questions.md`.

## Pemeriksaan
- Baseline merged main: perbandingan JSON rekursif **0 node existing berubah**, variable sama.
- PNG pembanding PG-04 Desktop `k0okVa`, Dashboard Desktop `j5omxK`, PG-04 Mobile `jSSv3`: byte-identik dengan baseline.
- Canvas inspector: tidak ada clipping pada konten Desktop yang aktif; Mobile form sengaja terpotong di viewport scroll dan memiliki render setelah scroll.
- 55 screen PNG + 2 source PNG diekspor 2×. Draft review ini bukan klaim implementasi atau aksesibilitas produksi.
