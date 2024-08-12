<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Get the ticker parameter from the query string, defaulting to 'BTC-USD' if not provided
$product_id = isset($_GET['ticker']) ? $_GET['ticker'] : 'BTC-USD';
$granularity = 3600; // 1 hour candles to precisely control the time range
$data_points = [];

// Get the current date and time
$now = new DateTime('now', new DateTimeZone('UTC'));

// Loop through the last 4 months
for ($i = 0; $i < 4; $i++) {
    // Clone the date object to avoid modifying the original
    $start = clone $now;
    $start->modify("-$i months");
    $start->setDate($start->format('Y'), $start->format('m'), 1); // Set to the 1st day of the month
    $start->setTime(0, 0, 0); // Set to midnight
    
    // Set the end time to 1 hour after the start time
    $end = clone $start;
    $end->modify('+1 hour');

    // Build the URL with the product ID and query parameters
    $url = "https://api.exchange.coinbase.com/products/$product_id/candles?granularity=$granularity&start=" . $start->format('Y-m-d\TH:i:s\Z') . "&end=" . $end->format('Y-m-d\TH:i:s\Z');

    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => $url,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'GET',
      CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json',
        'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
      ),
    ));

    $response = curl_exec($curl);

    if (curl_errno($curl)) {
        echo json_encode(['error' => curl_error($curl)]);
        curl_close($curl);
        exit;
    } else {
        $monthly_data = json_decode($response, true);
        if (is_array($monthly_data) && count($monthly_data) > 0) {
            // Append the first data point from the month's data
            $data_points[] = $monthly_data[0];
        }
    }

    curl_close($curl);
}

// Output all the collected candle data as JSON
echo json_encode($data_points);
?>
