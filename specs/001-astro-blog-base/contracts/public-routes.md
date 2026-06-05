# Public Route Contract: Base do Blog

## Purpose

Definir as rotas públicas e a experiência mínima esperada para a primeira versão do blog.

## Routes

- `/pt/`: página inicial com introdução e destaques recentes.
- `/pt/posts/:slug/`: página individual de uma publicação.
- `/pt/archive/`: visão cronológica das publicações.
- `/pt/tags/:slug/`: agrupamento por etiqueta.
- `/pt/404`: página de não encontrado.

## Contract Rules

- Toda rota pública deve ter título e descrição adequados ao conteúdo.
- Toda publicação publicada deve ter um endereço público único.
- Rotas inexistentes devem conduzir a uma experiência de erro útil.
- Páginas públicas devem funcionar sem dependência de autenticação ou dados externos em tempo de execução.

## Metadata Expectations

- Título da página
- Descrição resumida
- Endereço canônico
- Metadados de compartilhamento social
- Indicadores de idioma quando houver variação futura
