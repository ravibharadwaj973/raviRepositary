import { NextResponse } from "next/server";
import { getPortfolioDb } from "@/app/lib/mongodb";
import type { RequirementType } from "@/app/types/requirements";

const requirementTypes: RequirementType[] = [
  "App Development",
  "Business Application",
  "Business Software",
  "CRM / Lead Management",
  "CRM System",
  "Automation",
  "Cloud / DevOps",
  "Cloud Infrastructure",
  "API Integration",
  "Other",
];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body.name);
    const phone = clean(body.phone);
    const email = clean(body.email).toLowerCase();
    const message = clean(body.message);
    const requirementType = clean(body.requirementType) as RequirementType;

    if (!name || !email || !message || !requirementTypes.includes(requirementType)) {
      return NextResponse.json(
        { message: "Please fill all requirement details correctly." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email." }, { status: 400 });
    }

    const db = await getPortfolioDb();
    const submission = {
      name,
      phone,
      email,
      requirementType,
      message,
      status: "new" as const,
      createdAt: new Date(),
    };

    await db.collection("requirements").insertOne(submission);

    return NextResponse.json({ message: "Requirement submitted successfully." }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Unable to submit requirement right now." },
      { status: 500 },
    );
  }
}
