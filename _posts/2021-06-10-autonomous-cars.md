---
layout: post
title:  "Autonomous cars: Magic or simply Mathematics?"
date:   2021-06-10
tags: 
    - Machine Learning, Deep Learning and Neural Networks
    - Applications of Data Science
author: Amber Dang
image: \assets\images\blog\21-06-10\banner.jpg
excerpt_separator: <!--more-->
---

With the rise of Tesla, autonomous cars have been the talk of the car industry for their electric battery advantage and self-driving abilities. Have we ever wondered how exactly a car drives itself?<!--more--> 

In Sydney, we have the Metro train that runs on a railway, but road traffic and rules can be very complex sometimes. How a car can tell which lane it could drive, when to stop, and what incoming traffic or pedestrians look like are frequently asked by many people switching from fossil fuel-run cars to battery-operated ones. 

## ALVINN – the forerunner of self – driving cars

In 1990,  Dean Pomerleau and Oliver Cameron led a project called ALVINN, which stands for Autonomous Land Vehicle in a Neural Network. It was a driving system that used only one single hidden layer to determine the steering angle. A front camera captured 30 x 32 units in two – dimension as the inputs. Each input node was then fully connected (meaning every input node is connected to every hidden layer node) to the next layer. The model's output were steering angles that varied from sharp left to sharp right.

![Illustration of the neural network used in ALVINN project.](\assets\images\blog\21-06-10\ALVINN.png)

*Illustration of the neural network used in ALVINN project. Source: [Evolution of an Artificial Neural Network Based Autonomous Land Vehicle Controller](https://www.ri.cmu.edu/pub_files/pub3/baluja_shumeet_1996_1/baluja_shumeet_1996_1.pdf)*

![Hinton Diagram of the weights between input layer to hidden layer.](\assets\images\blog\21-06-10\Hinton.png)

*Hinton Diagram of the weights between input layer to hidden layer. Source: [Evolution of an Artificial Neural Network Based Autonomous Land Vehicle Controller](https://www.ri.cmu.edu/pub_files/pub3/baluja_shumeet_1996_1/baluja_shumeet_1996_1.pdf)*

Hinton Diagram illustrates the weights from one layer to another. The colour of the dots represents the sign of the weights, white for positive and black for negative and the size of each dots represents the magnitude of each value.

## How do self-driving cars take in surrounding information nowadays?

Autonomous cars these days rely on various inputs from sensors and cameras placed in different parts of the car.

![Sensors diagram in an autonomous car.](\assets\images\blog\21-06-10\Fusion.jpg)

*Sensors diagram in an autonomous car.*

Radar sensors track the position of nearby vehicles which is especially helpful at night, or whenever visibility is poor. 

Video cameras detect traffic lights, read road signs, track other vehicles, and look for pedestrians.

Light detection and ranging sensors bounce pulses of light off the car’s surroundings to measure distances, detect road edges, and identify lane markings. 

Ultrasonic sensors in the wheels detect curbs and other vehicles when parking.

## How does it process the information obtained?

In the ALVINN project, the vehicle was first driven for some time by a human, and a database collected of sensor inputs and the corresponding actions chosen by the human driver. The network was trained on this database and was then invited to take over the controls.

However, this posed a problem where the model was poorly trained in situations that are never accounted for while the car is being driven by a human. For example, when driven by a human, the car is hardly ever presented with images where they have driven off the road onto the pedestrian walkway - for good reason too! But in that situation, without having any data to know how to correct the error, the car would veer further off the road and not be able to get back on track. 

To overcome the problem, Data Augmentation was used to create additional training data. Each original image collected while the car was driven by a human then got shifted in 14 different ways to create 14 additional training items to compensate for the shift and rotation.

![Data Augmentation used in ALVINN project.](\assets\images\blog\21-06-10\data-augmentation.png)

*Data Augmentation used in ALVINN project. Source: [Evolution of an Artificial Neural Network Based Autonomous Land Vehicle Controller](https://www.ri.cmu.edu/pub_files/pub3/baluja_shumeet_1996_1/baluja_shumeet_1996_1.pdf)*

Nowadays, self-driving cars use a diverse number of deep neural network called Convolutional Neural Network to process the input with overlapping capabilities to minimise the chances of failure. For example, one neural network is trained on discerning road signs while another on recognising incoming pedestrians or traffic.

## Example of autonomous driving

In 2016, NVIDIA Automotive Team tested the ability of autonomous car driving by deep learning. They used multiple independent neural networks, each trained on recognising different surrounding objects. For example, LaneNet deep neural network detects lane lines while OpenRoadNet is trained on recognising all the drivable space regardless of lane lines.

![Combined output of autonomous driving neural networks](\assets\images\blog\21-06-10\neural-output.png)

*Combined output of autonomous driving neural networks. Source: [NVIDA](https://blogs.nvidia.com/blog/2019/05/07/self-driving-cars-make-decisions/)*

Outputs from several neural networks were then combined in an ensemble technique as its inputs on which an optimal predictive model was built.

## Pros and cons, comparison, and conclusion

While self-driven cars give an impression of us drivers taking a break from manoeuvring the vehicle, they are not yet capable of reacting to all circumstances without human intervention. If an accident occurs since the car is not able to direct itself in sudden situations, where will the accident liability lie? Is it the driver who is to blame or is it the software?

Within the current scope of legislation and traffic rules, the driver is still required to sit behind the steering wheel and intervene whenever needed. However, these are bound to be changed since the capabilities of a self-driven car are advancing exponentially at current, and the future of a fully autonomous car capable of resolving abrupt issues is close at hand.

## References

Baluja, S. (1996). 'Evolution of an Artificial Neural Network Based Autonomous Land Vehicle Controller', _IEEE Transactions on Systems, Man and Cybernetics_, 26(3), 450-463. <https://www.ri.cmu.edu/pub_files/pub3/baluja_shumeet_1996_1/baluja_shumeet_1996_1.pdf>.

Mindy Support (2020, February 12). _How Machine Learning in Automotive Makes Self-Driving Cars a Reality_. <https://mindy-support.com/news-post/how-machine-learning-in-automotive-makes-self-driving-cars-a-reality/>

Burke, K. (2019, May 7). How Do Self-Driving Cars Make Decisions?. _NVDIA_. <https://blogs.nvidia.com/blog/2019/05/07/self-driving-cars-make-decisions/>

NVDIA. (2016, May 12). NVDIA Autonomous Car [Video]. YouTube. <https://www.youtube.com/watch?v=qhUvQiKec2U&t=35s>


