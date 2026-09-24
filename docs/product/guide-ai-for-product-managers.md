<!--
INTERNAL HEADER, REMOVE BEFORE PUBLICATION
Status: draft audited 2026-09-15 for gaps, unverified statements, filler and
readability. Eleven fixes applied, including one factual misquote (SaaS misread as
software) and three claims asserted without evidence. Infographics not started.
Prompts: all 13 run against a capable model on realistic fixtures, twice.
2026-09-24: every prompt re-tested on Claude Haiku, Sonnet and Opus with trap fixtures,
one fresh session per prompt; 11 prompts reworded where models failed the same way.
On the reworded prompts Sonnet now passes 95% of checks and Opus 98%. Structure kept to Goal/Context/Expectations/Source.
Round one found 15 defects across both guides; round two confirmed every fix held
and surfaced smaller edges, mostly fixed counts and absolute bans, now also fixed.
Still blocking: none has been run on a real Copilot tenant, so per-app and per-tier
behaviour is unverified. 
Weekly newsletter promise removed 2026-09-24: Part 4 now asks interested readers to
write to info@learnslice.com instead.
Copilot behaviour checked against Microsoft documentation on 2026-09-15.
Every profession figure traced to Product Focus 2026. No figure is estimated.
Author: Alesia Kunz, CEO of LearnSlice. Portrait at public/images/blog/author-alesia-kunz.jpg. Field notes are her own experience, quoted from
her answers, and are styled differently from the body so experience is never mistaken
for sourced evidence. Do not add a field note she did not give.
Structure: docs/product/ai-guide-structure.md
-->

# AI for product managers

[DECK] Where it changes the product, not just the pace.

**97% of product managers say AI made them faster. Only 64% say it made their product
better.**

**Alesia Kunz**, CEO of LearnSlice. 17+ years in software engineering as a product
manager and product owner. Built on experience from real teams and projects, and on
published research.

*Inside: the licence nobody checks, the wrong answer that reads perfectly, and the five
places in a product week where AI is worth the time.*

This guide is about that gap: how to get from working faster to shipping something a stakeholder would notice. Clever prompts are a small part of it.

![Faster but not better: 97% of product managers report improved personal productivity from AI, while 64% report improved product outcomes such as more revenue or faster time to market, a gap of 33 percentage points. Source: Product Focus 2026 Survey of the Product Management Profession, 677 respondents across 40 countries.](/images/blog/pm-outcome-gap.svg)

Every figure about the profession comes from one source: the Product Focus 2026 Survey of the Product
Management Profession, 677 respondents across 40 countries, collected between October
2025 and January 2026. Most respondents were in Europe, 83%, with 8% in the United
States. Anything about how Microsoft Copilot behaves comes from Microsoft's own
documentation and was checked in September 2026. We are not affiliated with either.

---

## If you only have twenty minutes

If you have barely used AI at work, skip this and read the next section instead.
Otherwise, read four things and stop.

1. **Your Copilot probably cannot see your work**, Part 0, item 2. If Copilot has seemed useless, check first whether your tier can read your work.
2. **Give it your own material.** Rule 1. This is the difference between a generic
   answer and a useful one, and it is not about phrasing.
3. **Check it before it leaves you.** Rule 3. Numbers, names, and anything stated as a
   fact about a customer.
4. **One chapter**, whichever of the five describes your worst week.

The rest is detail you can come back to.

---

## Not knowing how is the biggest barrier

Half of the product managers in this survey who do not use AI say the reason is that
they are unsure how. That is more than the 33% who distrust it, and more than the 17%
who worry about legal and security risks. These three figures cover only the people who stay away, and only 4% of respondents never use AI, so treat them as a ranking of reasons and not as counts. The ranking is the useful part: not knowing how
comes first. If that is you, you are in the largest group.

What the tool is, in two sentences: a system that predicts likely text from the text you
give it, trained on an enormous amount of writing. That is why it writes so smoothly,
why it helps with anything made of words, and why it will state something false with
complete confidence.

**Start here, once, this week.** Take a document you already wrote and know well. Ask it
to list the questions a sceptical reader would ask about it. Because you know the document, you can judge the answer straight away. Then read the rest of this.

