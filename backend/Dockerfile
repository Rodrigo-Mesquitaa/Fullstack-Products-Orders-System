# Etapa 1: build da aplicação
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: produção
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3001
ENV NODE_ENV=production
CMD ["npm", "run", "start:prod"]
