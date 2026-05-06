import { execFileSync } from "node:child_process";
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
const distDir = resolve(webDir, "dist");

execFileSync("npm", ["run", "build"], {
  cwd: webDir,
  stdio: "inherit",
});

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });
cpSync(distDir, outputDir, { recursive: true });
writeFileSync(resolve(outputDir, ".nojekyll"), "");

console.log(`Published Pages build to ${outputDir}`);
