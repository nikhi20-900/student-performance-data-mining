import React from 'react';
import { HelpCircle, Sparkles } from 'lucide-react';
import { researchQuestion } from '../data/projectData';

export default function ResearchQuestion() {
  return (
    <div id="research-question" className="my-8 scroll-mt-20">
      <div className="relative overflow-hidden rounded-xl border border-blue-200/80 bg-gradient-to-r from-blue-50/70 via-slate-50 to-indigo-50/50 p-6 sm:p-8 shadow-xs">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-blue-600 text-white shrink-0 shadow-xs hidden sm:flex">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Core Research Question
              </span>
              <span className="h-1 w-1 rounded-full bg-blue-400"></span>
              <span className="text-xs text-slate-500 font-medium">BCA Data Mining Problem Formulation</span>
            </div>
            
            <blockquote className="text-base sm:text-lg lg:text-xl font-serif italic text-slate-900 leading-snug sm:leading-relaxed">
              "{researchQuestion.question}"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
