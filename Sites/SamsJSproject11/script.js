"use strict";

let imageBox = document.getElementById("nasaImage");
let dateBox = document.getElementById("dateBox");

let apiKey = 'OBucfKBJ8Cvj8YUy1hd1h089azgMdsU6eIaIA3uQ';

dateBox.onchange = function() {
    console.log( 'Date changed:', dateBox.value );  
    
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateBox.value}`;

    console.log('API URL:', apiUrl);
    
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error fetching APOD data");
        }
        return response.json();
    })
    .then(data => {
        showPicture(data); 
    })
    .catch(error => {
        console.error('Error fetching APOD:', error);
    });
};

function showPicture( json ) {
    let content = ""; 

    if ( json.media_type === "video" ) {
        // template literals for dynamic values
        content = `<iframe src="${json.url}"></iframe>
                   <h1>${json.title}</h1>
                   <p>${json.explanation}</p>`;
    } 
    else if ( json.media_type === "image" ) {

        content = `<img src="${json.url}" alt="${json.title}" />
                   <h1>${json.title}</h1>
                   <p>${json.explanation}</p>`;
    } 
    else {
        content = "image not Available";
    }

    document.getElementById("nasaImage").innerHTML = content;
}
