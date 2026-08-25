import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const CANDIDATE_MODELS = [
  "gemini-3.7-flash",
  "gemini-3.1-flash-lite"
];

function cleanHumanText(text: string): string {
  if (!text) return "";
  return text
    // Remove markdown headers like ### or ##
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold asterisks like **word** -> word
    .replace(/\*\*(.*?)\*\*/g, '$1')
    // Remove single asterisks like *word* -> word
    .replace(/\*(.*?)\*/g, '$1')
    // Remove markdown bullet asterisks or dashes at start of line
    .replace(/^[\*\-]\s+/gm, '• ')
    // Normalize extra line breaks
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function generateHeuristicDiagnostic(userText: string): string {
  const lower = userText.toLowerCase();

  if (lower.includes("lead") || lower.includes("sales") || lower.includes("follow-up") || lower.includes("crm")) {
    return `When looking at a lead and sales pipeline, the secret is separating what requires real human judgment from what can run on autopilot.

You want your team focused strictly on high-trust work: closing conversations, handling nuanced pricing, and building real relationships.

AI delivers the best leverage in the middle: reading incoming inquiries, qualifying intent, drafting response briefings, and scoring lead urgency so your team walks into every call prepared.

Everything else—instant sub-2-minute intake, updating HubSpot or Salesforce, generating booking links, and triggering team notifications—should be deterministic automation with zero manual copy-pasting.

Where is the biggest point of drop-off right now? Is it initial response speed when a lead comes in, or following up after a call?`;
  }

  if (lower.includes("onboard") || lower.includes("customer") || lower.includes("client") || lower.includes("intake")) {
    return `Onboarding is often where teams waste the most time on duplicate administrative work instead of delivering value.

Human judgment is essential for welcome strategy sessions, reviewing unique scope exceptions, and client relationship management.

AI can do the heavy lifting on unstructured input: summarizing messy intake forms, extracting structured data from contracts or PDFs, and generating the initial kickoff brief.

The repetitive plumbing—creating client portals, shared folders, generating initial invoices, and setting up project tracking—should happen automatically the second a contract is signed.

What is the single most repetitive task your team has to handle manually every time a new client comes on board?`;
  }

  if (lower.includes("tool") || lower.includes("software") || lower.includes("portal") || lower.includes("spreadsheet")) {
    return `Having data scattered across spreadsheets and multiple tools creates huge operational drag and human error.

Rather than buying more software, the solution is usually connecting what you already have into a clean, unified system.

We typically keep high-level business logic and approval in human hands, use AI to search internal documents or reconcile messy formats, and build fast background integrations to keep your databases in sync automatically.

How many different tools or spreadsheets is your team currently copying data between on a regular basis?`;
  }

  return `To diagnose this bottleneck properly, I look at workflows through three practical lenses:

First, where does human judgment and empathy truly belong? That is where your team should spend 90% of their energy.

Second, where can AI give you leverage? Specifically handling messy notes, unstructured inquiries, or drafting initial summaries.

Third, what plumbing can we automate completely? Webhooks, instant database syncing, and scheduled alerts that never require manual copying.

What specific tools or spreadsheets are currently involved in this process, and who on your team is spending the most time moving the data?`;
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
      return NextResponse.json({ reply: cleanHumanText(fallbackReply) });
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
You are the AI Systems & Bottleneck Diagnostic Assistant on Muhammad Abu Bakar's portfolio and business systems studio.

### How to Write (CRITICAL):
- Write in a natural, authentic, human conversational tone—like an experienced human systems engineer speaking directly to a client over a quick chat.
- ABSOLUTELY DO NOT use asterisks (**) for bolding. Never write things like "**Where Human Judgment Belongs:**" or "**Next Question:**".
- DO NOT use markdown headers (no ### or ##).
- DO NOT use rigid robotic numbered lists or template bullet points.
- Write in smooth, natural, clean paragraphs with clear spacing between thoughts.
- Sound like a real person who deeply understands business operations, automation, and software engineering.

### Muhammad's Philosophy:
- "I don't start with the technology. I start with the bottleneck."
- "Businesses don't always need more software. They often need less manual work."
- "You bring the bottleneck. I figure out the system."
- "AI is not the goal. A better-running business is."

### How to Answer:
1. Acknowledge the user's situation thoughtfully in 1-2 conversational sentences.
2. Break down the system practically: explain what parts should stay strictly human (high-trust closing/strategy), where AI provides genuine leverage (summarizing, qualifying intent, unstructured extraction), and what should be automated with deterministic code (moving data, CRM sync, notifications).
3. End with one sharp, genuine question to understand where the biggest friction lies.
4. Keep the entire message between 3 and 5 short, readable paragraphs.
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

    for (const modelName of CANDIDATE_MODELS) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: formattedHistory,
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
          }
        });

        if (response && response.text) {
          generatedReply = cleanHumanText(response.text);
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${modelName} encountered error:`, err?.message || err);
      }
    }

    if (generatedReply) {
      return NextResponse.json({ reply: generatedReply });
    }

    console.error("Gemini API fallback used. Last error:", lastError);
    const intelligentFallback = generateHeuristicDiagnostic(currentInput);
    return NextResponse.json({ reply: cleanHumanText(intelligentFallback) });

  } catch (error: any) {
    console.error("AI Assistant Route General Exception:", error);
    const defaultResponse = "When looking at any operational workflow, the key is pinpointing where your team is losing time to manual copying or delays.\n\nWhat specific tools or spreadsheets are currently involved in this process, and where does it feel slowest?";
    return NextResponse.json({ reply: defaultResponse }, { status: 200 });
  }
}

