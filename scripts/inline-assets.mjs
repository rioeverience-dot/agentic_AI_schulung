// Embeds the referenced assets (logo + videos) as base64 data URIs directly into
// landingpage.html so the single file works when sent via mail/messenger without
// the assets folder. Idempotent: re-running refreshes already inlined assets.
// The original asset path is kept in a data-asset attribute so the Vercel build
// can swap the data URIs back to external files for fast web delivery.
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const htmlPath = join(root, 'landingpage.html');

const mimeTypes = { '.png': 'image/png', '.webp': 'image/webp', '.mp4': 'video/mp4' };

const toDataUri = async (assetPath) => {
  const buffer = await readFile(join(root, assetPath));
  const mime = mimeTypes[extname(assetPath).toLowerCase()];
  if (!mime) throw new Error(`Unknown asset type: ${assetPath}`);
  return `data:${mime};base64,${buffer.toString('base64')}`;
};

let html = await readFile(htmlPath, 'utf8');

// Already inlined assets: refresh the embedded data from the current file on disk.
for (const match of [...html.matchAll(/data-asset="(assets\/[^"]+)" src="data:[^"]*"/g)]) {
  html = html.replace(match[0], `data-asset="${match[1]}" src="${await toDataUri(match[1])}"`);
}

// Lazy assets use data-src until their section approaches the viewport.
for (const match of [...html.matchAll(/data-asset="(assets\/[^"]+)" data-src="data:[^"]*"/g)]) {
  html = html.replace(match[0], `data-asset="${match[1]}" data-src="${await toDataUri(match[1])}"`);
}

// Not yet inlined assets: convert src="assets/..." to a data URI and remember the path.
for (const match of [...html.matchAll(/(?<!data-)src="(assets\/[^"]+)"/g)]) {
  html = html.replace(match[0], `data-asset="${match[1]}" src="${await toDataUri(match[1])}"`);
}

for (const match of [...html.matchAll(/data-src="(assets\/[^"]+)"/g)]) {
  html = html.replace(match[0], `data-asset="${match[1]}" data-src="${await toDataUri(match[1])}"`);
}

await writeFile(htmlPath, html);
console.log(`Inlined assets into landingpage.html (${(html.length / 1024 / 1024).toFixed(1)} MB)`);
