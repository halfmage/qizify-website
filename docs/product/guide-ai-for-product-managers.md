<!--
INTERNAL HEADER, REMOVE BEFORE PUBLICATION
Status: draft audited 2026-09-15 for gaps, unverified statements, filler and
readability. Eleven fixes applied, including one factual misquote (SaaS misread as
software) and three claims asserted without evidence. Infographics not started.
Prompts: all 13 run against a capable model on realistic fixtures, twice.
Round one found 15 defects across both guides; round two confirmed every fix held
and surfaced smaller edges, mostly fixed counts and absolute bans, now also fixed.
Still blocking: none has been run on a real Copilot tenant, so per-app and per-tier
behaviour is unverified. 
Also blocking: the [signup] placeholder in Part 4 needs the real form, with a separate
unticked consent for the weekly. See ai-guide-probe.md section 9.
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

That gap is what this guide is about. Not how to write a clever prompt, but how to get
from working quicker to shipping something a stakeholder would notice.

![Faster but not better: 97% of product managers report improved personal productivity from AI, while 64% report improved product outcomes such as more revenue or faster time to market, a gap of 33 percentage points. Source: Product Focus 2026 Survey of the Product Management Profession, 677 respondents across 40 countries.](/images/blog/pm-outcome-gap.svg)

Every number here comes from one source: the Product Focus 2026 Survey of the Product
Management Profession, 677 respondents across 40 countries, collected between October
2025 and January 2026. Most respondents were in Europe, 83%, with 8% in the United
States. Anything about how Microsoft Copilot behaves comes from Microsoft's own
documentation and was checked in September 2026. We are not affiliated with either.

---

## If you only have twenty minutes

If you have barely used AI at work, skip this and read the next section instead.
Otherwise, read four things and stop.

1. **Your Copilot probably cannot see your work**, Part 0, item 2. Most people who
   think Copilot is useless are on a tier that cannot read their work.
2. **Give it your own material.** Rule 1. This is the difference between a generic
   answer and a useful one, and it is not about phrasing.
3. **Check it before it leaves you.** Rule 3. Numbers, names, and anything stated as a
   fact about a customer.
4. **One chapter**, whichever of the five describes your worst week.

Everything else is depth you can come back for.

---

## Half the profession is stuck in the same place

Half of the product managers in this survey who do not use AI say the reason is that
they are unsure how. More than either distrust it, at 33%, or cite legal and security
concerns, at 17%. Those three figures describe the minority who stay away, and the
report does not state how many people that is, so read them as a ranking of reasons
rather than as a precise count. The ranking is the useful part: not knowing how comes
first. If that is you, you are in the largest group, not behind it.

What the tool is, in two sentences: a system that predicts likely text from the text you
give it, trained on an enormous amount of writing. That is why it is fluent, why it is
useful on anything language-shaped, and why it will state something false with complete
confidence.

**Start here, once, this week.** Take a document you already wrote and know well. Ask it
to list the questions a sceptical reader would ask about it. You can judge that answer
immediately, which is the point of starting on work you already understand. Then read
the rest of this.

---

## Part 0: six things nobody told you

Six short sections before the guide proper. Each one takes a minute to read and heads
off a specific frustration that otherwise looks like your own fault.

### 1. Your best prompt might have been luck

Microsoft says it plainly in its own guidance: using the same prompt multiple times can
result in different responses. This is how the technology works, not a fault.

The practical consequence is the one people miss. **One good answer does not prove the
prompt was good.** It might have been luck. A prompt is only worth keeping once it has
produced a usable answer more than once, on different inputs. That is why Rule 4 exists.

### 2. Your Copilot probably cannot see your work

There are three tiers and they behave completely differently.

![What each Copilot tier can reach: Copilot Chat Basic reaches web data only; Microsoft 365 Copilot Basic reaches web data and works inside Word, Excel, PowerPoint and OneNote; Microsoft 365 Copilot Premium, the paid add-on, additionally reaches your own files and mail automatically through Microsoft Graph, limited to files you already have permission to open.](/images/blog/pm-copilot-tiers.svg)

