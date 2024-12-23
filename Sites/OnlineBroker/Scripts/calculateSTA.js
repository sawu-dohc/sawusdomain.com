function calculateSTA(filteredData, shortTermPeriod = 10) {
    
    if (filteredData.length > 0) {

        const length = filteredData.length;
        const startIndex = Math.max(0, length - shortTermPeriod);

        const recentData = filteredData.slice(startIndex);

        let total = 0;


        for (let i = 0; i < recentData.length; i++) {
            total = total + parseFloat(recentData[i].price);
        }

        const average = total / recentData.length;

        return average.toFixed(2);
    } 
    else {
        return 0;
    }
    
}
