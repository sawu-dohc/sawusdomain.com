async function maintenance() {
    // Get distinct crypto names using the existing `getCryptoNames` method
    const cryptoNames = await getCryptoNames();

    for (let i = 0; i < cryptoNames.length; i++) {
        const currencyName = cryptoNames[i];
        const now = new Date();
        now.setUTCHours(0, 0, 0, 0); // Set to midnight (00:00:00 UTC)
        const fromTimestamp = Math.floor(now.getTime() / 1000); // Midnight (UNIX timestamp)
        const toTimestamp = fromTimestamp + 3600; // One hour after midnight

        const apiUrl = `https://api.coingecko.com/api/v3/coins/${currencyName}/market_chart/range?vs_currency=usd&from=${fromTimestamp}&to=${toTimestamp}`;

        const response = await fetch(apiUrl, {
            method: "GET",
            headers: { accept: "application/json" },
        });

        const data = await response.json();

        // Directly access the first price entry
        const midnightEntry = data.prices[0];
        const timestamp = new Date(midnightEntry[0]).toISOString().slice(0, 19).replace("T", " ");
        const price = midnightEntry[1].toFixed(2);

        const sqlQuery = `
            INSERT INTO crypto_data (name, timestamp, price)
            VALUES ('${currencyName}', '${timestamp}', ${price});
        `;

        // Execute the query using the existing `executeQuery` method
        await executeQuery(sqlQuery);

        // Add a 1-minute delay before processing the next cryptocurrency
        //await new Promise((resolve) => setTimeout(resolve, 60000)); // 1 minute delay
    }
}