function signalControl() {
    // Get the elements that contain the numeric average values
    const longTermAverageElement = document.getElementById('long-term-average-value');
    const shortTermAverageElement = document.getElementById('short-term-average-value');

    // Parse the numeric values directly from the text content
    const longTermAverage = parseFloat(longTermAverageElement.textContent);
    const shortTermAverage = parseFloat(shortTermAverageElement.textContent);

    // Debugging output
    console.log('Long-Term Average Value:', longTermAverageElement.textContent);
    console.log('Short-Term Average Value:', shortTermAverageElement.textContent);


    // Determine the signal based on the divergence
    const signalRed = document.getElementById('signal-red');
    const signalYellow = document.getElementById('signal-yellow');
    const signalGreen = document.getElementById('signal-green');

    // Clear previous signals
    signalRed.classList.remove('active');
    signalYellow.classList.remove('active');
    signalGreen.classList.remove('active');

    // Set the appropriate signal based on the averages
    if (shortTermAverage > longTermAverage) {
        // Positive divergence - Buy signal
        signalGreen.classList.add('active');
    } else if (shortTermAverage < longTermAverage) {
        // Negative divergence - Sell signal
        signalRed.classList.add('active');
    } else {
        // No divergence - Wait signal
        signalYellow.classList.add('active');
    }

    // Debugging output
    console.log(`Long-Term Average: $${longTermAverage.toFixed(2)}, Short-Term Average: $${shortTermAverage.toFixed(2)}`);
}
