import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA } from "@/lib/data";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ContactCTA } from "@/components/Studio";
export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((item) => item.slug === slug);
  return project
    ? {
        title: project.title,
        description: project.tagline,
        alternates: { canonical: `/work/${slug}` },
      }
    : { title: "Project not found" };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((item) => item.slug === slug);
  if (!project) notFound();
  const next =
    PROJECTS_DATA[(PROJECTS_DATA.indexOf(project) + 1) % PROJECTS_DATA.length];
  return (
    <div className="container case-study">
      <header className="page-intro">
        <Link href="/work" className="back-link">
          <ArrowLeft size={15} aria-hidden="true" />
          All work
        </Link>
        <div className="project-tags">
          <span>{project.category}</span>
          <span>
            {project.badgeType === "INDEPENDENT BUILD"
              ? "Independent Build"
              : project.badgeType === "CONCEPT BUILD"
                ? "Concept"
                : "Demo architecture"}
          </span>
        </div>
        <h1>{project.title}</h1>
        <p className="intro-copy">{project.tagline}</p>
      </header>
      <ProjectVisual slug={slug} large />
      <p className="evidence-note">
        {project.badgeType === "INDEPENDENT BUILD"
          ? "Independent build. The preview shows this working website. Email delivery and model-generated guidance depend on external configuration; no business outcome metrics are claimed."
          : "Illustrative architecture study. The workflow and integrations describe a proposed design, not a verified client deployment or measured outcome."}
      </p>
      <div className="case-overview">
        <div>
          <p className="section-label">The goal</p>
          <h2>What it’s designed to solve.</h2>
          <p>{project.problem}</p>
        </div>
        <div>
          <p className="section-label">The approach</p>
          <h2>
            {project.badgeType === "INDEPENDENT BUILD"
              ? "What I built."
              : "The proposed system."}
          </h2>
          <p>{project.systemSummary}</p>
        </div>
      </div>
      <section className="case-section">
        <h2>How the workflow fits together.</h2>
        <ol className="case-workflow">
          {project.workflow.map((stage) => (
            <li key={stage.step}>
              <span className="step-number">{stage.step}</span>
              <div>
                <div className="workflow-title">
                  <h3>{stage.title}</h3>
                  <span className="tier-label">{stage.tier}</span>
                </div>
                <p>{stage.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="case-section">
        <div className="section-heading">
          <h2>Key technical decisions.</h2>
          <span className="muted">
            {project.badgeType === "INDEPENDENT BUILD"
              ? "Implemented in this website"
              : "Proposed implementation"}
          </span>
        </div>
        <div className="technical-table">
          {project.technicalStack.map((layer) => (
            <div key={layer.layer}>
              <span>{layer.layer}</span>
              <div>
                <h3>{layer.technology}</h3>
                <p>{layer.purpose}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="case-section case-responsibilities">
        <div>
          <h3>Where AI assists</h3>
          <p>{project.aiRole}</p>
        </div>
        <div>
          <h3>What the code handles</h3>
          <p>{project.automationRole}</p>
        </div>
        <div>
          <h3>Where a person takes over</h3>
          <p>{project.humanHandoff}</p>
        </div>
      </section>
      <section className="case-section">
        <h2>
          {project.badgeType === "INDEPENDENT BUILD"
            ? "What the website provides."
            : "What the design aims to improve."}
        </h2>
        <ul className="goal-list">
          {project.businessValue.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
        <p className="muted">No measured business outcomes are claimed.</p>
      </section>
      <Link href={`/work/${next.slug}`} className="next-project">
        <span>
          Next study<strong>{next.title}</strong>
        </span>
        <ArrowUpRight size={28} aria-hidden="true" />
      </Link>
      <ContactCTA />
    </div>
  );
}
