export interface SystemItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  businessProblem: string;
  deliverables: string[];
  workflowStages: {
    stage: string;
    description: string;
    tier: 'Human' | 'AI-Assisted' | 'Automated';
  }[];
  aiRole: string;
  automationRole: string;
  humanRole: string;
  integrations: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  badgeType: 'DEMO SYSTEM' | 'CONCEPT BUILD' | 'CLIENT WORK';
  problem: string;
  bottleneck: string;
  systemSummary: string;
  businessPurpose: string;
  workflow: {
    step: string;
    title: string;
    description: string;
    tier: 'Human' | 'AI-Assisted' | 'Automated';
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

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const SYSTEMS_DATA: SystemItem[] = [
  {
    id: '01',
    slug: 'lead-sales-systems',
    number: '01',
    title: 'Lead & Sales Systems',
    shortDescription: 'Turn incoming interest into a structured, qualified sales pipeline that never drops a lead.',
    fullDescription: 'Most businesses do not have a lead generation problem—they have a lead handling problem. Leads arrive across web forms, emails, and chat, only to sit unresponded until a team member remembers to check. We build unified pipelines that capture, score, enrich, and route leads immediately while teeing up humans for the actual closing conversation.',
    businessProblem: 'Inconsistent response times, forgotten follow-ups, unqualified inquiries eating up sales rep calendars, and manual copying of lead data into CRM systems.',
    deliverables: [
      'Multi-channel lead capture & webhook ingestors',
      'AI-driven inquiry qualification & intent scoring',
      'Instant CRM sync & automated deduplication',
      'Contextual multi-touch follow-up triggers',
      'Automated calendar booking with pre-call briefs',
      'Instant human sales notification for high-intent deals'
    ],
    workflowStages: [
      { stage: 'Inquiry Capture', description: 'Web form, email, or chat event captured instantly via API webhook', tier: 'Automated' },
      { stage: 'AI Qualification', description: 'LLM parses intent, budget, timeline, and company profile', tier: 'AI-Assisted' },
      { stage: 'CRM Record Creation', description: 'Contact & Deal created with structured metadata in HubSpot/Pipedrive/Custom CRM', tier: 'Automated' },
      { stage: 'Intelligent Follow-Up', description: 'Personalized initial confirmation email & SMS reminder sent', tier: 'Automated' },
      { stage: 'Discovery / Close Call', description: 'Sales rep joins call equipped with synthesized prospect brief', tier: 'Human' }
    ],
    aiRole: 'Extracts structured buyer intent, filters out spam, summarizes project requirements from messy text fields, and crafts personalized outreach drafts.',
    automationRole: 'Instantly moves lead payload through webhooks, updates CRM properties, triggers calendar invitations, and handles notification webhooks.',
    humanRole: 'Conducts high-trust discovery conversations, negotiates custom terms, assesses relational fit, and closes contracts.',
    integrations: ['Next.js Webhook Engine', 'HubSpot / Pipedrive / Salesforce', 'Cal.com / Calendly', 'Resend / Postmark', 'Slack / Discord Webhooks']
  },
  {
    id: '02',
    slug: 'customer-operations',
    number: '02',
    title: 'Customer Operations',
    shortDescription: 'Connect the customer journey from first inquiry to contract, onboarding, delivery, and retention.',
    fullDescription: 'When a customer says "yes," the real operational strain begins. If onboarding requires 14 manual emails, 3 copy-pasted intake questionnaires, and scattered file requests, client confidence drops. We design seamless pipelines that automate the administrative handoff and keep customers informed without manual micro-management.',
    businessProblem: 'Disorganized client intake, delayed project kickoff, missed document collection, manual status updates, and disconnected communication across tools.',
    deliverables: [
      'Automated onboarding intake portal',
      'Document parsing & asset extraction pipelines',
      'Project management task template auto-generation',
      'Automated milestone status notifications',
      'Feedback collection & retention loops'
    ],
    workflowStages: [
      { stage: 'Payment / Agreement', description: 'Stripe or DocuSign webhook fires upon signed contract', tier: 'Automated' },
      { stage: 'Intake Portal Access', description: 'Custom portal credentials generated and welcome bundle dispatched', tier: 'Automated' },
      { stage: 'Document Validation', description: 'AI verifies submitted assets and highlights missing deliverables', tier: 'AI-Assisted' },
      { stage: 'Project Setup', description: 'Team board populated with assigned task templates and timelines', tier: 'Automated' },
      { stage: 'Kickoff & Delivery', description: 'Strategy lead conducts kickoff call and oversees custom execution', tier: 'Human' }
    ],
    aiRole: 'Parses unstructured client uploads, validates completeness of incoming questionnaires, and drafts personalized kickoff summaries.',
    automationRole: 'Creates workspaces, sets up permission roles, generates calendar milestones, and synchronizes accounting records.',
    humanRole: 'Leads project strategy, reviews creative and technical deliverables, and builds long-term client relationship equity.',
    integrations: ['Stripe Billing', 'Notion / Linear / ClickUp', 'Google Drive / AWS S3', 'Custom Next.js Portals', 'Sendgrid / Resend']
  },
  {
    id: '03',
    slug: 'ai-chatbots-assistants',
    number: '03',
    title: 'AI Chatbots & Assistants',
    shortDescription: 'Give customers and internal teams an intelligent interface grounded strictly in your real business knowledge.',
    fullDescription: 'Not another generic ChatGPT wrapper that hallucinates answers. We build domain-specific AI assistants trained strictly on your documentation, service parameters, and operational rules. They answer complex inquiries 24/7, triage support tickets, and know precisely when to hand off to a human.',
    businessProblem: 'Support queues clogged with repetitive FAQs, delayed customer response times outside business hours, and employees spending 30% of their day answering internal SOP questions.',
    deliverables: [
      'Grounded website concierge & inquiry qualifier',
      'Internal team SOP & knowledge query assistant',
      'Human handoff escalation with full chat context',
      'Multi-source document indexing (PDF, Notion, Docs)',
      'Guardrails & strict fallback logic'
    ],
    workflowStages: [
      { stage: 'User Query', description: 'Visitor or employee asks a technical or service-related question', tier: 'Automated' },
      { stage: 'Context Retrieval', description: 'Vector search retrieves verified knowledge base snippets', tier: 'Automated' },
      { stage: 'Grounded Generation', description: 'LLM crafts precise, polite answer strictly using verified facts', tier: 'AI-Assisted' },
      { stage: 'Action Execution', description: 'Assistant books meeting, collects contact info, or creates ticket', tier: 'Automated' },
      { stage: 'Human Escalation', description: 'Complex or sensitive inquiries routed to team member with summary', tier: 'Human' }
    ],
    aiRole: 'Synthesizes domain answers from verified documents, extracts structured data from conversation, and gauges sentiment.',
    automationRole: 'Performs semantic vector searches, executes API function calls, creates CRM records, and sends escalation alerts.',
    humanRole: 'Handles high-friction customer disputes, complex technical exceptions, and high-value VIP accounts.',
    integrations: ['Next.js React Server Components', 'pgvector / Supabase Vector', 'Gemini / Claude API', 'Zendesk / Intercom / Crisp', 'Slack Bot API']
  },
  {
    id: '04',
    slug: 'workflow-automation',
    number: '04',
    title: 'Workflow Automation',
    shortDescription: 'Eliminate predictable repetitive manual work and bridge disconnected software tools without human copy-pasting.',
    fullDescription: 'Your team should never be the glue between your software applications. When someone spends an hour a day copying numbers from an email into a spreadsheet, then another hour updating statuses in project management software, human error and fatigue inevitably occur. We engineer bulletproof event-driven automations that run silently in the background.',
    businessProblem: 'Double data entry, manual cross-tool copying, missed notifications, slow approval chains, and broken spreadsheet formulas running critical operations.',
    deliverables: [
      'Event-driven webhook pipelines & listeners',
      'Automated data normalization & schema transformation',
      'Multi-step approval workflows with Slack/Email actions',
      'Automated operational report generation & distribution',
      'Robust error handling, retry logic, and audit logging'
    ],
    workflowStages: [
      { stage: 'Trigger Event', description: 'New row, form submission, webhook, or scheduled cron fires', tier: 'Automated' },
      { stage: 'Data Validation', description: 'Payload sanitized, typed, and checked against business rules', tier: 'Automated' },
      { stage: 'Smart Processing', description: 'AI cleans messy fields, normalizes addresses, or categorizes expenses', tier: 'AI-Assisted' },
      { stage: 'Cross-System Sync', description: 'Updates dispatched concurrently to DB, CRM, and accounting', tier: 'Automated' },
      { stage: 'Exception Handling', description: 'Any anomalies flagged to operations manager for manual review', tier: 'Human' }
    ],
    aiRole: 'Normalizes unstructured text inputs, categorizes transactions, and drafts incident or summary digests.',
    automationRole: 'Transfers structured data, calculates metrics, triggers retries on API rate limits, and maintains audit trails.',
    humanRole: 'Reviews anomalous edge cases, approves high-value financial transactions, and modifies core business policies.',
    integrations: ['n8n / Custom Webhook Workers', 'PostgreSQL / Supabase', 'QuickBooks / Xero APIs', 'Google Workspace / Microsoft 365', 'Airtable / Notion']
  },
  {
    id: '05',
    slug: 'custom-business-software',
    number: '05',
    title: 'Custom Business Software',
    shortDescription: 'Build the software your business actually needs when off-the-shelf SaaS tools stop fitting your workflow.',
    fullDescription: 'When businesses scale, they often find themselves bending their processes to fit rigid SaaS limitations or paying thousands for bloated platforms where 80% of features go unused. We architect clean, custom web portals, internal admin panels, and operational dashboards tailored precisely to how your business runs.',
    businessProblem: 'Software subscription fatigue, fragmented workflows spread across 8 disconnected SaaS tools, inflexible interfaces, and lack of specialized business logic.',
    deliverables: [
      'Role-based internal admin dashboards & portals',
      'Custom customer & partner self-service portals',
      'Specialized business logic calculators & dispatch tools',
      'Direct database reporting without third-party middle layers',
      'Secure authentication & granular permission controls'
    ],
    workflowStages: [
      { stage: 'Secure Sign-In', description: 'Role-based authentication routes user to appropriate dashboard', tier: 'Automated' },
      { stage: 'Real-Time Data Feed', description: 'Live operational metrics queried directly from database', tier: 'Automated' },
      { stage: 'AI-Augmented Search', description: 'Instant semantic filter and natural-language query engine', tier: 'AI-Assisted' },
      { stage: 'Action Execution', description: 'One-click order fulfillment, dispatching, or bulk status updates', tier: 'Automated' },
      { stage: 'Executive Decision', description: 'Management analyzes verified operational pipeline and directs resources', tier: 'Human' }
    ],
    aiRole: 'Provides conversational database querying (natural language to SQL filters), predictive resource forecasting, and smart text summaries.',
    automationRole: 'Handles real-time data streaming, state management, transaction isolation, and scheduled batch jobs.',
    humanRole: 'Makes key strategic decisions, manages vendor relationships, and defines operational parameters.',
    integrations: ['Next.js App Router (TypeScript)', 'PostgreSQL / Prisma / Drizzle', 'Tailwind CSS Custom Design System', 'Auth.js / Firebase Auth', 'Fast & Secure REST/Server Actions']
  },
  {
    id: '06',
    slug: 'ai-knowledge-systems',
    number: '06',
    title: 'AI & Knowledge Systems',
    shortDescription: 'Transform messy company documents, contracts, and SOPs into structured intelligence and searchable assets.',
    fullDescription: 'Institutional knowledge trapped inside Google Drive folders, Notion wikis, or senior employee memory creates massive operational friction. We build custom RAG (Retrieval-Augmented Generation) and document processing pipelines that extract structured data, summarize contracts, and make your entire organizational knowledge instantly accessible.',
    businessProblem: 'Hours lost searching for technical specifications or historical files, inconsistent answers from staff to clients, and manual contract review bottlenecks.',
    deliverables: [
      'Document ingestion & OCR extraction pipelines',
      'Automated metadata tagging & structured JSON extraction',
      'Hybrid semantic + keyword vector search architectures',
      'Internal research & compliance auditing tools',
      'Continuous index synchronization with source repositories'
    ],
    workflowStages: [
      { stage: 'Document Ingestion', description: 'PDFs, DOCX, or spreadsheets uploaded via portal or synced from cloud storage', tier: 'Automated' },
      { stage: 'Chunking & Embedding', description: 'Text parsed, chunked with contextual preservation, and embedded into vector store', tier: 'Automated' },
      { stage: 'RAG Retrieval', description: 'User query pulls top-k verified chunks with citation page numbers', tier: 'AI-Assisted' },
      { stage: 'Structured Extraction', description: 'Key contractual clauses, dates, and obligations converted into database rows', tier: 'AI-Assisted' },
      { stage: 'Legal / Team Review', description: 'Specialist reviews highlighted clauses and signs off on compliance', tier: 'Human' }
    ],
    aiRole: 'Semantic embedding generation, context synthesis, contract clause extraction, and high-accuracy technical Q&A.',
    automationRole: 'File chunking, vector indexing, OCR preprocessing, database serialization, and cache management.',
    humanRole: 'Legal risk assessment, final compliance sign-off, and authoring authoritative master company policies.',
    integrations: ['Gemini 3.7 / 3.1 Pro API', 'pgvector / Pinecone / Qdrant', 'Next.js App Router', 'LangChain / Custom Pipeline', 'Google Drive / Dropbox Webhooks']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    slug: 'agency-lead-operations',
    title: 'Agency Lead Operations & Qualification Pipeline',
    tagline: 'Automated inquiry capture, scoring, CRM enrichment, and smart calendar routing for a digital growth consultancy.',
    category: 'Lead Automation',
    badgeType: 'DEMO SYSTEM',
    problem: 'The agency received 40+ inbound inquiries weekly across web forms and partner referrals. The sales lead spent 12+ hours weekly manually researching company sizes, copying info into the CRM, and sending repetitive scheduling emails.',
    bottleneck: 'Delayed response times (average 18 hours) meant high-value prospects booked meetings with competing agencies before the initial email was even sent.',
    systemSummary: 'An end-to-end inbound pipeline combining Next.js webhook capture, LLM-based company & budget qualification, instant CRM synchronization, and dynamic calendar routing based on deal size.',
    businessPurpose: 'To reduce lead response time from hours to seconds while ensuring the sales team only spends calendar time on qualified buyers.',
    workflow: [
      { step: '01', title: 'Inquiry Capture', description: 'Multi-step web form captures company URL, core challenge, budget tier, and timeline.', tier: 'Automated' },
      { step: '02', title: 'AI Qualification', description: 'AI agent scrapes company homepage, identifies market positioning, and scores inbound fit.', tier: 'AI-Assisted' },
      { step: '03', title: 'CRM Enrichment', description: 'Structured deal card created in CRM with executive summary, estimated deal size, and tags.', tier: 'Automated' },
      { step: '04', title: 'Tiered Calendar Routing', description: 'High-tier leads receive VIP calendar link with senior partner; smaller deals receive self-service audit path.', tier: 'Automated' },
      { step: '05', title: 'Discovery Call', description: 'Sales partner leads tailored consultation using the AI-generated prospect dossier.', tier: 'Human' }
    ],
    aiRole: 'Analyzes prospect web presence, summarizes core bottleneck from free-text descriptions, and generates a 4-bullet executive briefing for the salesperson.',
    automationRole: 'Validates email deliverability, pushes structured JSON to CRM API, triggers Slack channel notifications, and schedules follow-up nudges.',
    humanHandoff: 'Senior sales partners take over 100% of the live consultation, pricing discussions, and relationship building.',
    integrations: ['Next.js React Frontend', 'HubSpot CRM API', 'Cal.com API', 'Slack Webhooks', 'Resend Email API', 'Gemini AI Engine'],
    technicalStack: [
      { layer: 'Frontend', technology: 'Next.js App Router & Tailwind CSS', purpose: 'High-converting interactive diagnostic lead capture form' },
      { layer: 'Backend & Logic', technology: 'Next.js API Routes & TypeScript', purpose: 'Webhook routing, schema validation, rate-limiting' },
      { layer: 'AI Layer', technology: 'Gemini 3.7 Flash', purpose: 'Real-time company analysis and prospect dossier generation' },
      { layer: 'Persistence & CRM', technology: 'PostgreSQL & HubSpot API', purpose: 'Durable lead state tracking and sales pipeline synchronization' }
    ],
    businessValue: [
      'Eliminated manual CRM data entry for every incoming lead',
      'Cut initial lead response time from 18 hours to under 45 seconds',
      'Equipped sales representatives with comprehensive prospect research before every call',
      'Prevented calendar clutter by filtering low-intent spam inquiries automatically'
    ]
  },
  {
    slug: 'local-service-receptionist',
    title: 'AI Receptionist & Booking System for Service Businesses',
    tagline: '24/7 grounded conversational assistant that qualifies job scopes, quotes price estimates, and books field technicians.',
    category: 'AI Assistant',
    badgeType: 'DEMO SYSTEM',
    problem: 'A high-volume home services contractor was losing after-hours leads and weekend emergencies because staff could only answer phone calls during standard 9-5 business hours.',
    bottleneck: 'Prospective clients with urgent plumbing and HVAC issues immediately clicked the next competitor when no one answered their initial web chat or after-hours inquiry.',
    systemSummary: 'A custom, grounded conversational assistant embedded on the company website that verifies service areas, diagnoses problem urgency, provides transparent price ranges, and schedules field technician arrivals.',
    businessPurpose: 'To capture and qualify high-margin after-hours service requests 24/7 without hiring an expensive overnight call center.',
    workflow: [
      { step: '01', title: 'Customer Chat Ingestion', description: 'Visitor describes their service issue in plain, conversational language.', tier: 'Automated' },
      { step: '02', title: 'Zip Code & Scope Check', description: 'Assistant checks service radius database and validates job feasibility.', tier: 'Automated' },
      { step: '03', title: 'Urgency & Pricing Guidance', description: 'AI identifies whether issue is emergency vs routine and quotes tiered service fees.', tier: 'AI-Assisted' },
      { step: '04', title: 'Dispatch Calendar Slot', description: 'Customer chooses open service window; slot reserved in technician management software.', tier: 'Automated' },
      { step: '05', title: 'On-Site Diagnostic & Repair', description: 'Certified technician arrives on site with complete problem history and customer notes.', tier: 'Human' }
    ],
    aiRole: 'Translates colloquial homeowner descriptions into technical job categories, asks clarifying questions, and ensures polite, empathetic tone.',
    automationRole: 'Checks technician calendar availability, reserves booking slots, sends confirmation SMS, and triggers on-call alerts for true emergencies.',
    humanHandoff: 'Certified technicians perform all physical diagnostics, safety inspections, and on-site customer service.',
    integrations: ['Next.js Interactive Chat UI', 'Twilio SMS API', 'Google Calendar / ServiceTitan', 'PostgreSQL Service Catalog', 'Gemini AI API'],
    technicalStack: [
      { layer: 'Frontend', technology: 'Next.js Client Components & Framer Motion', purpose: 'Accessible, responsive conversational widget' },
      { layer: 'Backend', technology: 'Next.js App Router Server Endpoints', purpose: 'Session management, vector search over service catalog' },
      { layer: 'AI Model', technology: 'Gemini 3.7 Flash with Tool Calling', purpose: 'Service qualification and dynamic slot lookup' },
      { layer: 'Messaging', technology: 'Twilio REST API', purpose: 'Instant two-way SMS confirmation for customer and dispatch team' }
    ],
    businessValue: [
      'Captured 100% of after-hours emergency inquiries that previously went to voicemail',
      'Saved office staff over 20 hours per week of phone scheduling back-and-forth',
      'Provided field technicians with structured diagnostic notes before arriving at the job site',
      'Delivered instantaneous response times with zero wait queue'
    ]
  },
  {
    slug: 'b2b-customer-onboarding',
    title: 'Automated Customer Onboarding & Intake Hub',
    tagline: 'Streamlined client intake portal with AI document validation, project workspace provisioning, and milestone tracking.',
    category: 'Customer Operations',
    badgeType: 'DEMO SYSTEM',
    problem: 'A professional services firm had an onboarding process requiring new clients to submit 8 distinct legal, financial, and brand assets across scattered email threads.',
    bottleneck: 'Project kickoffs were delayed by an average of 14 days because team members spent days following up on missing files, wrong formats, and incomplete questionnaires.',
    systemSummary: 'A dedicated self-service onboarding portal that guides clients step-by-step, validates uploaded assets with AI OCR, creates project management workspaces automatically, and dispatches reminder nudges.',
    businessPurpose: 'To reduce the time between contract signing and project kickoff from two weeks to under 48 hours.',
    workflow: [
      { step: '01', title: 'Welcome & Token Access', description: 'Client receives magic-link access to their private branded onboarding portal.', tier: 'Automated' },
      { step: '02', title: 'Guided Asset Submission', description: 'Step-by-step checklist prompts client for required documentation, brand assets, and API keys.', tier: 'Automated' },
      { step: '03', title: 'AI Document Parsing', description: 'AI validates submitted documents for required clauses, resolution requirements, and completeness.', tier: 'AI-Assisted' },
      { step: '04', title: 'Workspace Provisioning', description: 'Linear / ClickUp project board generated with assigned team roles and pre-populated milestones.', tier: 'Automated' },
      { step: '05', title: 'Kickoff Strategy Meeting', description: 'Account director leads focused kickoff call with 100% of prerequisites already completed.', tier: 'Human' }
    ],
    aiRole: 'Inspects uploaded PDFs and spreadsheets to verify required legal fields and data formats, alerting the client immediately if an invalid file is submitted.',
    automationRole: 'Provisions cloud folders, sets up granular client permissions, syncs milestones to calendar, and sends automated reminder emails.',
    humanHandoff: 'Account managers and strategy leads conduct the kickoff meeting and guide all creative and consultative execution.',
    integrations: ['Next.js App Router Portal', 'Linear / ClickUp API', 'AWS S3 Asset Storage', 'Postmark Email API', 'Gemini AI Document Processor'],
    technicalStack: [
      { layer: 'Frontend', technology: 'Next.js App Router (Client & Server Components)', purpose: 'Branded multi-step onboarding checklist and upload interface' },
      { layer: 'Backend', technology: 'TypeScript Server Actions & Node.js', purpose: 'Secure presigned upload URLs and project workspace creation' },
      { layer: 'AI Verification', technology: 'Gemini 3.7 Flash Multimodal', purpose: 'Automated document structure and asset verification' },
      { layer: 'Database', technology: 'PostgreSQL with Drizzle ORM', purpose: 'Client onboarding checklist state and audit trail' }
    ],
    businessValue: [
      'Reduced average onboarding completion time from 14 days down to 36 hours',
      'Eliminated lost attachments and fragmented email communication',
      'Standardized project board setup across all delivery teams',
      'Created an immediate impression of high competence for new high-ticket clients'
    ]
  },
  {
    slug: 'knowledge-intelligence-rag',
    title: 'Enterprise SOP & Document Retrieval Engine',
    tagline: 'Internal retrieval-augmented generation (RAG) system connecting company handbooks, compliance policies, and technical wikis.',
    category: 'AI Knowledge System',
    badgeType: 'CONCEPT BUILD',
    problem: 'A 60-person distributed consulting team struggled to locate verified procedural guidelines across 400+ scattered Notion pages, Google Docs, and PDF contracts.',
    bottleneck: 'Junior staff spent 45 minutes per day asking senior leads repetitive procedural questions or relying on outdated, cached policy documents.',
    systemSummary: 'A private internal search and intelligence engine that indexes company repositories, provides grounded answers with clickable source citations, and flags conflicting policies.',
    businessPurpose: 'To give every team member instant access to verified company knowledge without interrupting senior managers.',
    workflow: [
      { step: '01', title: 'Continuous Doc Sync', description: 'Webhook listener detects updates across Notion, Google Drive, and Markdown wikis.', tier: 'Automated' },
      { step: '02', title: 'Chunking & Vector Indexing', description: 'Documents parsed into semantic chunks with metadata headers and embedded into pgvector.', tier: 'Automated' },
      { step: '03', title: 'Natural Language Query', description: 'Team member asks complex question (e.g., "What is our reimbursement rule for client dinners in London?").', tier: 'AI-Assisted' },
      { step: '04', title: 'Grounded Answer + Citations', description: 'System provides direct answer with exact paragraph citations and source document links.', tier: 'AI-Assisted' },
      { step: '05', title: 'SOP Maintenance', description: 'Operations director reviews query analytics to identify ambiguous policies that need updating.', tier: 'Human' }
    ],
    aiRole: 'Performs semantic vector matching, synthesizes concise answers from multiple source documents, and highlights conflicting rules.',
    automationRole: 'Re-indexes modified documents on a scheduled cron, manages embedding caches, and tracks query latency metrics.',
    humanHandoff: 'Operations leaders author authoritative company policies and resolve conflicting business rules.',
    integrations: ['Next.js Search Interface', 'pgvector / PostgreSQL', 'Google Drive API', 'Notion API', 'Gemini 3.7 Flash'],
    technicalStack: [
      { layer: 'Frontend', technology: 'Next.js & Tailwind CSS', purpose: 'Instant-search command palette (Cmd+K) and citation viewer' },
      { layer: 'Vector Storage', technology: 'PostgreSQL with pgvector extension', purpose: 'High-performance vector embedding storage and similarity search' },
      { layer: 'AI Engine', technology: 'Gemini 3.7 Flash & Text Embeddings', purpose: 'Semantic retrieval and citation-backed synthesis' },
      { layer: 'Ingestion Pipeline', technology: 'Node.js Event Workers', purpose: 'Background document parsing, cleaning, and chunking' }
    ],
    businessValue: [
      'Eliminated hours of redundant internal questions directed at senior leaders',
      'Guaranteed team compliance with the most recent, authoritative company SOPs',
      'Enabled rapid onboarding of new hires with zero training lag',
      'Maintained 100% auditability through clickable source document citations'
    ]
  },
  {
    slug: 'multi-channel-crm-sync',
    title: 'Multi-Channel CRM Synchronization & Auto-Enrichment',
    tagline: 'Event-driven integration linking web forms, Stripe transactions, support tickets, and sales pipelines into one single source of truth.',
    category: 'Workflow Automation',
    badgeType: 'DEMO SYSTEM',
    problem: 'Sales, finance, and customer support operated in total silos. Sales reps had no visibility into active billing disputes, while support agents had no context on upcoming contract renewals.',
    bottleneck: 'Cross-department miscommunication resulted in embarrassing sales outreach to unhappy customers and hours spent manually reconciling payment records with CRM statuses.',
    systemSummary: 'A centralized webhook integration hub that listens for billing events, support tickets, and sales milestones, synchronizing customer health scores and statuses across every tool in real time.',
    businessPurpose: 'To maintain a real-time, unified 360-degree view of every customer account across sales, support, and finance.',
    workflow: [
      { step: '01', title: 'Multi-System Event Fire', description: 'Stripe webhook (payment failure) or Zendesk ticket (high priority) triggers listener.', tier: 'Automated' },
      { step: '02', title: 'Account Reconciliation', description: 'Data engine maps external customer ID to master PostgreSQL record.', tier: 'Automated' },
      { step: '03', title: 'AI Sentiment & Health Score', description: 'AI reads open support ticket thread and calculates real-time account risk factor.', tier: 'AI-Assisted' },
      { step: '04', title: 'Cross-Tool Property Sync', description: 'CRM account badge updated to "At-Risk"; automated alert posted to dedicated Slack channel.', tier: 'Automated' },
      { step: '05', title: 'Executive Intervention', description: 'Account director calls client with full context to resolve underlying grievance.', tier: 'Human' }
    ],
    aiRole: 'Evaluates sentiment from support ticket transcripts and drafts proactive customer recovery talking points for account managers.',
    automationRole: 'Processes webhooks idempotently, resolves customer identity across systems, updates CRM custom properties, and dispatches team alerts.',
    humanHandoff: 'Account managers and executives conduct direct relationship recovery and commercial negotiations.',
    integrations: ['HubSpot CRM', 'Stripe Billing Webhooks', 'Zendesk Support API', 'Slack Bot API', 'PostgreSQL Hub'],
    technicalStack: [
      { layer: 'Integration Layer', technology: 'Next.js Edge Handlers & Serverless Workers', purpose: 'Idempotent webhook ingestion and payload filtering' },
      { layer: 'Database', technology: 'PostgreSQL Event Store', purpose: 'Immutable audit log of all cross-system events' },
      { layer: 'AI Evaluation', technology: 'Gemini 3.7 Flash', purpose: 'Support sentiment scoring and risk categorization' },
      { layer: 'Notification', technology: 'Slack Block Kit API', purpose: 'Rich interactive team alerts with one-click CRM deep links' }
    ],
    businessValue: [
      'Eliminated duplicate records and conflicting customer statuses across departments',
      'Prevented accidental upsell emails to clients experiencing active support issues',
      'Reduced churn by alerting account managers to dissatisfaction before renewal dates',
      'Provided leadership with real-time customer lifetime value and health analytics'
    ]
  },
  {
    slug: 'custom-ops-portal',
    title: 'Unified Operations & Task Dispatch Dashboard',
    tagline: 'Custom operational control panel replacing fragile spreadsheets with structured task routing, role-based permissions, and live metrics.',
    category: 'Custom Software',
    badgeType: 'DEMO SYSTEM',
    problem: 'A growing logistics and inspection team was managing daily task assignments, technician scheduling, and report deliveries across three 50-tab Google Sheets that crashed frequently.',
    bottleneck: 'Accidental formula overwrites, lack of access controls, and slow spreadsheet loading caused dispatch errors and delayed customer report turnaround times.',
    systemSummary: 'A purpose-built web application featuring role-based dashboards for dispatchers, technicians, and managers, with real-time assignment queues, automated report generation, and direct database queries.',
    businessPurpose: 'To replace unstable spreadsheets with a reliable, scalable internal platform built specifically around the company\'s operational workflow.',
    workflow: [
      { step: '01', title: 'Order Intake', description: 'Customer inspection request logged via portal or API connector.', tier: 'Automated' },
      { step: '02', title: 'Smart Dispatch Suggestion', description: 'Algorithm suggests nearest available technician based on geography and skill certifications.', tier: 'Automated' },
      { step: '03', title: 'Dispatcher Approval', description: 'Operations manager confirms assignment or overrides with special instructions.', tier: 'Human' },
      { step: '04', title: 'Mobile Inspection Submission', description: 'Technician inputs findings and photos on-site via responsive web interface.', tier: 'Human' },
      { step: '05', title: 'Automated Report Dispatch', description: 'System compiles branded PDF inspection report and emails it directly to client.', tier: 'Automated' }
    ],
    aiRole: 'Drafts executive report summaries from technician field notes and highlights safety non-compliance flags automatically.',
    automationRole: 'Calculates technician travel times, compiles high-resolution PDF deliverables, updates database records, and logs audit timestamps.',
    humanHandoff: 'Dispatchers supervise scheduling logic; certified field technicians conduct rigorous on-site physical inspections.',
    integrations: ['Next.js Custom Portal', 'PostgreSQL / Prisma', 'AWS S3 Document Storage', 'PDFKit Generator', 'Resend Email Service'],
    technicalStack: [
      { layer: 'Frontend', technology: 'Next.js App Router (TypeScript) & Tailwind CSS', purpose: 'Fast, responsive interface with role-based routing' },
      { layer: 'Backend & Data', technology: 'Next.js Server Actions & PostgreSQL', purpose: 'ACID-compliant transactions and atomic state updates' },
      { layer: 'Document Generation', technology: 'Node.js PDF Pipeline', purpose: 'Dynamic branded report compilation and storage' },
      { layer: 'Auth & Security', technology: 'JWT Session Tokens with RBAC', purpose: 'Strict data partitioning between field staff and managers' }
    ],
    businessValue: [
      'Eliminated 100% of spreadsheet crashes and corrupted formula incidents',
      'Cut daily dispatch scheduling time by over 60%',
      'Standardized inspection deliverables into professional branded PDF packages',
      'Gave company leadership real-time visibility into operational bottlenecks and technician capacity'
    ]
  }
];

export const INSIGHTS_DATA: InsightItem[] = [
  {
    slug: 'how-to-identify-which-workflow-to-automate-first',
    title: 'How to Identify the Best Business Process to Automate First',
    excerpt: 'Before touching any software, you must distinguish between high-leverage bottlenecks and shiny distractions. Here is the operational framework I use to audit workflows.',
    category: 'Systems Strategy',
    readTime: '6 min read',
    publishedDate: 'August 2026',
    content: {
      intro: 'When business owners decide they want to "automate their operations," their first instinct is often to pick the most complex, glamorous process in the company. This is almost always a mistake. Successful systems engineering starts with friction density, not technological novelty.',
      sections: [
        {
          heading: '1. The 3 Criteria of a High-Leverage Bottleneck',
          body: [
            'A high-leverage candidate for automation meets three specific criteria: high frequency, predictable logic, and painful delay costs.',
            'If a task happens once a quarter, automating it yields negligible return. But if a team member spends 45 minutes every morning copying invoice details from emails into a CRM, that single point of friction costs hundreds of hours annually and introduces constant human error.',
            'Look for processes where the rules are clear ("When X happens, always do Y and Z"), but humans are currently acting as the manual data bridge.'
          ],
          highlight: 'Rule: If the decision-making rules can be written down on an index card without ambiguity, it should not be performed by a human.'
        },
        {
          heading: '2. The Danger of Automating Broken Workflows',
          body: [
            'Automating an inefficient, disorganized workflow simply allows you to produce bad outcomes at a much higher speed.',
            'Before writing a single API connector or configuring an automation webhook, you must map the current reality of the process. Who touches it? Where does information stall? What happens when an edge case occurs?',
            'Only once the human process has been clarified and stripped of unnecessary steps should software be introduced.'
          ],
          diagramNodes: ['Map Current Reality', 'Strip Redundancies', 'Define Rules', 'Automate Pipeline', 'Monitor & Iterate']
        },
        {
          heading: '3. Starting With Low-Risk, High-Visibility Wins',
          body: [
            'The ideal starting point is a workflow that is critical enough that its improvement is immediately felt by the team, but bounded enough that it carries low operational risk.',
            'Examples include automated lead notifications, customer intake checklist generation, or instant cross-tool CRM syncing.',
            'These foundational wins build team trust in systems and establish the data architecture required for more sophisticated AI-assisted workflows later.'
          ]
        }
      ],
      takeaway: 'Never start by asking "What can we automate?" Start by asking "Where is my team spending the most hours doing work that requires zero human judgment?"'
    }
  },
  {
    slug: 'where-lead-follow-up-systems-break',
    title: 'Where Lead Follow-Up Systems Break (And Why More Tools Won\'t Fix It)',
    excerpt: 'Buying another sales tool or subscribing to another AI email generator won\'t fix your pipeline if your lead architecture is fundamentally fragmented.',
    category: 'Sales Operations',
    readTime: '5 min read',
    publishedDate: 'July 2026',
    content: {
      intro: 'Most companies that believe they have a "lead generation problem" actually have a lead handling problem. They invest thousands in paid acquisition or SEO, only to allow high-intent inquiries to sit in an inbox queue for 14 hours while a competitor responds in 60 seconds.',
      sections: [
        {
          heading: '1. The Four Points of Lead Decay',
          body: [
            'Inbound leads decay along four predictable fault lines: Ingestion Lag, Qualification Paralysis, CRM Disconnection, and Follow-Up Inconsistency.',
            'Ingestion Lag happens when web forms send simple email notifications instead of triggering instant webhook pipelines. Qualification Paralysis occurs when sales reps must spend 15 minutes manually researching whether a lead is worth calling. CRM Disconnection happens when lead data lives in an inbox rather than a structured database.',
            'Finally, Follow-Up Inconsistency occurs when secondary outreach depends entirely on individual salesperson memory rather than automated multi-touch sequences.'
          ]
        },
        {
          heading: '2. Architecture of a Modern Inbound Engine',
          body: [
            'A resilient lead system connects your website, qualification engine, CRM, and calendar into a single, unified pipeline.',
            'When a prospect submits an inquiry, an API webhook immediately triggers an AI qualification step. The system enriches the prospect profile, creates the CRM record, and dispatches a personalized calendar booking link tailored to the lead\'s specific budget tier.',
            'If the lead books, the sales rep receives an executive dossier 10 minutes before the call. If they do not book, a structured, contextual follow-up sequence triggers automatically.'
          ],
          diagramNodes: ['Web Inquiry', 'Webhook Ingest', 'AI Intent Score', 'CRM Sync', 'Dynamic Calendar', 'Sales Call Brief']
        },
        {
          heading: '3. What Stays Human vs What Goes Automated',
          body: [
            'Automation should handle the speed and the plumbing: capturing data, enriching fields, creating records, and dispatching links.',
            'Humans should handle the relationship: conducting the discovery call, building emotional trust, understanding nuanced organizational politics, and negotiating custom scopes.',
            'When you free your sales team from administrative data entry, their closing rates improve dramatically because 100% of their energy is spent on active conversations.'
          ]
        }
      ],
      takeaway: 'Speed to lead is not about working faster; it is about building a system that acts instantaneously before a human even opens their laptop.'
    }
  },
  {
    slug: 'human-ai-automated-framework',
    title: 'The 3-Tier Rule: What to Keep Human, Where AI Assists, and What to Automate',
    excerpt: 'The biggest mistake companies make with AI is attempting to replace human judgment with probabilistic models. Here is the operational framework to divide work properly.',
    category: 'AI Architecture',
    readTime: '7 min read',
    publishedDate: 'June 2026',
    content: {
      intro: 'The current wave of AI hype encourages businesses to believe they can automate entire operations with a single prompt. In reality, reliable business engineering requires strict boundaries between deterministic automation, probabilistic AI assistance, and irreplaceable human judgment.',
      sections: [
        {
          heading: '1. Tier 1: Deterministic Automation (Zero AI)',
          body: [
            'If a process follows strict logic without ambiguity, do NOT use AI. Use standard code and APIs.',
            'Examples: Moving data from a webhook into PostgreSQL, sending an order confirmation email upon payment success, or creating a calendar event.',
            'Using an LLM for tasks that require 100% deterministic accuracy is expensive, slow, and introduces unnecessary failure points.'
          ],
          highlight: 'Rule: Use traditional code for plumbing, database transactions, and standard API calls. Save AI for unstructured cognitive tasks.'
        },
        {
          heading: '2. Tier 2: AI-Assisted Intelligence (Probabilistic Reasoning)',
          body: [
            'AI excels where inputs are messy, unstructured, or require qualitative synthesis.',
            'Examples: Reading a 3-paragraph customer email and categorizing buyer urgency, parsing an uploaded PDF contract for specific liability clauses, or drafting a customized response based on internal documentation.',
            'In Tier 2, AI produces a structured output or recommendation, but operates within tightly defined schemas and guardrails.'
          ]
        },
        {
          heading: '3. Tier 3: Human Judgment (High Trust & Empathy)',
          body: [
            'Humans must remain in the driver\'s seat wherever relational trust, ethical judgment, strategic nuance, or financial accountability are at stake.',
            'Examples: Final contract sign-off, handling sensitive client disputes, setting company pricing strategy, and conducting high-ticket sales discovery.',
            'The goal of systems engineering is never to remove humans; it is to remove the low-value administrative noise surrounding them so they can focus on high-impact judgment.'
          ],
          diagramNodes: ['Automated: Data & Sync', 'AI-Assisted: Synthesis & Routing', 'Human: Judgment & Trust']
        }
      ],
      takeaway: 'A well-designed system uses code for the skeleton, AI for the senses, and humans for the heart.'
    }
  },
  {
    slug: 'why-more-saas-means-more-spreadsheets',
    title: 'Why Adding More SaaS Tools Creates More Manual Spreadsheet Work',
    excerpt: 'The "SaaS paradox": why subscribing to 15 best-of-breed software platforms usually results in your team building more shadow spreadsheets to glue them together.',
    category: 'Systems Thinking',
    readTime: '5 min read',
    publishedDate: 'May 2026',
    content: {
      intro: 'Modern software companies have sold businesses on the idea that there is a dedicated SaaS tool for every micro-problem in your organization. Yet as companies grow from 3 tools to 20, their operational chaos often multiplies instead of diminishes.',
      sections: [
        {
          heading: '1. The Fragmentation Tax',
          body: [
            'Every time you introduce a new isolated tool—a separate booking app, a separate proposal tool, a separate project manager, a separate invoice portal—you create data silos.',
            'Because these tools don\'t talk to each other out of the box, employees become human integration scripts. They spend hours downloading CSVs from Tool A, reformatting columns, and uploading them into Tool B.',
            'When that becomes too cumbersome, someone inevitably creates a "master Google Sheet" to track the real state of the business.'
          ]
        },
        {
          heading: '2. The Illusion of Feature Completeness',
          body: [
            'Off-the-shelf software is designed to appeal to the broadest possible market. As a result, 80% of the features in a generic SaaS product are irrelevant to your business, while the 20% of specialized logic unique to your competitive advantage is completely unsupported.',
            'Your team is forced to bend your actual business processes to fit the rigid data models of someone else\'s software.'
          ]
        },
        {
          heading: '3. The Solution: Connected Hubs and Purpose-Built Software',
          body: [
            'Instead of adding more disconnected SaaS subscriptions, successful businesses build unified integration layers or purpose-built internal portals.',
            'By establishing a single source of truth in a clean database and connecting existing tools via event-driven webhooks, you eliminate shadow spreadsheets and give leadership real-time visibility into operations.'
          ]
        }
      ],
      takeaway: 'You do not need more software. You need your existing systems to communicate through clean, automated pipelines.'
    }
  },
  {
    slug: 'reliable-human-in-the-loop-ai',
    title: 'Designing Reliable Human-in-the-Loop AI Systems',
    excerpt: 'How to build AI agents that take autonomous action when confident, but seamlessly escalate to human operators when uncertainty arises.',
    category: 'AI Architecture',
    readTime: '6 min read',
    publishedDate: 'April 2026',
    content: {
      intro: 'The biggest barrier to deploying AI in production business workflows is not model intelligence—it is reliability. If an autonomous agent makes a mistake in 2% of customer interactions, that 2% can cause catastrophic reputational or financial damage. The solution is rigorous Human-in-the-Loop (HITL) system design.',
      sections: [
        {
          heading: '1. The Confidence Threshold Pattern',
          body: [
            'Every AI step in a production workflow must output a confidence score alongside its structured response.',
            'If the model\'s confidence exceeds a predetermined threshold (e.g. 95%) and passes strict schema validation rules, the system executes the next automated action immediately.',
            'If the confidence drops below the threshold, or if sensitive keywords (e.g. "cancel contract", "lawyer", "refund") are detected, the system pauses execution and routes a synthesized briefing to a human queue.'
          ]
        },
        {
          heading: '2. Zero-Friction Escalation Interfaces',
          body: [
            'When an AI hands work to a human, it must not simply dump a raw conversation log. It must provide context: What was the user trying to accomplish? What information was already gathered? Why did the AI escalate? What are two suggested actions the human can approve with a single click?',
            'This allows the human operator to resolve the issue in 10 seconds rather than spending 5 minutes reading through message history.'
          ],
          diagramNodes: ['User Input', 'AI Evaluation', 'Confidence Check (>95%?)', 'Automated Action / Human Review Queue', 'One-Click Operator Approval']
        },
        {
          heading: '3. The Feedback Flywheel',
          body: [
            'Every time a human operator approves, edits, or overrides an AI suggestion, that interaction is logged as training data.',
            'Over time, this continuous operational feedback allows you to refine system prompts, update few-shot examples, and safely expand the autonomous boundaries of the system.'
          ]
        }
      ],
      takeaway: 'Human-in-the-loop is not a temporary compromise while waiting for AI to get better; it is the permanent architectural foundation of enterprise-grade reliability.'
    }
  },
  {
    slug: 'website-chatbot-crm-architecture',
    title: 'The Modern Lead Architecture: Website + AI + CRM as One System',
    excerpt: 'Why treating your website as an isolated marketing brochure is outdated, and how to architect it as the front door of your operational engine.',
    category: 'System Architecture',
    readTime: '5 min read',
    publishedDate: 'March 2026',
    content: {
      intro: 'Traditionally, a company\'s website was designed by a marketing agency, while their CRM was configured by a sales consultant, and their customer onboarding was managed by operations. In 2026, treating these as three separate islands is a massive competitive disadvantage.',
      sections: [
        {
          heading: '1. The Website as an Interactive Operational Interface',
          body: [
            'A modern website should not just be passive text. It should act as an intelligent intake interface that diagnoses visitor needs, qualifies buyer intent in real time, and answers complex technical questions using grounded knowledge retrieval.',
            'Every interaction on the frontend should emit structured events that feed directly into downstream operational pipelines.'
          ]
        },
        {
          heading: '2. The Unbroken Data Chain',
          body: [
            'When a visitor interacts with a grounded AI assistant on your website, that conversation should not disappear into a closed chat widget.',
            'Key data points—budget, company size, timeline, specific pain points—should be extracted into structured JSON and pushed directly into the CRM deal record.',
            'When the salesperson opens the lead record, they don\'t see a generic form submission; they see an actionable customer briefing compiled before the first phone call.'
          ]
        }
      ],
      takeaway: 'The highest-performing companies don\'t build websites. They build integrated business frontends that connect directly into their core operating machinery.'
    }
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do you know what to automate?',
    answer: 'We audit the workflow before writing a line of code. The best candidates for automation meet three criteria: high repetition, deterministic logic (if X happens, always do Y), and significant manual time cost. Tasks that require emotional nuance, high-stakes negotiation, or strategic judgment remain human.',
    category: 'Strategy & AI'
  },
  {
    id: 'faq-2',
    question: 'When should we NOT use AI?',
    answer: 'You should avoid AI whenever standard code or database queries can do the job reliably. AI is probabilistic; if you need 100% mathematical precision (like calculating sales tax or updating billing records), deterministic code is mandatory. AI is only used where unstructured data needs interpretation, synthesis, or semantic reasoning.',
    category: 'Strategy & AI'
  },
  {
    id: 'faq-3',
    question: 'Can you work with our existing tools and software?',
    answer: 'Yes. Wherever your tools offer reliable APIs or webhook listeners (such as HubSpot, Salesforce, Stripe, Notion, Linear, Google Workspace, Slack, QuickBooks), we integrate directly into your current tech stack rather than forcing disruptive migrations.',
    category: 'Integrations & Tools'
  },
  {
    id: 'faq-4',
    question: 'What happens if an automation breaks or an API changes?',
    answer: 'All our production workflows are built with idempotent retries, comprehensive error trapping, dead-letter logging, and immediate alert notifications. If an external API fails, the system logs the exact payload, preserves the transaction, and alerts our monitoring channels without dropping customer data.',
    category: 'Reliability & Security'
  },
  {
    id: 'faq-5',
    question: 'Do you build custom software or use existing platforms?',
    answer: 'Both, depending on what solves the problem best. For standard connections between existing SaaS tools, we use lightweight event pipelines. When off-the-shelf software cannot fit your business logic, we architect custom Next.js web portals and PostgreSQL databases.',
    category: 'Integrations & Tools'
  },
  {
    id: 'faq-6',
    question: 'How long does a typical system build take?',
    answer: 'A focused automation win (e.g. lead qualification and CRM pipeline) typically takes 1 to 2 weeks. Comprehensive connected operations or custom software portals range from 3 to 6 weeks from diagnostic mapping to production launch.',
    category: 'Timeline & Engagement'
  },
  {
    id: 'faq-7',
    question: 'What does the ongoing relationship look like after launch?',
    answer: 'We provide active monitoring, bug fixes, and optimization retainers. As your business grows and your workflows evolve, we iterate on the systems to ensure they scale smoothly with your volume.',
    category: 'Timeline & Engagement'
  },
  {
    id: 'faq-8',
    question: 'How do you handle security and sensitive client data?',
    answer: 'We adhere to enterprise security practices: least-privilege API keys, zero client-side secret exposure, environment isolation, encrypted databases, and strict NDAs. We never use proprietary customer data to train public AI models.',
    category: 'Reliability & Security'
  },
  {
    id: 'faq-9',
    question: 'What is the difference between a basic chatbot and a connected AI system?',
    answer: 'A basic chatbot is an isolated widget that answers questions in a vacuum. A connected AI system is grounded in your verified documentation, qualifies inbound prospects, updates your CRM, dispatches calendar slots, and delivers structured briefings directly to your sales team.',
    category: 'Strategy & AI'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'MAP',
    tagline: 'Understand the current workflow and locate the friction.',
    description: 'We do not touch software until we understand how the work actually happens. We map the step-by-step journey of information, identifying repetitive tasks, delayed handoffs, disconnected tools, and human failure points.',
    activities: [
      'Operational workflow mapping',
      'Data flow & silo identification',
      'Time & friction cost assessment',
      'Failure point & edge case analysis'
    ],
    output: 'Clear visual workflow map and bottleneck diagnosis'
  },
  {
    step: '02',
    title: 'DESIGN',
    tagline: 'Decide what stays human, what AI assists, and what gets automated.',
    description: 'We apply our 3-tier architectural framework. We strictly delineate which tasks require human judgment, which benefit from AI synthesis, and which must be executed by deterministic automation pipelines.',
    activities: [
      'Human / AI / Automation tier allocation',
      'System architecture & data schema design',
      'API & webhook integration planning',
      'Escalation & fallback logic definition'
    ],
    output: 'System Blueprint & technical architecture specification'
  },
  {
    step: '03',
    title: 'BUILD',
    tagline: 'Engineer the connected software, APIs, AI, and workflows.',
    description: 'We develop the actual production system using Next.js, robust API backends, PostgreSQL databases, AI models, and event-driven automation pipelines. Every component is built for speed, type safety, and maintainability.',
    activities: [
      'Frontend portals & UI interfaces',
      'Server-side API routes & webhook listeners',
      'Vector indexing & LLM prompt engineering',
      'Database modeling & CRM synchronizations'
    ],
    output: 'Fully functional, production-ready system'
  },
  {
    step: '04',
    title: 'DEPLOY & MONITOR',
    tagline: 'Launch smoothly, verify with real data, and iterate.',
    description: 'We deploy the system into production, conduct end-to-end load and edge-case testing, document operational runbooks, and set up continuous monitoring and error alerting to ensure 99.9% reliability.',
    activities: [
      'Production deployment & security verification',
      'End-to-end integration testing',
      'Team training & SOP documentation',
      'Continuous performance & accuracy monitoring'
    ],
    output: 'A reliable, easier-to-manage operating system for your business'
  }
];
