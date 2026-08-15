import React from 'react';
import { ArrowRight, CheckCircle2, Sliders, Split, ShieldAlert, Cpu } from 'lucide-react';
import { preprocessingSteps, splitStats } from '../data/projectData';

export default function Preprocessing() {
  return (
    <section className="py-12 sm:py-16 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              04 — Data Pipeline
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Data Preprocessing
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
            Data mining workflows require rigorous feature curation, categorical transformations, continuous scaling, and stratified partitioning to prepare the input space.
          </p>
        </div>

        {/* Process Flow Pipeline Visualization */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 mb-8 overflow-x-auto shadow-xs">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            Pipeline Architecture Flow
          </h3>
          <div className="flex items-center gap-2 min-w-[700px] justify-between">
            {preprocessingSteps.map((step, idx) => (
              <React.Fragment key={step.step}>
                <div className="flex-1 p-3 rounded-lg border border-slate-200 bg-slate-50/80 text-center hover:bg-blue-50/40 hover:border-blue-200 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-slate-800 text-white font-mono text-[10px] font-bold flex items-center justify-center mx-auto mb-1.5">
                    {step.step}
                  </div>
                  <div className="font-bold text-xs text-slate-800 tracking-tight">
                    {step.name}
                  </div>
                </div>
                {idx < preprocessingSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Key Decisions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Feature Isolation & Leakage Prevention */}
          <div className="academic-card p-6 bg-white">
            <div className="flex items-center gap-2.5 mb-3 text-rose-700">
              <ShieldAlert className="w-5 h-5" />
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Leakage Prevention
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span><strong>G3 Removed:</strong> Dropped immediately after target creation because it directly determines the Performance label.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span><strong>G1 & G2 Excluded:</strong> Prior period grades are strong proxies for final grades; excluding them forces models to learn from behavioral & demographic predictors.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Encoding & Standardization */}
          <div className="academic-card p-6 bg-white">
            <div className="flex items-center gap-2.5 mb-3 text-blue-700">
              <Sliders className="w-5 h-5" />
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Encoding & Scaling
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong>One-Hot Encoding:</strong> Categorical predictors (e.g. school, address, jobs) converted into binary indicators via ColumnTransformer.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong>Standard Scaling:</strong> Numerical attributes standardized to $\mu=0, \sigma=1$ to prevent distance dominance in KNN, SVM, and K-Means.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Stratified Splitting */}
          <div className="academic-card p-6 bg-white">
            <div className="flex items-center gap-2.5 mb-3 text-emerald-700">
              <Split className="w-5 h-5" />
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Stratified Split (80 / 20)
              </h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span><strong>Class Balance Preservation:</strong> Stratified random sampling ensures identical Low / Medium / High ratios in both splits.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span><strong>Seed Stability:</strong> Reproducibility ensured with fixed random state seed 42.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Train / Test Partition Display */}
        <div className="academic-card p-6 bg-white border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            Dataset Partitioning Summary
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">
                  {splitStats.train.label} (80%)
                </span>
                <div className="text-2xl font-bold font-mono text-slate-900 mt-0.5">
                  {splitStats.train.count} <span className="text-sm font-sans font-normal text-slate-500">Students</span>
                </div>
              </div>
              <div className="text-xs font-medium text-blue-700 bg-white px-3 py-1.5 rounded border border-blue-200 shadow-2xs">
                Model Fitting
              </div>
            </div>

            <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-100 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                  {splitStats.test.label} (20%)
                </span>
                <div className="text-2xl font-bold font-mono text-slate-900 mt-0.5">
                  {splitStats.test.count} <span className="text-sm font-sans font-normal text-slate-500">Students</span>
                </div>
              </div>
              <div className="text-xs font-medium text-emerald-700 bg-white px-3 py-1.5 rounded border border-emerald-200 shadow-2xs">
                Unbiased Evaluation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
