# Gama Logs

Blog estático bilíngue para publicar notas técnicas, experimentos e guias em português e inglês.

## Stack

- Astro 5 com TypeScript
- Markdown/MDX para o conteúdo
- CSS próprio e geração estática

## Estrutura

- `src/pages/pt/` e `src/pages/en/`: páginas públicas por idioma
- `src/content/posts/`, `src/content/guides/` e `src/content/pages/`: conteúdo editorial
- `src/components/` e `src/layouts/`: apresentação compartilhada
- `specs/`: especificações e contratos do projeto

## Comandos

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Rotas principais

- `/` encaminha para `/pt/`
- `/pt/` e `/en/` são as homes
- `/:lang/posts/.../` são publicações; `/:lang/guides/` e `/:lang/guides/:slug/` são guias
- `/:lang/:slug/` atende páginas institucionais, como `/pt/sobre/` e `/en/about/`
- `/:lang/tags/`, `/:lang/tags/:slug/` e `/:lang/archive/` oferecem descoberta do conteúdo
- `/rss.xml` fornece o feed; `/404/` e `/:lang/404/` fornecem páginas de erro


