# Admin Finance review · issue #15

Static design candidates; not an approved baseline or proof of working authorization, upload, calculations, submission, keyboard or screen-reader behavior. Saved canvas SHA-256 after the PR #16 correction pass: `88a2001c0f612085ba774a2afbc0f83cb1e338cb54da76f124dd800ee05903ff`.

## Main review screens

| Story | Desktop | Narrow viewport | State gallery |
| --- | --- | --- | --- |
| PG-04 Finance queue | [Antrean with current shell](m4tUMY.png) | [Antrean start](jSaaB.png) · [after scroll](bVMzc.png) | [Desktop](h1VqYU.png) · [Narrow](AMw0P.png) |
| PG-06 Reimbursement review | [Detail](Kr0gH.png) | [Detail with correction action](pSkHH.png) | [Desktop](k3Z6yT.png) · [Narrow](QkNNL.png) |
| PG-08 Payment Request review | [Detail](L4uNC.png) | [Detail with correction, tax and documents](eGvPW.png) | [Desktop](zVZZY.png) · [Narrow](U6TVT.png) |
| PG-10 Overtime review | [Detail](r9jGF.png) | [Detail with correction action](WeO1A.png) | [Desktop](V1JYpe.png) · [Narrow](RP4Zo.png) |

## Key states

- Queue [filtered results](Wjjux.png); [private evidence copy required](i8by7.png).
- Revision: [Reimbursement](M18Zn4.png), [Payment Request](LjcEB.png), [Overtime](KXoh7.png). Public instruction and internal note are separate visual fields.
- Finance correction: [Reimbursement](a5jkj.png), [Payment Request](HDq48.png), [Overtime](ziAcH.png). Overtime example: `(2 + 2) × Rp105.000 = Rp420.000`; corrected `(2 + 2) × Rp100.000 = Rp400.000`. Payment tax calculation follows an active rule and no tax rate is invented.
- [Pending vendor proof](HP1TH.png), [invalid](Y9z8O.png), [validated](Z31zwX.png). Invalid proof does not show Finance Approved; the validated specimen still requires all other checks.
- Example [Revision confirmation](QdWeP.png) names the opened fields and exact public instruction. [Finance Approved confirmation](AvxAT.png) repeats the request identity, checked amount and destination Approver. See also [Reject confirmation](NORQW.png) and [Approver missing](PRHXV.png).
- Shared Admin sources: Desktop sidebar `fTzqJ` ([render](fTzqJ.png)), narrow header `yLJBd` ([render](yLJBd.png)), and decision summary `G1vZd` ([render](G1vZd.png)). The Desktop sidebar derives from approved Requester source `TFVJz`; Desktop headers continue to instance `Igbr1`; status labels instance `R5NHOj`. Sample disclosure is kept in frame names and this handoff rather than product UI.

## Restored editable IDs

The prior editor states were absent from the saved file and local editable checkpoints. They were recreated from existing components and checked against the earlier PNGs: `Fwsmh` → `Y9z8O` (invalid proof), `dMvX0` → `Z31zwX` (validated proof), and `Xpc1p` → `bIgtn` (filtered row inside `Wjjux`). The first two new renders and the filtered screen render are byte-identical to their earlier PNGs. Old IDs are historical mapping only, not links or live canvas targets.

## Verification and boundaries

Saved source contains all three restored IDs, the three shared Admin sources, the queue scroll specimen `bVMzc`, and all original baseline IDs, with no missing local refs. Four representative Requester baseline renders (`k0okVa`, `jSSv3`, `TmbX6`, `WHMQ7`) were byte-identical to committed PNGs during this correction pass; this is not exhaustive visual regression. All eight Admin story groups reported zero enabled non-scroll layout problems after save. Narrow views are static 390×844 scroll handoffs; `bVMzc` proves the lower queue rows retain amount and a visible `Buka detail` action. Admin Finance controls are specimens only; Approver, Maker and Releaser authority is not granted by these screens. The review states do not establish API enforcement, access isolation, audit persistence, tax calculations, or real file validation.

Entity, template and bank-confirmation gates remain unresolved in `docs/product/open-questions.md`. The PRD does not specify an age-warning threshold; the age example does not define one. `yMffT` remains unchanged and unclassified.
