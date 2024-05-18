#  Desafío - Mi repertorio 🎵🎶🎼


Este repositorio contiene el código fuente de la aplicación web desarrollada para el desafío en el que validaremos nuestros conocimientos sobre Levantar un servidor con
conexión a PostgreSQL, Insertar registros, Consultar registros, Actualizar registros y Eliminar registros. 

## Descripción de la solución 💻

La escuela de música “E-Sueño” está motivando a sus estudiantes de canto a presentarse en vivo y se puso en contacto con el restaurante del sector para usar su tarima e iniciar un
calendario de presentaciones. Para conocer y gestionar las canciones que cantarán sus estudiantes, la escuela contrató a un desarrollador freelance para la creación de una
aplicación tipo CRUD.
En este desafío deberás desarrollar un servidor con Express que utilice el paquete pg para conectarse con PostgreSQL y utilice funciones asíncronas para hacer las consultas a la base
de datos.


Siguiendo esta gráfica: 

![image](https://github.com/CamiSerantoni/Mi_repertorio/assets/152921799/426cf9fb-99da-46ee-a50a-e57f8b7caafa)


## Requerimientos: 📊📎🧮

1. Crear una ruta POST /cancion que reciba los datos correspondientes a una canción y realice a través de una función asíncrona la inserción en la tabla canciones.
(3 Puntos)
2. Crear una ruta GET /canciones que devuelva un JSON con los registros de la tabla canciones.(2 Puntos)
3. Crear una ruta PUT /cancion que reciba los datos de una canción que se desea editar, ejecuta una función asíncrona para hacer la consulta SQL correspondiente y actualice
ese registro de la tabla canciones.
(3 Puntos)
4. Crear una ruta DELETE /cancion que reciba por queryString el id de una canción y realiza una consulta SQL a través de una función asíncrona para eliminarla de la base
de datos.
(2 Puntos)

## Estructura del Proyecto 🩻

El proyecto está estructurado de la siguiente manera:

 ![image](https://github.com/CamiSerantoni/Mi_repertorio/assets/152921799/76ae5821-849e-46b5-9232-22bfa0ecee6a)

En busca de seguir los lineamientoes de MVC

## Dependencias 🪢

El proyecto utiliza las siguientes dependencias principales:

- **Express**: Para la creación del servidor web.
- **Axios**
- **Bootstrap**
- **Pg**
- **Dotenv**

## Requisitos y Configuración 🔩🛠️🧰

Para ejecutar el proyecto localmente, asegúrate de tener instalado Node.js y npm. Luego, sigue estos pasos:

1. Clona este repositorio: `git clone <URL_del_repositorio>`
2. Accede al directorio del proyecto: `cd <nombre_del_directorio>`
3. Instala las dependencias del proyecto: `npm install`
4. Inicia el servidor local: `npm run dev`
5. Abre tu navegador web y accede a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Integrantes: 😺

- Ma Cristina Contreras C.
- Camila Serantoni R. 
