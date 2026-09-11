# Engineering Constitution

Mandatory protocol: **root cause -> regression proof -> minimal implementation -> independent review -> integrated verification -> merge/deployment -> production verification**.

For every non-trivial change: establish root cause with evidence; create a failing regression test when practical; make the smallest correct change; independently review diagnosis, boundaries and risks; run fresh repo-appropriate types/tests/build/lint/migrations/API/runtime/browser checks; and verify the intended production commit and behavior when applicable.

Maintain a ledger: **Observed, Root cause, Regression proof, Changed, Review, Integrated verification, Production verification, Remaining risk**. Keep observed/inferred/changed/verified distinct.

Once authorized, continue through obvious dependent steps without routine permission stops. Stop only for genuine product decisions, unavailable authorization, destructive/material risk, external blockers, or unsafe/materially incorrect direction. Parallelize only genuinely independent work; dependency order outranks speed.

Inspect this repo's architecture, tests, deployment platform, data model, and product boundaries before implementation. This governs method, not product architecture, and adds no external agent-framework runtime dependency.

Done means every applicable gate has fresh evidence. Anything earlier is progress.
