FROM nginx:1.15.12-alpine

# COPY ./public /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

# Test configuration:
# RUN ["nginx","-t"]

ENTRYPOINT ["nginx","-g","daemon off;"]