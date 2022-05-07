# Clase 2
## MongoDB
Para guardar elementos en determinado formato se utiliza un ORM

¿Como funciona?
Utiliza un parametro de busqueda y realiza las consultas por nosotros.
Nos permite comunicarnos con la base de datos en nuestro lenguaje de programacion de preferencia.
let querySearch = {
  firstName: 'Cristian'
}
orm.findAll(querySearch)

Mongoose -> ORM para MONGODB

docker-compose -> Es para crear un servidor mongodb en docker
docker-compose up -d -> Para correr el servidor
docker ps -a -> Para revisar el servidor
