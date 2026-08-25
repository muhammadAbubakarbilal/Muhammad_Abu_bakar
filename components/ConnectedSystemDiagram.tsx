'use client';

import React, { useState } from 'react';
import { 
  Globe, 
  Bot, 
  Database, 
  Cpu, 
  HardDrive, 
  Users, 
  UserCheck, 
  Mail, 
  Calendar, 
  CreditCard, 
  CheckSquare, 
  BarChart3, 
  MessageSquare 
} from 'lucide-react';

interface SystemNode {
  id: string;
  name: string;
  category: 'core' | 'satellite';
  icon: any;
  role: string;
  dataFlow: string;
}

const CORE_FLOW: SystemNode[] = [
  { id: 'web', name: 'Website', category: 'core', icon: Globe, role: 'High-converting interactive intake', dataFlow: 'Inbound prospect parameters' },
  { id: 'ai', name: 'AI Layer', category: 'core', icon: Bot, role: 'Intent scoring & qualification', dataFlow: 'Structured JSON dossier' },
  { id: 'crm', name: 'CRM', category: 'core', icon: Database, role: 'Single source of truth', dataFlow: 'Deal stage & contact updates' },
  { id: 'auto', name: 'Automation Engine', category: 'core', icon: Cpu, role: 'Event routing & logic triggers', dataFlow: 'Cross-tool webhooks' },
  { id: 'db', name: 'Database', category: 'core', icon: HardDrive, role: 'Immutable event & state store', dataFlow: 'ACID transactional state' },
  { id: 'team', name: 'Team', category: 'core', icon: Users, role: 'Strategic human consultation', dataFlow: 'High-trust customer closure' },
  { id: 'cust', name: 'Customer', category: 'core', icon: UserCheck, role: 'Delighted client outcome', dataFlow: 'Friction-free onboarding' },
];

const SATELLITE_SYSTEMS = [
  { id: 'email', name: 'Email (Postmark / Resend)', icon: Mail, desc: 'Automated confirmations & briefs' },
  { id: 'cal', name: 'Calendar (Cal.com)', icon: Calendar, desc: 'Dynamic slot reservations' },
  { id: 'pay', name: 'Payments (Stripe)', icon: CreditCard, desc: 'Contract sign-off & billing webhooks' },
  { id: 'pm', name: 'Project Mgmt (Linear)', icon: CheckSquare, desc: 'Auto-provisioned task templates' },
  { id: 'analytics', name: 'Analytics (PostHog)', icon: BarChart3, desc: 'Funnel drop-off monitoring' },
  { id: 'chat', name: 'Team Chat (Slack)', icon: MessageSquare, desc: 'VIP high-intent deal alerts' },
];

export function ConnectedSystemDiagram() {
  const [activeNodeId, setActiveNodeId] = useState<string>('ai');
  const activeNode = CORE_FLOW.find((n) => n.id === activeNodeId) || CORE_FLOW[1];

  return (
    <section id="section-connected-systems" className="w-full py-20 bg-[#090b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400 mb-3">
            03 / ARCHITECTURE
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            THE VALUE IS IN THE CONNECTION
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            A website can be more than a brochure. A chatbot can be more than a chat box. A CRM can be more than a database. Automation can be more than a chain of disconnected triggers. The real value comes from designing them as one unified system.
          </p>
        </div>

        {/* Central Architecture Container */}
        <div className="bg-[#0e121a] border border-zinc-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Top Label */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-800/80 mb-8">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              CORE SYSTEM PIPELINE
            </span>
            <span className="text-xs font-mono text-amber-400">
              Interactive Data Flow
            </span>
          </div>

          {/* Main Horizontal Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
            {CORE_FLOW.map((node, index) => {
              const Icon = node.icon;
              const isSelected = node.id === activeNodeId;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`flex flex-col items-center p-3.5 rounded-xl border text-center transition-all ${
                    isSelected
                      ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg ring-1 ring-amber-500/40 scale-105'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-800/80 flex items-center justify-center mb-2 text-zinc-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-200">
                    {node.name}
                  </span>
                  <span className="text-[10px] text-zinc-300 font-mono mt-1">
                    Step 0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Bar */}
          <div className="bg-[#141a24] border border-zinc-800/80 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-amber-400 font-semibold">SELECTED NODE:</span>
                <span className="text-sm font-bold text-zinc-100">{activeNode.name}</span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">{activeNode.role}</p>
            </div>
            <div className="bg-[#090b0e] px-4 py-2 rounded-lg border border-zinc-800 font-mono text-xs text-zinc-300">
              <span className="text-zinc-300">Emitted Data: </span>
              <span className="text-emerald-400">{activeNode.dataFlow}</span>
            </div>
          </div>

          {/* Surrounding Satellite Systems */}
          <div className="border-t border-zinc-800/80 pt-6">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-4">
              INTEGRATED SATELLITE PLATFORMS
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {SATELLITE_SYSTEMS.map((sat) => {
                const Icon = sat.icon;
                return (
                  <div
                    key={sat.id}
                    className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60 flex flex-col items-start gap-1 text-left"
                  >
                    <div className="flex items-center gap-2 text-zinc-300 text-xs font-medium">
                      <Icon className="w-3.5 h-3.5 text-amber-400/80" />
                      <span>{sat.name}</span>
                    </div>
                    <span className="text-[11px] text-zinc-400 leading-tight">
                      {sat.desc}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
