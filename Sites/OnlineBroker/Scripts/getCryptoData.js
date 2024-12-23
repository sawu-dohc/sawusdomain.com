async function getCryptoData(){

    var tempArray = [];

    try {
        
        const dataResult = await executeQuery("SELECT * FROM crypto_data ORDER BY timestamp ASC;");

        for (let i = 0; i < dataResult.data.length; i++) {

            tempArray.push(dataResult.data[i]);
            
        }

        return tempArray;

    } 
    catch ( error ) {

        console.error("Javascript Main: Error fetching crypto data.", error);

        return tempArray;

    }

}