---
layout: post
title:  "Protecting Forests with Satellite Imagery and Machine Learning"
date:   2021-05-13
tags: 
    - Data Science
    - Machine Learning, Deep Learning and Neural Networks
    - Application of Data Science
author: Gordon Huang
image: /assets/images/blog/21-05-13-banner.jpg
excerpt_separator: <!--more-->
---

Unregulated deforestation practices are destroying the world's forests at an alarming rate, with devastating effects on ecosystems and the global climate. How can contemporary data science techniques be used to combat unsustainable deforestation on a global level?
<!--more-->

Forests cover [over 30 percent](https://data.worldbank.org/indicator/AG.LND.FRST.ZS) of the Earth's land area, and they have a crucial role in regulating climate and sustaining natural ecosystems. But in the last decade, the world has experienced a net loss of [4.7 million hectares](https://ourworldindata.org/deforestation) of forest per year, the size of Switzerland. Much of this unnecesary loss is due to illegal logging for forest resources (primarily wood), mining, agricultural plantations and land for livestock.

These unregulated deforestation practices are destroying forests much faster than they can regenerate or illegal lumberers be stopped. With a problem that spans all the forests of the world, what techniques and tools can data science lend to the fight against unsustainable deforestation?

## Satellite Imagery and Machine Learning
Satellite image data and machine learning algorithms can be used together to monitor deforestation at a global scale. Due to the non-invasive nature of satellite imagery, the difficult, bureaucratic process of navigating different local jurisdictions can be avoided when trying to detect disturbances in wild vegetation. For example, the online platform [Global Forest Watch](https://www.globalforestwatch.org/) gives anyone on the internet near real-time access to data and tools that monitor how forests are changing around the world.

![ML classification of global tree cover gain and loss.](/assets/images/blog/21-05-13-fig1.png)
_Figure 1: Machine learning classification of regions of net forest loss and gain from satellite images, [Global Land Analysis & Discovery, U. Maryland](https://glad.earthengine.app/view/global-forest-change#dl=0;old=off;bl=off;lon=74.82053814231477;lat=-20.764320242472746;zoom=2;)_

Global Forest Watch uses multispectral image data from several [Landsat satellites](https://www.usgs.gov/core-science-systems/nli/landsat/landsat-satellite-missions?qt-science_support_page_related_con=0#qt-science_support_page_related_con), gathering over 1 million satellite images since 2000. Clear land surface images at 30x30 metre resolution are then classified per pixel using a supervised machine learning model. Each pixel can be classified as tree cover loss (net reduction in forest), tree cover gain (net growth in forest), or tree cover extent (no substantial change in forest), as shown in figure 1.

Higher-resolution Earth-imaging satellites continue to improve the accuracy of these models, especially where less visible selective logging occurs instead of expansive clearfelling.

![Satellite image of selective logging](/assets/images/blog/21-05-13-fig2.png)
_Figure 2: A zoomed image of logging roads and selective logging._

[Planet](https://www.planet.com/), an organisation which operates over 150 Earth-imaging satellites, is capable of imaging the entire land surface of Earth at 3x3 metre per pixel resolution. A small subset of 150,000 images were labelled using crowd-sourced platforms with several labels as seen in figure 3.

![Multi-categorical classification of satellite images of forest](/assets/images/blog/21-05-13-fig3.png)
_Figure 3: Multi-categorical labelling of satellite images of the Amazon basin. Source: [Understanding the planet from space - Kaggle, Planet](https://www.kaggle.com/c/planet-understanding-the-amazon-from-space/data)_

The online data science platform Kaggle then partnered with Planet to host a public competition for the online data science community to train machine learning algorithms using this dataset. The best models achieved up to 93.317% accuracy on images of selective logging in the Amazon basin. As shown in figures 2 and 4, selective logging can be difficult and time-consuming to identify manual, but given enough quality labeled data, supervised machine learning algorithms are able to take advantage of satellite imagery at scale.

![Satellite images of logging roads](/assets/images/blog/21-05-13-fig4.png)
_Figure 4: The brown lines on the right of this image are logging roads. Note the faint brown dots in the area around the roads._

## Impact
When machine learning algorithms are able to take over the laborious process of identifying selective logging in the vast and obscure expanse of forests, authorities and conservationists are able to crackdown more quickly on illegal deforestation.

For example, Global Forest Watch contributed key data and analysis to reporting on the [2015 Southeast Asian Haze crisis](https://en.wikipedia.org/wiki/2015_Southeast_Asian_haze), identifying specific agricultural companies which used excessive slash-and-burn as an inexpensive means to clear their land of unwanted vegetation, and to avoid spending money on reforestation.

Having transparent, public monitoring of forests greatly reduces the cases of unauthorised logging, and also repels corporations from using cheap, unsustainable deforestation practices for lumbering, mining and agriculture. Consumers also have greater assurance that suppliers are adhering to their sustainability commitments.

## Conclusion
Tree cover and deforestation is just one of many areas of environmental conservation where machine learning can be combined with quality datasets to produce highly valuable information. These insights can then inform policymakers, companies and activists on the best course of action to conserving the environment. I hope you found this article informative of how data science techniques can help monitor and protect the environment at a global scale.