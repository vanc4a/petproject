FROM node

COPY . /app

WORKDIR /app

EXPOSE 3000

RUN npm install -g nodemon

ENTRYPOINT nodemon serverside.js