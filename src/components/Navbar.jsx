import React, { useState, useEffect } from 'react';
import { BookOpen, Code2, Menu, X, FileText, Download } from 'lucide-react';
import { projectMeta } from '../data/projectData';

export default function Navbar({ onOpenNotebook }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

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
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sections[i]);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-white border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Left title */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-serif text-sm font-semibold tracking-tight shadow-sm group-hover:bg-blue-600 transition-colors">
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
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-700 bg-blue-50/80 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: View Notebook Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenNotebook}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs lg:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors shadow-xs"
              title="Inspect Jupyter Notebook details"
            >
              <Code2 className="w-3.5 h-3.5 text-slate-600" />
              <span>View Notebook</span>
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
