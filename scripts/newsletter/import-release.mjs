import { importRelease } from "./release.mjs";

const path = process.argv[2];
if (!path) throw new Error("Usage: bun run newsletter:import <newsletter-release.json>");
const { release, output } = await importRelease(path);
console.log(JSON.stringify({ slug: release.slug, packageDigest: release.package_digest, output }, null, 2));
