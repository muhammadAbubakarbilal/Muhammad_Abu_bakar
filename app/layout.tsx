import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AiAssistantDrawer } from '@/components/AiAssistantDrawer';

export const metadata: Metadata = {
  title: 'Muhammad Abu Bakar Bilal — AI Systems & Automation Engineer',
  description: 'I design and build AI agents, automation workflows, custom software, websites, and connected business systems that remove repetitive work and improve how your business operates.',
  openGraph: {
    title: 'Muhammad Abu Bakar Bilal — AI Systems & Automation Engineer',
    description: 'I start with the bottleneck — not the technology. I map how the work happens, decide what should stay human, what AI should assist with, and what can be automated.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Abu Bakar Bilal — AI Systems & Automation Engineer',
    description: 'Businesses don\'t always need more software. They often need less manual work.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#090b0e] text-zinc-100 min-h-screen flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-zinc-950">
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
        <AiAssistantDrawer />
      </body>
    </html>
  );
}
