

function Main() {


    // Populate the desktop
    const desktopElement = document.getElementById("desktop");



    const files = [
        new File( "file0"  , "My Computer"                               , "/path/to/specs"                                 , "Home_Assets/MyComputerIcon.png"      , "Rig specs with links!"                                                                                                                    ),
        new File( "file1"  , "Read Me"                                   , "/path/to/readme.txt"                            , "Home_Assets/TextFileIcon.png"        , "Welcome message."                                                                                                                         ),
        new File( "file2"  , "E-Mail"                                    , "mailto:example@example.com"                     , "Home_Assets/EmailIcon.png"           , "Send me an email!"                                                                                                                        ),
        new File( "file3"  , "C Projects"                                , "https://github.com/sawu-DOHC/C-Projects"        , "Home_Assets/FileIcon.png"            , "Link to my C projects on Git hub"                                                                                                         ),
        new File( "file4"  , "Java Projects"                             , "https://github.com/sawu-DOHC/Java-Projects"     , "Home_Assets/FileIcon.png"            , "Link to my Java projects on Git hub"                                                                                                      ),
        new File( "file5"  , "Wild Rescues"                              , "Sites/WildRescues/page1_index.html"             , "Home_Assets/InternetExplorerIcon.png", "Website that utilizes HTML, CSS, and a little bit of JavaScript. Has media query for mobile devices."                                     ),
        new File( "file6"  , "Strike A Chord"                            , "Sites/StrikeAChord/page1_index.html"            , "Home_Assets/InternetExplorerIcon.png", "Website that utilizes HTML, CSS, and a little bit of JavaScript. Has media query for mobile devices."                                     ),
        new File( "file7"  , "Sam Welds"                                 , "Sites/Weld/index.html"                          , "Home_Assets/InternetExplorerIcon.png", "Check out sam's welds!."                                                                                                                   ),
        new File( "file8"  , "Online order form"                         , "Sites/FinalProject2/index.html"                 , "Home_Assets/InternetExplorerIcon.png", "Simple page that uses JS to calculate totals from selected items."                                                                        ),
        new File( "file9"  , "NASA's API.exe"                            , "Sites/SamsJSproject11/index.html"               , "Home_Assets/ApplicationIcon.png"     , "Webpage that uses NASA's API to show you pictures they took on specific dates."                                                           ),
        new File( "file10" , "Temperature Converter.exe"                 , "Sites/SamsJSproject2/index.html"                , "Home_Assets/ApplicationIcon.png"     , "Simple JS project that targets input fields and manipulates the values."                                                                  ),
        new File( "file11" , "Time Converter.exe"                        , ""                                               , "Home_Assets/ApplicationIcon.png"     , "Experimenting with time manipulation in javaScript."                                                                                      ),
        new File( "file12" , "TimerStopwatch.exe"                        , ""                                               , "Home_Assets/ApplicationIcon.png"     , "Simple timer and stopwatch function."                                                                                                     ),
        new File( "file13" , "Timed math quiz"                           , "Sites/SamsJSproject5/index.html"                , "Home_Assets/InternetExplorerIcon.png", "JS project that compares inputs with declared values and manipulates the HTML page to give the user feedback."                            ),
        new File( "file14" , "Input validation"                          , "Sites/SamsJSproject7/index.html"                , "Home_Assets/InternetExplorerIcon.png", "This script demonstrates how to use JS to restrict user inputs."                                                                          ),
        new File( "file15" , "Utilizing string query"                    , "Sites/SamsJSproject9/index.html"                , "Home_Assets/InternetExplorerIcon.png", "This page uses string query technique to pass data from one page to another."                                                             ),
        new File( "file16" , "Fulton County Payroll Deduction Form"      , "Sites/FCGAFormProject/index.html"               , "Home_Assets/InternetExplorerIcon.png", "Digitizing an onboarding payroll deduction form."                                                                                         ), 
        new File( "file17" , "GTC Hiring Partner Database"               , "Sites/SamsJSproject13/HTML/page0_ViewLogin.html","Home_Assets/InternetExplorerIcon.png" , "Database application that uses PHP and JavaScript to manage an SQL database. Features session tracking and user permission functionality."),
        //new File( "file18" , "GTC Hiring Partner Database Documentation" , ""                                               , "Home_Assets/InternetExplorerIcon.png", "Link to a public google docs directory that contains documentation for my database application"                                           ),
        new File( "file19" , "GTC Welding department Inventory System"   , "Sites/InventoryDatabaseApp/HTML/page1_Home.html", "Home_Assets/InternetExplorerIcon.png", "Inventory database (UNDER CONSTRUCTION)"                                                                                                  ),
        new File( "file20" , "Digital Broker"                            , "Sites/OnlineBroker/index.html"                  , "Home_Assets/InternetExplorerIcon.png", "Long term and short term divergence calculator, literally makes you rich!"                                                                )
    ];


    files.forEach(file => {
        // Create the icon container
        const iconDiv = document.createElement("div");
        iconDiv.id = `${file.string_id}_Icon`;
        iconDiv.className = "icon";
    
        // Create the link wrapper for the image
        const linkElement = document.createElement("a");
        linkElement.href = file.string_path;
        linkElement.target = "_blank"; // Still allows navigation for other files
    
        const imgElement = document.createElement("img");
        imgElement.src = file.string_iconSrc;
        imgElement.alt = file.string_name;
    
        // Add the image to the link
        linkElement.appendChild(imgElement);
    
        const titleElement = document.createElement("h2");
        titleElement.textContent = file.string_name;
    
        // Assemble the icon structure
        iconDiv.appendChild(linkElement);
        iconDiv.appendChild(titleElement);
    
        // Tooltip functionality
        iconDiv.addEventListener("mouseover", () => {
            tooltip.innerText = file.string_description; // Set tooltip text
            positionTooltip(iconDiv, tooltip); // Position the tooltip
            showTooltip(tooltip); // Show the tooltip
        });
    
        iconDiv.addEventListener("mouseout", () => {
            hideTooltip(tooltip); // Hide the tooltip
        });






        if (file.string_id === "file1") {
            linkElement.addEventListener("click", (event) => {
                event.preventDefault(); 
                const readMeWindow = document.getElementById("ReadMe_Window");
                if (readMeWindow) {
                    readMeWindow.style.display = "flex"; 
                    readMeWindow.style.zIndex = "1000"; 
                }
            });
        }


        if (file.string_id === "file0") {
            linkElement.addEventListener("click", (event) => {
                event.preventDefault(); 
                const myComputerWindow = document.getElementById("MyComputer_Window");
                if (myComputerWindow) {
                    myComputerWindow.style.display = "flex";
                    myComputerWindow.style.zIndex = "1000"; 
                }
            });
        }

        if (file.string_id === "file9") {
            linkElement.addEventListener("click", (event) => {
                event.preventDefault(); 
                const nasaApiWindow = document.getElementById("NASAapi_Window");
                if (nasaApiWindow) {
                    nasaApiWindow.style.display = "flex"; 
                    nasaApiWindow.style.zIndex = "1000"; 
                }
            });
        }



        if (file.string_id === "file10") {
            linkElement.addEventListener("click", (event) => {
                event.preventDefault(); 
                const tempConverterWindow = document.getElementById("TemperatureConverter_Window");
                if (tempConverterWindow) {
                    tempConverterWindow.style.display = "flex"; 
                    tempConverterWindow.style.zIndex = "1000"; 
                }
            });
        }


        if (file.string_id === "file11") {
            linkElement.addEventListener("click", (event) => {
                event.preventDefault(); 
                const tempConverterWindow = document.getElementById("TimeConverter_Window");
                if (tempConverterWindow) {
                    tempConverterWindow.style.display = "flex"; 
                    tempConverterWindow.style.zIndex = "1000"; 
                }
            });
        }


        if (file.string_id === "file12") {
            linkElement.addEventListener("click", (event) => {
                event.preventDefault(); 
                const tempConverterWindow = document.getElementById("TimerStopwatch_Window");
                if (tempConverterWindow) {
                    tempConverterWindow.style.display = "flex"; 
                    tempConverterWindow.style.zIndex = "1000"; 
                }
            });
        }
    
        // Append the icon to the desktop
        desktopElement.appendChild(iconDiv);
    });
    


}

document.addEventListener("DOMContentLoaded", Main);

