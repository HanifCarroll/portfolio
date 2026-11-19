import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import sharp from "sharp";
import { frameDevice } from "./frame-device.mjs";

test("renders the frame family on one transparent canvas without cropping wide screens", async (t) => {
  const directory = await mkdtemp(join(tmpdir(), "frame-device-"));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const desktop = join(directory, "desktop.png");
  const mobile = join(directory, "mobile.png");
  await sharp(
    Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400">
    <rect width="800" height="400" fill="#457b9d"/>
    <rect x="790" width="10" height="400" fill="#ffcc00"/>
    <rect y="390" width="790" height="10" fill="#ffff00"/>
  </svg>`),
  )
    .png()
    .toFile(desktop);
  await sharp(
    Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="390" height="844">
    <rect width="390" height="844" fill="#e63946"/>
    <rect y="44" width="390" height="12" fill="#2ca26a"/>
    <rect width="390" height="44" fill="#7a4db2"/>
  </svg>`),
  )
    .png()
    .toFile(mobile);

  for (const device of ["phone", "laptop", "laptop+phone"]) {
    const output = join(directory, `${device}.png`);
    const options = {
      device,
      input: device === "phone" ? mobile : desktop,
      phone: device === "laptop+phone" ? mobile : undefined,
      phoneTopCrop: device === "laptop" ? undefined : 44,
      output,
    };
    await frameDevice(options);
    const { data, info } = await sharp(output).raw().toBuffer({ resolveWithObject: true });
    assert.deepEqual([info.width, info.height, info.channels], [1440, 900, 4]);
    const pixel = (x, y) =>
      data.subarray(4 * (y * info.width + x), 4 * (y * info.width + x) + 4).toString("hex");
    const alphaAt = (x, y) => data[4 * (y * info.width + x) + 3];
    for (let x = 0; x < info.width; x++) {
      assert.ok(alphaAt(x, 0) < 4 && alphaAt(x, info.height - 1) < 4, "shadow fits vertically");
    }
    for (let y = 0; y < info.height; y++) {
      assert.ok(alphaAt(0, y) < 4 && alphaAt(info.width - 1, y) < 4, "shadow fits horizontally");
    }

    if (device === "laptop") {
      assert.equal(pixel(720, 79), "457b9dff", "screenshot is top aligned");
      assert.equal(pixel(1290, 395), "ffcc00ff", "right edge is not cropped");
      assert.equal(pixel(720, 649), "ffff00ff", "bottom edge is not cropped");
      assert.equal(
        pixel(720, 660),
        "457b9dff",
        "the 2:1 screen content ends at its natural aspect ratio",
      );
      assert.equal(alphaAt(65, 803), 255, "the laptop base nearly fills the canvas width");
      assert.ok(alphaAt(720, 840) > 0 && alphaAt(720, 840) < 255, "soft shadow below the base");
      const first = await readFile(output);
      await frameDevice(options);
      assert.deepEqual(await readFile(output), first, "identical inputs render deterministically");
    } else if (device === "phone") {
      assert.equal(pixel(720, 440), "e63946ff");
      assert.equal(pixel(720, 52), "0a0a0bff", "the Dynamic Island is visible");
      assert.equal(pixel(564, 74), "fafafaff", "the drawn status bar replaces the source bar");
      assert.equal(
        pixel(720, 78),
        "2ca26aff",
        "the uncropped app content starts below the status bar",
      );
      assert.equal(alphaAt(720, 847), 255, "the phone uses nearly the full canvas height");
    } else {
      assert.equal(pixel(700, 300), "457b9dff");
      assert.equal(pixel(1180, 540), "e63946ff", "the phone overlaps the laptop screen");
    }
  }

  const safariOutput = join(directory, "safari.png");
  await frameDevice({
    device: "phone",
    input: mobile,
    phoneTopCrop: 44,
    safariDomain: "example.com",
    output: safariOutput,
  });
  const { data, info } = await sharp(safariOutput).raw().toBuffer({ resolveWithObject: true });
  const color = (x, y) =>
    data.subarray(4 * (y * info.width + x), 4 * (y * info.width + x) + 4).toString("hex");
  assert.equal(color(568, 91), "e7e8eaff", "Safari draws its address field above the site");
  assert.equal(color(720, 120), "2ca26aff", "Safari leaves the top of the site visible");
  assert.equal(color(720, 781), "e63946ff", "Safari leaves the bottom of the site visible");
  assert.equal(color(573, 788), "fafafaff", "Safari draws its toolbar below the site");

  await assert.rejects(
    frameDevice({ device: "laptop+phone", input: desktop }),
    /second screenshot/,
  );
});
