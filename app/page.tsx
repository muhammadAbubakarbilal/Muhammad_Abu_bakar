import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Layers, 
  GitMerge, 
  Bot, 
  Zap, 
  Database, 
  FileCode2, 
  Clock, 
  AlertTriangle, 
  HelpCircle, 
  Cpu, 
  UserCheck, 
  Lock, 
  Sliders, 
  FileSpreadsheet, 
  CheckCircle2,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import { WorkflowVisualizer } from '@/components/WorkflowVisualizer';
import { PhilosophyMatrix } from '@/components/PhilosophyMatrix';
import { ConnectedSystemDiagram } from '@/components/ConnectedSystemDiagram';
import { BeforeAfterComparison } from '@/components/BeforeAfterComparison';
import { SYSTEMS_DATA, PROJECTS_DATA } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* ======================================================== */}
      {/* SECTION 01 — HERO */}
      {/* ======================================================== */}
      <section id="hero-section" className="w-full pt-8 sm:pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              AI SYSTEMS • AUTOMATION • CUSTOM SOFTWARE
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-100 tracking-tight leading-[1.1]">
              YOUR BUSINESS DOESN&apos;T NEED MORE TOOLS. IT NEEDS BETTER SYSTEMS.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
              I design and build AI agents, automation workflows, custom software, websites, and connected business systems that remove repetitive work and improve how your business operates.
            </p>

            {/* Supporting text */}
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-mono">
              I start with the bottleneck — not the technology. I map how the work happens, decide what should stay human, what AI should assist with, and what can be automated.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                id="hero-primary-cta"
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-all duration-150 shadow-lg shadow-amber-500/10"
              >
                <span>Find Your Bottleneck</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                id="hero-secondary-cta"
                href="/systems"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold rounded-xl bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:text-white transition-colors"
              >
                <span>Explore Systems</span>
              </Link>
            </div>

            {/* Quick Metrics / Philosophy Tags */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Human Judgment First</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Deterministic APIs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Targeted AI Assistance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Engineer Portrait & Verification Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md bg-[#0e121a] border border-zinc-800/90 rounded-3xl p-3 sm:p-4 shadow-2xl group hover:border-zinc-700 transition-all">
              
              {/* Status Header inside card */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800/70 text-[11px] font-mono text-zinc-400 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-zinc-300 font-semibold">ENGINEER PROFILE</span>
                </div>
                <span className="text-zinc-500">M. ABU BAKAR</span>
              </div>

              {/* Portrait Image Container */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80">
                <Image
                  src="/assets/abu_bakar.jpg"
                  alt="Muhammad Abu Bakar — AI Systems & Automation Engineer"
                  fill
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  priority
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />
                
                {/* Subtle Gradient Overlay at bottom for readable badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-700/80 text-left space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-zinc-100 tracking-tight">
                      Muhammad Abu Bakar
                    </p>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      LEAD
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 font-mono">
                    AI Systems & Automation Engineer
                  </p>
                </div>
              </div>

              {/* Technical Capability Badges */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-zinc-400">
                <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  <span className="block text-zinc-200 font-bold">Systems</span>
                  <span>Architecture</span>
                </div>
                <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  <span className="block text-zinc-200 font-bold">Automation</span>
                  <span>APIs & Logic</span>
                </div>
                <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  <span className="block text-zinc-200 font-bold">Full-Stack</span>
                  <span>Custom Apps</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Hero Visualizer */}
        <div className="mt-14 w-full">
          <WorkflowVisualizer />
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 00 — THE CORE PHILOSOPHY */}
      {/* ======================================================== */}
      <PhilosophyMatrix />

      {/* ======================================================== */}
      {/* SECTION 01 — COMMON BOTTLENECKS */}
      {/* ======================================================== */}
      <section id="section-bottlenecks" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 mb-3">
            01 / THE PROBLEMS
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            WHERE MANUAL WORK STARTS COSTING YOU
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Most operational debt hides in plain sight: slow responses, manual copy-pasting across tools, and spreadsheets holding together core business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <span className="text-[11px] font-mono text-amber-400 font-bold uppercase">BOTTLENECK 01</span>
              <h3 className="text-base sm:text-lg font-bold text-zinc-100 mt-2 tracking-tight">
                LEADS COME IN. FOLLOW-UP DEPENDS ON MEMORY.
              </h3>
              <div className="mt-4 space-y-2 text-xs text-zinc-400">
                <p className="font-mono text-zinc-300 text-[11px]">Symptoms:</p>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                  <li>Inquiries arrive across multiple channels (web, email, WhatsApp)</li>
                  <li>Delayed response times (leads go cold after 2 hours)</li>
                  <li>Inconsistent follow-up dependent on busy sales reps</li>
                  <li>CRM records left un-updated or missing context</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 font-mono text-[11px] text-zinc-300">
              <span className="text-amber-400 block mb-1">Connected System:</span>
              <span className="text-zinc-300">Website → AI Qualification → CRM Sync → Smart Follow-Up → Sales Rep</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <span className="text-[11px] font-mono text-amber-400 font-bold uppercase">BOTTLENECK 02</span>
              <h3 className="text-base sm:text-lg font-bold text-zinc-100 mt-2 tracking-tight">
                YOUR TEAM KEEPS MOVING INFORMATION BETWEEN TOOLS.
              </h3>
              <div className="mt-4 space-y-2 text-xs text-zinc-400">
                <p className="font-mono text-zinc-300 text-[11px]">Symptoms:</p>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                  <li>Staff spending 1-2 hours daily on duplicate data entry</li>
                  <li>Copying information from Email → CRM → Project Management</li>
                  <li>Manual status emails and repetitive milestone notifications</li>
                  <li>High risk of human typo and formatting errors</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 font-mono text-[11px] text-zinc-300">
              <span className="text-amber-400 block mb-1">Connected System:</span>
              <span className="text-zinc-300">Webhook Trigger → Validation → API Pipeline → Database → Notification</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <span className="text-[11px] font-mono text-amber-400 font-bold uppercase">BOTTLENECK 03</span>
              <h3 className="text-base sm:text-lg font-bold text-zinc-100 mt-2 tracking-tight">
                CUSTOMERS KEEP ASKING THE SAME QUESTIONS.
              </h3>
              <div className="mt-4 space-y-2 text-xs text-zinc-400">
                <p className="font-mono text-zinc-300 text-[11px]">Symptoms:</p>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                  <li>Support queues clogged with repetitive policy and pricing FAQs</li>
                  <li>Slow response times during evenings and weekends</li>
                  <li>Senior staff constantly interrupted to clarify standard procedures</li>
                  <li>Unclear next steps for prospective customers</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 font-mono text-[11px] text-zinc-300">
              <span className="text-amber-400 block mb-1">Connected System:</span>
              <span className="text-zinc-300">Website → Grounded AI Assistant → Knowledge Store → Human Escalation</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <span className="text-[11px] font-mono text-amber-400 font-bold uppercase">BOTTLENECK 04</span>
              <h3 className="text-base sm:text-lg font-bold text-zinc-100 mt-2 tracking-tight">
                YOUR BUSINESS HAS OUTGROWN ITS SOFTWARE.
              </h3>
              <div className="mt-4 space-y-2 text-xs text-zinc-400">
                <p className="font-mono text-zinc-300 text-[11px]">Symptoms:</p>
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                  <li>Paying for 10+ SaaS tools where 80% of features go unused</li>
                  <li>Fragile 50-tab Google Sheets powering core business operations</li>
                  <li>Workarounds built because generic software can&apos;t fit your model</li>
                  <li>Disconnected data with zero real-time executive visibility</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 font-mono text-[11px] text-zinc-300">
              <span className="text-amber-400 block mb-1">Connected System:</span>
              <span className="text-zinc-300">Custom Web App → PostgreSQL DB → Specialized Workflows → Admin Portal</span>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 02 — WHAT I BUILD */}
      {/* ======================================================== */}
      <section id="section-systems-summary" className="w-full py-20 bg-[#0c0f16] border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 mb-3">
                02 / SYSTEMS
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
                SYSTEMS BUILT AROUND THE BUSINESS
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Purpose-built engineering solutions designed to remove specific points of operational friction.
              </p>
            </div>
            <Link
              href="/systems"
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 font-mono"
            >
              <span>Explore All System Architectures</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 6 System Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SYSTEMS_DATA.map((sys) => (
              <div
                key={sys.id}
                className="bg-[#11151f] border border-zinc-800/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                    <span className="text-xs font-mono text-amber-400 font-bold">
                      {sys.number}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-300">
                      System Module
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-100 mt-4 group-hover:text-amber-400 transition-colors">
                    {sys.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                    {sys.shortDescription}
                  </p>

                  <ul className="mt-5 space-y-2 text-[11px] text-zinc-400">
                    {sys.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/80 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <Link
                    href={`/systems#${sys.slug}`}
                    className="text-xs font-mono font-medium text-zinc-300 group-hover:text-amber-400 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 03 — CONNECTED SYSTEMS */}
      {/* ======================================================== */}
      <ConnectedSystemDiagram />

      {/* ======================================================== */}
      {/* SECTION 04 — BEFORE / AFTER */}
      {/* ======================================================== */}
      <BeforeAfterComparison />

      {/* ======================================================== */}
      {/* SECTION 05 — WHO THIS IS FOR */}
      {/* ======================================================== */}
      <section id="section-who-this-is-for" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 mb-3">
            05 / FIT
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            IF THIS SOUNDS FAMILIAR, WE SHOULD TALK
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            I work with service businesses, growing agencies, founders, and operations leaders who want to eliminate manual sludge.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "YOU'RE LOSING LEADS",
              desc: "because follow-up isn't consistent and inquiries sit unresponded in busy team inboxes."
            },
            {
              title: "YOUR TEAM IS DROWNING IN ADMIN",
              desc: "because too much daily work is spent copying numbers, updating statuses, and chasing missing documents."
            },
            {
              title: "YOU'RE USING TOO MANY TOOLS",
              desc: "and information isn't moving cleanly between them, forcing you to create shadow spreadsheets."
            },
            {
              title: "CUSTOMERS EXPERIENCE FRICTION",
              desc: "because booking, inquiry answering, onboarding, or communications are fragmented and slow."
            },
            {
              title: "YOUR SOFTWARE NO LONGER FITS",
              desc: "and your team has started building clumsy workarounds to compensate for rigid SaaS limitations."
            },
            {
              title: "YOU WANT TO USE AI",
              desc: "but don't know where it actually belongs without creating another full-time management headache."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0f1219] border border-zinc-800/80 hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm sm:text-base font-bold text-zinc-100 font-mono tracking-tight text-amber-400/90">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Signal #{idx + 1}</span>
                <span className="text-amber-500/80">Solvable with Systems</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 06 — HOW I USE AI */}
      {/* ======================================================== */}
      <section id="section-how-i-use-ai" className="w-full py-20 bg-[#0b0e14] border-y border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 mb-3">
              06 / AI STRATEGY
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
              AI SHOULD REMOVE WORK. NOT CREATE ANOTHER JOB.
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              We never add AI for novelty. AI is applied strictly where qualitative unstructured data needs to be turned into structured action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#10141d] border border-zinc-800">
              <span className="text-xs font-mono text-amber-400 font-bold uppercase">Principle 01</span>
              <h3 className="text-base font-bold text-zinc-100 mt-2 font-mono">
                AI ASSISTS
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                When people still need to make the final decision. AI summarizes background context, synthesizes research, drafts client communications, and extracts structured fields from complex documents.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#10141d] border border-zinc-800">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Principle 02</span>
              <h3 className="text-base font-bold text-zinc-100 mt-2 font-mono">
                AI ACTS
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                When the task is predictable, bounded, and operates within strict guardrails. Qualifying standard inbound leads, searching verified company documentation, and categorizing routine support requests.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#10141d] border border-zinc-800">
              <span className="text-xs font-mono text-sky-400 font-bold uppercase">Principle 03</span>
              <h3 className="text-base font-bold text-zinc-100 mt-2 font-mono">
                HUMANS TAKE OVER
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                When context, trust, judgment, emotional empathy, or sensitive exceptions occur. The system routes the context directly to the right operator with a 1-click briefing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 07 — TECHNICAL CREDIBILITY (UNDER THE HOOD) */}
      {/* ======================================================== */}
      <section id="section-under-the-hood" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 mb-3">
            07 / TECHNICAL CREDIBILITY
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            UNDER THE HOOD
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Technology is never a wall of badges. Here is what each layer of our production architecture enables for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              layer: 'FRONTEND',
              tech: 'Next.js, React 19, TypeScript, Tailwind CSS',
              enables: 'High-converting interactive diagnostic intakes, responsive client onboarding portals, and role-based internal dashboards with instant page loads.'
            },
            {
              layer: 'BACKEND & LOGIC',
              tech: 'Next.js Server Actions, REST APIs, Python workers',
              enables: 'Type-safe business logic, robust input validation, webhook security verification, and rate-limited processing.'
            },
            {
              layer: 'DATA & STORAGE',
              tech: 'PostgreSQL, pgvector, Prisma/Drizzle ORM',
              enables: 'ACID transactional data integrity, structured historical audit logs, and hybrid semantic vector search over internal knowledge.'
            },
            {
              layer: 'AI & REASONING',
              tech: 'Gemini 3.7 / 3.1 Pro, RAG Pipelines, Tool Calling',
              enables: 'Grounded question answering, intent scoring, document intelligence, and strict human escalation thresholds.'
            },
            {
              layer: 'AUTOMATION & PIPELINES',
              tech: 'Event-driven Webhooks, n8n, Background Workers',
              enables: 'Instant cross-tool synchronization between CRM, billing, calendars, and team messaging with zero human copy-pasting.'
            },
            {
              layer: 'INFRASTRUCTURE & RELIABILITY',
              tech: 'Docker, Cloud Run / Vercel, Error Auditing',
              enables: 'High availability, sub-second latency, automated SSL, monitoring alerts, and enterprise-grade uptime.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0f121a] border border-zinc-800/90 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-amber-400 font-semibold tracking-wider uppercase">
                  {item.layer}
                </span>
                <h3 className="text-sm font-bold text-zinc-200 mt-1 font-mono">
                  {item.tech}
                </h3>
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  {item.enables}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 08 — FINAL CTA BANNER */}
      {/* ======================================================== */}
      <section id="section-final-cta" className="w-full py-20 bg-gradient-to-b from-[#090b0e] to-[#121622] border-t border-zinc-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
            START WITH THE BOTTLENECK
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            YOU BRING THE BOTTLENECK. I FIGURE OUT THE SYSTEM.
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            You don&apos;t need to know what code or API connectors are required. Tell me what is taking too much time, creating friction, or falling through the cracks.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              id="final-primary-cta"
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors shadow-xl"
            >
              <span>FIND MY BOTTLENECK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white transition-colors"
            >
              <span>Explore Demo Systems</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
