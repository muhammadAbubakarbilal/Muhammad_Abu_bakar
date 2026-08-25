import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  business: string;
  website?: string;
  problem: string;
  currentProcess: string;
  frequency?: string;
  currentTools?: string;
  budget?: string;
  additionalContext?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;

    // Validation
    const errors: Record<string, string> = {};

    if (!body.name || body.name.trim().length < 2) {
      errors.name = "Please provide your full name.";
    }

    if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.email = "Please provide a valid business email address.";
    }

    if (!body.business || body.business.trim().length < 2) {
      errors.business = "Please specify your company or organization name.";
    }

    if (!body.problem || body.problem.trim().length === 0) {
      errors.problem = "Please select the primary area of operational friction.";
    }

    if (!body.currentProcess || body.currentProcess.trim().length < 10) {
      errors.currentProcess = "Please briefly describe how this process currently happens (at least 10 characters).";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // In production, this would dispatch to a webhook, PostgreSQL database, or CRM
    const submissionId = `btl-${Date.now().toString(36)}`;
    const receivedAt = new Date().toISOString();

    console.log(`[Diagnostic Intake Received] ID: ${submissionId} | Company: ${body.business} | Problem: ${body.problem}`);

    return NextResponse.json({
      success: true,
      submissionId,
      receivedAt,
      message: "Diagnostic inquiry received. I will review your workflow and prepare a personalized system breakdown."
    });
  } catch (error: any) {
    console.error("Contact API Route Error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your submission." },
      { status: 500 }
    );
  }
}
