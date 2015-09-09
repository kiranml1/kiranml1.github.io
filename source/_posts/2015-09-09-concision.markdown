---
layout: post
title: "Concision"
date: 2015-09-09 22:51:51 +0530
comments: true
categories: JavaScript
---
Javascript is a language where it needs concision in a importance to be faster in loading balance, which precisely can be given an example in simple below:

{% include_code concision-test.js %}
non-optimised:    alert(  ' Javascript'  ); 
optimised:     alert('Javascript');

an example a practice which is done by minification and concatenation in Javascript:

var a = (function(){})()
var b = !function(){}

In above example, a and b are functions with different declaration syntax,
which is optimized in closure and negated closure which implies the pattern to load the code and in the another context we can say,

a => undefined
b => true

If we want any undefined || null || 0 || empty want retain a ability to express it in boolean case, we can use it to say function result.

Here ! can be "+,~,-" in over to evaluate in concision or some benefit out of its return value.