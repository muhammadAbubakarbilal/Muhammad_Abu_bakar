'use client';

import React, { useState } from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BEFORE_STEPS = [
  { step: '01', title: 'Lead arrives', desc: 'Inquiry lands in a generic team inbox unnoticed.' },
  { step: '02', title: 'Someone checks inbox', desc: 'Hours pass until someone remembers to refresh email.' },
  { step: '03', title: 'Copies information', desc: 'Manual copy-pasting into multiple internal spreadsheets.' },
  { step: '04', title: 'Updates spreadsheet', desc: 'Spreadsheet formula breaks or columns are misaligned.' },
  { step: '05', title: 'Updates CRM', desc: 'Sales rep enters contact manually, often missing key details.' },
  { step: '06', title: 'Sends generic response', desc: 'Template email sent 8 hours later when lead has gone cold.' },
  { step: '07', title: 'Remembers follow-up', desc: 'Second touchpoint depends entirely on individual memory.' },
  { step: '08', title: 'Books manually', desc: '3 rounds of email scheduling ping-pong to find a slot.' },
  { step: '09', title: 'Updates team manually', desc: 'Sales rep types a quick Slack message with zero context.' },
];

const AFTER_STEPS = [
  { step: '01', title: 'Lead arrives', desc: 'Webhook catches inquiry instantly from website.' },
  { step: '02', title: 'AI captures information', desc: 'Unstructured message parsed into typed parameters.' },
  { step: '03', title: 'Instant qualification', desc: 'Intent, budget, and company fit scored in 2 seconds.' },
  { step: '04', title: 'CRM auto-updated', desc: 'Deal created in CRM with research brief and tags.' },
  { step: '05', title: 'Relevant follow-up', desc: 'Personalized confirmation email & calendar dispatched.' },
  { step: '06', title: 'Lead prioritized', desc: 'High-value prospects routed immediately to senior partner.' },
  { step: '07', title: 'Human notified with brief', desc: 'Sales rep gets executive summary 10 min before call.' },
  { step: '08', title: 'Appointment booked', desc: 'Client selects slot from live real-time availability.' },
  { step: '09', title: 'Onboarding triggered', desc: 'Contract sign-off generates project workspace automatically.' },
];

export function BeforeAfterComparison() {
  const [viewMode, setViewMode] = useState<'both' | 'before' | 'after'>('both');

  return (
    <section id="section-before-after" className="w-full py-20 bg-[#090b0e] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 mb-3">
            04 / THE TRANSFORMATION
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            FROM MANUAL PROCESS TO CONNECTED SYSTEM
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            See the exact operational difference between relying on human memory to glue tools together versus running an orchestrated system.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 mb-8 font-mono text-xs">
          <button
            onClick={() => setViewMode('both')}
            className={`px-3.5 py-1.5 rounded-lg border transition-colors ${
              viewMode === 'both'
                ? 'bg-zinc-800 text-white border-zinc-600'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800'
            }`}
          >
            Side-by-Side Comparison
          </button>
          <button
            onClick={() => setViewMode('before')}
            className={`px-3.5 py-1.5 rounded-lg border transition-colors ${
              viewMode === 'before'
                ? 'bg-rose-950/60 text-rose-300 border-rose-700'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800'
            }`}
          >
            Before (Manual Friction)
          </button>
          <button
            onClick={() => setViewMode('after')}
            className={`px-3.5 py-1.5 rounded-lg border transition-colors ${
              viewMode === 'after'
                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-700'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800'
            }`}
          >
            After (Connected System)
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* BEFORE CARD */}
          {(viewMode === 'both' || viewMode === 'before') && (
            <div className="rounded-2xl bg-[#0f1117] border border-rose-900/40 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-rose-900/30 mb-6">
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-400" />
                  <h3 className="text-base font-bold text-rose-200 font-mono tracking-tight">
                    BEFORE (FRAGMENTED MANUAL WORK)
                  </h3>
                </div>
                <span className="text-xs font-mono text-rose-400/80">High Delay & Error Risk</span>
              </div>

              <div className="space-y-4">
                {BEFORE_STEPS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs">
                    <span className="font-mono text-rose-400/80 shrink-0 font-bold">
                      {item.step}
                    </span>
                    <div>
                      <span className="font-medium text-zinc-200 block">{item.title}</span>
                      <span className="text-zinc-300 text-[11px]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-rose-900/30 text-xs text-rose-300/80 font-mono">
                Result: Leads stall, team spends 30% of day copy-pasting, customer experience is erratic.
              </div>
            </div>
          )}

          {/* AFTER CARD */}
          {(viewMode === 'both' || viewMode === 'after') && (
            <div className="rounded-2xl bg-[#0e141c] border border-emerald-800/60 p-6 sm:p-8 shadow-2xl relative ring-1 ring-emerald-500/20">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800/40 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base font-bold text-emerald-200 font-mono tracking-tight">
                    AFTER (CONNECTED SYSTEM)
                  </h3>
                </div>
                <span className="text-xs font-mono text-emerald-400">Zero Administrative Friction</span>
              </div>

              <div className="space-y-4">
                {AFTER_STEPS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs">
                    <span className="font-mono text-emerald-400 shrink-0 font-bold">
                      {item.step}
                    </span>
                    <div>
                      <span className="font-semibold text-zinc-100 block">{item.title}</span>
                      <span className="text-zinc-400 text-[11px]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-emerald-800/40 text-xs text-emerald-300 font-mono">
                Result: Leads answered in seconds, sales rep gets complete briefing, humans focus on closing.
              </div>
            </div>
          )}
        </div>

        {/* Action Callout */}
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors shadow-md"
          >
            <span>Turn Your Workflow Into a Connected System</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
