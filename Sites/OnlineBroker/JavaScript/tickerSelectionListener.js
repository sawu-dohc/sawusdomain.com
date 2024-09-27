const options = { method: 'GET', headers: { accept: 'application/json' } };

// Function to fetch data for a specific coin
function fetchCoinData(coinId) {
    console.log(`Fetching data for ${coinId}...`); // Debugging log
    return fetch(`https://pro-api.coingecko.com/api/v3/coins/${coinId}`, options)
        .then(response => response.json())
        .then(data => {
            console.log(`${coinId} data:`, data); // Debugging log
            return data;
        })
        .catch(err => {
            console.error(`Error fetching ${coinId} data:`, err);
            return null;
        });
}

// Function to handle selection change
function handleSelectionChange(event) {
    const selectedCoinId = event.target.value;
    console.log(`Selected coin ID: ${selectedCoinId}`); // Debugging log
    if (selectedCoinId) {
        fetchCoinData(selectedCoinId).then(data => {
            if (data) {
                // Example: Displaying the coin's current price
                const price = data.market_data.current_price ? data.market_data.current_price.usd : 'N/A';
                document.getElementById('long-term-average-value').textContent = price;
                
                // Update other elements as needed
                // e.g., document.getElementById('short-term-average-value').textContent = ...;
            } else {
                console.log(`No data for ${selectedCoinId}`);
            }
        });
    }
}

// Attach event listener to the ticker select element
document.getElementById('ticker-select').addEventListener('change', handleSelectionChange);

// Verify that the script is loaded
console.log('tickerSelectionListener.js script loaded');
