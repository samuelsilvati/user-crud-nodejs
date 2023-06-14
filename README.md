
# CRUD de Usuários com Fastify, TypeScript, Prisma, JWT, Bcrypt e CORS

Este é um projeto de exemplo que demonstra como construir um CRUD (Create, Read, Update, Delete) de usuários usando o Fastify, TypeScript, Prisma, @fastify/jwt, bcrypt e cors. O projeto foi desenvolvido em Node.js e visa fornecer um ponto de partida para criar uma API RESTful segura e escalável para gerenciar usuários.


## Funcionalidades

- Registro de novos usuários
- Autenticação de usuários com JWT (JSON Web Token)
- Criptografia segura de senhas usando bcrypt
- Listagem, busca, atualização e exclusão de usuários


## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:
- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Banco de dados PostgreSQL (ou outro banco de dados suportado pelo Prisma)

## Configuração

1. Clone este repositório em sua máquina local:

```bash
  git clone https://github.com/https://github.com/samuelsilvati/user-crud-nodejs
```
2. Navegue até o diretório do projeto:

```bash
  cd user-crud-nodejs main
```
3. Instale as dependências do projeto:

```bash
  npm install
```
4. Configure as variáveis de ambiente:

- Renomeie o arquivo .env.example para .env.
- Abra o arquivo .env e configure as variáveis de ambiente, como a URL do banco de dados e a chave secreta para JWT.

Obs. O Prisma está configurado com o SQLite. Não é necessário instalar ou configurar outros bancos de dados para rodar em localhost.

5. Execute as migrações do bando de dados:

```bash
  npx prisma migrate dev

```

    
## Executando o Projeto
Execute o seguinte comando para iniciar o servidor:
```bash
  npm run dev

```
O servidor será iniciado e estará disponível em http://localhost:3333.
## Rotas
A API oferece as seguintes rotas:
- POST /signup : Registra um novo usuário.
- POST /auth : Autentica um usuário e retorna um token JWT.
- GET /users : Retorna todos os usuários cadastrados.
- PUT /edit-user : Atualiza um usuário específico com base no ID.
- DELETE /delete : Exclui um usuário específico com base no ID.

Certifique-se de incluir o token JWT no cabeçalho de autorização (Bearer token) para acessar as rotas protegidas.
## Contribuição

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir uma "Issue" (problema) ou enviar um "Pull Request" (solicitação de envio de código). Será um prazer receber feedbacks e melhorias para tornar este projeto ainda melhor.
## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](/LICENSE) para obter mais informações.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)