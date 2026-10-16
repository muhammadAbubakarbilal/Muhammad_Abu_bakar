import type { Metadata } from "next";
import Image from "next/image";
import { Action, ContactCTA, TextLink } from "@/components/Studio";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Muhammad Abu Bakar, an independent AI Systems & Automation Engineer who connects business thinking with practical software.",
  alternates: { canonical: "/about" },
};
export default function AboutPage() {
  return (
    <div className="container">
      <section className="about-hero">
        <div>
          <p className="section-label">Hello, I’m Muhammad Abu Bakar.</p>
          <h1>
            Thoughtful about the business. Precise about the build.
          </h1>
          <p>
            I’m an independent {site.role}. I design websites and build software
            that connects customer interactions with the work happening behind
            them. My starting point is understanding what a business needs, then
            choosing the right interface, tools and integrations. I care about
            making the result useful for the people who use it every day. That
            can mean a simple landing page, a connected customer process or an
            application built around a particular way of working.
          </p>
          <Action href="/contact">Let’s discuss your project</Action>
        </div>
        <div className="about-portrait">
          <Image
            src="/assets/abu_bakar.jpg"
            alt="Muhammad Abu Bakar"
            fill
            priority
            sizes="(max-width: 700px) 88vw, 450px"
          />
        </div>
      </section>
      <section className="section about-principles">
        <h2>
          Good systems start
          <br />
          with good questions.
        </h2>
        <div>
          <div>
            <h3>Business thinking, technical execution.</h3>
            <p>
              I connect the requirement with a practical implementation,
              considering the people and process around it.
            </p>
          </div>
          <div>
            <h3>Connected from the start.</h3>
            <p>
              A website, customer system and operational workflow should make
              sense together.
            </p>
          </div>
          <div>
            <h3>Built for real use.</h3>
            <p>
              Clear interfaces, maintainable code and sensible handoffs matter
              beyond launch day.
            </p>
          </div>
        </div>
      </section>
      <section className="section capabilities">
        <div>
          <p className="section-label">Under the hood</p>
          <h2>
            The tools follow
            <br />
            the purpose.
          </h2>
        </div>
        <div>
          <p>
            My work spans frontend interfaces, server-side APIs, databases, AI
            integrations and workflow automation.
          </p>
          <div className="service-tags">
            {[
              "React / Next.js",
              "TypeScript",
              "API integrations",
              "PostgreSQL",
              "AI & retrieval",
              "Workflow automation",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <TextLink href="/work">Explore the architecture studies</TextLink>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}
