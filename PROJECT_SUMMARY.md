# Student Performance Data Mining Project Summary

## Title
Student Performance Analysis and Prediction Using Data Mining Techniques

## Overview
This project applies data mining concepts to the UCI Student Performance (Mathematics) dataset. The focus is on understanding student performance and building prediction models that classify students into Low, Medium, and High performance groups.

## Problem statement
Educational institutions often want to identify which factors influence academic performance and how students can be grouped into similar learning patterns. This project addresses that by using data mining techniques to:

- analyze student attributes and final grades,
- build classification models,
- compare model performance,
- perform clustering to find natural student groups,
- present results in a way suitable for academic coursework.

## Dataset description
The dataset contains academic and demographic details of students, including:

- school, sex, age
- family background and parental education
- study time and travel time
- alcohol consumption patterns
- health and family relationship scores
- absences
- grades G1, G2, and G3

The final grade G3 is used as the basis for creating the target class:
- Low: lower final performance
- Medium: moderate final performance
- High: stronger final performance

## Data preprocessing
The raw data was cleaned and inspected for:

- missing values,
- duplicate records,
- data types,
- summary statistics,
- target class distribution.

The final dataset was then transformed so that:
- categorical variables were encoded,
- numerical variables were scaled,
- the data was prepared for machine learning models.

## Machine learning workflow
### 1. Classification models
The notebook trains and compares the following classifiers:

- Decision Tree
- Naive Bayes
- K-Nearest Neighbors
- Support Vector Machine

Each model is evaluated using:
- accuracy
- weighted precision
- weighted recall
- weighted F1-score
- classification report

### 2. Clustering models
The project also uses unsupervised learning methods:

- K-Means clustering
- Agglomerative clustering

The clustering models are evaluated using:
- silhouette score
- ARI (Adjusted Rand Index)
- NMI (Normalized Mutual Information)

## Results
The models produced the following approximate outcomes:

| Model | Accuracy | Weighted F1 |
| --- | ---: | ---: |
| Decision Tree | 0.519 | 0.494 |
| Naive Bayes | 0.266 | 0.230 |
| KNN | 0.456 | 0.449 |
| SVM | 0.494 | 0.420 |

### Best performing classifier
The Decision Tree delivered the best overall performance among the four models. This indicates that the chosen student attributes contain useful patterns that help distinguish performance levels.

### Best clustering configuration
The best K value was identified as 2 using silhouette score. This suggests that the student population can be grouped into two main performance-related clusters.

## Interpretation
The findings show that academic performance is influenced by several combined factors rather than a single variable. Many of the most important factors are linked to effort, family support, and academic consistency.

Students with stronger academic habits and consistent educational support seem more likely to fall into higher performance groups, while weaker academic foundation and limited support patterns are associated with lower performance groups.

## Business and academic value
This project is useful for:

- understanding student performance patterns,
- identifying at-risk students,
- supporting early interventions,
- making evidence-based educational decisions,
- demonstrating how data mining can be used in education.

## Conclusion
This case study demonstrates how data mining can transform raw educational data into meaningful insights. The combination of classification and clustering gives a practical view of both prediction and grouping patterns in student performance.

The project is suitable for a BCA-level academic project, laboratory exercise, or mini research study.

## Files included
- `student_performance_case_study.ipynb`
- `student-mat.csv`
- `requirements.txt`
- `README.md`
- `PROJECT_SUMMARY.md`
- `results/classifier_metrics.csv`
- `results/clustering_summary.json`
