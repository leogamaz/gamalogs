# Feature Specification: Navegação Mobile da Página

**Feature Branch**: `[002-mobile-inpage-toggle]`

**Created**: 2026-06-05

**Status**: Draft

**Input**: User description: "ajuste o site perfeitamente para mobile, o componente \"nesta pagina\" no mobile deve ficar no nav acessivel por botão, usuario aperta ele aparece na tela pro usuario se mover pelo site, ele clica no botão novamente o componente desaparece."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Abrir a navegação da página no mobile (Priority: P1)

Como visitante em um dispositivo móvel, quero abrir e fechar o componente "Nesta página" a partir do menu superior para me orientar e saltar rapidamente entre as seções da página.

**Why this priority**: A navegação interna é a principal necessidade informada e precisa ser acessível sem ocupar espaço permanente na tela pequena.

**Independent Test**: Em uma tela pequena, o visitante consegue acionar o botão do menu, visualizar a navegação da página e ocultá-la novamente sem sair da página atual.

**Acceptance Scenarios**:

1. **Given** que estou em uma página com o componente "Nesta página" e uso uma tela pequena, **When** aciono o botão correspondente no menu superior, **Then** a navegação da página aparece de forma clara e utilizável.
2. **Given** que a navegação da página já está visível no mobile, **When** aciono o mesmo botão novamente, **Then** o componente desaparece da tela.
3. **Given** que a navegação da página está visível, **When** escolho uma seção, **Then** sou levado ao ponto correto do conteúdo e a navegação continua disponível até eu fechá-la.

---

### User Story 2 - Manter a leitura confortável no mobile (Priority: P2)

Como visitante em um dispositivo móvel, quero que a navegação da página não atrapalhe a leitura quando estiver fechada, para conseguir consumir o conteúdo com menos esforço visual.

**Why this priority**: A navegação deve ajudar a orientar sem competir com o conteúdo principal da página.

**Independent Test**: Em uma tela pequena, é possível ler o conteúdo principal sem a navegação da página ocupar espaço persistente quando estiver fechada.

**Acceptance Scenarios**:

1. **Given** que estou em uma página no mobile e não abri a navegação da página, **When** observo o layout, **Then** o conteúdo principal permanece legível e livre de blocos desnecessários.
2. **Given** que abri e depois fechei a navegação da página, **When** continuo navegando, **Then** ela não volta a aparecer sozinha e não interrompe a leitura.

---

### User Story 3 - Preservar a experiência em telas maiores (Priority: P3)

Como visitante em desktop ou em telas maiores, quero que o ajuste mobile não prejudique a navegação já existente, para manter a experiência consistente em diferentes dispositivos.

**Why this priority**: O objetivo principal é melhorar a experiência móvel sem criar regressões fora dela.

**Independent Test**: Em uma tela maior, a navegação atual continua acessível e funcional, sem depender do botão mobile para ser usada.

**Acceptance Scenarios**:

1. **Given** que estou em uma tela maior, **When** acesso uma página com conteúdo seccionado, **Then** continuo tendo acesso claro à navegação da página.
2. **Given** que alterno entre tamanhos de tela, **When** o site se adapta, **Then** o comportamento mobile não impede a navegação em desktop.

### Edge Cases

- A página tem muitas seções e a lista da navegação precisa continuar legível em tela pequena.
- A página tem poucas ou nenhuma seção navegável.
- O visitante abre a navegação e rola a página antes de fechá-la.
- O visitante toca rapidamente no botão várias vezes.
- O visitante usa teclado, leitor de tela ou outro recurso de acessibilidade no mobile.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: O sistema deve disponibilizar um controle no menu superior para abrir e fechar o componente "Nesta página" em telas pequenas.
- **FR-002**: O sistema deve exibir a navegação da página de forma clara quando o visitante acionar o controle.
- **FR-003**: O sistema deve ocultar a navegação da página quando o visitante acionar o controle novamente.
- **FR-004**: O sistema deve permitir que o visitante use a navegação da página para ir diretamente a seções do conteúdo.
- **FR-005**: O sistema deve manter o conteúdo principal legível e navegável quando a navegação da página estiver fechada.
- **FR-006**: O sistema deve preservar a experiência de navegação existente em telas maiores.
- **FR-007**: O sistema deve oferecer uma experiência utilizável por teclado e tecnologias assistivas para o controle e para o conteúdo da navegação.
- **FR-008**: O sistema deve evitar que o visitante perca a orientação ao alternar entre abrir, navegar e fechar o componente.

### Content, SEO & Localization Requirements *(mandatory for public pages)*

- **SEO-001**: As páginas públicas devem continuar expondo título, descrição e endereço canônico consistentes após o ajuste de navegação.
- **SEO-002**: As páginas públicas devem manter a estrutura de compartilhamento e descoberta já esperada para o site.
- **SEO-003**: O idioma e a identificação do conteúdo devem permanecer coerentes com a experiência atual do site em português.
- **UX-001**: As páginas públicas devem permanecer legíveis em telas pequenas, com ordem de leitura clara e navegação acessível.

### Key Entities *(include if feature involves data)*

- **Navegação da Página**: Componente que lista seções do conteúdo e permite saltar entre elas.
- **Controle de Exibição**: Botão no menu superior usado para abrir ou fechar a navegação da página no mobile.
- **Seção do Conteúdo**: Ponto navegável dentro da página para onde o visitante pode ser levado.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Em testes em tela pequena, pelo menos 95% dos participantes conseguem abrir a navegação da página em até 3 segundos.
- **SC-002**: Em testes em tela pequena, pelo menos 95% dos participantes conseguem fechar a navegação da página em até 3 segundos após abri-la.
- **SC-003**: Pelo menos 90% dos participantes conseguem chegar a uma seção específica da página sem ajuda adicional.
- **SC-004**: Em avaliações de usabilidade, pelo menos 90% dos participantes classificam a experiência móvel de navegação como clara e confortável.
- **SC-005**: Nenhuma página pública perde legibilidade ou acesso ao conteúdo principal quando a navegação da página está fechada.

## Assumptions

- A mudança é focada em telas pequenas e não altera a navegação principal já existente em desktop.
- O componente "Nesta página" já representa a navegação interna do conteúdo e será reaproveitado como base da nova interação.
- O site continua sendo um blog público em português, sem mudança de idioma ou de estrutura editorial nesta entrega.
- O visitante precisa permanecer na mesma página ao usar a navegação interna, apenas saltando entre seções.
