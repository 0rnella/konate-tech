+++
date = '2026-09-01T00:00:00+02:00'
title = 'Centralizing five apps and three cloud providers into one'
client = 'Doonya Labs'
role = 'Fractional technical lead (accountable owner)'
duration = 'Jun – Sep 2026'
summary = "DoonyaLabs' five products lived on three different cloud providers, deployed by hand. I designed and led the migration to a single, standardized Google Cloud platform."
stack = ['Google Cloud (Cloud Run, Cloud SQL, Cloud Storage)', 'Terraform', 'GitHub Actions', 'Django', 'React']

[[metrics]]
value = '40%'
label = 'cloud cost reduction so far'

[[metrics]]
value = '5 → 1'
label = 'providers consolidated to one'

[[metrics]]
value = '3'
label = 'providers replaced (AWS, IONOS, Linode)'
+++

## The problem

DoonyaLabs, a startup studio, was running five products — a construction-project
management platform, a real-estate listings site, an artist-merchandising workflow tool, and
more — scattered across three unrelated providers: AWS EC2, IONOS, and Linode. Deploys were
manual and ad-hoc, run through Coolify on whichever VPS happened to host that project.
Access permissions, backup policies, and logging were all handled differently per provider,
which made the setup both hard to secure and hard to reason about. All of it together cost the
studio over €1,000/month, with no unified way to see what was actually running or what it cost.

## What I did

I came in as the accountable technical lead on the project, partnering directly with
DoonyaLabs' engineering lead — his first time in a lead role — to turn a rough internal
proposal into an executable plan.

### Process

- **Coached the engineering lead through his first lead role.** Concretely: closing every
  meeting by naming who does what, by when, and with what result — a habit he found valuable
  enough to later write about publicly (see below).
- **Introduced a tech spec template**, so architecture and technical decisions get written down
  and reviewed before code, instead of reconstructed after the fact.
- **Pushed the team to standardize on one tech stack** across projects, and to prioritize
  rewriting the handful of outliers that had drifted onto something else for no strong reason —
  a deliberate call for a studio that runs several projects in parallel.
- **Made the architecture call.** The original proposal considered a VPS or hybrid setup. I
  pushed for a fully serverless, Google Cloud–native architecture instead — Cloud Run for
  compute, Cloud SQL for Postgres, Cloud Storage for files — because it meant centralized IAM
  instead of five sets of scattered logins, auto-scaling instead of always-on VPS capacity, and
  one console and one support line instead of five.
- **Sequenced the migration so it wouldn't stall.** Four phases — proof of concept,
  standardization, full migration, and process handoff — each with concrete exit criteria
  (deploy time under 20 minutes, test coverage above 60%, alerting within 5 minutes of
  downtime) instead of an open-ended "migrate everything" mandate.

### Outcomes & artifacts

- **A reusable application boilerplate** — infrastructure-as-code, CI/CD, and a test harness
  included — that DoonyaLabs now starts every new project from, instead of building it from
  scratch each time.
- **Automated CI/CD pipelines** (GitHub Actions + Cloud Build) and centralized secrets (Secret
  Manager), replacing manual, ad-hoc deploys.
- **One Google Cloud project per app**, each with its own staging and production environment,
  replacing three unrelated providers.
- **40% reduction in cloud costs** already realized, with the remaining migrations scoped and
  documented for the team to keep executing.

## Impact

- DoonyaLabs' engineering lead ran his first-ever lead role with a concrete, repeatable way to
  close out meetings — turning discussion into actual follow-through instead of another meeting
  next week about the same thing.
- As a consultancy that starts a new project for nearly every engagement, DoonyaLabs now does
  that from a standardized, secure boilerplate instead of a bespoke setup — turning what used to
  be days of setup into a template, on every project going forward.
- Automated testing and CI/CD are now the default way anything ships at DoonyaLabs, not an
  afterthought bolted onto whichever project needed it most urgently.

> "A meeting without action items is basically a waste of time."
>
> — Elisée Ouédraogo, Engineering Lead, DoonyaLabs, in a LinkedIn post on running effective
> meetings — a habit he built while working with Ornella on DoonyaLabs' cloud infrastructure

---

Facing a similar sprawl of infrastructure, providers, or ad-hoc deploys? [Let's talk.](mailto:ornella@konate.tech)
