---
layout: post
title: "Cucumber - BDD Introduction"
date: 2016-07-20 12:20:26 +0530
comments: true
categories:
- Javascript
- SVG
- CSS
- HTML
- UI
- Web
---

Introducing Cucumber to Front end developers : [http://cucumber.io](http://cucumber.io/)

Cucumber is oriented to be a BDD (Behaviour Driven Development) testing framework as "jasmine" testing framework. 
It is generally used in automation of a web application aka functional testing.

Cucumber is popularly used in java programmed automation framework and it is wide popular in using with 
selenium web-driver component from selenium ecosystem.

Front end developers are currently already got in hold of automation with frameworks like Protractor such as Angular. Now
Cucumber also is now in hand with Front end to manage the automation tasks for a web application, by writing automation tasks
from a front end knowledge.

Yes, you can write your complete automation test suites in cucumber in our most loved Javascript.

I have given a overview of Cucumber targeting Front end developers in below presentation,

Please check it out.

{% youtube 2QjyVJgk494 %}

But, Why is testing from cucumber is a front end task :(

Because we know the standard and compliant HTML for the web application to make the tester to trigger actions / automate tasks
as expected from a interactive designer with semantic values helping to solve accessibility issues as an example

Cucumber exposes a new syntax from ruby - Gherkin

which looks like as below:

``` gherkin gherkin
# features/my_feature.feature

Feature: Example feature
  As a user of Cucumber.js
  I want to have documentation on Cucumber
  So that I can concentrate on building awesome applications

  Scenario: Reading documentation
    Given I am on the Cucumber.js GitHub repository
    When I go to the README file
    Then I should see "Usage" as the page title
```

the red colored syntax in the code snippet is gherkin sugar and the text in blue color are the general human readable
content which gives every stakeholder in a project to compose to achieve of his interaction with browser.

the statements after 
``` gherkin
Given ...,
Then ..., 
When ..., 
And ...,
```
 exposes a statement which is defined by front end developer from a step definition (function) in the framework by arguments which you pass
 as a string and executes the test in it as below :
 
``` javascript
   this.Given(/^the blogger is navigated to "([^"]*)"$/, {
     timeout: config.timeout
   }, function (path, next) {
 
     this.driver
       .get(config.baseUrl + path)
       .then(function () {
         next();
       });
   });
```
 
 Now any stakeholder can use/reuse write this step in his gherkin as below:
 
``` gherkin
 Given the blogger is navigated to "https://github.com/kiranml1"
```
 
 I have created boilerplate for starting up a project with cucumber-js - [boilerplate](https://github.com/kiranml1/cucumberjs-selenium-webdriver-boilerplate/blob/master/features/step_definitions/steps.js)
 
 Hope this helps :)