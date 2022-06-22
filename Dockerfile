FROM node

COPY backend /app

WORKDIR app/

EXPOSE 3000

RUN node serverside.js