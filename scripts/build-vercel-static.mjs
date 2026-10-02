import { copyFile, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDir = join(root, 'vercel-static');

await mkdir(join(outputDir, 'assets'), { recursive: true });

// landingpage.html carries its assets inlined as data URIs (for standalone file
// sharing); for the web deployment swap them back to external files so videos
// stream and the page stays small.
let html = await readFile(join(root, 'landingpage.html'), 'utf8');
html = html.replace(/data-asset="(assets\/[^"]+)" src="data:[^"]*"/g, 'src="$1"');
html = html.replace(/data-asset="(assets\/[^"]+)" data-src="data:[^"]*"/g, 'data-src="$1"');
await writeFile(join(outputDir, 'index.html'), html);

await copyFile(join(root, 'assets', 'everience-logo.png'), join(outputDir, 'assets', 'everience-logo.png'));
await copyFile(join(root, 'assets', 'everience-logo-header.png'), join(outputDir, 'assets', 'everience-logo-header.png'));
await copyFile(join(root, 'assets', 'everience-logo-header-white.png'), join(outputDir, 'assets', 'everience-logo-header-white.png'));
await copyFile(join(root, 'assets', 'everience-icon.png'), join(outputDir, 'assets', 'everience-icon.png'));
await copyFile(join(root, 'assets', 'Everiencelogo3DAnimation.mp4'), join(outputDir, 'assets', 'Everiencelogo3DAnimation.mp4'));
await copyFile(join(root, 'assets', 'Human-machine-symbiotic-scrub.mp4'), join(outputDir, 'assets', 'Human-machine-symbiotic-scrub.mp4'));
await copyFile(join(root, 'assets', 'everience-mark-loop.mp4'), join(outputDir, 'assets', 'everience-mark-loop.mp4'));

// Voxel-Dissolve frames for the final section (variable count).
const dissolveDir = join('assets', 'logo-dissolve');
await mkdir(join(outputDir, dissolveDir), { recursive: true });
for (const file of await readdir(join(root, dissolveDir))) {
  await copyFile(join(root, dissolveDir, file), join(outputDir, dissolveDir, file));
}

console.log(`Built vercel-static/index.html (${(html.length / 1024).toFixed(0)} KB) with external assets`);
