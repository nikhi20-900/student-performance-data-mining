import React from 'react';
import { Award, Layers, Target, Compass, CheckCircle2, Clock } from 'lucide-react';
import { finalResults } from '../data/projectData';

export default function FinalResults() {
  return (
    <section id="results" className="py-12 sm:py-16 border-b border-slate-200 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              08 — Synthesis
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Results
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
            Consolidated experimental outcomes across supervised multi-class classification and unsupervised partition clustering.
          </p>
        </div>

        {/* Results Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Classification Results Card */}
          <div className="academic-card p-6 sm:p-7 bg-white border-t-4 border-t-emerald-600">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Supervised Classification
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
                Completed
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-150">
                <span className="text-xs text-slate-500 uppercase font-semibold block mb-1">
                  Best Model
                </span>
                <div className="text-xl font-bold text-slate-900">
                  {finalResults.classification.bestModel}
                </div>
                <div className="text-xs font-mono text-slate-500 mt-0.5">
                  {finalResults.classification.variant}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                    Test Accuracy
                  </span>
                  <span className="text-2xl font-bold font-mono text-emerald-900 block mt-0.5">
                    {finalResults.classification.accuracy}
                  </span>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Weighted F1
                  </span>
                  <span className="text-2xl font-bold font-mono text-slate-800 block mt-0.5">
                    {finalResults.classification.weightedF1}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span>Official Evaluation Status:</span>
                <span className="font-semibold text-slate-800">{finalResults.classification.verdict}</span>
              </div>
            </div>
          </div>

          {/* Clustering Results Card */}
          <div className="academic-card p-6 sm:p-7 bg-white border-t-4 border-t-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-slate-100 text-slate-800">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Unsupervised Clustering
                </h3>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
                Evaluation Slots
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-150 flex items-center justify-between">
                <span className="text-slate-600 font-medium">Best K:</span>
                <span className="font-mono text-slate-800 font-semibold text-right">
                  {finalResults.clustering.bestK}
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-150 flex items-center justify-between">
                <span className="text-slate-600 font-medium">Best Clustering Method:</span>
                <span className="font-mono text-slate-800 font-semibold text-right">
                  {finalResults.clustering.bestMethod}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Adjusted Rand Index (ARI)
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-700 block mt-1">
                    {finalResults.clustering.ariScore}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Normalized Mutual Info (NMI)
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-700 block mt-1">
                    {finalResults.clustering.nmiScore}
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-blue-50/60 border border-blue-100 text-[11px] text-blue-900 text-center">
                Slots preserved in <code className="font-mono">projectData.js</code> for immediate update after running final notebook tests.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
