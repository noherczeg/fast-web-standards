# Fast Web

A simple Proof of Concept project showcasing up-to-date standards in networking and web-development.

- [X] Docker
- [X] nginx
- [X] HTTPS
- [X] HTTP2
- [X] GZip content
- [X] ES Modules
- [X] Lazy imports
- [X] Lazy CSS imports

> Currently only works in Chrome. Firefox support will arrive in version 67.

## Generate certificates
> It is necessary for HTTP2, and the `build` to succeed.

```
./gen-cert.sh
```

## Build
```
./build.sh
```

## Run
```
./run.sh
```

The server should be running at: [https://localhost:9090](https://localhost:9090).

> The `./public` folder is mapped to the Container, therefore any file modifications are instantly reflected.

## Debugging
```
docker exec -it ${CONTAINER_ID} /bin/sh
```
