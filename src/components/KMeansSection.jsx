import React from 'react';
import { ArrowRight, LineChart as ChartIcon, FileCode, CheckCircle2, Sliders } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from 'recharts';
import { clusteringData } from '../data/projectData';

export default function KMeansSection() {
  const chartData = clusteringData.silhouetteDataPlaceholder;

  return (
    <div id="kmeans" className="academic-card p-6 sm:p-8 bg-white mb-8 scroll-mt-20">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Method 1</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          K-Means Clustering
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Iterative partitioning algorithm optimizing within-cluster sum of squared errors (SSE)
        </p>
      </div>

      {/* K-Means Process Flow */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
          Methodological Execution Flow
        </span>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {clusteringData.kmeansWorkflow.map((step, idx) => (
            <React.Fragment key={idx}>
              <span className="px-3 py-1.5 rounded-md bg-white border border-slate-200 font-semibold text-slate-800 shadow-2xs">
                {step}
              </span>
              {idx < clusteringData.kmeansWorkflow.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* K vs Silhouette Score Visualization */}
      <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ChartIcon className="w-4 h-4 text-blue-600" />
              K vs Silhouette Score (Tested K = 2, 3, 4, 5, 6)
            </h4>
            <p className="text-xs text-slate-500">
              Evaluates cluster separation quality across candidate K values
            </p>
          </div>
          <span className="text-[11px] font-mono bg-blue-50 text-blue-800 px-2.5 py-1 rounded border border-blue-200">
            Data Source: projectData.js
          </span>
        </div>

        <div className="h-60 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="k" stroke="#64748b" fontSize={12} tickLine={false} label={{ value: 'Number of Clusters (K)', position: 'insideBottom', offset: -2, fontSize: 11, fill: '#64748b' }} />
              <YAxis domain={[0, 0.25]} stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip formatter={(val) => [`${val.toFixed(3)}`, 'Silhouette Score']} />
              <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2.5} dot={{ r: 5, fill: '#2563eb' }} activeDot={{ r: 7 }}>
                <LabelList dataKey="score" position="top" fill="#1e293b" fontSize={11} fontWeight={600} formatter={(v) => v.toFixed(3)} />
              </Line>
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-3 bg-white border border-slate-200 rounded-lg text-xs text-slate-600 flex items-center justify-between">
          <span><strong>Note on Scores:</strong> Initial placeholder scores configured in <code className="font-mono text-blue-700">projectData.js</code>. Easily update with exact notebook execution values when finalizing results.</span>
        </div>
      </div>
    </div>
  );
}