The same thing in detail, including what each tier can reach and how:

| Tier | Can it see your files and mail |
|---|---|
| Copilot Chat (Basic) | No. Web data only. It sees your work only if you paste it, upload it, or have it open in Teams or Outlook |
| Microsoft 365 Copilot (Basic) | Not in chat. But Copilot works inside Word, Excel, PowerPoint and OneNote |
| Microsoft 365 Copilot (Premium), the paid add-on | Yes, automatically, through Microsoft Graph, and only for files you already have permission to open |

> **Field note.** The problem I actually ran into was a step earlier than any of this.
> Most of the team did not know we had Copilot licences at all. When they found out,
> the next question was not which tier they were on. It was what they were supposed to
> do with it on a Tuesday morning. Licences are the easy part to buy and the easy part
> to waste.

If you have asked Copilot "what did we decide in the roadmap review" and got nothing
useful, you are almost certainly not on the premium tier. That is a licensing fact, not
a skill problem.

**The model picker.** Copilot offers Auto, Quick response and Think deeper. Auto chooses
for you. Switch to Think deeper when the task is a judgment rather than a lookup, and
expect it to take longer on purpose.

**Grounding, which is the word for all of this.** Two sources feed any answer: the
public web, and your organisation's own content. Only the premium tier reaches the
second one by itself. Every other tier sees only what you hand it.

**Which tool, not which winner.** In this profession 66% of AI users use ChatGPT
regularly, with Copilot second, then Gemini, Claude and Perplexity. 22% use three or
more regularly, and 52% of ChatGPT users also use Copilot. Nobody getting value out of
this is loyal to one tool. They pick per task: the one that can see your work for
anything about your work, a general chat tool for thinking out loud.

**Before you look for a new tool.** Jira is recommended by 58% of this profession and
Confluence by 46%, so for most readers the product data already sits in tools that are
adding their own AI on top of it. Check what you already pay for before buying
anything new.

### 3. The four-part prompt Microsoft wrote and nobody reads

This is Microsoft's own framework, and it is a good one.

**Goal.** What you want.
**Context.** The situation, who it is for, what has already been decided.
**Expectations.** Format, length, tone, what not to do.
**Source.** Where it should get the material.

A thin prompt: *Summarise this feedback.*

The same prompt with four parts: *Summarise the customer feedback in the file below.
Context: I am preparing a prioritisation session for a B2B product and I need themes,
not individual complaints. Expectations: at most six themes, each with a count and one
verbatim quote, no recommendations. Source: only the attached file.*

The second one is not more clever. It is more specific about what you already know.

### 4. The one key most people never find

In Copilot, type `/` and start typing the name of a file, person, meeting or email.
You can attach a single file or a whole folder. Inside a SharePoint site you can
reference up to ten files or pages. Checked September 2026.

Most people paste content they could have referenced, and lose the formatting and the
source link doing it.

### 5. Where your prompts actually go

When you are signed in with your work account, prompts and responses are covered by
enterprise data protection, and Microsoft states they are not used to train the
foundation models. Access is scoped by your existing permissions, so Copilot cannot
show you a document you could not already open yourself. For users in the European
Union there are additional European Union Data Boundary safeguards.

**The caveat that matters.** All of that describes a work account signed in with your
company identity. A personal account is a different product with different terms. If
you are not certain which you are signed into, check before you paste anything that
matters.

This is practical guidance, not legal advice. Your company's own rules sit on top of it.

### 6. It will lie to you in your own house style

It will state things that are not true, confidently and in your own house style. Three
things need checking every single time:

- **Numbers.** Check every figure you did not give it yourself. It may have retrieved a
  real one, and it may have produced something that merely looks like one.
- **Names.** People, products, companies, competitors.
- **Anything stated as a fact about a customer.** This is the dangerous one, because it
  is the hardest to spot and the most expensive to act on.

