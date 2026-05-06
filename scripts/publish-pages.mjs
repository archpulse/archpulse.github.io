import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const webDir = resolve(scriptDir, "..");
const repoRoot = resolve(webDir, "..");
const gitDir = resolve(repoRoot, ".git");

if (!existsSync(gitDir)) {
  throw new Error(
    "publish:pages expects to run inside the GitHub Pages repository root. " +
      "Clone archpulse.github.io, keep the web/ folder inside it, and run the command there.",
  );
}

const outputDir = resolve(repoRoot, "docs");

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });
cpSync(resolve(webDir, "index.html"), resolve(outputDir, "index.html"));
cpSync(resolve(webDir, "src"), resolve(outputDir, "src"), { recursive: true });
writeFileSync(resolve(outputDir, ".nojekyll"), "");

console.log(`Published raw Pages files to ${outputDir}`);
