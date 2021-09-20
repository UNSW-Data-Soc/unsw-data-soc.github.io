---
layout: post
title:  "The Visual Design of the Humble Dashboard"
date:   2021-06-17
tags: 
    - Data Science
    - Skills and Guidance
author: Aileen Wang
image: \assets\images\blog\21-06-17\banner.jpg
excerpt_separator: <!--more-->
---

Anyone who’s ever had to make a Powerpoint has inevitably come up against the wall of a presentation that is nominally informative, but – to put it bluntly – puts the audience to sleep. If we haven’t been the presenter: well, we’ve all been the audience.

<!--more-->

Maintaining interest as well as understanding in increasingly complex topics isn’t just the domain of the teacher or the beleaguered student, however, but also that of the data scientist. 

Much of the time, what the data scientist understands of their data is on a technical level that simply does not compute into any true insight when communicated to those that it should benefit. This works against everyone in two main ways: the data scientist is discouraged by what feels like a lack of import given to their work, while the audience (stakeholders, managers, whoever it might be) come away feeling that data isn’t so useful after all. 

While improvements in overall levels of data literacy across the workforce serve to partially address this problem, the data scientist also doesn’t escape the responsibility of presenting the data in an understandable, organised, and, some would argue most importantly, interesting way. It’s for this reason that dashboard design, being one of the most common data visualisations used, is an important skill any aspiring data scientist should have up their sleeve.

# The Good Dashboard

## What is a dashboard?

First of all, what even is a dashboard? As defined by [Wikipedia](https://en.wikipedia.org/wiki/Dashboard_(business)), it’s ‘a type of graphical user interface which often provides at-a-glance views of key performance indicators (KPIs) relevant to a particular objective or business process’. In layman’s terms, it’s a collection of graphs that tell you everything important about the subject at hand in a glance. 

A simple concept, in theory. But how do you make a dashboard - your run-of-the-mill, average dashboard - _good_?

## Where to start?
The true beginning of the dashboard is in its [purpose](https://www.geckoboard.com/best-practice/dashboard-design/). Before any thought goes to the granular details of the construction of the dashboard itself, the final usage of the dashboard should already be clear. Some [questions](https://help.tableau.com/current/pro/desktop/en-us/dashboards_best_practices.htm) to consider ahead of time are:

* Who is my audience?
* What questions am I trying to answer?
* What do I want my dashboard to say?

Without a clear idea of where to go, it’s easy to get lost on the way. Don’t waste your own time and effort doing work that might ultimately end up redundant.

## Basic Principles of Visual Design, or, ‘make it pretty’

Excepting special circumstances, the dashboard remains and will remain a primarily visual presentation of data (which is why it is classified as a, you guessed it, data visualisation). For this reason, designing a dashboard necessarily involves brushing up on the principles behind good visual design. The key question is: in the [50 milliseconds](https://cxl.com/blog/first-impressions-matter-the-importance-of-great-visual-design/) it takes for a user to form an opinion of your design, how do we make what’s important shine?

### Scale

> “Definition: The principle of scale refers to using relative size to signal importance and rank in a composition.”
>
> -[(Nielson Norman Group)](https://www.nngroup.com/articles/principles-visual-design/) 

This one’s pretty simple. Things that are bigger should be more important, since we [notice them first](https://99designs.com.au/blog/tips/6-principles-of-visual-hierarchy/). For example if I say

# THIS

You’re much more likely to take notice of it. Its size makes it stand out in the page. The sorting by font size of headings, subheadings and body text is another reflection of this principle – things that are more important should be scaled larger so they are emphasised to the user.

### Visual Hierarchy

> “Definition: The principle of visual hierarchy refers to guiding the eye on the page so that it attends to different design elements in the order of their importance.”
>
> -[(Nielson Norman Group)](https://www.nngroup.com/articles/principles-visual-design/)  

What this means is that what’s most important should pop out on the page. When planning a page on a dashboard, there should be a clear path that the design intends for the user’s eye to follow. Otherwise, if everything on the page is signified to be of equal importance, the user, first of all, doesn’t know where to look and has to do a lot more parsing on their own, and second of all, may miss key points due to the lack of emphasis.

Visual hierarchy is achieved by [taking advantage of other design elements](https://www.interaction-design.org/literature/topics/visual-hierarchy#:~:text=Hierarchy%20is%20a%20visual%20design,more%20attention%20than%20muted%20ones.) such as space, colour and scale. Blank space serves to isolate and therefore and object, rather than clutter where information can quickly becoming overwhelming and blur into one. Contrasts between muted and bright colours will bring one out at the expense of the other. Scale, as detailed above, uses size differences to establish a hierarchy of importance. All these can serve to draw the user’s to one element or another. 

It’s also worth noting that the eye naturally follows a [‘Z-shaped’ line](https://99designs.com.au/blog/tips/6-principles-of-visual-hierarchy/) of sight when first scanning across a page without too many textual elements (which a dashboard is unlikely to have). The eye scans across the top of the page from left to right, where important information (navigation bars and the like) can usually be found, the scans down to the opposite corner and reads from left to right across the bottom of the page. To put it more simply, the human eye reads in a left-to-right, top-to-bottom direction. Therefore, elements should also be organised by importance in those directions, with the [top left corner](https://help.tableau.com/current/pro/desktop/en-us/dashboards_best_practices.htm) containing the element highest in the visual hierarchy, and the bottom right corner the element that is lowest.

As an example, let’s have a look at the design for the 2010 Build conference. 

![2010 Build Conference front page](\assets\images\blog\21-06-17\build-design.png)

*Source: [Build](https://2010.buildconf.com/)*

The eye is drawn first to the logo, which is situated in the top left corner and emphasised through scale, being the largest object on the screen, colour – the contrast of white against the grey background as well as the bright yellow serves to make it stand out – as well as space – it is isolated, with other design elements purposefully not crowding it. We are then drawn to the highlighted ‘Register Now’ button, before scanning down and across to the text and image-heavy centre.

A clear visual hierarchy makes the absorption of the most important information on the screen that much easier to follow.

### Balance

> “Definition: The principle of balance refers to a satisfying arrangement or proportion of design elements.”
>
> -[(Nielson Norman Group)](https://www.nngroup.com/articles/principles-visual-design/)  

When looking at the screen, visual elements should be evenly distributed across an imaginary horizontal or vertical axis. This creates a sense of stability, and ‘feels right’. An apt metaphor might be to think of balancing a seesaw. When too much visual ‘weight’ rests on one side, the balance tips and other elements become disregarded, such that whole design loses the sense of being a unified whole.

A balanced visual design can have a [symmetric, asymmetric, radial or mosaic balance](https://www.smashingmagazine.com/2015/06/design-principles-compositional-balance-symmetry-asymmetry/).

A symmetrical balance will render the design more formal, since elements will be perfectly mirrored across the imaginary axis. This elegant formality is suitable in some situations, but becomes boring in others as, overall, a symmetric design is rather predictable. Symmetry creates a strong sense of unity and order, which can bring together many disparate elements into a conclusive whole.

<img src="\assets\images\blog\21-06-17\oreo-design.jpg" alt="2015 'Wonderfilled' campaign Oreo ad design" width="500"/>

*Source: [Canva](https://www.canva.com/learn/symmetry-graphic-design/)*

Meanwhile, an asymmetric balance will have more energy, and will at times appear more natural. A element of larger visual weight on one side, for example, could be balanced by multiple elements of lesser visual weight on the other.

![example of asymmetric design](\assets\images\blog\21-06-17\asymmetric-design.jpg)

*Source: [Pinterest](https://www.pinterest.com.au/pin/782078291518128957/)*

A radial balance is where elements ['radiate from a common center'](https://www.smashingmagazine.com/2015/06/design-principles-compositional-balance-symmetry-asymmetry/). The focal point will invariably be the centre of the page, much like the spokes of a wheel will lead the eye to the centre.

This gives the centre a lot of visual weight, making it a good design when the intention is to heavily emphasise one element over the others without losin balance.

A mosaic design, meanwhile, is ['balanced chaos'](https://www.smashingmagazine.com/2015/06/design-principles-compositional-balance-symmetry-asymmetry/). Elements are scattered with uniform emphasis and seemingly no focal points to guide the eye - a design that is visually 'noisy'. 

While this seems to be in violation of everything we've said before, in fact the lack of distinct focal points creates the mirage that the image is a [unified whole](https://www.shutterstock.com/blog/types-of-balance-in-art). Cramming the page with differet elements causes the eye to lose track of the individual element, especially since visually all these elements are given equal importance. What makes this a good design rather than a mess is that the design's purpose itself is not to emphasise any particular element above the rest, but rather to present all the elements together as a unified, single design.

A good rule of thumb to remember for balance is that visual interest should be [equally distributed](https://platt.edu/blog/6-principles-graphic-design/#:~:text=Balance,visual%20weight%20in%20a%20design.&text=Asymmetrical%20or%20informal%20balance%20occurs,retaining%20a%20feeling%20of%20balance.) about the page. Equal distribution, however, does not necessarily mean mirroring or even distribution.

###  Contrast

> “Definition: The principle of contrast refers to the juxtaposition of visually dissimilar elements in order to convey the fact that these elements are different.”
>
> -[(Nielson Norman Group)](https://www.nngroup.com/articles/principles-visual-design/)  

This one is rather self-explicatory as well. Contrast in shape, size and colour all serve to emphasise distinctness. Elements that are visually similar belong in the same category – a paragraph of body text shouldn’t differ too much from another paragraph, for example. 

However, contrast is used to highlight differences between elements of different functionalities – such as, for example, between the delete button and the save button, which for the first might be coloured red and the second coloured green. Those are two things you don’t want mixing up – and how they look on the page should reflect that! 

Contrast will also serve to help [establish hierarchies](https://99designs.com.au/blog/tips/6-principles-of-visual-hierarchy/) in terms of visual importance. In contrast between elements of muted and highlighted colours, for example, the highlight will, well, 'highlight' the element it corresponds to as more important.

## Conclusion

While there’s a lot more to visual design than what’s been detailed above, in terms of dashboard usage, this should be enough to either get you started or prompt some improvements that could be made to improve the overall usability and accessibility of the dashboard.

Remember: a dashboard is useless if it loses its primary function – communication! [Avoid clutter](https://help.tableau.com/current/pro/desktop/en-us/accessibility_dashboards.htm), or the common mistake of trying to shove too much information into one graph or chart. It’s high time more emphasis was given to the design element of the humble dashboard. Don’t be the data equivalent of that person whose presentations put everyone to sleep!