Microsoft's own guidance says to review and verify responses. Take the vendor at its
word.

**What this looks like in practice.** You paste thirty support tickets and ask for the
themes. Back comes: "Customers consistently request single sign-on." You go looking, and
one ticket mentioned it once, as an aside. Nothing was invented exactly. A single signal
was promoted to a pattern, in confident language, in a sentence you could reasonably
paste into a roadmap review. That is the failure mode to expect. Not a made-up fact you
would catch, but a real thing overstated, reading perfectly.

![How a single signal becomes a false pattern: thirty support tickets go in, one of them mentions single sign-on once in passing, and the summary that comes back says customers consistently request single sign-on. One ticket in thirty, reported as consistent.](/images/blog/pm-signal-to-pattern.svg)

> **Field note.** In our work the failure is rarely an invented fact. It is a real
> number with no source behind it, delivered with total confidence. We catch these
> before they reach a presentation because we check the source every time, not because
> the output looks doubtful. It never looks doubtful. Human verification is not a
> nice-to-have step, it is the step.

**The decision aid.** Before you use an output, ask one question: *could I tell if this
were wrong?* If yes, use it and check it. If no, you are not the right person to accept
that output yet, and neither is the tool. Get it from someone who would know, or go and
find out. It is one question and it catches the outputs that are worth worrying about.

![A decision aid for AI output. Ask one question: could I tell if this were wrong? If yes, use it and check the three things that fail most often, which are numbers, names, and anything stated as a fact about a customer. If no, you cannot accept that output yet: get it from someone who would know, or go and find out.](/images/blog/pm-trust-decision.svg)

---

## Part 1: four habits that separate method from luck

Part 0 was how the tool behaves. These four are how you behave, and they are the whole
difference between an answer that worked once and a result you can repeat.

### Rule 1. Give it your own material

The difference between a generic answer and a useful one is almost always what you put
in, not how you phrase the question.

Paste the actual ticket, not your summary of it. The actual transcript, not your memory
of the call. The actual numbers, not "roughly a third". A model working from your
description of a thing is working from a copy of a copy.

### Rule 2. Know what must never go in

Among product managers who avoid AI, 17% name legal or security reasons. They are not
being irrational, they are being unspecific. Turn it into three questions you can answer
in a second:

1. **Which account am I in?** Work identity, or personal. See Part 0, item 5.
2. **Would I put this in an email to a supplier?** If not, it does not go in a chat
   window either.
3. **Is it someone else's personal data?** Customer names, recordings, support tickets
   with identities in them. Anonymise or do not paste.

Your company's policy overrides all three. If it has one, read it once, properly. If it
does not, ask whoever would own it.

### Rule 3. Check it before it leaves you

85% of this profession already validate AI output using their own expertise, so this
rule confirms a habit rather than introducing one. What most people do not have is a
consistent list. Use the three from Part 0, item 6: numbers, names and customer claims.

The moment that matters is **before it leaves you**, not before it ships. Once a
plausible wrong sentence is inside a document three other people have edited, it stops
being an AI problem and becomes a fact your organisation believes.

### Rule 4. Keep what works

The habit with the most compounding value, and the easiest one to skip.

When an answer comes out genuinely good, do not just use it. Save the prompt that
produced it, with the parts that change marked in square brackets, in whatever you
already use: a note, a Confluence page, a pinned message. Next time the same job takes
a minute instead of twenty.

---

## Part 2: five places where AI is worth the time

Rules are easy to agree with and easy to forget. Here they are in the five places a
product week actually bends, ordered by how much the profession says each one hurts, so
firefighting comes first.

### Chapter 1. Why Wednesday never looks like Monday's plan

**The need.** You planned the week on Monday and by Wednesday you are working on none of
it.

**The number.** 60% of product managers say unplanned work frequently disrupts their
schedule. Firefighting heads the survey's list of the big issues the profession faces,
ahead of lack of resource and weak or missing company strategy.

