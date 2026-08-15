import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectOverview from './components/ProjectOverview';
import DatasetStats from './components/DatasetStats';
import TargetDistribution from './components/TargetDistribution';
import Preprocessing from './components/Preprocessing';
import EDA from './components/EDA';
import Classification from './components/Classification';
import ClusteringOverview from './components/ClusteringOverview';
import FinalResults from './components/FinalResults';
import OverallFindings from './components/OverallFindings';
import Limitations from './components/Limitations';
import FutureScope from './components/FutureScope';
import Conclusion from './components/Conclusion';
import References from './components/References';
import NotebookModal from './components/NotebookModal';
import Footer from './components/Footer';

export default function App() {
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-800 antialiased font-sans">
      {/* Sticky Academic Header */}
      <Navbar onOpenNotebook={() => setIsNotebookOpen(true)} />

      {/* Main Presentation Body */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

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

        {/* 8. Unsupervised Learning — Clustering (K-Means, PCA, Hierarchical, Validation) */}
        <ClusteringOverview />

        {/* 9. Final Results Dashboard */}
        <FinalResults />

        {/* 10. Overall Findings ("What Did We Learn?") */}
        <OverallFindings />

        {/* 11. Project Limitations */}
        <Limitations />

        {/* 12. Future Scope */}
        <FutureScope />

        {/* 13. Academic Conclusion */}
        <Conclusion />

        {/* 14. References & Citations */}
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
