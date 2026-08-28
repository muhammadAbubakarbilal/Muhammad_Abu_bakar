import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, MapPin, Sliders, Code2, Rocket, ArrowDown } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Engineering Process — Muhammad ABU BAKAR',
  description: 'How I turn operational bottlenecks into production systems: 01 Map, 02 Design, 03 Build, 04 Deploy & Monitor.',
};

export default function ProcessPage() {
  const stepIcons = [MapPin, Sliders, Code2, Rocket];

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Header */}
      <section className="w-full pt-6 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left border-b border-zinc-800/80">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400">
            ENGINEERING FRAMEWORK
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            FROM BOTTLENECK TO WORKING SYSTEM
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            A disciplined four-step methodology to identify operational friction, allocate human vs AI vs automated responsibilities, and engineer connected software that runs reliably.
          </p>
        </div>
      </section>

      {/* 4 Steps Timeline */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
        {PROCESS_STEPS.map((step, idx) => {
          const Icon = stepIcons[idx];
          return (
            <div
              key={step.step}
              className="bg-[#0e121a] border border-zinc-800/90 rounded-3xl p-5 sm:p-7 lg:p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Step number badge & Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
                      STEP {step.step} — {step.title}
                    </h2>
                    <span className="text-xs font-mono text-amber-400">
                      {step.tagline}
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              {/* Description & Activities */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                <div className="space-y-4">
                  <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Core Objective
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="bg-[#121620] p-6 rounded-2xl border border-zinc-800/80 space-y-4">
                  <h3 className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                    Key Activities
                  </h3>
                  <ul className="space-y-2.5 text-xs text-zinc-300">
                    {step.activities.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step Output Box */}
              <div className="mt-8 pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                <span className="text-zinc-400">Phase Deliverable:</span>
                <span className="text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded border border-emerald-800/60 font-semibold">
                  {step.output}
                </span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Philosophy Section Callout */}
      <section className="w-full py-10 bg-[#0c0f16] border-t border-zinc-800/80 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100">
            Ready to map out your business workflow?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Send me your primary bottleneck and we will conduct a diagnostic mapping session.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors shadow-lg"
            >
              <span>Schedule Workflow Diagnosis</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
