import React from 'react';
import { Rocket, Sparkles, Cpu, Layers, Sliders, Database, ArrowUpRight } from 'lucide-react';
import { futureScope } from '../data/projectData';

export default function FutureScope() {
  return (
    <section id="future-scope" className="py-12 sm:py-16 border-b border-slate-200 bg-slate-50/50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              11 — Future Horizons
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
            <Rocket className="w-6 h-6 text-blue-600" />
            Future Scope
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
            Potential technical enhancements, algorithmic extensions, and architectural avenues for future research.
          </p>
        </div>

        {/* 10 Future Scope Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
          {futureScope.map((item, idx) => (
            <div
              key={idx}
              className="academic-card p-4 bg-white border border-slate-200 flex flex-col justify-between hover:border-blue-300 transition-all"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 block mb-1">
                  0{idx + 1}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
