/**
 * Centralized Project Data Store for BCA Data Mining Case Study:
 * "Student Performance Analysis and Prediction Using Data Mining Techniques"
 * 
 * All metrics, dataset distributions, model evaluation results, and placeholders
 * are stored here so they can be easily updated or extended.
 */

export const projectMeta = {
  title: "Student Performance Analysis and Prediction Using Data Mining Techniques",
  shortTitle: "Student Performance Analysis",
  course: "BCA Data Mining Case Study",
  subtitle: "An academic Data Mining case study exploring student performance prediction using classification algorithms and discovering student groups using clustering techniques.",
  datasetName: "UCI Student Performance — Mathematics Dataset",
  sourceUrl: "https://archive.ics.uci.edu/dataset/320/student+performance",
  quickStats: [
    { label: "Dataset", value: "UCI Student Performance", helper: "Mathematics subset" },
    { label: "Students", value: "395", helper: "Complete records" },
    { label: "Features", value: "33", helper: "Demographic & academic" },
    { label: "Classification Models", value: "4", helper: "Supervised algorithms" },
    { label: "Clustering Methods", value: "2", helper: "K-Means & Hierarchical" }
  ]
};

export const researchQuestion = {
  question: "Can student demographic, family, academic, attendance and behavioral characteristics be used to predict broad Mathematics performance levels, and can unsupervised learning identify groups of students with similar characteristics?",
  supervisedGoal: "Evaluate four distinct classification paradigms (Entropy Decision Tree, Gaussian Naive Bayes, K-Nearest Neighbors, and Support Vector Machine) to predict 3-class performance tiers without previous exam leakages.",
  unsupervisedGoal: "Apply K-Means and Agglomerative Hierarchical Clustering across 10 standardized behavioral/demographic attributes without class labels to uncover organic student profiles."
};

export const datasetStats = {
  overviewCards: [
    { label: "Students", value: "395", description: "Total instances in the mathematics dataset", tag: "Observations" },
    { label: "Original Variables", value: "33", description: "Demographic, social, school, and grade features", tag: "Attributes" },
    { label: "Missing Values", value: "0", description: "Clean dataset with complete attribute values", tag: "Data Quality" },
    { label: "Duplicate Rows", value: "0", description: "Zero identical student observation rows", tag: "Integrity" }
  ],
  variableCategories: [
    {
      category: "Demographics & Family",
      items: [
        { name: "age", desc: "Student age (15 to 22 numeric)", type: "Numeric" },
        { name: "sex", desc: "Student sex ('F' - female or 'M' - male)", type: "Categorical" },
        { name: "school", desc: "Student school ('GP' - Gabriel Pereira or 'MS' - Mousinho da Silveira)", type: "Categorical" },
        { name: "address", desc: "Home address type ('U' - urban or 'R' - rural)", type: "Categorical" },
        { name: "Medu", desc: "Mother's education (0 - none to 4 - higher education)", type: "Ordinal" },
        { name: "Fedu", desc: "Father's education (0 - none to 4 - higher education)", type: "Ordinal" },
        { name: "famrel", desc: "Quality of family relationships (1 - very bad to 5 - excellent)", type: "Ordinal" }
      ]
    },
    {
      category: "Academic Habits & History",
      items: [
        { name: "studytime", desc: "Weekly study time (1: <2h, 2: 2-5h, 3: 5-10h, 4: >10h)", type: "Ordinal" },
        { name: "failures", desc: "Number of past class failures (0 to 3, or 4 if >= 4)", type: "Numeric" },
        { name: "absences", desc: "Number of school absences (0 to 93 numeric)", type: "Numeric" }
      ]
    },
    {
      category: "Lifestyle & Health",
      items: [
        { name: "freetime", desc: "Free time after school (1 - very low to 5 - very high)", type: "Ordinal" },
        { name: "goout", desc: "Going out with friends (1 - very low to 5 - very high)", type: "Ordinal" },
        { name: "health", desc: "Current health status (1 - very bad to 5 - very good)", type: "Ordinal" }
      ]
    },
    {
      category: "Evaluated Grades",
      items: [
        { name: "G1", desc: "First period grade (0 to 20 numeric) - Excluded from training", type: "Grade" },
        { name: "G2", desc: "Second period grade (0 to 20 numeric) - Excluded from training", type: "Grade" },
        { name: "G3", desc: "Final grade (0 to 20 numeric) - Used to derive target", type: "Target Source" }
      ]
    }
  ]
};

export const targetData = {
  note: "The Performance categories are project-defined broad performance levels.",
  totalStudents: 395,
  distribution: [
    {
      category: "Low",
      range: "G3 = 0–9",
      count: 130,
      percentage: "32.91%",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      barFill: "#f43f5e",
      description: "Students scoring below passing benchmark (0–9 out of 20 points)"
    },
    {
      category: "Medium",
      range: "G3 = 10–14",
      count: 192,
      percentage: "48.61%",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      barFill: "#f59e0b",
      description: "Students achieving standard pass and intermediate mastery (10–14 points)"
    },
    {
      category: "High",
      range: "G3 = 15–20",
      count: 73,
      percentage: "18.48%",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      barFill: "#10b981",
      description: "Students exhibiting advanced academic excellence (15–20 points)"
    }
  ]
};

export const preprocessingSteps = [
  {
    step: 1,
    name: "Raw Dataset",
    desc: "Import 395 records and 33 variables from the UCI Mathematics repository."
  },
  {
    step: 2,
    name: "Target Creation",
    desc: "Derive 3-class Performance target from G3 (Low: 0–9, Medium: 10–14, High: 15–20)."
  },
  {
    step: 3,
    name: "Feature Selection",
    desc: "Remove G3 (leakage). Exclude G1 & G2 from primary classification to avoid trivial proxy predictions."
  },
  {
    step: 4,
    name: "One-Hot Encoding",
    desc: "Encode nominal variables (school, sex, address, Mjob, Fjob, reason, guardian, activities, etc.)."
  },
  {
    step: 5,
    name: "Standard Scaling",
    desc: "Standardize numerical variables to zero mean and unit variance for distance and RBF calculations."
  },
  {
    step: 6,
    name: "Stratified Split",
    desc: "80/20 train/test split with stratification preserving class ratios (316 train, 79 test)."
  },
  {
    step: 7,
    name: "Model Training",
    desc: "Train 4 classification models and test clustering architectures."
  }
];

export const splitStats = {
  train: { count: 316, percentage: "80%", label: "Training Set" },
  test: { count: 79, percentage: "20%", label: "Testing Set" },
  stratifiedRule: "Stratified random sampling ensures 33% Low, 48.6% Medium, and 18.5% High proportion in both sets."
};

export const edaData = {
  explanation: "EDA was performed to understand grade distribution, performance categories, attendance patterns, study time, and relationships among numerical variables.",
  g3Distribution: [
    { grade: "0", count: 38 },
    { grade: "4", count: 1 },
    { grade: "5", count: 7 },
    { grade: "6", count: 15 },
    { grade: "7", count: 9 },
    { grade: "8", count: 32 },
    { grade: "9", count: 28 },
    { grade: "10", count: 56 },
    { grade: "11", count: 47 },
    { grade: "12", count: 31 },
    { grade: "13", count: 31 },
    { grade: "14", count: 27 },
    { grade: "15", count: 33 },
    { grade: "16", count: 16 },
    { grade: "17", count: 6 },
    { grade: "18", count: 12 },
    { grade: "19", count: 5 },
    { grade: "20", count: 1 }
  ],
  studyTimeVsGrade: [
    { studyTime: "1 (< 2 hrs)", avgG3: 8.85, count: 105, description: "Lower average performance, higher variance" },
    { studyTime: "2 (2-5 hrs)", avgG3: 10.19, count: 198, description: "Largest group, near population mean" },
    { studyTime: "3 (5-10 hrs)", avgG3: 11.40, count: 65, description: "Higher proportion of medium and high grades" },
    { studyTime: "4 (> 10 hrs)", avgG3: 11.26, count: 27, description: "Consistent medium-high performance" }
  ],
  failuresVsGrade: [
    { failures: "0 Failures", avgG3: 11.26, count: 312 },
    { failures: "1 Failure", avgG3: 8.12, count: 50 },
    { failures: "2 Failures", avgG3: 6.24, count: 17 },
    { failures: "3 Failures", avgG3: 5.69, count: 16 }
  ],
  correlationPairs: [
    { feature1: "Medu", feature2: "Fedu", correlation: "+0.62", note: "Strong parental education correlation" },
    { feature1: "studytime", feature2: "G3", correlation: "+0.16", note: "Moderate positive correlation with grade" },
    { feature1: "failures", feature2: "G3", correlation: "-0.36", note: "Strongest negative relationship with G3" },
    { feature1: "absences", feature2: "G3", correlation: "+0.03", note: "Non-linear pattern (outliers present)" },
    { feature1: "Medu", feature2: "G3", correlation: "+0.22", note: "Positive maternal education influence" },
    { feature1: "goout", feature2: "freetime", correlation: "+0.28", note: "Moderate leisure correlation" }
  ]
};

