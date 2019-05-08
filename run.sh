#!/bin/sh

# Add -d to run in background
docker run --rm -p 9090:80 -v $PWD/public:/var/www fast-web/nginx:latest
