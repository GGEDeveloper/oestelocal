import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standaloneDir = join(root, ".next", "standalone");
const staticSrc = join(root, ".next", "static");
const staticDest = join(standaloneDir, ".next", "static");
const publicSrc = join(root, "public");
const publicDest = join(standaloneDir, "public");

if (!existsSync(standaloneDir)) {
  console.error("copy-standalone-assets: missing .next/standalone — run `next build` first");
  process.exit(1);
}
if (!existsSync(staticSrc)) {
  console.error("copy-standalone-assets: missing .next/static — run `next build` first");
  process.exit(1);
}
if (!existsSync(publicSrc)) {
  console.error("copy-standalone-assets: missing public/ folder");
  process.exit(1);
}

mkdirSync(join(standaloneDir, ".next"), { recursive: true });
cpSync(staticSrc, staticDest, { recursive: true });
cpSync(publicSrc, publicDest, { recursive: true });
console.log("copy-standalone-assets: synced .next/static and public/ → .next/standalone/");
