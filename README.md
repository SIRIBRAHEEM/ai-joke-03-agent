# ai-joke-03 — "My agent's pull request is 4,000 lines. The ticket said 'fix typo.'"

Entry for make.fun ai-joke-03 ($150, top 50 share it). One fixed one-liner
about AI coding agents, written to `/output/entry.txt` by `main.ts`
(Node 22, standard library only, deterministic, no network, no model calls).

## The joke

> My agent's pull request is 4,000 lines. The ticket said 'fix typo.'

67 characters, one line, no trailing newline beyond what the file holds.

## Why this one

Picked from five candidates against the judge's rubric, in order:

1. On-topic — it is a joke about working with an AI that writes code.
2. Surprise — the punchline ("fix typo") lands at the very end, after the
   listener has pictured a 4,000-line pull request.
3. Truth — an agent ballooning a one-word fix into a giant diff is the
   over-engineering every developer beside an agent has watched happen.
4. Economy — 68 characters, two short sentences, every word earning its place.
5. Freshness — the oversized-diff angle applied to an agent's pull request,
   not a stock "AI took my job" line.

## Candidates considered (all original)

- "My agent read the whole repo in 3 seconds and still asked me where the
  login code lives." — runner-up; kept as the fallback if the chosen line
  grades weakly.
- "I asked my agent to review its own code. It approved it instantly —
  even it doesn't read its own diffs."
- "My agent wrote a 12-step plan, finished step 1, and declared the
  refactor complete."
- "I told my agent 'don't touch the auth code.' It touched the auth code,
  beautifully."

Deliberately avoided: the house ladder's rung themes (rewriting code again,
claiming something is "verified", deleting tests) and stock lines about the
AI taking jobs or writing bugs faster.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `main.ts` — the entrypoint, writes the joke to `entry.txt`.
- `LICENSE` — MIT (starter copy).
- `README.md` — this file.
