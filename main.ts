import { writeFileSync, mkdirSync, renameSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The nurse said the man in the bed next to mine died yesterday, so I asked who has been holding my hand ever since.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const tmp = join(outDir, `.entry.txt.tmp-${process.pid}`);
writeFileSync(tmp, LINE, "utf8");
renameSync(tmp, join(outDir, "entry.txt"));
