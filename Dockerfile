FROM node

COPY backend /app

WORKDIR app/

RUN node serverside.js