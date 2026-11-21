// gta6-sick-note: entry program for make.fun's "Post a GTA 6 meme on X" (gta6-meme-x-01).
// The entry is the X post itself. This program only hands the post's address to the grader:
// it reads POST.json from the repository and writes it to the output directory.
// Node 22, standard library only, no network.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_URL = /^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/[A-Za-z0-9_]{1,15}\/status\/\d+$/;

let raw: string;
try {
  raw = readFileSync(join(botDir, 'POST.json'), 'utf8');
} catch (err) {
  console.error(`POST.json not found in ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}

// Warn (do not fail) if the address is not an X post: the gate decides, not this program.
const url = String((JSON.parse(raw) as { url?: unknown }).url ?? '');
if (!POST_URL.test(url)) console.error(`warning: POST.json url does not look like an X post: ${url}`);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'POST.json'), raw);
console.log(`POST.json copied: ${url}`);
