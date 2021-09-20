---
layout: post
title: Modelling Disease Interactions with Networks 
date: 2021-06-03
tags:
    - Data Science
    - Skills and Guidance
author: Julian Garratt
image: /assets/images/blog/21-06-03/21-06-03-cover-pic.jpeg
excerpt_separator: <!--more-->
---


As Covid-19 continues to remain in the zeitgeist (hello to everyone reading this in a post-covid world), the rising number of charts depicting infections and deaths over time continues to flood the media.

Yet, I find that charts and single statistics don't bring to justice the magnitude and scale of disease transmission. More specifically, how can we better visualise the spread and scale of diseases?
<!--more-->

So, to solve this problem what if we could directly see the connections that each citizen has in a community along with whether they were infected with the disease? This calls for graphs! And no, I don't mean those square boxes with an *x* and a *y-axis*...

<p align= "center">
<img src="/assets/images/blog/21-06-03/fig1.jpeg" width="500">
</p>
<div align="center">Not this type of graph (Source: <a href="https://www.edrawmax.com/line-graph">edrawmax</a>)</div>
<br>
I'm referring to networks, more specifically a network with citizens for vertices and connections as edges, something like what you see below...
<p align= "center">
<img src="/assets/images/blog/21-06-03/fig2.png" width="500">
</p>
<div align="center">I mean this type of graph (Source: <a href="https://mathinsight.org/definition/network">mathinsight</a>)</div>
<br>

## The Network
<!-- DON"T CHANGE ANYTHING BELOW-->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.css" type="text/css">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis-network.min.js"> </script>
<center>
<h1></h1>
</center>

<!-- <link rel="stylesheet" href="../node_modules/vis/dist/vis.min.css" type="text/css" />
<script type="text/javascript" src="../node_modules/vis/dist/vis.js"> </script>-->

<style type="text/css">

        #mynetwork {
            margin-left: auto;
            margin-right: auto;
            width: 600px;
            height: 600px;
            background-color: #FFFFFF;
            border: 1px solid lightgray;
            position: relative;
            float: center;
        }

        

        

        
</style>




<div id="mynetwork"></div>


