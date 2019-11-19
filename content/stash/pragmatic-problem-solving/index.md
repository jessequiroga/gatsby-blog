---
published: false
path: '/stash/pragmatic-problem-solving'
title: Pragmatic problem solving
tags: ['problem-solving']
date: '2019-07-02'
---

Depending on the nature of the problem at hand, problem solving can be an overwhelming task.

Solving a complex problem or crushing a pesky software bug has the potential to make you feel like a hero, just to shatter your ego minutes later. Breaking it up into practical steps leaves you with a process to fall back on and help you stay focused when solving a particularly irksome or elusive problem.

This article outlines the pragmatic framework I use to approach problems.

<ol>
  <li>Isolate</li>
  <li>Iterate</li>
  <li>Explore</li>
  <li>Execute</li>
  <li>Share</li>
</ol>

## 1. Isolate

Often what appears to be the root cause of the problem is merely a symptom. We much first identify and isolate the problem.

<ul>
  <li>Read the error message. Read it again.</b></li>
  <li>Ensure that you have sufficient familiarity with the particulars (language / framework / debugger), if not, make the investment</b>
  </li>
  <li>Revert to a previously compiling version, then make incremental updates</li>
  <li>Use a process of elimination</li>
</ul>

## 2. Iterate over the behaviour

As outlined in <a href="https://pragprog.com/book/tpp20/the-pragmatic-programmer-20th-anniversary-edition" target="_blank">The Pragmatic Programmer, from Journeyman to Master</a> by <a href="https://twitter.com/pragmaticandy" target="_blank">Andy Hunt</a>

<blockquote>It sounds simple, but in explaining the problem to another person you must explicitly state things that you may take for granted when going through the code yourself. By having to verbalize some of these assumptions, you may suddenly
gain new insight into the problem.</blockquote>

Iterating over the behaviour with different data sets helps us to understand the problem. And an in depth understanding makes it easier to ask for help, which (as our Engineering Director at Leaf recently pointed out), can prevent wasting valuable time</p>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">7. Getting stuck and spending a day figuring out what could have been solved in 10 mins by asking for help.</p>&mdash; Mike Carter (@mcarterj) <a href="https://twitter.com/mcarterj/status/1143626584655650816?ref_src=twsrc%5Etfw">June 25, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<ul>
<li>Eliminate Assumptions. Assumptions (and denial) are the root of all evil. Debug as transparently as possible.</li>
<li>Write pseudo code</li>
<li>Talk over the problem with a co-worker (or a <a href="https://en.wikipedia.org/wiki/Rubber_duck_debugging" target="_blank">rubber duck</a>)</li>
</ul>

## 3. Explore solutions

In the words of Albert Einstein

<blockquote>We cannot solve our problems with the same thinking we used when we created them.</blockquote>

<ul>
  <li>RTFM</li>
  <li>Utilise Github</li>
  <li>Look for the ladder. More often than not, somebody else has climbed the same wall you find yourself in front of and have kindly rolled down a ladder in the shape of a Stack Overflow answer or a Github Issue.</p>
  </li>
  <li>Trust in your own ability</li>
  <li>Raise your hand</li>
  <li>Still stuck? Get some fresh air! Thank me later.</li>
</ul>

## 4. Execute your solution

Assuming that you managed to solve your problem whilst exploring possible solutions <i>and</i> that the initial implementation was somewhat experimental. It's a good idea to do a quick code review to make sure the implementation and your test coverage is up to scratch.

<ul>
  <li>Review the code</li>
  <li>Refactor as needed</li>
  <li>Update tests</li>
  <li>Update stakeholders</li>
</ul>

## 5. Share

It comes back to the ladder reference. There's a good chance you've learned something valuable during the problem solving process and it's important that you share it. Teaching is one of the most effective ways of learning, it encourages others to do the same and it will give your culture a boost.

<ul>
  <li>Share it with your team mates (I usually post a quick message in an approriate slack channel)</li>
  <li>Answer an unanswered question you found whilst looking for the right solution</li>
  <li>Stash it somewhere</li>
</ul>

<hr>

Don’t be fooled by the numbered steps. Problem solving is not a sequential process, you might find yourself having to take a couple of steps back (or a walk!) in order to make progress.

I'll leave you with a friendly reminder that every problem is, at it's core, an opportunity to learn and level up.