---

## Part 0: six things nobody told you

Six short sections before the main guide, a minute each. Most of them explain something that goes wrong and is not your fault.

### 1. Your best prompt might have been luck

Microsoft says it plainly in its own guidance: using the same prompt multiple times can
result in different responses. That is how the technology works.

**One good answer does not prove the prompt was good.** It might have been luck. A prompt is only worth keeping once it has
produced a usable answer more than once, on different inputs. That is why Rule 4 exists.

### 2. Your Copilot probably cannot see your work

There are three tiers, and they reach very different things.

![What each Copilot tier can reach: Copilot Chat Basic reaches web data only; Microsoft 365 Copilot Basic reaches web data and works inside Word, Excel, PowerPoint and OneNote; Microsoft 365 Copilot Premium, the paid add-on, additionally reaches your own files and mail automatically through Microsoft Graph, limited to files you already have permission to open.](/images/blog/pm-copilot-tiers.svg)

The same thing in detail, including what each tier can reach and how:

| Tier | Can it see your files and mail |
|---|---|
| Copilot Chat (Basic) | No. Web data only. It sees your work only if you paste it, upload it, or have it open in Teams or Outlook |
| Microsoft 365 Copilot (Basic) | Not in chat. But Copilot works inside Word, Excel, PowerPoint and OneNote |
| Microsoft 365 Copilot (Premium), the paid add-on | Yes, automatically, through Microsoft Graph, and only for files you already have permission to open |

Microsoft is renaming Microsoft 365 Copilot to Microsoft Copilot, and Copilot Chat to Microsoft Copilot Chat, so your screen may show either name.

> **Field note.** The problem I actually ran into was a step earlier than any of this.
> Most of the team did not know we had Copilot licences at all. When they found out,
> the next question was not which tier they were on. It was what they were supposed to
> do with it on a Tuesday morning. Licences are the easy part to buy and the easy part
> to waste.

If you have asked Copilot "what did we decide in the roadmap review" and got nothing
useful, check your tier before you blame your prompt. Only the premium tier reaches
your own content by itself.

**The model picker.** Copilot offers Auto, Quick response and Think deeper. Auto chooses
for you. Switch to Think deeper when the task is a judgement rather than a lookup, and
expect it to take longer on purpose.

**Grounding, which is the word for all of this.** Two sources feed any answer: the
public web, and your organisation's own content. Only the premium tier reaches the
second one by itself. Every other tier sees only what you hand it.

**Pick per task, not per tool.** In this profession 66% of AI users use ChatGPT
regularly, with Copilot second, then Gemini, Claude and Perplexity. 22% use three or
more regularly, and 52% of ChatGPT users also use Copilot. Plenty of people already mix tools, and that is the right instinct: choose per task. For anything about your own work, use
the tool that can actually read it. For thinking out loud, any general chat tool will
do.

**Before you look for a new tool.** Jira is recommended by 58% of this profession and
Confluence by 46%, so for most readers the product data already sits in tools that are
adding AI of their own. Check what you already pay for before buying anything new.

### 3. Microsoft's four-part prompt

This framework comes from Microsoft's own guidance, and it is a good one.

**Goal.** What you want.
**Context.** The situation, who it is for, what has already been decided.
**Expectations.** Format, length, tone, what not to do.
**Source.** Where it should get the material.

A thin prompt: *Summarise this feedback.*

The same prompt with four parts: *Summarise the customer feedback in the file below.
Context: I am preparing a prioritisation session for a B2B product and I need themes,
not individual complaints. Expectations: at most six themes, each with a count and one
verbatim quote, no recommendations. Source: only the attached file.*

The second one is just more specific about what you already know.

### 4. The slash key

In Copilot, type `/` and start typing the name of a file. With the paid Microsoft 365 Copilot licence you can also reference people, meetings and emails.
You can attach a single file or a whole folder. Inside a SharePoint site you can
reference up to ten files or pages. Checked September 2026.

Referencing is better than pasting, because pasting loses the formatting and the source link.

