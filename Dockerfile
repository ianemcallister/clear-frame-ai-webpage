FROM wordpress:latest

# Copy your custom themes/plugins
COPY wp-content /var/www/html/wp-content
