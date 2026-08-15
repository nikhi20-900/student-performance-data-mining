import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TableOfContents from './components/TableOfContents';
import ExecutiveSummary from './components/ExecutiveSummary';
import Hero from './components/Hero';
import ProjectOverview from './components/ProjectOverview';
import DatasetStats from './components/DatasetStats';
import TargetDistribution from './components/TargetDistribution';
import Preprocessing from './components/Preprocessing';
import EDA from './components/EDA';
import Classification from './components/Classification';
import FeatureImportance from './components/FeatureImportance';
import ClusteringOverview from './components/ClusteringOverview';
import FinalResults from './components/FinalResults';
import OverallFindings from './components/OverallFindings';
import Limitations from './components/Limitations';
import FutureScope from './components/FutureScope';
import Conclusion from './components/Conclusion';
import References from './components/References';
import NotebookModal from './components/NotebookModal';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);

  // Global Keyboard Shortcuts (N for Notebook, T for Top)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if inside an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        return;
      }

      if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setIsNotebookOpen((prev) => !prev);
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-800 antialiased font-sans">
      {/* Sticky Academic Header */}
      <Navbar onOpenNotebook={() => setIsNotebookOpen(true)} />

      {/* Table of Contents Sidebar with Active Scrollspy */}
      <TableOfContents />

      {/* Back to Top Floating Button */}
      <BackToTop />

      {/* Main Presentation Body */}
      <main className="flex-grow lg:ml-64">
        {/* Hero Section */}
        <Hero />

        {/* 1. Executive Summary */}
        <ExecutiveSummary />

        {/* 2. Project Overview & Research Question */}
        <ProjectOverview />

        {/* 3. Dataset Information & Variables */}
        <DatasetStats />

        {/* 4. Target Creation (G3 to Low, Medium, High) */}
        <TargetDistribution />

        {/* 5. Preprocessing & Partition Pipeline */}
        <Preprocessing />

        {/* 6. Exploratory Data Analysis (EDA) */}
        <EDA />

        {/* 7. Supervised Learning — Classification & Confusion Matrices */}
        <Classification />

        {/* 8. Feature Importance Analysis */}
        <FeatureImportance />

        {/* 9. Unsupervised Learning — Clustering (K-Means, PCA, Hierarchical, Validation) */}
        <ClusteringOverview />

        {/* 10. Final Results Dashboard */}
        <FinalResults />

        {/* 11. Overall Findings ("What Did We Learn?") */}
        <OverallFindings />

        {/* 12. Project Limitations */}
        <Limitations />

        {/* 13. Future Scope */}
        <FutureScope />

        {/* 14. Academic Conclusion */}
        <Conclusion />

        {/* 15. References & Citations */}
        <References />
      </main>

      {/* Footer */}
      <Footer />

      {/* Jupyter Notebook Viewer Modal */}
      <NotebookModal
        isOpen={isNotebookOpen}
        onClose={() => setIsNotebookOpen(false)}
      />
    </div>
  );
}
