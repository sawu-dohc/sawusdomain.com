<?php
$servername = "localhost";
$username = "samwu1_broker_db";
$password = "f700f700";
$dbname = "samwu1_broker_db";

header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['query'])) {
    echo json_encode(["status" => "error", "message" => "No query provided"]);
    exit;
}

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Connection failed: " . $conn->connect_error]);
    exit;
}

$query = $data['query'];

if ($conn->query($query) === TRUE) {
    echo json_encode(["status" => "success", "message" => "Data inserted successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}

$conn->close();
?>
