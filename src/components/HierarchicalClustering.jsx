import React from 'react';
import { ArrowRight, GitFork, Network, Layers, GitMerge } from 'lucide-react';
import { clusteringData } from '../data/projectData';

export default function HierarchicalClustering() {
  return (
    <div id="hierarchical" className="academic-card p-6 sm:p-8 bg-white mb-8 scroll-mt-20">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Method 2</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          Agglomerative Hierarchical Clustering
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Bottom-up hierarchical decomposition based on Ward's minimum variance linkage
        </p>
      </div>

      {/* Concept Explanation */}
      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 mb-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        "Each student initially starts as an individual cluster. The algorithm progressively merges the closest clusters until the desired number of clusters is reached."
      </div>

      {/* Visual Agglomeration Flow */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
          Bottom-Up Aggregation Sequence
        </span>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {clusteringData.hierarchicalFlow.map((step, idx) => (
            <React.Fragment key={idx}>
              <span className="px-3 py-1.5 rounded-md bg-white border border-slate-200 font-semibold text-slate-800 shadow-2xs">
                {step}
              </span>
              {idx < clusteringData.hierarchicalFlow.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Dendrogram Placeholder Container */}
      <div className="border border-slate-200 rounded-xl p-6 bg-slate-50 flex flex-col items-center justify-center min-h-[260px] text-center">
        <div className="w-12 h-12 rounded-full bg-slate-200/80 text-slate-600 flex items-center justify-center mb-3">
          <GitMerge className="w-6 h-6" />
        </div>
        <h4 className="text-sm font-bold text-slate-900 mb-1">
          Hierarchical Dendrogram Diagram
        </h4>
        <p className="text-xs text-slate-500 max-w-md mb-3 leading-relaxed">
          Tree diagram visualizing linkage Euclidean distances and optimal truncation cut-off height across the 395 student instances.
        </p>
        <span className="text-[11px] font-mono text-slate-400 bg-white px-3 py-1 rounded border border-slate-200">
          [ Dendrogram Tree Visualization Placeholder ]
        </span>
      </div>
    </div>
  );
}
