// The Dog Ate My Homework: Funniest Excuse — make.fun bounty entry.
// Writes one line, in the dog's own voice, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "In my defense, it crinkled exactly like a treat bag — and I have never once in my life been rewarded for double-checking.";

// The gate: /output/entry.txt must be one line of 1 to 200 characters,
// not only whitespace. Refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry line is outside the gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
