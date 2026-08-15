import React, { useState } from 'react';
import { ExternalLink, Bookmark, Copy, Check } from 'lucide-react';
import { references } from '../data/projectData';

export default function References() {
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopyCitation = (ref, idx) => {
    const citation = `${ref.authors}. "${ref.title}." ${ref.details}. ${ref.url}`;
    navigator.clipboard.writeText(citation);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section id="references" className="py-10 sm:py-12 border-b border-slate-200 bg-slate-50/50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <Bookmark className="w-4 h-4 text-blue-600" />
            References & Citations
          </h3>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Click citation button to copy APA reference
          </span>
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

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleCopyCitation(ref, idx)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
                  title="Copy formatted citation"
                >
                  {copiedIdx === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Citation</span>
                    </>
                  )}
                </button>

                <a
                  href={ref.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-mono shrink-0 transition-colors"
                >
                  <span>Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
