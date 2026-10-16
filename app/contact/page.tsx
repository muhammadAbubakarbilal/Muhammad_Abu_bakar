import type { Metadata } from "next";
import { PageIntro, TextLink } from "@/components/Studio";
import { ProjectInquiryForm } from "@/components/ProjectInquiryForm";
import { site } from "@/lib/site";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Discuss a project",
  description:
    "Tell Muhammad Abu Bakar about a website, AI assistant, automation or custom software project.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage() {
  return (
    <div className="container">
      <PageIntro label="Let’s talk" title="What do you have in mind?">
        <p>
          A website, an idea or a process that could work better. Tell me a
          little about it.
        </p>
      </PageIntro>
      <div className="contact-layout">
        <ProjectInquiryForm
          deliveryConfigured={Boolean(process.env.CONTACT_WEBHOOK_URL)}
        />
        <aside className="contact-sidebar">
          <div className="contact-direct">
            <p className="section-label">Prefer a direct conversation?</p>
            <h2>Start with an email.</h2>
            <a className="email-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div>
            <h3>What happens next</h3>
            <p>
              I review your project and ask any questions needed to understand
              the scope. If it’s a fit, we can discuss an approach, budget and
              timeline.
            </p>
          </div>
          <div>
            <h3>No technical brief needed.</h3>
            <p>A few sentences about your goal are enough to start.</p>
          </div>
          <TextLink href="/faq">A few useful answers</TextLink>
        </aside>
      </div>
    </div>
  );
}
