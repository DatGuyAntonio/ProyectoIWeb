# Etapa 1: Compilar la aplicación Angular
FROM node:20 AS build

# Establecer el directorio de trabajo
WORKDIR /PWEB

# Instalar Angular CLI (asegúrate de usar una versión actualizada)
RUN npm install -g @angular/cli

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Compilar la aplicación Angular
RUN ng build 

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar la aplicación Angular compilada desde la etapa anterior
COPY --from=build C:\Users\sotol.DESKTOP-16IB21S\OneDrive\Escritorio\ProyectoCombo\pWeb\dist /usr/share/nginx/html

# Exponer el puerto 4200
EXPOSE 4200

# Iniciar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
