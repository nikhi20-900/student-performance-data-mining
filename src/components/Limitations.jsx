import React from 'react';
import { AlertOctagon, ShieldAlert, FileWarning } from 'lucide-react';
import { limitations } from '../data/projectData';

export default function Limitations() {
  return (
    <section id="limitations" className="py-12 sm:py-16 border-b border-slate-200 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              10 — Academic Rigor
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <AlertOctagon className="w-6 h-6 text-rose-600" />
            Project Limitations
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
            Honest evaluation of methodological constraints, sample size boundaries, and ethical considerations.
          </p>
        </div>

        {/* 10 Limitations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {limitations.map((item, idx) => (
            <div
              key={idx}
              className="academic-card p-4 sm:p-5 bg-slate-50/50 border border-slate-200 flex items-start gap-3.5"
            >
              <div className="w-6 h-6 rounded-md bg-rose-50 text-rose-700 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                {idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
