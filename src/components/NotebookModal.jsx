import React, { useState, useEffect } from 'react';
import { X, Code2, Copy, Check, Terminal, ExternalLink, FileCode } from 'lucide-react';

export default function NotebookModal({ isOpen, onClose }) {
  const [copiedSection, setCopiedSection] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const codeSnippets = [
    {
      title: "1. Target Formulation & Preprocessing",
      language: "python",
      code: `# Define target Performance categories from G3
def map_performance(g3):
    if g3 <= 9:
        return 'Low'
    elif g3 <= 14:
        return 'Medium'
    else:
        return 'High'

df['Performance'] = df['G3'].apply(map_performance)

# Feature isolation: Drop G3 leakage, exclude G1/G2
X = df.drop(columns=['G3', 'Performance', 'G1', 'G2'])
y = df['Performance']

# Stratified 80/20 train/test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)`
    },
    {
      title: "2. Decision Tree Classifier (Entropy ID3-Style)",
      language: "python",
      code: `# Entropy-based ID3-style Decision Tree Classifier
dt_model = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('classifier', DecisionTreeClassifier(criterion='entropy', random_state=42))
])

dt_model.fit(X_train, y_train)
y_pred_dt = dt_model.predict(X_test)

print(classification_report(y_test, y_pred_dt))`
    },
    {
      title: "3. K-Means Silhouette Analysis & Validation",
      language: "python",
      code: `# Unsupervised Clustering on 10 standardized features
clustering_features = ['age', 'Medu', 'Fedu', 'studytime', 'failures', 
                       'absences', 'famrel', 'freetime', 'goout', 'health']

scaler = StandardScaler()
X_cluster_scaled = scaler.fit_transform(df[clustering_features])

# Silhouette analysis across K = 2 to 6
for k in range(2, 7):
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    labels = kmeans.fit_predict(X_cluster_scaled)
    score = silhouette_score(X_cluster_scaled, labels)
    print(f"K={k} Silhouette Score: {score:.4f}")`
    }
  ];

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(index);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-600 text-white shadow-2xs">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Case Study Jupyter Notebook
              </h3>
              <p className="text-xs font-mono text-slate-500">
                student_performance_case_study.ipynb
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline-block px-2 py-0.5 bg-slate-200/80 rounded border border-slate-300 text-[10px] text-slate-600 font-mono">
              ESC
            </kbd>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800">
          <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl text-xs sm:text-sm text-blue-950 flex items-start gap-3">
            <Terminal className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <strong>Quick Run Guide for Viva / Lab Execution:</strong>
              <p className="mt-1 font-mono text-xs text-blue-900 bg-white/90 p-2 rounded border border-blue-200">
                pip install -r requirements.txt && jupyter notebook student_performance_case_study.ipynb
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Core Python Implementation Snippets
            </h4>

            {codeSnippets.map((snippet, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-950 text-slate-100">
                <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-300 font-sans">
                    {snippet.title}
                  </span>
                  <button
                    onClick={() => handleCopy(snippet.code, idx)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    {copiedSection === idx ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 text-xs font-mono overflow-x-auto text-slate-200 leading-relaxed">
                  <code>{snippet.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Complete source file present in workspace repository</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-2xs"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
