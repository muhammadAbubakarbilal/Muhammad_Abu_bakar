'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA, FaqItem } from '@/lib/data';

export function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const categories = ['All', 'Strategy & AI', 'Integrations & Tools', 'Reliability & Security', 'Timeline & Engagement'];

  const filteredFaqs = activeCategory === 'All' 
    ? FAQ_DATA 
    : FAQ_DATA.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full space-y-8">
      
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors border ${
              activeCategory === cat
                ? 'bg-amber-500 text-zinc-950 border-amber-500 font-bold'
                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all ${
                isOpen
                  ? 'bg-[#0f131c] border-amber-500/40 shadow-lg'
                  : 'bg-[#0e121a] border-zinc-800/90 hover:border-zinc-700'
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-amber-400/80 uppercase">
                    {faq.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-zinc-100 font-mono">
                    {faq.question}
                  </h3>
                </div>

                <div className={`p-1.5 rounded-lg bg-zinc-800/60 text-zinc-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-amber-400' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-4">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
