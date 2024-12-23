function populateTextBox(selectedName, data) {

    // Array to store filtered data
    const filteredData = [];

    // Filter data using a for loop
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === selectedName) {
            filteredData.unshift(data[i]);
        }
    }

    // Select the text box element where data will be displayed
    const textBox = document.getElementById("text-box");

    // Clear any existing content in the text box
    textBox.textContent = "";

    // Iterate through the filtered data to populate the text box
    for (let i = 0; i < filteredData.length; i++) {
        const item = filteredData[i];

        // Simplify the timestamp to just the date (e.g., YYYY-MM-DD)
        const date = new Date(item.timestamp).toISOString().split('T')[0];

        // Format the price to two decimal places
        const price = parseFloat(item.price).toFixed(2);

        // Construct the line
        const line = `${date} $${price}\n`;

        // Add the line to the text box
        textBox.textContent += line;
    }
}
