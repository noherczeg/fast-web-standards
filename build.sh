#!/bin/sh
docker build --rm -f Dockerfile -t fast-web/nginx:latest . --no-cache
