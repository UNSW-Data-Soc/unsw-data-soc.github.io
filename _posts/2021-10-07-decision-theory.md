---
layout: post
title:  "The Choices We Make"
date:   2021-10-07
tags: 
    - data science
    - decision theory
author: Aileen Wang
image: /assets/images/blog/21-10-07-banner.jpg
excerpt_separator: <!--more-->
---

Suppose I get out of bed one morning and the sky is cloudy. I have a date with a friend at a café soon (a pre-COVID indulgence). I get up, I brush my teeth, I dress. As I prepare to leave my house, I am faced with a pressing decision: do I bring my umbrella?

<!--more-->

But first I need to contextualise. Why should I need to make a choice about bringing an umbrella? The sky is cloudy and it might rain. If I had an umbrella when I rained, I wouldn’t get wet - but I don’t have a bag or anywhere to put it, meaning it would be dead weight I’d carry around for the whole day if it happened not to rain. If it did rain without an umbrella, though, I’d probably catch a cold and be soaked for the entire day, which is definitely worse. But wouldn’t it be nice if it didn’t rain and I didn’t carry an umbrella? Then I wouldn’t have to bring an extra load with me at all.

Based off this, I’ve established four scenarios. Two of them are optimal, the other two are certainly not.

1.	It rains and I have an umbrella – Good!
2.	It rains and I don’t have an umbrella – Bad!
3.	It doesn’t rain and I have an umbrella – Bad, but perhaps not as bad as scenario two?
4.	It doesn’t rain and I don’t have an umbrella – The best!

Now I go on to making my decision. I’m missing something here. What’s the probability that it’s going to rain? A cloudy sky has me inferring it as ‘likely’, but ‘likely’ is hardly scientific. I take out my phone and check the weather. The Bureau of Meteorology, whom I trust with my honour if not my life, informs me that there is a 70% change of rain. 

70%! I pick up my umbrella staunchly and set out to meet my friend. Halfway down the road it starts sprinkling, and by the time I get to the café it’s a torrential downpour. I congratulate myself on my foresight as I duck under the awning with only my boots wet.

This somewhat mundane scenario leads us through a basic application of decision theory. A relatively new field, [decision theory](https://plato.stanford.edu/entries/decision-theory/#ChaEUThe) is fairly self-explanatory as the study of how we make decisions. [Perhaps more importantly, it also the study of how we should make decisions](https://personal.lse.ac.uk/bradleyr/pdf/Handbook%20-%20Decision%20theory%20(revised).pdf).

Decision theory analyses what option a rational agent would choose for an optimal outcome. That is, in situations of uncertainty, taking the action that produces the best expected outcome. Expectation naturally implies an element of probability, or risk, to be considered in conjunction with the outcome itself. Consider the umbrella situation above. The most preferred outcome would have been no rain and no umbrella, but that would not have been the expected outcome to occur if I had, indeed, forgone the umbrella. I would much more likely have ended up drenched and regretting not bringing one.

Formally, this is known as [expected utility theory](https://plato.stanford.edu/entries/rationality-normative-utility/). Expected utility is [“the expected value of an action to an agent, calculated by multiplying the value to the agent of each possible outcome of the action by the probability of that outcome occurring and summing those numbers”](https://www.britannica.com/topic/expected-utility). Decision theory states that a rational agent should always try to maximise expected utility – that is, take the choice with the least  overall losses or the most overall gains.

However, here some problems become apparent. What if the value derived from an outcome isn’t quantifiable, or comparable with other outcomes? Expected utility begins to fray at the seams when a complete set of outcomes in perfect order by preference isn’t possible – as it often isn’t. How do you measure happiness? How do you measure dissatisfaction? If I go to the supermarket, will I feel strongly about the choice between kale and cabbage, one way or the other? 

The knowledge of the agents themselves also poses a significant barrier. Suppose I want to plant a papaya tree. I see no reason why I shouldn’t do it: if I plant it and it produces a crop, then I save on grocery bills and get free papayas, meanwhile if it fails I end up in the same situation with a little more expended energy than if I hadn’t planted it at all. I incur minimal, almost no losses.

However, I have failed to consider an outcome. My papaya tree attracts fruit flies, my entire orchard ends up with an infestation, and all my fruit trees produce infested crop for the next few years as I struggle to get things under control. Why didn’t I think of this? I think to myself as I spray chemical warfare against the invading insect army. The answer is simple – I was unaware. This unawareness abstracts expected utility theory once more – the expected utility that we believe we may derive from an action is contingent only on the knowledge we possess of the outcomes and situation, which may not be full and complete. The ‘true’ expected utility might be quite different. 

The final issue is a very human one. Humans do not always act rationally. We take actions with almost no benefit to ourselves for strange, inconsistent reasons, are driven by impulse and emotion, act without thinking and think without acting. The human condition renders one of the underlying precepts of decision theory false – that we are rational agents, capable of acting with consistent rationality in every situation.

It’s for this reason that decision theory is more the theory of how agents should act rather than a model of how they do act. As an interdisciplinary field that straddles philosophy, mathematics and oftentimes economics, it offers interesting insights into the human psyche, and how it fails or does not fail to conform to the logic that we seek to apply to it. How do we make the thousands of micro-decisions a day that life presses into our hands? Perhaps the next time you step out of your house, take a moment to think about why you do or don’t bring your umbrella.
