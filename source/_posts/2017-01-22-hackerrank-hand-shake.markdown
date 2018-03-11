---
layout: post
title: "Codes - Hand shake"
date: 2017-01-22 17:25:38 +0530
comments: true
published: true
categories: 
- Hackerrank
- Algorithms
- Data Structures
---
Hackerrank codes - Hand shake (Implementation in JS)
``` javascript max-draw.js https://gist.github.com/kiranml1/2c805c44a4b722e40186013470d5ad64
    function handshake() {
      var T = parseInt(readLine());
      for(var a0 = 0; a0 < T; a0++){
        var N = parseInt(readLine());
        console.log(Math.floor(N * (N - 1)/2));
      }
    }
```