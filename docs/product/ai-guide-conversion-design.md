# Turning the guides into two business conversations

**Date:** 2026-09-15
**Question:** the guides are gated. How do they lead to a workshop with a team, to
AI Mentor being used as an AI academy, and to LearnSlice building AI automation and
software.
**Short answer:** not by adding a pitch to the guide. By letting the guide's own limits
create the question, and by routing three different readers to three different exits
placed after the content, not inside it.

**Revised 2026-09-17.** The closing page has been removed from both guides. It briefly
carried three offers, then the credentials behind them were cut, and then the page
itself. The guides now end on the author card and a single contact line: info@learnslice.com
and linkedin.com/in/alesiakunz, for applying AI to daily work or for software
engineering support.

What this means for the rest of this document: sections 3 and 6 describe exits inside
the guide that no longer exist. The download form still asks the qualifying question and
still carries four options, so the probe signal in section 7 is intact. The guide no
longer does any routing of its own. Everything below is kept as the record of what was
tried.

---

## 1. The tension, stated plainly

The guides work because they sell nothing. That is what makes a product manager forward
one to a colleague, and forwarding is the only distribution we have, since roughly 90%
of current search impressions are German apprenticeship queries and there is no
international authority to trade on.

Bolt a pitch into the body and three things happen at once. The forwarding stops. The
probe signal dies, because download rate stops measuring interest in the content. And
the sourcing discipline that the whole thing rests on starts to look like set dressing
for a sales document.

So the rule is: **the body sells nothing, and the offers sit after the Sources page.**
The reader reaches them having already seen the guide deliver on its promise.

## 2. The bridge already exists, and we did not put it there on purpose

Every chapter in both guides ends with what the tool cannot do. Read those limits
together and they say one thing:

- Copilot cannot see your work unless you are on the premium tier.
- If your backlog is in Jira or Azure DevOps, no tier reads it automatically.
- A model that has never met your customers cannot order your backlog.
- It cannot search your own material to answer a question about it.

**Every one of those is a grounding problem, and grounding is what LearnSlice builds.**
That is not a pitch we have to invent. It is the conclusion a reader reaches on their
own by page eight, which is the only kind of conclusion worth anything.

The same argument is already written up for a different audience in the AI tutor on an
existing LMS work: the built-in feature summarises what is on the page, and answering
questions from your own corpus is added on top rather than switched on inside. The
guides arrive at the identical insight through the reader's own frustration.

## 3. Two readers, two exits

One guide, two destinations, decided by who the reader already told us they are. Both
context questions already exist in the probe.

| Reader | Signal we already collect | Exit |
|---|---|---|
| Has the tools, no method | Any role, workshop selected | **A day with the team on their own backlog** |
| Leads a product team | Role is Head of Product, Director, VP or CPO | **AI Mentor as an academy for the team** |
| Individual whose blocker is data | Free text names "it cannot see our tickets, our docs, our backlog" | **Custom build: grounding on their own material** |
| Everyone else | None of the three | **The weekly. No ask at all.** |

### The academy exit is already written

The leader block in the product manager guide gives away the four-week activation plan
and cites the survey finding behind it: embedding a skill needs standard tools and
templates at 69%, structured manager conversations, and a post-training activation plan
that only 33% of leaders run. We hand them the plan for free.

The offer is the obvious next sentence: running that for a team, at scale, with content
matched to their sector, is what AI Mentor does. No claim needs inventing. The guide has
already demonstrated we know what we are talking about, and 41% of the profession
manages a team of product people, so the audience is there.

### The custom build exit is the limits, collected

One short section after Sources, titled for what it is: when the limit is the tool and
not you. It restates the four limits the reader has already met, says in two sentences
what changes when a model can read your own material, and offers a conversation. No
case study, no logos, no claim about outcomes we have not measured.

## 4. The gate: make the qualifying question mandatory, not the consent

**Decision: instant download, a short required form, and the yield comes from a
question rather than a checkbox.**

