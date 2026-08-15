# Final Report: Student Performance Data Mining Case Study

## 1. Introduction
Education is one of the most important sectors where data-driven decision-making can support better outcomes. In this project, the UCI Student Performance (Mathematics) dataset was used to examine how student characteristics and academic behaviors influence final performance. The study aims to build predictive models that classify students into Low, Medium, and High performance categories and to identify natural clusters among students based on similar learning patterns.

The importance of this project lies in its practical relevance. Schools and institutions can use such analysis to identify students who may need academic support, understand the relationship between student factors and outcomes, and make informed decisions about interventions.

## 2. Objectives of the Study
The main objectives of the case study were:

- To analyze the student dataset and understand the distribution of key variables.
- To prepare the dataset for data mining tasks through cleaning and preprocessing.
- To compare the performance of multiple classification algorithms.
- To evaluate clustering methods to identify student groups.
- To provide an academic interpretation of the results.

## 3. Dataset Description
The dataset used in this project is the UCI Student Performance dataset for Mathematics. It contains information about students, including academic, family, behavioral, and demographic attributes such as:

- age, sex, school
- parent education levels
- study time, travel time, absences
- alcohol consumption
- health and family relationship scores
- grades G1, G2, and G3

The target variable was derived from the final grade G3. Students were classified into three categories:

- Low
- Medium
- High

This transformed target allowed the project to use supervised learning classification methods.

## 4. Data Preprocessing
Before modeling, the dataset was checked for missing values, duplication, and invalid entries. The attribute types were reviewed, and categorical variables were separated from numerical variables.

The preprocessing pipeline included:

- splitting features and target variable,
- identifying categorical and numerical columns,
- using one-hot encoding for categorical variables,
- standardizing numerical variables,
- preparing train-test splits for model evaluation.

This step is essential because machine learning algorithms generally perform better when data is transformed into a suitable form.

## 5. Methodology
The study followed a standard data mining workflow:

1. Data collection and understanding
2. Exploratory data analysis
3. Target creation
4. Feature engineering and preprocessing
5. Model training and evaluation
6. Clustering and interpretation
7. Reporting of findings

## 6. Classification Models
Four classification models were trained and evaluated:

- Decision Tree
- Naive Bayes
- K-Nearest Neighbors
- Support Vector Machine

These models were compared using metrics such as accuracy, precision, recall, and F1-score.

### 6.1 Decision Tree
The Decision Tree classifier performed the best among the four algorithms. It achieved the highest accuracy and a relatively good balance between precision and recall across the three classes. This indicates that decision boundaries based on student-related features were useful in distinguishing different performance levels.

### 6.2 Naive Bayes
Naive Bayes had the lowest accuracy among the tested models. It showed a tendency to favor the majority class and struggled especially with the Medium and High classes. Although its probabilistic approach is simple and fast, it was not the best fit for this dataset.

### 6.3 KNN
The KNN model produced moderate results. It was better than Naive Bayes but still below the Decision Tree in accuracy. This suggests that distance-based classification is useful but may not capture the complex relationships in the data as effectively as tree-based learning.

### 6.4 SVM
The SVM model produced competitive results, with reasonable accuracy and precision. However, it did not outperform the Decision Tree. SVM is often effective for high-dimensional data, but the structure of the student dataset and the class distributions may have limited its performance in this specific case.

## 7. Model Comparison
The final comparison showed the following trend:

- Decision Tree: best model
- SVM: competitive second
- KNN: moderate performance
- Naive Bayes: weakest performance

This comparison demonstrates that no single algorithm is always ideal; model performance depends on the data pattern and the nature of the target variable.

## 8. Clustering Analysis
In addition to classification, clustering was used to identify patterns among students without using the target labels. The following clustering methods were applied:

- K-Means clustering
- Agglomerative clustering

### 8.1 K-Means Clustering
The K-Means algorithm was evaluated using silhouette score to determine the best number of clusters. The best value was found to be K = 2, which indicates that the student population can be reasonably split into two main groups.

This result suggests the presence of two broad academic profiles among students, each reflecting different patterns of engagement, support, and performance.

### 8.2 Agglomerative Clustering
Agglomerative clustering was also evaluated to compare its structure with K-Means. It produced a similar overall interpretation, confirming that the dataset contains meaningful groupings rather than random distribution.

## 9. Interpretation of Findings
The results of the study suggest that student performance is influenced by a mixture of academic and non-academic factors. Some of the important patterns observed include:

- Students with stronger parental support and more consistent study habits tend to perform better.
- The final grade is not determined by a single variable; several factors work together.
- Behavioral and social factors influence academic outcomes in meaningful ways.
- The clustering results reveal the existence of two broad student profiles.

This is consistent with the understanding that educational success is shaped by both academic preparation and social-environmental influences.

## 10. Conclusion
This project successfully demonstrates the use of data mining in education. By applying both supervised and unsupervised learning methods, it was possible to predict student performance and identify natural patterns in the student population.

The Decision Tree model emerged as the most effective classifier, while K-Means clustering identified two major student groups. These findings provide valuable insights for educational institutions that want to understand performance trends and support students more effectively.

## 11. Academic Significance
This project is suitable for a BCA or undergraduate data mining assignment because it combines core topics such as:

- data preprocessing,
- feature engineering,
- classification,
- clustering,
- model evaluation,
- decision-making based on data.

It also demonstrates how real-world educational data can be analyzed using Python and scikit-learn, making it relevant for practical learning and faculty evaluation.

## 12. Final Remarks
The project not only explains how data mining works in theory but also shows its application in a real educational context. The combination of predictive modeling and grouping analysis makes the case study academically rich and practically useful.

The workflow, notebook, and result files in this repository can be used as a complete project submission for coursework, presentation, or a portfolio showcase.
