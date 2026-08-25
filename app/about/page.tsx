import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ArrowRight, Check, CheckCircle2, Layers, Cpu, Database, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — Muhammad Abu Bakar Bilal',
  description: 'AI Systems & Automation Engineer sitting at the intersection of Business Operations, Systems Design, and AI Engineering.',
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Header */}
      <section className="w-full pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left border-b border-zinc-800/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400">
              ENGINEERING PHILOSOPHY & IDENTITY
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight leading-tight">
              I LIKE SOLVING THE PART OF THE BUSINESS THAT EVERYONE HAS LEARNED TO LIVE WITH.
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-mono">
              Muhammad Abu Bakar Bilal — AI Systems & Automation Engineer / Business Systems Engineer.
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
              I don&apos;t build software to sell more licenses. I build systems to eliminate operational drag, reduce manual data entry, and give businesses reliable, automated leverage.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-48 sm:w-56 aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl">
              <Image
                src="/assets/abu_bakar.jpg"
                alt="Muhammad Abu Bakar"
                fill
                className="object-cover object-top"
                priority
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 192px, 224px"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Main Philosophy & Intersectional Positioning */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* Intersection Triangle */}
        <div className="bg-[#0e121a] border border-zinc-800/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-2">
              THE INTERSECTION
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              Where I Position My Work
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              Most businesses struggle because business operators don&apos;t write software, software developers don&apos;t understand operational nuances, and AI consultants sell prompts instead of pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            <div className="bg-[#121622] border border-zinc-800 rounded-2xl p-6 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-amber-400 font-mono font-bold text-xs">
                01
              </div>
              <h3 className="text-base font-bold text-zinc-100 font-mono">
                Business Operations
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Understanding customer journeys, sales cycles, team handoffs, where leads fall through the cracks, and what work is costing time and payroll.
              </p>
            </div>

            <div className="bg-[#121622] border border-zinc-800 rounded-2xl p-6 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                02
              </div>
              <h3 className="text-base font-bold text-zinc-100 font-mono">
                Systems Design
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Architecting the data pipelines, deciding what stays human, what AI assists, and what can be automated deterministically with APIs.
              </p>
            </div>

            <div className="bg-[#121622] border border-zinc-800 rounded-2xl p-6 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-sky-400 font-mono font-bold text-xs">
                03
              </div>
              <h3 className="text-base font-bold text-zinc-100 font-mono">
                AI & Software Engineering
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Building the production code in Next.js, API backends, PostgreSQL databases, LLM RAG pipelines, and reliable webhook integrations.
              </p>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-[#090b0e] border border-zinc-800 text-center text-xs font-mono text-zinc-300">
            Business Operations ↔ Systems Design ↔ AI Engineering
          </div>
        </div>

        {/* What I Am Interested In */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-base font-bold text-zinc-100 font-mono tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              WHAT I INVESTIGATE IN A BUSINESS
            </h3>

            <ul className="space-y-3.5 text-xs text-zinc-300">
              {[
                'How information actually moves between people and tools',
                'Why employees repeat the same data entry every single day',
                'Where inbound leads stall before reaching sales reps',
                'Where customers experience friction during onboarding',
                'Where off-the-shelf software has stopped fitting the company',
                'Where AI can genuinely add leverage and synthesis',
                'Where AI should NOT be used (and standard code is better)'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-zinc-100 font-mono tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                MY WORKING PRINCIPLES
              </h3>

              <div className="space-y-4 text-xs text-zinc-400 leading-relaxed">
                <div>
                  <span className="text-zinc-200 font-bold font-mono block">1. The Bottleneck Comes First</span>
                  <p className="mt-0.5">Technology chosen without diagnosing the specific operational friction is just expensive overhead.</p>
                </div>
                <div>
                  <span className="text-zinc-200 font-bold font-mono block">2. Protect Human Attention</span>
                  <p className="mt-0.5">The goal of automation is never to eliminate people; it is to eliminate administrative sludge so people can focus on judgment and relationships.</p>
                </div>
                <div>
                  <span className="text-zinc-200 font-bold font-mono block">3. Code for Plumbing, AI for Senses</span>
                  <p className="mt-0.5">We never use probabilistic AI models where standard deterministic APIs and database transactions work better.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800 font-mono text-[11px] text-amber-400">
              &ldquo;AI is not the goal. A better-running business is.&rdquo;
            </div>
          </div>

        </div>

      </section>

      {/* Direct Contact CTA */}
      <section className="w-full py-16 bg-[#090b0e] border-t border-zinc-800/80 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold text-zinc-100">
            Have a bottleneck in your operations?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Tell me about the workflow. I&apos;ll help you map the system behind it.
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
