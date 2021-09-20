---
layout: post
title: "How people lie to your face – with factual numbers."
date: 2020-08-17
tags: 
    - Statistics
    - Skills and Guidance
author: Victor Tsang
image: https://pics.me.me/statistics-shows-that-teenage-pregnancy-drops-dramatically-after-20-10-29449624.png
excerpt_separator: <!--more-->
---

“Numbers don’t lie...**but people do.**”

As data-literate individuals in a data-drenched world, we need to keep our wits about us and retain our critical thinking when people present us with studies and visualisations that seem to have all the answers. Here’s why, with some examples.

<!--more-->

People hate looking at raw, plain, and boring numbers and that leads them to put them in easily digestible visualisations that grab your attention and stick in your mind. But, like all forms of communication, they emphasise some things and hide other things by design. People have agendas to push, which often leads to them obscuring details, distorting figures, or making invalid inferences to further support their argument. Heck, people do this in daily conversation with white-lies or exaggerated stories to capture their friends’ attentions too!

In benign situations, that could be okay. But in some scenarios – like a global pandemic – this could also be deadly.

## Correlation != Causation

![Geographic Profile Maps which are basically just population maps](https://imgs.xkcd.com/comics/heatmap.png)

[Source: XKCD](https://xkcd.com/1138/)

We all know about this one. It’s what’s taught in basic statistics – but it’s also one that we unconsciously lean on, just by human nature. 

For example, I could say that shoe size is highly correlated with reading ability – the average person might think that to be interesting and infer that a bigger shoe size causes a better reading ability. However, our inner statistician should be incredibly suspicious of this. In fact, the misleadingness of this statement is clear if you consider the entire population of a country.

Why? Clearly, the older you get, the better at reading you get. Likewise, the older you get, the bigger you get and therefore your shoe size gets bigger. In this example, shoe size may be correlated with reading ability – but there is no causal relationship between the two. Actually, the causal factor (age) has been hidden away!

Likewise, the XKCD comic here shows a correlation between Martha Steward Living subscribers and consumers of furry porn, which may imply a causal relationship at first! Of course, they are not causally related – they are simply all linked to the population of America! 

## Misleading Graphs

Graphs are more often than not the best way of communicating information. They’re visual, they’re succinct, and they’re helpful. But they can also be manipulated to push certain agendas. For example:

![bush tax cuts chart](https://flowingdata.com/wp-content/uploads/2012/08/Bush-cuts-620x458.png)

[Source: flowingdata.com](https://flowingdata.com/2012/08/06/fox-news-continues-charting-excellence/)

The underlying data is good and reliable, but the graph has clearly been manipulated to mislead the audience. Can you see it?
By starting the y-axis at 34% instead of 0, the change looks far more dramatic – around 4x greater! However, if you look at the numbers, it is only a 4.6 percentage point increase, or an 11% increase in the tax rate as opposed to the ridiculous difference in size.

The numbers make more sense if we start the y-axis at 0:
![y-axis starting at 0%](https://venngage-wordpress.s3.amazonaws.com/uploads/2017/08/misleading-graphs-4.png)

[Source: venngage.com](https://venngage.com/blog/misleading-graphs/)

In this example, the manipulation was clearly done to sensationalise the data and change the audience’s beliefs. However, these manipulations are not necessarily bad! After all, effectiveness is contextual and in the eye of the beholder. Consider the following graph:

![Side by side comparison of linear and log scale COVID-19 graphs](/assets/images/blog/coronavirus-graph.png)
[Source: The New York Times]( https://www.nytimes.com/2020/03/20/health/coronavirus-data-logarithm-chart.html)

Log transformations are incredibly useful and common in statistics to make relationships more easily understood. Here, it makes it easier to understand changes in the growth rate of coronavirus cases. It’s not clear on the linear scale, but Italy’s cases were actually slowing compared to the US. As a result, it seems perfectly fine to use this graph.

However, a pitfall of the log graph is that absolute comparisons cannot be done as intuitively as a linear scale. As the scale gets larger and larger, the data gets more and more compressed and that makes absolute comparisons far less intuitive.

![Log scales compress large numbers.](/assets/images/blog/coronavirus-graph-dot-points.png)

In summary, graphical manipulations are often a necessity for effective communication – but we must be aware of the intention and the consequences of these manipulations. 
 
I could go on and on about this topic, such as extrapolation, cherry picking, or sampling bias – but I would highly recommend you look into these yourself. For reference, I would recommend these videos and articles:

- [This is How Easy It Is to Lie With Statistics - Zach Star](https://youtu.be/bVG2OQp6jEQ)
- [How coronavirus charts can mislead us - Vox](https://www.youtube.com/watch?v=O-3Mlj3MQ_Q)
- [Lessons on How to Lie with Statistics - Will Koehrsen](https://towardsdatascience.com/lessons-from-how-to-lie-with-statistics-57060c0d2f19)

The point is to encourage critical thinking before consuming data, statistics, and information in general. We must all stay aware and alert, unless we want to be at the beck and call of someone else!