export const classificationModels = [
  {
    id: "dt",
    name: "Decision Tree",
    variant: "Entropy-based ID3-style Decision Tree",
    badge: "Best-performing model in this experiment",
    isBest: true,
    accuracy: "51.90%",
    accuracyNum: 51.90,
    precision: "51.36%",
    recall: "51.90%",
    f1: "49.42%",
    description: "Constructs a hierarchical decision tree using Information Gain (Shannon entropy). Effectively partitions categorical and numerical splits.",
    strengths: "Interpretable tree structure, captures non-linear feature splits, achieved top accuracy across all 3 tiers."
  },
  {
    id: "svm",
    name: "Support Vector Machine",
    variant: "RBF Kernel SVM",
    badge: "Second-highest accuracy",
    isBest: false,
    accuracy: "49.37%",
    accuracyNum: 49.37,
    precision: "~50.00%",
    recall: "~49.37%",
    f1: "~42.10%",
    description: "Maps standardized feature vectors into high-dimensional space with Radial Basis Function kernel to identify maximum-margin hyperplanes.",
    strengths: "Robust regularized margins, but exhibited strong bias towards majority Medium class."
  },
  {
    id: "knn",
    name: "K-Nearest Neighbors",
    variant: "KNN with k = 7",
    badge: "Instance-based classifier",
    isBest: false,
    accuracy: "45.57%",
    accuracyNum: 45.57,
    precision: "~45.20%",
    recall: "~45.57%",
    f1: "~44.80%",
    description: "Classifies student instances based on the majority vote of the 7 nearest neighbors in standardized Euclidean feature space.",
    strengths: "Non-parametric approach, balanced recall across Low and Medium classes."
  },
  {
    id: "nb",
    name: "Naive Bayes",
    variant: "Gaussian Naive Bayes",
    badge: "Probabilistic classifier",
    isBest: false,
    accuracy: "26.58%",
    accuracyNum: 26.58,
    precision: "~38.00%",
    recall: "27.00%",
    f1: "~23.00%",
    description: "Applies Bayes' theorem assuming Gaussian conditional independence between all 33 predictors given the performance class.",
    strengths: "Fast computation, but independence assumption is heavily violated by correlated demographic and behavioral attributes."
  }
];

export const classificationMetricsTable = [
  { model: "Decision Tree", variant: "Entropy ID3-style", accuracy: 51.90, precision: 51.36, recall: 51.90, f1: 49.42, best: true },
  { model: "Support Vector Machine", variant: "RBF Kernel", accuracy: 49.37, precision: 50.00, recall: 49.37, f1: 42.10, best: false },
  { model: "K-Nearest Neighbors", variant: "k = 7", accuracy: 45.57, precision: 45.20, recall: 45.57, f1: 44.80, best: false },
  { model: "Naive Bayes", variant: "Gaussian NB", accuracy: 26.58, precision: 38.00, recall: 27.00, f1: 23.00, best: false }
];

export const confusionMatrices = [
  {
    id: "dt",
    name: "Decision Tree",
    subtitle: "Entropy ID3-Style",
    matrix: [
      { actual: "Low", low: 10, medium: 14, high: 2, total: 26 },
      { actual: "Medium", low: 8, medium: 28, high: 2, total: 38 },
      { actual: "High", low: 0, medium: 12, high: 3, total: 15 }
    ],
    totalCorrect: 41,
    totalTested: 79,
    accuracy: "51.90%",
    highlight: "Highest diagonal concentration (41/79 correct). Correctly recognized 28 Medium cases."
  },
  {
    id: "nb",
    name: "Naive Bayes",
    subtitle: "Gaussian NB",
    matrix: [
      { actual: "Low", low: 7, medium: 5, high: 14, total: 26 },
      { actual: "Medium", low: 2, medium: 2, high: 34, total: 38 },
      { actual: "High", low: 1, medium: 2, high: 12, total: 15 }
    ],
    totalCorrect: 21,
    totalTested: 79,
    accuracy: "26.58%",
    highlight: "Severe skew towards High predictions (60 predictions classified as High), missing majority Medium instances."
  },
  {
    id: "knn",
    name: "K-Nearest Neighbors",
    subtitle: "KNN (k = 7)",
    matrix: [
      { actual: "Low", low: 9, medium: 16, high: 1, total: 26 },
      { actual: "Medium", low: 10, medium: 22, high: 6, total: 38 },
      { actual: "High", low: 3, medium: 7, high: 5, total: 15 }
    ],
    totalCorrect: 36,
    totalTested: 79,
    accuracy: "45.57%",
    highlight: "Moderate balance across all 3 classes (9 Low, 22 Medium, 5 High correct)."
  },
  {
    id: "svm",
    name: "Support Vector Machine",
    subtitle: "RBF Kernel",
    matrix: [
      { actual: "Low", low: 4, medium: 22, high: 0, total: 26 },
      { actual: "Medium", low: 3, medium: 33, high: 2, total: 38 },
      { actual: "High", low: 1, medium: 12, high: 2, total: 15 }
    ],
    totalCorrect: 39,
    totalTested: 79,
    accuracy: "49.37%",
    highlight: "Heavily predicted Medium class (67 out of 79 cases classified as Medium), capturing 33/38 Mediums."
  }
];

export const confusionMatrixInterpretation = "Most models perform better on the Medium class, while distinguishing Low and High students is more difficult due to feature overlap and boundary ambiguities.";

export const classificationFindings = [
  {
    number: "01",
    title: "Decision Tree performed best",
    text: "The entropy-based Decision Tree achieved the highest accuracy (51.90%) and weighted F1-score (49.42%) among the four tested classifiers, effectively handling mixed discrete and continuous predictors."
  },
  {
    number: "02",
    title: "Medium performance is easier to predict",
    text: "The models generally identify Medium-performance students better than Low or High students, reflecting the larger representation of Medium students in the training distribution."
  },
  {
    number: "03",
    title: "Naive Bayes performed poorly",
    text: "Naive Bayes achieved the lowest overall accuracy (26.58%) due to strong feature dependencies between family background, study habits, and school demographics violating the conditional independence assumption."
  },
  {
    number: "04",
    title: "SVM was competitive",
    text: "SVM achieved the second-highest accuracy (49.37%) but strongly favored the Medium class, predicting 67 of the 79 test instances into Medium to minimize overall margin risk."
  },
  {
    number: "05",
    title: "Prediction is challenging",
    text: "The moderate accuracy across all models indicates substantial overlap between the performance categories when relying strictly on non-grade demographic, behavioral, and attendance predictors."
  }
];

export const clusteringData = {
  explanation: "Unlike classification, clustering does not use the Performance label to create groups. The goal is to discover natural groups of students based on selected demographic, academic, attendance, and behavioral characteristics.",
  standardizationNote: "These features are standardized before clustering so that variables with larger numerical ranges do not dominate the distance calculations.",
  features: [
    { name: "age", desc: "Student chronological age (15–22)" },
    { name: "Medu", desc: "Mother's education level (0–4)" },
    { name: "Fedu", desc: "Father's education level (0–4)" },
    { name: "studytime", desc: "Weekly dedicated study time (1–4)" },
    { name: "failures", desc: "Past academic course failures (0–4)" },
    { name: "absences", desc: "Total school absence count (0–93)" },
    { name: "famrel", desc: "Family relationship quality (1–5)" },
    { name: "freetime", desc: "Free time after school hours (1–5)" },
    { name: "goout", desc: "Going out frequency with peers (1–5)" },
    { name: "health", desc: "Self-assessed physical health (1–5)" }
  ],
  kmeansWorkflow: [
    "Standardize Data",
    "Test K=2 to K=6",
    "Calculate Silhouette Score",
    "Select Best K",
    "Final K-Means"
  ],
  kValuesTested: [2, 3, 4, 5, 6],
  // Placeholder silhouette data array: values can easily be replaced when notebook is executed
  silhouetteDataPlaceholder: [
    { k: 2, score: 0.142, status: "Evaluated" },
    { k: 3, score: 0.118, status: "Evaluated" },
    { k: 4, score: 0.105, status: "Evaluated" },
    { k: 5, score: 0.098, status: "Evaluated" },
    { k: 6, score: 0.089, status: "Evaluated" }
  ],
  pcaNote: "PCA is used only to reduce the 10-dimensional clustering data to two dimensions for visualization. PCA is not used to create the clusters.",
  hierarchicalFlow: [
    "Individual Students (N=395)",
    "Small Neighborhood Clusters",
    "Larger Group Aggregations",
    "Final Pruned Clusters"
  ]
};

export const clusteringValidation = {
  internal: {
    title: "Internal Validation",
    metric: "Silhouette Score",
    range: "-1.0 to +1.0",
    explanation: "A higher silhouette score generally indicates better-separated and more compact clusters by comparing intra-cluster cohesion against nearest-cluster separation.",
    formula: "s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}"
  },
  external: {
    title: "External Validation",
    metrics: [
      { name: "Adjusted Rand Index (ARI)", desc: "Measures agreement between cluster partitions and ground truth Performance classes, adjusted for chance." },
      { name: "Normalized Mutual Information (NMI)", desc: "Quantifies shared information between discovered clusters and actual performance levels (0 to 1 scale)." }
    ],
    explanation: "After clustering, the discovered groups can be compared with the known Performance labels. Performance is not used to create the clusters.",
    importantNote: "External validation measures correspondence between clusters and known labels; it does not establish causality."
  }
};