### 5. Where your prompts actually go

When you are signed in with your work account, prompts and responses are covered by
enterprise data protection, and Microsoft states they are not used to train the
foundation models. Copilot cannot show you a document you could not already open
yourself. For users in the European Union there are additional European Union Data Boundary safeguards, with two exceptions: web search queries, and Anthropic models where your administrator has enabled them, are not covered by the EU Data Boundary.

**The caveat that matters.** All of that describes a work account signed in with your
company identity. A personal account is a different product with different terms. If
you are not certain which you are signed into, check before you paste anything that
matters.

This is practical guidance, not legal advice. Your company's own rules sit on top of it.

### 6. It will be wrong in your own house style

It will state things that are not true, and it will state them confidently. Three things need checking every time:

- **Numbers.** Check every figure you did not give it yourself. It may have found a real
  one. It may also have invented one that looks real.
- **Names.** People, products, companies, competitors.
- **Anything stated as a fact about a customer.** This is the dangerous one, because it
  is the hardest to spot and the most expensive to act on.

Microsoft's own guidance says to review and verify responses.

**What this looks like in practice.** You paste thirty support tickets and ask for the
themes. Back comes: "Customers consistently request single sign-on." You go looking, and
one ticket mentioned it once, as an aside. Nothing was invented exactly. A single signal
was promoted to a pattern, in confident language, in a sentence you could reasonably
paste into a roadmap review. That is the failure to expect: a real signal, overstated, in a sentence that reads perfectly.

![How a single signal becomes a false pattern: thirty support tickets go in, one of them mentions single sign-on once in passing, and the summary that comes back says customers consistently request single sign-on. One ticket in thirty, reported as consistent.](/images/blog/pm-signal-to-pattern.svg)

> **Field note.** In our work the failure is rarely an invented fact. It is a real
> number with no source behind it, delivered with total confidence. It never looks
> doubtful, so how it looks tells you nothing. Our rule is simple: if we cannot trace a
> number to its source, it comes out before anything reaches a presentation. Human
> verification is not a nice-to-have step, it is the step.

**The decision aid.** Before you use an output, ask one question: *could I tell if this
were wrong?* If yes, use it and check it. If no, do not use it yet. Get the answer from
someone who would know, or go and find out.

![A decision aid for AI output. Ask one question: could I tell if this were wrong? If yes, use it and check the three things that always need checking, which are numbers, names, and anything stated as a fact about a customer. If no, you cannot accept that output yet: get it from someone who would know, or go and find out.](/images/blog/pm-trust-decision.svg)

---

## Part 1: four habits that separate method from luck

Part 0 was about how the tool behaves. These four habits are about how you work with it, and they are what makes a good result repeatable.

### Rule 1. Give it your own material

The difference between a generic answer and a useful one is almost always what you put
in, not how you phrase the question.

Paste the actual ticket, not your summary of it. The actual transcript, not your memory
of the call. The actual numbers, not "roughly a third". A model working from your
description of a thing is working from a copy of a copy.

### Rule 2. Know what must never go in

Among product managers who avoid AI, 17% name legal or security reasons. The concern is reasonable but too vague to act on. Three questions make it concrete, and each takes a second:

1. **Which account am I in?** Work identity, or personal. See Part 0, item 5.
2. **Would I put this in an email to a supplier?** If not, it does not go in a chat
   window either.
3. **Is it someone else's personal data?** Customer names, recordings, support tickets
   with identities in them. Anonymise or do not paste.

Your company's policy overrides all three. If it has one, read it once, properly. If it
does not, ask whoever would own it.

### Rule 3. Check it before it leaves you

85% of this profession already check AI output against their own expertise, so this rule
is probably not new to you. What helps is a consistent list. Use the
three from Part 0, item 6: numbers, names and customer claims.

The moment that matters is **before it leaves you**, not before it ships. Once a
plausible wrong sentence is inside a document three other people have edited, it stops
being an AI problem and becomes a fact your organisation believes.

### Rule 4. Keep what works

This is the easiest habit to skip.

