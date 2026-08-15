import React from 'react';
import { Gauge, CheckCheck, AlertCircle, BookmarkCheck } from 'lucide-react';
import { clusteringValidation } from '../data/projectData';

export default function ClusteringValidation() {
  return (
    <div className="mt-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          Clustering Validation Framework
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Evaluation protocol combining intrinsic structural metrics with extrinsic label correspondence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Internal Validation Card */}
        <div className="academic-card p-6 bg-white border-t-4 border-t-blue-600">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700">
              <Gauge className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
              Intrinsic Metric
            </span>
          </div>

          <h4 className="text-lg font-bold text-slate-900 mb-1">
            {clusteringValidation.internal.title}
          </h4>
          <div className="font-mono text-sm font-semibold text-blue-700 mb-3">
            {clusteringValidation.internal.metric}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {clusteringValidation.internal.explanation}
          </p>

          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700 font-mono">
            Range: [-1.0, +1.0] | Higher is superior
          </div>
        </div>

        {/* External Validation Card */}
        <div className="academic-card p-6 bg-white border-t-4 border-t-slate-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 rounded-lg bg-slate-100 text-slate-800">
              <CheckCheck className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              Extrinsic Metric
            </span>
          </div>

          <h4 className="text-lg font-bold text-slate-900 mb-1">
            {clusteringValidation.external.title}
          </h4>
          <div className="font-mono text-xs font-semibold text-slate-600 mb-3 flex flex-wrap gap-2">
            <span className="bg-slate-100 px-2 py-0.5 rounded">Adjusted Rand Index (ARI)</span>
            <span className="bg-slate-100 px-2 py-0.5 rounded">Normalized Mutual Info (NMI)</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {clusteringValidation.external.explanation}
          </p>

          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700 font-mono">
            Ground Truth: Performance (Low, Med, High)
          </div>
        </div>
      </div>

      {/* Required External Validation Note */}
      <div className="p-4 sm:p-5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 flex items-start gap-3 shadow-2xs">
        <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900">
            Methodological Caution
          </h5>
          <p className="text-xs sm:text-sm font-medium italic mt-1 leading-relaxed">
            "{clusteringValidation.external.importantNote}"
          </p>
        </div>
      </div>
    </div>
  );
}
