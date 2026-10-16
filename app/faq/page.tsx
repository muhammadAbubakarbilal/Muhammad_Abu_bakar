import type { Metadata } from "next";
import { PageIntro, ContactCTA } from "@/components/Studio";
import { faqItems } from "@/lib/site";
export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Straightforward answers about websites, AI, integrations, project scope and working together.",
  alternates: { canonical: "/faq" },
};
export default function FAQPage() {
  return (
    <div className="container">
      <PageIntro label="Before we start" title="A few useful answers.">
        <p>About the work, the process and what happens next.</p>
      </PageIntro>
      <div className="faq-list">
        {faqItems.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
      <ContactCTA />
    </div>
  );
}
