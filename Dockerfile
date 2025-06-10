# Use the official WordPress image as a base
FROM wordpress:latest

# Install iptables to redirect 8080 → 80 (for Cloud Run)
RUN apt-get update && apt-get install -y iptables \
  && iptables -t nat -A PREROUTING -p tcp --dport 8080 -j REDIRECT --to-port 80

# Copy your custom themes/plugins into the container
COPY wp-content /var/www/html/wp-content

# Cloud Run requires the app to listen on 8080
EXPOSE 8080
ENV PORT=8080

CMD ["apache2-foreground"]
