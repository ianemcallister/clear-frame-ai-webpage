FROM wordpress:latest

# Set Cloud Run's expected port
EXPOSE 80

# Declare mount point for Cloud SQL Unix socket
VOLUME ["/cloudsql"]

# Copy custom wp-content (themes/plugins/etc.)
COPY wp-content /var/www/html/wp-content

# Copy health check script
COPY healthcheck.php /var/www/html/healthcheck.php

# ✅ Copy custom wp-config.php to the WordPress root
# COPY wp-config.php /var/www/html/wp-config.php

CMD ["apache2-foreground"]
