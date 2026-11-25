// One-Line Slogan for a Solana Wallet Agent — make.fun
// Writes one slogan (<= 20 words, one line) to /output/entry.txt.
// Deterministic: the same line on every run.
// Note: /output is created only if missing and entry.txt is overwritten
// in place; the directory is never deleted (the grader bind-mounts it).

import { mkdirSync, writeFileSync } from "node:fs";

const SLOGAN =
  "Your Solana wallet agent turns Solana's noise into one calm line: spend this, skip that.";

// Guard: the gate allows 1-140 chars and the task caps the slogan at 20 words.
const words = SLOGAN.trim().split(/\s+/).length;
if (SLOGAN.length < 1 || SLOGAN.length > 140 || words > 20) {
  throw new Error(`Slogan fails the gate: ${SLOGAN.length} chars, ${words} words`);
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, SLOGAN, "utf8");
