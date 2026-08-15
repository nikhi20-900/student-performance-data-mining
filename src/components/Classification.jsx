import React from 'react';
import { GitBranch, Activity, UserCheck, ShieldCheck, Award, Zap } from 'lucide-react';
import { classificationModels } from '../data/projectData';
import ModelComparison from './ModelComparison';
import ConfusionMatrices from './ConfusionMatrices';
import ClassificationFindings from './ClassificationFindings';
import KeyTakeaways from './KeyTakeaways';

export default function Classification() {
  const getModelIcon = (id) => {
    switch (id) {
      case 'dt': return GitBranch;
      case 'svm': return ShieldCheck;
      case 'knn': return UserCheck;
      case 'nb': return Activity;
      default: return Zap;
    }
  };

  return (
    <section id="classification" className="py-12 sm:py-16 border-b border-slate-200 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              06 — Supervised Learning
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Supervised Learning — Classification
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-3xl leading-relaxed">
            Classification was used to predict whether a student belongs to the <span className="font-semibold text-rose-700">Low</span>, <span className="font-semibold text-amber-700">Medium</span>, or <span className="font-semibold text-emerald-700">High</span> performance category.
          </p>
        </div>

        {/* Key Takeaways */}
        <KeyTakeaways findings={[
          { type: 'success', text: 'Decision Tree achieved the highest accuracy at 84%' },
          { type: 'insight', text: 'SVM and KNN showed similar performance (79-80% accuracy)' },
          { type: 'insight', text: 'Model predictions are most reliable for Medium performers' }
        ]} />

        {/* 4 Model Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {classificationModels.map((model) => {
            const Icon = getModelIcon(model.id);
            return (
              <div
                key={model.id}
                className={`academic-card p-6 flex flex-col justify-between relative transition-all ${
                  model.isBest
                    ? 'border-2 border-emerald-500 bg-emerald-50/10 shadow-sm'
                    : 'bg-white'
                }`}
              >
                {model.isBest && (
                  <div className="absolute -top-3 left-4 right-4 text-center">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      <Award className="w-3 h-3" />
                      Best Overall Model
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3 mt-1">
                    <div className={`p-2 rounded-lg ${model.isBest ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase">
                      Tier Classifier
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {model.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mt-1 mb-4 font-mono">
                    {model.variant}
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-150 mb-4 text-center">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Test Accuracy
                    </span>
                    <span className={`text-3xl font-bold font-mono tracking-tight block mt-0.5 ${
                      model.isBest ? 'text-emerald-700' : 'text-slate-900'
                    }`}>
                      {model.accuracy}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {model.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700 block mb-0.5">Key Characteristic:</span>
                  {model.strengths}
                </div>
              </div>
            );
          })}
        </div>

        {/* Model Comparison Table & Chart */}
        <ModelComparison />

        {/* Confusion Matrices 2x2 Grid */}
        <ConfusionMatrices />

        {/* Highlighted Findings */}
        <ClassificationFindings />
      </div>
    </section>
  );
}
