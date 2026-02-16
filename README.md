# 📝 VueDo List

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-FFE46B?style=for-the-badge&logo=pinia&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

🔗 [Acesse o Projeto Online](https://vuedo-list.vercel.app)

> Um gerenciador de tarefas moderno, reativo e persistente desenvolvido para dominar os fundamentos e recursos avançados do Vue 3.

## 🚀 Sobre o Projeto

O **VueDo List** é uma aplicação Single Page Application (SPA) de gerenciamento de tarefas. O objetivo principal deste projeto foi aplicar na prática os conceitos da **Composition API** do Vue 3, gerenciamento de estado global e estilização utilitária.

O app permite criar, concluir e excluir tarefas, com persistência de dados local e integração com API externa para frases motivacionais.

### ✨ Funcionalidades

- ✅ **CRUD de Tarefas:** Adicionar, listar, marcar como concluída e excluir.
- 💾 **Persistência de Dados:** As tarefas são salvas automaticamente no `localStorage` e não somem ao atualizar a página.
- 📊 **Barra de Progresso:** Feedback visual dinâmico baseada na porcentagem de conclusão.
- 💡 **Widget de Inspiração:** Consumo de API externa (DummyJSON) para exibir frases aleatórias com tratamento de Loading/Erro.
- 🚦 **Roteamento Dinâmico:** Navegação entre Home e Detalhes da Tarefa via Vue Router.
- 🗑️ **Modal de Confirmação:** Uso de `Teleport` para criar janelas modais seguras para exclusão.
- 🎨 **UI/UX Moderna:** Design responsivo com Tailwind CSS e animações de lista (`TransitionGroup`).

## 🛠️ Tecnologias Utilizadas

- **Vue.js 3** (Script Setup & Composition API)
- **Vite** (Build Tool & Dev Server)
- **Pinia** (State Management / Store)
- **Vue Router** (Navegação SPA)
- **Tailwind CSS** (Estilização)
- **JavaScript** (ES6+)

## 📚 Conceitos Aplicados

Durante o desenvolvimento, foram explorados os seguintes conceitos do ecossistema Vue:

1.  **Reatividade:** Uso profundo de `ref`, `computed` e `watch`.
2.  **Ciclo de Vida:** Hooks como `onMounted` para inicialização de dados.
3.  **Componentização:** Criação de componentes reutilizáveis (`ProgressBar`, `QuoteWidget`, `Modal`) usando Props, Emits e Slots.
4.  **Composables:** Lógica reutilizável para formatação de datas (`useFormatDate`).
5.  **Diretivas:** `v-if`, `v-for`, `v-model` e bind de classes dinâmicas.
6.  **Async/Await:** Requisições HTTP assíncronas com tratamento de erros.

## 🏁 Como Rodar o Projeto

Pré-requisitos: Node.js instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/VitorAraujo63/vuedo-list.git

# 2. Entre na pasta
cd vuedo-list

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
