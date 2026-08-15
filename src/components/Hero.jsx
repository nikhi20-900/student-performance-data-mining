import React from 'react';
import { ArrowRight, BarChart3, Database, Layers, CheckCircle2 } from 'lucide-react';
import { projectMeta } from '../data/projectData';

export default function Hero() {
  return (
    <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Academic badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Academic Data Mining Case Study
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-bold text-slate-900 leading-tight sm:leading-tight tracking-tight mb-4">
            {projectMeta.title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
            {projectMeta.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <a
              href="#overview"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm transition-all hover:shadow"
            >
              <span>Explore Analysis</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-medium text-sm transition-colors shadow-2xs"
            >
              <BarChart3 className="w-4 h-4 text-slate-500" />
              <span>View Results</span>
            </a>
          </div>
        </div>

        {/* Project Information Row */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-4 sm:p-5 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {projectMeta.quickStats.map((item, idx) => (
              <div key={idx} className={`text-center ${idx > 0 && idx % 2 === 0 ? 'pt-3 sm:pt-0' : ''} px-2`}>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-0.5">
                  {item.label}
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-800 font-mono tracking-tight block">
                  {item.value}
                </span>
                <span className="text-[11px] text-slate-500 hidden sm:block">
                  {item.helper}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
