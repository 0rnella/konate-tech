+++
date = '2026-03-31T00:00:00+02:00'
title = 'Turning siloed analytics into a data product'
client = 'Galery'
role = 'Solo engineer, design through handoff'
duration = 'Mar 2026'
summary = "Galery couldn't see raw data behind its 30+ artist storefronts. I built an automated pipeline into BigQuery — the foundation for AI analytics and a new data product for their label partners."
stack = ['Google Analytics 4', 'BigQuery', 'BigQuery Linking', 'SQL']

[[metrics]]
value = 'Daily'
label = 'automated, unsampled export'

[[metrics]]
value = 'Self-serve'
label = 'onboarding for new artist sites'
+++

## The problem

Galery, a startup studio running merchandising sites for 30+ musical artists, had a Google
Analytics 4 property for every single storefront. GA4's own interface gives you reports, but no
way to see the underlying, non-sampled event and user data — and definitely no way to query
across properties. That made it impossible to build any cross-artist analysis, or to package the
data as something Galery could offer back to its artist partners.

## What I did

### Process

- **Picked the export strategy.** CSV exports were the obvious first option, but manual and
  fastidious at 30+ properties. GA4's native BigQuery Linking integration does the same job
  automatically, daily, without sampling — so I standardized on that.
- **Designed the warehouse structure.** One BigQuery dataset per GA4 property
  (`analytics_<property_id>`), each receiving daily `events_YYYYMMDD` and
  `pseudonymous_users_YYYYMMDD` tables straight from GA4. On top of that, an
  `analytics_overview` dataset with per-property views and a `property_names` lookup table, so
  anyone querying the data can work by artist or site name instead of a 9-digit property ID.

### Outcomes & artifacts

- **All 30+ properties onboarded**, each linked to the shared BigQuery project with its views
  wired up — and parameterized SQL queries (add a property, create its events view, create its
  users view) so onboarding the next artist site is three queries, not a bespoke setup.
- **A full handoff doc**, with a glossary (property, dataset, view — not everyone touching this
  is a data engineer), a diagram of how data flows from Analytics into BigQuery, and a
  screenshot-by-screenshot tutorial for connecting the next new site, so the Galery team doesn't
  need to loop me back in to keep growing the roster.

## Impact

- **Insights that were previously invisible.** Cross-property analysis that GA4's own interface
  simply can't do — patterns across the whole artist roster, not just one storefront at a time.
- **A foundation for AI-driven analytics.** With the data structured and queryable in one place,
  Galery has been able to start building analytics models on top of it, instead of starting from
  a raw export every time.
- **A new product line.** Galery has started packaging these insights and proposing them back to
  the record labels behind each artist — turning what used to be an internal reporting gap into
  something they can sell.

---

Sitting on data you can't actually query yet? [Let's talk.](mailto:ornella@konate.tech)
