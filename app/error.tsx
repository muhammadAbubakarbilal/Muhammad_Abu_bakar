'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Runtime Application Error:', error);
  }, [error]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-24 text-center max-w-2xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-800 text-xs font-mono text-red-400 mb-6">
        <AlertTriangle className="w-3.5 h-3.5" />
        APPLICATION RUNTIME NOTICE
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight mb-4">
        Something unexpected occurred
      </h1>
      <p className="text-zinc-400 text-sm sm:text-base mb-8 max-w-md">
        An error occurred while loading this view. You can try reloading the component or navigating back to safety.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try Again</span>
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
