---
layout: post
title:  "Reinforcement Learning - a natural way to learn"
date:   2021-09-16
tags: 
    - data science
    - reinforcement learning
    - bandit algorithms
author: Kai Mashimo
image: /assets/images/blog/dna-cover-photo.jpg
excerpt_separator: <!--more-->
---

The world is a complicated place, and every day we see millions of different problems to solve. How can we use one of nature's secret strengths to power our technology?

<!--more-->

## Why is this important to study?

Have you ever stopped to think about how complex living organisms are and how amazing they are at adapting to their environment (think sugar gliders, chameleons, giraffes)?

![](/assets/images/blog/three-animals.png)

I think about this a lot, and I am constantly astounded by the fact that almost all living creatures share the exact same building blocks on an elemental scale (oxygen, carbon, hydrogen, nitrogen, calcium, phosphorus). Over millions of years, these organisms have slowly improved their structure, physiology and behaviour to fill the biological niches they hold today.

And how they do it is simple too! Their species keeps trying new combinations of types of genes (alleles) and adds mutations until some organisms outlive others - this is natural selection.

## How can we apply this?

This model of try, try, try, each time changing your behaviour a little until you improve is conceptually straightforward, and surprisingly effective.

We often hear of supervised and unsupervised learning, but there is a third family of algorithms (and arguably the most fascinating ones!), reinforcement learning.

## Where is the benefit from these algorithms?

Almost any field can learn something from reinforcement machine learning (RL) - if it involves a process or environment that requires optimal behaviour to succeed then there’s a strong use case for RL. Game theory, swarm intelligence, information theory, anatomy, game-playing programs… the list is never ending!

![](https://www.kdnuggets.com/images/reinforcement-learning-fig1-700.jpg)
_https://www.kdnuggets.com/2018/03/5-things-reinforcement-learning.html_

## Recommender Systems - an example

While I could talk about how Google’s AlphaZero is the greatest and most artistic chess-playing engine ever created for hours on end, another interesting (and much more practical) example lies in the field of recommender systems.

![](https://www.researchgate.net/profile/Alan-Eckhardt/publication/220827211/figure/fig2/AS:394007092973580@1470950019808/Structure-of-a-recommender-system.png)
_https://www.researchgate.net/profile/Alan-Eckhardt_

An integral business tool for companies that offer online services is one that can hook in users and keep them engaged. What’s the best way to get people to watch more videos, buy more products, listen to more songs, add more friends in order to contribute to your revenue? Making good recommendations!

Traditional techniques for this type of tool involve:
* Building user-item interaction matrices which estimate users’ affinities with certain categories of products;
* Using traditional machine learning to augment the user-item matrix;
* Likening the target user to an older user with similar patterns, and using the older user’s most-liked products to suggest choices for the target user.

![](https://miro.medium.com/max/700/1*mz9tzP1LjPBhmiWXeHyQkQ.png)
_https://towardsdatascience.com/brief-on-recommender-systems-b86a1068a4dd_

While these strategies certainly have their merits, reinforcement learning is a good fit for this type of task, as we can closely model human patterns with learning “agents”, which, over many iterations, optimise their behaviours.

A surprising yet highly relevant usage of reinforcement-reinforced recommendation algorithm comes in Netflix’s _thumbnails_. Not only do they use recommender systems to bring the _right_ movies to users, there is also serious effort put into the visual they show you too.

![](https://miro.medium.com/max/2400/1*xwD8rVHPapbfmrl6AIbQbA.png)
_https://netflixtechblog.com/artwork-personalization-c589f074ad76_

Do you like Owen Wilson? Jennifer Anniston? Dogs? Beaches? If your answer was yes to one of these, Netflix probably already knows this at some level and chooses a thumbnail from an unfamiliar show that most closely aligns with your preference. If _Marley and Me_ ever gets suggested to you, have a think about what _you_ personally like and what visual you see.

### A quick dive into bandit algorithms

This type of recommender system is based on a class of learning algorithms known as multi-armed bandits (yes, really). One-armed bandit is a colloquial name for a slot machine!

![](https://miro.medium.com/max/1400/1*w045YMSDuMz1wYeUjLaPQA.png)
_https://medium.com/growth-book/guide-to-multi-arm-bandits-what-is-it-and-why-you-probably-shouldnt-use-it-ecc9bb2e5a84_

_Given a limited amount of cash, how can you find the machine that gives the most winnings the fastest to maximise your profit? (Or likely for casino machines, minimise your loss...)_

Not only do you need to be correct, but you want to be quick too. Putting in just one bet per machine isn’t really that helpful either, because you’re not likely to win anything. One lazy solution is to divide up your money into four amounts, putting one chunk into each machine. Once you’ve found the one that has the best return, put the final amount into it. This is more or less the same as A/B testing. While this may work, we can do better and get more return!

What if you put a small amount into each machine, then at each progressive step you put a little bit more into the more successful machines and a little bit less into the unsuccessful ones? By the end of your spendings, you will have dynamically optimised your spending because you’ve reduced the money you put into worse machines.

![](https://static.wingify.com/gcp/uploads/sites/3/2020/04/ab-testing-vs-bandit-across-value.png)
_https://vwo.com/blog/multi-armed-bandit-algorithm/_

## Back to Netflix

Netflix is using “contextual” bandit algorithms to improve beyond just finding the thumbnail that works for the majority of the population. These bandits can work out personal (contextual) preferences on the fly and start choosing better artwork from the candidate images. The list of candidates needs to be diverse and to show the different aspects of a movie (the leads, action scenes, scenery). This, combined with using engagement **quality** as a metric in the training phase, can train a healthy model and reduce the likelihood of the bandit choosing clickbait titles that reel in users but at the cost of poor watch time or retention.

## Conclusion

Reinforcement-based learning methods are powerful. It is elegant that a strong way to approach a problem is to keep trying slightly different things until you have a clearly outperforming strategy. For another interesting take on this type of learning, have a look at [genetic algorithms](https://en.wikipedia.org/wiki/Genetic_algorithm) or this [brilliant video on learning human motion](https://www.youtube.com/watch?v=SsJ_AusntiU). But what is amazing is that they are not only powerful, they are useful in so many contexts. The generality of use-case certainly means that RL-based techniques are only becoming more nuanced and more pervasive in the technology that surrounds us.


