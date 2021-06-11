---
layout: post
title:  "Errors and Bias - Variance Decomposition"
date:   2021-04-22
tags: 
    - data science
    - skills
    - modelling
    - machine learning
author: Amber Dang
image: \assets\images\blog\21-04-22-banner.jpg
excerpt_separator: <!--more-->
---

One of the most popular applications of machine learning or data science in solving real-world problems is building meaningful models that could not only explain the variation in the target variable but also provide reliable predictions for unseen observations. But what if our model has high error metrics, what can we do to mitigate the situation? <!--more-->

Naturally, building a good model means making the least mistakes possible when predicting the output or "learning" the training dataset, hence interpreting the mistakes or errors is one of the most important steps in a data scientist's pipeline.

## Error - A simple explanation

Before we start analysing the error of a model, let start by accepting that it is very rare to find a model that could represent the real-world problem perfectly due to inherent variability in the data. This produces what is called the irreducible error caused by the fact that the explanatory variables X we included in the model cannot completely determine the target Y since other factors are having a contributing yet small effect of X on Y.<sup>1</sup>

Naturally, the error that we could scrutinise to make a better prediction is called the reducible error. These two, irreducible error and reducible error makes up the error term in any model.

## Bias-variance decomposition

To have a better understanding of the mistakes our model is making, we need to further decompose the reducible error.

Imagining you are trying to shoot an arrow at the bullseye. You have a strategy that takes into consideration the distance from your position to the target, the direction and magnitude of the wind, how heavy your arrow is, etc. You may or may not have taken a crash course in archery. There are four outcomes as to how likely and frequently you hit the bullseye.
The first and best scenario is where most of your arrows get very close to the target and their distance from each other is small.

The second scenario is when you know where to aim but your shooting skills aren't too great so most of your shots scatter around the bullseye and there is quite a distance from each of the shots.

The third scenario is the opposite of the above. You have the skills hence the shots are very close to each other, but since your calculations to all the factors affecting the outcome of the shooting are not very precise, their centre is far off from the bullseye.

The last and worst scenario is where you don't know what you are aiming for nor you have the shooting skills.

![Bias - Variance tradeoff, Source: Scott Fortmann-Roe., Understanding Bias - Variance tradeoff](/assets/images/blog/21-04-22plot1.png)

Putting this into statistical language, the shooting strategy is the hypothetical model, and the skills are how good the model performs. So bias is the difference between the expected prediction and the truth or correct value of the target, and variance is how noisy the model’s predictions are.

### The tradeoff

Naturally, we would aim for the case where bias is low, and variance is low. However, this is easier said than done.
Simple models with little parameters hence unable to capture the underlying pattern usually have a high bias.
Furthermore, they are usually inflexible and the fluctuation between their predictions is little hence the low bias. The name for this issue in modelling is called underfitting.

Below is an example is taken from a course I have done in the past. The true model of the data represent by the blue line and our proposed model is in green. Our proposed model here is a simple linear model with a very rigid shape hence the high bias. However, it has low variance since regardless of the data, the prediction does not vary greatly.

![The truth vs proposed model across 9 different datasets in the first scenario](/assets/images/blog/21-04-22pic2.png)

The chart comparing the bias and variance across 9 different datasets obtained from one single true model:

![Bias and variance across 9 datasets](/assets/images/blog/21-04-22pic3.png)

On the other hand, if we include many explanatory variables, the model can even capture the noise let alone the underlying pattern of the data. This results in models having predictions very close to the target - low bias but since they can capture the data too well, the predictions can be quite noisy – high variance. This is called an overfitting issue.

We now propose a quadratic model for higher complexity. Across nine different datasets, the second model seems to capture the true model better but the model’ shapes in each of the nine dataset show some fluctuation.

![The truth vs proposed model across 9 different datasets in the second scenario](/assets/images/blog/21-04-22pic4.png)

We can observe that when we increasing the complexity of the model, the bias decreases and the variance increase.

![Bias and variance across 9 datasets](/assets/images/blog/21-04-22pic5.png)

## How to get the optimal model complexity?

Machine learning and modelling is surrounded by trials and errors. The simplest approach would be to test different model complexity level, compare their bias and variance and pick the most appropriate one. This is generally a good approach for regression models or simple numerical machine learning problems.

The example below depicts different complexity with the red line being the true model and orange being the proposed model.

## A more advanced approach: Machine Learning Algorithm – Ensemble Learning

The key idea of ensemble learning is that by aggregating multiple low-bias-high-variance models and take their average, we can obtain a somewhat new model with the same low bias but with much lower variance.<sup>2</sup>

This is done by taking the original dataset and sampling with replacement to generate multiple sub-datasets of the original each upon which has a model trained. Then, we take each of the model’s prediction and decides the final prediction by picking the majority votes or using a weighted average or even using each prediction as an explanatory variable and train a new model on that.
The algorithm described above is called bagging (Bootstrap AGGregation).

There are other invariants of ensemble learning:
-	Random forest: each sub-dataset is trained on a random subset of the explanatory variables instead of a full set.
-	Boosting: models are trained sequentially, each focusing on the previous mistakes.
All of the model mentioned above can be implemented by a very powerful library in Python called scikit-learn.

## Conclusion

Thank you for making this far into the blog post. I hope this would be a new and more exciting perspective towards errors and machine learning algorithms. Indeed, this is a more theory-oriented post but I hope it does not deter you from taking an interest in machine learning. 

Please contact me if you would like the python code for all the graphs above or any recommendations to improve this post.

## References

1. Wheeler, W. (2018) Reducible vs irreducible error: Medium. Available at: <https://medium.com/wwblog/reducible-vs-irreducible-error-e469036969fa>.

2. Ayuya, C. (2021) Ensemble Learning on Bias and Variance: Section.
