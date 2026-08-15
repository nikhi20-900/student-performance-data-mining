import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from 'recharts';
import { Award, Info, CheckCircle2 } from 'lucide-react';
import { classificationMetricsTable } from '../data/projectData';

export default function ModelComparison() {
  const chartData = [
    {
      name: 'Decision Tree',
      Accuracy: 51.90,
      Precision: 51.36,
      Recall: 51.90,
      F1: 49.42,
    },
    {
      name: 'SVM (RBF)',
      Accuracy: 49.37,
      Precision: 50.00,
      Recall: 49.37,
      F1: 42.10,
    },
    {
      name: 'KNN (k=7)',
      Accuracy: 45.57,
      Precision: 45.20,
      Recall: 45.57,
      F1: 44.80,
    },
    {
      name: 'Naive Bayes',
      Accuracy: 26.58,
      Precision: 38.00,
      Recall: 27.00,
      F1: 23.00,
    },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 text-white p-3 rounded-lg shadow-xl text-xs font-sans border border-slate-700">
          <div className="font-bold text-sm mb-2 text-slate-100">{label}</div>
          <div className="space-y-1 font-mono">
            {payload.map((item, idx) => (
              <div key={idx} className="flex justify-between gap-4">
                <span style={{ color: item.color }}>{item.name}:</span>
                <span className="font-bold">{item.value.toFixed(2)}%</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mb-12">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">
            Classification Performance Comparison
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Multi-metric evaluation across all 4 supervised learning classifiers (N_test = 79)
          </p>
        </div>

        {/* Academic Phrasing Notice */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700">
          <Info className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Evaluation Metric: <strong>Macro/Weighted Avg</strong></span>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="academic-card overflow-hidden bg-white mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100/80 text-slate-700 uppercase font-semibold text-[11px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 sm:px-6">Model</th>
                <th className="py-3 px-4 sm:px-6">Specification</th>
                <th className="py-3 px-4 text-right font-mono">Accuracy</th>
                <th className="py-3 px-4 text-right font-mono">Precision</th>
                <th className="py-3 px-4 text-right font-mono">Recall</th>
                <th className="py-3 px-4 sm:px-6 text-right font-mono">F1-Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {classificationMetricsTable.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    row.best ? 'bg-emerald-50/50 hover:bg-emerald-50' : 'hover:bg-slate-50/80'
                  }`}
                >
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900 flex items-center gap-2">
                    {row.model}
                    {row.best && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        Best Overall
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600 font-mono text-xs">
                    {row.variant}
                  </td>
                  <td className={`py-3.5 px-4 text-right font-mono font-bold ${row.best ? 'text-emerald-700 font-extrabold' : 'text-slate-800'}`}>
                    {row.accuracy.toFixed(2)}%
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-slate-700">
                    {row.best ? `${row.precision.toFixed(2)}%` : `~${row.precision.toFixed(0)}%`}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-slate-700">
                    {row.best ? `${row.recall.toFixed(2)}%` : `${row.recall.toFixed(0)}%`}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-right font-mono text-slate-700 font-semibold">
                    {row.best ? `${row.f1.toFixed(2)}%` : `~${row.f1.toFixed(0)}%`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Academic Interpretation Banner */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-700">
            <span className="font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
              Best-performing model in this experiment:
            </span>
            <span className="font-medium">Entropy-based ID3-style Decision Tree (51.90% Accuracy)</span>
          </div>
          <div className="text-slate-500 font-medium italic">
            Overall Context: "Moderate predictive performance" across all models
          </div>
        </div>
      </div>

      {/* Recharts Multi-Metric Comparative Bar Chart */}
      <div className="academic-card p-6 bg-white">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
          Metric Comparison Chart (Accuracy, Precision, Recall, F1)
        </h4>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 20, left: -15, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} />
              <YAxis domain={[0, 65]} stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} unit="%" />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
              <Bar dataKey="Accuracy" fill="#2563eb" radius={[3, 3, 0, 0]} />
              <Bar dataKey="Precision" fill="#059669" radius={[3, 3, 0, 0]} />
              <Bar dataKey="Recall" fill="#f59e0b" radius={[3, 3, 0, 0]} />
              <Bar dataKey="F1" fill="#8b5cf6" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
