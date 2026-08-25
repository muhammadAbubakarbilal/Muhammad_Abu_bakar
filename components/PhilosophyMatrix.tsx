'use client';

import React, { useState } from 'react';
import { User, Cpu, Zap, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function PhilosophyMatrix() {
  const [selectedTier, setSelectedTier] = useState<'all' | 'human' | 'ai' | 'automated'>('all');

  return (
    <section id="section-philosophy" className="w-full py-20 bg-[#090b0e] border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 mb-3">
            00 / HOW I THINK
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            I DON&apos;T START WITH AI. I START WITH THE WORK.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Every business has processes that are repeated, delayed, forgotten, manually copied, or passed between too many systems. Those are the areas I investigate first. Then I determine what should remain human, where AI can assist, and what can be automated.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs">
          <button
            onClick={() => setSelectedTier('all')}
            className={`px-3.5 py-1.5 rounded-lg border transition-colors ${
              selectedTier === 'all'
                ? 'bg-zinc-800 text-white border-zinc-600'
                : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:text-zinc-200'
            }`}
          >
            View All 3 Tiers
          </button>
          <button
            onClick={() => setSelectedTier('human')}
            className={`px-3.5 py-1.5 rounded-lg border transition-colors flex items-center gap-1.5 ${
              selectedTier === 'human'
                ? 'bg-sky-950/60 text-sky-300 border-sky-600'
                : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:text-zinc-200'
            }`}
          >
            <User className="w-3.5 h-3.5 text-sky-400" /> Human Judgment
          </button>
          <button
            onClick={() => setSelectedTier('ai')}
            className={`px-3.5 py-1.5 rounded-lg border transition-colors flex items-center gap-1.5 ${
              selectedTier === 'ai'
                ? 'bg-amber-950/60 text-amber-300 border-amber-600'
                : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:text-zinc-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-amber-400" /> AI-Assisted
          </button>
          <button
            onClick={() => setSelectedTier('automated')}
            className={`px-3.5 py-1.5 rounded-lg border transition-colors flex items-center gap-1.5 ${
              selectedTier === 'automated'
                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-600'
                : 'bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:text-zinc-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-emerald-400" /> Deterministic Automation
          </button>
        </div>

        {/* 3 Major Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. HUMAN */}
          <div
            className={`rounded-2xl border p-6 transition-all duration-200 ${
              selectedTier === 'all' || selectedTier === 'human'
                ? 'bg-[#0f131a] border-zinc-700/80 shadow-xl opacity-100'
                : 'bg-[#0b0e14] border-zinc-800/40 opacity-40'
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-950/60 border border-sky-800/80 flex items-center justify-center text-sky-400">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-100 font-mono">HUMAN</h3>
                  <span className="text-[11px] text-sky-400/90 font-mono">Tier 03 • Judgment</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-zinc-300 font-medium">
              Keep people involved where judgment, empathy, and relationships matter.
            </p>

            <ul className="mt-6 space-y-2.5 text-xs text-zinc-400">
              {[
                'Long-term client relationships',
                'Live sales discovery & negotiation',
                'High-level strategic decisions',
                'Sensitive customer disputes',
                'Complex policy exception handling',
                'Final commercial & legal sign-off'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-400">
              Goal: Protect high-trust human attention by removing administrative sludge.
            </div>
          </div>

          {/* 2. AI-ASSISTED */}
          <div
            className={`rounded-2xl border p-6 transition-all duration-200 ${
              selectedTier === 'all' || selectedTier === 'ai'
                ? 'bg-[#0f131a] border-amber-500/40 shadow-xl opacity-100 ring-1 ring-amber-500/20'
                : 'bg-[#0b0e14] border-zinc-800/40 opacity-40'
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-800/80 flex items-center justify-center text-amber-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-100 font-mono">AI-ASSISTED</h3>
                  <span className="text-[11px] text-amber-400/90 font-mono">Tier 02 • Synthesis</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-zinc-300 font-medium">
              AI supports the human operator on qualitative, unstructured data.
            </p>

            <ul className="mt-6 space-y-2.5 text-xs text-zinc-400">
              {[
                'Grounded knowledge base search (RAG)',
                'Buyer intent classification & scoring',
                'Unstructured inquiry summarization',
                'Proposal & response drafting',
                'Document & contract clause extraction',
                'Automated lead prioritization'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-400">
              Goal: Turn unstructured mess into crisp, structured briefing data.
            </div>
          </div>

          {/* 3. AUTOMATED */}
          <div
            className={`rounded-2xl border p-6 transition-all duration-200 ${
              selectedTier === 'all' || selectedTier === 'automated'
                ? 'bg-[#0f131a] border-zinc-700/80 shadow-xl opacity-100'
                : 'bg-[#0b0e14] border-zinc-800/40 opacity-40'
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-100 font-mono">AUTOMATED</h3>
                  <span className="text-[11px] text-emerald-400/90 font-mono">Tier 01 • Deterministic</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-zinc-300 font-medium">
              Deterministic code handles 100% predictable, rule-based operations.
            </p>

            <ul className="mt-6 space-y-2.5 text-xs text-zinc-400">
              {[
                'Instant CRM record creation & updates',
                'Cross-platform webhook routing',
                'Transactional emails & SMS reminders',
                'Event-driven database synchronization',
                'Recurring scheduled cron workflows',
                'Audit logging & failure retry pipelines'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-400">
              Goal: Eliminate copy-pasting and human data transfer completely.
            </div>
          </div>
        </div>

        {/* Bottom takeaway quote */}
        <div className="mt-10 p-5 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-zinc-300 font-mono">
            &ldquo;Businesses don&apos;t always need more software. They often need less manual work.&rdquo;
          </p>
          <Link
            href="/process"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 whitespace-nowrap"
          >
            <span>See How I Apply This in Practice</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
