---
layout: post
title: "Quad Geomentry"
date: 2015-09-09 23:42:47 +0530
comments: true
categories: 
---
Quadtree is a Geometric Concept of dividing the Plan into 4 Quadrants, in which each nodes will be scatterred and take over the concept of reviewing into each iteration. Quadtree will be useful in Manyways to minimize the checks into iterative loops of the node positions, which will be useful in Collsion Detection, which will reduce the efficiency a lot great. <br/>

Basically Quadrant Geomentry of D3 is as below:<br/>

1.	d3.geom.quadtree()
2.	quadtree(points)
3.	root.add(point)
4.	root.visit(callback)
5.	quadtree.x()
6.	quadtree.y()
7.	quadtree.extent()

[Best Resource in knowing about Quadtree](http://gamedevelopment.tutsplus.com/tutorials/quick-tip-use-quadtrees-to-detect-likely-collisions-in-2d-space--gamedev-374)

Some Examples of Quadtree in D3

[Quadtree](http://bl.ocks.org/mbostock/4343214)
[Collision Detection](http://mbostock.github.io/d3/talk/20111018/collision.html)
[Mitchell's Best Candidate](http://bl.ocks.org/mbostock/6224050)