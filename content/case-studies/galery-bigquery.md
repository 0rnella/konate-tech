+++
date = '2026-03-31T00:00:00+02:00'
title = 'Turning siloed analytics into a data product'
client = 'Galery'
role = 'Solo engineer, design through handoff'
duration = 'Mar 2026'
summary = "Galery couldn't see raw data behind its 30+ artist storefronts. I built an automated pipeline into BigQuery, laying the foundation for AI analytics and a new data product for their label partners."
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
way to see the underlying, non-sampled event and user data, and no way to query across
properties at all. That made it impossible to build any cross-artist analysis, or to package the
data as something Galery could offer back to its artist partners.

## What I did

### Process

- **Picked the export strategy.** CSV exports were the obvious first option, but manual and
  fastidious at 30+ properties. GA4's native BigQuery Linking integration does the same job
  automatically and without sampling, running daily with no manual work. I standardized on that.
- **Designed the warehouse structure.** One BigQuery dataset per GA4 property
  (`analytics_<property_id>`), each receiving daily `events_YYYYMMDD` and
  `pseudonymous_users_YYYYMMDD` tables straight from GA4. On top of that, an
  `analytics_overview` dataset with per-property views and a `property_names` lookup table, so
  anyone querying the data can just search by artist or site name.

### Outcomes & artifacts

- **All 30+ properties onboarded**, each linked to the shared BigQuery project with its views
  wired up, plus parameterized SQL queries to add a property and create its events and user
  views. Onboarding the next artist site now takes three queries.
- **A full handoff doc**, with a glossary explaining terms like property, dataset, and view (not
  everyone touching this is a data engineer), a diagram of how data flows from Analytics into
  BigQuery, and a screenshot-by-screenshot tutorial for connecting the next new site. The Galery
  team doesn't need to loop me back in to keep growing the roster.

## Impact

- **Insights that were previously invisible.** Cross-property analysis across the whole artist
  roster, the kind GA4's own interface simply can't do.
- **A foundation for AI-driven analytics.** With the data structured and queryable in one place,
  Galery has been able to start building analytics models directly on top of it.
- **A new product line.** Galery has started packaging these insights and proposing them back to
  the record labels behind each artist, turning what used to be an internal reporting gap into a
  sellable product.

---

Sitting on data you can't actually query yet? [Let's talk.](mailto:ornella@konate.tech)
