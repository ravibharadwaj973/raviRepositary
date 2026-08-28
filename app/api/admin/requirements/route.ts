import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ADMIN_COOKIE, isValidAdminToken } from "@/app/lib/adminAuth";
import { getPortfolioDb } from "@/app/lib/mongodb";

export async function GET() {
  const cookieStore = await cookies();

  if (!isValidAdminToken(cookieStore.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
  }

  try {
    const db = await getPortfolioDb();
    const requirements = await db
      .collection("requirements")
      .find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json({
      requirements: requirements.map((item) => ({
        _id: item._id.toString(),
        name: item.name,
        phone: item.phone,
        email: item.email,
        requirementType: item.requirementType,
        message: item.message,
        status: item.status,
        createdAt: item.createdAt?.toISOString?.() || new Date().toISOString(),
      })),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Unable to load requirements." }, { status: 500 });
  }
}
