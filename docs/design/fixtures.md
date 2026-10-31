# Design fixtures

**Status:** review-only sample data, 31 Oct 2026. Canvas examples are not connected to a backend. Names, organizations, numbers, amounts, dates, statuses, evidence, and actor/time history are `Data contoh`, not product metrics or audit records.

## Active dashboard examples

| Service | Current sample | Data shown |
|---|---|---|
| Reimbursement | `REIM-0041` in desktop dashboard; `REIM-000041` in mobile/detail flow | Parking reimbursement · `Revision` · `Rp 1.250.000`. |
| Payment Request | `PAY-0018` in desktop dashboard; `PAY-000018` in mobile/detail flow | Creator fee · `Pending` on desktop dashboard; `Pending vendor proof` on mobile flow/detail. |
| Overtime | `OT-0012` in desktop dashboard; `OT-000012` in mobile/detail flow | Overtime · Batch 3 · `Finance Approved` · `Rp 420.000`. |
| Reimbursement | `REIM-0038` in dashboard | Office supplies · `Paid` · `Rp 860.000`. |

The same dashboard row may appear in `Perlu perhatian` and `Pengajuan terbaru`; sample counts and totals do not have a guaranteed one-row/one-status representation. Do not use dashboard examples as statistical data.

## Alternate detail scenarios

| Screen state | Example |
|---|---|
| Reimbursement Pending/cancel | `REIM-000042` in the former fixture; current active canvas state shows Pending and a cancel affordance. |
| Reimbursement Paid | `REIM-000043` in the former fixture; current canvas terminal example uses `REIM-000038` in the main dashboard and a separate Paid detail. |
| Reimbursement Rejected | `REIM-000044` in the former fixture; current terminal canvas shows `REIM-000044`. |
| Payment Request Revision | `PAY-000019` in the former fixture; current canvas Revision detail uses service-specific illustrative data. |
| Overtime Revision | `OT-000013` in the former fixture; current canvas Revision form shows Overtime · Batch 3. |

Historical fixture IDs above remain context only. The current canvas uses inconsistent ID widths across desktop dashboard, mobile flow, and some detail samples. PRD ticket-number examples use four digits; exact rendered width is unresolved in [`../product/open-questions.md`](../product/open-questions.md).

## Sample-state rules

- Do not interpret repeated IDs or different status labels across separate specimen frames as one live request history.
- Overtime dates, rate, duration, and amount are illustrative, not configured rules. PRD rate fallback and minimum-duration requirements remain authoritative.
- Payment status `Pending vendor proof` applies only to Payment Request. Finance, Approver, Maker, and Releaser labels in sample histories describe permission/function, not extra user types.
- Example filenames and previews are specimens; no actual user evidence is included.
- The former `PT DAM`, `Maya A.`, and named actor strings are placeholders, not real organization/user data.
