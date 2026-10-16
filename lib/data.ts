export interface ProjectItem {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  badgeType:
    "DEMO SYSTEM" | "CONCEPT BUILD" | "CLIENT WORK" | "INDEPENDENT BUILD";
  problem: string;
  bottleneck: string;
  systemSummary: string;
  businessPurpose: string;
  workflow: {
    step: string;
    title: string;
    description: string;
    tier: "Human" | "AI-Assisted" | "Automated";
  }[];
  aiRole: string;
  automationRole: string;
  humanHandoff: string;
  integrations: string[];
  technicalStack: {
    layer: string;
    technology: string;
    purpose: string;
  }[];
  businessValue: string[];
}

export interface InsightItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
      highlight?: string;
      diagramNodes?: string[];
    }[];
    takeaway: string;
  };
}

// Existing slugs are retained. These are documented designs, not verified client deployments.
export const PROJECTS_DATA: ProjectItem[] = [
  {
    slug: "personal-engineering-studio",
    title: "Personal Engineering Studio",
    tagline:
      "A focused portfolio for websites, AI and connected business systems.",
    category: "Website Design & Development",
    badgeType: "INDEPENDENT BUILD",
    problem:
      "The original portfolio buried the offer and work beneath lengthy technical explanations. The goal was to make the services clear and the inquiry path easier to use.",
    bottleneck: "Too much explanation before visitors could find the work.",
    systemSummary:
      "A responsive Next.js portfolio with concise service pages, honest project studies, an interactive workflow and an accessible project inquiry form.",
    businessPurpose:
      "Help visitors understand the offer and start a relevant project conversation.",
    workflow: [
      {
        step: "01",
        title: "Explore the work",
        description:
          "Visitors can review the website and the labeled architecture studies.",
        tier: "Human",
      },
      {
        step: "02",
        title: "Choose a service",
        description: "Four service groups explain the offer in plain language.",
        tier: "Human",
      },
      {
        step: "03",
        title: "Prepare an inquiry",
        description:
          "The form validates essential project details and prepares an email draft when server delivery is not configured.",
        tier: "Automated",
      },
      {
        step: "04",
        title: "Discuss the scope",
        description:
          "The visitor sends the draft from their email app to start a personal conversation.",
        tier: "Human",
      },
    ],
    aiRole:
      "An optional Gemini integration offers project guidance. Without credentials, the assistant clearly labels its rule-based local replies.",
    automationRole:
      "Form validation, email-draft preparation and optional server-side webhook delivery.",
    humanHandoff:
      "Project scope, pricing and commitments remain a direct conversation with Muhammad.",
    integrations: [
      "Next.js",
      "Motion",
      "Optional Gemini API",
      "Optional contact webhook",
    ],
    technicalStack: [
      {
        layer: "Interface",
        technology: "Next.js App Router & TypeScript",
        purpose: "Server-rendered pages with small interactive components.",
      },
      {
        layer: "Design",
        technology: "CSS tokens, local Geist & Next Image",
        purpose:
          "Consistent dark surfaces, responsive media and stable typography.",
      },
      {
        layer: "Interaction",
        technology: "Motion & native browser controls",
        purpose:
          "Reduced-motion support, accessible dialogs and a replayable workflow.",
      },
      {
        layer: "Contact",
        technology: "Next.js route handlers",
        purpose:
          "Validate input and report delivery honestly; keep credentials server-side.",
      },
    ],
    businessValue: [
      "A direct offer and visible services",
      "Responsive pages and keyboard-operable interactions",
      "A shorter inquiry form with an explicit email fallback",
    ],
  },
  {
    slug: "agency-lead-operations",
    title: "Agency Lead Operations",
    tagline:
      "AI-assisted qualification, CRM updates and a clearer path to a conversation.",
    category: "Lead Automation",
    badgeType: "DEMO SYSTEM",
    problem:
      "An inquiry can lose context as it moves from a website to email, a CRM and a calendar. This study explores a single lead-handling flow for an agency.",
    bottleneck:
      "An inquiry can lose context as it moves from a website to email, a CRM and a calendar. This study explores a single lead-handling flow for an agency.",
    systemSummary:
      "An end-to-end inbound pipeline combining Next.js webhook capture, LLM-based company & budget qualification, instant CRM synchronization, and dynamic calendar routing based on deal size.",
    businessPurpose: "Collect inquiries in a consistent format",
    workflow: [
      {
        step: "01",
        title: "Inquiry Capture",
        description:
          "Multi-step web form captures company URL, core challenge, budget tier, and timeline.",
        tier: "Automated",
      },
      {
        step: "02",
        title: "AI Qualification",
        description:
          "AI agent scrapes company homepage, identifies market positioning, and scores inbound fit.",
        tier: "AI-Assisted",
      },
      {
        step: "03",
        title: "CRM Enrichment",
        description:
          "Structured deal card created in CRM with executive summary, estimated deal size, and tags.",
        tier: "Automated",
      },
      {
        step: "04",
        title: "Tiered Calendar Routing",
        description:
          "High-tier leads receive VIP calendar link with senior partner; smaller deals receive self-service audit path.",
        tier: "Automated",
      },
      {
        step: "05",
        title: "Discovery Call",
        description:
          "Sales partner leads tailored consultation using the AI-generated prospect dossier.",
        tier: "Human",
      },
    ],
    aiRole:
      "Analyzes prospect web presence, summarizes core bottleneck from free-text descriptions, and generates a 4-bullet executive briefing for the salesperson.",
    automationRole:
      "Validates email deliverability, pushes structured JSON to CRM API, triggers Slack channel notifications, and schedules follow-up nudges.",
    humanHandoff:
      "Senior sales partners take over the live consultation, pricing discussions, and relationship building.",
    integrations: [
      "Next.js React Frontend",
      "HubSpot CRM API",
      "Cal.com API",
      "Slack Webhooks",
      "Resend Email API",
      "Gemini AI Engine",
    ],
    technicalStack: [
      {
        layer: "Frontend",
        technology: "Next.js App Router & Tailwind CSS",
        purpose: "Structured project lead capture form",
      },
      {
        layer: "Backend & Logic",
        technology: "Next.js API Routes & TypeScript",
        purpose: "Webhook routing, schema validation, rate-limiting",
      },
      {
        layer: "AI Layer",
        technology: "Gemini API",
        purpose: "Real-time company analysis and prospect dossier generation",
      },
      {
        layer: "Persistence & CRM",
        technology: "PostgreSQL & HubSpot API",
        purpose:
          "Durable lead state tracking and sales pipeline synchronization",
      },
    ],
    businessValue: [
      "Collect inquiries in a consistent format",
      "Create CRM records with useful context",
      "Route booking requests using agreed rules",
    ],
  },
  {
    slug: "local-service-receptionist",
    title: "AI Receptionist",
    tagline:
      "Customer questions, service checks and booking requests in one conversation.",
    category: "AI Assistant",
    badgeType: "DEMO SYSTEM",
    problem:
      "Service businesses need a way to collect inquiries when a person is unavailable. This study explores routine answers and booking requests with a clear human handoff.",
    bottleneck:
      "Service businesses need a way to collect inquiries when a person is unavailable. This study explores routine answers and booking requests with a clear human handoff.",
    systemSummary:
      "A custom, grounded conversational assistant embedded on the company website that verifies service areas, diagnoses problem urgency, provides transparent price ranges, and schedules field technician arrivals.",
    businessPurpose:
      "Answer routine questions from approved service information",
    workflow: [
      {
        step: "01",
        title: "Customer Chat Ingestion",
        description:
          "Visitor describes their service issue in plain, conversational language.",
        tier: "Automated",
      },
      {
        step: "02",
        title: "Zip Code & Scope Check",
        description:
          "Assistant checks service radius database and validates job feasibility.",
        tier: "Automated",
      },
      {
        step: "03",
        title: "Urgency & Pricing Guidance",
        description:
          "AI identifies whether issue is emergency vs routine and quotes tiered service fees.",
        tier: "AI-Assisted",
      },
      {
        step: "04",
        title: "Dispatch Calendar Slot",
        description:
          "Customer chooses open service window; slot reserved in technician management software.",
        tier: "Automated",
      },
      {
        step: "05",
        title: "On-Site Diagnostic & Repair",
        description:
          "Certified technician arrives on site with complete problem history and customer notes.",
        tier: "Human",
      },
    ],
    aiRole:
      "Translates colloquial homeowner descriptions into technical job categories, asks clarifying questions, and ensures polite, empathetic tone.",
    automationRole:
      "Checks technician calendar availability, reserves booking slots, sends confirmation SMS, and triggers on-call alerts for true emergencies.",
    humanHandoff:
      "Certified technicians perform all physical diagnostics, safety inspections, and on-site customer service.",
    integrations: [
      "Next.js Interactive Chat UI",
      "Twilio SMS API",
      "Google Calendar / ServiceTitan",
      "PostgreSQL Service Catalog",
      "Gemini AI API",
    ],
    technicalStack: [
      {
        layer: "Frontend",
        technology: "Next.js Client Components & Motion",
        purpose: "Accessible, responsive conversational widget",
      },
      {
        layer: "Backend",
        technology: "Next.js App Router Server Endpoints",
        purpose: "Session management, vector search over service catalog",
      },
      {
        layer: "AI Model",
        technology: "Gemini API with Tool Calling",
        purpose: "Service qualification and dynamic slot lookup",
      },
      {
        layer: "Messaging",
        technology: "Twilio REST API",
        purpose: "two-way SMS confirmation for customer and dispatch team",
      },
    ],
    businessValue: [
      "Answer routine questions from approved service information",
      "Collect the details needed for a booking request",
      "Route uncertain or sensitive questions to a person",
    ],
  },
  {
    slug: "b2b-customer-onboarding",
    title: "Customer Onboarding",
    tagline:
      "Guided intake, document collection and organized project handoffs.",
    category: "Customer Operations",
    badgeType: "DEMO SYSTEM",
    problem:
      "Scattered attachments and incomplete intake forms make it difficult to know when a project is ready to start. This design brings the checklist and supporting information together.",
    bottleneck:
      "Scattered attachments and incomplete intake forms make it difficult to know when a project is ready to start. This design brings the checklist and supporting information together.",
    systemSummary:
      "A dedicated self-service onboarding portal that guides clients step-by-step, validates uploaded assets with AI OCR, creates project management workspaces automatically, and dispatches reminder nudges.",
    businessPurpose: "Make missing intake information visible",
    workflow: [
      {
        step: "01",
        title: "Welcome & Token Access",
        description:
          "Client receives magic-link access to their private branded onboarding portal.",
        tier: "Automated",
      },
      {
        step: "02",
        title: "Guided Asset Submission",
        description:
          "Step-by-step checklist prompts client for required documentation, brand assets and integration requirements.",
        tier: "Automated",
      },
      {
        step: "03",
        title: "AI Document Parsing",
        description:
          "AI validates submitted documents for required clauses, resolution requirements, and completeness.",
        tier: "AI-Assisted",
      },
      {
        step: "04",
        title: "Workspace Provisioning",
        description:
          "Linear / ClickUp project board generated with assigned team roles and pre-populated milestones.",
        tier: "Automated",
      },
      {
        step: "05",
        title: "Kickoff Strategy Meeting",
        description:
          "Account director leads focused kickoff call with the required information reviewed.",
        tier: "Human",
      },
    ],
    aiRole:
      "Inspects uploaded PDFs and spreadsheets to verify required legal fields and data formats, alerting the client immediately if an invalid file is submitted.",
    automationRole:
      "Provisions cloud folders, sets up granular client permissions, syncs milestones to calendar, and sends automated reminder emails.",
    humanHandoff:
      "Account managers and strategy leads conduct the kickoff meeting and guide all creative and consultative execution.",
    integrations: [
      "Next.js App Router Portal",
      "Linear / ClickUp API",
      "AWS S3 Asset Storage",
      "Postmark Email API",
      "Gemini AI Document Processor",
    ],
    technicalStack: [
      {
        layer: "Frontend",
        technology: "Next.js App Router (Client & Server Components)",
        purpose: "Branded multi-step onboarding checklist and upload interface",
      },
      {
        layer: "Backend",
        technology: "TypeScript Server Actions & Node.js",
        purpose: "Secure presigned upload URLs and project workspace creation",
      },
      {
        layer: "AI Verification",
        technology: "Gemini API Multimodal",
        purpose: "Automated document structure and asset verification",
      },
      {
        layer: "Database",
        technology: "PostgreSQL with Drizzle ORM",
        purpose: "Client onboarding checklist state and audit trail",
      },
    ],
    businessValue: [
      "Make missing intake information visible",
      "Organize submitted documents by project",
      "Create a workspace after the required review",
    ],
  },
  {
    slug: "knowledge-intelligence-rag",
    title: "Document Knowledge System",
    tagline:
      "Search internal documents and review answers alongside their sources.",
    category: "AI Knowledge System",
    badgeType: "CONCEPT BUILD",
    problem:
      "Teams can struggle to find current guidance across separate document stores. This concept explores retrieval with source links, access controls and a review path for conflicting information.",
    bottleneck:
      "Teams can struggle to find current guidance across separate document stores. This concept explores retrieval with source links, access controls and a review path for conflicting information.",
    systemSummary:
      "A private internal search and intelligence engine that indexes company repositories, provides grounded answers with clickable source citations, and flags conflicting policies.",
    businessPurpose: "Retrieve relevant material from approved sources",
    workflow: [
      {
        step: "01",
        title: "Continuous Doc Sync",
        description:
          "Webhook listener detects updates across Notion, Google Drive, and Markdown wikis.",
        tier: "Automated",
      },
      {
        step: "02",
        title: "Chunking & Vector Indexing",
        description:
          "Documents parsed into semantic chunks with metadata headers and embedded into pgvector.",
        tier: "Automated",
      },
      {
        step: "03",
        title: "Natural Language Query",
        description:
          'Team member asks complex question (e.g., "What is our reimbursement rule for client dinners in London?").',
        tier: "AI-Assisted",
      },
      {
        step: "04",
        title: "Grounded Answer + Citations",
        description:
          "System provides direct answer with exact paragraph citations and source document links.",
        tier: "AI-Assisted",
      },
      {
        step: "05",
        title: "SOP Maintenance",
        description:
          "Operations director reviews query analytics to identify ambiguous policies that need updating.",
        tier: "Human",
      },
    ],
    aiRole:
      "Performs semantic vector matching, synthesizes concise answers from multiple source documents, and highlights conflicting rules.",
    automationRole:
      "Re-indexes modified documents on a scheduled cron, manages embedding caches, and tracks query latency metrics.",
    humanHandoff:
      "Operations leaders author authoritative company policies and resolve conflicting business rules.",
    integrations: [
      "Next.js Search Interface",
      "pgvector / PostgreSQL",
      "Google Drive API",
      "Notion API",
      "Gemini API",
    ],
    technicalStack: [
      {
        layer: "Frontend",
        technology: "Next.js & Tailwind CSS",
        purpose: "Instant-search command palette (Cmd+K) and citation viewer",
      },
      {
        layer: "Vector Storage",
        technology: "PostgreSQL with pgvector extension",
        purpose:
          "High-performance vector embedding storage and similarity search",
      },
      {
        layer: "AI Engine",
        technology: "Gemini API & Text Embeddings",
        purpose: "Semantic retrieval and citation-backed synthesis",
      },
      {
        layer: "Ingestion Pipeline",
        technology: "Node.js Event Workers",
        purpose: "Background document parsing, cleaning, and chunking",
      },
    ],
    businessValue: [
      "Retrieve relevant material from approved sources",
      "Show source references alongside suggested answers",
      "Give policy owners a way to review gaps and conflicts",
    ],
  },
  {
    slug: "multi-channel-crm-sync",
    title: "Connected CRM Workflows",
    tagline:
      "Billing, support and sales events brought into a shared customer record.",
    category: "Workflow Automation",
    badgeType: "DEMO SYSTEM",
    problem:
      "Information about the same customer can be split across billing, support and sales tools. This design explores event-driven updates and notifications across those boundaries.",
    bottleneck:
      "Information about the same customer can be split across billing, support and sales tools. This design explores event-driven updates and notifications across those boundaries.",
    systemSummary:
      "A centralized webhook integration hub that listens for billing events, support tickets, and sales milestones, synchronizing customer health scores and statuses across every tool in real time.",
    businessPurpose: "Match external events to the correct customer",
    workflow: [
      {
        step: "01",
        title: "Multi-System Event Fire",
        description:
          "Stripe webhook (payment failure) or Zendesk ticket (high priority) triggers listener.",
        tier: "Automated",
      },
      {
        step: "02",
        title: "Account Reconciliation",
        description:
          "Data engine maps external customer ID to master PostgreSQL record.",
        tier: "Automated",
      },
      {
        step: "03",
        title: "AI Sentiment & Health Score",
        description:
          "AI reads open support ticket thread and calculates real-time account risk factor.",
        tier: "AI-Assisted",
      },
      {
        step: "04",
        title: "Cross-Tool Property Sync",
        description:
          'CRM account badge updated to "At-Risk"; automated alert posted to dedicated Slack channel.',
        tier: "Automated",
      },
      {
        step: "05",
        title: "Executive Intervention",
        description:
          "Account director calls client with full context to resolve underlying grievance.",
        tier: "Human",
      },
    ],
    aiRole:
      "Evaluates sentiment from support ticket transcripts and drafts proactive customer recovery talking points for account managers.",
    automationRole:
      "Processes webhooks idempotently, resolves customer identity across systems, updates CRM custom properties, and dispatches team alerts.",
    humanHandoff:
      "Account managers and executives conduct direct relationship recovery and commercial negotiations.",
    integrations: [
      "HubSpot CRM",
      "Stripe Billing Webhooks",
      "Zendesk Support API",
      "Slack Bot API",
      "PostgreSQL Hub",
    ],
    technicalStack: [
      {
        layer: "Integration Layer",
        technology: "Next.js Edge Handlers & Serverless Workers",
        purpose: "Idempotent webhook ingestion and payload filtering",
      },
      {
        layer: "Database",
        technology: "PostgreSQL Event Store",
        purpose: "Immutable audit log of all cross-system events",
      },
      {
        layer: "AI Evaluation",
        technology: "Gemini API",
        purpose: "Support sentiment scoring and risk categorization",
      },
      {
        layer: "Notification",
        technology: "Slack Block Kit API",
        purpose: "Rich interactive team alerts with one-click CRM deep links",
      },
    ],
    businessValue: [
      "Match external events to the correct customer",
      "Keep selected CRM fields aligned with source systems",
      "Notify an account owner when an event needs attention",
    ],
  },
  {
    slug: "custom-ops-portal",
    title: "Operations & Dispatch Portal",
    tagline:
      "A proposed workspace for assignments, approvals and inspection reports.",
    category: "Custom Software",
    badgeType: "DEMO SYSTEM",
    problem:
      "Spreadsheet-based dispatch can make assignments, permissions and report status hard to track. This study explores a shared operational workspace with separate views for each role.",
    bottleneck:
      "Spreadsheet-based dispatch can make assignments, permissions and report status hard to track. This study explores a shared operational workspace with separate views for each role.",
    systemSummary:
      "A purpose-built web application featuring role-based dashboards for dispatchers, technicians, and managers, with real-time assignment queues, automated report generation, and direct database queries.",
    businessPurpose: "Make assignments and approval status visible",
    workflow: [
      {
        step: "01",
        title: "Order Intake",
        description:
          "Customer inspection request logged via portal or API connector.",
        tier: "Automated",
      },
      {
        step: "02",
        title: "Smart Dispatch Suggestion",
        description:
          "Algorithm suggests nearest available technician based on geography and skill certifications.",
        tier: "Automated",
      },
      {
        step: "03",
        title: "Dispatcher Approval",
        description:
          "Operations manager confirms assignment or overrides with special instructions.",
        tier: "Human",
      },
      {
        step: "04",
        title: "Mobile Inspection Submission",
        description:
          "Technician inputs findings and photos on-site via responsive web interface.",
        tier: "Human",
      },
      {
        step: "05",
        title: "Automated Report Dispatch",
        description:
          "System compiles branded PDF inspection report and emails it directly to client.",
        tier: "Automated",
      },
    ],
    aiRole:
      "Drafts executive report summaries from technician field notes and highlights safety non-compliance flags automatically.",
    automationRole:
      "Calculates technician travel times, compiles high-resolution PDF deliverables, updates database records, and logs audit timestamps.",
    humanHandoff:
      "Dispatchers supervise scheduling logic; certified field technicians conduct rigorous on-site physical inspections.",
    integrations: [
      "Next.js Custom Portal",
      "PostgreSQL / Prisma",
      "AWS S3 Document Storage",
      "PDFKit Generator",
      "Resend Email Service",
    ],
    technicalStack: [
      {
        layer: "Frontend",
        technology: "Next.js App Router (TypeScript) & Tailwind CSS",
        purpose: "Fast, responsive interface with role-based routing",
      },
      {
        layer: "Backend & Data",
        technology: "Next.js Server Actions & PostgreSQL",
        purpose: "ACID-compliant transactions and atomic state updates",
      },
      {
        layer: "Document Generation",
        technology: "Node.js PDF Pipeline",
        purpose: "Dynamic branded report compilation and storage",
      },
      {
        layer: "Auth & Security",
        technology: "JWT Session Tokens with RBAC",
        purpose: "Strict data partitioning between field staff and managers",
      },
    ],
    businessValue: [
      "Make assignments and approval status visible",
      "Collect field notes and inspection attachments",
      "Prepare consistent reports for human review",
    ],
  },
];

