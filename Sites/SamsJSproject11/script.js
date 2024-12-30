const imageBox = document.getElementById("nasaImage");
const dateBox = document.getElementById("dateBox");
const getButton = document.getElementById("getButton");
const apiKey = 'OBucfKBJ8Cvj8YUy1hd1h089azgMdsU6eIaIA3uQ';

getButton.addEventListener("click", async function () {
   try {
      const selectedDate = dateBox.value;

      console.log('Date selected:', selectedDate);

      const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedDate}`;
      console.log('API URL:', apiUrl);

      const response = await fetch(apiUrl);

      if (!response.ok) {
         throw new Error("Error fetching APOD data");
      }

      const data = await response.json();
      showPicture(data);
   } 
   catch (error) {
      console.error('Error fetching APOD:', error);
      alert("An error occurred while fetching the APOD data. Please try again.");
   }
});

function showPicture(data) {
   // Display the image and description
   imageBox.innerHTML = `<img src="${data.url}" alt="${data.title}" />`;
   document.getElementById("imageDescription").textContent = data.explanation;
}