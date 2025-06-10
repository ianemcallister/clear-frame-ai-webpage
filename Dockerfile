FROM wordpress:latest

# Set Apache to listen on port 8080 (Cloud Run requirement)
RUN sed -i 's/80/${PORT}/g' /etc/apache2/ports.conf /etc/apache2/sites-available/000-default.conf

# Set Cloud Run's expected port
ENV PORT=8080
EXPOSE 8080

# Declare mount point for Cloud SQL Unix socket
VOLUME ["/cloudsql"]

# Copy in your custom themes/plugins/etc.
COPY wp-content /var/www/html/wp-content

CMD ["apache2-foreground"]