When an answer comes out good, save the prompt that
produced it, with the parts that change marked in square brackets, in whatever you
already use: a note, a Confluence page, a pinned message. Next time the same job
starts from something that has already worked, instead of from nothing.

---

## Part 2: five places where AI is worth the time

Rules are easy to agree with and easy to forget. Here they are in the five places a
product week actually goes wrong, ordered by how much the profession says each one
hurts. Firefighting comes first.

### Chapter 1. Why Wednesday never looks like Monday's plan

**The need.** You planned the week on Monday and by Wednesday you are working on none of
it.

**The number.** 60% of product managers say unplanned work frequently disrupts their
schedule. Firefighting heads the survey's list of the big issues the profession faces,
ahead of lack of resource and weak or missing company strategy.

**Where it helps.**
- Turning fifty inbound requests into six themes, so the argument is about categories
  rather than tickets.
- Drafting the reply that declines a request and still explains the reasoning. It is the message that is easiest to put off.
- Turning a decision someone made in a corridor into three lines in the ticket, before
  everyone forgets it.

**What it cannot do.** It cannot reduce the number of interruptions. How much
firefighting you get depends heavily on where you work: in this survey automotive
reported 76% and SaaS 57%. If you are interrupted constantly, the fix is a conversation
with your manager about routing, and no tool substitutes for it. What you can change is
how much of your week each interruption costs after it arrives.

**One prompt.** Works on any tier, because you paste the content in.
```
Goal: group the requests below into at most six themes.
Context: these are [N] requests that came to me this week as a product manager for [product].
Expectations: for each theme give the theme in one line, how many requests it covers, and the one question I would need answered to decide what to do about it, with no "and". Every request appears exactly once. If one fits no theme, list it separately as unthemed rather than forcing it into one. Do not suggest solutions. Under each theme, list the requests it covers, quoted as written.
Source: only the text pasted below.

[paste the requests]
```

**Your first step, under fifteen minutes.** Take this week's inbound, in whatever form it
is in, and run that prompt once. If the themes come out wrong, that tells you
something too. Often it means the requests are not really requests, they are
escalations.

### Chapter 2. You know the product better than the people using it

**The need.** Every decision you make is a guess about someone you have not spoken to in
weeks.

**The number.** 71% of product managers say they do not spend enough time with customers
or understanding the market. It is worse the more senior you get: 75% among heads and
directors, against 59% among junior product managers.

![Customer time gets worse with seniority: 59% of junior product managers say they do not spend enough time with customers, 71% across the whole profession, and 75% among heads and directors. Source: Product Focus 2026 Survey of the Product Management Profession, 677 respondents across 40 countries.](/images/blog/pm-seniority-inversion.svg)

**Where it helps.**
- Turning interview recordings or notes into themes with the original quotes still
  attached, so you can check the theme against the words.
- Sharpening the questions before the interview, which is where AI earns its place in discovery. Take your assumptions to the model, let it pull them apart, then take the
  better questions to a real person.
- Finding the contradictions between what two customers told you.

**What it cannot do, and this one is serious.** It cannot talk to a customer for you, and
it must never be used to invent one. Asking a model to "act as our typical user" and
answer your questions produces fluent, confident, plausible fiction. It is a damaging misuse, because the output looks like research but can never tell you that you are wrong.

> **Field note.** I have seen product managers in my network treat what the model knows
> as the voice of the customer. The models are trained on a spread of sources, and some
> of it is outdated or simply about a different audience than yours. The teams that got
> real value did the opposite: they used AI to prepare for interviews and focus groups,
> so their assumptions could be confirmed or killed by actual users. Refine the
> questions with it. Do not let it answer them.

**One prompt.**
```
Goal: extract the themes from the customer interview transcript below.
Context: [product], [segment]. I am looking for problems the customer described, not features they requested.
Expectations: at most five themes, and a theme must rest on at least two separate mentions. Give each in one line with up to two verbatim quotes, nothing paraphrased. Put anything said only once in a separate list titled said once, rather than promoting it to a theme. Then a third list of anything the customer said that contradicts another part of the same interview.
Source: only the transcript below.

[paste the transcript]
```

