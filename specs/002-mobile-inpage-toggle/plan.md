# Implementation Plan: Navegação Mobile da Página

**Branch**: `[002-mobile-inpage-toggle]` | **Date**: 2026-06-05 | **Spec**: [`spec.md`](./spec.md)

**Input**: Feature specification from `/specs/002-mobile-inpage-toggle/spec.md`

## Summary

Adicionar um toggle simples no menu superior para abrir e fechar o componente `Nesta página` no mobile, sem mudar a navegação de desktop e sem introduzir novas dependências.

## Technical Context

**Language/Version**: TypeScript + Astro + CSS existente

**Primary Dependencies**: Stack atual do projeto (`Astro`, componentes `.astro`, CSS global)

**Storage**: N/A

**Testing**: Verificação manual no navegador e build do projeto existente

**Target Platform**: Site web estático responsivo

**Project Type**: Static Astro content site

**Performance Goals**: Alternância imediata do componente sem impacto perceptível na leitura

**Constraints**: Manter a solução pequena, reaproveitar `InPageNav`, evitar estado global ou infraestrutura extra

**Scale/Scope**: Mudança localizada em componentes de navegação e estilos responsivos

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Static-first: Sim. A mudança permanece totalmente no site estático.
- Content model: Não há mudança no conteúdo editorial ou frontmatter.
- Bilingual routing: Não altera rotas nem alternância de idioma.
- SEO: Sem impacto relevante em metadados, sitemap, robots ou RSS.
- Reading experience: Sim. Preserva a hierarquia de leitura e melhora a navegação em telas pequenas.
- Amazing boundaries: Não aplicável.
- Performance and accessibility: Sim. A solução deve manter foco, teclado e leitura limpa com CSS mínimo.

## Project Structure

### Documentation (this feature)

```text
specs/002-mobile-inpage-toggle/
├── plan.md
├── research.md
├── data-model.md
└── quickstart.md
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── InPageNav.astro
│   ├── SiteNav.astro
│   └── RecentPosts.astro
├── layouts/
│   └── PostLayout.astro
├── pages/
│   └── pt/
└── styles/
    └── global.css
```

**Structure Decision**: A mudança fica restrita a `src/components`, `src/layouts` e `src/styles/global.css`, reaproveitando o componente existente de navegação interna.

## Complexity Tracking

Nenhuma violação registrada. A implementação deve continuar simples e localizada.
