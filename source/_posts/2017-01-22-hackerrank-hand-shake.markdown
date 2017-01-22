---
layout: post
title: "Hackerrank - Hand shake"
date: 2017-01-22 17:25:38 +0530
comments: true
published: true
categories: 
- Hackerrank
- Algorithms
- Data Structures
---
Hackerrank -  Hand shake

At the annual meeting of Board of Directors of Acme Inc, every one starts shaking hands with everyone else in the room. Given the fact that any two persons shake hand exactly once, Can you tell the total count of handshakes?

JavaScript implementation
``` javascript max-draw.js https://gist.github.com/kiranml1/2c805c44a4b722e40186013470d5ad64 
    function main() {
      var T = parseInt(readLine());
      for(var a0 = 0; a0 < T; a0++){
        var N = parseInt(readLine());
        console.log(Math.floor(N * (N - 1)/2));
      }
    }
```

Java implementation
``` java
    // Need to implement in java
```
