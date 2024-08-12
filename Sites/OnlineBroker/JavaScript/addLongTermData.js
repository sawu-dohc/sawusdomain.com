function addLongTermData(ticker, callback) {
    fetch(`https://www.sawusdomain.com/Sites/OnlineBroker/PHP/longTermScript.php?ticker=${ticker}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); 
        })
        .then(data => {
            const dataBox = document.getElementById('long-term-data-box');
            const averageBox = document.getElementById('long-term-average-value'); // Target the new span element
            dataBox.innerHTML = ''; // Clear existing content

            let totalPrice = 0;
            let count = 0;

            data.forEach(candle => {
                const timestamp = candle[0];
                const closingPrice = candle[4];
                const date = new Date(timestamp * 1000).toLocaleDateString("en-US");

                // Create and append data item to the data box
                const dataItem = document.createElement('div');
                dataItem.classList.add('data-item');
                dataItem.textContent = `${date}: $${closingPrice.toFixed(2)}`;
                dataBox.appendChild(dataItem);

                // Accumulate total price and count for average calculation
                totalPrice += closingPrice;
                count++;
            });

            // Calculate and display the average price
            if (count > 0) {
                const averagePrice = totalPrice / count;
                averageBox.textContent = `${averagePrice.toFixed(2)}`; // Set the numeric value
            } else {
                averageBox.textContent = '0.00'; // Handle case with no data
            }

            if (callback) callback(); // Trigger callback if provided
        })
        .catch(error => {
            console.error('Error fetching long-term data:', error);
        });
}
