---
published: true
path: '/stash/pragmatic-problem-solving'
title: Pragmatic problem solving
tags: ['problem-solving']
date: '2019-07-02'
---

Depending on the nature of the problem at hand, problem solving can be an overwhelming task. 

Solving a complex problem or crushing a pesky software bug has the potential to make you feel like a hero, just to shatter your ego minutes later. Breaking it up into practical steps leaves you with a process to fall back on and help you stay focused when solving a particularly irksome or elusive problem.

This article outlines the pragmatic framework I use to approach problems. It's aimed at software engineering, but can be just as useful in day-to-day life or when tackling other work-related tasks and it's as easy as 1, 2...5.

<ol>
  <li>Identify</li>
  <li>Iterate</li>
  <li>Explore</li>
  <li>Implement</li>
  <li>Share</li>
</ol>

## 1. Identify and understand the problem

Before we can tame the beast, we must name the beast. Figuring out what exactly we're dealing with can be easier said than done, often what appears to be the root cause of your problem is merely a symptom. 

#### Why?

<p>
  An in depth understanding...
  <ul>
    <li>
      will help you to <b>isolate</b> the problem.
    </li>
    <li>
      <p>makes it easier to ask for help, which (as our Engineering Director at Leaf recently pointed out), can prevent wasting valuable time</p>
      <blockquote class="twitter-tweet"><p lang="en" dir="ltr">7. Getting stuck and spending a day figuring out what could have been solved in 10 mins by asking for help.</p>&mdash; Mike Carter (@mcarterj) <a href="https://twitter.com/mcarterj/status/1143626584655650816?ref_src=twsrc%5Etfw">June 25, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </li>
    <li>
      <p>will be beneficial when updating your test coverage to flag and prevent the behaviour in future.</p>
    </li>
  </ul>
</p>

#### How?

<ul>
  <li><b>Read the error message</b><p>Read it again. Read the error in it's entirety. More often than not, the error message will point you directly to the problem and even suggest a possible solution or refer you straight to the documentation.</p>
  </li>
  <li><b>Ensure that you have sufficient familiarity with the particular function or framework</b> (RTFM)</li>
  <li>
    If your code was compiling previously, <b>walk it back</b>. Comparing your current version of the code base with the working branch could help you isolate the problem. If the error is occuring on a specific environment, use a process of elimination to determine what the difference is, environment variables is a good place to start.
  </li>
  <li>
    <b>Eliminate Assumptions</b>
    <p>Assumptions (and denial) are the root of all evil. Debug as thoroughly and transparently as possible. Look in the least likely places. Some variables might not have the expected values assigned to them.
  </li>
  <li>
    <b>Embrace your tools</b>
    <p>Investing time in familiarising yourself with your Dev Tools will most definitely pay off in the long run. <a href="https://twitter.com/stolinski"  target="_blank" >@stolinsky</a> and <a href="https://twitter.com/wesbos"  target="_blank" >@wesbos</a> recently did a good <a href="https://twitter.com/syntaxfm"  target="_blank" >@syntaxfm</a> episode on debugging.</p>
    </p>
    <iframe src="https://open.spotify.com/embed-podcast/episode/3xo35XDcLxlODRItBSEQEb" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    The episode mainly focusses on Javascript, killing CLDD (Console Log Driven Development) and using Chrome's built-in Debugger.
  </li>
</ul>

## 2. Iterate over the behaviour

#### Why?

As outlined in <a href="https://pragprog.com/book/tpp20/the-pragmatic-programmer-20th-anniversary-edition" target="_blank">The Pragmatic Programmer, from Journeyman to Master</a> by <a href="https://twitter.com/pragmaticandy" target="_blank">Andy Hunt</a>

<blockquote>It sounds simple, but in explaining the problem to another person you must explicitly state things that you may take for
granted when going through the code yourself. By having to verbalize some of these assumptions, you may suddenly
gain new insight into the problem</blockquote>

#### How?

<ul>
<li>Write pseudo code</li>
<li>Talk over the problem with a co-worker (or a <a href="https://en.wikipedia.org/wiki/Rubber_duck_debugging" target="_blank">rubber duck</a>)</li>
</ul>

## 3. Explore solutions

#### Why?

In the words of Albert Einstein

<blockquote>We cannot solve our problems with the same thinking we used when we created them.</blockquote>

#### How?

<ul>
  <li><b>Refer to the Documentation</b></li>
  <li><b>Utilise Github</b>
  <p>If it's clear from your error message that the error is caused by a syntax error and you didn't have any success with the docs, try doing a search on Github for some code examples.</p>
  </li>
  <li><b>Look for the ladder</b>
  <p>More often than not, somebody else has climbed the same wall you find yourself in front of and have kindly rolled down a ladder in the shape of a Stack Overflow answer or a Github Issue.</p>
  </li>
  <li><b>Make incremental changes where possible</b></li>
  <li><b>Trust in your own ability</b></li>
  <li><b>Raise your hand</b></li>
  <li><b>Still stuck?</b> Get some fresh air! Thank me later.</li>
</ul>

## 4. Implement your solution

#### Why?

Assuming that you managed to solve your problem whilst exploring possible solutions <i>and</i> that the initial implementation was somewhat experimental. It's a good idea to do a quick code review to make sure the implementation is up to scratch and that your test coverage is up to date and ready to catch this particular scenario should it pop-up again.

#### How?

<ul>
  <li>Review the code</li>
  <li>Refactor as needed and ensure that the code is in keeping with the rest of the code base</li>
  <li>Update your test suite</li>
  <li>Update stakeholders</li>
</ul>

## 5. Share

#### Why?

It comes back to the ladder reference (3). There's a good chance you've learned something valuable during the problem solving process and it's important that you share it. There's something comforting about it, it encourages others to do the same and it will give your culture a boost.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I&#39;ve had multiple people tell me they thought security work / CTFs were out of reach for them but my streams showed them otherwise <br><br>you climb the wall and you drop down a ladder for those behind you</p>&mdash; bletchley punk (@alicegoldfuss) <a href="https://twitter.com/alicegoldfuss/status/1142872874832674818?ref_src=twsrc%5Etfw">June 23, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### How?

<ul>
  <li>Share it with your team mates (I usually post a quick message in an approriate slack channel)</li>
  <li>Answer an unanswered question you found whilst looking for the right solution</li>
  <li>Stash it somewhere</li>
</ul>

<hr>

Don’t be fooled by the numbered steps. Problem solving is not a sequential process, you might find yourself having to take a couple of steps back (or a walk!) in order to make progress.

I'll leave you with a friendly reminder that every problem is, at it's core, an opportunity to learn and level up.
