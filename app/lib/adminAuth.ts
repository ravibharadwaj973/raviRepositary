import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE = "rj_admin_session";

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
}

export function hasAdminCredentials() {
  return Boolean(process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD && getSessionSecret());
}

export function verifyAdminLogin(username: string, password: string) {
  return (
    hasAdminCredentials() &&
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  );
}

export function createAdminToken() {
  const username = process.env.ADMIN_USERNAME || "";
  const password = process.env.ADMIN_PASSWORD || "";

  return createHmac("sha256", getSessionSecret())
    .update(`${username}:${password}`)
    .digest("hex");
}

export function isValidAdminToken(token?: string) {
  if (!token || !hasAdminCredentials()) {
    return false;
  }

  const expected = createAdminToken();
  const tokenBuffer = Buffer.from(token);
  const expectedBuffer = Buffer.from(expected);

  return (
    tokenBuffer.length === expectedBuffer.length &&
    timingSafeEqual(tokenBuffer, expectedBuffer)
  );
}
