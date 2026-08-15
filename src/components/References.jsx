import React from 'react';
import { ExternalLink, Bookmark } from 'lucide-react';
import { references } from '../data/projectData';

export default function References() {
  return (
    <section className="py-10 sm:py-12 border-b border-slate-200 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-blue-600" />
            References & Citations
          </h3>
        </div>

        <div className="space-y-3">
          {references.map((ref, idx) => (
            <div
              key={idx}
              className="academic-card p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm"
            >
              <div>
                <span className="font-semibold text-slate-900 block">
                  [{idx + 1}] {ref.title}
                </span>
                <span className="text-slate-600 font-serif italic text-xs block mt-0.5">
                  {ref.authors} — {ref.details}
                </span>
              </div>
              <a
                href={ref.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 text-blue-600 text-xs font-mono shrink-0 transition-colors"
              >
                <span>External Link</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
