import React, { useState } from 'react';

const glossaryTerms = {
  'accuracy': 'The percentage of correct predictions out of all predictions made by the model.',
  'precision': 'The ratio of correct positive predictions to all positive predictions made.',
  'recall': 'The ratio of correct positive predictions to all actual positive cases.',
  'f1-score': 'The harmonic mean of precision and recall, balancing both metrics.',
  'confusion matrix': 'A table showing true positives, false positives, true negatives, and false negatives.',
  'silhouette score': 'A measure of how similar an object is to its own cluster compared to other clusters (range: -1 to 1).',
  'adjusted rand index': 'A measure of similarity between two data clusterings, adjusted for chance agreement.',
  'normalized mutual information': 'A measure of mutual dependence between two clustering partitions.',
  'k-means': 'An unsupervised clustering algorithm that partitions data into K clusters using centroid-based distance.',
  'hierarchical clustering': 'A clustering method that builds a hierarchy of clusters either by merging (agglomerative) or splitting (divisive).',
  'decision tree': 'A supervised learning model that makes predictions by learning simple decision rules from data features.',
  'support vector machine': 'A supervised learning algorithm that finds the optimal hyperplane to separate classes in high-dimensional space.',
  'k-nearest neighbors': 'A supervised learning algorithm that classifies based on the K nearest data points in the training set.',
  'naive bayes': 'A probabilistic classifier based on Bayes\' theorem with the assumption of feature independence.',
  'pca': 'Principal Component Analysis - a technique to reduce dimensionality while preserving most of the data variance.',
  'euclidean distance': 'The straight-line distance between two points in multi-dimensional space.',
  'overfitting': 'When a model learns the training data too well, including noise, and performs poorly on new data.',
  'underfitting': 'When a model is too simple to learn the underlying pattern and performs poorly on both training and test data.',
  'hyperparameter': 'A configuration variable set before training that controls the learning process (e.g., learning rate, K in K-means).',
  'feature scaling': 'Normalization technique to bring all features to a similar scale for fair distance-based calculations.',
};

export default function Glossary() {
  const [activeTerm, setActiveTerm] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e, term) => {
    setActiveTerm(term);
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setActiveTerm(null);
  };

  const GlossaryText = ({ children }) => {
    if (typeof children !== 'string') return children;

    const words = children.split(/(\s+)/);
    return (
      <>
        {words.map((word, idx) => {
          const cleanWord = word.toLowerCase().replace(/[.,;:!?]/g, '');
          const isGlossaryTerm = glossaryTerms.hasOwnProperty(cleanWord);

          if (isGlossaryTerm) {
            return (
              <span
                key={idx}
                onMouseEnter={(e) => handleMouseEnter(e, cleanWord)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative cursor-help border-b border-dotted border-blue-400 hover:bg-blue-50 transition-colors"
              >
                {word}
                {activeTerm === cleanWord && (
                  <div
                    className="absolute z-50 min-w-max max-w-xs p-3 bg-slate-900 text-white rounded-lg shadow-lg text-sm font-normal pointer-events-none"
                    style={{
                      left: `${mousePos.x}px`,
                      top: `${mousePos.y + 20}px`,
                      transform: 'translateX(-50%)'
                    }}
                  >
                    {glossaryTerms[cleanWord]}
                  </div>
                )}
              </span>
            );
          }
          return word;
        })}
      </>
    );
  };

  return {
    GlossaryText,
    glossaryTerms
  };
}
