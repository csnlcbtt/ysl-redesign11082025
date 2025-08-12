# Redirect Configuration

## For Apache (.htaccess)
```apache
RewriteEngine On

# Redirect old products-services URLs to new structure
RewriteRule ^products-services/products$ /products [R=301,L]
RewriteRule ^products-services/services$ /services [R=301,L]
RewriteRule ^products-services$ /products [R=301,L]

# Redirect old quality URLs
RewriteRule ^about/quality$ /quality [R=301,L]

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## For Nginx
```nginx
# Redirect old products-services URLs
location /products-services/products {
    return 301 /products;
}

location /products-services/services {
    return 301 /services;
}

location /products-services {
    return 301 /products;
}

location /about/quality {
    return 301 /quality;
}

# Force HTTPS
server {
    listen 80;
    server_name yorkestructuresltd.com www.yorkestructuresltd.com;
    return 301 https://$server_name$request_uri;
}
```

## For Express.js (server-side)
Add to server/routes.ts:
```javascript
// Redirects for old URLs
app.get('/products-services/products', (req, res) => {
    res.redirect(301, '/products');
});

app.get('/products-services/services', (req, res) => {
    res.redirect(301, '/services');
});

app.get('/products-services', (req, res) => {
    res.redirect(301, '/products');
});

app.get('/about/quality', (req, res) => {
    res.redirect(301, '/quality');
});
```
