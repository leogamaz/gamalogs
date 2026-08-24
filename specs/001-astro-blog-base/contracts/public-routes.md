# Public Route Contract: Base do Blog

## Purpose

Definir as rotas públicas e a experiência mínima esperada para a primeira versão do blog.

## Routes

O inventário abaixo descreve as rotas geradas pelo estado atual do projeto. Nos padrões, `:lang` é `pt` ou `en`; rotas dinâmicas só existem para conteúdo publicado correspondente.

| Padrão | Função | Estabilidade |
| --- | --- | --- |
| `/` | Entrada raiz redirecionadora para `/pt/`. | Estável |
| `/:lang/` | Home em português ou inglês. | Estável |
| `/:lang/posts/:year/:month/:day/:slug/` | Página individual de publicação. | Padrão estável; instâncias dependem de posts publicados |
| `/:lang/guides/` | Índice de guias. | Estável |
| `/:lang/guides/:slug/` | Página individual de guia. | Padrão estável; instâncias dependem de guias publicados |
| `/:lang/:slug/` | Página institucional de um segmento, como `/pt/sobre/` e `/en/about/`. | Padrão estável; instâncias dependem das páginas disponíveis |
| `/:lang/tags/` | Índice de etiquetas. | Estável |
| `/:lang/tags/:slug/` | Publicações agrupadas por etiqueta. | Padrão estável; instâncias dependem das etiquetas existentes |
| `/:lang/archive/` | Visão cronológica das publicações. | Estável |
| `/rss.xml` | Feed RSS das publicações publicadas. | Estável |
| `/404/`, `/:lang/404/` | Páginas de não encontrado da raiz e dos idiomas. | Estável |

## Contract Rules

- Toda rota pública deve ter título e descrição adequados ao conteúdo.
- Toda publicação publicada deve ter um endereço público único.
- Rotas inexistentes devem conduzir a uma experiência de erro útil por meio das páginas 404 disponíveis.
- Páginas públicas devem funcionar sem dependência de autenticação ou dados externos em tempo de execução.

## Metadata Expectations

- Título da página
- Descrição resumida
- Endereço canônico
- Metadados de compartilhamento social
- Indicadores de idioma nas variantes PT e EN
