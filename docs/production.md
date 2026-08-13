# Produccion con Docker y Nginx

## Levantar en produccion local

```bash
docker compose up --build -d
```

La web queda disponible en:

```text
http://localhost:8083
http://axissoft.dev.cybernovatech.space
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
- El dominio configurado en Nginx es `axissoft.dev.cybernovatech.space`.
- Si el servidor publica Nginx en el puerto `8083`, el dominio debe apuntar al proxy externo que enruta HTTP/HTTPS hacia ese puerto, o se debe abrir `http://axissoft.dev.cybernovatech.space:8083`.
- Para HTTPS en produccion, agrega certificados con Certbot, Cloudflare Tunnel, Traefik o un proxy administrado.