**Your first step.** Take the most recent customer conversation you have any record of,
even rough notes, and run it. Take the contradictions to the team. They are often where your roadmap is wrong, and a summary hides them.

### Chapter 3. Everything is important, and that is the problem

**The need.** You cannot say no, because there is nothing concrete to point at when you
do.

**The numbers.** 33% of product managers report a weak or missing company strategy. 34%
have no clear primary metric they are accountable for. The two go together: product
managers with a weak company strategy are 15 percentage points more likely to have no
primary metric, 44% against 29%. It is difficult to prioritise if nobody has defined
what winning looks like.

**Where it helps.**
- Turning a vague strategy statement into a written test you can actually apply, with
  the questions it would have to answer to decide a real case.
- Making the trade-off in a decision explicit, so the thing you are giving up is on the
  page rather than discovered later.
- Arguing the other side of your own case before somebody else does it in the meeting.

**What it cannot do.** It cannot supply the strategy. It will happily generate a
plausible one, and that is the trap: a smooth-sounding strategy nobody agreed to is
worse than openly having none, because it shuts down arguments that needed to happen.
Use it to sharpen a strategy that exists, or to make the absence of one visible. Never to fill the gap without saying so.

> **Field note.** While building a product you rarely have one stakeholder. You have
> many, each responsible for one part of the product and each with different priorities
> for the features. What unblocks this in practice is not a better strategy document.
> It is a prioritisation matrix that puts effort against business value, so every
> stakeholder can see, objectively and tangibly, which features add the most value to
> the whole product and not only to the part they are responsible for. AI helps on both
> sides of that: it clusters the topics so you have something concrete to argue about,
> and it sharpens the questions you need to ask to place each item.

**One prompt.**
```
Goal: turn the strategy statement below into a prioritisation test, as far as the statement supports one.
Context: I need to decide between competing requests and I want a test I can apply consistently and defend in a meeting.
Expectations: up to five questions, each answerable yes or no about a specific request. Write only questions the statement actually supports. If it supports fewer than five, say so rather than filling the gap. Then tell me which parts are too vague to generate a question from, and why.
Source: only the statement below.

[paste your company or product strategy as written]
```

**Your first step.** Run it on your actual strategy, then apply the questions to the
two requests currently competing for the same sprint. The list of what was too vague to
test is the more valuable half of the output, and it is the thing to bring to your
manager.

### Chapter 4. Most of your week is writing

**The need.** Much of the job is writing, and much of the writing is read by someone who
has thirty seconds.

**The number.** Asked which activity they spend the most time on, 56% of product
managers name inbound activities, which the survey defines as helping the business deliver the product, against 25% naming strategic activities and 19% outbound. Much of that work, requirements above all, is written: documents, updates, tickets and mail.

![Which activity product managers say they spend the most time on: 56% name inbound activities, 25% name strategic activities such as deciding the right problems and products to pursue, and 19% name outbound activities. Source: Product Focus 2026 Survey of the Product Management Profession, 677 respondents across 40 countries.](/images/blog/pm-where-the-week-goes.svg)

**Where it helps.**
- The second draft, not the first. Write the bad version yourself in five minutes, then
  hand it over to be tightened. The first draft carries your intent and that is the part
  a model cannot guess.
- Compressing a long document down to the decision it is asking for.
- Rewriting one update for three audiences, because the engineering version and the executive version of the same news are different documents.

**What it cannot do.** It cannot know what you meant. A first draft generated from an
empty prompt costs more to fix than it would have cost to write, because you end up
editing someone else's argument instead of making your own.

**One prompt.**
```
Goal: rewrite the update below for three audiences.
Context: same news, three readers: the engineering team, my head of product, and a customer-facing colleague who needs to answer questions about it.
Expectations: three versions, each under 120 words. Each opens with what that reader must do or decide, if my draft states one for that reader. Where it states none, open by naming that gap instead of inventing a task. Do not add any information that is not in my draft. Flag anything too vague to translate.
Source: only my draft below.

[paste your draft]
```

**Your first step.** Take the last update you sent that got no reply, and run it. What
comes back as "too vague to translate" is usually the reason it got no reply.

### Chapter 5. The metric moved and the meeting is tomorrow

**The need.** You have the number. You do not know which of six explanations is the
right one, and you are presenting it tomorrow.

**The number.** When product managers were asked which skills will matter most over the
next two years, data analysis and literacy was listed second among hard skills, after AI proficiency.

**Where it helps.**
- Drafting the query or the formula, which is a language problem more than a maths one.
- Listing the plausible explanations for a movement, including the boring ones like a
  reporting change or a seasonal effect, so you walk in having ruled things out.
- Telling you what is missing from an analysis before you present it, which is a much
  better use than asking it to do the analysis.

**What it cannot do.** Do not trust its arithmetic unchecked, and do not trust any number it was not given. Every figure that leaves you is yours, not its. If you did
not check it, you did not say it. You repeated it.

**One prompt.**
```
Goal: list the plausible explanations for the change below.
Context: [metric] moved from [x] to [y] between [start date] and [end date] for [product]. Known changes in that window: [releases, campaigns, pricing, seasonality, reporting changes].
Expectations: rank the explanations by how easily each could be checked, cheapest first, and for each name the exact check. Include mundane explanations such as instrumentation or reporting changes. Do not calculate anything new, such as a difference or a percentage.
Source: only what I have written above.
```

**Your first step.** Take the last metric movement you had to explain and run it. If the
cheapest check on the list is one nobody ran, that is your meeting.

### Back to the gap

Five chapters in, it is worth returning to the number this guide opened with. In the
survey's own words, 97% report improved productivity and only 64% report improved
product outcomes, such as faster time to market. The five chapters you just read show where that missing third goes.

AI does two different things in a product week. It changes how fast you produce the
work, which is Chapter 1 and Chapter 4: themes instead of a pile, a second draft instead
of a blank page, one update rewritten three ways. And it changes what you decide, which
is Chapters 2, 3 and 5: the question you had not thought to ask before the interview, the
test that lets you say no, the explanation you ruled out before the meeting.

Only the second kind moves the product. If you use it for drafting alone you will land
in the gap: faster, with a roadmap that looks exactly as it did before.

That is why most prompts in this guide return something you still have to decide: themes and the question behind each, the objections
to your own case, the parts of a strategy too vague to test, the explanations ranked by
which is cheapest to rule out. The output is what you take into the room where the decision gets made.

---

## Part 3: the prompt pack

Start a new chat for each prompt, so nothing from an earlier task leaks into the answer, and on a fast or free model check the output against the prompt's own rules before you use it.

Every prompt below uses the four parts from Part 0, item 3, though the in-app prompts skip Context, because the open thread, meeting or file supplies it. Square brackets
mark the parts you change. Each says what it needs, and "any tier" means it works even
on Copilot Chat (Basic), because you supply the content yourself.

#### Copilot Chat, any tier

Theme a pile of requests: see Chapter 1.

**Argue the other side.**
```
Goal: make the strongest case against this decision.
Context: the decision is [decision]. It costs [what it costs]. We are making it because [your reasons]. [Who disagrees] disagrees because [what they said, or "unknown"].
Expectations: up to five objections, strongest first, each with the evidence someone would need to defeat it. Write only objections the material supports; if it supports fewer, say so. Where an objection needs a fact I have not given you, state that fact as a question rather than asserting it.
Source: only what I have written.
```

**Prepare for a difficult conversation.**
```
Goal: list the questions [role] will ask about the decision in the document below.
Expectations: up to five of the hardest. Give the honest answer to each where the document answers it, say what it answers only in part where that is the case, and say plainly "you do not have this" where it does not.
Source: only the document below.

[paste the decision document]
```
Paste the document with it. Without one, every answer comes back as "you do not have
this", which is correct and useless.

#### Outlook, needs Microsoft 365 Copilot

**Draft the decline.**
```
Goal: draft a reply that declines the request in this thread.
Context: my reasoning is [reason]. What I can offer instead: [alternative, or nothing].
Expectations: under 120 words. Say no to the request itself, not only to its deadline, in the first sentence, then give the reasoning. Do not promise anything I have not listed.
Source: this thread and what I have written above.
```

