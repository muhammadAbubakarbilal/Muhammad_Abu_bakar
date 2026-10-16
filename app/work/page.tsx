import type { Metadata } from "next";
import { PageIntro, ContactCTA } from "@/components/Studio";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { PROJECTS_DATA } from "@/lib/data";
export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore lead operations, AI receptionist, onboarding, knowledge and custom software architecture studies.",
  alternates: { canonical: "/work" },
};
export default function WorkPage() {
  return (
    <div className="container">
      <PageIntro
        label="Selected systems & explorations"
        title="The work, up close."
      >
        <p>
          Customer journeys, connected tools and practical business software.
        </p>
      </PageIntro>
      <p className="evidence-note">
        A working independent website alongside documented architecture studies
        and concepts. Illustrations show proposed workflows; no unverified
        client results are claimed.
      </p>
      <div className="work-grid">
        {PROJECTS_DATA.map((project, index) => (
          <Reveal
            key={project.slug}
            className={index === 0 ? "featured-wrap" : ""}
          >
            <ProjectCard project={project} featured={index === 0} />
          </Reveal>
        ))}
      </div>
      <ContactCTA />
    </div>
  );
}
