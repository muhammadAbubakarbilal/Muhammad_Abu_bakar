import type { Metadata } from "next";
import { PageIntro, ContactCTA, TextLink } from "@/components/Studio";
import { ServiceVisual } from "@/components/ServiceVisual";
import { services } from "@/lib/site";
export const metadata: Metadata = {
  title: "Services",
  description:
    "Business websites, AI assistants, workflow automation and custom software, built around what your business needs.",
  alternates: { canonical: "/systems" },
};
export default function SystemsPage() {
  return (
    <div className="container">
      <PageIntro label="What I build" title="A solution that fits the work.">
        <p>
          A new website, a better customer process or software built around your
          business. I help you choose and build what makes sense.
        </p>
      </PageIntro>
      <div className="services-detail">
        {services.map((service) => (
          <section id={service.id} key={service.id} className="service-detail">
            <div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <p className="muted">{service.detail}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <TextLink href="/contact">Discuss this kind of project</TextLink>
            </div>
            <ServiceVisual kind={service.kind} />
            {service.kind === "assistant" && (
              <>
                <span id="lead-sales-systems" className="fragment-target" />
                <span id="ai-knowledge-systems" className="fragment-target" />
              </>
            )}
            {service.kind === "automation" && (
              <span id="customer-operations" className="fragment-target" />
            )}
          </section>
        ))}
      </div>
      <div className="service-guidance">
        <h2>One part, or the whole connection.</h2>
        <p>
          Start with the piece your business needs. I can design a standalone
          website or connect it to an assistant, CRM and follow-up workflow.
          Scope comes before a stack of tools.
        </p>
        <TextLink href="/process">See how I work</TextLink>
      </div>
      <ContactCTA />
    </div>
  );
}
