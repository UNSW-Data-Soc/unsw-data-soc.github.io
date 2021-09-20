---
layout: post
title:  "Active Learning: faster and cheaper than before"
date:   2021-05-06
tags: 
    - Data Science
    - Skills and Guidance
author: Kai Mashimo
image: /assets/images/blog/active-learning-cover.jpg
excerpt_separator: <!--more-->
---

The machine learning techniques we've got today are great, but are still left with some sizeable problems in their creation and use. Today I’ll be exploring what happens if you have very little data to work with. 
<!--more-->

## The Problem

Arguably, the most important thing you need when training a model is - well, training data.

In most classical machine learning problems you use previously labelled data to teach a model how to convert the input (predictor) features to an answer. Over the course of your training period, the model is shown past examples which inform its decision-making for future instances.

However! What do you do in a real-life scenario where you don’t have a huge bank of pre-labelled data? If all your data is unlabelled?  What if you’re trying to teach a learner to recognise written words or signs and there are no premade answers?

## The Solution

This method of training a model by “showing” the correct answers is known as supervised learning. But if you’re faced with a completely new problem, then it may be hard to train your model in a supervised way as you lack the data.

What you need, surprisingly, is a human. You need someone who knows the answer who can create labelled training data to teach the model. The problem is, manually labelling is time-consuming and expensive. In a real business problem, chances are you’d need to pay for people to annotate sections of the data to go towards training your model.

So I present to you a new problem setup: **[active learning]()**. This method incorporates the fact that not all data were created equal. The model takes charge of the training process and selects its own examples for the information source (also known as the oracle or teacher - usually a human) to label.

![Why is active learning better than random sampling?](/assets/images/blog/active_learning_boundary.JPG)
_Source: <https://www.datacamp.com/community/tutorials/active-learning>_

In this diagram, we can see the power of active learning in practice. If we are constructing a model that can classify whether a point is green or red, traditional practices of randomly selecting a small number of points, having them labelled, then performing a regression can be improved. On the right, the active learner chooses the points which are most instructive to the classification task. Take the point (-4,0). It’s green, way over to the left, and vertically in the middle. If you had a limited number of points to find the best “decision boundary”, that point is not at all very helpful - it would have been more beneficial to choose points that were uncertain and in the middle to have labelled to build a better line.

Active learning is the answer to a cost-optimisation problem: how can we choose data points to be labelled if labelling is expensive? One interesting way of doing this that I’ll explore is **pool-based uncertainty sampling**.

### Pool-Based Uncertainty Sampling

Let’s break it down: if the sampling is _pool-based_, this means that the learner takes samples from the pool of unlabelled data and evaluates them in terms of how it can understand it. These scores form the basis of the model’s sample selection. _Uncertainty_ sampling means that this assigned score is based on how “sure” the model is that it knows the answer.

Intuitively, this is a very solid foundation on which to train the model. If you’re a student doing practice tests for two subjects and you get 95% on one test, and 50% on the other, you will certainly maximise your term WAM if you study for the subject you did worse in.

There are plenty of other sampling types and combinations thereof - if you’re interested have a read [here](https://en.wikipedia.org/wiki/Active_learning_(machine_learning)).

## How good is active learning?

The benefit of this dynamic querying strategy is that you reach higher accuracies much faster than random sampling. 

![How much faster is active learning than normal learning?](/assets/images/blog/active-learning-graph.png)

_Source: <https://www.kdnuggets.com/2018/10/introduction-active-learning.html>_

Have a look at this graph. The active learner is much faster at getting higher accuracies, but of course, once both learners have seen all the data they are equally accurate. This is why it’s a great solution to situations where labelled data is expensive to come by.

## Practical Uses

If you want to use this kind of machine learning in a project of your own, I would personally recommend a Python package called `modAL` (modular active learning). Check out the docs [here](https://modal-python.readthedocs.io/en/latest/). One quick example of how you might use this is below:

```
from modAL.models import ActiveLearner
from sklearn.ensemble import RandomForestClassifier

# initializing the learner
learner = ActiveLearner(
    estimator=RandomForestClassifier(),
    query_strategy=uncertainty_sampling,
    X_training=X_training, y_training=y_training
)

# query for labels
query_idx, query_inst = learner.query(X_pool)

# ...obtaining new labels from the Oracle...
y_new = input('What label is this: {}'.format(query_inst))
# This line only works if your query instance is a printable data type

# supply label for queried instance
learner.teach(X_pool[query_idx], y_new)
```
_Source: <https://modal-python.readthedocs.io/en/latest/content/overview/modAL-in-a-nutshell.html>_

## Conclusion

I hope this was a helpful demonstration that active learning is a simple yet powerful way to accelerate your model’s accuracy in a cost-effective way, particularly in situations where acquiring labelled data is expensive.