<script type="text/javascript">

    // initialize global variables.
    var edges;
    var nodes;
    var network; 
    var container;
    var options, data;

    
    // This method is responsible for drawing the graph, returns the drawn network
    function drawGraph() {
        var container = document.getElementById('mynetwork');
        
        

        // parsing and collecting nodes and edges from the python
        nodes = new vis.DataSet([{"color": "red", "font": {"color": "black"}, "id": 0, "label": 0, "shape": "dot", "title": "No. Connections: 0", "value": 3}, {"color": "red", "font": {"color": "black"}, "id": 1, "label": 1, "shape": "dot", "title": "No. Connections: 0", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 2, "label": 2, "shape": "dot", "title": "No. Connections: 0", "value": 3}, {"color": "red", "font": {"color": "black"}, "id": 3, "label": 3, "shape": "dot", "title": "No. Connections: 0", "value": 3}, {"color": "red", "font": {"color": "black"}, "id": 4, "label": 4, "shape": "dot", "title": "No. Connections: 0", "value": 4}, {"color": "green", "font": {"color": "black"}, "id": 5, "label": 5, "shape": "dot", "title": "No. Connections: 21", "value": 5}, {"color": "green", "font": {"color": "black"}, "id": 6, "label": 6, "shape": "dot", "title": "No. Connections: 21", "value": 6}, {"color": "red", "font": {"color": "black"}, "id": 7, "label": 7, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "red", "font": {"color": "black"}, "id": 8, "label": 8, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 9, "label": 9, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 10, "label": 10, "shape": "dot", "title": "No. Connections: 0", "value": 5}, {"color": "green", "font": {"color": "black"}, "id": 11, "label": 11, "shape": "dot", "title": "No. Connections: 21", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 12, "label": 12, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 13, "label": 13, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 14, "label": 14, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "red", "font": {"color": "black"}, "id": 15, "label": 15, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 16, "label": 16, "shape": "dot", "title": "No. Connections: 0", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 17, "label": 17, "shape": "dot", "title": "No. Connections: 0", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 18, "label": 18, "shape": "dot", "title": "No. Connections: 0", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 19, "label": 19, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 20, "label": 20, "shape": "dot", "title": "No. Connections: 0", "value": 4}, {"color": "red", "font": {"color": "black"}, "id": 21, "label": 21, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 22, "label": 22, "shape": "dot", "title": "No. Connections: 0", "value": 4}, {"color": "red", "font": {"color": "black"}, "id": 23, "label": 23, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "green", "font": {"color": "black"}, "id": 24, "label": 24, "shape": "dot", "title": "No. Connections: 21", "value": 5}, {"color": "green", "font": {"color": "black"}, "id": 25, "label": 25, "shape": "dot", "title": "No. Connections: 21", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 26, "label": 26, "shape": "dot", "title": "No. Connections: 0", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 27, "label": 27, "shape": "dot", "title": "No. Connections: 0", "value": 4}, {"color": "red", "font": {"color": "black"}, "id": 28, "label": 28, "shape": "dot", "title": "No. Connections: 0", "value": 3}, {"color": "red", "font": {"color": "black"}, "id": 29, "label": 29, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "green", "font": {"color": "black"}, "id": 30, "label": 30, "shape": "dot", "title": "No. Connections: 21", "value": 6}, {"color": "red", "font": {"color": "black"}, "id": 31, "label": 31, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "green", "font": {"color": "black"}, "id": 32, "label": 32, "shape": "dot", "title": "No. Connections: 21", "value": 7}, {"color": "red", "font": {"color": "black"}, "id": 33, "label": 33, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "red", "font": {"color": "black"}, "id": 34, "label": 34, "shape": "dot", "title": "No. Connections: 0", "value": 4}, {"color": "green", "font": {"color": "black"}, "id": 35, "label": 35, "shape": "dot", "title": "No. Connections: 21", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 36, "label": 36, "shape": "dot", "title": "No. Connections: 0", "value": 3}, {"color": "red", "font": {"color": "black"}, "id": 37, "label": 37, "shape": "dot", "title": "No. Connections: 0", "value": 3}, {"color": "red", "font": {"color": "black"}, "id": 38, "label": 38, "shape": "dot", "title": "No. Connections: 0", "value": 4}, {"color": "red", "font": {"color": "black"}, "id": 39, "label": 39, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 40, "label": 40, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 41, "label": 41, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "red", "font": {"color": "black"}, "id": 42, "label": 42, "shape": "dot", "title": "No. Connections: 0", "value": 4}, {"color": "red", "font": {"color": "black"}, "id": 43, "label": 43, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "red", "font": {"color": "black"}, "id": 44, "label": 44, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "green", "font": {"color": "black"}, "id": 45, "label": 45, "shape": "dot", "title": "No. Connections: 21", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 46, "label": 46, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "red", "font": {"color": "black"}, "id": 47, "label": 47, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "red", "font": {"color": "black"}, "id": 48, "label": 48, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 49, "label": 49, "shape": "dot", "title": "No. Connections: 0", "value": 4}, {"color": "red", "font": {"color": "black"}, "id": 50, "label": 50, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 51, "label": 51, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "green", "font": {"color": "black"}, "id": 52, "label": 52, "shape": "dot", "title": "No. Connections: 21", "value": 7}, {"color": "red", "font": {"color": "black"}, "id": 53, "label": 53, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 54, "label": 54, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "red", "font": {"color": "black"}, "id": 55, "label": 55, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "green", "font": {"color": "black"}, "id": 56, "label": 56, "shape": "dot", "title": "No. Connections: 21", "value": 6}, {"color": "red", "font": {"color": "black"}, "id": 57, "label": 57, "shape": "dot", "title": "No. Connections: 0", "value": 4}, {"color": "red", "font": {"color": "black"}, "id": 58, "label": 58, "shape": "dot", "title": "No. Connections: 0", "value": 3}, {"color": "green", "font": {"color": "black"}, "id": 59, "label": 59, "shape": "dot", "title": "No. Connections: 21", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 60, "label": 60, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "red", "font": {"color": "black"}, "id": 61, "label": 61, "shape": "dot", "title": "No. Connections: 0", "value": 4}, {"color": "red", "font": {"color": "black"}, "id": 62, "label": 62, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 63, "label": 63, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 64, "label": 64, "shape": "dot", "title": "No. Connections: 0", "value": 6}, {"color": "red", "font": {"color": "black"}, "id": 65, "label": 65, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "red", "font": {"color": "black"}, "id": 66, "label": 66, "shape": "dot", "title": "No. Connections: 0", "value": 4}, {"color": "red", "font": {"color": "black"}, "id": 67, "label": 67, "shape": "dot", "title": "No. Connections: 0", "value": 3}, {"color": "red", "font": {"color": "black"}, "id": 68, "label": 68, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "red", "font": {"color": "black"}, "id": 69, "label": 69, "shape": "dot", "title": "No. Connections: 0", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 70, "label": 70, "shape": "dot", "title": "No. Connections: 0", "value": 5}, {"color": "green", "font": {"color": "black"}, "id": 71, "label": 71, "shape": "dot", "title": "No. Connections: 21", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 72, "label": 72, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "red", "font": {"color": "black"}, "id": 73, "label": 73, "shape": "dot", "title": "No. Connections: 0", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 74, "label": 74, "shape": "dot", "title": "No. Connections: 0", "value": 3}, {"color": "red", "font": {"color": "black"}, "id": 75, "label": 75, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "red", "font": {"color": "black"}, "id": 76, "label": 76, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 77, "label": 77, "shape": "dot", "title": "No. Connections: 0", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 78, "label": 78, "shape": "dot", "title": "No. Connections: 0", "value": 3}, {"color": "green", "font": {"color": "black"}, "id": 79, "label": 79, "shape": "dot", "title": "No. Connections: 21", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 80, "label": 80, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 81, "label": 81, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "green", "font": {"color": "black"}, "id": 82, "label": 82, "shape": "dot", "title": "No. Connections: 21", "value": 7}, {"color": "red", "font": {"color": "black"}, "id": 83, "label": 83, "shape": "dot", "title": "No. Connections: 0", "value": 4}, {"color": "green", "font": {"color": "black"}, "id": 84, "label": 84, "shape": "dot", "title": "No. Connections: 21", "value": 7}, {"color": "red", "font": {"color": "black"}, "id": 85, "label": 85, "shape": "dot", "title": "No. Connections: 0", "value": 5}, {"color": "green", "font": {"color": "black"}, "id": 86, "label": 86, "shape": "dot", "title": "No. Connections: 21", "value": 6}, {"color": "red", "font": {"color": "black"}, "id": 87, "label": 87, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "red", "font": {"color": "black"}, "id": 88, "label": 88, "shape": "dot", "title": "No. Connections: 0", "value": 2}, {"color": "green", "font": {"color": "black"}, "id": 89, "label": 89, "shape": "dot", "title": "No. Connections: 21", "value": 6}, {"color": "green", "font": {"color": "black"}, "id": 90, "label": 90, "shape": "dot", "title": "No. Connections: 21", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 91, "label": 91, "shape": "dot", "title": "No. Connections: 0", "value": 4}, {"color": "red", "font": {"color": "black"}, "id": 92, "label": 92, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 93, "label": 93, "shape": "dot", "title": "No. Connections: 0", "value": 1}, {"color": "red", "font": {"color": "black"}, "id": 94, "label": 94, "shape": "dot", "title": "No. Connections: 0", "value": 3}, {"color": "green", "font": {"color": "black"}, "id": 95, "label": 95, "shape": "dot", "title": "No. Connections: 21", "value": 6}, {"color": "green", "font": {"color": "black"}, "id": 96, "label": 96, "shape": "dot", "title": "No. Connections: 21", "value": 5}, {"color": "red", "font": {"color": "black"}, "id": 97, "label": 97, "shape": "dot", "title": "No. Connections: 0", "value": 4}, {"color": "green", "font": {"color": "black"}, "id": 98, "label": 98, "shape": "dot", "title": "No. Connections: 21", "value": 6}, {"color": "red", "font": {"color": "black"}, "id": 99, "label": 99, "shape": "dot", "title": "No. Connections: 0", "value": 5}]);
        edges = new vis.DataSet([{"from": 5, "to": 6}, {"from": 5, "to": 11}, {"from": 5, "to": 24}, {"from": 5, "to": 25}, {"from": 5, "to": 30}, {"from": 5, "to": 32}, {"from": 5, "to": 35}, {"from": 5, "to": 45}, {"from": 5, "to": 52}, {"from": 5, "to": 56}, {"from": 5, "to": 59}, {"from": 5, "to": 71}, {"from": 5, "to": 79}, {"from": 5, "to": 82}, {"from": 5, "to": 84}, {"from": 5, "to": 86}, {"from": 5, "to": 89}, {"from": 5, "to": 90}, {"from": 5, "to": 95}, {"from": 5, "to": 96}, {"from": 5, "to": 98}, {"from": 6, "to": 11}, {"from": 6, "to": 24}, {"from": 6, "to": 25}, {"from": 6, "to": 30}, {"from": 6, "to": 32}, {"from": 6, "to": 35}, {"from": 6, "to": 45}, {"from": 6, "to": 52}, {"from": 6, "to": 56}, {"from": 6, "to": 59}, {"from": 6, "to": 71}, {"from": 6, "to": 79}, {"from": 6, "to": 82}, {"from": 6, "to": 84}, {"from": 6, "to": 86}, {"from": 6, "to": 89}, {"from": 6, "to": 90}, {"from": 6, "to": 95}, {"from": 6, "to": 96}, {"from": 6, "to": 98}, {"from": 11, "to": 24}, {"from": 11, "to": 25}, {"from": 11, "to": 30}, {"from": 11, "to": 32}, {"from": 11, "to": 35}, {"from": 11, "to": 45}, {"from": 11, "to": 52}, {"from": 11, "to": 56}, {"from": 11, "to": 59}, {"from": 11, "to": 71}, {"from": 11, "to": 79}, {"from": 11, "to": 82}, {"from": 11, "to": 84}, {"from": 11, "to": 86}, {"from": 11, "to": 89}, {"from": 11, "to": 90}, {"from": 11, "to": 95}, {"from": 11, "to": 96}, {"from": 11, "to": 98}, {"from": 24, "to": 25}, {"from": 24, "to": 30}, {"from": 24, "to": 32}, {"from": 24, "to": 35}, {"from": 24, "to": 45}, {"from": 24, "to": 52}, {"from": 24, "to": 56}, {"from": 24, "to": 59}, {"from": 24, "to": 71}, {"from": 24, "to": 79}, {"from": 24, "to": 82}, {"from": 24, "to": 84}, {"from": 24, "to": 86}, {"from": 24, "to": 89}, {"from": 24, "to": 90}, {"from": 24, "to": 95}, {"from": 24, "to": 96}, {"from": 24, "to": 98}, {"from": 25, "to": 30}, {"from": 25, "to": 32}, {"from": 25, "to": 35}, {"from": 25, "to": 45}, {"from": 25, "to": 52}, {"from": 25, "to": 56}, {"from": 25, "to": 59}, {"from": 25, "to": 71}, {"from": 25, "to": 79}, {"from": 25, "to": 82}, {"from": 25, "to": 84}, {"from": 25, "to": 86}, {"from": 25, "to": 89}, {"from": 25, "to": 90}, {"from": 25, "to": 95}, {"from": 25, "to": 96}, {"from": 25, "to": 98}, {"from": 30, "to": 32}, {"from": 30, "to": 35}, {"from": 30, "to": 45}, {"from": 30, "to": 52}, {"from": 30, "to": 56}, {"from": 30, "to": 59}, {"from": 30, "to": 71}, {"from": 30, "to": 79}, {"from": 30, "to": 82}, {"from": 30, "to": 84}, {"from": 30, "to": 86}, {"from": 30, "to": 89}, {"from": 30, "to": 90}, {"from": 30, "to": 95}, {"from": 30, "to": 96}, {"from": 30, "to": 98}, {"from": 32, "to": 35}, {"from": 32, "to": 45}, {"from": 32, "to": 52}, {"from": 32, "to": 56}, {"from": 32, "to": 59}, {"from": 32, "to": 71}, {"from": 32, "to": 79}, {"from": 32, "to": 82}, {"from": 32, "to": 84}, {"from": 32, "to": 86}, {"from": 32, "to": 89}, {"from": 32, "to": 90}, {"from": 32, "to": 95}, {"from": 32, "to": 96}, {"from": 32, "to": 98}, {"from": 35, "to": 45}, {"from": 35, "to": 52}, {"from": 35, "to": 56}, {"from": 35, "to": 59}, {"from": 35, "to": 71}, {"from": 35, "to": 79}, {"from": 35, "to": 82}, {"from": 35, "to": 84}, {"from": 35, "to": 86}, {"from": 35, "to": 89}, {"from": 35, "to": 90}, {"from": 35, "to": 95}, {"from": 35, "to": 96}, {"from": 35, "to": 98}, {"from": 45, "to": 52}, {"from": 45, "to": 56}, {"from": 45, "to": 59}, {"from": 45, "to": 71}, {"from": 45, "to": 79}, {"from": 45, "to": 82}, {"from": 45, "to": 84}, {"from": 45, "to": 86}, {"from": 45, "to": 89}, {"from": 45, "to": 90}, {"from": 45, "to": 95}, {"from": 45, "to": 96}, {"from": 45, "to": 98}, {"from": 52, "to": 56}, {"from": 52, "to": 59}, {"from": 52, "to": 71}, {"from": 52, "to": 79}, {"from": 52, "to": 82}, {"from": 52, "to": 84}, {"from": 52, "to": 86}, {"from": 52, "to": 89}, {"from": 52, "to": 90}, {"from": 52, "to": 95}, {"from": 52, "to": 96}, {"from": 52, "to": 98}, {"from": 56, "to": 59}, {"from": 56, "to": 71}, {"from": 56, "to": 79}, {"from": 56, "to": 82}, {"from": 56, "to": 84}, {"from": 56, "to": 86}, {"from": 56, "to": 89}, {"from": 56, "to": 90}, {"from": 56, "to": 95}, {"from": 56, "to": 96}, {"from": 56, "to": 98}, {"from": 59, "to": 71}, {"from": 59, "to": 79}, {"from": 59, "to": 82}, {"from": 59, "to": 84}, {"from": 59, "to": 86}, {"from": 59, "to": 89}, {"from": 59, "to": 90}, {"from": 59, "to": 95}, {"from": 59, "to": 96}, {"from": 59, "to": 98}, {"from": 71, "to": 79}, {"from": 71, "to": 82}, {"from": 71, "to": 84}, {"from": 71, "to": 86}, {"from": 71, "to": 89}, {"from": 71, "to": 90}, {"from": 71, "to": 95}, {"from": 71, "to": 96}, {"from": 71, "to": 98}, {"from": 79, "to": 82}, {"from": 79, "to": 84}, {"from": 79, "to": 86}, {"from": 79, "to": 89}, {"from": 79, "to": 90}, {"from": 79, "to": 95}, {"from": 79, "to": 96}, {"from": 79, "to": 98}, {"from": 82, "to": 84}, {"from": 82, "to": 86}, {"from": 82, "to": 89}, {"from": 82, "to": 90}, {"from": 82, "to": 95}, {"from": 82, "to": 96}, {"from": 82, "to": 98}, {"from": 84, "to": 86}, {"from": 84, "to": 89}, {"from": 84, "to": 90}, {"from": 84, "to": 95}, {"from": 84, "to": 96}, {"from": 84, "to": 98}, {"from": 86, "to": 89}, {"from": 86, "to": 90}, {"from": 86, "to": 95}, {"from": 86, "to": 96}, {"from": 86, "to": 98}, {"from": 89, "to": 90}, {"from": 89, "to": 95}, {"from": 89, "to": 96}, {"from": 89, "to": 98}, {"from": 90, "to": 95}, {"from": 90, "to": 96}, {"from": 90, "to": 98}, {"from": 95, "to": 96}, {"from": 95, "to": 98}, {"from": 96, "to": 98}]);

        // adding nodes and edges to the graph
        data = {nodes: nodes, edges: edges};

        var options = {"edges": {"color": {"inherit": true}, "smooth": false}, "interaction": {"navigationButtons": true}, "physics": {"barnesHut": {"gravitationalConstant": -80000, "springLength": 250, "springConstant": 0.001}, "minVelocity": 0.75}};
        
        

        

        network = new vis.Network(container, data, options);
	 
        


        

        return network;

    }

    drawGraph();

