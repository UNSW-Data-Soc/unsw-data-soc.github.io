---
layout: post
title:  "Did Somebody Say Crypto?"
date:   2021-10-21
tags: 
    - Skills and Guidance
    - Applications of Data Science
author: Julian Garratt
image: /assets/images/blog/21-10-21/crypto-cover.jpg
excerpt_separator: <!--more-->
---

<style>
    img.center {
        display: block;
        margin: 0 auto;
    }
    iframe {
        display: block;
        margin: 0 auto;
    }
</style>

As a wannabe Data Scientist I love analysing marketing data and especially crypto currency market data. But in a world where Bitcoin's price is as chaotic as WallStreetBets, how can we possibly get any sort of advantage over the casual trader who puts their life savings in Bitcoin in an effort to become the next Warren Buffet? So instead, let's look away from technical analysis and towards market sentiment and become the next Jim Simmons.

<!--more-->

# Crypto Sentiment Analysis
What I'm proposing is that if we can tap into the market's sentiment, can we actively detect market events? So it sounds like we're going to need a platform that is as tumultuous as Crypto itself. If you thought of Twitter then we're both on the same page. If Twitter didn't come to mind, then why Twitter instead of WallStreetBets or any news site? To answer both of those queries, consider the size of Twitter and the pure stream of information and news which dwarves any other platform. Well now the next question is, how on Earth do we filter through all of that information? Thankfully, Twitter is highly supportive of developers and provides free API access (after applying and explaining why you need their API).<br>

# Spark Structured Streaming 
Finally we're getting somewhere. Now all we need is an engine to process all of that data as it's coming through. Fortunatly, we can use one of the most powerful analytics engines in the game, that is, <a href="https://spark.apache.org/" target="_blank">Apache Spark</a>. For those unfamiliar with Spark, it provides high level API access for large-scale data analytics including processing Tweets in real time.

<img class="center" src="/assets/images/blog/21-10-21/flowchart.png" alt="Spark Streaming Flowchart">
<center><i>Rough flowchart that shows the architecture of our idea</i></center>
<br>

# Return of VADER
So now that we have the main architecture, how are we going to estimate the sentiment of Tweets efficiently and quickly? This calls for the VADER lexicon which I've written about previously, so if you'd like more details, <a href="https://unswdata.com/blog/2021/04/15/trading-stocks-based-on-sentiment/" target="_blank">see this article</a>. If you're familiar with VADER you'll know that it was designed for analysing "micro-blog" like text which is perfect for Twitter. Note that other technqiues are available which I'll discuss later on.
<br>

# Technical Details
Before jumping to the details, I'll note that if you want to see the actual code, see our <a href="https://github.com/MillenniumForce/DataSoc-Projects" target="_blank">GitHub repo</a> which I'll also mention at the end of the article. <br>

If you're not interested in the technical details and just want to see the results, skip down to the results section below. <br>

Otherwise, I'll briefly run through the three main Python programs. The first creates rules that Twitter uses to filter the stream. Some of the rules include accepting all Tweets that include the words "Crypto", "Crypto Currency" and excludes Tweets that include "Giveaway" or are reTweets. I've also made sure to listen for Tweets posted by notable accounts such as @DocumentingBTC and @APompliano. The latter are much rarer but are more likely to be highly relevant. The Tweets are then shoved through a socket and recieved by Spark to be analysed. It's important to note that this is all in real time, Twitter is effectively listening to all Tweets posted on their platform and any that match my criteria are then shipped over to Spark.<br>

