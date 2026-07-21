import { describe, expect, test } from "bun:test";
import { emailBlocks, sha256, verifyRelease } from "./release.mjs";

function fixture() {
  const content = {
    schema_version: "newsletter-release-v1", content_item_id: 1, asset_id: 2,
    asset_digest: sha256("Paragraph."), publication_id: 3, slug: "issue-one",
    title: "Issue", description: "Description", subject: "Subject", preview: "Preview",
    published_at: "2026-07-16T00:00:00.000000Z", issue_number: 1, tags: ["AI"],
    cover_image: null, cover_alt: null, body_markdown: "Paragraph.",
  };
  return { ...content, package_digest: sha256(JSON.stringify(content)) };
}

describe("newsletter release", () => {
  test("verifies the exact package and produces email blocks", () => {
    const release = verifyRelease(fixture());
    expect(release.slug).toBe("issue-one");
    expect(emailBlocks(release.body_markdown)).toEqual([{ type: "paragraph", text: "Paragraph." }]);
  });

  test("rejects changed body bytes", () => {
    const release = fixture();
    release.body_markdown = "Changed.";
    expect(() => verifyRelease(release)).toThrow("asset digest differs");
  });
});
