<?php
// Include necessary functions (if needed)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// Function to fetch crypto names from the database
function getCryptoNames() {
    $query = "SELECT DISTINCT name FROM crypto_data;";
    return executeQuery($query); // Use your existing query execution function
}

// Function to fetch midnight price data from CoinGecko
function fetchMidnightPrice($currencyName) {
    $now = new DateTime("now", new DateTimeZone("UTC"));
    $now->setTime(0, 0, 0); // Set to midnight UTC

    $fromTimestamp = $now->getTimestamp(); // Midnight timestamp
    $toTimestamp = $fromTimestamp + 3600; // One hour after midnight

    $url = "https://api.coingecko.com/api/v3/coins/{$currencyName}/market_chart/range?vs_currency=usd&from={$fromTimestamp}&to={$toTimestamp}";
    
    $response = file_get_contents($url); // Fetch data from CoinGecko
    $data = json_decode($response, true);

    // Return the first price entry
    return [
        'timestamp' => date("Y-m-d H:i:s", $data['prices'][0][0] / 1000), // Convert milliseconds to seconds
        'price' => $data['prices'][0][1]
    ];
}

// Function to insert data into the database
function insertPriceData($currencyName, $timestamp, $price) {
    $query = "
        INSERT INTO crypto_data (name, timestamp, price)
        VALUES ('{$currencyName}', '{$timestamp}', {$price});
    ";
    executeQuery($query); // Use your existing query execution function
}

// Main process
$cryptoNames = getCryptoNames(); // Fetch distinct crypto names

foreach ($cryptoNames as $crypto) {
    $currencyName = $crypto['name']; // Get currency name from the result
    $priceData = fetchMidnightPrice($currencyName); // Fetch midnight price data

    // Insert the price data into the database
    insertPriceData($currencyName, $priceData['timestamp'], $priceData['price']);

    // Wait 1 minute to avoid hitting API limits
    sleep(60);
}

echo "Maintenance script executed successfully.";
?>