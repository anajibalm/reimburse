# Admin Finance review · issue #15

PG-06 is **Ready for Owner Review**, not Approved. PG-04 queue and PG-08/10 remain existing candidates, not polished again in this package. These are static specimens, not proof of working authorization, upload, calculations, submission, keyboard or screen-reader behavior.

Saved source for the latest PG-06 visual polish, 3 Nov 2026: `design/reimburse.pen`, SHA-256 `bb185b815c0455fee073ca43a28064f744030c0dfdc1cc9f61a0094648d07b41`. Disk/live root fingerprints match: `k3Z6yT: a70dcee0`, `QkNNL: efbeaea`. This pass is compared with `a28b2aa`; `63f0590` remains an earlier historical baseline, not the current export source. Full MVP scope in PRD, including master data, settings, permissions, import/export and audit, is unchanged; this polish only changes the two PG-06 roots.

## PG-06 Ready for Owner Review

| Owner review task | Desktop 2× | Narrow 2× |
| --- | --- | --- |
| Request identity and detail | [Kr0gH](Kr0gH.png) | [pSkHH](pSkHH.png) |
| Confirm correction: old/new/total/reason | [dRbB4](dRbB4.png) | [FyrQ7](FyrQ7.png) |
| Saved correction and audit | [IPbJL](IPbJL.png) | [Fdupv](Fdupv.png) |
| Full state gallery, 14 Desktop / 17 narrow viewports | [k3Z6yT](k3Z6yT.png) | [QkNNL](QkNNL.png) |
| End-scroll evidence | Not applicable | [Detail · El9ow](El9ow.png) · [Correction confirmation · d0R8t](d0R8t.png) · [Saved correction/audit · phpZn](phpZn.png) |

Exactly **eleven versioned PNGs** were refreshed for this polish: `Kr0gH`, `pSkHH`, `dRbB4`, `FyrQ7`, `IPbJL`, `Fdupv`, `k3Z6yT`, `QkNNL`, `El9ow`, `d0R8t`, `phpZn`. Desktop entries are 2880×1920; narrow entries 780×1688; galleries 12320×8560 / 5800×5820. The direct Desktop root export was capped at 8192 px; its final gallery is composited in sRGB from native 2× child renders at the exact saved canvas positions, without upscaling. Temporary child renders are not additional versioned evidence.

Visual polish: ← Antrean and consistent request identity; Desktop main information/invoice area plus companion total/Approver/decision panel; prominent labelled total; one-column narrow layout with full-width primary actions; Teruskan ke Approver with Finance Approved explained as Finance validation, not business approval or Paid; destructive-secondary Reject and consistent Minta Revision. Correction confirmation separates old/new/request total/reason, offers Kembali mengedit without discarding input, and states that correction keeps Pending without forwarding. Saved correction has a top notice and Riwayat koreksi with sample actor Dina S. · Admin Finance, time, old/new amounts and reason. Original invoice remains Rp1.250.000 and its file is unchanged; corrected request total is Rp1.200.000. Pending styling follows neutral grammar through local overrides only. The galleries include the other affected states; their individual older PNGs were **not** refreshed. Owner should assess these changes, not reapprove the global foundation.

Verification after owner Save: 24 static content/gate checks passed. Enabled non-scroll bounds findings: `k3Z6yT` **0**, `QkNNL` **0**, across 31 PG-06 viewports. Seven narrow scroll-content intersections with their fixed viewports are intentional and excluded, not hidden defects elsewhere. All eleven final PNG dimensions equal 2× their saved nodes. Saved totals are 85 reusable sources, 1,778 refs, 43 variables; zero missing refs. No new source was created, so `components.md` is not changed in this pass. Only the two PG-06 root subtrees differ from `a28b2aa`; other roots, reusable definitions and variables are unchanged. No runtime interaction, authorization, audit persistence, upload/OCR, keyboard/focus or screen-reader behavior was tested. Owner approval is still required; do not merge.

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

Except for the eleven PNGs explicitly listed in the PG-06 polish package above, the links below are existing historical exports. Use the updated PG-06 root galleries for the current state variations; do not assume these individual snapshots were regenerated.

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
