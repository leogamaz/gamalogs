# Research Notes: Base do Blog

## 1. Conteúdo estático em Astro

- Decision: Usar conteúdo versionado no repositório, com páginas geradas estaticamente a partir de arquivos de conteúdo.
- Rationale: atende ao princípio static-first, reduz dependências e mantém o fluxo editorial simples.
- Alternatives considered: CMS em tempo de execução, API própria, banco de dados. Rejeitados por aumentar complexidade sem benefício imediato.

## 2. Modelo de conteúdo

- Decision: Organizar publicações e páginas institucionais como conteúdo separado, com campos mínimos consistentes para título, resumo, data, slug, idioma e etiquetas quando aplicável.
- Rationale: facilita listagens, páginas individuais, navegação e futura expansão para novas seções.
- Alternatives considered: manter conteúdo solto em páginas fixas, armazenar dados em JSON, ou misturar posts e páginas no mesmo conjunto. Rejeitados por reduzir clareza e escalabilidade editorial.

## 3. Roteamento público

- Decision: Publicar as páginas visíveis nas duas árvores linguísticas existentes, `/pt/` e `/en/`, usando conteúdo traduzido quando disponível.
- Rationale: o estado atual do projeto já possui homes, publicações, guias, páginas institucionais, tags, arquivo e páginas de erro para os dois idiomas.
- Alternatives considered: expor o site sem prefixo de idioma, ou manter apenas uma árvore linguística. Rejeitados por conflitar com o roteamento bilíngue já existente ou reduzir a cobertura atual.

## 4. SEO e descoberta

- Decision: Padronizar metadados de página, compartilhamento social, sitemap, robots e RSS como parte do fluxo de build.
- Rationale: um blog precisa ser facilmente encontrável e compartilhável desde a primeira versão.
- Alternatives considered: adicionar SEO manualmente por página ou adiar feeds/metadata para depois. Rejeitados por risco de inconsistência e perda de descoberta.

## 5. Desempenho e acessibilidade

- Decision: Priorizar HTML semântico, CSS próprio e JavaScript mínimo.
- Rationale: melhora leitura, compatibilidade com teclado e desempenho em hospedagem estática.
- Alternatives considered: interface com muita interatividade client-side ou dependência de bibliotecas pesadas. Rejeitadas por não serem necessárias para este escopo.
