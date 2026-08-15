import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, LabelList
} from 'recharts';
import { BarChart3, TrendingUp, Clock, AlertTriangle, GitCommit } from 'lucide-react';
import { edaData } from '../data/projectData';

export default function EDA() {
  const [activeTab, setActiveTab] = useState('g3');

  const CustomGradeTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 text-white p-2.5 rounded-lg shadow-lg text-xs font-sans">
          <div className="font-semibold text-slate-200">G3 Grade: <span className="font-mono text-white font-bold">{label}/20</span></div>
          <div className="text-blue-300 font-mono">Students: {payload[0].value}</div>
        </div>
      );
    }
    return null;
  };

  const CustomStudyTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 text-white p-3 rounded-lg shadow-lg text-xs font-sans">
          <div className="font-bold text-white mb-1">{data.studyTime}</div>
          <div className="text-slate-300">Avg Final Grade: <span className="font-mono text-emerald-400 font-bold">{data.avgG3} / 20</span></div>
          <div className="text-slate-300">Cohort Size: <span className="font-mono text-white">{data.count} students</span></div>
          <div className="text-slate-400 text-[11px] mt-1 italic">{data.description}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="eda" className="py-12 sm:py-16 border-b border-slate-200 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              05 — Data Exploration
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Exploratory Data Analysis
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
            {edaData.explanation}
          </p>
        </div>

        {/* EDA Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-3">
          {[
            { id: 'g3', label: '1. G3 Grade Distribution', icon: BarChart3 },
            { id: 'study', label: '2. Study Time vs G3', icon: Clock },
            { id: 'failures', label: '3. Past Failures vs G3', icon: AlertTriangle },
            { id: 'correlation', label: '4. Key Correlations', icon: TrendingUp },
            { id: 'absences', label: '5. Absences vs G3 Analysis', icon: GitCommit },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: G3 Distribution */}
        {activeTab === 'g3' && (
          <div className="academic-card p-6 sm:p-8 bg-slate-50/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  G3 Final Grade Distribution (0 to 20 scale)
                </h3>
                <p className="text-xs text-slate-500">
                  Frequency count of 395 students across continuous mathematics examination scores
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-blue-600 rounded-xs"></span> Mean: 10.42</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-slate-400 rounded-xs"></span> Median: 11.00</span>
              </div>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={edaData.g3Distribution} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="grade" stroke="#64748b" fontSize={11} tickLine={false} label={{ value: 'Final Grade (G3)', position: 'insideBottom', offset: -2, fontSize: 11, fill: '#64748b' }} />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomGradeTooltip />} />
                  <Bar dataKey="count" fill="#2563eb" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-4">
              <div>
                <strong>Bimodal Spike at 0:</strong> Exactly 38 students scored 0 points (representing non-attendance or dropouts).
              </div>
              <div className="font-mono text-slate-500">
                Passing Benchmark: G3 ≥ 10
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Study Time vs G3 */}
        {activeTab === 'study' && (
          <div className="academic-card p-6 sm:p-8 bg-slate-50/50">
            <div className="mb-6">
              <h3 className="text-base font-bold text-slate-900">
                Average Final Grade by Weekly Study Time Tier
              </h3>
              <p className="text-xs text-slate-500">
                Demonstrates positive progression in average G3 score as study hours increase
              </p>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={edaData.studyTimeVsGrade} margin={{ top: 20, right: 20, left: -15, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="studyTime" stroke="#64748b" fontSize={12} tickLine={false} />
                  <YAxis domain={[0, 15]} stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomStudyTooltip />} />
                  <Bar dataKey="avgG3" fill="#059669" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="avgG3" position="top" fill="#0f172a" fontSize={12} fontWeight={600} formatter={(v) => `${v} pts`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mt-6 pt-4 border-t border-slate-200 text-xs">
              {edaData.studyTimeVsGrade.map((s, idx) => (
                <div key={idx} className="p-2.5 rounded bg-white border border-slate-200 text-center">
                  <div className="font-bold text-slate-800">{s.studyTime}</div>
                  <div className="text-slate-500">{s.count} students</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Failures vs G3 */}
        {activeTab === 'failures' && (
          <div className="academic-card p-6 sm:p-8 bg-slate-50/50">
            <div className="mb-6">
              <h3 className="text-base font-bold text-slate-900">
                Impact of Past Academic Failures on G3 Performance
              </h3>
              <p className="text-xs text-slate-500">
                Number of past course failures exhibits the strongest negative linear correlation (-0.36) with final Mathematics grade
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={edaData.failuresVsGrade} margin={{ top: 20, right: 20, left: -15, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="failures" stroke="#64748b" fontSize={12} tickLine={false} />
                  <YAxis domain={[0, 14]} stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Bar dataKey="avgG3" fill="#e11d48" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="avgG3" position="top" fill="#0f172a" fontSize={12} fontWeight={600} formatter={(v) => `${v} pts`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-800">
              <strong>Key Finding:</strong> Students with zero prior failures maintain an average grade of 11.26 pts, while students with 3 past failures drop steeply to an average of 5.69 pts.
            </div>
          </div>
        )}

        {/* Tab 4: Correlation Matrix */}
        {activeTab === 'correlation' && (
          <div className="academic-card p-6 sm:p-8 bg-slate-50/50">
            <div className="mb-6">
              <h3 className="text-base font-bold text-slate-900">
                Key Numerical Correlation Pairs
              </h3>
              <p className="text-xs text-slate-500">
                Pearson correlation coefficients showing relationships among core numeric variables
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-slate-100 text-slate-700 uppercase font-semibold text-[11px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-4">Feature Pair</th>
                    <th className="py-2.5 px-4 text-center">Pearson r</th>
                    <th className="py-2.5 px-4">Direction & Strength</th>
                    <th className="py-2.5 px-4">Academic Interpretation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {edaData.correlationPairs.map((p, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-mono font-medium text-slate-800">
                        {p.feature1} ↔ {p.feature2}
                      </td>
                      <td className="py-2.5 px-4 text-center font-mono font-bold">
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          p.correlation.startsWith('+') ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                        }`}>
                          {p.correlation}
                        </span>
                      </td>
                      <td className="py-2.5 px-4 text-slate-600 font-medium text-xs">
                        {parseFloat(p.correlation) > 0.4 ? 'Strong Positive' : parseFloat(p.correlation) > 0 ? 'Moderate Positive' : 'Moderate Negative'}
                      </td>
                      <td className="py-2.5 px-4 text-slate-600 text-xs">
                        {p.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 5: Absences vs G3 */}
        {activeTab === 'absences' && (
          <div className="academic-card p-6 sm:p-8 bg-slate-50/50">
            <div className="mb-4">
              <h3 className="text-base font-bold text-slate-900">
                Absences vs Final Mathematics Grade (G3)
              </h3>
              <p className="text-xs text-slate-500">
                Attendance patterns range from 0 to 75 absences with high dispersion
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-slate-200 text-slate-700 text-xs sm:text-sm space-y-3 leading-relaxed">
              <p>
                • <strong>Non-linear Trend:</strong> The correlation between absences and final grade is weak (+0.03), showing that occasional absences do not immediately dictate failure, but extreme outliers (&gt;30 absences) reflect disengagement.
              </p>
              <p>
                • <strong>Clustering Utility:</strong> Absences serves as a high-variance behavioral variable during unsupervised clustering to separate chronically absent students from steady attendees.
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded font-mono text-xs text-slate-600">
                Dataset Summary: Mean Absences = 5.71 days | Min = 0 | Max = 75 | Median = 4 days
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
