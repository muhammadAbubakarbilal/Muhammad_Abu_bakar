import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  User, 
  Zap, 
  Layers, 
  Database, 
  Globe, 
  Bot, 
  FileInput, 
  SlidersHorizontal, 
  MailCheck 
} from 'lucide-react';
import { SYSTEMS_DATA } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Systems & Architecture — Muhammad ABU BAKAR',
  description: 'Explore the 6 core business systems we build: Lead & Sales Automation, Customer Operations, Grounded AI Assistants, Event-Driven Workflows, Custom Software, and RAG Knowledge Engines.',
};

export default function SystemsPage() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Header */}
      <section className="w-full pt-6 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left border-b border-zinc-800/80">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400">
            SYSTEMS CATALOG
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            SYSTEMS BUILT AROUND THE WORKFLOW
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            We don&apos;t build technology for the sake of technology. Every system below addresses a specific point of operational friction where manual work, delay, or disconnected tools cost you time and revenue.
          </p>
        </div>
      </section>

      {/* Systems In-Depth List */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        {SYSTEMS_DATA.map((sys, idx) => (
          <div
            key={sys.id}
            id={sys.slug}
            className="bg-[#0e121a] border border-zinc-800/90 rounded-3xl p-5 sm:p-7 lg:p-8 shadow-2xl space-y-6 scroll-mt-28"
          >
            {/* Header / Number */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-amber-400 font-bold px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                  SYSTEM {sys.number}
                </span>
                <h2 className="text-xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
                  {sys.title}
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-300">
                End-to-End Operational Pipeline
              </span>
            </div>

            {/* Overview & Problem */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  The Purpose
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {sys.fullDescription}
                </p>
              </div>

              <div className="space-y-3 bg-[#131824] p-5 rounded-2xl border border-zinc-800/80">
                <h3 className="text-xs font-mono text-rose-400 uppercase tracking-wider">
                  The Core Business Problem
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {sys.businessProblem}
                </p>
              </div>
            </div>

            {/* Example Workflow Pipeline */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Example Workflow Architecture
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {sys.workflowStages.map((stage, sIdx) => {
                  let badgeColor = 'text-emerald-400 border-emerald-800 bg-emerald-950/40';
                  if (stage.tier === 'AI-Assisted') {
                    badgeColor = 'text-amber-400 border-amber-800 bg-amber-950/40';
                  } else if (stage.tier === 'Human') {
                    badgeColor = 'text-sky-400 border-sky-800 bg-sky-950/40';
                  }

                  return (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-[#090b0e] border border-zinc-800/80 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono text-zinc-300 font-bold">
                            Stage 0{sIdx + 1}
                          </span>
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${badgeColor}`}>
                            {stage.tier}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-zinc-200">
                          {stage.stage}
                        </h4>
                        <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3-Tier Division: AI Role, Automation Role, Human Role */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#11151f] border border-amber-500/30">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold mb-2">
                  <Cpu className="w-3.5 h-3.5" /> AI&apos;s Role
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {sys.aiRole}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#11151f] border border-emerald-500/30">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold mb-2">
                  <Zap className="w-3.5 h-3.5" /> Automation&apos;s Role
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {sys.automationRole}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#11151f] border border-sky-500/30">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-mono font-bold mb-2">
                  <User className="w-3.5 h-3.5" /> Human Handoff
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {sys.humanRole}
                </p>
              </div>
            </div>

            {/* Key Deliverables & Integrations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-800/80">
              <div>
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                  Key System Deliverables
                </h4>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {sys.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                  Typical Connected Integrations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sys.integrations.map((integ, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-2.5 py-1 rounded-md bg-[#090b0e] border border-zinc-800 text-[11px] font-mono text-zinc-300"
                    >
                      {integ}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href={`/contact?problem=${encodeURIComponent(sys.title)}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 font-mono"
                  >
                    <span>Implement This System For Your Business</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* Bottom Conversion Prompt */}
      <section className="w-full py-16 bg-[#090b0e] border-t border-zinc-800/80 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold text-zinc-100">
            Have a custom workflow not listed here?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Every business has unique operational handoffs. Tell me what is slow, repetitive, or error-prone, and I will design a system around it.
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
