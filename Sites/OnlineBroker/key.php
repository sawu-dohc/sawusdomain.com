<?php
// Database connection details
$servername = "localhost";
$username = "samwu1_broker_db";
$password = "f700f700";
$dbname = "samwu1_broker_db";

// Set the response header to indicate JSON data
header('Content-Type: application/json');

// Retrieve the raw POST data
$rawData = file_get_contents("php://input");

// Decode the JSON payload into a PHP array
$data = json_decode($rawData, true);

// Extract the SQL query from the data array
$query = $data['query'] ?? '';

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]);
    exit;
}

// Execute the SQL query and send the appropriate response
$result = $conn->query($query);

if ($result === TRUE) {
    echo json_encode(["status" => "success", "message" => "Query executed successfully"]);
}

elseif ($result instanceof mysqli_result) {
    // For SELECT queries
    $rows = [];
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    echo json_encode(["status" => "success", "data" => $rows]);
} 
else {
    echo json_encode(["status" => "error", "message" => "Query failed: " . $conn->error]);
}


// Close the database connection
$conn->close();
?>
