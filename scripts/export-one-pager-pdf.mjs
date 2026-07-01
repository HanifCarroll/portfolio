import { createServer } from "node:http";
import { readFile, rm } from "node:fs/promises";
import { existsSync, readdirSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { homedir } from "node:os";
import { spawn } from "node:child_process";
import playwright from "playwright-core";

const { chromium } = playwright;

const root = resolve(new URL("..", import.meta.url).pathname);
const distDir = join(root, "dist");
const outputPath = join(root, "public", "Hanif-Carroll-Contract-Product-Engineer-One-Pager.pdf");
const routePath = "/contract-product-engineer-one-pager/";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
};

function resolveRequestPath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0] ?? "/");
  const candidate = cleanPath.endsWith("/") ? `${cleanPath}index.html` : cleanPath;
  const filePath = normalize(join(distDir, candidate));

  if (!filePath.startsWith(distDir)) {
    return null;
  }

  return filePath;
}

function run(command, args, options = {}) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(command, args, {
      cwd: root,
      stdio: "inherit",
      ...options,
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolvePromise();
        return;
      }

      reject(new Error(`${command} ${args.join(" ")} exited with ${code}`));
    });
  });
}

async function startServer() {
  const server = createServer(async (request, response) => {
    try {
      const filePath = resolveRequestPath(request.url ?? "/");
      if (!filePath || !existsSync(filePath)) {
        response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
        response.end("Not found");
        return;
      }

      const body = await readFile(filePath);
      response.writeHead(200, {
        "content-type": mimeTypes[extname(filePath)] ?? "application/octet-stream",
      });
      response.end(body);
    } catch (error) {
      response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      response.end(error instanceof Error ? error.message : "Server error");
    }
  });

  await new Promise((resolvePromise) => server.listen(0, "127.0.0.1", resolvePromise));
  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Could not start local static server.");
  }

  return {
    server,
    url: `http://127.0.0.1:${address.port}${routePath}`,
  };
}

function resolveBrowserPath() {
  const candidates = [
    process.env.CHROME_PATH,
    chromium.executablePath(),
    findCachedPlaywrightChromium(),
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ].filter(Boolean);
  const browserPath = candidates.find((candidate) => existsSync(candidate));

  if (!browserPath) {
    throw new Error(
      "No Playwright Chromium executable found. Run `bunx playwright install chromium` or set CHROME_PATH.",
    );
  }

  return browserPath;
}

function findCachedPlaywrightChromium() {
  const cacheDir = join(homedir(), "Library", "Caches", "ms-playwright");
  if (!existsSync(cacheDir)) {
    return null;
  }

  const versions = readdirSync(cacheDir)
    .filter((entry) => /^chromium-\d+$/.test(entry))
    .sort((a, b) => Number(b.replace("chromium-", "")) - Number(a.replace("chromium-", "")));

  for (const version of versions) {
    const browserRoot = join(cacheDir, version);
    const platformDirs = readdirSync(browserRoot)
      .filter((entry) => entry.startsWith("chrome-mac"))
      .sort()
      .reverse();

    for (const platformDir of platformDirs) {
      const candidate = join(
        browserRoot,
        platformDir,
        "Google Chrome for Testing.app",
        "Contents",
        "MacOS",
        "Google Chrome for Testing",
      );

      if (existsSync(candidate)) {
        return candidate;
      }
    }
  }

  return null;
}

async function printPdf(url, outputFile) {
  const browser = await chromium.launch({
    executablePath: resolveBrowserPath(),
    headless: true,
  });

  try {
    const page = await browser.newPage({
      viewport: {
        width: 816,
        height: 1056,
      },
    });

    await page.goto(url, { waitUntil: "networkidle" });
    await page.evaluate(() => (document.fonts ? document.fonts.ready : true));
    await page.pdf({
      path: outputFile,
      format: "Letter",
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
    });
  } finally {
    await browser.close();
  }

  if (!existsSync(outputFile) || statSync(outputFile).size <= 0) {
    throw new Error("PDF output was not written.");
  }
}

async function main() {
  await run("bun", ["run", "build"]);

  const { server, url } = await startServer();
  try {
    await rm(outputPath, { force: true });
    await printPdf(url, outputPath);
    console.log(`PDF written to ${outputPath}`);
  } finally {
    server.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
