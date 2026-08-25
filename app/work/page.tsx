import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, ArrowUpRight, Cpu, Layers, Zap } from 'lucide-react';
import { PROJECTS_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Work & Systems Portfolio — Muhammad ABU BAKAR',
  description: 'Explore production-quality demonstration systems, concept builds, and operational architectures built for lead automation, customer operations, and AI workflows.',
};

export default function WorkPage() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Header */}
      <section className="w-full pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left border-b border-zinc-800/80">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400">
            PORTFOLIO & SYSTEM BUILDS
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            WHAT I&apos;VE BUILT
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            Each project below is documented by its business problem, operational bottleneck, and technical architecture. All demonstration systems are clearly labeled.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.slug}
              className="bg-[#0e121a] border border-zinc-800/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-200 shadow-xl group"
            >
              <div>
                {/* Badges */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <span
                    className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded border ${
                      proj.badgeType === 'CLIENT WORK'
                        ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800'
                        : proj.badgeType === 'DEMO SYSTEM'
                        ? 'bg-amber-950/60 text-amber-400 border-amber-800'
                        : 'bg-sky-950/60 text-sky-400 border-sky-800'
                    }`}
                  >
                    {proj.badgeType}
                  </span>
                  <span className="text-xs font-mono text-zinc-300">
                    {proj.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h2 className="text-xl font-bold text-zinc-100 mt-5 group-hover:text-amber-400 transition-colors">
                  {proj.title}
                </h2>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                  {proj.tagline}
                </p>

                {/* Problem & Bottleneck Preview */}
                <div className="mt-5 p-4 rounded-xl bg-[#090b0e] border border-zinc-800/80 space-y-2 text-xs">
                  <div>
                    <span className="font-mono text-rose-400 font-semibold text-[11px] block">
                      THE BOTTLENECK:
                    </span>
                    <p className="text-zinc-400 text-[11px] mt-0.5 leading-relaxed">
                      {proj.bottleneck}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-zinc-800/60">
                    <span className="font-mono text-amber-400 font-semibold text-[11px] block">
                      SYSTEM PURPOSE:
                    </span>
                    <p className="text-zinc-400 text-[11px] mt-0.5 leading-relaxed">
                      {proj.businessPurpose}
                    </p>
                  </div>
                </div>

                {/* Key Integrations preview */}
                <div className="mt-5">
                  <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-wider block mb-2">
                    Key Integrated Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.integrations.slice(0, 4).map((integ, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                      >
                        {integ}
                      </span>
                    ))}
                    {proj.integrations.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                        +{proj.integrations.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* View Deep Dive Link */}
              <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <Link
                  href={`/work/${proj.slug}`}
                  className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Complete System Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct CTA */}
      <section className="w-full py-16 bg-[#0c0f16] border-t border-zinc-800/80 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold text-zinc-100">
            Need a similar system designed for your operations?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            I diagnose the workflow first, decide what should remain human, and engineer the pipeline behind it.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors shadow-lg"
            >
              <span>Diagnose Your Bottleneck</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
