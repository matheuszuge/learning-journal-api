# Learning Journal API

API para gerenciamento de Diário de Bordo de Aprendizagem, permitindo que usuários registrem, consultem e analisem suas experiências de aprendizado de forma segura e organizada.

---

## Funcionalidades

- **Cadastro e autenticação de usuários**
- **CRUD de entradas do diário** (criar, visualizar, editar, excluir)
- **Busca e filtros** por data, palavra-chave e tags
- **Anexos** (imagens, arquivos)
- **Relatórios e análises** do progresso
- **Privacidade**: diário pessoal, com possibilidade de futuras extensões para compartilhamento

---

## Público-alvo

- Estudantes, profissionais e qualquer pessoa que deseje registrar e acompanhar sua jornada de aprendizado.

---

## Autenticação

- Cadastro e login via endpoints dedicados
- Autenticação via JWT para rotas protegidas

---

## Endpoints Principais

### Autenticação

- `POST /auth/register` — Cadastro de usuário
- `POST /auth/login` — Login e obtenção de token

### Diário de Bordo

- `POST /entries` — Criar nova entrada
- `GET /entries` — Listar entradas (com filtros)
- `GET /entries/:id` — Visualizar entrada específica
- `PUT /entries/:id` — Editar entrada
- `DELETE /entries/:id` — Excluir entrada

## Regras de Negócio

- Apenas o dono pode acessar, editar ou excluir suas entradas
- Entradas podem conter anexos (imagens, PDFs, etc)
- Filtros por data, palavra-chave e tags
- Autenticação obrigatória para todas as rotas, exceto cadastro/login

---

## Possíveis Extensões Futuras

- Compartilhamento de entradas
- Comentários e feedback


---

## Tecnologias Que Serão Utilizadas

- Node.js
- TypeScript
- Prisma ORM
- JWT para autenticação
- Express.js
- Docker

