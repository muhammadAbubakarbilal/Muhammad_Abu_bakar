import { NextRequest, NextResponse } from "next/server";
import { projectTypes } from "@/lib/site";
const text = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";
export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 16000)
      return NextResponse.json(
        { success: false, error: "Please shorten your inquiry." },
        { status: 413 },
      );
    body = JSON.parse(raw);
    if (!body || typeof body !== "object" || Array.isArray(body))
      throw new Error("Invalid body");
  } catch {
    return NextResponse.json(
      { success: false, error: "Please provide a valid inquiry." },
      { status: 400 },
    );
  }
  if (text(body.companyFax))
    return NextResponse.json(
      { success: false, error: "Submission could not be accepted." },
      { status: 400 },
    );
  // Accept legacy diagnostic field names for existing clients of this API.
  const inquiry = {
    name: text(body.name),
    email: text(body.email),
    projectType:
      text(body.projectType) || (text(body.problem) ? "CRM / Automation" : ""),
    description: text(body.description) || text(body.currentProcess),
    business: text(body.business).slice(0, 200),
    website: text(body.website),
    budget: text(body.budget).slice(0, 100),
    timeline: text(body.timeline).slice(0, 100),
    currentTools: text(body.currentTools).slice(0, 500),
    additionalContext: text(body.additionalContext).slice(0, 1000),
  };
  const errors: Record<string, string> = {};
  if (inquiry.name.length < 2 || inquiry.name.length > 100)
    errors.name = "Please provide a name between 2 and 100 characters.";
  if (
    inquiry.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)
  )
    errors.email = "Please provide a valid email address.";
  if (!projectTypes.some((type) => type === inquiry.projectType))
    errors.projectType = "Please choose a project type.";
  if (inquiry.description.length < 10 || inquiry.description.length > 4000)
    errors.description = "Please describe your project in 10–4,000 characters.";
  if (
    inquiry.website &&
    (inquiry.website.length > 500 || !/^https?:\/\//i.test(inquiry.website))
  )
    errors.website =
      "Please provide a website starting with http:// or https://.";
  if (Object.keys(errors).length)
    return NextResponse.json({ success: false, errors }, { status: 400 });
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook)
    return NextResponse.json(
      {
        success: false,
        error:
          "Online delivery is not configured. Please send your inquiry by email.",
      },
      { status: 503 },
    );
  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CONTACT_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        ...inquiry,
        receivedAt: new Date().toISOString(),
        source: "portfolio",
      }),
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    });
    if (!response.ok) throw new Error("Delivery failed");
    return NextResponse.json({
      success: true,
      message: "Your project inquiry has been delivered.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Your inquiry could not be delivered. Please send it by email.",
      },
      { status: 502 },
    );
  }
}
