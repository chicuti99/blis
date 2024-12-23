# FROM node:alpine

# # Configura o diretório de trabalho
# WORKDIR /app

# # Copia os arquivos necessários para o container
# COPY package.json /app/package.json

# # Instala o OpenSSL 3 e dependências básicas
# RUN apk add --no-cache openssl3

# # Instala as dependências do projeto
# RUN npm install

# # Copia os arquivos restantes para o container
# COPY . /app

# # Gera os binários do Prisma para o ambiente Docker
# RUN npx prisma generate

# # Expõe a porta para execução da aplicação
# EXPOSE 3000

# # Comando para iniciar o servidor
# CMD ["npm", "run", "dev"]

FROM node:alpine

# Configura o diretório de trabalho
WORKDIR /app

# Copia o package.json e instala as dependências
COPY package.json /app/package.json

# Instala OpenSSL 3 e dependências básicas
RUN apk add --no-cache openssl3

# Instala as dependências do projeto
RUN npm install

# Copia os arquivos restantes para o container
COPY . /app

# Instala o nodemon globalmente para reiniciar automaticamente em mudanças
RUN npm install -g nodemon

# Gera os binários do Prisma para o ambiente Docker
RUN npx prisma generate

# Expõe a porta para execução da aplicação
EXPOSE 3000

# Comando para iniciar o servidor usando nodemon e ver se dessa vez realmente vai funcionar
CMD ["nodemon", "--watch", ".", "--exec", "npm run dev"]
