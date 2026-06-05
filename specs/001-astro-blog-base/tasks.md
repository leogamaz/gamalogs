# Tasks: Base do Blog

**Input**: Design documents from `/specs/001-astro-blog-base/`

**Prerequisites**: `plan.md` (required), `spec.md` (required for user stories), `research.md`, `data-model.md`, `contracts/`, `quickstart.md`

**Tests**: Não foram solicitados testes formais no backlog; porém, validações de build, SEO, acessibilidade, roteamento e responsividade são obrigatórias por se tratar de páginas públicas.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and base static site structure

- [x] T001 Create the static site folder structure in `src/components/`, `src/content/posts/`, `src/content/pages/`, `src/layouts/`, `src/pages/pt/`, `src/styles/`, and `public/`
- [x] T002 Initialize the blog project configuration in `package.json`, `astro.config.mjs`, and `tsconfig.json` for a static Astro site with TypeScript support
- [x] T003 [P] Add shared type declarations for Astro in `src/env.d.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core content model, routing, and shared presentation foundations required before any story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Define content collections and validation rules in `src/content.config.ts` for posts and pages
- [x] T005 [P] Add base content sample files in `src/content/posts/` and `src/content/pages/` for the initial blog structure
- [x] T006 Create the shared site shell and metadata helper in `src/layouts/BaseLayout.astro`
- [x] T007 [P] Create the shared reading layout for content pages in `src/layouts/PostLayout.astro`
- [x] T008 [P] Create the shared navigation component in `src/components/SiteNav.astro`
- [x] T009 Implement reusable SEO metadata output in `src/components/SeoHead.astro`
- [x] T010 Set up route helpers and canonical path conventions in `src/lib/routes.ts`
- [x] T011 Configure static build output support for sitemap, robots, and RSS in `astro.config.mjs`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Descobrir publicações recentes (Priority: P1) 🎯 MVP

**Goal**: Exibir a página inicial do blog com introdução clara, publicações recentes e estado vazio útil

**Independent Test**: Abrir `/pt/` deve mostrar a identidade do blog, a lista de publicações recentes, e uma mensagem útil quando não houver conteúdo

### Implementation for User Story 1

- [x] T012 [P] [US1] Implement the home page entry point in `src/pages/pt/index.astro`
- [x] T013 [P] [US1] Create the home page hero and recent-posts components in `src/components/HomeHero.astro` and `src/components/RecentPosts.astro`
- [x] T014 [US1] Wire the home page to content data in `src/pages/pt/index.astro` using the content collections from `src/content.config.ts`
- [x] T015 [P] [US1] Add the empty-state message component for the home page in `src/components/EmptyState.astro`
- [x] T016 [US1] Ensure the home page uses the shared layout and SEO metadata from `src/layouts/BaseLayout.astro` and `src/components/SeoHead.astro`
- [x] T017 [US1] Validate the home page build and responsive rendering against `specs/001-astro-blog-base/quickstart.md`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Ler uma publicação (Priority: P2)

**Goal**: Render a dedicated, readable page for each published post with a stable public URL

**Independent Test**: Opening `/pt/posts/:slug/` should display the full article content, title, date, and contextual metadata without requiring the home page

### Implementation for User Story 2

- [x] T018 [P] [US2] Implement the post route generation in `src/pages/pt/posts/[slug].astro`
- [x] T019 [P] [US2] Implement the post content template in `src/layouts/PostLayout.astro`
- [x] T020 [US2] Render post metadata, title, summary, and body content in `src/pages/pt/posts/[slug].astro`
- [x] T021 [P] [US2] Add the post preview card component in `src/components/PostCard.astro`
- [x] T022 [US2] Connect the post list on the home page to post detail routes in `src/components/RecentPosts.astro`
- [x] T023 [US2] Validate direct post access, readable typography, and canonical metadata against `specs/001-astro-blog-base/contracts/public-routes.md`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Navegar e recuperar-se de erros (Priority: P3)

**Goal**: Provide clear navigation across the blog and a helpful not-found experience

**Independent Test**: Navigating between public pages and opening an invalid URL should keep the visitor oriented and able to continue browsing

### Implementation for User Story 3

- [x] T024 [P] [US3] Create the archive page in `src/pages/pt/archive/index.astro`
- [x] T025 [P] [US3] Create the tags listing page in `src/pages/pt/tags/[slug].astro`
- [x] T026 [US3] Create the not-found page in `src/pages/pt/404.astro`
- [x] T027 [P] [US3] Extend the shared navigation to include home, archive, and tags links in `src/components/SiteNav.astro`
- [x] T028 [US3] Ensure all public pages share consistent navigation and return paths through `src/layouts/BaseLayout.astro`
- [x] T029 [US3] Validate keyboard navigation, mobile layout, and invalid-route handling using `specs/001-astro-blog-base/quickstart.md`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T030 [P] Review and tighten page metadata, canonical URLs, and social sharing tags across `src/components/SeoHead.astro` and all public pages
- [x] T031 [P] Verify sitemap, robots, and RSS output from `astro.config.mjs` and the generated static build
- [x] T032 [P] Validate semantic HTML, keyboard access, contrast, and mobile responsiveness across `src/layouts/` and `src/pages/pt/`
- [x] T033 [P] Remove any unnecessary client-side JavaScript from `src/components/` and `src/pages/pt/`
- [x] T034 Confirm the final static build and preview flow documented in `specs/001-astro-blog-base/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Shared layouts and content model before route-specific pages
- Home content before post detail navigation dependencies
- Navigation and error pages before final polish checks
- Story complete before moving to next priority

### Parallel Opportunities

- `T003` can run in parallel with any setup task that does not depend on shared config files
- `T005`, `T007`, `T008`, and `T011` are parallel-friendly in Phase 2 because they touch different files
- `T012`, `T013`, and `T015` can be worked on in parallel after foundational work
- `T018`, `T019`, and `T021` can be worked on in parallel after foundational work
- `T024`, `T025`, and `T026` can be worked on in parallel after foundational work

---

## Parallel Example: User Story 1

```bash
Task: "Create the home page entry point in src/pages/pt/index.astro"
Task: "Create the home page hero and recent-posts components in src/components/HomeHero.astro and src/components/RecentPosts.astro"
Task: "Add the empty-state message component for the home page in src/components/EmptyState.astro"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently
