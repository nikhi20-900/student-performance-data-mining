# Student Performance Data Mining Case Study

This repository contains a complete BCA-level data mining project based on the UCI Student Performance (Mathematics) dataset. The project demonstrates both supervised and unsupervised learning, with a reproducible notebook, evaluation metrics, and a summary of the findings.

## Project objective
The goal is to analyze student academic behavior and predict performance level using data mining techniques. The study explores how factors such as family background, study habits, social life, and past grades influence final outcomes.

## Dataset
- Source: UCI Machine Learning Repository
- Dataset: Student Performance Data (Mathematics)
- File: `student-mat.csv`
- Rows: 395
- Features: 30 input variables + target
- Target variable: `Performance` with categories Low, Medium, and High

## Methods used
### Supervised learning
- Decision Tree
- Naive Bayes
- K-Nearest Neighbors (KNN)
- Support Vector Machine (SVM)

### Unsupervised learning
- K-Means clustering
- Agglomerative clustering

### Evaluation metrics
- Accuracy
- Precision
- Recall
- F1-score
- Confusion matrix
- Silhouette score
- Adjusted Rand Index (ARI)
- Normalized Mutual Information (NMI)

## Repository contents
- `student_performance_case_study.ipynb` — full project notebook with analysis and modeling workflow
- `student-mat.csv` — dataset used for the study
- `requirements.txt` — Python dependencies
- `results/classifier_metrics.csv` — classifier comparison results
- `results/clustering_summary.json` — clustering evaluation summary
- `PROJECT_SUMMARY.md` — detailed explanation of the project, methodology, and findings

## Setup
1. Create and activate a virtual environment
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Open the notebook in Jupyter or VS Code and run the cells in order.

## Quick result summary
The notebook shows that the Decision Tree model performed best among the four classifiers, with the highest accuracy and balanced classification performance across the three performance levels.

For clustering, the best K value was found to be 2 based on silhouette score. The data was grouped into two main clusters, indicating that students can be broadly separated into two academic patterns.

## Academic interpretation
The project helps answer practical data mining questions such as:
- Which student factors most strongly influence academic results?
- Which classification model gives the strongest predictive performance?
- Can students be naturally grouped into performance-based clusters?
- How do demographic and behavioral variables relate to learning outcomes?

## Result files
The notebook saves evaluation outputs in the `results` directory, making the project easy to present in reports and vivas.

## License
This project is intended for academic and educational use.
