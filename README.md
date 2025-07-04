
# 🏗️ Taller de Arquitectura de Sistemas - 2025

Este repositorio contiene el proyecto desarrollado en el contexto del **Taller de Arquitectura de Sistemas** de la Universidad Católica del Norte. Su objetivo es demostrar la implementación de una arquitectura basada en microservicios utilizando Node.js, gRPC, Docker, y diversos motores de bases de datos.

---

## 🧱 Arquitectura General

- **API Gateway** con Express + gRPC
- Microservicios independientes para:
  - Usuarios (`users-service`)
  - Autenticación (`auth-service`)
  - Videos (`videos-service`)
  - Facturación (`invoices-service`)
  - Interacciones sociales (`social-service`)
  - Monitoreo (`monitoring-service`)
  - Playlists (`playlists-service`)
- Comunicación asíncrona vía **RabbitMQ**
- Balanceo de carga con **Nginx**
- Persistencia de datos con **MongoDB**, **PostgreSQL** y **MariaDB**

---

## 🚀 Tecnologías Principales

- Node.js `v22.14.0`
- Express.js
- gRPC con `@grpc/grpc-js`
- RabbitMQ
- Docker & Docker Compose
- MongoDB `v5.0.3` / MariaDB `v10.7.4` / PostgreSQL `v15`
- Prisma / Sequelize / Mongoose
- JWT, bcrypt, dotenv

---

## ⚙️ Instalación y Puesta en Marcha

### 1. Clonar el proyecto

```bash
git clone https://github.com/Taller2-AS/ApiGateway.git
cd taller-arquitectura-2025
```

### 2. Configurar las variables de entorno

```bash
cp .env.example .env
```

Editar `.env` en cada microservicio si es necesario (conexiones a BD, puertos gRPC, claves JWT, etc).

### 3. Levantar los servicios con Docker

```bash
docker-compose up --build
```

Esto construirá y levantará todos los microservicios, incluyendo bases de datos, RabbitMQ, Nginx y múltiples instancias de API Gateway (`apigateway1`, `apigateway2`, `apigateway3`).

---

## 📦 Comandos útiles

### Iniciar aplicación en desarrollo

```bash
npm install
npm start
```

## 🛠 Microservicios Implementados

- **Auth Service**: Manejo de autenticación y tokens JWT
- **Users Service**: CRUD de usuarios con PostgreSQL
- **Videos Service**: Gestión de videos con MongoDB
- **Invoices Service**: Manejo de facturación con MariaDB
- **Social Service**: Likes y comentarios (MongoDB)
- **Monitoring Service**: Seguimiento de actividad (MongoDB)
- **Playlists Service**: Listas de reproducción (PostgreSQL)

---

## 🧪 Herramientas Recomendadas

- [Postman](https://www.postman.com/) – Testing de APIs
- [MongoDB Compass](https://www.mongodb.com/try/download/compass) – Visualización NoSQL
- [DBeaver](https://dbeaver.io/) – Cliente SQL universal
- [RabbitMQ UI](http://localhost:15672) – Gestión de colas y consumidores

---

## 📚 Recomendaciones

- Utilizar `nodemon` para desarrollo local.
- Asegurar la comunicación gRPC en producción con certificados.
- Implementar logs y métricas por microservicio para monitoreo.

---