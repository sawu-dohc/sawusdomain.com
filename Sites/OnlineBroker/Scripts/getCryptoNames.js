async function getCryptoNames(){

    var tempArray = [];

    try {
        
        const namesResult = await executeQuery("SELECT DISTINCT name FROM crypto_data;");

        for (let i = 0; i < namesResult.data.length; i++) {

            tempArray.push(namesResult.data[i].name);

        }
         
        return tempArray;

    } 
    catch ( error ) {

        console.error("Javascript Main: Error fetching crypto names.", error);

        return tempArray;
        
    }

}