# Para los tíos de Windows, **utilizar Docker con el WSL**, no utilicéís el CMD o el bash de git.

# Instalación de Docker compose

- **Windows Fanboys**: Se supone que los ya deberían tener el docker compose al
  instalar el [Docker Desktop](https://docs.docker.com/compose/install/)

- **Tuxers**: Ya saben como instalar esta clase de cosas.

### Comandos importantes

Para levantar los contenedores:

> docker compose up --build

Para detener los contenedores sin borrarlos

> docker compose stop

Para detener los contenedores y borrarlos con todo y sus volúmenes.

> docker compose down -v

Para instalar las dependencias del proyecto:

> docker compose run backend php vendor/composer.phar install

Para correr vuestros tests:

> docker compose run backend php vendor/composer.phar test

### Probar la conexión con MySQL

Cuando se os levante todo revisar `http://localhost:8080/db-test`. Debe salir un
error con respecto a que no se encuentra una tabla.

### Contenedores

Frontend

> http://localhost:80

Backend

> http://localhost:8080

PHPMyAdmin

> http://localhost:3000

MySQL (Para los que quieran tener alguna integración con algún plugin que
permitar visualizar la db desde el editor)

> Corriendo en **localhost** en el puerto **3306**

### Anotaciones

- La versión de PHP que se usaría es la **8.1**

- PHP Slim (Recomendación de Ajax).
