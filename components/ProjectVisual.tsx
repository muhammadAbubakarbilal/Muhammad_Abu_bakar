import {
  ArrowRight,
  Bot,
  CalendarDays,
  FileText,
  FolderCheck,
  Globe,
  Layers,
  ListChecks,
  Search,
  UserRound,
  Workflow,
} from "lucide-react";
import Image from "next/image";

const visualData: Record<
  string,
  { kind: string; caption: string; steps: string[] }
> = {
  "agency-lead-operations": {
    kind: "lead",
    caption: "Lead qualification workflow",
    steps: [
      "Inquiry",
      "Qualification",
      "CRM record",
      "Booking",
      "Conversation",
    ],
  },
  "local-service-receptionist": {
    kind: "assistant",
    caption: "Receptionist interaction flow",
    steps: [
      "Customer inquiry",
      "Service & area check",
      "Booking request",
      "Human handoff",
    ],
  },
  "b2b-customer-onboarding": {
    kind: "onboarding",
    caption: "Guided onboarding sequence",
    steps: [
      "Welcome & access",
      "Document collection",
      "Completeness review",
      "Workspace setup",
    ],
  },
  "knowledge-intelligence-rag": {
    kind: "knowledge",
    caption: "Document retrieval architecture",
    steps: [
      "Source documents",
      "Search index",
      "Grounded answer",
      "Source review",
    ],
  },
  "multi-channel-crm-sync": {
    kind: "sync",
    caption: "Cross-tool event architecture",
    steps: [
      "Billing event",
      "Account matching",
      "CRM update",
      "Team notification",
    ],
  },
  "custom-ops-portal": {
    kind: "ops",
    caption: "Operations dispatch sequence",
    steps: ["Request", "Assignment", "Approval", "Inspection", "Report"],
  },
};

export function ProjectVisual({
  slug,
  large = false,
}: {
  slug: string;
  large?: boolean;
}) {
  if (slug === "personal-engineering-studio")
    return (
      <figure className="project-visual portfolio-visual">
        <div className="visual-topline">
          <span className="visual-dot" />
          <span>Personal engineering studio</span>
          <span className="visual-mark">Website / Next.js</span>
        </div>
        <div className="portfolio-preview">
          <Image
            src="/assets/portfolio-studio.png"
            alt="Actual homepage of Muhammad Abu Bakar’s engineering studio website"
            width={1440}
            height={850}
            sizes="(max-width: 600px) 100vw, 1200px"
          />
        </div>
        <figcaption>Actual website capture · independent build</figcaption>
      </figure>
    );
  const data = visualData[slug] || visualData["agency-lead-operations"];
  return (
    <figure
      className={`project-visual visual-${data.kind} ${large ? "visual-large" : ""}`}
    >
      <div className="visual-topline">
        <span className="visual-dot" />
        <span>{data.caption}</span>
        <span className="visual-mark">AB / studio</span>
      </div>
      <div className="visual-canvas" aria-hidden="true">
        {data.kind === "lead" || data.kind === "ops" ? (
          <div className="visual-pipeline">
            {data.steps.map((step, index) => {
              const Icon = [Globe, Bot, Layers, CalendarDays, UserRound][index];
              return (
                <div
                  key={step}
                  className={`pipeline-item ${index === 1 ? "pipeline-accent" : ""}`}
                >
                  <span className="pipeline-step">0{index + 1}</span>
                  <div className="pipeline-icon">
                    <Icon size={25} strokeWidth={1.4} />
                  </div>
                  <span>{step}</span>
                  {index < data.steps.length - 1 && (
                    <ArrowRight className="pipeline-arrow" size={16} />
                  )}
                </div>
              );
            })}
          </div>
        ) : data.kind === "assistant" ? (
          <div className="assistant-flow">
            <div className="assistant-flow-icon">
              <Bot size={37} strokeWidth={1.3} />
            </div>
            <div className="assistant-flow-list">
              {data.steps.map((step, i) => (
                <div key={step}>
                  <span className="small-dot" />
                  <span>{step}</span>
                  {i === 3 ? <UserRound size={15} /> : <ArrowRight size={15} />}
                </div>
              ))}
            </div>
          </div>
        ) : data.kind === "onboarding" ? (
          <div className="onboarding-flow">
            <FolderCheck size={36} strokeWidth={1.3} />
            <div>
              {data.steps.map((step, i) => (
                <div className="onboarding-item" key={step}>
                  <span>0{i + 1}</span>
                  <span>{step}</span>
                  <div className="outline-check" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="knowledge-flow">
            <div className="source-docs">
              <FileText />
              <FileText />
              <FileText />
            </div>
            <div className="flow-rule" />
            <div className="knowledge-center">
              {data.kind === "knowledge" ? (
                <Search size={32} strokeWidth={1.3} />
              ) : (
                <Workflow size={32} strokeWidth={1.3} />
              )}
            </div>
            <div className="flow-rule" />
            <div className="knowledge-output">
              <ListChecks size={28} />
              <span>
                {data.kind === "knowledge"
                  ? "Answer + sources"
                  : "Connected record"}
              </span>
            </div>
          </div>
        )}
      </div>
      <figcaption>
        Illustrative architecture · based on the documented workflow
      </figcaption>
    </figure>
  );
}
