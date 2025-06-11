<?php
// Required environment variables
$required_env_vars = [
    'WORDPRESS_DB_HOST',
    'WORDPRESS_DB_USER',
    'WORDPRESS_DB_PASSWORD',
    'WORDPRESS_DB_NAME',
    'WORDPRESS_DB_PORT'
];

// Check for missing variables
$missing_vars = array_filter($required_env_vars, function ($var) {
    return getenv($var) === false || getenv($var) === '';
});

if (!empty($missing_vars)) {
    http_response_code(500);
    echo "Missing required environment variables: " . implode(', ', $missing_vars);
    exit;
}

// Attempt DB connection
$host = null; // Use Unix socket
$socket = getenv('WORDPRESS_DB_HOST');

$mysqli = new mysqli(
    $host,
    getenv('WORDPRESS_DB_USER'),
    getenv('WORDPRESS_DB_PASSWORD'),
    getenv('WORDPRESS_DB_NAME'),
    (int)getenv('WORDPRESS_DB_PORT'),
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
