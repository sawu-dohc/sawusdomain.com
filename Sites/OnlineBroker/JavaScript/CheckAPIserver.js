fetch('https://api.coingecko.com/api/v3/ping', {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
