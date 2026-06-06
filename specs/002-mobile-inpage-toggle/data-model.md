# Data Model: Navegação Mobile da Página

## Entities

### Navegação da Página

- **Purpose**: Lista as seções navegáveis do conteúdo atual.
- **Fields**:
  - `title`: rótulo visível da navegação.
  - `items`: lista de seções com `slug`, `text` e `depth`.
  - `visibleOnMobile`: indica se a navegação está aberta na tela pequena.
- **Rules**:
  - Deve existir apenas quando a página tem seções navegáveis.
  - Deve manter a ordem das seções do conteúdo.

### Controle de Exibição

- **Purpose**: Alterna a navegação da página no mobile.
- **Fields**:
  - `label`: texto do botão.
  - `expanded`: estado aberto/fechado.
- **Rules**:
  - O estado deve alternar a cada acionamento.
  - O rótulo deve refletir a ação atual.

### Seção do Conteúdo

- **Purpose**: Ponto de destino interno dentro da página.
- **Fields**:
  - `slug`: identificador da seção.
  - `text`: nome exibido ao usuário.
  - `depth`: nível de hierarquia do cabeçalho.
- **Rules**:
  - Cada destino precisa ser único na página.
  - O comportamento deve suportar páginas com poucas ou muitas seções.
