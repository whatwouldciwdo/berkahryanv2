import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const path = new URL("../public/berkahryan-logo.svg", import.meta.url);
const original = await readFile(path, "utf8");
let optimized = original;
for (const match of original.matchAll(/data:image\/png;base64,([A-Za-z0-9+/=]+)/g)) {
  const input = Buffer.from(match[1], "base64");
  const output = await sharp(input).png({ compressionLevel: 9, effort: 10 }).toBuffer();
  const before = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const after = await sharp(output).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  if (JSON.stringify(before.info) !== JSON.stringify(after.info) || !before.data.equals(after.data)) {
    console.log("Keeping original embedded PNG: recompression changed decoded pixels.");
    continue;
  }
  if (output.length < input.length) {
    optimized = optimized.replace(match[0], `data:image/png;base64,${output.toString("base64")}`);
  }
}
// Verify the complete SVG rendering, including its masks and filters.
const before = await sharp(Buffer.from(original)).raw().toBuffer();
const after = await sharp(Buffer.from(optimized)).raw().toBuffer();
if (!before.equals(after)) throw new Error("SVG rendering changed");
if (Buffer.byteLength(optimized) < Buffer.byteLength(original)) await writeFile(path, optimized);
console.log(`Logo: ${Buffer.byteLength(original)} -> ${Buffer.byteLength(optimized)} bytes; identical rendered pixels.`);
