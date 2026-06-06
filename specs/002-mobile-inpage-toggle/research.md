# Research: Navegação Mobile da Página

## Decision 1

- **Decision**: Reaproveitar `InPageNav` e adicionar apenas um estado local simples para mostrar/ocultar no mobile.
- **Rationale**: Resolve a necessidade sem criar novo sistema de navegação.
- **Alternatives considered**: Criar um componente novo e duplicar a lista de links; rejeitado por aumentar manutenção sem ganho real.

## Decision 2

- **Decision**: Manter a navegação permanente em desktop e esconder a versão expansível apenas em telas pequenas.
- **Rationale**: Preserva a experiência atual e limita a mudança ao problema informado.
- **Alternatives considered**: Aplicar o mesmo comportamento em todas as larguras; rejeitado porque mudaria um fluxo que já funciona.

## Decision 3

- **Decision**: Usar controle no menu superior com texto/estado claro para abrir e fechar a navegação da página.
- **Rationale**: É o ponto mais previsível para o usuário encontrar a ação no mobile.
- **Alternatives considered**: Botão flutuante separado; rejeitado por adicionar mais ruído visual.
