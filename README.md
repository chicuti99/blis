
# Projeto Blis API


Este projeto é uma API RESTful construída com Node.js, Express, Prisma, MySQL e Swagger para documentação.

Tecnologias utilizadas
Node.js 
Express 
Prisma 
MySQL 
Swagger 
Docker


## Requisitos

 - [NodeJs v19.9.0](https://nodejs.org/en/download/package-manager)
 - [Docker - windows](https://www.docker.com/get-started/)
 - [Docker - ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-pt)


## Deploy

crie um arquivo .env na raiz do projeto seguindo esse modelo

DATABASE_URL=mysql://docker:blis@localhost:3306/mydatabase
JWT_SECRET=68830aef4dbfad181162f9251a1da51b

JWT_SECRET pode ser trocado por outro salt da preferencia,mas o DATABASE_URL tem que estar igual

Para fazer o deploy desse projeto rode

```bash
  docker compose build
```
logo apos rode

```bash
  docker compose up
```


## Documentação da API

#### Swagger
toda a documentação pode ser encontrada
```http
   /api-docs
```

