import React from 'react';
import { Lightbulb, CheckCircle2 } from 'lucide-react';
import { overallFindings } from '../data/projectData';

export default function OverallFindings() {
  return (
    <section className="py-12 sm:py-16 border-b border-slate-200 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              09 — Synthesis & Reflection
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <Lightbulb className="w-6 h-6 text-amber-500" />
            What Did We Learn?
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
            Core analytical takeaways summarizing our data mining investigations into student academic outcomes.
          </p>
        </div>

        {/* 5 Findings List */}
        <div className="space-y-3.5">
          {overallFindings.map((point, idx) => (
            <div
              key={idx}
              className="academic-card p-5 bg-white flex items-start gap-4 hover:border-slate-300 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-700 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                0{idx + 1}
              </div>
              <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
