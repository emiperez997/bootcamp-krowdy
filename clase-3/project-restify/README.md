# Clase 1
## Restify
Se utiliza un _esquema de rutas_:
- api/v1
  - profiles/update
  - profiles/get
  - profiles/delete
- api/v2
  - profiles/update
  - profiles/get
  - profiles/delete
- api/v3
  - profiles/update
  - profiles/get
  - profiles/delete

## Rutas
Url de profile: localhost:8000/api/v1/profile

## Docker
docker-compose -> Es para crear un servidor mongodb en docker
docker-compose up -d -> Para correr el servidor
docker ps -a -> Para revisar el servidor

- Configuracion docker-compose: 
version: '4.4'
services:
   mongo:
     image: mongo:4.4
     restart: always
     ports:
       - 27017:27017
     environment:
       MONGO_INITDB_ROOT_USERNAME: emi
       MONGO_INITDB_ROOT_PASSWORD: krowdy

## Comandos
- ffmpeg -> sudo apt-get install ffmpeg
