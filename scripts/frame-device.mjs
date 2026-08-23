#!/usr/bin/env node
import { access, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

export const OUTPUT_SIZE = { width: 1600, height: 900 };

const frames = {
  iphone: {
    screen: { left: 628, top: 88, width: 344, height: 724, radius: 48 },
    aspect: [0.4, 0.58],
    svg: () => `
      <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
        <defs>
          <filter id="shadow" x="-30%" y="-30%" width="160%" height="170%"><feGaussianBlur stdDeviation="18"/><feComponentTransfer><feFuncA type="linear" slope=".26"/></feComponentTransfer><feOffset dy="14"/></filter>
          <mask id="cutout"><rect width="1600" height="900" fill="black"/><rect x="610" y="70" width="380" height="760" rx="68" fill="white"/><rect x="628" y="88" width="344" height="724" rx="48" fill="black"/></mask>
        </defs>
        <rect x="625" y="78" width="350" height="744" rx="57" fill="#000" opacity=".4" filter="url(#shadow)"/>
        <rect x="610" y="70" width="380" height="760" rx="68" fill="#090909" stroke="#3b3b3f" stroke-width="3" mask="url(#cutout)"/>
        <rect x="628" y="88" width="344" height="724" rx="48" fill="none" stroke="#202024" stroke-width="3"/>
        <rect x="741" y="101" width="118" height="34" rx="18" fill="#000"/>
        <circle cx="842" cy="118" r="4" fill="#17171a"/>
        <path d="M610 222h3M610 284h3M987 254h3" stroke="#515156" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
  },
  imac: {
    screen: { left: 280, top: 90, width: 1040, height: 585, radius: 18 },
    aspect: [1.45, 2.05],
    svg: () => `
      <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="170%"><feGaussianBlur stdDeviation="18"/><feComponentTransfer><feFuncA type="linear" slope=".25"/></feComponentTransfer><feOffset dy="20"/></filter>
          <linearGradient id="silver" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#d9dadd"/><stop offset="1" stop-color="#989ba0"/></linearGradient>
          <mask id="cutout"><rect width="1600" height="900" fill="black"/><rect x="250" y="60" width="1100" height="660" rx="30" fill="white"/><rect x="280" y="90" width="1040" height="585" rx="18" fill="black"/></mask>
        </defs>
        <rect x="255" y="70" width="1090" height="650" rx="30" fill="#000" opacity=".35" filter="url(#shadow)"/>
        <rect x="250" y="60" width="1100" height="660" rx="30" fill="#080808" stroke="#29292b" stroke-width="4" mask="url(#cutout)"/>
        <rect x="280" y="90" width="1040" height="585" rx="18" fill="none" stroke="#1f1f21" stroke-width="3"/>
        <path d="M280 675h1040v20c0 14-12 25-26 25H306c-14 0-26-11-26-25z" fill="url(#silver)"/>
        <circle cx="800" cy="704" r="5" fill="#77797d"/>
        <path d="M752 720h96l22 103H730z" fill="url(#silver)" stroke="#838589" stroke-width="2"/>
        <path d="M680 823h240l48 18H632z" fill="#aeb0b4" stroke="#797b80" stroke-width="2"/>
        <path d="M690 825h220" stroke="#ececee" stroke-opacity=".55" stroke-width="3"/>
      </svg>`,
  },
};

function usage() {
  return "Usage: node scripts/frame-device.mjs --device iphone|imac --input <screenshot> --output <png>";
}

export function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const flag = argv[index];
    if (flag === "--help" || flag === "-h") return { help: true };
    if (!["--device", "--input", "--output"].includes(flag) || !argv[index + 1]) {
      throw new Error(`${usage()}\nUnknown or missing argument: ${flag}`);
    }
    args[flag.slice(2)] = argv[index + 1];
    index += 1;
  }
  if (!args.device || !args.input || !args.output) throw new Error(usage());
  if (!frames[args.device])
    throw new Error(`Invalid --device: ${args.device}. Use iphone or imac.`);
  return args;
}

function roundedMask({ width, height, radius }) {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="${radius}" fill="white"/></svg>`,
  );
}

export async function frameDevice({ device, input, output }) {
  const frame = frames[device];
  if (!frame) throw new Error(`Invalid device: ${device}. Use iphone or imac.`);
  const source = resolve(input);
  const destination = resolve(output);
  await access(source).catch(() => {
    throw new Error(`Input screenshot not found: ${source}`);
  });
  const metadata = await sharp(source).metadata();
  if (!metadata.width || !metadata.height)
    throw new Error("Input screenshot has no readable dimensions.");
  const ratio = metadata.width / metadata.height;
  if (ratio < frame.aspect[0] || ratio > frame.aspect[1]) {
    throw new Error(
      `Input aspect ratio ${ratio.toFixed(3)} is not suitable for ${device} (${frame.aspect[0]}–${frame.aspect[1]} expected).`,
    );
  }
  const screen = await sharp(source)
    .resize(frame.screen.width, frame.screen.height, { fit: "cover", position: "centre" })
    .composite([{ input: roundedMask(frame.screen), blend: "dest-in" }])
    .png()
    .toBuffer();
  await mkdir(dirname(destination), { recursive: true });
  await sharp({
    create: { ...OUTPUT_SIZE, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([
      { input: screen, left: frame.screen.left, top: frame.screen.top },
      { input: Buffer.from(frame.svg()), left: 0, top: 0 },
    ])
    .png()
    .toFile(destination);
  return destination;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) console.log(usage());
    else console.log(`Wrote ${await frameDevice(args)}`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
