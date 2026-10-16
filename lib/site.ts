export const site = {
  name: "Muhammad Abu Bakar",
  role: "AI Systems & Automation Engineer",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "abgakhar787@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://abubakarbilal.netlify.app",
};
export const projectTypes = [
  "Website / Landing Page",
  "AI Assistant / Chatbot",
  "CRM / Automation",
  "Custom Software",
  "Not Sure Yet",
] as const;
export const services = [
  {
    id: "websites",
    title: "Websites & Landing Pages",
    description:
      "Modern, responsive websites that present your business clearly and make it easier for visitors to take action.",
    detail:
      "Business websites, redesigns, landing pages, accessible interfaces and contact integrations.",
    tags: ["Design & development", "Responsive interfaces"],
    kind: "website",
  },
  {
    id: "ai-chatbots-assistants",
    title: "AI Assistants & Customer Systems",
    description:
      "AI assistants, lead qualification, CRM connections and communication workflows that help manage customer inquiries.",
    detail:
      "Chatbots, receptionists, customer support and document knowledge, with clear boundaries and a handoff to a person.",
    tags: ["Customer conversations", "Knowledge systems"],
    kind: "assistant",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description:
      "Connect the tools and repetitive processes that keep your business moving.",
    detail:
      "CRM updates, follow-up, scheduling, notifications, customer onboarding and cross-tool integrations.",
    tags: ["Connected tools", "Less repetitive work"],
    kind: "automation",
  },
  {
    id: "custom-business-software",
    title: "Custom Business Software",
    description:
      "Applications, internal tools, dashboards and portals built around how your business operates.",
    detail:
      "Purposeful workflows, role-based access and a clear view of the information your team needs.",
    tags: ["Internal tools", "Customer portals"],
    kind: "software",
  },
] as const;
export const processSteps = [
  {
    title: "Understand",
    short: "Learn what the business needs and where the problem exists.",
    detail:
      "I start with a conversation about the people, goals and tools involved. Together, I clarify the scope and what a useful result should look like.",
    output: "A clear brief and agreed scope.",
  },
  {
    title: "Design",
    short: "Map the experience, process and technical approach.",
    detail:
      "I plan the interface and how information moves through it. For connected systems, I define integrations, approval points and what happens when something fails.",
    output: "An interface direction and build plan.",
  },
  {
    title: "Build",
    short: "Develop, connect and test the solution.",
    detail:
      "I build in reviewable stages, connect the required tools and test the main journeys, including mobile layouts and failure cases.",
    output: "A working solution ready for review.",
  },
  {
    title: "Improve",
    short: "Launch, refine and address issues based on real use.",
    detail:
      "I prepare the handoff and review the solution in its real setting. Maintenance, monitoring and future changes are agreed according to the project.",
    output: "A considered launch and next steps.",
  },
];
export const faqItems = [
  {
    question: "Can I hire you just for a website?",
    answer:
      "Yes. I design and build business websites and landing pages. AI or automation is only part of the project when it serves a real need.",
  },
  {
    question: "Can you work with my existing tools?",
    answer:
      "I review the APIs, permissions and limitations of your current tools before proposing an integration. A new platform is only needed when the existing setup cannot support the work.",
  },
  {
    question: "What if I’m not sure what I need?",
    answer:
      "Tell me what you want to build or improve. A short description is enough to start a conversation and work out the right scope.",
  },
  {
    question: "How do you decide where to use AI?",
    answer:
      "I use AI for tasks such as interpreting inquiries or searching documents. Defined rules belong in standard code; sensitive decisions and exceptions need a person.",
  },
  {
    question: "What happens when an integration fails?",
    answer:
      "I plan error handling, retries and notifications around the integration. The exact monitoring and support arrangements are agreed before launch.",
  },
  {
    question: "How much will it cost, and how long will it take?",
    answer:
      "Both depend on scope, integrations and the material already available. I discuss these with you before agreeing a proposal or timeline.",
  },
  {
    question: "How do you handle business data?",
    answer:
      "Access, storage and AI provider requirements are considered during scoping. I keep secrets on the server and agree how sensitive information should be handled for the specific project.",
  },
];
