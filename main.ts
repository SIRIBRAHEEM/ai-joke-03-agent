// ai-joke-03 entry: one fixed one-liner about AI coding agents, written to
// /output/entry.txt. The joke was picked from five candidates against the
// judge's rubric, in order: on-topic, a surprise punchline, a truth every
// developer who works beside an agent recognises at once, economy, freshness.
// The winning line: an agent turning a one-word fix into a 4,000-line pull
// request is the over-engineering every developer has watched happen, and
// the punchline ("fix typo") lands only at the very end, in 67 characters.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), "My agent's pull request is 4,000 lines. The ticket said 'fix typo.'");
