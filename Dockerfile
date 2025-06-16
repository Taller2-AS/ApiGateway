FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Cambiamos el directorio para ejecutar app.js correctamente
WORKDIR /app/api

EXPOSE 3000

CMD ["node", "app.js"]
