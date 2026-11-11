# nginx headers, Brotli and cache (apply on the Lightsail server)

Not applied yet. Do this on `peds4kids-web-01`, one step at a time.

## 1. Install Brotli
    sudo apt update && sudo apt install -y libnginx-mod-http-brotli-filter libnginx-mod-http-brotli-static

## 2. Global settings: `/etc/nginx/conf.d/pfk-global.conf`
    server_tokens off;
    brotli on;
    brotli_comp_level 5;
    brotli_types text/plain text/css application/javascript application/json image/svg+xml application/xml text/xml;
    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml application/xml text/xml;

## 3. Inside the HTTPS `server { }` block of the site
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    # HSTS: only after you confirm EVERY subdomain of peds4kids.com has HTTPS.
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Hashed files: cache for one year.
    location /_astro/ {
        add_header Cache-Control "public, max-age=31536000, immutable" always;
        # nginx drops server-level add_header lines inside a location, so repeat them here:
        add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header Referrer-Policy "strict-origin-when-cross-origin" always;
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    }
    # Images, icons, video (names are not hashed, so use 30 days, not "immutable").
    location ~* \.(avif|webp|jpg|jpeg|png|svg|ico|mp4|woff2)$ {
        add_header Cache-Control "public, max-age=2592000" always;
        add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header Referrer-Policy "strict-origin-when-cross-origin" always;
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    }
    # HTML: always check for a fresh copy.
    location ~* \.html$ { add_header Cache-Control "public, max-age=0, must-revalidate" always; }
    location = / { add_header Cache-Control "public, max-age=0, must-revalidate" always; }

(If the audit wants true `immutable` on images, rename the files with a hash. 30 days is the safe choice for now.)

## 4. Test and reload
    sudo nginx -t && sudo systemctl reload nginx
    curl -sI -H "Accept-Encoding: br" https://www.peds4kids.com/ | grep -i "content-encoding\|server\|strict\|permissions\|cache"
