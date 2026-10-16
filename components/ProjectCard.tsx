import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisual";
import type { ProjectItem } from "@/lib/data";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: ProjectItem;
  featured?: boolean;
}) {
  return (
    <article className={`project-card ${featured ? "project-featured" : ""}`}>
      <Link
        href={`/work/${project.slug}`}
        className="project-media-link"
        aria-label={`View ${project.title}`}
      >
        <ProjectVisual slug={project.slug} large={featured} />
      </Link>
      <div className="project-caption">
        <div>
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
          <h3>
            <Link href={`/work/${project.slug}`}>{project.title}</Link>
          </h3>
          <p>{project.tagline}</p>
        </div>
        <Link
          href={`/work/${project.slug}`}
          className="round-link"
          aria-label={`Read ${project.title} case study`}
        >
          <ArrowUpRight size={22} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