</script>
<!-- DON"T CHANGE ANYTHING ABOVE, EDIT BELOW-->

<br>
You may be wondering what you're looking at above. If you guessed a network that models disease interactions where the red dots are citizens that have died and where green citizens are lucky enough to have not been infected, then you were correct!

Before reading on, I highly recommend playing around with the interactive graph. You can move the vertices around by clicking and dragging on them to get a better feel of the number of connections an individual citizen has. Also, if you hover over a vertex/dot, then you'll see the number of connections a citizen has. Finally, it's important to note that the bigger a vertex, the more times a citizen has been infected.

## The Model
Now that you've seen the final product, what's actually going on here? At a high level, you can think of the graph as a population or society with 100 citizens. At the beginning (i.e day 0 out of 100) only 1 citizen is infected. Then, over the course of each day, every citizen makes new friends at some specified probability which, if that citizen is infected, gives them the chance (or misfortune) of passing that disease onto someone else (again at some pre-specified probability). Unfortunately, those that have been infected for more than 1 day must roll the dice and either perish or are magically cured (at some pre-specified probability). This cycle continues for the next 99 days.

In the end, if you input the correct probabilities, then you end up with the graph above, or in other words, a state of equilibrium. In this case, to better represent what equilibrium means, here's the chart that is produced at the end of 100 days.

