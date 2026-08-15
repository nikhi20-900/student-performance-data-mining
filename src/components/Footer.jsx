import React from 'react';
import { GraduationCap } from 'lucide-react';
import { projectMeta } from '../data/projectData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 lg:ml-64 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-serif text-sm font-bold shadow-xs shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm sm:text-base">
                {projectMeta.title}
              </div>
              <div className="text-xs text-slate-400">
                {projectMeta.course}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <button onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">
              Top of Page
            </button>
            <span className="text-slate-700">•</span>
            <a href="#classification" className="hover:text-white transition-colors">Classification</a>
            <span className="text-slate-700">•</span>
            <a href="#clustering" className="hover:text-white transition-colors">Clustering</a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            Built for academic and educational purposes.
          </div>
          <div className="font-serif italic text-slate-400 text-center sm:text-right">
            Bachelor of Computer Applications (BCA) — Data Mining Curriculum
          </div>
        </div>
      </div>
    </footer>
  );
}
