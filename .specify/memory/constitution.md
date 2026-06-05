<!--
Sync Impact Report
Version change: template -> 1.0.0
Modified principles:
- Template principle 1 -> I. Static-First Content Architecture
- Template principle 2 -> II. Bilingual URLs and SEO by Default
- Template principle 3 -> III. Reading Experience and Visual Identity
- Template principle 4 -> IV. Amazing Pages as Designed Experiences
- Template principle 5 -> V. Simplicity, Performance, and Accessibility
Added sections:
- Technical Constraints
- Delivery Workflow and Quality Gates
Removed sections:
- None
Templates requiring updates:
- Updated: .specify/templates/plan-template.md
- Updated: .specify/templates/spec-template.md
- Updated: .specify/templates/tasks-template.md
- Reviewed: .specify/templates/checklist-template.md
- Not present: .specify/templates/commands/*.md
- Reviewed: AGENTS.md
Follow-up TODOs:
- None
-->
# Meu Blog Constitution

## Core Principles

### I. Static-First Content Architecture

The project MUST remain a static personal technical blog for the MVP. Content MUST be
versioned in the repository and authored primarily in Markdown or MDX. Posts MUST be
organized by language, content type, date, slug, tags, and category metadata so the
site can generate clean indexes without a backend, database, authentication, or runtime
CMS. Any proposed server-side dependency MUST be rejected unless a future amendment
defines a concrete need that static generation cannot satisfy.

Rationale: the product goal is a fast, durable, inspectable publishing workflow where
content and implementation evolve together in Git.

### II. Bilingual URLs and SEO by Default

Every public page MUST have a canonical language scope under `/pt/` or `/en/` unless it
is a technical asset such as `sitemap.xml`, `robots.txt`, or an RSS feed. Pages with
translated counterparts MUST expose correct `hreflang`, canonical URL, title,
description, Open Graph, Twitter/X card metadata, and semantic HTML. Content features
MUST define slug, language, publish date, summary, tags, and whether a translation is
available before implementation is considered complete.

Rationale: Portuguese and English content are first-class surfaces, and discoverability
is a core requirement rather than a launch polish task.

### III. Reading Experience and Visual Identity

Common posts MUST prioritize readability, chronology, and scanability. Typography,
spacing, contrast, code blocks, headings, dates, tags, and navigation MUST remain
consistent across normal posts. The home page, archives, tag pages, and article pages
MUST feel like the same authored product, not a generic starter blog. Visual choices
MUST support comprehension before decoration.

Rationale: frequent technical notes only create long-term value when they are easy to
read, revisit, and navigate chronologically.

### IV. Amazing Pages as Designed Experiences

Amazing entries MUST be treated as special editorial pages with their own visual
direction while preserving global navigation, language switching, metadata, accessibility,
and performance requirements. Each Amazing topic MUST document its design concept,
content structure, and interaction boundaries. Creative elements such as timelines,
cards, grids, highlights, animations, and custom components MUST serve the topic and
MUST not compromise reading, mobile layout, or indexing.

Rationale: the Amazing section is the intentional space for memorable, immersive
technical guides without fragmenting the whole site experience.

### V. Simplicity, Performance, and Accessibility

Implementation MUST favor Astro, TypeScript, MDX, modern CSS, and static deployment.
Features MUST avoid unnecessary client-side JavaScript, external services, global state,
or abstractions until a measured need exists. Pages MUST be responsive, keyboard usable,
accessible by semantic structure and labels, and optimized for fast static delivery.
Any added dependency MUST state what user-facing or authoring value it provides.

Rationale: the blog must stay easy to maintain while delivering a quick, accessible,
indexable experience on desktop and mobile.

## Technical Constraints

- The MVP MUST not introduce backend services, databases, authentication, or a runtime
  CMS.
- The primary stack MUST be Astro, MDX, TypeScript, and project-owned CSS.
- Content MUST live in the repository with typed frontmatter or equivalent validation.
- URL design MUST preserve `/pt/posts/`, `/en/posts/`, `/pt/amazing/`, and
  `/en/amazing/` as first-class namespaces.
- The site MUST generate or provide sitemap, robots, RSS, canonical metadata, social
  sharing metadata, and language alternates for indexable pages.
- Normal posts MUST support chronological archives by year, month, and day.
- Tags MUST be navigable and language-aware.
- Deploy targets MUST be static-friendly platforms such as Vercel, Netlify, or
  Cloudflare Pages.

## Delivery Workflow and Quality Gates

- Each feature specification MUST identify the user-facing content experience, affected
  language routes, SEO metadata, accessibility expectations, and mobile behavior.
- Each implementation plan MUST pass a Constitution Check covering static generation,
  bilingual URL strategy, metadata, RSS/sitemap impact, reading experience, Amazing
  visual boundaries when relevant, accessibility, and performance.
- Each task list MUST include concrete tasks for content modeling, route generation,
  SEO metadata, language switching or translation behavior, responsive layout, and
  validation where the feature touches those concerns.
- Before a feature is considered complete, it MUST be validated through build/type
  checks when available and through browser inspection for visual, responsive, and
  accessibility-sensitive changes.
- Any complexity that violates these principles MUST be documented in the plan with the
  simpler alternative that was rejected and the reason it was insufficient.

## Governance

This constitution supersedes conflicting project practices, generated plans, and ad hoc
implementation preferences. Amendments MUST update this file, include a Sync Impact
Report, and review dependent templates or runtime guidance for consistency.

Versioning follows semantic versioning:

- MAJOR: removes or redefines a core principle in a backward-incompatible way.
- MINOR: adds a principle, adds a governance section, or materially expands required
  quality gates.
- PATCH: clarifies wording, fixes typos, or refines guidance without changing required
  behavior.

Compliance review is required during planning and before completion of each feature.
Plans MUST explicitly document any principle violation, and unresolved violations block
implementation until the constitution is amended or the plan is simplified.

**Version**: 1.0.0 | **Ratified**: 2026-06-05 | **Last Amended**: 2026-06-05
