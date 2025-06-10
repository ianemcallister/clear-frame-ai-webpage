<?php
$mysqli = new mysqli(
    getenv('WORDPRESS_DB_HOST'),
    getenv('WORDPRESS_DB_USER'),
    getenv('WORDPRESS_DB_PASSWORD'),
    getenv('WORDPRESS_DB_NAME'),
    getenv('WORDPRESS_DB_PORT')
);

if ($mysqli->connect_error) {
    http_response_code(500);
    echo "DB connection failed: " . $mysqli->connect_error;
} else {
    echo "DB connection successful!";
    $mysqli->close();
}
?>
