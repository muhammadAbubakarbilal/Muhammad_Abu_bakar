import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="global-footer" className="w-full bg-[#08090d] border-t border-zinc-800/80 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-zinc-800/60">
          
          {/* Identity Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-mono text-xs font-bold text-zinc-100">
                AB
              </div>
              <span className="text-sm font-semibold text-zinc-100 tracking-tight">
                Muhammad ABU BAKAR
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-md">
              AI Systems & Automation Engineer. Building connected business systems that remove repetitive manual work and turn operational friction into reliable software pipelines.
            </p>
            <div className="pt-2 text-zinc-300 font-mono text-[11px] space-y-1">
              <p>&ldquo;You bring the bottleneck. I figure out the system.&rdquo;</p>
              <p className="text-amber-500/90">&ldquo;AI is not the goal. A better-running business is.&rdquo;</p>
            </div>
          </div>

          {/* Systems Column */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-200 font-mono">
              Systems
            </p>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="/systems#lead-sales-systems" className="hover:text-zinc-200 transition-colors">
                  Lead & Sales Systems
                </Link>
              </li>
              <li>
                <Link href="/systems#customer-operations" className="hover:text-zinc-200 transition-colors">
                  Customer Operations
                </Link>
              </li>
              <li>
                <Link href="/systems#ai-chatbots-assistants" className="hover:text-zinc-200 transition-colors">
                  AI Chatbots & Assistants
                </Link>
              </li>
              <li>
                <Link href="/systems#workflow-automation" className="hover:text-zinc-200 transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/systems#custom-business-software" className="hover:text-zinc-200 transition-colors">
                  Custom Business Software
                </Link>
              </li>
              <li>
                <Link href="/systems#ai-knowledge-systems" className="hover:text-zinc-200 transition-colors">
                  AI Knowledge Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-200 font-mono">
              Studio
            </p>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="/work" className="hover:text-zinc-200 transition-colors">
                  Work & Demos
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-zinc-200 transition-colors">
                  Engineering Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-zinc-200 transition-colors">
                  About Philosophy
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-zinc-200 transition-colors">
                  Systems Insights
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-zinc-200 transition-colors">
                  Buyer FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-zinc-200 transition-colors">
                  Diagnose Bottleneck
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Direct Access */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-200 font-mono">
              Direct Contact
            </p>
            <p className="text-xs text-zinc-400">
              Have an operational bottleneck to discuss?
            </p>
            <a
              id="footer-email-link"
              href="mailto:Abgakhar787@gmail.com"
              className="inline-flex items-center gap-2 text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Abgakhar787@gmail.com</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <div className="pt-3">
              <Link
                href="/contact"
                className="inline-block px-3.5 py-2 text-xs font-medium bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 rounded-md transition-colors"
              >
                Submit Diagnostic Request →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} Muhammad ABU BAKAR. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Next.js Architecture</span>
            <span className="text-zinc-700">•</span>
            <span>TypeScript</span>
            <span className="text-zinc-700">•</span>
            <span>Human-in-the-Loop AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
