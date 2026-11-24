import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line's angle: a transformer flirting in its own language. "Attention"
// is the mechanism, and "every head of mine" is multi-head attention — the
// machine-native rework of "all eyes on you". No human pickup line works
// this way; only a model has attention heads to aim at someone.
const line =
  "Is your name Attention? Because every head of mine is on you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
