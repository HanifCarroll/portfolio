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
    <rect width="390" height="12" fill="#2ca26a"/>
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
      output,
    };
    await frameDevice(options);
    const { data, info } = await sharp(output).raw().toBuffer({ resolveWithObject: true });
    assert.deepEqual([info.width, info.height, info.channels], [1600, 1000, 4]);
    const pixel = (x, y) =>
      data.subarray(4 * (y * info.width + x), 4 * (y * info.width + x) + 4).toString("hex");
    assert.equal(pixel(0, 0), "00000000");
    assert.ok(parseInt(pixel(800, device === "laptop" ? 896 : 950).slice(-2), 16) < 255);

    if (device === "laptop") {
      assert.equal(pixel(800, 134), "457b9dff", "screenshot is top aligned");
      assert.equal(pixel(1370, 450), "ffcc00ff", "right edge is not cropped");
      assert.equal(pixel(800, 704), "ffff00ff", "bottom edge is not cropped");
      assert.equal(
        pixel(800, 715),
        "457b9dff",
        "the 2:1 screen content ends at its natural aspect ratio",
      );
      const alpha = parseInt(pixel(800, 896).slice(-2), 16);
      assert.ok(alpha > 0, "the frame has a soft shadow below it");
      const first = await readFile(output);
      await frameDevice(options);
      assert.deepEqual(await readFile(output), first, "identical inputs render deterministically");
    } else if (device === "phone") {
      assert.equal(pixel(800, 500), "e63946ff");
      assert.equal(pixel(800, 96), "101114ff", "the notch is visible at the top of the screen");
      assert.equal(pixel(800, 104), "2ca26aff", "the full screenshot starts below the notch");
    } else {
      assert.equal(pixel(700, 300), "457b9dff");
      assert.equal(pixel(1280, 600), "e63946ff", "the phone overlaps the laptop screen");
    }
  }

  await assert.rejects(
    frameDevice({ device: "laptop+phone", input: desktop }),
    /second screenshot/,
  );
});
