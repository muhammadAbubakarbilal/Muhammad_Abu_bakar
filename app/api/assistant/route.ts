import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const CANDIDATE_MODELS = [
  "gemini-2.5-flash",
  "gemini-3.7-flash",
  "gemini-3.1-flash-lite"
];

function generateHeuristicDiagnostic(userText: string): string {
  const lower = userText.toLowerCase();

  if (lower.includes("lead") || lower.includes("sales") || lower.includes("follow-up") || lower.includes("crm")) {
    return `### Diagnostic Assessment: Lead & Sales Pipeline

1. **Where Human Judgment Belongs:**
   • Closing conversations, nuanced pricing negotiations, and relationship building.

2. **Where AI Assistance Delivers Leverage:**
   • Extracting intent and company size from inbound inquiries, drafting tailored response briefings, and scoring lead urgency.

3. **Where Deterministic Automation Fits:**
   • Sub-2-minute instant intake, auto-updating your CRM (HubSpot/Salesforce), dispatching calendar booking links, and triggering Slack alerts.

**Next Diagnostic Question:**
Where is the biggest point of drop-off right now—is it initial speed to lead, or following up with leads that went cold?`;
  }

  if (lower.includes("onboard") || lower.includes("customer") || lower.includes("client") || lower.includes("intake")) {
    return `### Diagnostic Assessment: Client Onboarding & Operations

1. **Where Human Judgment Belongs:**
   • Welcome strategy calls, reviewing exceptions, and approving scope milestones.

2. **Where AI Assistance Delivers Leverage:**
   • Synthesizing messy client intake responses, extracting data from uploaded PDF/Word contracts, and creating initial project briefs.

3. **Where Deterministic Automation Fits:**
   • Creating shared workspaces (Notion/Slack/Drive), auto-generating invoices in Stripe/QuickBooks, and triggering milestone check-ins.

**Next Diagnostic Question:**
What is the single most repetitive task your team does manually each time a new client signs on?`;
  }

  if (lower.includes("tool") || lower.includes("software") || lower.includes("portal") || lower.includes("spreadsheet")) {
    return `### Diagnostic Assessment: Fragmented Tools & Data Silos

1. **Where Human Judgment Belongs:**
   • High-level operational governance and business logic sign-off.

2. **Where AI Assistance Delivers Leverage:**
   • Natural language query over internal documents and SOPs (RAG), and reconciling conflicting record formats.

3. **Where Deterministic Automation Fits:**
   • Two-way database syncing (e.g. PostgreSQL, Airtable, Google Sheets), scheduled cron pipelines, and unified Next.js internal portals.

**Next Diagnostic Question:**
How many separate software tools is your team copying data between on a weekly basis?`;
  }

  return `### Diagnostic Assessment: Workflow & Systems

To turn this bottleneck into a connected system, we evaluate three distinct layers:

1. **Human Judgment (High Trust):**
   • Preserving your team for empathy, strategy, customer relationships, and critical approvals.

2. **AI-Assisted (Qualitative):**
   • Extracting unstructured data, summarizing messy notes, and triaging ambiguous inquiries.

3. **Deterministic Automation (Plumbing):**
   • Event-driven webhooks, instant database synchronization, notifications, and scheduled tasks.

**Next Step:**
What specific software or manual spreadsheets are currently involved in this process, and who on your team handles the handoff?`;
}

