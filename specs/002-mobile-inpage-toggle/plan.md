# Implementation Plan: Navegação Mobile da Página

**Branch**: `[002-mobile-inpage-toggle]` | **Date**: 2026-06-05 | **Spec**: [`spec.md`](./spec.md)

**Input**: Feature specification from `/specs/002-mobile-inpage-toggle/spec.md`

## Summary

Adicionar um toggle simples no menu superior para abrir e fechar o componente `Nesta página` no mobile, sem mudar a navegação de desktop e sem introduzir novas dependências. O controlador do toggle fica concentrado em `SiteNav`; o painel continua em `InPageNav`.

## Technical Context

**Language/Version**: TypeScript + Astro + CSS existente

**Primary Dependencies**: Stack atual do projeto (`Astro`, componentes `.astro` e CSS existente, incluindo estilos escopados dos componentes)

**Storage**: N/A

**Testing**: Verificação manual no navegador, seguida dos comandos canônicos `npm run check` e `npm run build`

**Target Platform**: Site web estático responsivo

**Project Type**: Static Astro content site

**Performance Goals**: Alternância imediata do componente sem impacto perceptível na leitura

**Constraints**: Manter a solução pequena, reaproveitar `InPageNav`, evitar infraestrutura extra e manter o estado mínimo no controlador existente

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
│   ├── pt/
│   └── en/
└── styles/
    └── global.css
```

**Structure Decision**: A mudança fica restrita aos componentes e layouts que já renderizam a navegação. `SiteNav.astro` concentra o controlador; `InPageNav.astro` concentra o painel e pode conter seus estilos responsivos. `global.css` só deve receber regras compartilhadas quando necessário.

## Complexity Tracking

Nenhuma violação registrada. A implementação deve continuar simples e localizada.
