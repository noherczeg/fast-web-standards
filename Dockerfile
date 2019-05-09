FROM nginx:1.15.12-alpine

RUN mkdir -p /etc/nginx/ssl
COPY certs/ /etc/nginx/ssl/
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

# Test configuration:
# RUN ["nginx","-t"]

ENTRYPOINT ["nginx","-g","daemon off;"]
