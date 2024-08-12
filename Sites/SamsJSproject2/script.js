function fahrenheitToCelsius( degree ) {
    var tempCelsius;
    tempCelsius = (degree - 32)/1.8;
    return tempCelsius;
}

function celsiusToFahrenheit( degree ) {
    var tempFahrenheit;
    tempFahrenheit = (degree * 1.8) + 32;
    return tempFahrenheit;
}


document.getElementById('fahrenheitField').onkeydown = function(event) {
    if (event.keyCode === 9) { 
        var degree = document.getElementById('fahrenheitField').value;
        document.getElementById('celsiusField').value = fahrenheitToCelsius(degree);
    }
};

document.getElementById('celsiusField').onkeydown = function(event) {
    if (event.keyCode === 9) { 
        var degree = document.getElementById('celsiusField').value;
        document.getElementById('fahrenheitField').value = celsiusToFahrenheit(degree);
    }
};