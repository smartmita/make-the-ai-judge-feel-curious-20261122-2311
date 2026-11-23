import * as fs from "node:fs";
import * as path from "node:path";

const TEXT =
  "On the cedar pier, an old wooden chair faces away from the water toward a shut boathouse. Wedged under one short leg is a cream envelope with no name on it, opened along the bottom seam, a small brass key still resting inside.";

function main(): void {
  const codePoints = Array.from(TEXT).length;
  if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
    throw new Error(`Invalid entry length: ${codePoints}`);
  }
  const outDir = fs.existsSync("/output")
    ? "/output"
    : process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT, "utf8");
}

main();
