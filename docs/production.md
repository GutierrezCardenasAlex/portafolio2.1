# Produccion con Docker y Nginx

## Levantar en produccion local

```bash
docker compose up --build -d
```

La web queda disponible en:

```text
http://localhost:8080
```

## Ver logs

```bash
docker compose logs -f
```

## Detener

```bash
docker compose down
```

## Notas

- Next.js se compila en modo `standalone`.
- Nginx funciona como reverse proxy hacia el contenedor `axissoft-app`.
- Para dominio real, reemplaza `server_name _;` en `nginx/default.conf` por tu dominio.
- Para HTTPS en produccion, agrega certificados con Certbot, Cloudflare Tunnel, Traefik o un proxy administrado.
