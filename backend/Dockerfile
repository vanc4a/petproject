FROM node

COPY . /app

WORKDIR /app

EXPOSE 3000

RUN npm install

RUN npm install -g nodemon

ENTRYPOINT npm start