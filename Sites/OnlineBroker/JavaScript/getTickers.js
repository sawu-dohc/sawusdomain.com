document.addEventListener("DOMContentLoaded", function() {
    fetch('https://www.sawusdomain.com/Sites/OnlineBroker/PHP/getTickersScript.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            const tickerSelect = document.getElementById('ticker-select'); // Get the select element

            // Clear existing options (optional)
            tickerSelect.innerHTML = '';

            data.forEach(pair => {
                const tickerSymbol = pair.id; // Extract the ticker symbol from the 'id' key
                
                // Create a new option element
                const option = document.createElement('option');
                option.value = tickerSymbol; // Set the value of the option
                option.textContent = tickerSymbol; // Set the text content of the option

                // Set the default option to BTC-USD
                if (tickerSymbol === 'BTC-USD') {
                    option.selected = true; // Set this option as selected
                }

                // Append the option to the select element
                tickerSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
