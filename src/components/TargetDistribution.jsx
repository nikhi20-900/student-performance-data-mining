import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { AlertCircle, PieChart as PieIcon, Layers } from 'lucide-react';
import { targetData } from '../data/projectData';

export default function TargetDistribution() {
  const chartData = targetData.distribution.map(d => ({
    name: d.category,
    students: d.count,
    range: d.range,
    percentage: d.percentage,
    fill: d.barFill
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900/95 backdrop-blur-xs text-white p-3 rounded-xl shadow-xl text-xs font-sans border border-slate-700">
          <div className="font-bold text-sm mb-1 text-slate-100">{data.name} Performance</div>
          <div className="text-slate-300">Score Range: <span className="font-mono text-white font-semibold">{data.range}</span></div>
          <div className="text-slate-300">Students: <span className="font-mono text-white font-bold">{data.students}</span> ({data.percentage})</div>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="target-distribution" className="py-12 sm:py-16 border-b border-slate-200 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              03 — Target Formulation
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Target Creation
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
            The continuous final Mathematics grade (<span className="font-mono font-semibold text-slate-800">G3</span>, 0–20) was discretized into three distinct performance categories for multi-class classification.
          </p>
        </div>

        {/* 3 Target Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {targetData.distribution.map((item, idx) => (
            <div
              key={idx}
              className={`academic-card p-6 relative overflow-hidden bg-white border-l-4 ${
                idx === 0 ? 'border-l-rose-500' : idx === 1 ? 'border-l-amber-500' : 'border-l-emerald-500'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tier {idx + 1}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${item.badgeColor}`}>
                  {item.percentage}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {item.category}
              </h3>

              <div className="my-3 font-mono text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded inline-block">
                {item.range}
              </div>

              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-3xl font-bold font-mono text-slate-900">
                  {item.count}
                </span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                  Students
                </span>
              </div>

              <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Chart & Distribution Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8">
          <div className="lg:col-span-7">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-1">
              Class Distribution (Total: 395 Students)
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Bar chart of students across Low, Medium, and High performance categories
            </p>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} domain={[0, 220]} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.04)' }} />
                  <Bar dataKey="students" radius={[6, 6, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                    <LabelList dataKey="students" position="top" fill="#1e293b" fontSize={12} fontWeight={600} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-5 rounded-lg border border-slate-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Important Methodological Note
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium italic mt-1 leading-relaxed">
                    "{targetData.note}"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="font-semibold text-slate-800">Class Balance Observations:</div>
              <p>
                • <strong>Medium (48.61%)</strong> constitutes the plurality class, representing students with standard passing grades (10 to 14).
              </p>
              <p>
                • <strong>High (18.48%)</strong> forms the minority class (73 students), requiring stratified sampling to prevent test evaluation distortion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
