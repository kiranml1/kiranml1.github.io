---
layout: post
title: "Hackerrank - Find the point"
date: 2017-01-22 16:40:26 +0530
comments: true
published: true
categories: 
- Hackerrank
- Algorithms
- Data Structures
---
Hackerrank - Find the Point

Consider two points,  and . We consider the inversion or point reflection, , of point  across point  to be a  rotation of point  around .

Given  sets of points  and , find  for each pair of points and print two space-separated integers denoting the respective values of  and  on a new line.

Javascript implementation
``` javascript find-a-point.js https://gist.github.com/kiranml1/627b82e703966c54095f6baa45296396
    function findPoint(input) {
      var data = input.split("\n")
      var n = data[0];
      for (var i = 1 ; i <= n; i += 1) {
        var pq = data[i].match(/\d+/g).map(Number);
        console.log((pq[2] + (pq[2] - pq[0])) + " " + (pq[3] + (pq[3] - pq[1])));
      }
    }
```

Java implementation
``` java
    // Need to implement in java
```
