# Data Model: Base do Blog

## Publicação

- `slug`: identificador público único dentro do idioma
- `title`: título exibido ao leitor
- `summary`: resumo curto para listas e prévias
- `publishDate`: data de publicação
- `language`: idioma do conteúdo
- `tags`: lista de etiquetas
- `category`: categoria editorial opcional
- `body`: conteúdo principal da publicação
- `translationAvailable`: indica se existe tradução futura ou relacionada

### Regras

- `slug` deve ser único por idioma.
- `title`, `summary`, `publishDate`, `language` e `body` são obrigatórios.
- `tags` pode estar vazio, mas quando presente deve usar nomes consistentes.
- Conteúdo não publicado não deve aparecer nas listagens públicas.

## Página Institucional

- `slug`: endereço público da página
- `title`: título da página
- `summary`: resumo opcional
- `language`: idioma da página
- `body`: conteúdo principal
- `kind`: tipo da página, como apresentação ou contato

### Regras

- `slug` deve ser único por idioma.
- Páginas institucionais devem manter navegação clara a partir da página inicial.

## Etiqueta

- `name`: nome legível da etiqueta
- `slug`: identificador público da etiqueta
- `language`: idioma da etiqueta

### Relações

- Uma publicação pode ter várias etiquetas.
- Uma etiqueta pode agrupar várias publicações do mesmo idioma.
