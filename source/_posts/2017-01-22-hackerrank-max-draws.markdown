---
layout: post
title: "Hackerrank - Max draws"
date: 2017-01-22 17:21:44 +0530
comments: true
published: true
categories: 
- Hackerrank
- Algorithms
- Data Structures
---
Hackerrank -  Max draws

Jim is off to a party and is searching for a matching pair of socks. His drawer is filled with socks, each pair of a different color. In its worst case scenario, how many socks (x) should Jim remove from his drawer until he finds a matching pair?

JavaScript implementation
``` javascript max-draw.js https://gist.github.com/kiranml1/6d32a8dc396ea6a0896bb3ec05d49913 
    function processData(input) {
      var data = input.split("\n")
      var t = data[0];
      for (var i = 1 ; i <= t; i += 1) {
        var n = data[i].match(/\d+/g);
        console.log(parseInt(n) + 1);
      }
    }
```

Java implementation
``` java
    // Need to implement in java
```
