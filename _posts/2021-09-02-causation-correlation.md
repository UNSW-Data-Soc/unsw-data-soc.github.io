---
layout: post
title:  "Cause or Correlation, That is the Question"
date:   2021-09-02
tags: 
    - Opinion
    - Statistics
    - Data Science
author: Aileen Wang
image: /assets/images/blog/21-09-02.jpg
excerpt_separator: <!--more-->
---

Every statistics course will introduce at some point the big statistics taboo: confusing correlation and causation. With the rise of data as a driving force in our world, the joke has become famous. Correlation does not imply causation. But what does this actually mean?

<!--more-->

Correlation is a statistical measure that describes the size and direction of a relationship between two or more variables, while causation indicates that one event is the result of the occurrence of the other event (as defined by the [ABS]( https://www.abs.gov.au/websitedbs/D3310114.nsf/home/statistical+language+-+correlation+and+causation)). In layman’s terms, correlation describes that a relationship exists, while causation denotes that the relationship is explicitly one of direct cause and effect. 

Confounding these two concepts happens often and easily. If events A and B consistently happen simultaneously, why shouldn’t we assume A causes B?

Well consider:

-	What if B causes A? What if we’ve got the whole relationship the wrong way around?
-	What if hidden variable C is causing both A and B?
-	What if A causes B only under specific circumstances when event D has already occurred?
-	What if A causes E, which in turn causes B?

_(Source: [Amplitude](https://amplitude.com/blog/causation-correlation))_

At risk of creating a love dodecahedron of events and the relationships between them, hopefully this list is enough to see why making the straightforward assumption that A causes B at the first sign of any relationship existing between them is pretty dangerous! Now, is it that causation can never be determined at all? The answer to that is, no, but the conditions under which we determine causation must be far more robust than might appear at a glance.

Consider high school science experiments. Besides the independent and dependent variables, there would exist all the variables that required controlling (to as much success as could be achieved in a high school lab). The same logic that underpins the identification and measures taken to control these, well, controlled variables is what drives experiments run to identify causation. Does B change as A changes when every other variable is kept static? Can we isolate the relationship between A and B from all other influences? Only under these specific circumstances can causation be determined.

While causation can be useful for a variety of reasons, for data scientists, correlation is often enough. A variable does not necessarily need to share a causative relationship with the desired output variable to be a good predictor of it anyway. Why must we try and identify variable C, which causes B, when A, which correlates with B, is far less expensive to monitor? As such, we could say that a data-driven world builds itself on patterns of correlation.

This, however, can be unsettling for humans, who are [literally wired to identify patterns]( https://bigthink.com/endless-innovation/humans-are-the-worlds-best-pattern-recognition-machines-but-for-how-long) and [seek causative relationships]( https://www.frontiersin.org/articles/10.3389/fpsyg.2020.00003/full) in them. It’s why we can identify patterns from a tiny amount of data compared to the amount which machines need to do the same, but it backfires in that sometimes we may identify patterns where there are none, or come to incorrect conclusions about the relationship between different actions and events – the term for this, coined by German neurologist Klaus Conrad, is _[apophenia]( https://www.scienceabc.com/social-science/apophenia-patternicity-pareidolia-gamblers-fallacy-with-examples.html)_. Humans, invariably, seek explanations and reasons for why the world is at it is. 

There is, in the end, a safety in patterns of causation. If I know for certain that what I do will produce exactly the effect I want, then my life becomes a simple matter of fulfilling the right requirements, pressing the right buttons as it were, to produce the effect of success. On the flipside, it also becomes a simple matter to avoid what I don’t want. I can trace linear paths between the events and actions that I take, and the outcomes I achieve. I become, in essence, what I make myself. The sense of self-sufficiency and control from living in such a way would be glorious. It would also be an illusion. It leads to people accrediting themselves for things they have earned by chance, and blaming others for tragedies that have happened to them through equal chance. At its best, it manifests itself as a confidence-booster, at its worst, it becomes victim blaming.

Correlation invites ambiguity, but more importantly, it admits a lack of control or knowledge. Lady Luck becomes a larger player in events than we might like. Definite ends and beginnings become different positions on lines that run in parallel. The clarity of causation’s illusions gives way to the blur of correlation’s ambivalences. So we are left in a world run by more patterns than ever – and less certain for it. 

