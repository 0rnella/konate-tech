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

DoonyaLabs, a startup studio, was running five products on three unrelated cloud providers:
AWS EC2, IONOS, and Linode. The lineup included a construction-project management platform
and a real-estate listings site, among others. Deploys were manual and ad-hoc, run through
Coolify on whichever VPS happened to host that project. Access and backup policies differed by
provider, and there was no unified logging, which made the whole setup hard to secure and hard
to reason about. All of it together cost the studio over €1,000/month, with no unified way to
see what was actually running or what it cost.

## What I did

I came in as the accountable technical lead on the project, partnering directly with
DoonyaLabs' engineering lead, who was stepping into his first lead role, to turn a rough
internal proposal into an executable plan.

### Process

- **Coached the engineering lead through his first lead role.** Concretely: closing every
  meeting by naming who does what, by when, and with what result. It's a habit he found
  valuable enough to later write about publicly (see below).
- **Introduced a tech spec template**, so architecture and technical decisions get written down
  and reviewed before code ships.
- **Pushed the team to standardize on one tech stack** across projects, and to prioritize
  rewriting the handful of outliers that had drifted onto something else for no strong reason.
  A deliberate call for a studio that runs several projects in parallel.
- **Made the architecture call.** The original proposal considered a VPS or hybrid setup, but I
  pushed for a fully serverless, Google Cloud-native architecture built on Cloud Run, Cloud SQL,
  and Cloud Storage. That gave DoonyaLabs centralized access control and auto-scaling, replacing
  five sets of scattered logins and always-on servers.
- **Sequenced the migration so it wouldn't stall.** I broke it into four phases: proof of
  concept, standardization, full migration, and process handoff, each with concrete exit
  criteria like deploy time under 20 minutes and test coverage above 60%. That gave the team a
  concrete plan to execute against, phase by phase.

### Outcomes & artifacts

- **A reusable application boilerplate**, with infrastructure-as-code, CI/CD, and a test harness
  built in, that DoonyaLabs now starts every new project from.
- **Automated CI/CD pipelines** (GitHub Actions + Cloud Build) and centralized secrets (Secret
  Manager), replacing manual, ad-hoc deploys.
- **One Google Cloud project per app**, each with its own staging and production environment,
  replacing three unrelated providers.
- **40% reduction in cloud costs** already realized, with the remaining migrations scoped and
  documented for the team to keep executing.

## Impact

- DoonyaLabs' engineering lead ran his first-ever lead role with a concrete, repeatable way to
  close out meetings, turning discussion into decisions people actually acted on.
- As a consultancy that starts a new project for nearly every engagement, DoonyaLabs now does
  that from a standardized, secure boilerplate. What used to take days of setup is now a
  template, on every project going forward.
- Automated testing and CI/CD are now the default way anything ships at DoonyaLabs.

> "A meeting without action items is basically a waste of time."
>
> Elisée Ouédraogo, Engineering Lead, DoonyaLabs, from a LinkedIn post on running effective
> meetings. A habit he built while working with Ornella on DoonyaLabs' cloud infrastructure.

---

Facing a similar sprawl of infrastructure and ad-hoc deploys? [Let's talk.](mailto:ornella@konate.tech)
