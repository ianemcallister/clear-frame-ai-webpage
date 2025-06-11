FROM wordpress:latest

# Set Apache to listen on port 8080 (Cloud Run requirement)
RUN sed -i 's/80/${PORT}/g' /etc/apache2/ports.conf /etc/apache2/sites-available/000-default.conf

# Set Cloud Run's expected port
ENV PORT=8080
EXPOSE 8080

# Declare mount point for Cloud SQL Unix socket
VOLUME ["/cloudsql"]

# Copy custom wp-content (themes/plugins/etc.)
COPY wp-content /var/www/html/wp-content

# Copy health check script
COPY healthcheck.php /var/www/html/healthcheck.php

# ✅ Copy custom wp-config.php to the WordPress root
COPY wp-config.php /var/www/html/wp-config.php

CMD ["apache2-foreground"]
