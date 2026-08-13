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

## Dominio sin puerto + SSL

Mantén Docker publicado en `8083:80` y usa Nginx del servidor como proxy frontal en los puertos publicos `80` y `443`.

1. Primero copia la configuracion HTTP inicial al Nginx del servidor:

```bash
sudo cp nginx/host-axissoft-http.conf /etc/nginx/sites-available/axissoft.dev.cybernovatech.space
sudo ln -s /etc/nginx/sites-available/axissoft.dev.cybernovatech.space /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

2. Crea el certificado con Certbot:

```bash
sudo certbot --nginx -d axissoft.dev.cybernovatech.space
```

3. Si prefieres usar la configuracion SSL manual del repositorio, despues de emitir el certificado reemplaza el archivo activo:

```bash
sudo cp nginx/host-axissoft-ssl.conf /etc/nginx/sites-available/axissoft.dev.cybernovatech.space
```

4. Valida y recarga Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Despues de eso la web debe abrir en:

```text
https://axissoft.dev.cybernovatech.space
```

sin mostrar `:8083`.
