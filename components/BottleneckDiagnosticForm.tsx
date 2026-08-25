'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const PROBLEM_OPTIONS = [
  'Leads & Inbound Capture',
  'Lead Follow-Up & Scoring',
  'CRM Management & Sync',
  'Customer Operations & Onboarding',
  'Appointment & Calendar Booking',
  'Customer Support & FAQs',
  'Repetitive Admin / Spreadsheets',
  'Workflow Automation (APIs/Webhooks)',
  'Website + AI Assistant',
  'AI Chatbot / Receptionist',
  'AI Agent System',
  'Custom Business Software / Portal',
  'Multi-Tool Integrations',
  'Not Sure (Need Workflow Audit)'
];

const BUDGET_OPTIONS = [
  'Under $5,000 (Targeted Automation Win)',
  '$5,000 – $15,000 (Full Workflow System)',
  '$15,000 – $35,000 (Custom Portal / AI Engine)',
  '$35,000+ (End-to-End Enterprise Operations)',
  'Need scoping first'
];

export function BottleneckDiagnosticForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    website: '',
    problem: 'Leads & Inbound Capture',
    currentProcess: '',
    frequency: 'Daily (High volume)',
    currentTools: '',
    budget: '$5,000 – $15,000 (Full Workflow System)',
    additionalContext: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<{
    submissionId: string;
    receivedAt: string;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({ general: data.error || 'Submission failed. Please check your inputs.' });
        }
      } else {
        setSubmittedData({
          submissionId: data.submissionId,
          receivedAt: data.receivedAt,
          message: data.message
        });
      }
    } catch (err) {
      setErrors({ general: 'Network error. Please try again or reach out directly via email.' });
    } finally {
      setLoading(false);
    }
  };

  if (submittedData) {
    return (
      <div id="diagnostic-success-card" className="bg-[#0f131a] border border-emerald-500/50 rounded-2xl p-8 sm:p-10 shadow-2xl text-left space-y-6">
        <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500 flex items-center justify-center text-emerald-400">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
            DIAGNOSTIC INTAKE RECEIVED • REF #{submittedData.submissionId}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
            Workflow Details Successfully Transmitted
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {submittedData.message}
          </p>
        </div>

        <div className="bg-[#090b0e] border border-zinc-800 rounded-xl p-5 font-mono text-xs space-y-2 text-zinc-300">
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-400">Company:</span>
            <span className="text-zinc-100 font-bold">{formData.business}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-400">Primary Friction:</span>
            <span className="text-amber-400">{formData.problem}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Next Step:</span>
            <span className="text-emerald-400">Manual review & system proposal within 24h</span>
          </div>
        </div>

        <button
          onClick={() => {
            setSubmittedData(null);
            setFormData({
              name: '',
              email: '',
              business: '',
              website: '',
              problem: 'Leads & Inbound Capture',
              currentProcess: '',
              frequency: 'Daily (High volume)',
              currentTools: '',
              budget: '$5,000 – $15,000 (Full Workflow System)',
              additionalContext: ''
            });
          }}
          className="text-xs font-mono text-amber-400 hover:text-amber-300 underline"
        >
          Submit another workflow bottleneck →
        </button>
      </div>
    );
  }

  return (
    <form
      id="bottleneck-diagnostic-form"
      onSubmit={handleSubmit}
      className="bg-[#0f131a] border border-zinc-800/90 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6 text-left"
    >
      {errors.general && (
        <div className="p-4 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errors.general}</span>
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="input-name" className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
            Your Full Name *
          </label>
          <input
            id="input-name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alex Morgan"
            className="w-full bg-[#090b0e] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
          />
          {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="input-email" className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
            Business Email *
          </label>
          <input
            id="input-email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@company.com"
            className="w-full bg-[#090b0e] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
          />
          {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Row 2: Company & Website */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="input-business" className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
            Company / Organization *
          </label>
          <input
            id="input-business"
            type="text"
            name="business"
            required
            value={formData.business}
            onChange={handleChange}
            placeholder="e.g. Apex Growth Partners"
            className="w-full bg-[#090b0e] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
          />
          {errors.business && <p className="text-[11px] text-rose-400 mt-1">{errors.business}</p>}
        </div>

        <div>
          <label htmlFor="input-website" className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
            Website URL
          </label>
          <input
            id="input-website"
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://company.com"
            className="w-full bg-[#090b0e] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Primary Problem Selector */}
      <div>
        <label htmlFor="select-problem" className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
          Primary Operational Friction Area *
        </label>
        <select
          id="select-problem"
          name="problem"
          value={formData.problem}
          onChange={handleChange}
          className="w-full bg-[#090b0e] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-zinc-100 focus:outline-none focus:border-amber-500 transition-colors"
        >
          {PROBLEM_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="bg-zinc-900 text-zinc-100">
              {opt}
            </option>
          ))}
        </select>
        {errors.problem && <p className="text-[11px] text-rose-400 mt-1">{errors.problem}</p>}
      </div>

      {/* Row 4: Current Process Narrative */}
      <div>
        <label htmlFor="textarea-process" className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
          How Does This Process Currently Happen? *
        </label>
        <textarea
          id="textarea-process"
          name="currentProcess"
          required
          rows={3}
          value={formData.currentProcess}
          onChange={handleChange}
          placeholder="e.g. When an inquiry lands, our team manually copies details from Gmail into a Google Sheet, then someone manually updates HubSpot and sends an email if they remember..."
          className="w-full bg-[#090b0e] border border-zinc-800 rounded-lg p-3.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors resize-y"
        />
        {errors.currentProcess && <p className="text-[11px] text-rose-400 mt-1">{errors.currentProcess}</p>}
      </div>

      {/* Row 5: Current Tools & Frequency */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="input-tools" className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
            Current Tools Used (separated by comma)
          </label>
          <input
            id="input-tools"
            type="text"
            name="currentTools"
            value={formData.currentTools}
            onChange={handleChange}
            placeholder="HubSpot, Stripe, Notion, Gmail, Linear..."
            className="w-full bg-[#090b0e] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="select-budget" className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
            Target Investment Scope
          </label>
          <select
            id="select-budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full bg-[#090b0e] border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-zinc-100 focus:outline-none focus:border-amber-500 transition-colors"
          >
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-zinc-900 text-zinc-100">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 6: Additional Context */}
      <div>
        <label htmlFor="textarea-context" className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
          Additional Context / Notes
        </label>
        <textarea
          id="textarea-context"
          name="additionalContext"
          rows={2}
          value={formData.additionalContext}
          onChange={handleChange}
          placeholder="Any specific constraints, timeline preferences, or edge cases..."
          className="w-full bg-[#090b0e] border border-zinc-800 rounded-lg p-3.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors resize-y"
        />
      </div>

      {/* CTA Button */}
      <div className="pt-2">
        <button
          id="submit-diagnostic-btn"
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-all duration-150 shadow-lg disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Analyzing Workflow...</span>
            </>
          ) : (
            <>
              <span>FIND MY BOTTLENECK</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-[11px] text-zinc-300 mt-2 font-mono">
          No generic sales pitch. You bring the bottleneck, I formulate the system blueprint.
        </p>
      </div>
    </form>
  );
}
