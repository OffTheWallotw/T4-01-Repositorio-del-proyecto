#crear una imagen a partir de node.js
#version con soporte a largo plazo
FROM node:lts-slim

#CREA Y CAMBIAMOS EL DIRECTORIO /APP
WORKDIR /app

#copiar el archivo package.json y package-lock.jason a /app
COPY ./package*.json /app/

#instalar las de dependencias de node 
RUN npm install

#copia el contenido del proyecto a /app
COPY . /app

#exponer el puerto 80
EXPOSE 80

#inicia el servidor de node
CMD [ "npm", "start"]