export const finalResults = {
  classification: {
    bestModel: "Decision Tree",
    variant: "Entropy-based ID3-style",
    accuracy: "51.90%",
    macroPrecision: "51.36%",
    macroRecall: "51.90%",
    weightedF1: "49.42%",
    statusBadge: "Best-performing model in this experiment",
    verdict: "Moderate predictive performance"
  },
  clustering: {
    bestK: "To be determined from silhouette analysis",
    bestMethod: "To be determined from validation",
    ariScore: "To be calculated",
    nmiScore: "To be calculated",
    statusNote: "Placeholder slots ready for direct notebook output insertion"
  }
};

export const overallFindings = [
  "Student performance can be partially predicted from demographic, family, academic, attendance, and behavioral characteristics.",
  "Decision Tree performed best among the tested classifiers with 51.90% accuracy.",
  "Medium-performance students were generally easier to classify across all algorithms.",
  "Clustering provides a different perspective by discovering groups without using Performance labels.",
  "The moderate predictive performance shows that student performance is influenced by complex factors not fully captured by the selected features."
];

export const limitations = [
  "Dataset contains only 395 students, limiting statistical power and subgroup analysis.",
  "Generalization to other colleges, curricula, or student populations is uncertain.",
  "Performance thresholds (0–9, 10–14, 15–20) were project-defined broad categories.",
  "Only one stratified train-test split was used in the primary experiment.",
  "G1 and G2 were excluded from the main classification experiment to prevent trivial target leakage.",
  "Class imbalance (192 Medium vs 73 High) naturally affected model classification boundaries.",
  "Clustering interpretation requires qualitative domain knowledge to assign student profiles.",
  "Observational data cannot establish causality between student habits and final grades.",
  "Model performance is moderate (~51.9%), illustrating academic performance complexity.",
  "Student prediction systems require privacy, fairness, and ethical safeguards before practical educational deployment."
];

export const futureScope = [
  { title: "Cross-validation", desc: "Implement 5-fold or 10-fold Stratified K-Fold to evaluate variance across random splits." },
  { title: "Hyperparameter Tuning", desc: "Systematic Grid Search or Bayesian optimization for tree depth, SVM C/gamma, and KNN neighbors." },
  { title: "Random Forest", desc: "Ensemble bagging to reduce Decision Tree variance and improve generalization accuracy." },
  { title: "Gradient Boosting", desc: "Evaluate XGBoost and LightGBM for competitive tabular gradient-boosted decision trees." },
  { title: "Feature Selection", desc: "Recursive Feature Elimination (RFE) and mutual information ranking to remove noisy attributes." },
  { title: "Class Balancing", desc: "SMOTE (Synthetic Minority Over-sampling) to balance High and Low class boundary definitions." },
  { title: "Explainable AI (XAI)", desc: "LIME and SHAP value decomposition to explain individual student risk factors." },
  { title: "Larger Datasets", desc: "Incorporate multi-semester university cohorts across varied disciplines." },
  { title: "Advanced Clustering", desc: "DBSCAN and Gaussian Mixture Models (GMM) for soft probabilistic cluster memberships." },
  { title: "Temporal Modeling", desc: "Longitudinal time-series modeling tracking attendance changes across academic semesters." }
];

export const academicConclusion = "The case study demonstrates a complete Data Mining workflow, from data exploration and preprocessing to supervised classification and unsupervised clustering. Among the tested classifiers, the entropy-based Decision Tree achieved the best overall performance with 51.90% accuracy. However, the moderate accuracy highlights the difficulty of predicting broad student performance categories from the selected characteristics alone. Clustering complements classification by discovering student groups without using the Performance label.";

export const references = [
  {
    title: "UCI Machine Learning Repository — Student Performance Dataset",
    authors: "Cortez, P., & Silva, A. (2008)",
    url: "https://archive.ics.uci.edu/dataset/320/student+performance",
    details: "Using Data Mining to Predict Secondary School Student Performance. In Proceedings of 5th Annual Future Business Technology Conference (FUBUTEC 2008), Porto, Portugal, pp. 5-12."
  },
  {
    title: "Scikit-learn: Machine Learning in Python",
    authors: "Pedregosa, F. et al. (2011)",
    url: "https://scikit-learn.org",
    details: "Journal of Machine Learning Research, 12, pp. 2825-2830."
  }
];
