import React, { useState } from 'react';
import { Grid, HelpCircle, Check, AlertCircle, Info } from 'lucide-react';
import { confusionMatrices, confusionMatrixInterpretation } from '../data/projectData';

export default function ConfusionMatrices() {
  const [hoveredCell, setHoveredCell] = useState(null);

  // Helper for heatmap cell background intensity
  const getCellColor = (value, max = 34, isDiagonal = false, isHovered = false) => {
    if (value === 0) return 'bg-slate-50 text-slate-400';
    const intensity = Math.min(value / max, 1);
    
    if (isDiagonal) {
      if (intensity > 0.6) return `${isHovered ? 'ring-2 ring-emerald-600' : ''} bg-emerald-500 text-white font-bold`;
      if (intensity > 0.3) return `${isHovered ? 'ring-2 ring-emerald-500' : ''} bg-emerald-300 text-slate-900 font-bold`;
      return `${isHovered ? 'ring-2 ring-emerald-400' : ''} bg-emerald-100 text-emerald-900 font-semibold`;
    } else {
      if (intensity > 0.6) return `${isHovered ? 'ring-2 ring-rose-500' : ''} bg-rose-200 text-rose-900 font-semibold`;
      if (intensity > 0.3) return `${isHovered ? 'ring-2 ring-amber-400' : ''} bg-amber-100 text-amber-900`;
      return `${isHovered ? 'ring-2 ring-slate-400' : ''} bg-slate-100 text-slate-700`;
    }
  };

  const getCellInterpretation = (cell) => {
    if (!cell) return null;
    const { actual, pred, count, isDiagonal } = cell;
    if (isDiagonal) {
      return (
        <span>
          <strong className="text-emerald-700 font-bold">{count} students</strong> who were actually in the <strong>{actual}</strong> tier were <strong className="text-emerald-700">correctly predicted as {pred}</strong> (True Positive).
        </span>
      );
    } else {
      return (
        <span>
          <strong className="text-rose-700 font-bold">{count} students</strong> who were actually in the <strong>{actual}</strong> tier were <strong className="text-rose-700">misclassified as {pred}</strong> (Prediction Error).
        </span>
      );
    }
  };

  return (
    <div id="confusion-matrices" className="mb-12 scroll-mt-20">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Confusion Matrix Analysis
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Detailed 3x3 error matrices comparing actual ground truth vs predicted performance classes (N_test = 79)
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-[11px] text-slate-600 font-medium border border-slate-200">
          <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>Hover any cell to inspect classification breakdown</span>
        </div>
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

            {/* Matrix Table with Crosshair Hover State */}
            <div className="overflow-x-auto my-2">
              <table className="w-full text-center border-collapse text-xs">
                <thead>
                  <tr>
                    <th className="p-1.5 text-left text-[11px] font-semibold text-slate-400 uppercase">
                      Actual \ Pred
                    </th>
                    <th className={`p-1.5 text-[11px] font-bold rounded-t transition-colors ${
                      hoveredCell?.matrixId === cm.id && hoveredCell?.colIdx === 0
                        ? 'bg-rose-200 text-rose-950 font-extrabold ring-1 ring-rose-300'
                        : 'text-rose-700 bg-rose-50/70'
                    }`}>
                      Pred Low
                    </th>
                    <th className={`p-1.5 text-[11px] font-bold rounded-t transition-colors ${
                      hoveredCell?.matrixId === cm.id && hoveredCell?.colIdx === 1
                        ? 'bg-amber-200 text-amber-950 font-extrabold ring-1 ring-amber-300'
                        : 'text-amber-700 bg-amber-50/70'
                    }`}>
                      Pred Med
                    </th>
                    <th className={`p-1.5 text-[11px] font-bold rounded-t transition-colors ${
                      hoveredCell?.matrixId === cm.id && hoveredCell?.colIdx === 2
                        ? 'bg-emerald-200 text-emerald-950 font-extrabold ring-1 ring-emerald-300'
                        : 'text-emerald-700 bg-emerald-50/70'
                    }`}>
                      Pred High
                    </th>
                    <th className="p-1.5 text-[11px] font-semibold text-slate-400">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {cm.matrix.map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td className={`p-2 text-left font-sans font-bold text-xs transition-colors ${
                        hoveredCell?.matrixId === cm.id && hoveredCell?.rowIdx === rIdx
                          ? 'bg-slate-200 text-slate-950 font-extrabold'
                          : 'text-slate-700 bg-slate-50/80'
                      }`}>
                        Actual {row.actual}
                      </td>

                      {/* Low Column */}
                      <td
                        onMouseEnter={() => setHoveredCell({ matrixId: cm.id, rowIdx: rIdx, colIdx: 0, actual: row.actual, pred: 'Low', count: row.low, isDiagonal: rIdx === 0 })}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`p-2.5 cursor-pointer transition-all ${getCellColor(row.low, 34, rIdx === 0, hoveredCell?.matrixId === cm.id && hoveredCell?.rowIdx === rIdx && hoveredCell?.colIdx === 0)}`}
                      >
                        {row.low}
                      </td>

                      {/* Medium Column */}
                      <td
                        onMouseEnter={() => setHoveredCell({ matrixId: cm.id, rowIdx: rIdx, colIdx: 1, actual: row.actual, pred: 'Medium', count: row.medium, isDiagonal: rIdx === 1 })}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`p-2.5 cursor-pointer transition-all ${getCellColor(row.medium, 34, rIdx === 1, hoveredCell?.matrixId === cm.id && hoveredCell?.rowIdx === rIdx && hoveredCell?.colIdx === 1)}`}
                      >
                        {row.medium}
                      </td>

                      {/* High Column */}
                      <td
                        onMouseEnter={() => setHoveredCell({ matrixId: cm.id, rowIdx: rIdx, colIdx: 2, actual: row.actual, pred: 'High', count: row.high, isDiagonal: rIdx === 2 })}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`p-2.5 cursor-pointer transition-all ${getCellColor(row.high, 34, rIdx === 2, hoveredCell?.matrixId === cm.id && hoveredCell?.rowIdx === rIdx && hoveredCell?.colIdx === 2)}`}
                      >
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

            {/* Dynamic Cell Breakdown or Static Highlight */}
            {hoveredCell?.matrixId === cm.id ? (
              <div className="mt-4 p-2.5 rounded-lg bg-blue-50/80 border border-blue-200 text-xs text-slate-800 transition-all">
                {getCellInterpretation(hoveredCell)}
              </div>
            ) : (
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                <p className="leading-snug">{cm.highlight}</p>
              </div>
            )}
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