**Where it genuinely helps.**
- Turning fifty inbound requests into six themes, so the argument is about categories
  rather than tickets.
- Drafting the reply that declines a request and still explains the reasoning. This is
  the message most people avoid writing, and therefore never send.
- Capturing a corridor decision into three lines that go into the ticket before it
  evaporates.

**What it cannot do.** It cannot reduce the number of interruptions. Firefighting tracks
the environment, not the person: in this survey automotive reported 76% while SaaS
reported 57%. If you are interrupted constantly, the fix is a conversation with your
manager about routing, and no tool substitutes for it. What you can change is how much
of your week each interruption costs after it arrives.

**One prompt.** Works on any tier, because you paste the content in.
```
Goal: group the requests below into at most six themes.
Context: these are [N] requests that came to me this week as a product manager for [product].
Expectations: for each theme give the theme in one line, how many requests it covers, and the single question I would need answered to decide what to do about it. If a request fits no theme, list it separately as unthemed rather than forcing it into one. Do not suggest solutions. Quote the requests, do not paraphrase them.
Source: only the text pasted below.

[paste the requests]
```

**Your first step, under fifteen minutes.** Take this week's inbound, in whatever form it
is in, and run that prompt once. If the six themes come out wrong, that tells you
something too. Usually it means the requests are not really requests, they are
escalations.

### Chapter 2. You know the product better than the people using it

**The need.** Every call you make is a guess about someone you have not spoken to in
weeks.

**The number.** 71% of product managers say they do not spend enough time with customers
or understanding the market. It is worse the more senior you get: 75% among heads and
directors, against 59% among junior product managers.

![Customer time gets worse with seniority: 59% of junior product managers say they do not spend enough time with customers, 71% across the whole profession, and 75% among heads and directors. Source: Product Focus 2026 Survey of the Product Management Profession, 677 respondents across 40 countries.](/images/blog/pm-seniority-inversion.svg)

**Where it genuinely helps.**
- Turning interview recordings or notes into themes with the original quotes still
  attached, so you can check the theme against the words.
- Sharpening the questions before the interview, which is the single best use of AI in
  discovery. Take your assumptions to the model, let it pull them apart, then take the
  better questions to a real person.
- Finding the contradictions between what two customers told you.

**What it cannot do, and this one is serious.** It cannot talk to a customer for you, and
it must never be used to invent one. Asking a model to "act as our typical user" and
answer your questions produces fluent, confident, plausible fiction. It is the single
most damaging misuse available to this profession, because the output looks exactly like
research and carries none of the risk that real research carries: the risk of being
told you are wrong.

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
even rough notes, and run it. Take the contradictions to the team. They are where your
roadmap is quietly wrong, and nobody can see that from a summary.

### Chapter 3. Everything is important, and that is the problem

**The need.** You cannot say no, because there is nothing concrete to say no against.

**The numbers.** 33% of product managers report a weak or missing company strategy. 34%
have no clear primary metric they are accountable for. Those two travel together:
product managers who report a weak company strategy are 15 percentage points more likely
to lack a primary metric, 44% against 29%. It is difficult to prioritise if nobody has
defined what winning looks like.

**Where it genuinely helps.**
- Turning a vague strategy statement into a written test you can actually apply, with
  the questions it would have to answer to decide a real case.
- Making the trade-off in a decision explicit, so the thing you are giving up is on the
  page rather than discovered later.
- Arguing the other side of your own case before somebody else does it in the meeting.

**What it cannot do.** It cannot supply the strategy. It will happily generate a
plausible one, and that is the trap: a fluent strategy nobody agreed to is worse than an
admitted absence, because it ends arguments that needed to happen. Use it to sharpen a
strategy that exists, or to make the absence of one visible. Never to fill the hole
quietly.

> **Field note.** What unblocks this in practice is not a better strategy document. It
> is alignment with the handful of stakeholders who actually decide, and a
> prioritisation matrix that puts effort against business value so the trade-off is
> visible. AI helps on both sides of that: it clusters the topics so you have
> something concrete to argue about, and it sharpens the questions you need to ask to
> place each item.

