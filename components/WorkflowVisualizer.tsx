'use client';

import React, { useState } from 'react';
import { 
  Globe, 
  Bot, 
  FileInput, 
  SlidersHorizontal, 
  Database, 
  MailCheck, 
  CalendarCheck, 
  FolderCheck, 
  Layers, 
  UserCheck,
  CheckCircle2,
  Cpu,
  User,
  Zap
} from 'lucide-react';

interface StageInfo {
  id: string;
  name: string;
  shortLabel: string;
  tier: 'Automated' | 'AI-Assisted' | 'Human';
  icon: any;
  summary: string;
  detail: string;
  payload: string;
}

const STAGES: StageInfo[] = [
  {
    id: 'website',
    name: 'Website',
    shortLabel: '01 Ingestion',
    tier: 'Automated',
    icon: Globe,
    summary: 'New inquiry arrives.',
    detail: 'Prospect lands on high-converting interactive page and initiates intake or diagnostic question.',
    payload: '{ event: "inbound_interest", source: "web_portal" }'
  },
  {
    id: 'ai-assistant',
    name: 'AI Assistant',
    shortLabel: '02 Assistant',
    tier: 'AI-Assisted',
    icon: Bot,
    summary: 'Identifies intent and captures information.',
    detail: 'Grounded conversational AI parses unstructured prospect text, asks targeted clarifying questions, and extracts core bottleneck.',
    payload: '{ intent: "lead_automation", urgency: "high", budget_tier: "enterprise" }'
  },
  {
    id: 'lead-capture',
    name: 'Lead Capture',
    shortLabel: '03 Ingestion',
    tier: 'Automated',
    icon: FileInput,
    summary: 'Normalizes and validates data.',
    detail: 'API webhook handler validates email deliverability, sanitizes inputs, and builds an immutable JSON event.',
    payload: '{ verified: true, email: "prospect@co.com", latency_ms: 45 }'
  },
  {
    id: 'qualification',
    name: 'Qualification',
    shortLabel: '04 Scoring',
    tier: 'AI-Assisted',
    icon: SlidersHorizontal,
    summary: 'Filters spam and calculates fit score.',
    detail: 'AI evaluates prospect company profile, checks budget fit against service tiers, and drafts a 3-bullet briefing dossier.',
    payload: '{ fit_score: 94, tier: "A", rep_assigned: "Partner" }'
  },
  {
    id: 'crm',
    name: 'CRM Sync',
    shortLabel: '05 Single Truth',
    tier: 'Automated',
    icon: Database,
    summary: 'Creates and updates records.',
    detail: 'HubSpot/PostgreSQL updated instantly with structured company notes, deal stage, and tags with zero manual copying.',
    payload: '{ crm_deal_id: "deal_8831", state: "qualified" }'
  },
  {
    id: 'follow-up',
    name: 'Follow-Up',
    shortLabel: '06 Dispatch',
    tier: 'Automated',
    icon: MailCheck,
    summary: 'Triggers the appropriate next step.',
    detail: 'Contextual confirmation and custom calendar scheduling links dispatched within 30 seconds of submission.',
    payload: '{ email_dispatched: true, sms_reminder_queued: true }'
  },
  {
    id: 'appointment',
    name: 'Appointment',
    shortLabel: '07 Booking',
    tier: 'Automated',
    icon: CalendarCheck,
    summary: 'Books meeting with pre-call brief.',
    detail: 'Calendar slot confirmed; sales engineer receives executive briefing 10 minutes prior to call.',
    payload: '{ cal_slot: "Tue 10:00 AM", brief_attached: true }'
  },
  {
    id: 'human-close',
    name: 'Consultation',
    shortLabel: '08 Human Handoff',
    tier: 'Human',
    icon: User,
    summary: 'Human handles the conversation when judgment is needed.',
    detail: 'Senior strategist leads discovery call, assesses organizational nuances, and negotiates custom deliverables.',
    payload: '{ status: "discovery_completed", outcome: "contract_drafted" }'
  },
  {
    id: 'onboarding',
    name: 'Onboarding',
    shortLabel: '09 Auto-Intake',
    tier: 'Automated',
    icon: FolderCheck,
    summary: 'Dispatches intake and provisions project.',
    detail: 'Upon contract sign-off, client portal access is created and Linear/ClickUp task templates are populated.',
    payload: '{ portal_token: "active", linear_tasks_created: 14 }'
  },
  {
    id: 'delivery',
    name: 'Delivery',
    shortLabel: '10 Execution',
    tier: 'Human',
    icon: Layers,
    summary: 'Systems engineered and verified.',
    detail: 'Production development, API integration, and validation testing executed to highest technical standards.',
    payload: '{ milestone: "production_deployed", audit_passed: true }'
  },
  {
    id: 'customer',
    name: 'Customer',
    shortLabel: '11 Outcome',
    tier: 'Human',
    icon: UserCheck,
    summary: 'Receives a smoother, faster experience.',
    detail: 'Business operations run reliably without manual data bottlenecks or forgotten customer touchpoints.',
    payload: '{ satisfaction: "high", friction_removed: true }'
  }
];

