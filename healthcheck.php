<?php
$host = null; // NULL tells mysqli to use the UNIX socket instead of TCP/IP
$socket = getenv('WORDPRESS_DB_HOST'); // This is something like /cloudsql/...

$mysqli = new mysqli(
    $host,
    getenv('WORDPRESS_DB_USER'),
    getenv('WORDPRESS_DB_PASSWORD'),
    getenv('WORDPRESS_DB_NAME'),
    getenv('WORDPRESS_DB_PORT'),
    $socket
);

if ($mysqli->connect_error) {
    http_response_code(500);
    echo "DB connection failed: " . $mysqli->connect_error;
} else {
    echo "DB connection successful!";
    $mysqli->close();
}
?>
