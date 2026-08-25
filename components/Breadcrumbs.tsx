import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 text-xs font-mono text-zinc-300 py-3">
      <Link href="/" className="hover:text-zinc-300 transition-colors">
        Home
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-zinc-400 shrink-0" />
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-zinc-300 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-zinc-300 font-medium truncate max-w-[240px] sm:max-w-none">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
