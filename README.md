# T4-01-Repositorio-del-proyecto

El objetivo general de un proyecto de software basado en aprendizaje basado en problemas (ABP) es ayudar a los estudiantes a aprender de forma más significativa 
y desarrollar habilidades de pensamiento crítico, colaboración y resolución de problemas.
El ABP tiene como objetivo que el estudiante aprenda y sepa manejar el conocimiento que ya tiene, reconocer el que le falta y buscarlo para ponerse al día; seleccionar qué es lo más relevante para un contexto concreto y alcanzar un nivel de comprensión adecuado para poder adaptarlo a todo tipo de situaciones o circunstancias. 
este tipo de metodología alienta a los estudiantes a desarrollar habilidades nuevas: 

-Desarrollo del Pensamiento crítico y práctico 
-Análisis y resolución de problemas 
-Trabajo en equipo y productividad 
-Habilidades de comunicación 
-Gestión del tiempo 
-Construir su aprendizaje basado en teorías y problemas de las organizaciones contemporáneas 


## Tabla de contenido

- [API RESTful con Node.js](#api-restful-con-nodejs)
  - [Tabla de contenido](#tabla-de-contenido)
  - [Requisitos de instalación](#requisitos-de-instalación)
  - [Instrucciones para la instalación](#instrucciones-para-la-instalación)
  - [Documentación detallada](#documentación-detallada)
  - [Enlaces externos](#enlaces-externos)

## Requisitos de instalación

Asegúrate de tener instalado y configurado Docker antes de comenzar.

- [Docker](https://www.docker.com)

## Instrucciones para la instalación

1. Clonar el repositorio en la máquina local:
   
   ```sh
   git clone https://github.com/francerz/node-restful.git
   ```

2. Navegar al directorio del proyecto:
   
   ```sh
   cd node-restful
   ```

3. Ejecutar el siguiente comando para iniciar los contenedores:

    ```sh
    docker-compose up -d
    ```

    > **IMPORTANTE**
    >
    > Debe estar iniciado el Docker engine para ejecutar el comando anterior,
    > si no lo está, se devolverá un mensaje de error indicando que no se
    > encontró el docker daemon.

4. La API estará disponible en `http://localhost:3100`.

## Documentación detallada

Para obtener información detallada sobre los endpoints y cómo utilizar la API,
consulta la [documentación detallada](./docs/README.md).

## Enlaces externos

- [Node.js](https://www.nodejs.org)
- [Docker](https://www.docker.com)