export async function POST(req: NextRequest) {
  try {
    const { messages, userMessage } = await req.json();

    if (!userMessage && (!messages || messages.length === 0)) {
      return NextResponse.json(
        { error: "Message content is required." },
        { status: 400 }
      );
    }

    const currentInput = userMessage || (messages && messages[messages.length - 1]?.content) || "";
    const apiKey = process.env.GEMINI_API_KEY;

    // Fallback if API key is not configured in environment
    if (!apiKey) {
      const fallbackReply = generateHeuristicDiagnostic(currentInput);
      return NextResponse.json({ reply: fallbackReply, grounded: true });
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const systemInstruction = `
You are the AI Systems & Bottleneck Diagnostic Assistant on the personal studio website of **Muhammad ABU BAKAR** (AI Systems & Automation Engineer / Business Systems Engineer).

### Core Working Identity & Philosophy:
- **Central Philosophy:** "I DON'T START WITH THE TECHNOLOGY. I START WITH THE BOTTLENECK."
- **Key Brand Messages:**
  - "Businesses don't always need more software. They often need less manual work."
  - "You bring the bottleneck. I figure out the system."
  - "AI is not the goal. A better-running business is."
  - "I find the repetitive, disconnected, slow, and error-prone parts of a business and turn them into connected software, automation, AI systems, and workflows."

### The 3-Tier Framework:
1. **HUMAN (High Trust & Judgment):** Keep people involved where judgment, relationships, empathy, negotiation, sales closing, or sensitive decisions matter.
2. **AI-ASSISTED (Probabilistic & Qualitative):** Use AI where inputs are unstructured—summarizing, classifying buyer intent, RAG document search, research, extraction, and drafting.
3. **AUTOMATED (Deterministic & Fast):** Use traditional code and APIs for predictable plumbing—moving data across CRM/databases, notifications, scheduling, webhook triggers, and audit logging.

### What Muhammad Builds:
1. **Lead & Sales Systems:** Fast lead capture, qualification, CRM sync, dynamic calendar booking, human sales handoff.
2. **Customer Operations:** Inquiry to onboarding, document intake, task creation, automated delivery tracking.
3. **AI Chatbots & Assistants:** Grounded 24/7 knowledge assistants, inquiry triage, human escalation.
4. **Workflow Automation:** Event-driven webhook pipelines, database synchronization, removing duplicate entry.
5. **Custom Business Software:** Tailored Next.js internal portals, role-based dashboards, PostgreSQL backends.
6. **AI & Knowledge Systems:** Document intelligence, RAG over internal SOPs/contracts, semantic search.

### Your Diagnostic Behavior:
- When a user shares an operational challenge, **DIAGNOSE rather than pitch**.
- Break down where Human Judgment, AI Assistance, and Deterministic Automation belong.
- Ask 1 sharp follow-up diagnostic question to reveal root friction.
- **Tone:** Professional, objective, direct, jargon-free, helpful, and grounded. Never use hyperbolic marketing hype like "supercharge" or "revolutionize". Never fabricate client names or fake revenue metrics.
- Keep responses concise (2 to 4 structured sections or bullet points).
`;

    // Construct conversation history for Gemini
    const formattedHistory = Array.isArray(messages)
      ? messages.map((m: { role: string; content: string }) => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content }]
        }))
      : [];

    if (userMessage && (!formattedHistory.length || formattedHistory[formattedHistory.length - 1].parts[0]?.text !== userMessage)) {
      formattedHistory.push({
        role: 'user',
        parts: [{ text: userMessage }]
      });
    }

    let generatedReply: string | null = null;
    let lastError: any = null;

    // Multi-model resilience loop: try candidate models if 503 or transient spikes occur
    for (const modelName of CANDIDATE_MODELS) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: formattedHistory,
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.6,
          }
        });

        if (response && response.text) {
          generatedReply = response.text;
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${modelName} encountered error, trying next fallback:`, err?.message || err);
      }
    }

    if (generatedReply) {
      return NextResponse.json({ reply: generatedReply });
    }

    // If all models encountered temporary API unavailability or 503 spikes, use heuristic diagnostic
    console.error("All Gemini models encountered transient issues, using diagnostic fallback. Last error:", lastError);
    const intelligentFallback = generateHeuristicDiagnostic(currentInput);
    return NextResponse.json({ reply: intelligentFallback });

  } catch (error: any) {
    console.error("AI Assistant Route General Exception:", error);
    const defaultResponse = "To diagnose your operational workflow: What is the main process currently creating delays, repetitive data entry, or friction between your team and your customers?";
    return NextResponse.json({ reply: defaultResponse }, { status: 200 });
  }
}

