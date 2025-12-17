# 🧱 Fullstack Products & Orders System

Sistema completo de gestão de **Produtos** e **Pedidos**, desenvolvido com **NestJS (Backend)**, **Next.js (Frontend)** e **SQL Server (Banco de Dados)**.  
O projeto foi arquitetado com **boas práticas**, **microserviços**, **Docker** e **ambientes separados para desenvolvimento e produção**.

---

## 🚀 Tecnologias Utilizadas

### 🔹 Backend
- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [SQL Server](https://www.microsoft.com/sql-server/)
- [JWT Authentication](https://jwt.io/)
- [Swagger](https://swagger.io/)

### 🔹 Frontend
- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Jest](https://jestjs.io/)

### 🔹 Infraestrutura
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [SQL Server 2022 (mcr.microsoft.com)](https://hub.docker.com/_/microsoft-mssql-server)

---

## ⚙️ Estrutura de Pastas

```bash
fullstack-products-orders/
├── backend/                    # API NestJS (Produtos, Pedidos, Auth)
├── frontend/                   # App Next.js (Interface e Consumo da API)
├── docker-compose.yml           # Orquestração dos serviços
├── docker-compose.override.yml  # Hot Reload Dev
├── .env                         # Configurações de ambiente
├── .gitignore                   # Ignora arquivos desnecessários
└── README.md                    # Documentação completa


## ⚡ Pré-requisitos

Antes de rodar o projeto, instale:

🐳 Docker + Docker Compose

🟢 Node.js >= 18.x

📦 npm >= 9.x


$$ ⚙️ Configuração de Ambiente

Crie um arquivo chamado .env na raiz do projeto com o seguinte conteúdo:

# Banco de Dados
DB_HOST=db
DB_PORT=1433
DB_USER=sa
DB_PASSWORD=YourStrong!Passw0rd
DB_NAME=ProductsOrdersDB

# Backend
BACKEND_PORT=3001
BACKEND_JWT_SECRET=supersecretkey
BACKEND_ENV=production

# Frontend
FRONTEND_PORT=3000
NEXT_PUBLIC_API_URL=http://backend:3001


# ⚠️ Atenção:
O projeto ainda não possui um usuário de banco de dados configurado.
É necessário criar manualmente um usuário no SQL Server e atualizar as credenciais no .env.

🧩 Criando um usuário no SQL Server

Acesse o container do banco e execute os comandos abaixo:

CREATE LOGIN appuser WITH PASSWORD = 'StrongPass123!';
CREATE USER appuser FOR LOGIN appuser;
ALTER ROLE db_owner ADD MEMBER appuser;

Depois, atualize o .env com:
DB_USER=appuser
DB_PASSWORD=StrongPass123!


# 🐳 Execução via Docker (Recomendado)
🔹 Modo Produção

Build otimizado e containers prontos para deploy.
docker compose up --build


📍 Acesse:

🌐 Frontend: http://localhost:3000

⚙️ Backend (Swagger): http://localhost:3001/api

🗄️ Banco de Dados: SQL Server na porta 1433

# 🔹 Modo Desenvolvimento (Hot Reload)

Executa com volumes mapeados e auto-reload no backend e frontend.
docker compose -f docker-compose.yml -f docker-compose.override.yml up --build

📍 Acesse:

🌐 Frontend: http://localhost:3000

⚙️ Backend: http://localhost:3001/api

## 🧪 Rodando Testes
🔹 Frontend (Next.js + Jest)
cd frontend
npm install
npm run test


🔹 Backend (NestJS + Jest)
cd backend
npm install
npm run test


🧠 Estrutura dos Serviços
🔹 Backend (NestJS)
backend/src/
├── app.module.ts
├── main.ts
├── config/
│   ├── database.config.ts
│   └── swagger.config.ts
├── common/
│   └── middleware/logger.middleware.ts
├── products/
│   ├── dto/
│   ├── entities/
│   ├── products.controller.ts
│   ├── products.service.ts
│   ├── products.module.ts
│   └── products.repository.ts
├── orders/
│   ├── dto/
│   ├── entities/
│   ├── orders.controller.ts
│   ├── orders.service.ts
│   ├── orders.module.ts
│   └── orders.repository.ts
└── auth/
    ├── auth.controller.ts
    ├── auth.service.ts
    ├── auth.module.ts
    └── jwt.strategy.ts


🔹 Frontend (Next.js)
frontend/src/
├── pages/
│   ├── index.tsx
│   ├── login.tsx
│   ├── products/
│   │   ├── index.tsx
│   │   ├── create.tsx
│   │   └── [id].tsx
│   └── orders/
│       ├── index.tsx
│       └── create.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── ProductForm.tsx
│   ├── OrderCard.tsx
│   └── OrderForm.tsx
├── services/
│   ├── api.ts
│   ├── productService.ts
│   ├── orderService.ts
│   └── authService.ts
├── store/
│   ├── productStore.ts
│   ├── orderStore.ts
│   └── authStore.ts
└── styles/
    └── globals.css


🧩 Teste do Banco de Dados

Para verificar se o banco está rodando corretamente, execute:

docker exec -it sqlserver /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "YourStrong!Passw0rd"


E dentro do prompt SQL:

SELECT name FROM sys.databases;

📦 Deploy em Produção

O deploy pode ser feito facilmente em um servidor Docker (como VPS, AWS EC2, Azure VM, etc.):

docker compose -f docker-compose.yml up -d --build


Após o build:

O backend e frontend sobem automaticamente.

O SQL Server cria o banco no volume persistente sqlserver_data.

🧰 Scripts Úteis
Comando	Descrição
docker compose up --build	Executa o ambiente completo em modo produção
docker compose -f docker-compose.yml -f docker-compose.override.yml up --build	Modo desenvolvimento com hot reload
npm run test	Executa testes (backend ou frontend)
docker ps	Lista containers ativos
docker logs <container>	Visualiza logs de um container
⚠️ Observações Importantes

🔐 O sistema não cria usuário de banco automaticamente — configure-o manualmente conforme instruções acima.

🧩 Certifique-se de atualizar o .env com credenciais válidas antes de subir o projeto.

🐳 Em ambientes Windows, use YourStrong!Passw0rd como senha padrão do SQL Server para evitar falhas de inicialização.

⚙️ Para testes de API, use o Swagger disponível em:
http://localhost:3001/api