**One prompt.**
```
Goal: turn the strategy statement below into a prioritisation test, as far as the statement supports one.
Context: I need to decide between competing requests and I want a test I can apply consistently and defend in a meeting.
Expectations: up to five questions, each answerable yes or no about a specific request. Write only questions the statement actually supports. If it supports fewer than five, say so rather than filling the gap. Then tell me which parts are too vague to generate a question from, and why.
Source: only the statement below.

[paste your company or product strategy as written]
```

**Your first step.** Run it on your actual strategy, then apply the five questions to the
two requests currently competing for the same sprint. The list of what was too vague to
test is the more valuable half of the output, and it is the thing to bring to your
manager.

### Chapter 4. Most of your week is writing nobody acts on

**The need.** Most of the job is writing, and most of the writing is read by someone who
has thirty seconds.

**The number.** Asked which activity they spend the most time on, 56% of product
managers name inbound activities, against 25% naming strategic activities and 19%
outbound. A great deal of that inbound work is documents, updates, tickets and mail.

![Which activity product managers say they spend the most time on: 56% name inbound activities, 25% name strategic activities such as deciding the right problems and products to pursue, and 19% name outbound activities. Source: Product Focus 2026 Survey of the Product Management Profession, 677 respondents across 40 countries.](/images/blog/pm-where-the-week-goes.svg)

**Where it genuinely helps.**
- The second draft, not the first. Write the bad version yourself in five minutes, then
  hand it over to be tightened. The first draft carries your intent and that is the part
  a model cannot guess.
- Compressing a long document down to the decision it is asking for.
- Rewriting one update for three audiences, because the engineering version and the
  executive version of the same news are genuinely different documents.

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
next two years, data analysis and literacy was named second among hard skills, behind
only AI proficiency itself.

**Where it genuinely helps.**
- Drafting the query or the formula, which is a language problem more than a maths one.
- Listing the plausible explanations for a movement, including the boring ones like a
  reporting change or a seasonal effect, so you walk in having ruled things out.
- Telling you what is missing from an analysis before you present it, which is a much
  better use than asking it to do the analysis.

**What it cannot do.** It cannot be trusted on arithmetic, and it cannot be trusted on
any number it was not given. Every figure that leaves you is yours, not its. If you did
not check it, you did not say it, you repeated it.

**One prompt.**
```
Goal: list the plausible explanations for the change below.
Context: [metric] moved from [x] to [y] between [date] and [date] for
[product]. Known changes in that window: [releases, campaigns, pricing,
seasonality, reporting changes].
Expectations: rank the explanations by how easily each could be checked, cheapest first, and for each name the exact check. Include mundane explanations such as instrumentation or reporting changes. Do not calculate anything I have not given you.
Source: only what I have written above.
```

**Your first step.** Take the last metric movement you had to explain and run it. If the
cheapest check on the list is one nobody ran, that is your meeting.

### Back to the gap

Five chapters in, it is worth returning to the number this guide opened with. In the
survey's own words, 97% report improved productivity and only 64% report improved
product outcomes, such as faster time to market. That missing third is not a mystery,
and it is visible in the five chapters you just read.

AI does two different things in a product week. It changes how fast you produce the
work, which is Chapter 1 and Chapter 4: themes instead of a pile, a second draft instead
of a blank page, one update rewritten three ways. And it changes what you decide, which
is Chapter 2, 3 and 5: the question you had not thought to ask before the interview, the
test that lets you say no, the explanation you ruled out before the meeting.

Only the second kind moves the product. If you use it for drafting alone you will land
squarely in the 97% and your roadmap will look exactly as it did before.

That is why no prompt in this guide hands you a finished artefact. Every one of them
returns something you still have to decide: themes and the question behind each, the
objections to your own case, the parts of a strategy too vague to test, the
explanations ranked by which is cheapest to rule out. The output is not the work. It
is the thing you take into the room where the work gets decided.

