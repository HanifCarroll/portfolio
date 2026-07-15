import { createCipheriv, createDecipheriv, createHash, randomBytes } from "node:crypto";

const TOKEN_TTL_MS = 24 * 60 * 60 * 1000;

interface SubscriptionTokenPayload {
  email: string;
  expiresAt: number;
}

function keyFromSecret(secret: string) {
  return createHash("sha256").update(secret, "utf8").digest();
}

export function createSubscriptionToken(email: string, secret: string, now = Date.now()) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", keyFromSecret(secret), iv);
  const payload: SubscriptionTokenPayload = { email, expiresAt: now + TOKEN_TTL_MS };
  const ciphertext = Buffer.concat([
    cipher.update(JSON.stringify(payload), "utf8"),
    cipher.final(),
  ]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, ciphertext]).toString("base64url");
}

export function readSubscriptionToken(token: string, secret: string, now = Date.now()) {
  try {
    const bytes = Buffer.from(token, "base64url");
    if (bytes.length < 29) return null;
    const iv = bytes.subarray(0, 12);
    const tag = bytes.subarray(12, 28);
    const decipher = createDecipheriv("aes-256-gcm", keyFromSecret(secret), iv);
    decipher.setAuthTag(tag);
    const plaintext = Buffer.concat([
      decipher.update(bytes.subarray(28)),
      decipher.final(),
    ]).toString("utf8");
    const payload = JSON.parse(plaintext) as SubscriptionTokenPayload;
    if (
      typeof payload.email !== "string" ||
      typeof payload.expiresAt !== "number" ||
      payload.expiresAt < now
    )
      return null;
    return payload;
  } catch {
    return null;
  }
}
