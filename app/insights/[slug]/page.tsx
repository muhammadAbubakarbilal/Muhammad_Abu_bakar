import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Clock, Calendar, ArrowLeft, Check, Layers } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { INSIGHTS_DATA } from '@/lib/data';

export async function generateStaticParams() {
  return INSIGHTS_DATA.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS_DATA.find((a) => a.slug === slug);
  if (!article) return { title: 'Essay Not Found' };

  return {
    title: `${article.title} — Systems Insights`,
    description: article.excerpt,
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = INSIGHTS_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles
  const relatedArticles = INSIGHTS_DATA.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Header & Breadcrumbs */}
      <section className="w-full pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left border-b border-zinc-800/80">
        <Breadcrumbs
          items={[
            { label: 'Insights', href: '/insights' },
            { label: article.title }
          ]}
        />

        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {article.publishedDate}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-mono pt-2">
            By Muhammad Abu Bakar Bilal — AI Systems & Automation Engineer
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10 text-zinc-300">
        
        {/* Intro Lead */}
        <div className="text-sm sm:text-base text-zinc-200 leading-relaxed border-l-2 border-amber-500 pl-4 py-1 italic bg-[#0e121a]/60 rounded-r-lg">
          {article.content.intro}
        </div>

        {/* Structured Sections */}
        <div className="space-y-10 text-xs sm:text-sm leading-relaxed">
          {article.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-zinc-100 font-mono tracking-tight pt-4 border-t border-zinc-800/80">
                {section.heading}
              </h2>

              <div className="space-y-3">
                {section.body.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-zinc-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Highlight callout if present */}
              {section.highlight && (
                <div className="my-5 p-4 rounded-xl bg-[#121722] border border-amber-500/30 text-amber-200 font-mono text-xs">
                  {section.highlight}
                </div>
              )}

              {/* Diagram nodes if present */}
              {section.diagramNodes && (
                <div className="my-6 p-5 rounded-xl bg-[#090b0e] border border-zinc-800">
                  <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider block mb-3">
                    Architectural Progression:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {section.diagramNodes.map((node, nIdx) => (
                      <React.Fragment key={nIdx}>
                        <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-200 font-medium">
                          {node}
                        </div>
                        {nIdx < (section.diagramNodes?.length || 0) - 1 && (
                          <span className="text-amber-500 font-mono text-xs">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Core Takeaway */}
        <div className="p-6 rounded-2xl bg-[#0e121a] border border-amber-500/40 space-y-2">
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
            CORE TAKEAWAY
          </span>
          <p className="text-sm font-semibold text-zinc-100">
            {article.content.takeaway}
          </p>
        </div>

        {/* Diagnostic CTA inside Article */}
        <div className="p-8 rounded-2xl bg-[#0b0e14] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-zinc-100">
              Want to review your business workflow?
            </h3>
            <p className="text-xs text-zinc-400">
              Submit your operational bottleneck and I will prepare a system blueprint.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors shrink-0"
          >
            <span>Diagnose Your Bottleneck</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Related Articles */}
        <div className="pt-10 border-t border-zinc-800/80">
          <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-6">
            Related Systems Essays
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/insights/${rel.slug}`}
                className="p-5 rounded-xl bg-[#0e121a] border border-zinc-800 hover:border-amber-500/40 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono text-amber-400">{rel.category}</span>
                  <h4 className="text-xs font-bold text-zinc-200 group-hover:text-amber-400 transition-colors mt-1">
                    {rel.title}
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-zinc-300 mt-4 flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>

      </article>

    </div>
  );
}
