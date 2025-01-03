<?php
// Display errors for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection details
$string_servername = "localhost";
$string_username = "samwu1_broker_db";
$string_password = "f700f700";
$string_dbname = "samwu1_broker_db";

// Function to connect to the database
function connectDatabase( $string_servername, $string_username, $string_password, $string_dbname ) {

    $object_connection = new mysqli( $string_servername, $string_username, $string_password, $string_dbname );

    if ( $object_connection->connect_error !== "" ) {
        throw new Exception("Connection failed: " . $object_connection->connect_error);
    }
    
    return $object_connection;
}

// Function to insert test data into the database
function insertTestData($object_connection) {
    // Define test values
    $string_name = 'TestName';
    $string_timestamp = date('Y-m-d H:i:s');
    $int_price = rand(100, 1000); // Generate a random price between 100 and 1000

    // SQL query to insert test values
    $string_query = "
        INSERT INTO crypto_data (name, timestamp, price)
        VALUES ('$string_name', '$string_timestamp', $int_price);
    ";

    if ($object_connection->query($string_query) === TRUE) {
        echo "Test data inserted successfully: $string_name, $string_timestamp, $int_price\n";
    } else {
        echo "Error inserting test data: " . $object_connection->error . "\n";
    }
}

// Main execution
$object_connection = connectDatabase($string_servername, $string_username, $string_password, $string_dbname);
insertTestData($object_connection);
$object_connection->close();

echo "Maintenance script executed successfully.\n";
?>
