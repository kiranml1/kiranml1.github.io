---
layout: post
title: "Hackerrank - Circular array rotation"
date: 2017-01-22 17:26:49 +0530
comments: true
published: true
categories: 
- Hackerrank
- Algorithms
- Data Structures
---
Hackerrank - Circular array rotation

JavaScript implementation
``` javascript max-draw.js https://gist.github.com/kiranml1/2c805c44a4b722e40186013470d5ad64 
    function main() {
      var n_temp = readLine().split(' ');
      var n = parseInt(n_temp[0]);
      var k = parseInt(n_temp[1]);
      var q = parseInt(n_temp[2]);
      a = readLine().split(' ');
      a = a.map(Number);
    
      var rot = k%n;
      for(var a0 = 0; a0 < q; a0++) {
        var m = parseInt(readLine());
        if (m - rot >= 0) {
          console.log(a[m -  rot]);
        } else {
          console.log(a[m - rot + a.length]);
        }
      }
    }
```