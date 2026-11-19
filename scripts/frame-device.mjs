#!/usr/bin/env node
import { mkdir, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const width = 1440;
const height = 900;
const projectAssets = fileURLToPath(new URL("../src/assets/img/projects/", import.meta.url));
const usage = "Usage: node scripts/frame-device.mjs <slug> [<slug> ...]";
const laptopScreen = { x: 22, y: 30, width: 1152, height: 696, radius: 9 };
const phoneScreen = { x: 18, y: 20, width: 390, height: 844, radius: 41 };
const statusHeight = 44;
const addressHeight = 45;
const toolbarHeight = 55;
const laptopLid = '<rect width="1196" height="750" rx="26"';
const laptopBase = "M-70 745H1266v10q-7 14-41 20H-29q-34-6-41-20z";
const phoneBody = '<rect width="426" height="884" rx="62"';

function phoneChrome(domain) {
  return `<g font-family="Helvetica Neue, Arial, sans-serif" fill="#161619">
    <rect x="18" y="20" width="390" height="${statusHeight + (domain ? addressHeight : 0)}" fill="#fafafa"/>
    <rect x="153" y="28" width="120" height="26" rx="13" fill="#0a0a0b"/>
    <circle cx="257" cy="41" r="4" fill="#181a22"/>
    <circle cx="257" cy="41" r="1.5" fill="#333a4a"/>
    <text x="54" y="47" font-size="17" font-weight="700">9:41</text>
    <rect x="302" y="43" width="3" height="4" rx="1"/>
    <rect x="307" y="40" width="3" height="7" rx="1"/>
    <rect x="312" y="38" width="3" height="9" rx="1"/>
    <rect x="317" y="35" width="3" height="12" rx="1"/>
    <path d="M326 38q8-7 16 0m-13 3q5-4 10 0m-7 3q2-2 4 0" fill="none" stroke="#161619" stroke-width="2" stroke-linecap="round"/>
    <circle cx="334" cy="46.5" r="1"/>
    <rect x="350" y="35" width="25" height="12" rx="3" fill="none" stroke="#737377"/>
    <rect x="352" y="37" width="21" height="8" rx="1.5"/>
    <rect x="376" y="39" width="2" height="4" rx="1" fill="#737377"/>
    ${
      domain
        ? `
    <rect x="25" y="69" width="376" height="32" rx="15" fill="#e7e8ea"/>
    <text x="39" y="90" font-size="12" font-weight="600" fill="#575d64">AA</text>
    <text x="213" y="91" text-anchor="middle" font-size="16">${domain}</text>
    <path d="M377 85h-3v9h12v-9h-3m-3 5V76m-3 3 3-3 3 3" fill="none" stroke="#656b71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="18" y="${phoneScreen.y + phoneScreen.height - toolbarHeight}" width="390" height="${toolbarHeight}" fill="#fafafa"/>
    <g fill="none" stroke="#657078" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M52 820l-7 7 7 7m-7-7h18"/>
      <path d="M130 820l7 7-7 7m7-7h-18" opacity=".42"/>
      <circle cx="213" cy="827" r="15" fill="#e7e8ea" stroke="none"/>
      <path d="M213 820v14m-7-7h14"/>
      <rect x="289" y="819" width="16" height="16" rx="3"/>
      <path d="M292 822h11a4 4 0 0 1 4 4v10"/>
    </g>
    <g fill="#657078"><circle cx="362" cy="827" r="2"/><circle cx="369" cy="827" r="2"/><circle cx="376" cy="827" r="2"/></g>`
        : ""
    }
  </g>`;
}

async function screenMarkup(
  id,
  input,
  screen,
  { topInset = 0, bottomInset = 0, topCrop = 0, chrome = "" } = {},
) {
  const { x, y, radius } = screen;
  const source = sharp(input).rotate();
  if (topCrop) {
    const { autoOrient } = await source.metadata();
    if (topCrop >= autoOrient.height) throw new Error("phoneTopCrop leaves no screenshot content.");
    source.extract({
      left: 0,
      top: topCrop,
      width: autoOrient.width,
      height: autoOrient.height - topCrop,
    });
  }
  const { data, info } = await source
    .resize(screen.width, screen.height - topInset - bottomInset, { fit: "inside" })
    .toColourspace("srgb")
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const image = await sharp(data, { raw: info }).png().toBuffer();
  // Match the screenshot's upper-left background where it doesn't fill the screen.
  const matte = data[3] === 255 ? `#${data.subarray(0, 3).toString("hex")}` : "#fcfcfa";
  const outline = `x="${x}" y="${y}" width="${screen.width}" height="${screen.height}" rx="${radius}"`;
  return `<clipPath id="${id}"><rect ${outline}/></clipPath>
    <g clip-path="url(#${id})">
      <rect ${outline} fill="${matte}"/>
      <image x="${x + Math.floor((screen.width - info.width) / 2)}" y="${y + topInset}"
        width="${info.width}" height="${info.height}" href="data:image/png;base64,${image.toString("base64")}"/>
      ${chrome}
    </g>`;
}

export async function frameDevice({
  device,
  input,
  phone,
  phoneTopCrop = 0,
  safariDomain,
  output,
}) {
  if (!["laptop", "phone", "laptop+phone"].includes(device)) {
    throw new Error(`Invalid device: ${device}. Use laptop, phone, or laptop+phone.`);
  }
  const paired = device === "laptop+phone";
  if (paired !== Boolean(phone)) throw new Error("Only laptop+phone requires a second screenshot.");
  if (!Number.isSafeInteger(phoneTopCrop) || phoneTopCrop < 0) {
    throw new Error("phoneTopCrop must be a nonnegative number of source pixels.");
  }
  if (
    safariDomain !== undefined &&
    (typeof safariDomain !== "string" || !/^[a-z0-9.-]+$/i.test(safariDomain))
  ) {
    throw new Error("safariDomain must be a bare hostname.");
  }

  // Keep room for the shadow without shrinking the devices to a common width.
  const laptopTransform = paired ? "translate(114 40) scale(.94)" : "translate(122 48)";
  const phoneTransform = paired ? "translate(1127 292) scale(.64)" : "translate(518 15) scale(.95)";
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
    ${phoneBody} fill="#414147" stroke="url(#rim)" stroke-width="3"/>
    <rect x="5" y="5" width="416" height="874" rx="57" fill="#0c0c0e" stroke="#28282e"/>
    ${await screenMarkup("phone-screen", phone ?? input, phoneScreen, {
      topInset: statusHeight + (safariDomain ? addressHeight : 0),
      bottomInset: safariDomain ? toolbarHeight : 0,
      topCrop: phoneTopCrop,
      chrome: phoneChrome(safariDomain),
    })}
  </g>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <defs>
      <linearGradient id="base" x2="0" y2="1"><stop stop-color="#aeafb3"/><stop offset=".34" stop-color="#898b90"/><stop offset="1" stop-color="#45474d"/></linearGradient>
      <linearGradient id="rim" x2="1" y2="1"><stop stop-color="#85858c"/><stop offset=".38" stop-color="#5a5a60"/><stop offset="1" stop-color="#2a2a2e"/></linearGradient>
      <filter id="shadow" filterUnits="userSpaceOnUse" x="0" y="0" width="${width}" height="${height}">
        <feGaussianBlur stdDeviation="12"/>
      </filter>
    </defs>
    <g transform="translate(0 12)" opacity=".23" filter="url(#shadow)">
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
        const { device, input, phone, phoneTopCrop, safariDomain } = manifest[slug];
        const output = await frameDevice({
          device,
          input: resolve(projectAssets, input),
          phone: phone && resolve(projectAssets, phone),
          phoneTopCrop,
          safariDomain,
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
