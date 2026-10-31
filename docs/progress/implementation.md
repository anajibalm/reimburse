# Implementation status

**Observed:** 31 Oct 2026. This document separates source code that runs from requirements and visuals in the PRD, Pencil canvas, and static prototypes.

## Code present and exercised

- `prototype/react-dashboard/` is the only runnable app found. It uses React 19 and Vite 8. The verified command was `npm run dev -- --host 127.0.0.1 --port 4177` from that directory; the server rendered the Requester dashboard at `http://127.0.0.1:4177/`.
- `prototype/react-dashboard/src/App.jsx` contains a hard-coded sample dashboard, static sample requests, a two-choice `Semua`/`Aktif` filter toggle that does not filter the rows, and click handlers that display timed toast messages. The page does not implement the request forms or workflow transitions; actions only report that a form or view opened.
- `prototype/index.html` is a single-file static HTML gallery with hash-routed sample screens and UI simulations. It rendered at `http://127.0.0.1:4178/prototype/index.html#requester`. Its mock buttons and JavaScript are not backend integration or production workflow.
- `prototype/feature-map.html` is a static feature-map/review page driven by embedded data, not an implementation of its listed features. Its visible header says `PRD 0.3`; the active PRD header says `0.4`. The stale prototype label remains unchanged because application/prototype code is out of scope.

## Not evidenced in repository code

No `api/` or `web/` application exists at repository root. No production service, database schema or migrations, authentication, tenant authorization, private storage, OCR provider, notification service, queue, payment integration, or workflow backend was found. PRD architecture and business requirements remain product specification, not shipped code.

Design files and exports demonstrate design coverage only. Current Pencil source is `design/reimburse.pen`; related handoffs live in `docs/design/`. Canvas components and screen frames do not prove interactive or production implementation.

## Verified run commands

```sh
cd prototype/react-dashboard
npm run dev -- --host 127.0.0.1 --port 4177
```

The Vite dev server returned the dashboard successfully. The static gallery was served with:

```sh
python3 -m http.server 4178 --bind 127.0.0.1
```

from repository root, then opened at `/prototype/index.html#requester`. Both browser checks returned no recorded page errors. These are local preview checks, not build, release, API, or end-to-end workflow verification.