<p align= "center">
<img src="/assets/images/blog/21-06-03/fig3.png" width="500">
</p>
<div align="center">State of equilibrium after 100 days</div>
<br>

Yet, you may still be unsatisfied as I haven't directly shown what's going on each day. So, hopefully, the video below demonstrates the journey to equilibrium. Note that in the interactive graph we only saw green and red vertices, this time yellow vertices will also be featured which signify citizens that are infected.

<p align= "center">
<video controls preload="metadata" style=" width:600px;" class="center">
	<source src="/assets/images/blog/21-06-03/disease_network_over_time.mp4" type="video/mp4">
	Your browser does not support the HTML5 video tag.
</video><br />
</p>
<br>

## Drawbacks & Benefits
Unfortunately, like any model or representation of real-world systems, assumptions are made and simplifications are added. For instance, the model assumes that people continue to socialise even after there is clearly some sort of disease outbreak. Likewise, there is no complex governmental structure that enforces lockdowns, masks or vaccines, hence, the disease only stops once the disease dies out, as seen above.

On the other hand, the model does represent the exponential speed of disease outbreaks as well as the chaotic nature of the system. For instance, changing the probability of a citizen connecting with another citizen results in a very different result. Furthermore, even running the model with the same parameters results in different results.

For this reason, no two graphs are rarely ever the same due to the entanglement with probability making a specific example extremely hard to replicate.

## Conclusion
Developing models of real-world systems are extremely difficult problems which explains the simplicity of the model demonstrated in this blog post. Contrarily, networks/graphs are extremely convenient in representing interactions between individuals which further helps to reveal the magnitude and speed of disease transmission.

Nevertheless, it’s fascinating to dive into how diseases are transmitted over time which has personally allowed me to better understand disease outbreaks (although marginally).

## Code
I highly recommend playing with the code and changing the probability of infection and death. Please post in the GitHub repo discussion section any issues you're having with the code or if you want to raise any questions, comments or suggestions.

Link to the GitHub Repo to download the code: <https://github.com/MillenniumForce/DataSoc-Projects>
