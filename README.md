# task-manager

## MODELO ARQUITECTURA C4

https://drive.google.com/file/d/1zL8RBXeeHMY_Ja-oeaMCyIRICha3oSAt/view?usp=drive_link

# Definición de requerimientos 

## La interfaz de usuario: 

- Campos de entrada usuario y contraseña  

- Botón inicio de sesión 

- Enlace de recuperación de contraseña 

- Enlace de registro de usuario 

## Autenticación: 

- Validación de las entradas: que no estén vacíos, campo correo cumpla con el formato establecido. 

- Autenticación de usuario: verificación de las credenciales del usuario en la BD para confirmar identidad. 

- Gestión de sesiones: establecimiento de sesiones para mantener al usuario activo después de loguearse exitosamente. 

- Seguridad: implementación de medidas de seguridad, como encriptación de contraseña y protección de ataques de fuerza bruta. 

## Integración de la base de datos y API: 

- Consulta de base de datos: utilización de consultas SQL para verificar las credenciales del usuario almacenadas en la base de datos. 

- Integración de API: Utilización de una API para la autenticación de usuarios 

- Gestión de errores: Manejo adecuado de errores de conexión con la base de datos o la API 

## Requerimientos funcionales: 

- El sistema debe permitir registrarse en la plataforma web 

- El sistema debe permitir iniciar sesión con usuario y contraseña 

- El sistema debe permitir recuperar la contraseña  

## Requerimientos no funcionales: 

- El sistema debe garantizar que la contraseña debe tener un formato establecido  

- El sistema debe garantizar que la contraseña se almacene de manera segura 

- El sistema debe garantizar que estará disponible para su uso siempre. 



## Instalación front - Next.js

Requiere de [Node.js](https://nodejs.org/) v20+.

Descargamos el front que esta en la carpeta task-manager-front por cmd nos ubicamos de esta manera:  

```sh
\task-manager\task-manager-front
```
Ejecutamos el siguiente codigo en la cmd:

```sh
npm run dev
```
Al ejecutar el comando anterior, ya podemos observar en:

```sh
http://localhost:3000/
```

Nuestro aplicativo web en Next.js 
Aqui de entrada se vera el Login.



## Instalación backend - Nest.js

Requiere de su instalacion Nest.js

En la cmd ejecutamos el siguiente código:

```sh
npm i -g @nestjs/cli

```

Para ejecutar la aplicación, ejecutamos el siguiente código en la cmd:

```sh
npm run start

```