FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY frontend-web/build /www/build

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf