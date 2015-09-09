---
layout: post
title: "Prototype"
date: 2015-09-09 22:45:41 +0530
comments: true
categories: JavaScript
---

Javascript Prototype Chain of a Foo Function

{% img images/proto.png %}

Foo = function() {};
Foo.prototype.x = 20;
Foo.prototype.y = 30;

(new Foo ).__proto__ = Foo.prototype
(new Foo ).prototype = undefined

__proto__ is the actual object that is used to lookup into chain to resolve methods.
prototype is the object that is used to build __proto__ when you create object with new