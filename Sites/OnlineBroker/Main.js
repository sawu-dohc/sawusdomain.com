async function Main() {
    // Declare arrays for crypto names and data
    let cryptoNamesArray = await getCryptoNames();
    let cryptoDataArray = await getCryptoData();

    // Reference the dropdown menu element
    const currencyMenu = document.getElementById("currency-menu");
    const strategyMenu = document.getElementById("strategy-menu");

    // Populate the dropdown menu
    populateMenu(cryptoNamesArray, currencyMenu);

    addEventListener_CurrencyMenu(currencyMenu, cryptoDataArray);
    
    addEventListener_StrategyMenu(strategyMenu); 

}

Main();
