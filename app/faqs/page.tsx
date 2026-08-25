import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Frequently Answered Questions — Muhammad Abu Bakar Bilal',
  description: 'Direct, candid answers about how systems are scoped, when not to use AI, how failures are handled, data security, and timeline expectations.',
};

export default function FaqsPage() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Header */}
      <section className="w-full pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left border-b border-zinc-800/80">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400">
            QUESTIONS & ANSWERS
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            FREQUENTLY ANSWERED QUESTIONS
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            Candid, direct explanations on how I assess bottlenecks, where AI belongs, how integrations stay resilient, and what working together looks like.
          </p>
        </div>
      </section>

      {/* FAQs Main Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <FaqAccordion />
      </section>

      {/* Bottom Consultation Box */}
      <section className="w-full py-16 bg-[#0c0f16] border-t border-zinc-800/80 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold text-zinc-100">
            Have a question specific to your tech stack?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            I am happy to review your current toolchain and explain whether automation or custom software is appropriate.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors shadow-lg"
            >
              <span>Ask About Your Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
