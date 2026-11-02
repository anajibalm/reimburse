# Admin Finance review · issue #15

Static design candidates; not an approved baseline or proof of working authorization, upload, calculations, submission, keyboard or screen-reader behavior. Saved canvas SHA-256: `376fe9a5e001a67b40f23a3c5f94e4191096aae2722f4dfa7935560a64766c7b`.

## Main review screens

| Story | Desktop | Narrow viewport | State gallery |
| --- | --- | --- | --- |
| PG-04 Finance queue | [Antrean](m4tUMY.png) | [Antrean](jSaaB.png) | [Desktop](h1VqYU.png) · [Narrow](AMw0P.png) |
| PG-06 Reimbursement review | [Detail](Kr0gH.png) | [Detail](pSkHH.png) | [Desktop](k3Z6yT.png) · [Narrow](QkNNL.png) |
| PG-08 Payment Request review | [Detail](L4uNC.png) | [Detail](eGvPW.png) | [Desktop](zVZZY.png) · [Narrow](U6TVT.png) |
| PG-10 Overtime review | [Detail](r9jGF.png) | [Detail](WeO1A.png) | [Desktop](V1JYpe.png) · [Narrow](RP4Zo.png) |

## Key states

- Queue [filtered results](Wjjux.png); [private evidence copy required](i8by7.png).
- Revision: [Reimbursement](M18Zn4.png), [Payment Request](LjcEB.png), [Overtime](KXoh7.png). Public instruction and internal note are separate visual fields.
- Finance correction: [Reimbursement](a5jkj.png), [Payment Request](HDq48.png), [Overtime](ziAcH.png). Overtime example: `(2 + 2) × Rp105.000 = Rp420.000`; corrected `(2 + 2) × Rp100.000 = Rp400.000`. Payment tax calculation follows an active rule and no tax rate is invented.
- [Pending vendor proof](HP1TH.png), [invalid](Y9z8O.png), [validated](Z31zwX.png). Invalid proof does not show Finance Approved; the validated specimen still requires all other checks.
- Example [Revision confirmation](QdWeP.png), [Reject confirmation](NORQW.png), [Finance Approved confirmation](AvxAT.png), [Approver missing](PRHXV.png).

## Restored editable IDs

The prior editor states were absent from the saved file and local editable checkpoints. They were recreated from existing components and checked against the earlier PNGs: `Fwsmh` → `Y9z8O` (invalid proof), `dMvX0` → `Z31zwX` (validated proof), and `Xpc1p` → `bIgtn` (filtered row inside `Wjjux`). The first two new renders and the filtered screen render are byte-identical to their earlier PNGs. Old IDs are historical mapping only, not links or live canvas targets.

## Verification and boundaries

Saved source contains all three restored IDs and all original baseline IDs, with no changed original non-child node properties, unchanged variables and no missing local refs. Eight sampled Requester baseline renders were byte-identical to committed PNGs; this is not exhaustive visual regression. Eight story groups had no reported non-scroll clipping when inspected; narrow views are static 390×844 scroll handoffs. Admin Finance controls are specimens only; Approver, Maker and Releaser authority is not granted by these screens. The review states do not establish API enforcement, access isolation, audit persistence, tax calculations, or real file validation.

Entity, template and bank-confirmation gates remain unresolved in `docs/product/open-questions.md`. The PRD does not specify an age-warning threshold; the age example does not define one. `yMffT` remains unchanged and unclassified.
