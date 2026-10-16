import type { Metadata } from "next";
import { PageIntro, ContactCTA } from "@/components/Studio";
import { processSteps } from "@/lib/site";
export const metadata: Metadata = {
  title: "Process",
  description:
    "Understand, design, build and improve: a practical four-stage approach to websites and connected business software.",
  alternates: { canonical: "/process" },
};
export default function ProcessPage() {
  return (
    <div className="container">
      <PageIntro label="How I work" title="From idea to working solution.">
        <p>
          A clear scope, considered design and reviewable progress. The process
          adapts to the project.
        </p>
      </PageIntro>
      <ol className="process-detail">
        {processSteps.map((step, index) => (
          <li key={step.title}>
            <span className="step-number">0{index + 1}</span>
            <div>
              <h2>{step.title}</h2>
              <p>{step.detail}</p>
            </div>
            <div className="process-output">
              <span>What we work toward</span>
              <p>{step.output}</p>
            </div>
          </li>
        ))}
      </ol>
      <ContactCTA />
    </div>
  );
}