export function WorkflowVisualizer() {
  const [activeStageId, setActiveStageId] = useState<string>('ai-assistant');
  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[1];

  return (
    <div id="hero-workflow-visualizer" className="w-full bg-[#0d1017] border border-zinc-800/90 rounded-2xl p-4 sm:p-7 shadow-2xl">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-zinc-800/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              LIVE ARCHITECTURE
            </span>
            <span className="text-xs text-zinc-400 font-mono">
              Hover/Click any node to inspect data movement
            </span>
          </div>
          <h3 className="text-sm sm:text-base font-semibold text-zinc-100 mt-1">
            Connected Business Workflow (Inquiry → AI → CRM → Delivery)
          </h3>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="inline-flex items-center gap-1 text-emerald-400">
            <Zap className="w-3 h-3" /> Automated
          </span>
          <span className="inline-flex items-center gap-1 text-amber-400">
            <Cpu className="w-3 h-3" /> AI-Assisted
          </span>
          <span className="inline-flex items-center gap-1 text-sky-400">
            <User className="w-3 h-3" /> Human
          </span>
        </div>
      </div>

      {/* Node Track / Interactive Pipeline */}
      <div className="py-6 overflow-x-auto">
        <div className="min-w-[760px] flex items-center justify-between relative">
          {/* Connecting Track Line */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-zinc-800 -translate-y-1/2 z-0" />

          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = stage.id === activeStageId;
            
            let tierColor = 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30';
            if (stage.tier === 'AI-Assisted') {
              tierColor = 'text-amber-400 border-amber-500/40 bg-amber-950/30';
            } else if (stage.tier === 'Human') {
              tierColor = 'text-sky-400 border-sky-500/40 bg-sky-950/30';
            }

            return (
              <button
                key={stage.id}
                id={`workflow-node-${stage.id}`}
                onClick={() => setActiveStageId(stage.id)}
                onMouseEnter={() => setActiveStageId(stage.id)}
                className={`relative z-10 flex flex-col items-center group focus:outline-none transition-transform ${
                  isSelected ? 'scale-110' : 'hover:scale-105 opacity-80 hover:opacity-100'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
                    isSelected
                      ? `${tierColor} ring-2 ring-amber-500/50 shadow-lg shadow-black`
                      : 'bg-zinc-900 border-zinc-700 text-zinc-300 group-hover:border-zinc-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="mt-2 text-[11px] font-medium text-zinc-300 font-mono tracking-tight whitespace-nowrap">
                  {stage.name}
                </span>
                <span
                  className={`text-[9px] uppercase font-mono px-1 rounded mt-0.5 ${
                    stage.tier === 'Automated'
                      ? 'text-emerald-400/90'
                      : stage.tier === 'AI-Assisted'
                      ? 'text-amber-400/90'
                      : 'text-sky-400/90'
                  }`}
                >
                  {stage.tier}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Inspection Panel */}
      <div className="mt-4 bg-[#121620] border border-zinc-800 rounded-xl p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        <div className="lg:col-span-2 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-amber-400 font-semibold">
              STAGE {activeStage.shortLabel}
            </span>
            <span className="text-zinc-600">•</span>
            <span
              className={`text-xs font-mono px-2 py-0.5 rounded border ${
                activeStage.tier === 'Automated'
                  ? 'bg-emerald-950/50 text-emerald-400 border-emerald-800/60'
                  : activeStage.tier === 'AI-Assisted'
                  ? 'bg-amber-950/50 text-amber-400 border-amber-800/60'
                  : 'bg-sky-950/50 text-sky-400 border-sky-800/60'
              }`}
            >
              Role: {activeStage.tier}
            </span>
          </div>

          <h4 className="text-base font-semibold text-zinc-100 flex items-center gap-2">
            <span>{activeStage.name}:</span>
            <span className="text-zinc-300 font-normal">{activeStage.summary}</span>
          </h4>

          <p className="text-xs text-zinc-400 leading-relaxed">
            {activeStage.detail}
          </p>
        </div>

        {/* Payload / System event preview */}
        <div className="bg-[#090b0e] border border-zinc-800 rounded-lg p-3 font-mono text-[11px] text-zinc-300 space-y-1.5">
          <div className="flex items-center justify-between text-zinc-400 text-[10px] pb-1 border-b border-zinc-800">
            <span>EVENT PAYLOAD</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> VERIFIED
            </span>
          </div>
          <pre className="text-zinc-300 whitespace-pre-wrap font-mono text-[11px] leading-tight">
            {activeStage.payload}
          </pre>
        </div>
      </div>
    </div>
  );
}
