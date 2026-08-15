import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowUp, Compass } from 'lucide-react';

export default function TableOfContents() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeSectionId, setActiveSectionId] = useState('executive-summary');

  const sections = [
    {
      id: 'executive-summary',
      label: '📋 Executive Summary',
      subsections: []
    },
    {
      id: 'overview',
      label: '🎯 Project Overview',
      subsections: [
        { id: 'research-question', label: 'Research Question' },
      ]
    },
    {
      id: 'dataset',
      label: '📊 Dataset & Preprocessing',
      subsections: [
        { id: 'dataset', label: 'Dataset Information' },
        { id: 'target-distribution', label: 'Target Distribution' },
        { id: 'preprocessing', label: 'Data Preprocessing' }
      ]
    },
    {
      id: 'eda',
      label: '🔍 Exploratory Data Analysis',
      subsections: []
    },
    {
      id: 'classification',
      label: '🤖 Classification Models',
      subsections: [
        { id: 'model-comparison', label: 'Model Comparison' },
        { id: 'confusion-matrices', label: 'Confusion Matrices' },
        { id: 'feature-importance', label: 'Feature Importance' },
      ]
    },
    {
      id: 'clustering',
      label: '🎲 Clustering Analysis',
      subsections: [
        { id: 'kmeans', label: 'K-Means Clustering' },
        { id: 'hierarchical', label: 'Hierarchical Clustering' },
      ]
    },
    {
      id: 'results',
      label: '✅ Results & Findings',
      subsections: []
    },
    {
      id: 'conclusion',
      label: '🎓 Conclusion',
      subsections: [
        { id: 'limitations', label: 'Limitations' },
        { id: 'future-scope', label: 'Future Scope' },
        { id: 'references', label: 'References' },
      ]
    }
  ];

  // Scrollspy: Track active section on scroll
  useEffect(() => {
    // Gather all traceable IDs
    const allTrackedIds = [];
    sections.forEach(s => {
      allTrackedIds.push(s.id);
      s.subsections.forEach(sub => {
        if (!allTrackedIds.includes(sub.id)) allTrackedIds.push(sub.id);
      });
    });

    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;

      for (let i = allTrackedIds.length - 1; i >= 0; i--) {
        const id = allTrackedIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSectionId(id);

          // Find parent section to auto-expand
          const parent = sections.find(
            s => s.id === id || s.subsections.some(sub => sub.id === id)
          );
          if (parent && parent.subsections.length > 0) {
            setExpandedSection(parent.id);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-slate-50 border-r border-slate-200 p-4 z-30 justify-between">
      <div className="overflow-y-auto pr-1">
        <div className="pb-3 mb-2 border-b border-slate-200/80">
          <div className="flex items-center justify-between">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Table of Contents
            </h3>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-200/60 px-1.5 py-0.5 rounded">
              Scrollspy
            </span>
          </div>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => {
            const isDirectlyActive = activeSectionId === section.id;
            const isChildActive = section.subsections.some(sub => sub.id === activeSectionId);
            const isParentActive = isDirectlyActive || isChildActive;
            const isOpen = expandedSection === section.id || isChildActive;

            return (
              <div key={section.id}>
                <button
                  onClick={() => {
                    scrollToSection(section.id);
                    if (section.subsections.length > 0) {
                      setExpandedSection(expandedSection === section.id ? null : section.id);
                    }
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center justify-between group ${
                    isParentActive
                      ? 'bg-blue-50/90 text-blue-900 font-semibold border-l-2 border-blue-600 pl-2'
                      : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                  }`}
                >
                  <span className="truncate">{section.label}</span>
                  {section.subsections.length > 0 && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    />
                  )}
                </button>

                {section.subsections.length > 0 && isOpen && (
                  <div className="pl-3.5 space-y-0.5 mt-0.5 border-l border-slate-200 ml-3">
                    {section.subsections.map((sub) => {
                      const isSubActive = activeSectionId === sub.id;
                      return (
                        <button
                          key={sub.id}
                          onClick={() => scrollToSection(sub.id)}
                          className={`w-full text-left px-2 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
                            isSubActive
                              ? 'text-blue-700 bg-blue-100/60 font-semibold'
                              : 'text-slate-500 hover:bg-slate-200/60 hover:text-slate-800'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${isSubActive ? 'bg-blue-600' : 'bg-slate-300'}`}></span>
                          <span className="truncate">{sub.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Footer shortcut bar in sidebar */}
      <div className="pt-3 border-t border-slate-200/80 bg-slate-50 text-[11px] text-slate-500 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors font-medium"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Top of Report</span>
        </button>
        <kbd className="font-mono text-[10px] bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-400">
          T
        </kbd>
      </div>
    </aside>
  );
}
