import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDir = join(root, 'vercel-static');

await mkdir(join(outputDir, 'assets'), { recursive: true });
await copyFile(join(root, 'landingpage.html'), join(outputDir, 'index.html'));
await copyFile(join(root, 'assets', 'everience-logo.png'), join(outputDir, 'assets', 'everience-logo.png'));

