import React from 'react';
import { Eye, Layers, Compass, Info } from 'lucide-react';
import { clusteringData } from '../data/projectData';

export default function PcaVisualization() {
  return (
    <div className="academic-card p-6 sm:p-8 bg-white mb-8">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Dimensionality Reduction</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          Cluster Visualization (2D PCA Projection)
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Linear subspace projection for high-dimensional geometric inspection
        </p>
      </div>

      {/* Critical Methodological Note */}
      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-blue-950 mb-6 flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Key Methodological Clarification:</strong> "{clusteringData.pcaNote}"
        </p>
      </div>

      {/* PCA 2D Scatter Plot Clean Placeholder Canvas */}
      <div className="border border-slate-200 rounded-xl p-6 bg-slate-50 flex flex-col items-center justify-center min-h-[320px] text-center relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

        {/* Representative academic scatter illustration */}
        <div className="relative z-10 w-full max-w-md bg-white p-6 rounded-lg border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-150 mb-4">
            <span className="font-mono">Axis 1: Principal Component 1 (PC1)</span>
            <span className="font-mono">Axis 2: Principal Component 2 (PC2)</span>
          </div>

          <div className="h-44 flex items-center justify-center border border-dashed border-slate-300 rounded-lg bg-slate-50/60 p-4">
            <div className="text-center space-y-2">
              <div className="flex justify-center gap-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span> Cluster 0
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span> Cluster 1
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span> Cluster 2
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                [ 2D PCA Scatter Projection Area ]
              </p>
              <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                Displays 395 student coordinates projected along maximum variance directions without hardcoding synthetic cluster boundaries.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 text-[11px] text-slate-500 font-mono">
          Ready for direct PNG / SVG embed or interactive coordinates from notebook export.
        </div>
      </div>
    </div>
  );
}
