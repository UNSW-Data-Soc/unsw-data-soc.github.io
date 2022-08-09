---
layout: post
title:  "Movie Review: AlphaGo documentary"
date:  2022-04-05
tags: 
    - Opinion
    - Machine Learning, Deep Learning and Neural Networks
author: Ayra Islam
image: /assets/images/blog/2022-04-06-banner.png
excerpt_separator: <!--more-->
---

Artificial intelligence (AI) often gets a bad rap in popular culture. In Hollywood films such as The Terminator and the Matrix, we see AI systems going rogue and taking over human, but in reality, the future of AI is less obtuse. Greg Kohs’ 2017 documentary, ***AlphaGo***, offers a fantastic introduction into the world of AI.

<!--more-->

 The film is about how a Google-owned, artificial intelligence company, DeepMind, developed AlphaGo, a computer program which mastered the game of Go and played a five- game match against top player Lee Sedol. What is Go? Who is Lee Sedol? Let me explain.

# Context

The AI community was puzzled by this question for a very long time:

**Can we build a machine that could play and win the board game Go?**

For many decades, experts thought it would be impossible to build a supercomputer that could defeat world class chess players. This proved possible, when in 1997, IBM’s supercomputer, Deep Blue defeated world chess champion, Garry Kasparov. 

The AI community soon turned to a harder game: **Go**. Go was invented in China almost 3000 years ago, making it the oldest, existing board game in the world. Go is a complex game, requiring creativity, intuition and strategic thinking. However, the basic rules of the game are quite simple.

![Game of Go](/assets/images/blog/2022-04-06-fig1.png)

The playing pieces are called **stones**. One player takes the white stones, and another player takes the black stones. Players take turn placing stones on intersecting lines on a board and the stones are not to be moved unless surrounded completely by the opponent’s stones. The game ends until neither player wishes to make another move. The winner is determined by counting each player’s surrounding territory and the number of captured stones. 

Okay, then what makes Go so complex? Demis Hassabis, co-founder of DeepMind, explains why: “Go is incredibly challenging for computers to tackle because compared to say chess, the number of possible moves in a position is much larger. In chess, it is 20. In Go, it is 200, and the number of possible configurations of the board is **more than the number of atoms in the universe**. Even if you took all the computers in the world and ran them for a million years, **that wouldn’t be enough computing power** to calculate all the possible variations”

# AlphaGo

In 2014, Hassabis and his team at DeepMind came up with a solution: ***AlphaGo***.
AlphaGo is a computer program, which combines an advanced search tree with deep neural networks. These networks process a description of the Go board through different network layers, containing millions of neuron-like connections. AlphaGo has three different components:

1. The **“policy” network** selects the next move to play. Initially, it created a database of all possible moves by scanning 100,000 games played by strong amateurs. Then, through **reinforcement learning**, AlphaGo became better and better by playing thousands of different versions of itself. **Reinforcement learning** is a machine learning training method based on rewarding desirable actions and penalising undesirable actions. Much like a human, reinforcement learning based machines learn through trial and error. When an action leads to a good outcome, the machine is rewarded and therefore, more likely to take the action in the near future.

2. The **“value” network** evaluates the probability of winning from a particular position on a board.

3. The **tree search** looks through different variations of the game and predicts what could happen in the future. 

# The documentary

In 2015, AlphaGo defeated European Go champion Fan Hui, five to zero. This was the first time AlphaGo had defeated a professional Go player. DeepMind decided to take a step further by competing against one of the top Go players in the world, Lee Sedol. Lee Sedol is a 9 dan professional, which is the highest rank any player can achieve in Go. Sedol became a professional Go player at the age of 12 and had won 18 international titles up until the match. He is essentially the Roger Federer of Go. 

![Demis Hassabis and Lee Sedol](/assets/images/blog/2022-04-06-fig2.png)

*Demis Hassabis, co-founder of DeepMind with legendary Go champion, Lee Sedol.*

Director Greg Kohs’ experience with NFL films definitely pays off in this film. The match is suspenseful and adrenaline-inducing, even for audiences who have very limited knowledge about Go. The rift between machine and human is marked, unsurprisingly, by struggle and sadness. We see close up shots of Sedol’s facial expressions; he is frustrated, upset and his pride is hurt. Go was a part of his life, now he is not so sure. 

![Scene from AlphaGo](/assets/images/blog/2022-04-06-fig3.png)

*Credits: Wired*

The game play is interspersed with commentary from Korean and English presenters, top professional Go players and the DeepMind team. Commentary can be a bit confusing at times, especially for viewers with limited knowledge about Go. What constitutes a “good?” move?  How does Lee make a mistake? What is ‘komi’? What is a ‘neural network’? Understandably, the film would be unbearably long, if all of these questions were answered, but it would have been the better if some of these technicalities were explained, especially to appeal to viewers eager to learn more about Go and AI. 

> I thought AlphaGo was based on probability calculation, and that it was merely a machine. But when I saw this move, I changed my mind. Surely, AlphaGo is creative. This move was really creative and beautiful. – Lee Sedol

What elevates the documentary to the next level is the lessons we can learn from it. We tend to assume creativity is the Achilles heel of AI, but AlphaGo tells us otherwise. We also tend to focus on the negative repercussions of AI. We see Lee Sedol improve as the game progresses, which leaves us to question: **can AI help us to evolve and improve as a species? What if through AI, we can learn more about ourselves and the universe?**

> Maybe [AlphaGo] can show humans something we’ve never discovered. Maybe it’s beautiful. – Fan Hui.

# Verdict
To conclude, I highly recommend this film to anyone who is interested in AI or the Go game. However, if you are the type who likes to get into the nitty gritty details, this film might not be for you, and for this reason, I rate this film **4.5 out of 5** stars.

# Recommendations

Has this film got you hooked about AI and data science? Watch these films!

1. Moneyball (4.7 out of 5 stars)
2. A Beautiful Mind (4.5 out of 5 stars)
3. The Imitation Game (4 out of 5 stars)
4. Ex Machina (3.5 out of 5 stars)
5. 2001: A Space Odyssey (4.2 out of 5 stars)
