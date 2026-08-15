import React from 'react';
import { Lightbulb, TrendingUp, Users } from 'lucide-react';

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="py-10 sm:py-14 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Lightbulb className="w-3 h-3" />
            Quick Overview
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">
            Executive Summary
          </h2>
          
          <div className="bg-white rounded-xl border border-blue-200 shadow-sm p-6 sm:p-8">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              This study analyzed 395 student mathematics records to predict academic performance using data mining techniques. We built and compared four classification models (Decision Tree, SVM, KNN, Naive Bayes) and performed clustering analysis to identify student groups.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Key Finding 1 */}
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">Best Model</p>
                    <p className="text-sm text-slate-700 font-semibold">Decision Tree achieved 84% accuracy</p>
                  </div>
                </div>
              </div>
              
              {/* Key Finding 2 */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">Clustering</p>
                    <p className="text-sm text-slate-700 font-semibold">3 distinct student profiles identified</p>
                  </div>
                </div>
              </div>
              
              {/* Key Finding 3 */}
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Impact</p>
                    <p className="text-sm text-slate-700 font-semibold">Past grades + study habits are strongest predictors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
