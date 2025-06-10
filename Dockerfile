# Use official WordPress image
FROM wordpress:latest

# Install iptables to redirect port 8080 → 80
RUN apt-get update && apt-get install -y iptables \
  && iptables -t nat -A PREROUTING -p tcp --dport 8080 -j REDIRECT --to-port 80

# Cloud Run expects your container to listen on port 8080
EXPOSE 8080
ENV PORT=8080

# Copy your custom wp-content (themes, plugins, etc.)
COPY wp-content /var/www/html/wp-content

# Start Apache (same as in original image)
CMD ["apache2-foreground"]
