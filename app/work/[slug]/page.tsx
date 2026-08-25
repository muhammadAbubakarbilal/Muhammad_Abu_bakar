import React from 'react';
import { notFound } from 'next/navigation';
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
  Check, 
  AlertCircle 
} from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PROJECTS_DATA } from '@/lib/data';

export async function generateStaticParams() {
  return PROJECTS_DATA.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — System Case Study`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Top Breadcrumbs & Header */}
      <section className="w-full pt-8 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left border-b border-zinc-800/80">
        <Breadcrumbs
          items={[
            { label: 'Work', href: '/work' },
            { label: project.title }
          ]}
        />

        <div className="mt-6 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded border ${
                project.badgeType === 'CLIENT WORK'
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800'
                  : project.badgeType === 'DEMO SYSTEM'
                  ? 'bg-amber-950/60 text-amber-400 border-amber-800'
                  : 'bg-sky-950/60 text-sky-400 border-sky-800'
              }`}
            >
              {project.badgeType}
            </span>
            <span className="text-xs font-mono text-zinc-300">
              Category: {project.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-mono">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* Case Study 10-Part Structure */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* 01 & 02: The Situation & The Bottleneck */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-amber-400 font-bold">01</span>
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-200">
                THE SITUATION
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="bg-[#121620] border border-rose-900/40 rounded-2xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-rose-400 font-bold">02</span>
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-rose-200">
                THE BOTTLENECK
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.bottleneck}
            </p>
          </div>

        </div>

        {/* 03: The System */}
        <div className="bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-amber-400 font-bold">03</span>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-200">
              THE SYSTEM BUILT
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-4xl">
            {project.systemSummary}
          </p>
          <div className="pt-2">
            <span className="text-xs font-mono text-amber-400 font-semibold block mb-1">Business Purpose:</span>
            <p className="text-xs text-zinc-400">{project.businessPurpose}</p>
          </div>
        </div>

        {/* 04: How It Works (Visual Workflow) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-amber-400 font-bold">04</span>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-200">
              HOW IT WORKS (STEP-BY-STEP WORKFLOW)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {project.workflow.map((item, idx) => {
              let tierColor = 'text-emerald-400 border-emerald-800 bg-emerald-950/40';
              if (item.tier === 'AI-Assisted') {
                tierColor = 'text-amber-400 border-amber-800 bg-amber-950/40';
              } else if (item.tier === 'Human') {
                tierColor = 'text-sky-400 border-sky-800 bg-sky-950/40';
              }

              return (
                <div
                  key={idx}
                  className="bg-[#0f131d] border border-zinc-800 rounded-xl p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-zinc-300 font-bold">
                        STEP {item.step}
                      </span>
                      <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${tierColor}`}>
                        {item.tier}
                      </span>
                    </div>
                    <h3 className="text-xs font-bold text-zinc-200">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 05, 06, 07: AI Role, Automation, Human Handoff */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#0f131d] border border-amber-500/30 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-amber-400">
              <span className="text-xs font-mono font-bold">05</span>
              <Cpu className="w-4 h-4" />
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider">
                AI&apos;S ROLE
              </h2>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.aiRole}
            </p>
          </div>

          <div className="bg-[#0f131d] border border-emerald-500/30 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="text-xs font-mono font-bold">06</span>
              <Zap className="w-4 h-4" />
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider">
                AUTOMATION&apos;S ROLE
              </h2>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.automationRole}
            </p>
          </div>

          <div className="bg-[#0f131d] border border-sky-500/30 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-sky-400">
              <span className="text-xs font-mono font-bold">07</span>
              <User className="w-4 h-4" />
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider">
                HUMAN HANDOFF
              </h2>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.humanHandoff}
            </p>
          </div>

        </div>

        {/* 08 & 09: Integrations & Technical Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 08 Integrations */}
          <div className="bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-amber-400 font-bold">08</span>
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-200">
                INTEGRATIONS
              </h2>
            </div>
            <div className="space-y-2">
              {project.integrations.map((integ, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-lg bg-[#090b0e] border border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{integ}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 09 Technical Architecture */}
          <div className="lg:col-span-2 bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-amber-400 font-bold">09</span>
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-200">
                TECHNICAL ARCHITECTURE
              </h2>
            </div>
            <div className="space-y-3">
              {project.technicalStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#090b0e] border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                >
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">
                      {tech.layer}
                    </span>
                    <span className="font-bold text-zinc-200 font-mono">
                      {tech.technology}
                    </span>
                  </div>
                  <span className="text-zinc-400 text-[11px] sm:text-right max-w-sm">
                    {tech.purpose}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 10: Business Value (No fabricated percentages) */}
        <div className="bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-amber-400 font-bold">10</span>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-200">
              BUSINESS VALUE & OPERATIONAL IMPACT
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {project.businessValue.map((val, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs text-zinc-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation / Next Steps */}
        <div className="p-8 rounded-2xl bg-[#090b0e] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-zinc-100">
              Have a similar bottleneck in your business?
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Let&apos;s map the workflow and determine the right architecture.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors"
            >
              <span>Find Your Bottleneck</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
