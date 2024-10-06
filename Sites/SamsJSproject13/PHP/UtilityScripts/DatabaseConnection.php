<?php

$servername = "localhost";
$username = "samwu1_hiring_partners_db";
$password = "F700F700";
$dbname = "samwu1_hiring_partners_db";

// Enable error reporting for debugging (remove or comment out in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

?>