**Find the decision buried in a long thread.**
```
Goal: tell me what this thread is actually asking me to decide.
Expectations: the decision in one line, who is waiting, what is blocking it, and anything decided earlier in the thread that people seem to have forgotten.
Source: this thread only.
```

#### Teams, needs Microsoft 365 Copilot

Copilot in Teams reaches back over the last 30 days of meetings, which is easy to miss.

**Turn a recap into owners and dates.**
```
Goal: extract the commitments made in this meeting.
Expectations: a table of commitment, owner, date. Any commitment without a named owner goes in a separate list titled unassigned. Do not invent owners or dates.
Source: this meeting only.
```

**Get what was left unresolved**, which the standard recap tends to leave out.
```
Goal: list what this meeting did not settle.
Expectations: open questions and disagreements only. Do not summarise what was agreed. Name who raised each one. Then list anything that still lacks an owner, a date or an answer and that nobody raised, and say nobody did.
Source: this meeting only.
```

#### Word, needs Microsoft 365 Copilot

Rewrite for three audiences: see Chapter 4.

**Compress a document to the decision it asks for.**
```
Goal: tell me what this document is asking the reader to decide.
Expectations: the decision in one line, the facts that bear on it, at most three, and anything the document assumes without stating.
Source: this document only.
```

#### Excel, needs Microsoft 365 Copilot

Explain a metric movement: see Chapter 5.

**Find what the analysis cannot answer.**
```
Goal: tell me what is missing from this analysis.
Expectations: list the questions a sceptical reader would ask that this data cannot answer. Do not attempt to answer them, and do not calculate anything new.
Source: the selected data only.
```

#### PowerPoint, needs Microsoft 365 Copilot

**Turn a decision document into slides.**
```
Goal: turn the decision document I reference into slides.
Expectations: slide one states the decision the document asks for, and its recommendation if it makes one. Then one slide per argument the document actually contains, at most five slides including the first. Do not pad to reach five. No slide with more than three bullets.
Source: only the document I reference with /.
```

---

## Part 4: staying current on thirty minutes a week

93% of this profession say they want to learn more about AI tools. Training in general is hard to get: asked about the biggest barrier to product management training, 48% name a lack of budget and 23% a lack of management support, and only 32% rate the development opportunities at their
organisation as better than average.

So here is a routine that costs nothing and needs nobody's approval.

If your company has deployed nothing at all, it still works. Use a free tier with a
personal account, never put company material into it, see Rule 2, and practise on public
material or your own writing. The habits transfer. The grounding does not.

![A thirty minute weekly routine that costs nothing: ten minutes checking one source for what changed, fifteen minutes redoing a real task from your own week with the tool so you can judge the output, and five minutes writing down what worked and what did not.](/images/blog/pm-thirty-minutes.svg)

**Ten minutes, what changed.** Check one source from the list below, rotating through it.

**Fifteen minutes, on your own real work.** Take a task you did this week and do it again
with the tool. Not an exercise, the actual task, where you already know what good looks
like. This is the only way to tell whether the output is any good, and it is why practising on your own work teaches more than exercises do.

**Five minutes, write it down.** One line in your saved prompts: what worked, what did
not. This is Rule 4, and it is what makes the thirty minutes add up.

### Where to look, and how often

| Question | Source | How often |
|---|---|---|
| What changed in Copilot | Microsoft 365 Copilot release notes on Microsoft Learn, and the Microsoft 365 roadmap | Monthly |
| What changed in the models | The providers' own release notes and model cards | When something ships |
| What changed in my profession | The Product Focus annual survey, the source of this guide | Yearly |
| What changed in the rules, in the EU | The European Commission's AI Act pages. The AI literacy duty in Article 4 has applied since 2 February 2025 | Quarterly |

One policy worth adopting: **do not treat vendor blogs, news aggregators or social
threads as primary sources.** Go back to whoever published the number.

### A weekly on AI news

If you would be interested in a weekly newsletter on AI news, write to us at
info@learnslice.com.

If this guide was forwarded to you, the other one is at learnslice.com/ai-guides.

