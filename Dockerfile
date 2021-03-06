# Stage 0, "build-stage", based on Node.js, to build and compile Angular
FROM node:latest as build-stage
WORKDIR /app

# Copiamos solo el package.json para mantener una capa que cambie menos con los node_modules
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:latest
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf