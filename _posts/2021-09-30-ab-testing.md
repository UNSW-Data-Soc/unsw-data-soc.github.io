---
layout: post
title:  "A/B Testing: The basics"
date:   2021-09-30
tags: 
    - Data Science
    - Applications of Data Science
author: Amber Dang
image: /assets/images/blog/21-09-30/change.jpg
excerpt_separator: <!--more-->
---

Have you ever wondered how Google, YouTube, Facebook, or Netflix decide to make small changes to their website now and then, especially after a short trial period? What are their motivations and why are they doing these trials? In this article, we will look into how data analytics and statistics have fuelled the decisions surrounding these changes.

<!--more-->

## The motivation

Usually, small changes are made to improve user experience on the website such as changes to the size, font, colour of elements on the website. Sometimes, they are made to achieve what is called a call to action (CTA). CTA is a prompt or a message on the website that encourages the user to take some specified action.

For example, I have a clothing e-commerce app and a CTA could be a command or a phrase such as *“Sign Up”* or *“Buy Now”* and they generally take the form of a button or a hyperlink. Another example would be promotion emails saying *“We think you might like these”* with a link leading to the e-commerce website.

The incentive of the experiment is to test whether the original design of our website or the suggested variation would perform better to achieve our goal and the test is usually referred to as A/B Testing.


![](/assets/images/blog/21-09-30/ab-testing.png)


## Why the name A/B Testing?

Let’s continue with the clothing e-commerce example above. A customer browses the website, adds the pieces they want into the cart and checks out. On the shopping cart page, we currently have a button with the text *“Check Out”* and our competitors’ button saying, *“Send Me These Cuties”*. We think to ourselves, their button seems interesting, it might result in more checkouts than ours. This is our hypothesis and the test we are conducting is a hypothesis test.

The term A/B Testing refers to the two groups involves in the test. Group A or the control group is the current version we have on the website. Group B or the variation group is the version that reflects our hypothesis.

![](/assets/images/blog/21-09-30/control-variant.png)

## How to proceed and pitfalls

Just as any hypothesis test, we need to first state our hypothesis and our two experiment groups.

However, a hypothesis such as *“The variant will perform better or result in more checkouts than the control group”* is not enough. We need to quantify how much better the variant should be. A good hypothesis for AB Testing would be *“The variant group will increase our checkout rate from 30% to 35% (16.6% relative change)”*. 30% here is referred to as the base rate and 16.6% is our minimum detectable effect of the change.

Next, we need to gather enough data to conduct our test. Plugging the number into Evan Miller’s A/B Sample Size calculator would indicate that we need 1,346 samples per variation (or a total of 2,692) to detect an effect of at least 16.6%. 100 customers land on our shopping cart page every day, so it will take around 27 days to complete the test.

These numbers could change depends on how certain you would like to be with the test results.

There are four outcomes to the test and the good ones are
-   Detecting a 16.6% difference when it actually exists.
-   Not detecting such a difference when it does not exist.


The bad ones, as you can predict, are:
-   The difference actually does not exist at all while our test thinks it does (**This is really bad!**)
-   Our test does not detect such a difference when it actually does exist (**Missed opportunity!**)

![](/assets/images/blog/21-09-30/power-alpha.png)

So, to prevent these two undesirable outcomes, we tune what is called significance level (p-value) and statistical power (alpha). Increasing the statistical power and decreasing the significance level would improve your confidence in the test result.


## What’s next

So, that is the basics of AB Testing. In order to properly conduct the experiment, there are other issues that we need to note such as allocating users to the group so that we have a balanced dataset, verifying that the test actually works by conducting an AA test, cleaning and interpreting our results with statistical tools, etc.

## Conclusion

Hypothesis testing is at least 100 years old but has only been rebranded as AB Testing since the 1990s. It has been more eminent than ever with the internet and the availability of big data, hence making it easier for companies to conduct tests and make data-driven decisions to improve business metrics and user experience.

As data analysts, we aim to understand the driving factors behind the test and to be aware of statistics such as to validate the test result and prove its statistical significance.

## References

1. Shin, T (2020) A Simple Guide to A/B Testing for Data Science. Available at:  <https://towardsdatascience.com/a-simple-guide-to-a-b-testing-for-data-science-73d08bdd0076>.

2. Saxena, S (2020) A/B Testing for Data Science using Python – A Must-Read Guide for Data Scientists. Available at: <https://www.analyticsvidhya.com/blog/2020/10/ab-testing-data-science/>

3.	Miller, E Sample Size Calculator. Available at: <https://www.evanmiller.org/ab-testing/sample-size.html>