### Can the contact checkbox be mandatory?

Not cleanly, and not in Germany. Advertising email to a business contact needs prior
express consent under UWG section 7, and the existing-customer exception does not cover
someone who downloaded a guide. Consent under the GDPR also has to be freely given, and
a tick you cannot proceed without is the weakest possible version of that. It is
legally fragile, it is the kind of thing a competitor complains about, and it suppresses
the download rate so you can no longer tell whether the content worked.

**But you do not need it**, because the thing you actually want is not permission to
email. It is knowing which of the two offers a reader wants. That can be required, it is
an ordinary form field rather than a consent, and it is worth more.

### The form

Four required fields, one optional. Submit reveals the download immediately and sends a
copy to the address given.

| Field | Why | Required |
|---|---|---|
| Work email | Sends the copy, and identifies the account | Yes |
| Role | Routes to the workshop, the academy or the build conversation | Yes |
| Country | Decides whether the build conversation is even offerable. See section 5 | Yes |
| **"Which of these would actually help you?"** | **The yield.** See below | Yes |
| "Send me the weekly update" | Marketing consent, unticked, confirmed opt-in | No |

### The question that does the work

> **Which of these would actually help you?**
> - A workshop with my team, on our own backlog, to find how these tools actually fit our work
> - An AI academy for my team, with our own content and a record of who learned what
> - Software that works on our own data, because the tools we have cannot see it
> - None of these for now, I just want the guide

This is the whole lead magnet. It is mandatory without being a consent. It tests all three
business lines from day one, on every single download, in the reader's own words rather
than ours. The workshop sits first deliberately: it is the smallest commitment and the
likeliest first yes, and it is the natural entry to the other two. And the three
non-neutral answers are **inbound requests**, not cold contacts:
someone who selects one has asked about a service, and replying to a request is a
different act from marketing at a stranger. That is a far stronger position than a
coerced tick would have given you.

Expect most people to choose the third option. That is the point. The ones who do not
are the list, and it is a list where every name raised their hand.

### Why instant download and not email-only

Holding the file hostage buys a marginally more accurate email address and costs
downloads, shares and goodwill. Give the file immediately and email a copy anyway. Most
people give a real address because they want the copy, and the ones who do not were
never going to answer a sales mail. Sharing the link is distribution, not leakage.

Put the PDF at an unguessable path so the form is not trivially bypassed from the
public site, and accept that a determined person will pass the link to a colleague.
A colleague reading it is the outcome you want.

## 4a. Delivery: do not attach the PDF, and do not send from the main domain

Checked against the live DNS for learnslice.com on 2026-09-15.

### What exists today

| Record | Value | Meaning |
|---|---|---|
| MX | Zoho EU | Mailboxes are on Zoho, EU region |
| SPF | `v=spf1 include:zoho.eu ~all` | Only Zoho may send. Any transactional provider fails SPF |
| DKIM | `zmail` selector present, duplicated under `selector1` | Zoho signing works. The duplicate is clutter |
| DMARC | `p=none`, reports to an address at ironum.com | Monitoring only, and see the gap below |

**The DMARC reporting is not working.** When the report address sits on a different
domain from the policy, that domain has to publish an authorisation record, and
`learnslice.com._report._dmarc.ironum.com` does not exist. Most reporters will refuse to
send. So there is currently no visibility into who is sending as this domain. Fix that
first, because everything else here is guesswork without it.

### Three decisions

**1. Link the PDF, never attach it.** Each guide is around 800KB. Attachments on bulk
mail are a long-standing spam signal, corporate gateways strip or quarantine PDFs, and
the file cannot be corrected once it has left. A link can be updated, and it tells you
who actually opened the thing.

**This settles the download question.** If the email contains a link anyway, the instant
download is strictly better for the reader and the email becomes the receipt and the
second touch rather than the delivery mechanism. Keep both.

