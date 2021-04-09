---
layout: post
title:  "Biased Data and Faulty Models: How can we mitigate these?"
date:   2021-04-08
tags: 
    - data science
    - data analytics
    - bias
    - tutorial
author: Kai Mashimo
image: /assets/images/blog/data-bias-cover.jpg
excerpt_separator: <!--more-->
---

# Bias in data and models, and their mitigation techniques

## Intro

Given their predictive accuracy and ease of creation, models trained on massive amounts of data are everywhere, and are increasingly used to inform important decisions. How much your insurance premium costs, whether you get a home loan or how much your next plane ticket costs are reduced to mathematical functions. They input your personal data as parameters and spit out a final value which guides the decision.

<!--more-->

While they have massively optimised most sectors of our society, they are not foolproof. Being inventions of the human mind they are ingenious, but flawed.

One major issue is bias in models. Models are often skewed between groups - racial/ethnic, socioeconomic or sex for example - and [have been seen making discriminatory decisions](https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G).

## Where does it come from?

Models are fundamentally algorithmic; this has to mean that they can't be inherently biased towards certain groups.

But these unfair models exist - and here I'll discuss two ways they come about.

Bias is unfortunately an all-too human trait, and both these ways are rooted in the humans who interact with the model:
1. The data itself captures a world that is biased, or
2. The variables chosen as predictors don't properly capture the problem.

### 1. Our world is biased

For classical machine learning models (linear/logistic regression), they are trained and tested on many examples of real-world scenarios before they're ready to make accurate predictions.

While this is a tried and true process for developing models, biased models can be created if their training data is biased.

For example, if the training dataset is derived from a company which has unfairly higher salaries for men, then a model trained on this information will also make biased predictions purely because that is what it was evaluated to do.

### 2. Data scientists making poor decisions

In the creation of classical machine learning models, it is usually up to the model's developer to decide what predictor variables and data will be included in the model's training.

While this allows for freedom and flexibility regarding the complexity of the model or the dimensionality and size of the data, it opens up another dangerous source of bad models.

The data scientist must make sure that only the appropriate variables make it into the model. Otherwise, this may lead to the model trying to infer patterns from irrelevant factors. Interestingly, this can also lead to something called adversarial attacking, a way to exploit weak models to influence their predictions. For more information, I recommend reading here LINK.

Further, not including enough relevant predictors can lead to a similar model which (unsuccessfully) tries to base its patterns on noise.

Ideally, a regression model should use the "right" number of variables. See the next section for practical ways to make your models more robust.

A final issue with variable choice that I'll discuss is confounding variables. This means that, while the input variables in your model should all in some way affect the answer, they should not be affecting each other. Each variable should in theory be independent of others. This will oftentimes break an important rule of models: the error should be random, not correlated to a variable. If it is, it may mean that there is more information to be used in the model[^1].

## Mitigation techniques

Now that we are aware of how bias emerged in our models, what can we do to counteract them?

We will now take a slightly deeper dive into the details of these different types of bad modelling and explore some possible approaches to improving the quality of your own classification.

### 1. Our world is biased

The ideal solution to this is to have a world with no discrimination.

However, that said, on a much smaller scale is there something that one data scientist making one model can do?

One possible solution is to limit the variables that the model can see. For regression models, if you include a discriminating variable, there will certainly be a value assigned to this. This is part of deidentification which removes explicit discrimination. 

Another method is to apply bias-mitigating algorithms. These are a suite of tools which can “repair” the disparity between privileged and unprivileged subgroups of people. While considerably more complex than removing variables, these algorithms are powerful, and are able to subtly shift the distributions of the predicted variable (split by the discriminating feature) to match.

Below is an example of how this looks, courtesy of [this article](https://towardsdatascience.com/ai-fairness-explanation-of-disparate-impact-remover-ce0da59451f1) based on [this paper](https://arxiv.org/abs/1412.3756).

![Effects of the Disparate Impact Remover Algorithm](/assets/images/blog/bias_mitigation.JPG)

*Image courtesy of Stacey Ronaghan in her [Towards Data Science article](https://towardsdatascience.com/ai-fairness-explanation-of-disparate-impact-remover-ce0da59451f1)*

### 2. Data scientists making poor decisions

*Does my model have too many variables?*

In order to answer this question we use an amazing data science tool. You may have heard the saying _the simplest model is the best model_ - and here we use dimensionality reduction. One such example is PCA - principal component analysis. The idea behind these algorithms is to see which features of the data impact the predictor variable the most. By choosing the most important variables, you can begin to eliminate irrelevant information which would only add error and overfitting issues to your problem setup.

You can run PCA in R with:
`prcomp(df )`
Where df is some dataframe or matrix.

*Does my model have enough variables?*

If your model keeps outputting poor results, there are unfortunately many factors which could come into play. However, a couple good points to keep in mind is:
1. Check if the dataset is very small,
2. Check if you’re eliminating features of the data which could be very helpful.

If your data is of the wrong type (textual, visual, event logs etc.) then a regression model may not be the right one for you. As well as handling trickier data types, other solutions such as neural networks may give better results, particularly if you're looking for very complex patterns in lots of data.

*Confounding variables*

In short, they are variables that have a correlation with both the predicted variable as well as another predictor variable. To keep the article length in check, I’ll refer you to another written by one of our very own team members - Julian! [Click here for an amazing read.](https://livebeyonddatascience.com/the-confounding-variable-problem/)

## Conclusion

Thank you for making it this far! I hope this has been an interesting look into the high and lower levels of bias in data. If you have any questions, feel free to message me or the [DataSoc Facebook page](https://www.facebook.com/DataSoc).

[^1]: https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G
