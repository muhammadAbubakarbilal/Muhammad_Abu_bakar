import React from 'react';
import type { Metadata } from 'next';
import { Mail, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { BottleneckDiagnosticForm } from '@/components/BottleneckDiagnosticForm';

export const metadata: Metadata = {
  title: 'Find Your Bottleneck — Diagnostic Intake — Muhammad ABU BAKAR',
  description: 'Submit your business workflow bottleneck. I will analyze where manual work, delays, or disconnected tools are costing you, and prepare a system blueprint.',
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Header */}
      <section className="w-full pt-6 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left border-b border-zinc-800/80">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400">
            DIAGNOSTIC INTAKE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            WHAT&apos;S SLOWING YOUR BUSINESS DOWN?
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            You don&apos;t need a formal brief or a list of software requirements. Tell me what is taking too much time, creating friction, or falling through the cracks.
          </p>
        </div>
      </section>

      {/* Main Content Grid: Form + Trust / Expectation Sidebar */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Diagnostic Form (8 Cols) */}
          <div className="lg:col-span-8">
            <BottleneckDiagnosticForm />
          </div>

          {/* Sidebar & Direct Details (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* What Happens Next Card */}
            <div className="bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-5 sm:p-6 space-y-3">
              <h3 className="text-sm font-mono font-bold text-zinc-200 uppercase tracking-wider">
                WHAT HAPPENS NEXT
              </h3>
              
              <div className="space-y-3.5 text-xs text-zinc-400">
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-amber-400 font-bold">01</span>
                  <p>
                    <strong className="text-zinc-200 block">Personal Review</strong>
                    Muhammad directly reviews your submission to identify the root operational bottleneck.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-amber-400 font-bold">02</span>
                  <p>
                    <strong className="text-zinc-200 block">Initial Diagnostic Blueprint</strong>
                    You receive an assessment detailing what should stay human, what AI can assist, and what should be automated.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-amber-400 font-bold">03</span>
                  <p>
                    <strong className="text-zinc-200 block">Architecture Walkthrough</strong>
                    If the blueprint aligns with your goals, we schedule a 30-minute technical scoping session.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Email & Standards */}
            <div className="bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-5 sm:p-6 space-y-3">
              <h3 className="text-sm font-mono font-bold text-zinc-200 uppercase tracking-wider">
                DIRECT CONTACT
              </h3>

              <div className="space-y-3 text-xs text-zinc-300 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <a
                    href="mailto:contact@abubakarbilal.com"
                    className="hover:text-amber-400 transition-colors"
                  >
                    contact@abubakarbilal.com
                  </a>
                </div>

                <div className="flex items-center gap-2 text-zinc-400">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Response: Within 24 business hours</span>
                </div>

                <div className="flex items-center gap-2 text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Strict NDA & confidentiality respected</span>
                </div>
              </div>
            </div>

            {/* Quote Callout */}
            <div className="p-5 rounded-2xl bg-[#090b0e] border border-zinc-800/80 font-mono text-[11px] text-zinc-400 leading-relaxed">
              <span className="text-amber-400 block mb-1">Guiding Principle:</span>
              &ldquo;Never automate a process before diagnosing whether that process should exist in the first place.&rdquo;
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
