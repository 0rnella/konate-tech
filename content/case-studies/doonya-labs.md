+++
date = '2026-08-25T16:02:51+02:00'
title = 'Centralizing five apps and three cloud providers into one'
client = 'Doonya Labs'
role = 'Fractional technical lead (accountable owner)'
duration = 'Mar 2025 – ongoing'
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
DoonyaLabs' engineering lead to turn a rough internal proposal into an executable plan.

- **Audited the full portfolio.** Every app, every provider, every recurring cost — including
  the ones nobody had a clear answer for ("what does this VPS even run?").
- **Made the architecture call.** The original proposal considered a VPS or hybrid setup. I
  pushed for a fully serverless, Google Cloud–native architecture instead — Cloud Run for
  compute, Cloud SQL for Postgres, Cloud Storage for files — because it meant centralized IAM
  instead of five sets of scattered logins, auto-scaling instead of always-on VPS capacity, and
  one console and one support line instead of five.
- **Designed the project structure.** One Google Cloud project per app, each with its own
  staging and production Cloud Run services and Cloud SQL instances, mirroring how the team
  already thought about their repos — easy to onboard into, easy to reason about.
- **Sequenced the migration so it wouldn't stall.** Four phases — proof of concept,
  standardization, full migration, and process handoff — each with concrete exit criteria
  (deploy time under 20 minutes, test coverage above 60%, alerting within 5 minutes of
  downtime) instead of an open-ended "migrate everything" mandate.
- **Built the reusable foundation.** GitHub Actions and Cloud Build pipelines, Secret Manager
  for credentials, and a Terraform + application boilerplate so the *next* project starts from a
  secure, standardized baseline instead of another one-off VPS.

## The outcome

The first project is fully live on the new platform, with automated CI/CD replacing manual
deploys and a **40% reduction in cloud costs** already realized. DoonyaLabs now has a reusable
boilerplate — infrastructure-as-code, CI/CD, and test harness included — that turns "spin up a
new project" from a multi-day chore into a template. The remaining migrations are scoped,
documented, and sequenced, so the team can keep executing the plan with or without me in the
room.

---

Facing a similar sprawl of infrastructure, providers, or ad-hoc deploys? [Let's talk.](mailto:ornella@konate.tech)
