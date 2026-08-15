import React from 'react';
import { Award, CheckCircle2, TrendingUp, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';
import { classificationFindings } from '../data/projectData';

export default function ClassificationFindings() {
  const getFindingIcon = (idx) => {
    switch (idx) {
      case 0: return Award;
      case 1: return CheckCircle2;
      case 2: return AlertTriangle;
      case 3: return ShieldCheck;
      case 4: return HelpCircle;
      default: return TrendingUp;
    }
  };

  return (
    <div className="mt-8 pt-8 border-t border-slate-200">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
          Key Classification Findings
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Core empirical conclusions drawn from model evaluations on the testing split (N=79)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classificationFindings.map((finding, idx) => {
          const Icon = getFindingIcon(idx);
          const isSpan = idx === 4; // last item spans nicely if odd
          return (
            <div
              key={idx}
              className={`academic-card p-5 bg-white border border-slate-200 hover:border-blue-200 transition-all ${
                isSpan ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  Finding {finding.number}
                </span>
                <Icon className="w-4 h-4 text-slate-400" />
              </div>

              <h4 className="text-sm font-bold text-slate-900 mb-2">
                {finding.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {finding.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
