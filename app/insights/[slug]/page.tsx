import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { INSIGHTS_DATA } from "@/lib/data";
import { ContactCTA, TextLink } from "@/components/Studio";
export function generateStaticParams() {
  return INSIGHTS_DATA.map((article) => ({ slug: article.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS_DATA.find((item) => item.slug === slug);
  return article
    ? {
        title: article.title,
        description: article.excerpt,
        alternates: { canonical: `/insights/${slug}` },
      }
    : { title: "Article not found" };
}
export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = INSIGHTS_DATA.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <div className="container">
      <article className="article">
        <header className="page-intro">
          <Link href="/insights" className="back-link">
            <ArrowLeft size={15} aria-hidden="true" />
            All insights
          </Link>
          <p className="section-label">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="article-author">By Muhammad Abu Bakar</p>
        </header>
        <p className="article-lead">{article.content.intro}</p>
        {article.content.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.highlight && <blockquote>{section.highlight}</blockquote>}
            {section.diagramNodes && (
              <ol className="article-flow">
                {section.diagramNodes.map((node) => (
                  <li key={node}>{node}</li>
                ))}
              </ol>
            )}
          </section>
        ))}
        <div className="article-takeaway">
          <h2>The useful takeaway</h2>
          <p>{article.content.takeaway}</p>
        </div>
        <TextLink href="/insights">More notes on systems</TextLink>
      </article>
      <ContactCTA />
    </div>
  );
}
