import React from 'react';
import { Award, BookOpen, Quote, CheckCircle2 } from 'lucide-react';
import { academicConclusion } from '../data/projectData';

export default function Conclusion() {
  return (
    <section id="conclusion" className="py-12 sm:py-16 border-b border-slate-200 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              12 — Conclusion
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Conclusion
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
            Final synthesis of academic findings, algorithmic effectiveness, and methodological implications.
          </p>
        </div>

        {/* Formal Academic Conclusion Box */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-6 sm:p-10 relative overflow-hidden">
          <Quote className="w-12 h-12 text-slate-200 absolute top-4 right-6 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-serif">
              {academicConclusion}
            </p>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span className="font-semibold text-slate-700">Project Completed for BCA Data Mining Viva</span>
              </div>
              <span className="font-mono text-slate-400">Reproducible Pipeline & Notebook Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
