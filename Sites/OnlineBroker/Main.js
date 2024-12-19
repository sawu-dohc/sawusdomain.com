
async function fetchCryptoData(currencyName) {

   // Fetch Data
   const url = `https://api.coingecko.com/api/v3/coins/${currencyName}/market_chart/range?vs_currency=usd&from=1704067200&to=1735689600`;
   
   const response = await fetch(url);
   const data = await response.json();
   
    // Parse Data

   let baseQuery = "INSERT INTO crypto_data (name, timestamp, price) VALUES "; 
   
   for (let i = 0; i < data.prices.length; i++) {

        const priceData = data.prices[i]; // Get the current price array
        const timestamp = new Date(priceData[0]).toISOString(); // Convert timestamp to ISO format
        const price = priceData[1].toFixed(2); // Format price to two decimal places

        // Manually construct the SQL value string
        baseQuery += `('${currencyName}', '${timestamp}', ${price})`;

        if (i < data.prices.length - 1) {
            baseQuery += ", "; // Add a comma unless it's the last entry
        }
        
    }

    // Final query is ready
    console.log("Final Query:\n", baseQuery);
   
   // Send the query to the PHP script
   try {
       const response = await fetch('https://sawusdomain.com/Sites/OnlineBroker/Insert.php', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({ query: baseQuery }),
       });
   
       const responseData = await response.json();
       console.log('PHP Response:', responseData);
   } 
   catch (error) {
       console.error('Error sending query to PHP:', error);
   }

   
}
// Fetch cryptocurrency data on page load
document.addEventListener('DOMContentLoaded', async function () {
    const coinsArray = ["bitcoin", "ethereum", "dogecoin"];
    const delay = 10 * 60 * 1000; // 10 minutes in milliseconds

    for (const coin of coinsArray) {
        console.log(`Fetching data for ${coin}`);
        await fetchCryptoData(coin); // Wait for the fetch to complete

        console.log(`Waiting ${delay / 60000} minutes before the next fetch...`);
        await new Promise(resolve => setTimeout(resolve, delay)); 
    }

    console.log("All coins have been fetched.");
});
