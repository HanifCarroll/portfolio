#!/usr/bin/env node
import { mkdir, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const width = 1600;
const height = 1000;
const projectAssets = fileURLToPath(new URL("../src/assets/img/projects/", import.meta.url));
const usage = "Usage: node scripts/frame-device.mjs <slug> [<slug> ...]";
const laptopScreen = { x: 22, y: 30, width: 1152, height: 696, radius: 9 };
const phoneScreen = { x: 18, y: 20, width: 390, height: 844, radius: 41, topInset: 29 };
const laptopLid = '<rect width="1196" height="750" rx="26"';
const laptopBase = "M-70 745H1266v10q-7 14-41 20H-29q-34-6-41-20z";
const phoneBody = '<rect width="426" height="884" rx="62"';

async function screenMarkup(id, input, screen) {
  const { x, y, radius, topInset = 0 } = screen;
  const { data, info } = await sharp(input)
    .rotate()
    .resize(screen.width, screen.height - topInset, { fit: "inside" })
    .toColourspace("srgb")
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const image = await sharp(data, { raw: info }).png().toBuffer();
  // Match the screenshot's upper-left background where it doesn't fill the screen.
  const matte = data[3] === 255 ? `#${data.subarray(0, 3).toString("hex")}` : "#fcfcfa";
  const outline = `x="${x}" y="${y}" width="${screen.width}" height="${screen.height}" rx="${radius}"`;
  return `<clipPath id="${id}"><rect ${outline}/></clipPath>
    <rect ${outline} fill="${matte}"/>
    <image clip-path="url(#${id})" x="${x + Math.floor((screen.width - info.width) / 2)}" y="${y + topInset}"
      width="${info.width}" height="${info.height}" href="data:image/png;base64,${image.toString("base64")}"/>`;
}

export async function frameDevice({ device, input, phone, output }) {
  if (!["laptop", "phone", "laptop+phone"].includes(device)) {
    throw new Error(`Invalid device: ${device}. Use laptop, phone, or laptop+phone.`);
  }
  const paired = device === "laptop+phone";
  if (paired !== Boolean(phone)) throw new Error("Only laptop+phone requires a second screenshot.");

  const laptopTransform = paired ? "translate(126 81)" : "translate(202 103)";
  const phoneTransform = paired ? "translate(1216 460) scale(.53)" : "translate(587 52)";
  const laptop =
    device === "phone"
      ? ""
      : `<g transform="${laptopTransform}">
    ${laptopLid} fill="#101114" stroke="#55585e" stroke-width="2"/>
    <rect x="3" y="3" width="1190" height="744" rx="23" fill="none" stroke="#2f3034"/>
    <circle cx="598" cy="15" r="4" fill="#050608" stroke="#24272d"/>
    <circle cx="599" cy="14" r="1" fill="#657085"/>
    ${await screenMarkup("laptop-screen", input, laptopScreen)}
    <path d="${laptopBase}" fill="url(#base)" stroke="#67696e"/>
    <path d="M-69 745.5H1265" stroke="#c3c3c6"/>
    <path d="M525 745h146q-6 9-18 9H543q-12 0-18-9z" fill="#74767c"/>
  </g>`;
  const handset =
    device === "laptop"
      ? ""
      : `<g transform="${phoneTransform}">
    <path d="M-4 159h6v31h-6zM-4 212h6v57h-6zM-4 284h6v57h-6zM424 235h6v93h-6z" fill="#292a2d" stroke="#16171a"/>
    ${phoneBody} fill="url(#rim)" stroke="#333539" stroke-width="2"/>
    <rect x="5" y="5" width="416" height="874" rx="57" fill="#101114" stroke="#55575d"/>
    ${await screenMarkup("phone-screen", phone ?? input, phoneScreen)}
    <path d="M140 20h146l-5 15q-5 14-19 14h-98q-14 0-19-14z" fill="#101114"/>
    <rect x="192" y="29" width="40" height="4" rx="2" fill="#323337"/>
    <circle cx="247" cy="31" r="4" fill="#262b36"/>
    <circle cx="248" cy="30" r="1" fill="#657085"/>
  </g>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <defs>
      <linearGradient id="base" x2="0" y2="1"><stop stop-color="#aeafb3"/><stop offset=".34" stop-color="#898b90"/><stop offset="1" stop-color="#45474d"/></linearGradient>
      <linearGradient id="rim" x2="1" y2="1"><stop stop-color="#5e6168"/><stop offset=".45" stop-color="#27282d"/><stop offset="1" stop-color="#53565d"/></linearGradient>
      <filter id="shadow" filterUnits="userSpaceOnUse" x="0" y="0" width="${width}" height="${height}">
        <feGaussianBlur stdDeviation="14"/>
      </filter>
    </defs>
    <g transform="translate(0 16)" opacity=".23" filter="url(#shadow)">
      ${laptop && `<g transform="${laptopTransform}">${laptopLid}/><path d="${laptopBase}"/></g>`}
      ${handset && `<g transform="${phoneTransform}">${phoneBody}/></g>`}
    </g>
    ${laptop}${handset}
  </svg>`;
  const destination = resolve(output);
  await mkdir(dirname(destination), { recursive: true });
  await sharp(Buffer.from(svg)).png().toFile(destination);
  return destination;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    const slugs = process.argv.slice(2);
    if (slugs.length === 1 && ["--help", "-h"].includes(slugs[0])) {
      console.log(usage);
    } else {
      const manifest = JSON.parse(
        await readFile(new URL("./frame-device.json", import.meta.url), "utf8"),
      );
      if (!slugs.length) throw new Error(usage);
      for (const slug of slugs) {
        if (!Object.hasOwn(manifest, slug))
          throw new Error(`No frame in the manifest for ${slug}.\n${usage}`);
      }
      for (const slug of slugs) {
        const { device, input, phone } = manifest[slug];
        const output = await frameDevice({
          device,
          input: resolve(projectAssets, input),
          phone: phone && resolve(projectAssets, phone),
          output: resolve(projectAssets, "framed", `${slug}.png`),
        });
        console.log(`Wrote ${output}`);
      }
    }
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
