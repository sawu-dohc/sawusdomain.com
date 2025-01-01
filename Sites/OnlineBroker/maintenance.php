<?php
// Display errors for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection details
$servername = "localhost";
$username = "samwu1_broker_db";
$password = "f700f700";
$dbname = "samwu1_broker_db";

// Function to connect to the database
function connectDatabase($servername, $username, $password, $dbname) {
    $connection = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    return $connection;
}

// Function to insert test data into the database
function insertTestData($connection) {
    // Define test values
    $name = 'TestName';
    $timestamp = date('Y-m-d H:i:s');
    $price = rand(100, 1000); // Generate a random price between 100 and 1000

    // SQL query to insert test values
    $query = "
        INSERT INTO crypto_data (name, timestamp, price)
        VALUES ('$name', '$timestamp', $price);
    ";

    if ($connection->query($query) === TRUE) {
        echo "Test data inserted successfully: $name, $timestamp, $price\n";
    } else {
        echo "Error inserting test data: " . $connection->error . "\n";
    }
}

// Main execution
$connection = connectDatabase($servername, $username, $password, $dbname);
insertTestData($connection);
$connection->close();

echo "Maintenance script executed successfully.\n";
?>
