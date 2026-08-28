import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Clock, BookOpen, Layers } from 'lucide-react';
import { INSIGHTS_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Insights & Systems Thinking — Muhammad ABU BAKAR',
  description: 'Practical essays and architectural breakdowns on business automation, lead operations, human-in-the-loop AI, and custom systems design.',
};

export default function InsightsPage() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Header */}
      <section className="w-full pt-6 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left border-b border-zinc-800/80">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400">
            SYSTEMS ESSAYS
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            PRACTICAL SYSTEMS THINKING
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            Direct, operator-facing essays on workflow auditing, lead response architecture, what to keep human in an AI world, and why adding more SaaS tools often creates more manual work.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSIGHTS_DATA.map((article) => (
            <article
              key={article.slug}
              className="bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-200 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-[11px] font-mono text-zinc-400">
                  <span className="text-amber-400 font-semibold">{article.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {article.readTime}
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-zinc-100 mt-4 group-hover:text-amber-400 transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-300">
                  {article.publishedDate}
                </span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="text-xs font-mono font-bold text-amber-400 group-hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Essay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Newsletter / Consultation Prompt */}
      <section className="w-full py-10 bg-[#0c0f16] border-t border-zinc-800/80 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold text-zinc-100">
            Have a specific process you want audited?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            I review real business workflows and deliver concrete architectural blueprints.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors shadow-lg"
            >
              <span>Submit Workflow Diagnosis</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
