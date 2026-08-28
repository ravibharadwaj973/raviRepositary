import { NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/app/lib/adminAuth";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out." });
  response.cookies.set(ADMIN_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });

  return response;
}
