+++
date = '2026-08-25T16:20:00+02:00'
title = 'Turning 30+ siloed analytics properties into one queryable warehouse'
client = 'Galery'
role = 'Solo engineer, design through handoff'
duration = '2025'
summary = 'Galery runs 30+ artist storefronts, each its own Google Analytics property. I built an automated pipeline into BigQuery so the team could finally query raw data across all of them.'
stack = ['Google Analytics 4', 'BigQuery', 'BigQuery Linking', 'SQL']

[[metrics]]
value = '30+'
label = 'analytics properties consolidated'

[[metrics]]
value = '1'
label = 'queryable BigQuery project'

[[metrics]]
value = 'Daily'
label = 'automated, unsampled export'
+++

## The problem

Galery, a startup studio running merchandising sites for 30+ musical artists, had a Google
Analytics 4 property for every single storefront. GA4's own interface gives you reports, but no
way to see the underlying, non-sampled event and user data — and definitely no way to query
across properties. That made it impossible to build any cross-artist analysis, or to package the
data as something Galery could offer back to its artist partners.

## What I did

- **Picked the export strategy.** CSV exports were the obvious first option, but manual and
  fastidious at 30+ properties. GA4's native BigQuery Linking integration does the same job
  automatically, daily, without sampling — so I standardized on that.
- **Designed the warehouse structure.** One BigQuery dataset per GA4 property
  (`analytics_<property_id>`), each receiving daily `events_YYYYMMDD` and
  `pseudonymous_users_YYYYMMDD` tables straight from GA4. On top of that, an
  `analytics_overview` dataset with per-property views and a `property_names` lookup table, so
  anyone querying the data can work by artist or site name instead of a 9-digit property ID.
- **Onboarded all 30+ properties**, linking each one to the shared BigQuery project and wiring
  up its views — and wrote parameterized SQL queries (add a property, create its events view,
  create its users view) so onboarding a new artist site is three queries, not a bespoke setup
  each time.
- **Wrote the handoff.** A full reference doc with a glossary (property, dataset, view — not
  everyone touching this is a data engineer), a diagram of how data flows from Analytics into
  BigQuery, and a screenshot-by-screenshot tutorial for connecting the next new site, so the
  Galery team doesn't need to loop me back in to keep growing the roster.

## The outcome

30+ previously siloed analytics properties now live in a single, queryable BigQuery project —
raw and unsampled — for a running cost of a few dollars a month in storage and query
compute. Galery was able to start commercializing analytics insights within weeks of launch,
and onboarding a new artist site is now a self-serve, documented process rather than a request
that lands on an engineer's desk.

---

Sitting on data you can't actually query yet? [Let's talk.](mailto:ornella@konate.tech)
