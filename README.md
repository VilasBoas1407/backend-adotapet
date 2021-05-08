# API Adota PET

## Features

This text you see here is \*actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Tech

- Node.js
- Express
- KnexJs
- Nodemailer

## Installation

Para rodar a API é necessário o [Node.js](https://nodejs.org/) instalado na sua máquina.

Passo a passo:

```sh
git clone https://github.com/AdotaPetV1/backend.git
cd backend
npm install
npm start
```

Após instalar o node e as dependências, você deverá realizar a criação do banco de dados disponível [aqui](https://github.com/AdotaPetV1/database).

- Rode o script de criação do banco de dados
- Após isso acesso o arquivo: src/Data/Database/ConfigDataBase.ts
- Insira as suas credenciais de acesso ao seu banco de dados.

Com o banco de dados criado e a API rodando, basta chamar as rotas.
Elas seguem um padrão.Atualmente temos essas rotas disponíveis.

```sh
http://localhost:8080/api/animal
http://localhost:8080/api/auth
http://localhost:8080/api/ong
http://localhost:8080/api/user
```

## Developed By

- Lucas Vilas Boas Lage
- Fabiana Quelott Lopes Cançado
- Douglas Guilherme Torres
- Fabricio Luiz de Souza
- Dâmaris Dwayne da Silva
- Mariana Santos Abreu
- Sunner Leonardo de Lima Silva

## License

MIT
