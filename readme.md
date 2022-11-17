*********    Pro-FY API    *********

1

- creamos en mongo atlas la organizacion adentro del cluster en este caso Pro-fy

https://www.mongodb.com/atlas/database

generamos por usuario:

usurario:   prueba
clave:   xxxxxxxxxx
- una vez creado el usuario agregamos a los demas miembros del equipo en la bd.

- una vez terminado eso, le damos en conectar y en la opcion de 
conectar con aplicacion nos da la DB_URI lo gurdamos para cuando creemos el .ENV y la conexion.


2 
- creamos nuestra carpeta API empezamos la conexion con express y puerto

- damos git init, para generar la estructura del package.json
en este caso agregamos estas dependencias que vamos a usar por ahora:

   "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-validator": "^6.14.2",
    "mongoose": "^6.7.0",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^2.0.20"

    - creamos el archivo .gitignore en este caso ponemos "por buena practica" los node_modules/

    - creamos un archivo .app para ir haciendo una conexion de prueba:

    ******************  APP **********************************

const express = require("express")
const cors = require("cors")
const app = express()



app.use(cors())


const port = 3001


app.listen(port, () => {
  console.log(`APP esta conectada por http://localhost:${port}`);
})

****************************************************************
** en el caso de arriba tambien usamos cors para evitar el error de origen cruzado entre los navegadores.
declaro mi funcion inicial para que escuche en el puerto 3001

2.1 
variables de entorno

- la variable de entorno es el archivo .env lo creamos en API es "una buena practica" crear un archivo .env.example aparte del .env para indicar a cada desarrollador, que datos debe configurar para su entorno local cuando trabajamos en colaborativo  y un archivo .env ignorado (en gitignore) por defecto donde vas a incluir los datos reales para cada entorno.

- importamos en app el dotenv este paquete lo que hace es que funcionen bien las variables de entorno en nuestros sistema y lo ponmos asi:
     require("dotenv").config()

- luego donde teniamos declarado el puerto fijo en app pasamos la variable de entorno asi:

      * const port = process.env.PORT tambien podemos agregar un secundario de backup asi:

      * const port = process.env.PORT || 3000

en este caso lo que estamos haciendo es que el puerto por default es el de la variable de entorno que seria 3001 y si por algun razon no pudiera iria al 3000.

ahora corremos la prueba y nos da el siguiente error:

image.png

en este caso es bueno por que nos responde el puerto que no hay nada para traer con el  Cannot GET /

3
scaffold (andamiaje)
normalmente se encuentra en documentaciones la palabra scaffold que su traduccion es andamiaje, en este caso se refiere a el "esqueleto" la estructura de las carpetas que vamos a ir utilizando en el backend de nuestra aplicación Pro-FY.
Nosotros aqui vamos a aplicar el modelo vista controlador (MVC), 

siguiendo esto vamos a crear las carpetas:

- models  (nuestros modelos)
- controllers (los controladores)
- routes      (las rutas)
- config      (para poner configuraciones o paquete de terceros)
- utils       (funciones "helpers" funciones ayudantes para tareas repetitivas)
- storage     (para almacenar archivos .jpg .png etc.)

4
conexion con mongoDb


nosotros vamos a usar la base no relacional MONGO ya instamos un paquete que se llama mongoose, este paquete nos ayuda a gestionar la conexion con MongoDB

creamos la conexion con mongo atlas, para eso creamos en la carpeta config un archivo llamado mongo.js que va a hacer esto, le ponemos mongo para ubicarlo de manera rapida y sencilla y si hay un problema o cambio tenerlo a la mano.

en el archinvo mongo.js
- declaramos el paquete de mongoose
- funcion flecha vacia llamada dbConnect
- exportamos la funcion para poderla usar mas al rato en el archivo .app 

en el archivo .env ponemos la uri que nos dio mongo atlas y configuramos los accesos en este caso <usuario>  <password>

https://www.mongodb.com/docs/atlas/troubleshoot-connection/#special-characters-in-connection-string-password

vamos al archivo mongo.js 

adentro de la funcion dbConnect instanciamos el .env:

  const DB_URI = process.env.DB_URI(DB_URI, {
    parametros de mongoose
  })

llamamos a la conexion de mongoose con mongoose.connect

le pasamos los siguientes parametros de conexion que mongoose usa:
      - useNewUrlParser: true, // https://www.folkstalk.com/2022/09/mongodb-use-new-url-parser-with-code-examples.html
      - useUnifiedTopology: true, // https://www.folkstalk.com/2022/09/mongoose-use-unified-topology-with-code-examples.html

  en esta funcion vamos a recibir un callback que puede ser un error o una respuesta

  (err, res) => {
    en este caso ponemos la logica para poder indicarnos si estamos conectados a la db o no
  }

  asi:

  (err, res) => {
      if (!err) {
        console.log('**** CONEXION CORRECTA ****');
      } else {
        console.log('**** ERROR DE CONEXION ****');

      }
    }

despues de ya tener listo nuestro archivo de conexion mongo.js, lo invocamos desde app.js para usarlo en la conexion  y simplemente la invocamos
  dbConnect()

ejecutamos node app.js

  image.png


creamos los modelos

creamos el modelo users:





  

  





