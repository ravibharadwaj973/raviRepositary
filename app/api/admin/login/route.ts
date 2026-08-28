import { NextResponse } from "next/server";
import { ADMIN_COOKIE, createAdminToken, hasAdminCredentials, verifyAdminLogin } from "@/app/lib/adminAuth";

export async function POST(request: Request) {
  const body = await request.json();
  const username = typeof body.username === "string" ? body.username.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!hasAdminCredentials()) {
    return NextResponse.json(
      { message: "Admin credentials are not configured." },
      { status: 500 },
    );
  }
  console.log(process.env.ADMIN_USERNAME)
console.log(username)
  if (!verifyAdminLogin(username, password)) {
    return NextResponse.json({ message: "Invalid admin credentials." }, { status: 401 });
  }

  const response = NextResponse.json({ message: "Logged in." });
  response.cookies.set(ADMIN_COOKIE, createAdminToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
    path: "/",
  });

  return response;
}