---

## Part 3: the prompt pack

Every prompt below uses the four parts from Part 0, item 3. Square brackets
mark the parts you change. Each says what it needs, and "any tier" means it works even
on Copilot Chat (Basic), because you supply the content yourself.

#### Copilot Chat, any tier

Theme a pile of requests: see Chapter 1.

**Argue the other side.**
```
Goal: make the strongest case against the decision below.
Context: [decision], [what it costs], [who disagrees].
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

Draft the decline: see Chapter 1.

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
Expectations: a table of commitment, owner, date. Anything without a named owner goes in a separate list titled unassigned. Do not invent owners or dates.
Source: this meeting only.
```

**Get what was left unresolved**, which the standard recap tends to leave out.
```
Goal: list what this meeting did not settle.
Expectations: open questions and disagreements only. Do not summarise what was agreed. Name who raised each one. Where something is plainly unresolved but nobody raised it, list it and say nobody did.
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
Goal: turn the decision document below into slides.
Expectations: slide one states the decision the document asks for, and its recommendation if it makes one. Then one slide per argument the document actually contains, up to five in total. Do not pad to reach five. No slide with more than three bullets.
Source: only the document below.
```

---

## Part 4: staying current on thirty minutes a week

93% of this profession say they want to learn more about AI tools. The obstacle is not
appetite. 48% say a lack of budget prevents them getting training and 23% say there is
no management support for it, and only 32% rate the development opportunities at their
organisation as better than average.

So here is a routine that costs nothing and needs nobody's approval.

If your company has deployed nothing at all, it still works. Use a free tier with a
personal account, never put company material into it, see Rule 2, and practise on public
material or your own writing. The habits transfer. The grounding does not.

### Thirty minutes a week

![A thirty minute weekly routine that costs nothing: ten minutes checking one source for what changed, fifteen minutes redoing a real task from your own week with the tool so you can judge the output, and five minutes writing down what worked and what did not.](/images/blog/pm-thirty-minutes.svg)

**Ten minutes, what changed.** Check one source from the list below. Not all of them,
one, rotating.

**Fifteen minutes, on your own real work.** Take a task you did this week and do it again
with the tool. Not an exercise, the actual task, where you already know what good looks
like. This is the only way to tell whether the output is any good, and it is why
learning on your own work beats any course.

**Five minutes, write it down.** One line in your saved prompts: what worked, what did
not. This is Rule 4, and it is what turns thirty minutes into something cumulative.

### Where to look, and how often

| Question | Source | How often |
|---|---|---|
| What changed in Copilot | Microsoft 365 Copilot release notes on Microsoft Learn, and the Microsoft 365 roadmap | Monthly |
| What changed in the models | The providers' own release notes and model cards | When something ships |
| What changed in my profession | The Product Focus annual survey, the source of this guide | Yearly |
| What changed in the rules, in the EU | The European Commission's AI Act pages. The AI literacy duty in Article 4 has applied since 2 February 2025 | Quarterly |

One policy worth adopting: **do not treat vendor blogs, news aggregators or social
threads as primary sources.** Every number in this guide had to survive being traced back
to the organisation that published it. Most of what circulates does not survive that.

### The weekly

If you would rather not do the first ten minutes yourself, we do it and send one email a
week. One change that matters and what to do about it, one prompt of the week, one thing
worth reading and why, and one line on what we got wrong the week before. Five minutes.
Unsubscribe whenever.

Sign up at learnslice.com/ai-guides. If this was forwarded to you, that is also
where the other guide is.

[signup]

---

## If you lead a product team

41% of respondents manage a team of product people, so this section is for a large
minority of readers.

Product leaders in the survey were asked what actually embeds new product skills and
behaviour in the workplace. Standard tools and templates came first, named by 69%,
ahead of structured meetings between line managers and product managers, and ahead of
standardised training for teams. Developing a prioritised plan after training was named
by 33%.

