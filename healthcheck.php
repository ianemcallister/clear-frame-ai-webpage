<?php
// Required environment variables
$required_env_vars = [
    'WORDPRESS_DB_NAME',
    'WORDPRESS_DB_HOST',
    'WORDPRESS_DB_PASSWORD',
    'WORDPRESS_DB_USER'
];

// Check for missing variables
$missing_vars = array_filter($required_env_vars, function ($var) {
    return getenv($var) === false || getenv($var) === '';
});

echo "<h2>Environment Variables Check</h2>";

if (!empty($missing_vars)) {
    echo "<p style='color:red;'>⚠️ Missing required environment variables: " . implode(', ', $missing_vars) . "</p>";
    error_log("Missing required environment variables: " . implode(', ', $missing_vars));
} else {
    echo "<p style='color:green;'>✅ All required environment variables are set.</p>";
    error_log("All required environment variables are set.");
}

// Print all environment variables to the browser
echo "<h3>All Available Environment Variables:</h3>";
echo "<pre>" . print_r(getenv(), true) . "</pre>";
error_log("Available environment variables: " . print_r(getenv(), true));

// If no missing vars, attempt DB connection
if (empty($missing_vars)) {
    $host = null; // Use Unix socket
    $socket = getenv('WORDPRESS_DB_HOST');

    $mysqli = new mysqli(
        //$host,
        getenv('WORDPRESS_DB_HOST'),
        getenv('WORDPRESS_DB_USER'),
        getenv('WORDPRESS_DB_PASSWORD'),
        getenv('WORDPRESS_DB_NAME')//,
        //(int)getenv('CFA_WP_DB_PORT')//,
        //$socket
    );

    if ($mysqli->connect_error) {
        echo "<p style='color:red;'>❌ DB connection failed: " . $mysqli->connect_error . "</p>";
        error_log("DB connection failed: " . $mysqli->connect_error);
    } else {
        echo "<p style='color:green;'>✅ DB connection successful!</p>";
        error_log("DB connection successful");
        $mysqli->close();
    }
} else {
    echo "<p>Skipping DB connection due to missing environment variables.</p>";
}
?>
