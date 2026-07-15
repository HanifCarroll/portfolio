import { describe, expect, test } from "bun:test";
import { createSubscriptionToken, readSubscriptionToken } from "./token";

describe("newsletter confirmation tokens", () => {
  test("round-trips an email before expiry", () => {
    const token = createSubscriptionToken("reader@example.com", "test-secret", 1_000);
    expect(readSubscriptionToken(token, "test-secret", 2_000)).toEqual({
      email: "reader@example.com",
      expiresAt: 86_401_000,
    });
  });

  test("rejects expired or modified tokens", () => {
    const token = createSubscriptionToken("reader@example.com", "test-secret", 1_000);
    expect(readSubscriptionToken(token, "test-secret", 86_401_001)).toBeNull();
    expect(readSubscriptionToken(`${token}x`, "test-secret", 2_000)).toBeNull();
  });
});
