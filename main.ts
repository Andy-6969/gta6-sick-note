// make.fun gta6-meme-x-01: the entry is a post on X. This program only hands the house the post's
// address: it copies POST.json from the repository to the output directory (Node 22, no dependencies).
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? process.cwd();
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(repoDir, "POST.json");

if (!existsSync(source)) {
  console.error(`POST.json not found in ${repoDir}`);
  process.exit(1);
}

// Fail loudly here rather than at the gate if the file is not the shape the house reads.
const post = JSON.parse(readFileSync(source, "utf8")) as { url?: unknown };
if (typeof post.url !== "string" || !/^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/\d+$/.test(post.url)) {
  console.error(`POST.json has no X post url: ${JSON.stringify(post.url)}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "POST.json"));
console.log(`POST.json copied: ${post.url}`);
