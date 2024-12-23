function calculateLTA(filteredData) {
    // Check if the filteredData array is empty
    if (filteredData.length > 0) {
        // Initialize a variable to store the total sum of all prices
        let total = 0;

        // Loop through each item in the filteredData array
        for (let i = 0; i < filteredData.length; i++) {
            // Convert the price from a string to a number and add it to the total
            total = total + parseFloat(filteredData[i].price);
        }

        // Calculate the average price by dividing the total by the number of items
        const average = total / filteredData.length;

        // Round the average to two decimal places and return it as a string
    return average.toFixed(2);
    }
    else {
        return 0;
    }


}
