<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.exchange.coinbase.com/products',
  CURLOPT_RETURNTRANSFER => true,
));

$response = curl_exec($curl);

if (curl_errno($curl)) {
    $error_msg = curl_error($curl);
    echo json_encode(['error' => $error_msg]);
} else {
    echo $response; // Output raw JSON
}

curl_close($curl);
?>
