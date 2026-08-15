import React from 'react';
import { Grid, HelpCircle, Check, AlertCircle } from 'lucide-react';
import { confusionMatrices, confusionMatrixInterpretation } from '../data/projectData';

export default function ConfusionMatrices() {
  // Helper for heatmap cell background intensity
  const getCellColor = (value, max = 34, isDiagonal = false) => {
    if (value === 0) return 'bg-slate-50 text-slate-400';
    const intensity = Math.min(value / max, 1);
    
    if (isDiagonal) {
      if (intensity > 0.6) return 'bg-emerald-500 text-white font-bold';
      if (intensity > 0.3) return 'bg-emerald-300 text-slate-900 font-bold';
      return 'bg-emerald-100 text-emerald-900 font-semibold';
    } else {
      if (intensity > 0.6) return 'bg-rose-200 text-rose-900 font-semibold';
      if (intensity > 0.3) return 'bg-amber-100 text-amber-900';
      return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="mb-12">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          Confusion Matrix Analysis
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Detailed 3x3 error matrices comparing actual ground truth vs predicted performance classes (N_test = 79)
        </p>
      </div>

      {/* 2x2 Grid of Confusion Matrices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {confusionMatrices.map((cm) => (
          <div
            key={cm.id}
            className={`academic-card p-5 sm:p-6 bg-white ${
              cm.id === 'dt' ? 'border-emerald-300 ring-1 ring-emerald-200' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-150">
              <div>
                <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  {cm.name}
                  {cm.id === 'dt' && (
                    <span className="text-[10px] uppercase font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                      Top Accuracy
                    </span>
                  )}
                </h4>
                <span className="text-xs font-mono text-slate-500">{cm.subtitle}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block uppercase font-mono">Accuracy</span>
                <span className="text-sm font-bold font-mono text-slate-800">{cm.accuracy}</span>
              </div>
            </div>

            {/* Matrix Table */}
            <div className="overflow-x-auto my-2">
              <table className="w-full text-center border-collapse text-xs">
                <thead>
                  <tr>
                    <th className="p-1.5 text-left text-[11px] font-semibold text-slate-400 uppercase">
                      Actual \ Pred
                    </th>
                    <th className="p-1.5 text-[11px] font-bold text-rose-700 bg-rose-50/70 rounded-t">
                      Pred Low
                    </th>
                    <th className="p-1.5 text-[11px] font-bold text-amber-700 bg-amber-50/70 rounded-t">
                      Pred Med
                    </th>
                    <th className="p-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50/70 rounded-t">
                      Pred High
                    </th>
                    <th className="p-1.5 text-[11px] font-semibold text-slate-400">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {cm.matrix.map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td className="p-2 text-left font-sans font-bold text-slate-700 text-xs bg-slate-50/80">
                        Actual {row.actual}
                      </td>
                      <td className={`p-2.5 transition-colors ${getCellColor(row.low, 34, rIdx === 0)}`}>
                        {row.low}
                      </td>
                      <td className={`p-2.5 transition-colors ${getCellColor(row.medium, 34, rIdx === 1)}`}>
                        {row.medium}
                      </td>
                      <td className={`p-2.5 transition-colors ${getCellColor(row.high, 34, rIdx === 2)}`}>
                        {row.high}
                      </td>
                      <td className="p-2 font-semibold text-slate-500 bg-slate-50/40">
                        {row.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
              <p className="leading-snug">{cm.highlight}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Required Interpretation Box */}
      <div className="p-4 sm:p-5 rounded-xl bg-blue-50/60 border border-blue-200/80 flex items-start gap-3.5 shadow-2xs">
        <AlertCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-slate-900">
            Cross-Model Confusion Matrix Interpretation
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 font-medium italic mt-1 leading-relaxed">
            "{confusionMatrixInterpretation}"
          </p>
        </div>
      </div>
    </div>
  );
}
