import React, { useState } from 'react';
import { Database, FileSpreadsheet, ShieldCheck, CopyCheck, Tag, Info } from 'lucide-react';
import { datasetStats, projectMeta } from '../data/projectData';

export default function DatasetStats() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allVariables = datasetStats.variableCategories.flatMap(c => 
    c.items.map(i => ({ ...i, categoryName: c.category }))
  );

  const displayedVariables = selectedCategory === 'All'
    ? allVariables
    : allVariables.filter(v => v.categoryName === selectedCategory);

  return (
    <section id="dataset" className="py-12 sm:py-16 border-b border-slate-200 scroll-mt-16 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              02 — Data Foundation
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Dataset
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
            The project uses the <span className="font-semibold text-slate-800">{projectMeta.datasetName}</span> from the UCI Machine Learning Repository.
          </p>
        </div>

        {/* 4 Summary Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {datasetStats.overviewCards.map((card, idx) => (
            <div key={idx} className="academic-card p-5 bg-white">
              <div className="flex items-center justify-between text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
                <span>{card.tag}</span>
                {idx === 0 && <Database className="w-4 h-4 text-blue-600" />}
                {idx === 1 && <FileSpreadsheet className="w-4 h-4 text-slate-600" />}
                {idx === 2 && <ShieldCheck className="w-4 h-4 text-emerald-600" />}
                {idx === 3 && <CopyCheck className="w-4 h-4 text-slate-600" />}
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 tracking-tight">
                {card.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 mt-1">
                {card.label}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dataset Narrative Description */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-2">
            <Info className="w-4 h-4 text-blue-600" />
            Dataset Composition & Structure
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            The dataset contains information about students' demographics, family background, study habits, academic history, social activities, health, absences, and final Mathematics grade collected from Portuguese secondary schools.
          </p>
        </div>

        {/* Important Variables Interactive Explorer */}
        <div className="academic-card p-6 bg-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-150">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Key Variables Analyzed
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Core features tracked across demographic, academic, and behavioral dimensions
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-lg">
              {['All', 'Demographics & Family', 'Academic Habits & History', 'Lifestyle & Health', 'Evaluated Grades'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat === 'All' ? 'All (16 Key)' : cat.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Variable grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {displayedVariables.map((v, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg border border-slate-150 bg-slate-50/60 hover:bg-white hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-mono font-bold text-sm text-blue-900 bg-blue-50/80 px-2 py-0.5 rounded border border-blue-100/80">
                    {v.name}
                  </span>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    v.type === 'Target Source'
                      ? 'bg-amber-100 text-amber-800'
                      : v.type === 'Grade'
                      ? 'bg-slate-200 text-slate-700'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {v.type}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <span>Primary Focus Variables: <strong className="text-slate-700">16 core attributes</strong> displayed from the 33 total dataset features</span>
            <span className="font-mono text-slate-400">UCI Repository ID: 320</span>
          </div>
        </div>
      </div>
    </section>
  );
}