**2. Netlify Forms cannot do this on its own.** It notifies the site owner on
submission. It does not send a custom message to the person who filled the form. That
needs a Netlify Function calling a transactional provider, which is an afternoon of
work, not a project.

**3. Send from a subdomain, not the root.** Something like `mail.learnslice.com`.
Reputation for the guide and the weekly then stays separate from the Zoho mailboxes
carrying real business correspondence, so a bad week on the newsletter cannot damage
the mail a customer sends you. Publish the provider's SPF include and DKIM on that
subdomain, and give it its own DMARC record.

### The checklist before the first send

- Publish the external reporting authorisation so DMARC reports actually arrive, or
  repoint `rua` to an address on learnslice.com
- Pick the sending subdomain and set SPF, DKIM and DMARC on it at the provider
- Keep the weekly and the guide delivery as separate streams, so a marketing complaint
  rate cannot sink the transactional send
- One-click unsubscribe on the weekly, required by the large mailbox providers
- Move the root DMARC from `p=none` toward `p=quarantine` once reports are visible
- Remove the duplicate `selector1` DKIM record if it is a leftover

At probe volumes, a few hundred messages, the strict bulk-sender thresholds do not
apply. Authentication still does, and it is the part that decides the inbox.

## 5. The warning that matters most

**The custom build exit will mostly produce leads you cannot serve.**

The 2026-07-06 ICP validation demoted cold international motions and put the business on
DACH warm referrals. The guide audience is international and 83% European, but European
is not German-speaking. A product manager in Warsaw or Lisbon who names a grounding
problem is a genuine signal about the product and not a workable lead for a German
custom-engineering shop selling on proximity and trust.

So: **show the custom build exit only to respondents in DACH.** Country is already a
required context question in the probe, and the guide is delivered by email, so the exit
can be a line in the delivery mail rather than a page in the PDF. Everyone else sees the
academy exit or the weekly.

This costs nothing and stops the pipeline filling with names nobody will call.

## 6. What actually changes in the guides

Small, and all of it after the Sources page.

1. **One page titled "What we do", after Sources**, in both guides. Three blocks named
   from the reader's problem rather than our service: no method, it did not hold, the
   tool cannot see the work. Each maps to one offer, and each cites a finding the guide
   has already proved. Closed by a short credentials block using only what is already
   public on learnslice.com/research. It must fit one page.
2. **One sentence in the leader block** of the product manager guide, pointing at the
   academy block. Not a pitch, a pointer.
3. **Delete the line that says the guides sell nothing**, because after this they do,
   once, at the end. Replace it with something true: nothing before the Sources page is
   an advert.
4. **The delivery email carries the routing**, not the PDF. Same attachment for
   everyone, different second paragraph by role and country.

## 7. What to measure

The probe thresholds stand. Add three.

| Signal | What it tells you |
|---|---|
| Split across the three offers | Which business line the audience actually wants first |
| Share picking the workshop | Appetite for a paid day, the cheapest thing we can sell |
| Share picking the academy | Real academy demand, separated from polite interest |
| Free-text answers naming a data or integration limit | Custom build demand, and what to build |
| Share of those who are in DACH | Whether the custom build exit is worth keeping at all |

Read the workshop share against the academy share rather than on its own. If the
workshop takes most of the interest, the academy is not wrong, it is too large a first
step. If the academy box is ticked by fewer than one in ten, the academy framing is
wrong rather than the market. If free text rarely mentions data or integration limits, the grounding
bridge in section 2 is our argument and not theirs, and it should be dropped rather than
pushed harder.

## 8. What not to do

- Do not follow up by phone on a guide download. The permission was for an email.
- Do not put a case study, a logo wall or a testimonial in the guide. Every one of them
  costs more credibility than it buys with this audience.
- Do not write a separate sales version of the guide. Two versions become two sources of
  truth and the honest one always loses.
- Do not sell AI Mentor as an AI academy anywhere the sovereignty and EU hosting
  arguments are the lead. They are a procurement gate in DACH and close to worthless
  elsewhere, which the ICP validation already established.
