# Autenticação de usuário usando NestJS

## Descrição

Serviço de autenticação de usuário usando NestJs

## Instalação

```bash
$ npm install
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_URL`="file:./dev.db"


## Executando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Rodando os testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```



## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_URL`=

`JWT_KEY`=


## Documentação da API


#### Cadastra de usuário

```http
  POST /register
```

    {
	"name": "Teste",
	"login":"teste",
	"password":"password"
    } 

#### Login de usuário

```http
  POST /register
```

    {
	"username": "teste",
	"password":"password"
    } 


#### Retorna o usuário logado

```http
  GET /profile
```