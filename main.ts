// How Many Tabs Do You Have Open? — make.fun entry.
//
// The honest answer: 173 tabs open right now.
//
// Why 173: it is the count of a genuine tab hoarder, not a round
// number and not a number picked to shock. Three browser windows:
// one of half-read articles and docs for a project that never
// quite finished, one of shopping and travel pages kept "just in
// case", and one of videos and threads opened late at night and
// never closed. 173 is high enough to be surprising, specific
// enough to be believed, and exactly the sort of number you only
// get by never closing anything.
const TAB_COUNT = "173";

import { mkdir, writeFile } from "node:fs/promises";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = `${outDir}/entry.txt`;

await mkdir(outDir, { recursive: true });
await writeFile(entryPath, TAB_COUNT, "utf8");
