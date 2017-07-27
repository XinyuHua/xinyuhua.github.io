---
layout: post
title: A Study On The Diversity Of Supporting Arguments in Online Debate
---

_“He disliked contradiction, and still more, arguments that were continually skipping from one thing to another, introducing new and disconnected points, so that there was no knowing to which to reply.”_

_-- Leo Tolstoy, Anna Karenina_

This is the work we submitted to ACL 2017. We study the way human debaters pick and combine different kinds of information from online documents to form a persuasive and coherent argument.

Usually gathering relevant documents and potential references is not hard, given the power of the Internet and search engine. 
But choosing the most related argument sentences and synthesizing them together can be very challenging.

<img src="{{site.resourceurl}}/photos/video-game.jpg" style="width:720px;height:350px;" >
For example, suppose we want to construct some arguments for how video game can lead to youth violence. What people usually do is to find some facts, evidence, or quotes to support this claim. We aim to automate this process by searching through documents and ranking sentences according to how likely they will be chosen by human editors.

Specifically, we first characterize the type of arguments as *Study, Factual, Opinion,* and *Reasoning*.
Like many other texts in natural language, it is almost impossible to fully classify all types of arguments by merely four types. We think these four types are the most fundamental and independent ones (even though we still found some arguments lie in the boundary of two or more types).

* **Study** asd
* **Factual** asd
* **Opinion** asd
* **Reasoning** ads

So why would we need this type information? We conjecture that for different debate topics and claims, humans have tendencies to use different types of arguments. Knowing the type of a candidate argument can help us to decide if it might be a proper argument for the given claim. For example, if the claim is very general, like _Video games are bad for young people_, there are wider selection of arguments than a claim like _Video games lead to cognitive aggression_. Also for such specific claim, results from research studies are preferred than incidental events or logical reasoning.

To include the type information for relevant argument detection, we design a special feature set which we called _Composite Features_ in our paper. The idea is simple, for each single feature we create four feature functions, each corresponding to one type. And after applying our type prediction model, we only set one of those four feature values to the actual feature values, and let all others to be zero. Experimental results proved the effectiveness of using such feature sets, which also suggests the type information helps.

For details of this work please refer to [our paper][paper].

[paper]: {{site.baseurl}}/Resources