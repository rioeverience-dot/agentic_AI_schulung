// Prepares the hover "voxel dissolve" frames for the final section.
// Source: the rendered Everience logo animation frames (clean mark -> pixel scatter).
// For each selected frame we crop to the centered logo region, downscale, and
// chroma-key the navy background to transparent so the canvas player can draw
// the frames straight onto the section's matching navy gradient.
//
// Run when the source frames change:
//   npm run prepare:logo-dissolve
// The generated assets/logo-dissolve/*.webp are committed, so the site build
// itself does not depend on sharp.
import { mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const srcDir = join(root, 'assets', 'Zip Frames Everience Logo Animation');
const outDir = join(root, 'assets', 'logo-dissolve');

// Clean mark (001) -> readable pixel scatter (043). Reversing this range
// reassembles the mark, so the hover-in / hover-out uses one sequence.
const START = 1;
const END = 43;
const STEP = 2;

// Centered crop (source is 2880x1620): keep the middle 60% width / full height,
// which contains the whole scatter while dropping empty navy on the sides.
const CROP = { leftFrac: 0.2, widthFrac: 0.6, topFrac: 0, heightFrac: 1 };
const TARGET_W = 760;

// Chroma-key: keep bright (white voxels) or pink-saturated (magenta voxels)
// pixels, drop the dark desaturated navy background with a soft alpha ramp.
const LUMA_BASE = 52;   // below this luma a pixel is treated as background
const LUMA_SPAN = 32;   // ramp width to full opacity
const PINK_BASE = 48;   // R-G below this is background-ish
const PINK_SPAN = 34;

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

const keyAlpha = (r, g, b) => {
  const luma = 0.299 * r + 0.587 * g + 0.114 * b;
  const sLuma = (luma - LUMA_BASE) / LUMA_SPAN;
  const sPink = (r - g - PINK_BASE) / PINK_SPAN;
  return Math.round(clamp01(Math.max(sLuma, sPink)) * 255);
};

const process = async (srcFile, outFile) => {
  const meta = await sharp(srcFile).metadata();
  const region = {
    left: Math.round(meta.width * CROP.leftFrac),
    top: Math.round(meta.height * CROP.topFrac),
    width: Math.round(meta.width * CROP.widthFrac),
    height: Math.round(meta.height * CROP.heightFrac),
  };
  const { data, info } = await sharp(srcFile)
    .extract(region)
    .resize({ width: TARGET_W })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    data[i + 3] = keyAlpha(data[i], data[i + 1], data[i + 2]);
  }

  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .webp({ quality: 80, alphaQuality: 92 })
    .toFile(outFile);
};

// Rebuild the folder from scratch so a changed range leaves no orphan frames.
await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

let out = 0;
for (let n = START; n <= END; n += STEP) {
  const src = join(srcDir, `ezgif-frame-${String(n).padStart(3, '0')}.jpg`);
  out += 1;
  const dst = join(outDir, `frame-${String(out).padStart(2, '0')}.webp`);
  await process(src, dst);
}
console.log(`Wrote ${out} dissolve frames to assets/logo-dissolve/`);
