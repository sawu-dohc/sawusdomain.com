function addEventListener_CurrencyMenu(currencyMenu, cryptoDataArray) {
    currencyMenu.addEventListener("change", function () {
        const selectedName = currencyMenu.value;

        // Get the selected strategy from the strategy menu
        const strategyMenu = document.getElementById("strategy-menu");
        const selectedStrategy = strategyMenu ? strategyMenu.value : null;

        // Filter the data for the selected cryptocurrency
        const filteredData = cryptoDataArray.filter(data => data.name === selectedName);

        // If no data is found, exit early
        if (filteredData.length === 0) {
            console.error("No data found for the selected cryptocurrency.");
            return;
        }
        strategyMenu.disabled = false; // Enable the strategy menu
        // Populate the text box
        populateTextBox(selectedName, filteredData);

        // Calculate Long-Term Average (LTA) and Short-Term Average (STA)
        const lta = calculateLTA(filteredData);
        const sta = calculateSTA(filteredData);

        // Update the UI for LTA and STA
        document.getElementById("long-term-stat").textContent = lta;
        document.getElementById("short-term-stat").textContent = sta;

        // Optionally, handle strategy-dependent logic
        if (selectedStrategy) {
            setLight(lta, sta, selectedStrategy);
        }
        else {
            console.warn("No strategy selected. Traffic lights not updated.");
        }
    });
}