The survey's own conclusion is the useful part: the best results need all three
elements together, training and tools, structured manager conversations, and an
activation plan after the training. Most organisations do the first and skip the third.

![What embeds a new product skill: standard tools and templates named first by 69% of leaders, then structured conversations between line managers and product managers, then an activation plan after the training. All three together, and only 33% of leaders run the third. Source: Product Focus 2026 Survey of the Product Management Profession.](/images/blog/pm-embedding-a-skill.svg)

> **Field note.** Adopting any new tool needs a phase where people have dedicated time
> to learn it, try it and work out where it fits. If the organisation expects the normal
> workload alongside that, there is no time to experiment and the practice dies quietly.
> The other half is measurement. Telling a team to play around with an AI tool, without
> saying how adoption and results will be measured, leaves you with no way to tell
> afterwards whether it stuck. Give the time, and set the KPI before you start.

Three practical moves, in that order:

1. **Make the prompt pack the team's shared templates.** Not a document nobody opens, a
   place where anyone can add one that worked. This is the 69% finding applied.
2. **Put one question in the one to one.** "What did you try with AI this month and what
   came out wrong?" The second half is what makes it safe to answer honestly.
3. **Run a four week activation plan after anyone learns anything.** Week one, everyone
   picks a recurring task. Week two, they do it with the tool and keep the prompt. Week
   three, prompts go into the shared place. Week four, one person shows what did not
   work. This is the element only a third of leaders have.

If you want the four weeks run for the team rather than assembled by you, that is what
the last page is about.

One last thing. Chapter 2 showed that the customer-time deficit is worst at your level,
not your team's. Whatever the three moves above free up, that is where it should go.

---

## Sources

Every source below was checked on 17 September 2026 and resolves. Nothing here is
second-hand.

- **Product Focus, 2026 Survey of the Product Management Profession.** 677 respondents
  across 40 countries, collected October 2025 to January 2026. 83% Europe, 8% United
  States, 9% elsewhere. Every figure about the profession in this guide comes from this
  report, read in full, not from a summary of it. We are not affiliated with Product
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

## What we do

Nothing before this page was an advertisement. This page is, and it is the only one.

You have just read twenty-odd pages on what these tools do and what they do not. Knowing
that line is our work. Three of the problems in this guide are ones we get asked to
solve, and they do not have the same answer.

**Your team has the tools and no method.** This guide opens with the finding that the
most common reason a product manager has not taken this up is not distrust or legal
risk. It is not knowing how. A workshop is the fastest way to close that: a day on your
own backlog, tickets and documents. Your team arrives with the work it is behind on and
leaves having done some of it, holding prompts it keeps and a rule for what may go into
which tool.

**You want it to hold, and to know whether it did.** A workshop teaches. Six months
later, nobody can tell you who changed how they work. Making it stick is the activation
plan only a third of leaders run, and knowing whether it stuck needs a record. AI Mentor
is what we are building for both, with content matched to your sector. It is in pilot
with paying customers rather than on general release, so teams joining now shape it.

**The tool cannot see your work.** Every chapter above names a limit you have to live
with: it cannot supply your strategy, talk to your customers or know what you meant.
Part 0, item 2 named one you do not. Your Copilot probably cannot read your tickets,
your documents or your decisions, and that is an engineering problem rather than a fact
of life. We build the layer that closes it, grounded on your own content, hosted in the
EU or on your own infrastructure.

**Why us rather than a consultancy.** Grounding, verification and what may legally go
into a prompt were engineering constraints for us before they were chapters in this
guide. LearnSlice is co-developed with the IDiAL institute at Fachhochschule Dortmund,
and funded by the German Federal Ministry for Economic Affairs and Energy under grant
16GM200302. In a university pilot, every answer the system produced was traceable to a
source. Learner data is hosted in Germany and is never used to train the model.

You already told us which of the three, if any, was worth a conversation, and we come
back on that one only. If this guide was forwarded to you, learnslice.com/ai-guides is
where to say which one applies.
