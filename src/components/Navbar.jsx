import React, { useState, useEffect } from 'react';
import { BookOpen, Code2, Menu, X, ArrowUp, Keyboard } from 'lucide-react';
import { projectMeta } from '../data/projectData';

export default function Navbar({ onOpenNotebook }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Dataset', href: '#dataset' },
    { name: 'EDA', href: '#eda' },
    { name: 'Classification', href: '#classification' },
    { name: 'Clustering', href: '#clustering' },
    { name: 'Results', href: '#results' },
    { name: 'Conclusion', href: '#conclusion' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Calculate reading scroll percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }

      // Track active section for top nav
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPos = scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sections[i]);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs' : 'bg-white border-b border-slate-100'
    }`}>
      {/* Real-time Reading Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-slate-100 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Left title */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-serif text-sm font-semibold tracking-tight shadow-xs group-hover:bg-blue-600 transition-colors">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-slate-900 tracking-tight text-sm sm:text-base block">
                {projectMeta.shortTitle}
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase block -mt-0.5">
                {projectMeta.course}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? 'text-blue-700 bg-blue-50/90 font-semibold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions & Keyboard Shortcut Hints */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="hidden xl:flex items-center gap-1 px-2 py-1 rounded bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-500">
              <span className="font-semibold text-slate-700">Keys:</span>
              <kbd className="px-1 py-0.2 bg-white rounded border border-slate-300 text-[10px] text-slate-700">N</kbd>
              <span>Notebook</span>
              <span className="text-slate-300 mx-0.5">•</span>
              <kbd className="px-1 py-0.2 bg-white rounded border border-slate-300 text-[10px] text-slate-700">T</kbd>
              <span>Top</span>
            </div>

            <button
              onClick={onOpenNotebook}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors shadow-2xs active:scale-95"
              title="Inspect Jupyter Notebook details (Shortcut: N)"
            >
              <Code2 className="w-3.5 h-3.5 text-slate-600" />
              <span>View Notebook</span>
              <kbd className="hidden lg:inline-block px-1 py-0.2 bg-white rounded border border-slate-300 text-[10px] text-slate-500 font-mono ml-0.5">
                N
              </kbd>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenNotebook}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-md"
              title="View Notebook"
            >
              <Code2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                activeSection === link.href.substring(1)
                  ? 'text-blue-700 bg-blue-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenNotebook();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-slate-100 text-slate-800"
            >
              <Code2 className="w-4 h-4" />
              <span>View Notebook Details</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
