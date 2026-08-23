import assert from "node:assert/strict";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";
import test from "node:test";
import { frameDevice } from "./frame-device.mjs";

test("renders deterministic transparent iPhone and iMac frames", async (t) => {
  const directory = await mkdtemp(join(tmpdir(), "frame-device-"));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const sources = {
    iphone: join(directory, "iphone-source.png"),
    imac: join(directory, "imac-source.png"),
  };
  await sharp({ create: { width: 400, height: 800, channels: 4, background: "#e63946" } })
    .png()
    .toFile(sources.iphone);
  await sharp({ create: { width: 800, height: 450, channels: 4, background: "#457b9d" } })
    .png()
    .toFile(sources.imac);

  const outputs = {};
  for (const device of ["iphone", "imac"]) {
    outputs[device] = join(directory, `${device}.png`);
    await frameDevice({ device, input: sources[device], output: outputs[device] });
    const image = sharp(outputs[device]);
    const metadata = await image.metadata();
    assert.equal(metadata.width, 1600);
    assert.equal(metadata.height, 900);
    assert.equal(metadata.channels, 4);
    assert.equal((await image.stats()).channels[3].min, 0);
  }

  const changedSource = join(directory, "changed.png");
  const changedOutput = join(directory, "changed-output.png");
  await sharp({ create: { width: 400, height: 800, channels: 4, background: "#1d3557" } })
    .png()
    .toFile(changedSource);
  await frameDevice({ device: "iphone", input: changedSource, output: changedOutput });
  assert.notEqual(
    (await sharp(outputs.iphone).raw().toBuffer()).toString("hex"),
    (await sharp(changedOutput).raw().toBuffer()).toString("hex"),
  );
});
