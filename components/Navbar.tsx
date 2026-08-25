'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/systems', label: 'Systems' },
  { href: '/work', label: 'Work' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#090b0e]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/20'
          : 'bg-[#090b0e]/60 backdrop-blur-xs border-b border-zinc-900/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <Link
          id="nav-brand-link"
          href="/"
          className="flex items-center gap-3.5 group text-left"
        >
          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-mono text-sm font-bold text-zinc-100 group-hover:border-amber-500/80 transition-colors">
            AB
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-zinc-100 tracking-tight group-hover:text-amber-400 transition-colors">
              Muhammad ABU BAKAR
            </span>
            <span className="text-xs font-mono text-zinc-400">
              AI Systems & Automation Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1.5 bg-zinc-950/60 p-1.5 rounded-lg border border-zinc-800/60">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all duration-150 ${
                  isActive
                    ? 'bg-zinc-800 text-zinc-100 font-semibold shadow-xs'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            id="nav-primary-cta"
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors shadow-sm"
          >
            <span>Find Your Bottleneck</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/contact"
            className="text-xs font-medium px-3 py-1.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30"
          >
            Bottleneck?
          </Link>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden border-b border-zinc-800 bg-[#090b0e] px-4 pt-3 pb-6 space-y-1 shadow-2xl"
        >
          <div className="grid grid-cols-2 gap-1.5 py-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  id={`mobile-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 text-xs font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-zinc-800 text-amber-400 font-semibold'
                      : 'text-zinc-300 hover:bg-zinc-900'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="pt-3 border-t border-zinc-800/80">
            <Link
              id="mobile-primary-cta"
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 px-4 py-3 text-xs font-bold rounded-lg bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors"
            >
              <span>Find Your Bottleneck</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