---

## If you lead a product team

41% of respondents manage a team of product people. If you are one of them, this section
is for you.

Product leaders in the survey were asked what actually makes a new product skill stick
at work. Standard tools and templates came first, named by 69%, ahead of structured
meetings between line managers and product managers, and ahead of standardised training
for teams. Developing a prioritised plan after training was named by 33%.

The survey's own conclusion is the useful part: the best results need all three
elements together, training and tools, structured manager conversations, and an
activation plan after the training. Tools and templates are the element most leaders
name. The activation plan is the one the fewest name.

![What embeds a new product skill: standard tools and templates named first by 69% of leaders, then structured conversations between line managers and product managers, then an activation plan after the training, named by 33%. The survey's conclusion is that all three are needed together. Source: Product Focus 2026 Survey of the Product Management Profession.](/images/blog/pm-embedding-a-skill.svg)

> **Field note.** Adopting any new tool needs a phase where people have dedicated time
> to learn it, try it and work out where it fits. If the organisation expects the normal
> workload alongside that, there is no time to experiment and the practice dies quietly.
> The other half is measurement. The ask from management was simply "use AI". Without
> saying how adoption and results will be measured, you have no way to tell afterwards
> whether it stuck. Two KPIs would have caught it: whether people use AI daily, and more
> importantly, how many hours a week the provided prompts save each person, by their
> own calculation. Track that second one weekly while the prompts and the adoption
> evolve. Give the time, and set the KPI before you start.

Three practical moves, in that order:

1. **Make the prompt pack the team's shared templates.** Keep them somewhere people actually open, where anyone can add a prompt that worked. This is the 69% finding applied.
2. **Put one question in the one to one.** "What did you try with AI this month and what
   came out wrong?" The second half is what makes it safe to answer honestly.
3. **Run a four week activation plan after anyone learns anything.** Week one, everyone
   picks a recurring task. Week two, they do it with the tool and keep the prompt. Week
   three, prompts go into the shared place. Week four, one person shows what did not
   work. This is the element only a third of leaders named.

If you want the four weeks run for the team rather than assembled by you, the contact
details at the end are the place to ask.

One last thing. Chapter 2 showed that the shortage of customer time is worst at the most senior level. Whatever the three moves above free up, that is where it should
go.

---

## Sources

Every source below was checked on 17 September 2026.

- **Product Focus, 2026 Survey of the Product Management Profession.** 677 respondents
  across 40 countries, collected October 2025 to January 2026. 83% Europe, 8% United
  States, 9% elsewhere. Every figure about the profession in this guide comes from this
  report. We are not affiliated with Product
  Focus and reproduce none of its charts.
  productfocus.com/product-management-resources/profession-survey
- **Microsoft**, product documentation, for Copilot licence tiers, grounding, data
  protection, file referencing, prompt structure and per-application features.
  learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-overview,
  /copilot/enterprise-data-protection, and the prompt guidance at
  support.microsoft.com/microsoft-365-copilot. Release notes, for what changes after
  this guide is printed: learn.microsoft.com/microsoft-365/copilot/release-notes
- **European Commission**, for the AI Act and the Article 4 AI literacy duty applicable
  since 2 February 2025.
  digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers

No figure in this guide is estimated, modelled or taken from a vendor's marketing
material. Where we give advice rather than a finding, it is written as advice.

### Notices

Microsoft, Microsoft 365 and Copilot are trademarks of Microsoft. Jira and Confluence
are trademarks of Atlassian. Other product names are the marks of their owners and are
used here only to refer to the products themselves. No affiliation or endorsement is
implied by any of them.

Figures from third-party research are quoted with attribution to make a point, and no
chart from any source is reproduced. Every graphic here was drawn from the cited
numbers.

Nothing in this guide is legal advice. Your organisation's own policies govern what you
may put into any tool.

[AUTHOR]

**If you have a question.** Whether it is about applying AI to your own working week, or
about support with software engineering, write to me at info@learnslice.com or find me
on LinkedIn at [linkedin.com/in/alesiakunz](https://www.linkedin.com/in/alesiakunz/).
