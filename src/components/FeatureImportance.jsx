import React from 'react';
import { TrendingUp, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

export default function FeatureImportance() {
  const featureImportanceData = [
    { feature: 'G2 (Period 2 Grade)', importance: 0.24, color: '#10b981' },
    { feature: 'G1 (Period 1 Grade)', importance: 0.19, color: '#3b82f6' },
    { feature: 'Study Time', importance: 0.16, color: '#8b5cf6' },
    { feature: 'Absences', importance: 0.14, color: '#f59e0b' },
    { feature: 'Age', importance: 0.10, color: '#ec4899' },
    { feature: 'Failures', importance: 0.09, color: '#ef4444' },
    { feature: 'Family Relationship', importance: 0.05, color: '#14b8a6' },
    { feature: 'Free Time', importance: 0.03, color: '#6366f1' }
  ];

  return (
    <section id="feature-importance" className="py-12 sm:py-16 border-b border-slate-200 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              📊 Model Insights
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Feature Importance Analysis
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
            Understanding which features contribute most to predicting student performance helps identify the key factors influencing academic success.
          </p>
        </div>

        {/* Key Insight Box */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6 mb-8">
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Key Finding</h3>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">Past academic performance (G1 & G2)</span> is the strongest predictor of final grades, accounting for 43% of the model's decision-making. This is followed by <span className="font-semibold">study time and attendance</span>, emphasizing the importance of consistent effort and class participation.
              </p>
            </div>
          </div>
        </div>

        {/* Main Chart */}
        <div className="academic-card p-6 mb-8 bg-white">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Decision Tree Feature Importance
          </h3>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={featureImportanceData} margin={{ top: 10, right: 30, left: 0, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="feature" 
                  angle={-45} 
                  textAnchor="end" 
                  height={120}
                  interval={0}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  label={{ value: 'Importance Score', angle: -90, position: 'insideLeft' }}
                  domain={[0, 0.3]}
                />
                <Tooltip 
                  formatter={(value) => `${(value * 100).toFixed(1)}%`}
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: 'white' }}
                />
                <Bar dataKey="importance" radius={[8, 8, 0, 0]}>
                  {featureImportanceData.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center">
            Importance scores represent how often each feature is used to make decisions in the Decision Tree classifier
          </p>
        </div>

        {/* Feature Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Academic Performance */}
          <div className="academic-card p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h4 className="font-bold text-slate-900">Academic History</h4>
            </div>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• <span className="font-semibold">G1</span> (Period 1): 19%</li>
              <li>• <span className="font-semibold">G2</span> (Period 2): 24%</li>
              <li className="text-xs text-slate-500 mt-2 pt-2 border-t border-green-200">
                Strongest predictors of final performance
              </li>
            </ul>
          </div>

          {/* Effort & Engagement */}
          <div className="academic-card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <h4 className="font-bold text-slate-900">Effort & Engagement</h4>
            </div>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• <span className="font-semibold">Study Time</span>: 16%</li>
              <li>• <span className="font-semibold">Absences</span>: 14%</li>
              <li className="text-xs text-slate-500 mt-2 pt-2 border-t border-blue-200">
                Behavioral factors influence outcomes
              </li>
            </ul>
          </div>

          {/* Demographics & Context */}
          <div className="academic-card p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-500">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <h4 className="font-bold text-slate-900">Demographics & Context</h4>
            </div>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• <span className="font-semibold">Age</span>: 10%</li>
              <li>• <span className="font-semibold">Failures</span>: 9%</li>
              <li className="text-xs text-slate-500 mt-2 pt-2 border-t border-purple-200">
                Secondary but measurable influence
              </li>
            </ul>
          </div>
        </div>

        {/* Actionable Insights */}
        <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-600" />
            Actionable Insights
          </h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="text-amber-600 font-bold">1.</span>
              <span><strong>Improve Prior Grades:</strong> Students performing well in periods 1 & 2 show strong indicators for final success. Early intervention is crucial.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600 font-bold">2.</span>
              <span><strong>Encourage Study Habits:</strong> Study time is a controllable factor with 16% importance. Promoting structured learning habits can boost performance.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-600 font-bold">3.</span>
              <span><strong>Attendance Matters:</strong> High absences are a red flag. Regular attendance is linked to better outcomes.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
