# GENEXXO Mobile — Handover

**Current state only. Rewrite this file in place; never append to it.**
The history lives in `git log`, which is attached to the actual diffs and cannot drift.
The reasoning lives in the vault. This page answers one question: *what is true right now?*

Last rewritten: **2026-08-26** · build **`2026.08.26-2`**

---

## What this is

`genexxo-mobile.html` — a single-file vanilla-JS PWA prototype at `~/Desktop/ecosystem`.
Global `state`, `render()` dispatching on `state.screen`, template-literal HTML, inline `onclick`s.
Served from GitHub Pages, installable, in real hands. It is **the** product surface.

**Taxonomy in this build:** 68 tiles · 12 neighbourhoods · 467 shelves · 6,754 gateway
placements (6,184 unique) · 531 declared dual-use homes · 6,239 search-tag entries.

## The one file you edit

`~/Desktop/ecosystem/genexxo-mobile.html` — the deployed file, edited directly.

> `Architecture/genexxo-mobile-nav-shell.html` was the twin under an old byte-identical rule.
> **Retired 2026-08-26.** It had drifted 385 lines and two builds behind, and nothing loaded it —
> a twin nobody maintains is worse than no twin. In git if ever needed:
> `git show a131ecb:Architecture/genexxo-mobile-nav-shell.html`. There is now exactly one file.

## Rebuilding the taxonomy

The taxonomy is **generated from CSVs, not hand-edited**. Sources and generators are in `Archive/`.
Editing `SECTOR_GATEWAYS`, `GW_TAGS` or `GW_HOME` by hand means the next regeneration erases you.

```bash
cd ~/Desktop/ecosystem
python3 Archive/sectors-lists/apply-handoff.py   # 1st — SECTOR_GROUPS + SECTORS
python3 Archive/apply-tiles.py                   # 2nd — gateways, tags, dual-use homes
```

Both are idempotent. Run them **in that order, both, every time**.

**There are two scripts and there will only ever be two.** Sam's deliveries arrive as complete
71-tile reissues, so each supersedes the last outright. When a new bundle lands: drop it in
`Archive/`, point the `TILES` line in `apply-tiles.py` at it, run both scripts. **Do not add a
third script per delivery** — that was heading for a chain of "run all of them in this exact
order or the data silently reverts". Superseded bundles stay in `Archive/` for provenance;
they are history, not steps.

## Dangerous things

- **Never run `apply-handoff.py` alone.** It carries the original 2026-08-25 taxonomy, so on its own
  it reverts every change since. It survives only because it still owns `SECTOR_GROUPS` and
  `SECTORS`, which no reissue carries. Always follow it with `apply-tiles.py`.
- **Never force-push `github-live`.** The GitHub repo has an **unrelated history** (231 web-upload
  commits, no common ancestor with this repo). A normal push is rejected; a forced one destroys the
  live site. The remote is deliberately *not* named `origin`.
- **Never edit `~/Desktop/genexxo-funding/GENEXXO-deck.html`** — live legal document.
- **Don't call `render()` for a change inside a gateway** — use `repaintGateway()`. `render()` tears
  down every `<video>` and jumps to the top.

## Deploying

1. Bump `BUILD` in `genexxo-mobile.html` **and** `build` in `version.json` — **together, same commit**.
   Tier A compares the two; ship one without the other and updates silently stop reaching installed
   apps. That failed unnoticed for two weeks once.
2. Commit.
3. Upload `genexxo-mobile.html` + `version.json` to GitHub (web UI — the histories are unrelated).
4. Verify the deploy matches local:

```bash
git fetch github-live
for f in genexxo-mobile.html version.json; do
  [ "$(git show github-live/main:$f | shasum)" = "$(shasum < $f)" ] && echo "MATCH $f" || echo "DIFFERS $f"
done
```

## Before declaring anything done

```bash
python3 -c "import re;s=open('genexxo-mobile.html').read();open('/tmp/chk.js','w').write(re.search(r'<script[^>]*>(.*?)</script>',s,re.S).group(1))"
node --check /tmp/chk.js
```

And **test on a real phone**. Desktop emulation does not reproduce the Android soft-keyboard focus
failure, and touch gestures cannot be verified any other way.

## In flight / open

- **Source material is single-machine.** The bundles and generators are in local git only; GitHub has
  the output, not the means to regenerate it. A separate `ecosystem-source` repo would close this.
- **47 of 62 vault pages are dated 2026-06-25** and have not been revisited since. Every page now
  carries a `snapshot:` date so this is visible rather than assumed — but the strategy pages
  (`acquisition-strategy`, `commerce-model`, `agentic-layer`, `app-store`…) predate everything
  built since June and should be read with that in mind, or refreshed.
- **Plural tile names** (Pets/Books/Drinks) reverse a deliberate 2026-08-20 change. The handoff
  bundle is authoritative so plural stands, but confirm the reversal was intended.

## Keeping the record (the convention)

Three surfaces, one job each. The whole point is that none of them repeats another, so none of
them can contradict another.

| Surface | Records | Written |
|---|---|---|
| `git log` | **what changed, and why** — tied to the diff | one commit per coherent change, message written *before* committing |
| Vault (`wiki/`) | **the reasoning that outlives the build** — a dated block on the relevant page | when a change teaches something, not for every change |
| `HANDOVER.md` | **what is true right now** | rewritten in place at the end of a working session |

**At the end of a session, do these three things:**
1. Bump `BUILD` + `version.json` together and commit, with a message that says *why*, not just what.
   A future reader has the diff already; what they cannot recover is the reasoning.
2. Add a dated block to the vault page the work belongs to (navigation → `navigation-model.md`,
   taxonomy → `sector-gateway-buildout.md`, build/deploy → `mobile-prototype-delivery.md`).
   Record the trade-offs and the things that were *rejected* — those are the parts that get
   re-litigated otherwise.
3. Update this file if anything above changed about the current state.

> ⚠️ **The detailed history exists only in this local repo.** GitHub has the deployed files under
> "Add files via upload" commits with no messages, and an unrelated history — it is a deploy
> target, not a record. If this machine is lost, so is every commit message and every generator.
> The vault is likewise unversioned. Both are worth a real backup.

## Where the deeper record lives

- **`git log`** — what changed and why. The only change log; do not duplicate it in prose.
- **Vault** `~/Desktop/GENEXXO Vision/wiki/` — durable strategy and architecture. Start at
  `sector-gateway-buildout.md` (taxonomy), `mobile-prototype-delivery.md` (build/deploy),
  `navigation-model.md` (wayfinding), `project-status.md` (read before quoting any figure).
- **`Archive/docs/`** — superseded working notes, kept for reference, **not current**:
  the pre-2026-08-26 handover, the decisions inventory, the original brief, and the retired
  taxonomy sandbox's build log.
