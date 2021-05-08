# MyCustomInput

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Pasos para arrancar el servidor de la aplicación
0. Instalar [NodeJs](https://nodejs.org/en/).
1. Instalar [Git](https://git-scm.com/downloads).
2. Instalar Angular CLI desde línea de comandos >> `npm install -g @angular/cli`.
3. Clonar el repositorio >> `git clone https://github.com/alexpaz-dev/angular-custom-input.git`.
4. Desde línea de comandos acceder a la ruta del proyecto descargado y ejecutar >> `npm install`.
5. Arrancar la aplicación mediante el comando `ng serve --o`.
6. Puedes disfrutar de la aplicación en la URL http://localhost:4200/ de tu navegador predeterminado.

## Running unit tests

Run `npx cypress run` to execute the unit tests via [Cypress](https://docs.cypress.io).

Run `npx cypress open` to open de IDE and execute the unit tests.

## Dockerizado de la aplicación.
0. Instalar [Docker Desktop](https://docs.docker.com/desktop/).
1. Una vez instalado Docker, acceder a la ruta del proyecto descargado y ejecutar >> `docker build -t angular-app .`
2. Una vez construida la imagen, arrancar el contenedor Docker a partir de esta imagen >> `docker run -dp 4200:80 angular-app`
3. Puedes disfrutar de la aplicación en la URL http://localhost:4200/ de tu navegador predeterminado.