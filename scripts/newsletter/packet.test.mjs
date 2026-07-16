import { describe, expect, test } from "bun:test";
import { calculateNewsletterIssueDigest, parseNewsletterBody } from "./packet.mjs";

describe("newsletter body blocks", () => {
  test("parses paragraphs, semantic headings, and HTTPS images", () => {
    expect(
      parseNewsletterBody(
        'Opening paragraph.\n\n### A useful turn\n\n![A workflow stops for review](https://www.hanifcarroll.com/images/newsletter/review-gate.webp "Judgment comes before scale.")',
      ),
    ).toEqual([
      { type: "paragraph", text: "Opening paragraph." },
      { type: "heading", text: "A useful turn" },
      {
        type: "image",
        src: "https://www.hanifcarroll.com/images/newsletter/review-gate.webp",
        alt: "A workflow stops for review",
        caption: "Judgment comes before scale.",
      },
    ]);
  });

  test("rejects malformed headings and non-HTTPS image blocks", () => {
    expect(() => parseNewsletterBody("## Wrong heading level")).toThrow(
      "Malformed newsletter content block",
    );
    expect(() => parseNewsletterBody("![Alt](http://example.com/image.png)")).toThrow(
      "Malformed newsletter content block",
    );
  });

  test("binds all reader-visible issue fields to one deterministic digest", () => {
    const issue = {
      title: "A Working Theory",
      subject: "A useful subject",
      preview: "A complementary preview.",
      body: "Opening paragraph.\n\n### A heading\n\nClosing paragraph.",
    };

    expect(calculateNewsletterIssueDigest(issue)).toMatch(/^sha256:[0-9a-f]{64}$/);
    expect(calculateNewsletterIssueDigest(issue)).toBe(calculateNewsletterIssueDigest(issue));
    expect(calculateNewsletterIssueDigest({ ...issue, subject: "Changed" })).not.toBe(
      calculateNewsletterIssueDigest(issue),
    );
  });
});
