# backend-challenge_pickit

# Descripción del Proyecto como Prueba Técnica (Backend)

Este proyecto responde a los requerimientos de la prueba técnica de Pickit. En ningún momento pretende ser llevado más allá que las pruebas locales o de pruebas por parte de la empresa. Este correponde al back-end del aplicativo.

### Tech
El proyecto del lado del Back end usa diferentes librerías para su funcionamiento

* [Node.js](https://nodejs.org/es/) - Entorno de desarrollo
* [Express](https://expressjs.com/) - Framework para Node.js
* [mongoose](https://mongoosejs.com/) - ORM para MongoDB
* [Jest](https://jestjs.io/) - Test Runner de pruebas
* [moment](https://momentjs.com/) - Liberia
* [Nodemon](https://www.npmjs.com/package/nodemon) - Levantar servidor en modo Watcher

# Instalación

El proyecto requiere [Node.js](https://nodejs.org/es/) v14+ para correr. Perferiblemente la versión LTS actual.

### Instalacción de dependencias mencionadas

```sh
$ npm install 
```
### Levantar proyecto local
```sh
$ npm start
```

### Levantar proyecto local con Nodemon
```sh
$ npm run start:dev
```

### Pruebas Unitarias
```sh
$ npm test
```
## Elementos importantes a la hora de levantar el Servidor
- El servidor está conectado a la base de datos NoSQL MongoDB. Por ello desde el repositorio, se provee el .env donde está la URI para la conexión. Esta URI ya tiene una conexión estable por defecto a MongoAtlas para evitar alguna configuración local de la BD y por beneficios de pruebas en esta prueba técnica.

- El servidor corre por defecto el puerto 5000. En caso de escoger otro, se debe modificar unicamente el archivo .env.

- Aunque por buenas prácticas de un proyecto real, nunca se debe de exponer el archivo .env, por necesidades particulares del ejercicio propuesto como prueba técnica se hace la excepción y se provee este archivo en el repositorio. 


## Consideraciones varias sobre la realización del proyecto
 - En cuanto a la realización de pruebas unitarias, por cuestiones de tiempo, no pude realizar más suites de test deseados desde el principio.
 
 - También por cuestiones de tiempo, no se pudo implementar una capa de Middlewares para validar los datos que llegan de un Cliente al Servidor (Aunque generalmente esto se puede hacer en el modelo, por practicas de arquitectura limpia, decidí no concentrar esta lógica de validaciones en los modelos, para evitar el acomplamiento innecesario en partes del aplicativo)
 
 - Se proucra realizar una versión simplificada de una Arquitectura Limpia dividida en varias capas necesarias.u

