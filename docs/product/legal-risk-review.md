# Legal and privacy risk review: the two AI guides

**Date:** 2026-09-17
**Scope:** both guides, their figures, the download page and the form.
**Reviewer:** not a lawyer. This is a risk sweep to tell you where to spend counsel
time, not legal advice. Items 1 and 2 should go to counsel before publication.

---

## 1. The heaviest exposure: Product Focus is a competitor

**What we do.** Both guides, and the download page, rest on 28 figures extracted from
the Product Focus 2026 Survey of the Product Management Profession. It is the entire
statistical spine of the product manager guide.

**Why that is riskier than it looks.** Product Focus is not a neutral research body. It
is a product management training company. Its own navigation lists training courses
including "AI-Powered Product Management", private team training and leadership
support. So LearnSlice is publishing a free guide about AI for product managers, built
on a competitor's survey data, ending in an advertisement for LearnSlice's own AI
academy and custom development.

That is the fact pattern a competitor complains about, and it turns a copyright question
into a competition-law one as well.

**The legal surface, in order of likelihood.**

- **Database right.** In the EU, a database maker has a right against extraction of a
  substantial part of the contents, and against repeated extraction of insubstantial
  parts. Individual facts are not protected by copyright, but a systematic take of 28
  figures from one report is exactly what this right exists for. Germany implements it
  at sections 87a to 87e of the Copyright Act.
- **Quotation right.** The counter-argument. Quotation is permitted where it supports an
  argument, is proportionate, and names the source. The guides attribute heavily and
  every figure is used to make a point rather than to reproduce the report. This is the
  strongest defence and it is why the guides should keep doing exactly that.
- **Unfair competition.** Under the German Act Against Unfair Competition, exploiting
  another trader's work product can be unlawful in some circumstances. A training
  competitor might argue the guides ride on their research investment.

**What reduces it, already in place.** Every figure is attributed in the body and again
on the sources page. No chart of theirs is reproduced; all ten figures were drawn from
scratch. The guides state they are not affiliated. The report is named as the source on
the cover, not buried.

**What I recommend.**

1. Put this in front of counsel before publication. It is the one item where the answer
   changes what you ship.
2. Consider reducing the Product Focus figure count in the product manager guide and
   leaning harder on Eurostat, the IAB and the OECD, which are public bodies whose
   statistics carry no competitive sting and, in the case of Eurostat, an explicit reuse
   policy. The product owner guide has already been rebuilt this way.
3. Never reproduce their charts, their wording at length, or their Product Activities
   Framework.

## 2. The Scrum Guide licence is not being complied with

**Concrete and fixable today.** The Scrum Guide is published under Creative Commons
Attribution ShareAlike 4.0. Its own notice says that by using it you agree to be bound
by that licence. The product owner guide quotes it eleven times and structures its
entire Part 2 around its accountabilities, and currently credits it only as a URL.

Attribution under that licence needs the title, the authors, and a link to the licence.
Applied below.

**The open question for counsel:** ShareAlike applies to adaptations. Quoting with
attribution is normally not an adaptation, so the guide should not have to be released
under the same licence. Given how heavily Part 2 leans on the structure, this is worth
a short opinion rather than an assumption.

## 3. Privacy: the form is live-ready and the policy has not caught up

**This is the item with regulatory rather than civil exposure**, and it has been open
since the download page was built.

The page collects a work email, country, role, a required qualifying answer, a marketing
consent and a storage consent. The privacy policy does not mention the guide download,
the qualifying question or the weekly list. Under the GDPR the purposes, legal basis,
retention and recipients have to be stated before collection begins.

**Addressed 2026-09-17.** Both language versions of the policy now carry a section on
the guide download: what is collected, why, the legal basis for each purpose, that the
service question is treated as a request only where the reader selects a service, the
separate consent and withdrawal route for the weekly update, Netlify named as processor,
and a stated retention period of two years. The English retention clause previously tied
everything to having an account, which was wrong for someone who only downloaded a
guide, and now carves out the stated periods.

