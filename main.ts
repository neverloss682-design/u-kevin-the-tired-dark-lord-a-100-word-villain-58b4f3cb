// The Tired Dark Lord — a ~100-word villain monologue.
// Verified: 103 words, 580 characters (586 bytes UTF-8), within the
// 1–600 character limit. Weariness is shown through ritual and
// repetition, never announced; the sting lands in the final line.
// Node stdlib only. Writes the entry to /output/entry.txt by default
// (override with MAKEFUN_OUTPUT_DIR).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = `Third candle from the left.

I lit it before the first siege. Before the boy with the borrowed sword — the forty-seventh hero, if the ledger's honest.

The Binding of Nine Winters holds. The frost never melts off the eastern stair. Everything works. That's the problem, isn't it — everything works, so it all has to be done again tomorrow.

Sit down. Not the throne — the stool. The throne's for the speeches.

Here's the crown. Here's the list of the nine winters, and which villages owe what.

Take it all.

I have rehearsed dying for thirty years. I never once rehearsed this.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
