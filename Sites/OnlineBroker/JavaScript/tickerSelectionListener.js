document.addEventListener("DOMContentLoaded", function() {
    const tickerSelect = document.getElementById('ticker-select');

    let dataLoadCounter = 0;

    function checkDataReady() {
        dataLoadCounter++;
        if (dataLoadCounter === 2) { // Both data sets are ready
            signalControl();
            dataLoadCounter = 0; // Reset counter for next selection
        }
    }

    function onTickerChange() {
        const selectedTicker = tickerSelect.value;
        dataLoadCounter = 0; // Reset counter
        addLongTermData(selectedTicker, checkDataReady);
        addShortTermData(selectedTicker, checkDataReady);
    }

    // Listen for changes in ticker selection
    tickerSelect.addEventListener('change', onTickerChange);

    // Trigger the change event when the page loads to populate data initially
    onTickerChange();
});
