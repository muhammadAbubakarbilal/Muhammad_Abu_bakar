import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, ContactCTA } from "@/components/Studio";
import { INSIGHTS_DATA } from "@/lib/data";
export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical notes on AI, business workflows and choosing useful software.",
  alternates: { canonical: "/insights" },
};
export default function InsightsPage() {
  return (
    <div className="container">
      <PageIntro label="Notes from the work" title="A little systems thinking.">
        <p>
          Practical ideas about useful software, connected workflows and where
          AI fits.
        </p>
      </PageIntro>
      <div className="insight-list">
        {INSIGHTS_DATA.map((article) => (
          <article key={article.slug}>
            <div>
              <span className="section-label">{article.category}</span>
              <h2>
                <Link href={`/insights/${article.slug}`}>{article.title}</Link>
              </h2>
              <p>{article.excerpt}</p>
            </div>
            <Link
              href={`/insights/${article.slug}`}
              className="round-link"
              aria-label={`Read ${article.title}`}
            >
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
      <ContactCTA />
    </div>
  );
}
