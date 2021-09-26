---
layout: post
title:  "Trading Stocks Based on Sentiment"
date:   2021-04-15
tags: 
    - Machine Learning, Deep Learning and Neural Networks
    - Skills and Guidance
    - Application of Data Science
author: Julian Garratt
image: /assets/images/blog/21-04-15-banner.jpg
excerpt_separator: <!--more-->
---

Quantitative Analysis is an ever growing field in finance that draws on Data Science skills to create trading strategies. In fact, the field is often so difficult that institutions often call for Math PhDs to develop their strategies.

But what if we could subvert the intracies of developing complex models and instead trade stocks on the sentiment of the crowd. <!--more-->
Rather than being labelled as a heretic among fincancial advocates let's first explore why we might choose to use this strategy (please let me be clear that nothing written in this blog should be taken as financial advice, this is purely in the name of science).

In [last weeks post](https://unswdata.com/blog/2021/04/08/data-bias-and-mitigation/), Kai pointed out that biases are fundamental to human behaviour. So, it's no surprise then that in financial markets investors are just as biased and predisposed to physchological influences. Accordingly, the field of behavioral finance proposes that physchologic influences such as a herd instinct or confirmation bias affect the financial behaviour of investors <sup>1</sup>. Effectively, the idea is that we might be able to leverage investors natural biases to make investment decisions.

## The Strategy

Along with severe questions about my abilities as a financial expert, you may also be curious to see how this would actually play out in financial markets. Luckily, I've devised a strategy to utilise the theoretical framework we've just explored.

The strategy I've created involves scraping the ABC for news about the ASX, then trading based on whether or not there is positive or negative sentiment about a given stock.

Thankfully, there already exists a python api to scrape the news called the "newsapi" library. However, devising a way to capture positive and negative sentiment is a far more arduous task that involves a slight amount of natural language processing ([check out this article for more NLP](https://unswdata.com/blog/2020/09/09/natural-language-processing/)).

### Sentiment Intensity Analysis with VADER

VADER (not Darth Vader but "Valence Aware Dictionary for sEntiment Reasoning") is a simple rule based model that contains a list of words with their associated sentiment polarity (positive/negative) and sentiment intensity on a scale from -4 to +4 <sup>2</sup>.

The VADER Lexicon is considered Gold-Standard meaning that it has been validated by other people as well as experts. So why use a dictionary instead of (supposedly) something far more sophisticated like Naive Bayes? Effectively, the benefit of using a rule-based model similar to VADER is that it requires no training data and doesn't suffer severely from a speed-performance tradeoff. Likewise, on a sample of 4000 tweets, the sentiment scores from the VADER lexicon compared to the mean of 20 human judges resulted in a 0.88 correlation (best score out of 11 other highly regarded sentiment analysis tools) whilst Naive Bayes only scored 0.71.

For example, let's take a look at some news snippets.
> Technology and financial stocks were also a drag, including Afterpay (-2.2pc), Bendigo and Adelaide Bank (-1.4pc), AMP (-1.4pc), ANZ (-1.3pc) and Westpac (-0.9pc).
> [Source: ABC](https://www.abc.net.au/news/2021-03-23/asx-slip-wall-street-tech-stocks-rebound/13268772)

When passed through VADER, it assigns the above statement a value of -0.2263 (negative sentiment)

> Export-reliant healthcare stocks were among the best performers, like Sonic Healthcare (+3.5pc), Clinuvel Pharmaceuticals (+2.5pc), Resmed (+3.3pc) and Healius (+1.7pc).
> [Source: ABC](https://www.abc.net.au/news/2021-03-23/asx-slip-wall-street-tech-stocks-rebound/13268772)

On the contrary, when we pass the above statement through VADER it returns a value of 0.7717 (positive sentiment). Consequentially, we can use this information in our strategy to buy shares in Sonic Healthcare, Clinuvel Pharmaceuticals, Resmed and Healius.

Thankfully, VADER is freely available and can be accessed via the python natural language processing toolkit "nltk".

### Backtesting

Even if we can perfectly determine the sentiment scores for news articles it will all be pointless if we can't test our strategy. Thankfully, we can call on the Yahoo Finance API to help us out. In Python there exists a plethora of APIs to connect to Yahoo Finance so we will be using my personal favourite Yahoo Finance library "yahoo_fin".

In essence, backtesting simulates you strategy in a real market environment. In our case, once we capture the sentiment about a particular company, for those with positive sentiment we will buy a certain amount of shares then watch their value increase (or decrease) over a certain period of time.

## Results

For testing purposes, I scraped ABC news articles for ASX related news from the 20th to the 22nd of March, then ran the backtest from the 23rd to the 28th of March with an initial $100,000 of capital (as if we might be trading based off of the impulse of positive sentiment around a stock). Sonic Healthcare and Healius Limited were some of the Companies with the highest positive sentiment (0.7). As we can see below the results show a profit of $613.52.

![Potfolio Value from 23/03/2021 to 28/03/2021](/assets/images/blog/21-04-15-plot1.png)

Yet, the trouble of this type of backtesting is that it's difficult to decide when to stop. For example, let's see what happens when we let the backtest run for a few more days...
![Potfolio Value from 23/03/2021 to 30/03/2021](/assets/images/blog/21-04-15-plot2.png)

Clearly, in this case we would have lost money (exactly $2197.85).

## Conclusion

Implementing a strategy based off of sentiment alone has its faults, for one, it's difficult to differentiate between profits from random volatility in the market or if it's truly based off market sentiment. Indeed, the goal of this post was not to dive into the theory but expose a different way to think about financial markets (and play around with NLP).

Also, I have to comment on the fact that VADER was designed for micro-blog like text (specifically tweets and social media style formats), hence, it's not entirely optimised for financial language. I encourage everyone to read the paper on VADER (found in the references sections) to discover how they designed their rule-based model.

Finally, I highly recommend downloading the code (link to the repo at the bottom of the page) and playing around with it yourself. Please contact with me if you have any questions (or any suggestions on how to improve the code).

## References

Link to the GitHub Repo to download the code: <https://github.com/MillenniumForce/DataSoc-Projects>

1. Hayes, A. (2021) What Is Behavioral Finance?: Investopedia. Available at: <https://www.investopedia.com/terms/b/behavioralfinance.asp>.

2. Hutto, C. and Gilbert, E. (2014) 'VADER: A Parsimonious Rule-Based Model for Sentiment Analysis of Social Media Text', Proceedings of the International AAAI Conference on Web and Social Media, 8(1).
