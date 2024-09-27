// URL for the CoinGecko API endpoint to get a list of all coins
const url = 'https://api.coingecko.com/api/v3/coins/list';

// List of full names for the coins you want to include
const targetNames = ['Bitcoin', 'Ethereum', 'Dogecoin', 'Litecoin'];

// Function to populate the ticker selector
function populateTickerSelector(data) {
    const selectElement = document.getElementById('ticker-select');
    
    // Filter the data to include only the target names
    const filteredData = data.filter(coin => targetNames.includes(coin.name));
    
    filteredData.forEach(coin => {
        const option = document.createElement('option');
        option.value = coin.id;
        option.textContent = `${coin.name} (${coin.symbol.toUpperCase()})`;
        selectElement.appendChild(option);
    });
}

// Fetch data from the API and populate the selector
fetch(url, {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
})
.then(response => response.json())  // Convert the response to JSON
.then(data => {
    populateTickerSelector(data);
})
.catch(error => {
    console.error('Error:', error);  // Handle any errors
});