Still worth a short review by counsel, since a privacy notice is the one document where
a reviewer is cheaper than a complaint.

## 4. The field notes: currently safe, and one rule to keep them that way

No note names an employer, a client, a colleague or a project. The two that come closest
are the licence story, which says only "we", and the client-assumption note, which says
"the assumption we meet most often". Neither is traceable, and a reader takes "we" to
mean LearnSlice.

**The rule for any future note:** no employer identifiable by name, sector plus size,
timeframe, or any combination a reader could resolve. Nothing negative about a named or
identifiable third party. Nothing that could be confidential to a former employer,
including internal tooling decisions, headcount, budgets or client names. The existing
notes pass. The risk is in the next one.

## 5. Statements about named products

The guides say a reader's Copilot probably cannot see their work, that a connector can
be present and still return nothing for a project, and that AI will state falsehoods
confidently. All three are true and sourced: the first two to Microsoft's own
documentation, the third to Microsoft's own instruction to review and verify responses.

Two points of care.

- The chapter title "It will lie to you in your own house style" says "it", meaning AI
  generally, not a named product. Keep it that way. If it ever named Copilot it would
  become a disparagement question rather than a rhetorical one.
- The Jira field note makes a negative factual claim about how two named products behave
  together. It is the author's direct experience and she has verified the menu path. Keep
  it framed as experience, which it is, rather than as a general product defect.

## 6. Trademarks and images

Microsoft, Copilot, Microsoft 365, Jira, Confluence, Azure DevOps, ChatGPT, Gemini,
Claude, Perplexity and Scrum are all third-party marks used to refer to the products
themselves, which is ordinary nominative use. A short notice is added below.

The cover photograph is from Pexels, whose licence permits commercial use and
modification without attribution. Two conditions matter and both are met: the people
shown are not presented as endorsing anything, and the context is not defamatory. Keep
it that way if the image is ever reused.

The author portrait was supplied by the author, who is its subject.

## 7. Claims about our own services

**Checked 2026-09-17. One claim was untrue as written and is corrected.**

The closing page said that running the guide's routine across a team "is what AI Mentor
does" and that it is "the same discipline as this guide, delivered as a product". The
grant documentation in this repository puts AI Mentor at TRL5 with paid
proof-of-concepts running, and a roadmap to take it from TRL5 to TRL7 during a project
beginning September 2026. TRL5 is validation in a relevant environment. It is not a
product on general release.

Presenting it as one is the kind of statement covered by section 5 of the German Act
Against Unfair Competition, which deals with misleading claims about the nature and
availability of a product, and it is the sort of thing a competitor reads closely. The
more immediate cost is simpler: a reader who asks to buy it would find something other
than what the sentence promised.

It now says we are building AI Mentor to do this, that it is in pilot with paying
customers rather than on general release, and that a conversation now still shapes what
it becomes. That is true, and it is a stronger line, because early access is concrete
where "delivered as a product" is not.

The second claim, that we build a grounded layer on a company's own content, is
supported: there is a custom development service line, a solutions hub, and published
work on retrieval and self-hosted open models. But it promised hosting "where the
company needs it hosted", which is an unqualified promise. It now says hosted in the EU,
or on your own infrastructure where that is the requirement.

**For the author to confirm before publication.** Whether AI Mentor is still at pilot
stage at the time of publication, and whether naming the number of paid pilots would be
a stronger line than the general wording used here. Specific and checkable usually beats
general, but those figures came from grant paperwork and are the author's to disclose,
not mine.

---

## Priority

| # | Item | Action | Who |
|---|---|---|---|
| 1 | Product Focus extraction and competitor status | Opinion before publication | Counsel |
| 2 | Scrum Guide ShareAlike attribution | Attribution applied; scope question open | Applied, counsel to confirm |
| 3 | Privacy policy does not cover the form | Applied in both languages; counsel to confirm | Applied |
| 4 | Legal notice absent from the guides | Applied below | Applied |
| 5 | Future field notes | Rule recorded | You |
| 6 | Service claims on the closing page | One was untrue and is corrected; author to confirm current stage | Applied |
