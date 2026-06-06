# Tasks: Navegação Mobile da Página

**Input**: Design documents from `/specs/002-mobile-inpage-toggle/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: Não foram solicitados testes automatizados. Como a feature afeta páginas públicas, a validação responsiva e de acessibilidade deve ser feita no navegador e com build do projeto.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Align the work with the existing component boundaries and keep the change small.

- [x] T001 Review the current `src/components/InPageNav.astro`, `src/layouts/PostLayout.astro`, and `src/components/RecentPosts.astro` usage so the mobile toggle stays inside the existing navigation component boundary

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core styling and layout hooks that MUST be ready before the story-specific behavior is finished.

- [x] T002 Add the minimal mobile-only toggle and panel styling hooks in `src/styles/global.css` for the in-page navigation

**Checkpoint**: Base styles are ready and the story work can now be completed without widening scope.

---

## Phase 3: User Story 1 - Abrir e fechar a navegação no mobile (Priority: P1) 🎯 MVP

**Goal**: O visitante consegue abrir e fechar o componente `Nesta página` em telas pequenas com um único botão.

**Independent Test**: Em um dispositivo móvel, o botão abre a navegação, a lista aparece, e o mesmo botão fecha o componente novamente.

### Implementation for User Story 1

- [x] T003 [US1] Implement the open/close button, accessible state, and collapsible mobile behavior in `src/components/InPageNav.astro`

**Checkpoint**: User Story 1 is functional and can be demonstrated independently.

---

## Phase 4: User Story 2 - Manter leitura confortável no mobile (Priority: P2)

**Goal**: Quando a navegação está fechada, o conteúdo principal continua limpo e fácil de ler em telas pequenas.

**Independent Test**: Em uma tela pequena, o conteúdo principal permanece legível e sem ocupar espaço extra quando a navegação está fechada.

### Implementation for User Story 2

- [x] T004 [US2] Fine-tune the closed-state spacing, overflow, and visibility behavior in `src/styles/global.css` so the content area stays readable on mobile

**Checkpoint**: User Story 2 is independently usable without changing the desktop layout.

---

## Phase 5: User Story 3 - Preservar a experiência em telas maiores (Priority: P3)

**Goal**: O ajuste mobile não altera a navegação atual em desktop ou em telas maiores.

**Independent Test**: Em desktop, a navegação da página continua disponível e o layout original se mantém estável.

### Implementation for User Story 3

- [x] T005 [P] [US3] Confirm the desktop article layout remains unchanged in `src/layouts/PostLayout.astro` and `src/pages/pt/[slug].astro`
- [x] T006 [P] [US3] Confirm the archive/home usage of `InPageNav` remains unchanged in `src/components/RecentPosts.astro`

**Checkpoint**: Desktop and larger-screen behavior stays intact.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation for a public-facing responsive change.

- [x] T007 Validate the mobile open/close flow, keyboard access, and desktop parity in the browser, then run the existing build command defined in `package.json`
- [x] T008 Fix any regressions found during validation in `src/components/InPageNav.astro`, `src/styles/global.css`, `src/layouts/PostLayout.astro`, `src/pages/pt/[slug].astro`, and `src/components/RecentPosts.astro`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - blocks all user stories
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Phase 2 - no dependency on other stories
- **User Story 2 (P2)**: Can start after Phase 2 - should not change the desktop experience
- **User Story 3 (P3)**: Can start after Phase 2 - validates that existing desktop behavior still works

### Within Each User Story

- Keep the mobile toggle logic inside `src/components/InPageNav.astro`
- Keep responsive spacing rules inside `src/styles/global.css`
- Keep desktop layout checks localized to the files that already render the component
- Validate each story before moving to the next one

### Parallel Opportunities

- T005 and T006 can be worked on in parallel because they touch different files
- T007 can begin once the story work is in place and does not depend on future story work

---

## Parallel Example: User Story 3

```bash
Task: "Confirm the desktop article layout remains unchanged in src/layouts/PostLayout.astro and src/pages/pt/[slug].astro"
Task: "Confirm the archive/home usage of InPageNav remains unchanged in src/components/RecentPosts.astro"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate the mobile open/close flow in the browser
5. Stop if the MVP is enough for demo/review

### Incremental Delivery

1. Complete Setup + Foundational
2. Add User Story 1 and verify the toggle works on mobile
3. Add User Story 2 to keep the reading experience clean
4. Add User Story 3 to confirm desktop parity
5. Finish with the validation and regression pass

### Parallel Team Strategy

With multiple developers:

1. One developer handles `src/components/InPageNav.astro`
2. Another handles `src/styles/global.css`
3. Another verifies desktop parity in `src/layouts/PostLayout.astro`, `src/pages/pt/[slug].astro`, and `src/components/RecentPosts.astro`

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- This feature is intentionally small: reuse the existing navigation component instead of creating a new system
- Verify the browser behavior on a mobile viewport before considering the story complete