The next step is pretty straight forward, the second program running Spark processes the Tweets (including tokenization, removing stopwords etc.), estimates the sentiment with VADER and then writes the results to a CSV. Finally, the last program combines all of the csv files (since Spark Structured Streaming does not append to csv's which is a whole other story).

# Results
Now, for the actual results, the video below provides a short demo on the programs actually running and processing Tweets in real time (excluding the last program that combines the csv's together).
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/2lQ3aX5egug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<center><i>Left terminal: Spark Analysing the Twitter Stream in real time. Right Terminal: Python program that gets streams from the Twitter API which is then sent to Spark.</i></center>
<br>

I've also cherry picked a few Tweets that caught my interest and some that are just not relevant or simply incorrect which proves that this is still a work in progress.

> "Morgan Stanley CEO Says #Bitcoin Is Not a Fad, #Crypto Is Not Going Away https://t.co/mX8WpJEJ1m  #Crypto #NFTMARKET #bitcoin #btc #cryptonewsdaily #cryptocurrency #blockchains  #etherium #dogecoin #CBDC #SolanaNFTs #cryptocurrencies #CryptoNews #NFTMARKET https://t.co/MYF8iaqrj8"<br><i>Sentiment: Neutral (0.921), Positive (0.079), Negative (0)</i><br>

From a human perspective it seems like VADER incorrectly estimated the sentiment. Clearly, "#Bitcoin Is Not a Fad" seems like overwhelmingly postive market sentiment.

> "CRYPTO NEWS:  #Crypto adoption in sights: Regulators and industry join to fight ransomware https://t.co/eFvBVSc2nI #altcoin #altcoinnews #cryptocoin #cryptocurrency https://t.co/IJPxaBEPVk"<br><i>Sentiment: Neutral (0.629), Positive (0.223), Negative (0.149)</i><br>

Same applies to the Tweet above, although more positive sentiment was assigned.

> "Crypto Momentum Alert FARM/USD on #Binance Increase from first alert: 18.03% Price : $210.182 5 Minute Delay Risk Level : Pro feature $FARM $USD #coinalerts"<br><i>Sentiment: Neutral (0.63), Positive (0.185), Negative (0.185)</i><br>

The Tweet above seems wrong since positive momentum for an increasing security would have very positive connotations. This might be a severe flaw in VADER, since it seems to struggle with analysing financial sentiment.

> "@Soy_Polaco Send me a dm"<br><i>Sentiment: Neutral (1), Positive (0), Negative (0)</i> <br>

This final tweet is clearly unrelated to crypto and has somehow passed through Twitter's filters. In this case, VADER correctly assigns a net neutral sentiment.<br>

# Conclusion
Overall VADER struggles to estimate the sentiment for financially related Tweets. This is mostly expected since VADER is very well suited towards regular Tweets rather than highly specialised contextual financial information. This might call for more novel techniques that are better suited towards highly contextual natural language. One such possible alternative would be to implement a pre-trained Word2Vec model and then apply online K-means (with three clusters for positive, negative, and neutral sentiment). We'd use a pre-trained model since we would not have enough data to train Word2Vec (since we're streaming tweets). Likewise, we can apply streaming K-means which allows us to constantly update the cluster centers as more Tweets come through.<br>

I've left this article very open ended on purpose, for one I haven't even created a trading algorithm to leverage the sentiment from the incoming Tweets. At this point the direction could branch off in many directions. The first of which that comes to mind is that you could develop a trigger based trading system. In other words, if you assume that rare events are normally distributed (warning: they're probably not) you could test whether the given sentiment score for a Tweet is sufficiently rare and then go long or short on the market if the sentiment was positive or negative respectively.<br>

# Do It Yourself 
If this topic excites you and you'd like to learn more, check out my code in our <a href="https://github.com/MillenniumForce/DataSoc-Projects" target="_blank">GitHub repo</a>. I'll briefly note that running the program isn't as straight forward if you're not familiar with Spark. Spark runs on top of the Hadoop Distributed File System (HDFS) which requires some time to setup. Instead I've opted to run both Hadoop and Spark in a docker container. Resultantly, I've included the docker-compose file courtesy of Andreper. If you're still unclear and really want to run this yourself, please feel free to reach out to me on Facebook. Finally, for security issues I've left out my personal Twitter bearer token which is required to gain Twitter API access, you can sign up for Twitter API access <a href="https://developer.twitter.com/en/apply-for-access" target="_blank">here</a>.