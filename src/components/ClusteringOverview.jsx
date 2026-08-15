import React from 'react';
import { Compass, Sparkles, Sliders, Layers } from 'lucide-react';
import { clusteringData } from '../data/projectData';
import KMeansSection from './KMeansSection';
import PcaVisualization from './PcaVisualization';
import HierarchicalClustering from './HierarchicalClustering';
import ClusteringValidation from './ClusteringValidation';

export default function ClusteringOverview() {
  return (
    <section id="clustering" className="py-12 sm:py-16 border-b border-slate-200 bg-slate-50/40 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              07 — Unsupervised Learning
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Unsupervised Learning — Clustering
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
            {clusteringData.explanation}
          </p>
        </div>

        {/* 10 Clustering Features Box */}
        <div className="academic-card p-6 bg-white mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-150">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                10 Selected Clustering Features
              </h3>
              <p className="text-xs text-slate-500">
                Continuous & ordinal attributes used to calculate inter-student Euclidean distances
              </p>
            </div>
            <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-mono font-semibold">
              Dimension: ℝ¹⁰
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {clusteringData.features.map((f, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                <div className="font-mono font-bold text-sm text-blue-900">
                  {f.name}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  {f.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Standardization Note */}
          <div className="mt-5 p-3.5 rounded-lg bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
            <Sliders className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Feature Scaling Mandate:</strong> {clusteringData.standardizationNote}
            </p>
          </div>
        </div>

        {/* K-Means Section */}
        <KMeansSection />

        {/* PCA 2D Visualization */}
        <PcaVisualization />

        {/* Agglomerative Hierarchical Clustering */}
        <HierarchicalClustering />

        {/* Clustering Validation (Internal vs External) */}
        <ClusteringValidation />
      </div>
    </section>
  );
}
