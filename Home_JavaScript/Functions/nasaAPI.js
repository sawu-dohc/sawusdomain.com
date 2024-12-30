async function fetchNASAData() {
    
    const warning = document.getElementById("warning");
    const dateInput = document.getElementById("dateBox").value;
    const nasaImage = document.getElementById("nasaImage");
    const imageDescription = document.getElementById("imageDescription");

    const apiKey = 'OBucfKBJ8Cvj8YUy1hd1h089azgMdsU6eIaIA3uQ';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateInput}`;

    const response = await fetch(apiUrl);

    if (response.status === 400) {

        warning.textContent = "NASA's API only goes back to June 16, 1995.";
        warning.style.display = "block";

        nasaImage.src = "Home_Assets/jpegIcon.png";
        nasaImage.style.width = "50%";
        imageDescription.textContent = "";

        return; 
    }
    else {
        warning.textContent = "";
        nasaImage.style.width = "100%";
    }

    const data = await response.json();

    nasaImage.src = data.url;
    nasaImage.alt = data.title;
    imageDescription.textContent = data.explanation;
}
