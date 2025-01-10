function Main() {
    const items = createItems(); // Array of all items
    
    const desktopTable = document.getElementById("desktop-table");

    // Step 1: Populate the desktop table with a 5x8 grid
    populateDesktopGrid(items, desktopTable);

    // Step 2: Create and append Window objects for relevant items
    const windowPane = document.getElementById("pane");
    const windows = []; // Store created window objects

    for (let index = 0; index < items.length; index++) {
        const item = items[index]; // Access the current item
    
        if (item instanceof App) {
            // Handle App objects
            const window = new Window(item, index);
            windows.push(window); // Store the window in an array
            windowPane.appendChild(window.element_window); // Append the window to the pane
        } 
        else if (item instanceof Dir) {
            // Handle Dir objects
            const window = new Window(item, index);
            windows.push(window); // Store the window in an array
            windowPane.appendChild(window.element_window); // Append the window to the pane
        }
    }
    

    // Step 3: Add custom content to the first window
    const myComputerBody = `
        <h2>System Specifications</h2>
        <ul>
            <li><strong>CPU:</strong><br><span>AMD Ryzen 9 7900X Raphael AM5 4.7GHz 12-Core</span></li>
            <li><strong>Motherboard:</strong><br><span>ASUS B650E-F AMD AM5 ATX</span></li>
            <li><strong>Video Card:</strong><br><span>RTX 3060 Ti</span></li>
            <li><strong>RAM:</strong><br>
                <span>16GB DDR5-6000</span><br>
                <span>16GB DDR5-6000</span><br>
                <span>16GB DDR5-6000</span><br>
                <span>16GB DDR5-6000</span>
            </li>
            <li><strong>Storage:</strong><br>
                <span>1TB Crucial P3 M.2 (Read:3500/Write:3000)mb/s</span><br>
                <span>1TB Crucial P3 M.2</span><br>
                <span>1TB Crucial P3 M.2</span><br>
                <span>4TB Western Digital Blue 5400 RPM, SATA 6 Gb/s, 256 MB Cache</span>
            </li>
            <li><strong>Power Supply:</strong><br><span>750Watt CX750M ATX Power Supply</span></li>
            <li><strong>Keyboard:</strong><br><span>Redragon BBK552 with TTC Linear "Silent Frozen v2" switches</span></li>
            <li><strong>Mouse:</strong><br><span>Logitech G502</span></li>
        </ul>
    `;
    windows[0].setWindowBody(myComputerBody);
    

    const readMeBody = `
        This site contains links to all my programming projects, please explore and remember this is a no bulli zone.
    `;
    windows[1].setWindowBody(readMeBody);
    

    const nasaAPIBody = `
    <div>
        This web application allows you to view the Astronomy Picture of the Day (APOD) provided by NASA. Select a date and the application will fetch the image and its description using NASA's API.
        The application makes an HTTP GET request to their API endpoint with the selected date as a parameter. The API responds with JSON data containing the image URL, title, and description. This data is then displayed on the page.
    </div>
    
    <div id="date-picker">
        <label for="dateBox">Select a Date:</label>
        <input type="date" id="dateBox">
        <button id="getButton" onclick="fetchNASAData()">Get</button>
    </div>

    <div id="warning"></div>

    <div id="dataContainer">
        <img id="nasaImage" src="Home_Assets/jpegIcon.png" alt="Default Image">
        <div id="imageDescription"></div>
    </div>
    `;
    windows[2].setWindowBody(nasaAPIBody);
    

    const temperatureConverterBody = `
        <h3>Fahrenheit (°F) ↔ Celsius (°C)</h3>
        <div class="temperature-converter">
            <label for="fahrenheitField">°F:</label>
            <input type="number" id="fahrenheitField" oninput="fahrenheitToCelsius()" />
            <div class="arrow">⇅</div>
            <label for="celsiusField">°C:</label>
            <input type="number" id="celsiusField" oninput="celsiusToFahrenheit()" />
        </div>
        <p>Enter a temperature in either box to convert.</p>
    `;
    windows[3].setWindowBody(temperatureConverterBody);
    

    const timeConverterBody = `
    <p>
        The Unix epoch is the time 00:00:00 which corresponds to January 1, 1970. That moment serves as a reference point from which time is measured in seconds. This means that any date and time is represented as the number of seconds that have elapsed since this point.
    </p>

    <div id="alertBox"></div>
    
    <!-- Start Date and Time -->
    <div class="input-row">
        <label for="startDate">Start Date:</label>
        <input type="date" id="startDate">
        <label for="startTime">Start Time:</label>
        <input type="time" id="startTime">
    </div>
    
    <!-- End Date and Time -->
    <div class="input-row">
        <label for="endDate">End Date:</label>
        <input type="date" id="endDate">
        <label for="endTime">End Time:</label>
        <input type="time" id="endTime">
    </div>        

    <!-- Button and Result -->
    <button id="calculateButton" onclick="calculateDifference()">Calculate Difference</button>
    <div>
        <span>Result:</span>
        <input type="text" id="resultBox" readonly>
    </div>
    <br>

    <div id="currentTimeContainer">
        <p>Seconds since 1/1/1970:</p>
        <span id="currentTimeDisplay">0</span>
    </div>
    `;
    windows[4].setWindowBody(timeConverterBody);

    
    const timerWindowBody = `
        <div id="stopwatch-container">

            <h2>Stopwatch</h2>
            <p id="stopwatch-display">00:00:00</p>

            <button id="start-stopwatch" onclick="startStopwatch()">Start</button>
            <button id="stop-stopwatch" onclick="stopStopwatch()">Stop</button>
            <button id="reset-stopwatch" onclick="resetStopwatch()">Reset</button>
                        
            </div>
        
            <hr>
        
            <!-- Timer -->
            <div id="timer-container">
                <h2>Timer</h2>

                <label for="timer-minutes">Minutes:</label>
                <input type="number" id="timer-minutes" min="0" placeholder="0">
                <label for="timer-seconds">Seconds:</label>
                <input type="number" id="timer-seconds" min="0" max="59" placeholder="0">
                <p id="timer-display">00:00</p>

                <button id="start-timer" onclick="startTimer()">Start</button>
                <button id="stop-timer" onclick="stopTimer()">Stop</button>
                <button id="reset-timer" onclick="resetTimer()">Reset</button>
            </div>
    `;
    windows[5].setWindowBody(timerWindowBody);

    document.getElementById()
}

document.addEventListener("DOMContentLoaded", Main);
