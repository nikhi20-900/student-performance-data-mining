import React from 'react';
import { Target, Network, Layers, ArrowUpRight, Binary, Compass } from 'lucide-react';
import ResearchQuestion from './ResearchQuestion';
import { researchQuestion } from '../data/projectData';

export default function ProjectOverview() {
  return (
    <section id="overview" className="py-12 sm:py-16 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              01 — Context & Scope
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Project Overview
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
            The project investigates whether student demographic, family, academic, attendance, and behavioral characteristics can be used to predict broad Mathematics performance levels.
          </p>
        </div>

        {/* Research Question Card */}
        <ResearchQuestion />

        {/* Two Learning Paradigms Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Supervised Learning Card */}
          <div className="academic-card p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-blue-600">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                  Classification Task
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Supervised Learning
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Trains predictive models on historical student profiles to classify future student outcomes into three mutually exclusive academic tiers:
              </p>

              <div className="space-y-2.5 bg-slate-50 p-4 rounded-lg border border-slate-150">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="font-semibold">Low Performance</span>
                  <span className="text-slate-500 font-mono">(G3: 0–9 points)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="font-semibold">Medium Performance</span>
                  <span className="text-slate-500 font-mono">(G3: 10–14 points)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  <span className="font-semibold">High Performance</span>
                  <span className="text-slate-500 font-mono">(G3: 15–20 points)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Evaluates 4 algorithms</span>
              <span className="font-medium text-slate-700">Decision Tree, SVM, KNN, Naive Bayes</span>
            </div>
          </div>

          {/* Unsupervised Learning Card */}
          <div className="academic-card p-6 sm:p-7 flex flex-col justify-between border-t-4 border-t-slate-700">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-slate-100 text-slate-800">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Clustering Task
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Unsupervised Learning
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Discovers natural, organic student clusters and behavioral profiles without using the target Performance label during the clustering process.
              </p>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-150 space-y-2 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></div>
                  <span><strong>Attribute-driven Grouping:</strong> Uses 10 demographic, study habit, and behavioral metrics.</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></div>
                  <span><strong>Zero Grade Leakage:</strong> Performance label is isolated strictly for post-hoc validation.</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></div>
                  <span><strong>Profile Discovery:</strong> Identifies shared student habit phenotypes for targeted academic counseling.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Evaluates 2 methods</span>
              <span className="font-medium text-slate-700">K-Means & Hierarchical Clustering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
