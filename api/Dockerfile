# Usa Node.js
FROM node:20

# Crea carpeta de trabajo
WORKDIR /app

# Copia archivos necesarios
COPY package*.json ./
RUN npm install

# Copia el resto del código (asegúrate de incluir .env si es necesario)
COPY . .

# Expón el puerto y lanza la app
EXPOSE 3000
CMD ["node", "app.js"]
