# Quickstart: Base do Blog

## Objetivo

Subir e verificar a estrutura atual do blog estático bilíngue.

## Fluxo sugerido

1. Instalar dependências do projeto.
2. Executar a aplicação em modo local.
3. Abrir as páginas iniciais em `/pt/` e `/en/`.
4. Conferir uma publicação e um guia em cada idioma, quando houver conteúdo publicado.
5. Conferir tags, arquivo, páginas institucionais, RSS e páginas de não encontrado.
6. Executar as checagens do projeto e gerar o build estático final.

## Comandos esperados

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## O que verificar

- As homes PT e EN carregam o conteúdo do respectivo idioma.
- Publicações, guias, tags, arquivo e páginas institucionais usam os padrões do contrato de rotas.
- A raiz encaminha para `/pt/` e `/rss.xml` está disponível.
- As páginas 404 oferecem uma saída clara para continuar navegando.
- O layout é responsivo e utilizável por teclado.

Os comandos acima são o fluxo canônico de verificação; este documento não registra que tenham sido executados.