export const INSIGHTS_DATA: InsightItem[] = [
  {
    slug: "how-to-identify-which-workflow-to-automate-first",
    title: "Choosing your first automation",
    excerpt:
      "Start with a recurring task whose rules and failure cases you understand.",
    category: "Systems Strategy",
    readTime: "2 min read",
    publishedDate: "August 2026",
    content: {
      intro:
        "The useful starting point is a real task, not a new tool. I look for repeated work with clear rules and a manageable cost if something goes wrong.",
      sections: [
        {
          heading: "Observe the work first",
          body: [
            "Write down who does the task, what information they need and how they know it is finished. Ask the people doing it where they spend time correcting or copying information.",
          ],
        },
        {
          heading: "Simplify before connecting",
          body: [
            "Remove unnecessary approvals and clarify ownership before automating the process. A workflow that is unclear to a person will also be difficult to encode in software.",
          ],
        },
        {
          heading: "Start with a bounded change",
          body: [
            "An intake checklist or internal notification can be a useful first step. Test missing inputs, duplicate events and provider failures, then compare the result with the original process.",
          ],
        },
      ],
      takeaway:
        "Choose a small, observable improvement and measure it before expanding.",
    },
  },
  {
    slug: "where-lead-follow-up-systems-break",
    title: "Where lead follow-up loses context",
    excerpt:
      "A useful customer process keeps the inquiry, owner and next action together.",
    category: "Customer Operations",
    readTime: "2 min read",
    publishedDate: "July 2026",
    content: {
      intro:
        "A website form is only the start of an inquiry. The important question is what happens to its information next, and who is responsible for responding.",
      sections: [
        {
          heading: "Give each inquiry an owner",
          body: [
            "Capture the details needed for a useful conversation and assign a responsible person. Keep the next action visible in the place that person already works.",
          ],
        },
        {
          heading: "Connect the handoffs",
          body: [
            "A CRM record, booking request and follow-up message should refer to the same inquiry. Defined rules can update those records without asking people to copy the same information again.",
          ],
        },
        {
          heading: "Keep the conversation human",
          body: [
            "AI can help summarize an inquiry, but it should not invent a budget, commitment or qualification decision. A person reviews important details and handles the actual business relationship.",
          ],
        },
      ],
      takeaway:
        "Better follow-up starts with clear ownership and preserved context.",
    },
  },
  {
    slug: "human-ai-automated-framework",
    title: "People, AI and automation",
    excerpt:
      "Three different kinds of work need three different kinds of responsibility.",
    category: "AI & Workflow Design",
    readTime: "2 min read",
    publishedDate: "June 2026",
    content: {
      intro:
        "I separate defined rules, interpretation and accountable decisions when planning a system. That makes it easier to choose useful tools and explain their limits.",
      sections: [
        {
          heading: "Use code for defined rules",
          body: [
            "Record updates, calculations and notifications belong in conventional code when the rules are known. Validate inputs and plan for failures rather than assuming an API call always succeeds.",
          ],
        },
        {
          heading: "Use AI for interpretation",
          body: [
            "A model can help categorize a message, search documents or draft a summary. Its output still needs validation and an appropriate review step for the task.",
          ],
        },
        {
          heading: "Keep judgment with people",
          body: [
            "Commercial commitments, sensitive complaints and exceptions need someone who can understand the context and take responsibility. The system should make that handoff easy.",
          ],
        },
      ],
      takeaway:
        "AI where it helps. Automation where it makes sense. People where judgment matters.",
    },
  },
  {
    slug: "why-more-saas-means-more-spreadsheets",
    title: "When more tools create more work",
    excerpt: "Review the connections before adding another platform.",
    category: "Systems Thinking",
    readTime: "2 min read",
    publishedDate: "May 2026",
    content: {
      intro:
        "A useful tool can still create extra work if it keeps important information separate from the rest of the business. Before buying another platform, trace the handoffs.",
      sections: [
        {
          heading: "Find the repeated copying",
          body: [
            "Look for exports, spreadsheet reconciliations and repeated data entry. These often reveal where a shared identifier or an integration could help.",
          ],
        },
        {
          heading: "Choose the source of truth",
          body: [
            "Decide which system owns each piece of information. A customer name, payment state and support status may have different authoritative sources.",
          ],
        },
        {
          heading: "Build only what is needed",
          body: [
            "Use existing APIs where they fit. A small internal interface may help when the process spans several tools, but it also needs maintenance and clear ownership.",
          ],
        },
      ],
      takeaway:
        "A smaller set of well-connected tools can be more useful than a larger disconnected stack.",
    },
  },
  {
    slug: "reliable-human-in-the-loop-ai",
    title: "Designing a useful human handoff",
    excerpt:
      "Make AI uncertainty visible and give the reviewer enough context to act.",
    category: "AI & Workflow Design",
    readTime: "2 min read",
    publishedDate: "April 2026",
    content: {
      intro:
        "Human review needs more than a button labeled approve. A reviewer should understand what the system proposes, what evidence supports it and what might be missing.",
      sections: [
        {
          heading: "Define the boundaries",
          body: [
            "Choose actions that always need approval and conditions that trigger escalation. Model-reported confidence alone is not a reliable safety check; combine task-specific evaluation, input validation and explicit policy rules.",
          ],
        },
        {
          heading: "Preserve the context",
          body: [
            "Show the original request, relevant sources, the suggested action and why review is needed. Let the reviewer edit or reject the proposal without losing the original information.",
          ],
        },
        {
          heading: "Learn from corrections",
          body: [
            "Review failures and corrections to improve the workflow. Store only the information needed, with appropriate permissions and retention, and evaluate changes before extending automation.",
          ],
        },
      ],
      takeaway:
        "A good handoff helps a person make an informed decision; it does not ask them to rubber-stamp an output.",
    },
  },
  {
    slug: "website-chatbot-crm-architecture",
    title: "Connecting a website, assistant and CRM",
    excerpt: "One customer journey, with clear boundaries between each tool.",
    category: "System Architecture",
    readTime: "2 min read",
    publishedDate: "March 2026",
    content: {
      intro:
        "A website can be useful on its own. When a business needs connected lead handling, the next step is to plan what information should move into its customer systems.",
      sections: [
        {
          heading: "Start with the visitor",
          body: [
            "Make the offer clear and the inquiry easy. Add an assistant only when it can answer useful questions or collect information more effectively than a simple form.",
          ],
        },
        {
          heading: "Pass useful context forward",
          body: [
            "Send the information the customer agrees to share into the appropriate record. Include ownership, validation, duplicate handling and a fallback if the integration fails.",
          ],
        },
        {
          heading: "Keep commitments explicit",
          body: [
            "A chat response is not a confirmed booking or a submitted inquiry. Show success only after the destination system accepts the action, and provide an alternative when it cannot.",
          ],
        },
      ],
      takeaway:
        "Connect the tools around a clear customer process, rather than adding integrations for their own sake.",
    },
  },
];
