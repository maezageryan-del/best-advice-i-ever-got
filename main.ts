// The Best Advice I Ever Got
// make.fun bounty: u-pangg7-the-best-advice-i-ever-got-358cefb0
//
// Writes one sentence about the best advice ever received to
// /output/entry.txt. The sentence is at most 200 characters. No input
// is read; the output is deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The advice. 129 characters, one sentence, no trailing newline in
// the entry itself (the file ends after the final full stop). A coach,
// after a final lost after a year of training, reframes the year
// itself: "You didn't lose the year — you just found out what it was
// for." The loss is not erased; it is given a purpose, and the purpose
// is the whole sentence.
const REPLY =
  "My coach, after I lost the final I had trained a year for, said, 'You didn't lose the year — you just found out what it was for.'";

function main(): void {
  // Guard the gate before writing: an entry must be one sentence of
  // 1-200 characters, not whitespace-only. Fail loudly instead of
  // shipping an invalid entry.
  if (
    REPLY.length < 1 ||
    REPLY.length > 200 ||
    REPLY.includes("\n") ||
    REPLY.trim().length === 0
  ) {
    throw new Error(
      `invalid entry: ${REPLY.length} chars, must be one sentence of 1-200 chars`,
    );
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, REPLY, "utf8");
}

main();
