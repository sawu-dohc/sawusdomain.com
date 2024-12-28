class System {

    root_directory;

    constructor() {
        this.root_directory = new Directory(
            "root",
            "Root Directory",
            "Root of the file system",
            "Home_Assets/FileIcon.png",
            [], // Initialize array_files
            []  // Initialize array_directories
        );
    }
    addDirectory(new_directory) {

        this.root_directory.array_directories.push( new_directory );
    }

    addFile(new_file) {

        this.root_directory.array_files.push(new_file);
    }

    initializeData(){

//                               string_id      string_name                                     string_path                                                                    string_iconSrc                                        string_description
        const file0  = new File( "file0"      , "My Computer"                                 , "/path/to/specs"                                                             , "Home_Assets/MyComputerIcon.png"                    , "Rig specs with links!"                                                                                                                       );
        const file1  = new File( "file1"      , "Read Me"                                     , "/path/to/readme.txt"                                                        , "Home_Assets/TextFileIcon.png"                      , "Welcome message."                                                                                                                            );
        const file2  = new File( "file2"      , "E-Mail"                                      , "mailto:example@example.com"                                                 , "Home_Assets/EmailIcon.png"                         , "Send me an email!"                                                                                                                           );
        const file3  = new File( "file3"      , "C Projects"                                  , "/path/to/c_projects"                                                        , "Home_Assets/FileIcon.png"                          , "Link to my C projects on Git hub"                                                                                                            );
        const file4  = new File( "file4"      , "Java Projects"                               , "/path/to/java_projects"                                                     , "Home_Assets/FileIcon.png"                          , "Link to my Java projects on Git hub"                                                                                                         );
        const file5  = new File( "file5"      , "Wild Rescues"                                , "Sites/WildRescues/page1_index.html"                                         , "Home_Assets/InternetExplorerIcon.png"              , "Website that utilizes HTML, CSS, and a little bit of JavaScript. Has media query for mobile devices."                                        );
        const file6  = new File( "file6"      , "Strike A Chord"                              , "Sites/StrikeAChord/page1_index.html"                                        , "Home_Assets/InternetExplorerIcon.png"              , "Website that utilizes HTML, CSS, and a little bit of JavaScript. Has media query for mobile devices."                                        );
        const file7  = new File( "file7"      , "Online order form"                           , "Sites/FinalProject2/index.html"                                             , "Home_Assets/InternetExplorerIcon.png"              , "Simple page that uses JS to calculate totals from selected items."                                                                           );
        const file8  = new File( "file8"      , "Using NASA API"                              , "Sites/SamsJSproject11/index.html"                                           , "Home_Assets/InternetExplorerIcon.png"              , "Webpage that uses NASA's API to show you a picture taken on a specified date."                                                               );
        const file9  = new File( "file9"      , "Temperature converter"                       , "Sites/SamsJSproject2/index.html"                                            , "Home_Assets/InternetExplorerIcon.png"              , "Simple JS project that targets input fields and manipulates the values."                                                                     );
        const file10 = new File( "file10"     , "Timed math quiz"                             , "Sites/SamsJSproject5/index.html"                                            , "Home_Assets/InternetExplorerIcon.png"              , "JS project that compares inputs with declared values and manipulates the HTML page to give the user feedback."                               );
        const file11 = new File( "file11"     , "Input validation"                            , "Sites/SamsJSproject7/index.html"                                            , "Home_Assets/InternetExplorerIcon.png"              , "This script demonstrates how to use JS to restrict user inputs."                                                                             );
        const file12 = new File( "file12"     , "Stopwatch"                                   , "Sites/SamsJSproject8/index.html"                                            , "Home_Assets/InternetExplorerIcon.png"              , "Webpage that uses NASA's API to show you a picture taken on a specified date."                                                               );
        const file13 = new File( "file13"     , "Utilizing string query"                      , "Sites/SamsJSproject9/index.html"                                            , "Home_Assets/InternetExplorerIcon.png"              , "This page uses string query technique to pass data from one page to another."                                                                );
        const file14 = new File( "file14"     , "Jigsaw puzzle"                               , "Sites/SamsJSproject10/index.html"                                           , "Home_Assets/InternetExplorerIcon.png"              , "Making elements draggable."                                                                                                                  );
        const file15 = new File( "file15"     , "Fulton County Payroll Deduction Form"        , "Sites/FCGAFormProject/index.html"                                           , "Home_Assets/InternetExplorerIcon.png"              , "Digitizing an onboarding payroll deduction form."                                                                                            ); 
        const file16 = new File( "file16"     , "GTC Hiring Partner Database.exe"             , "Sites/SamsJSproject13/HTML/page0_ViewLogin.html"                            , "Home_Assets/ApplicationIcon.png"                   , "Database application that uses PHP and JavaScript to manage an SQL database. Features session tracking and user permission functionality."   );
        const file17 = new File( "file17"     , "GTC Hiring Partner Database Documentation"   , ""                                                                           , "Home_Assets/InternetExplorerIcon.png"              , "Link to a public google docs directory that contains documentation for my database application"                                              );
        const file18 = new File( "file18"     , "GTC Welding department Inventory System"     , "Sites/InventoryDatabaseApp/HTML/page1_Home.html"                            , "Home_Assets/ApplicationIcon.png"                   , "Inventory database application (pls no bully, under construction)"                                                                           );
        const file19 = new File( "file19"     , "Digital Broker"                              , "Sites/OnlineBroker/index.html"                                              , "Home_Assets/ApplicationIcon.png"                   , "Long term and short term divergence calculator, literally makes you rich!"                                                                   );



//                                        string_id    string_name          string_description                                        string_iconSrc                         array_files    array_directories
        const directory0 = new Directory( "directory0"     , "HTML Projects"    , "Static web pages with CSS and a little JavaScript"     , "Home_Assets/FileIcon.png"            , []           , []               );
        const directory1 = new Directory( "directory1"     , "JavaScript"       , "HTML pages demonstrating JavaScript functionalities"   , "Home_Assets/FileIcon.png"            , []           , []               );
        const directory2 = new Directory( "directory2"     , "Web Applications" , "HTML, CSS, JavaScript, PHP, and SQL database projects" , "Home_Assets/FileIcon.png"            , []           , []               );
        const directory3 = new Directory( "directory3"     , "Recycle Bin"      , " "                                                     , "Home_Assets/RecycleBinEmptyIcon.png" , []           , []               );


        // Associate files with individual directories
        directory0.array_files.push(file5); // HTML Projects: Wild Rescues
        directory0.array_files.push(file6); // HTML Projects: Strike A Chord

        directory1.array_files.push(file0); // JavaScript: Online order form
        directory1.array_files.push(file1); // JavaScript: Using NASA API
        directory1.array_files.push(file2); // JavaScript: Temperature converter
        directory1.array_files.push(file3); // JavaScript: Timed math quiz
        directory1.array_files.push(file4); // JavaScript: Input validation

        directory2.array_files.push(file11); // Web Applications: GTC Hiring Partner Database.exe
        directory2.array_files.push(file12); // Web Applications: GTC Hiring Partner Database Documentation
        directory2.array_files.push(file13); // Web Applications: GTC Inventory System
        directory2.array_files.push(file14); // Web Applications: Digital Broker

        // Add files to the root directory individually
        this.root_directory.array_files.push(file0); // My Computer
        this.root_directory.array_files.push(file1); // Read Me
        this.root_directory.array_files.push(file2); // E-Mail
        this.root_directory.array_files.push(file3); // C Projects
        this.root_directory.array_files.push(file4); // Java Projects

        // Add directories to the root directory individually
        this.root_directory.array_directories.push(directory0); // HTML Projects
        this.root_directory.array_directories.push(directory1); // JavaScript
        this.root_directory.array_directories.push(directory2); // Web Applications
        this.root_directory.array_directories.push(directory3); // Recycle Bin


    }

    createAllDirectoryIcons() {
        const desktopDiv = document.getElementById("desktop"); // Get the desktop container

        // Iterate through all directories under the root
        for (let i = 0; i < this.root_directory.array_directories.length; i++) {
            const directory = this.root_directory.array_directories[i];

            // Create an icon for the directory
            const iconDiv = document.createElement("div");
            iconDiv.id = directory.string_id + "_Icon";
            iconDiv.className = "icon";

            const linkElement = document.createElement("a");

            const imgElement = document.createElement("img");
            imgElement.src = directory.string_iconSrc;
            imgElement.alt = directory.string_name;

            const titleElement = document.createElement("h2");
            titleElement.textContent = directory.string_name;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = directory.string_description;

            // Assemble the icon structure
            linkElement.appendChild(imgElement);
            iconDiv.appendChild(linkElement);
            iconDiv.appendChild(titleElement);
            iconDiv.appendChild(descriptionElement);

            // Append the icon to the desktop
            desktopDiv.appendChild(iconDiv);
        }
    }

    createWindowsForAllDirectories() {
        const paneDiv = document.getElementById("pane");

        // Iterate through all directories under the root
        for (let i = 0; i < this.root_directory.array_directories.length; i++) {
            const directory = this.root_directory.array_directories[i];

            const new_window = new Window(directory); // Create a new window for the directory
            paneDiv.appendChild(new_window.dom_htmlElement); // Append the window to the pane
        }
    }

    createTaskbarEntriesForDirectories() {
        const taskbarDiv = document.getElementById("taskContainer");

        // Iterate through all directories under the root
        for (let i = 0; i < this.root_directory.array_directories.length; i++) {
            const directory = this.root_directory.array_directories[i];

            // Create the taskbar entry
            const taskbarEntry = document.createElement("div");
            taskbarEntry.id = directory.string_id + "_TaskbarEntry";
            taskbarEntry.className = "taskbar-entry";

            const taskbarIcon = document.createElement("img");
            taskbarIcon.src = directory.string_iconSrc;
            taskbarIcon.alt = `${directory.string_name} icon`;
            taskbarIcon.className = "taskbar-icon";

            const taskbarText = document.createElement("span");
            taskbarText.textContent = directory.string_name;

            taskbarEntry.appendChild(taskbarIcon);
            taskbarEntry.appendChild(taskbarText);

            // Event listener to toggle window visibility
            taskbarEntry.addEventListener("click", () => {
                const windowId = directory.string_id + "_Window";
                const windowDiv = document.getElementById(windowId);

                if (windowDiv) {
                    if (windowDiv.style.display === "none") {
                        windowDiv.style.display = "flex";
                        taskbarEntry.classList.add("clicked");
                    } else {
                        windowDiv.style.display = "none";
                        taskbarEntry.classList.remove("clicked");
                    }
                }
            });

            // Append the taskbar entry to the taskbar container
            taskbarDiv.appendChild(taskbarEntry);
        }
    }

    addClickListenersToIcons() {
        const iconsArray = document.querySelectorAll(".icon");

        for (let i = 0; i < iconsArray.length; i++) {
            const icon = iconsArray[i];

            icon.addEventListener("click", (event) => {
                const iconId = icon.id;
                const windowId = iconId.replace("_Icon", "_Window");
                const windowDiv = document.getElementById(windowId);

                if (windowDiv) {
                    windowDiv.style.display = "flex";
                }
            });
        }
    }
    updateClock() {
        const date_object = new Date();

        let hours = date_object.getHours();
        let minutes = date_object.getMinutes();
        let seconds = date_object.getSeconds();

        const ampm = hours >= 12 ? 'PM' : 'AM';

        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }

        const hoursStr = hours < 10 ? '0' + hours : hours.toString();
        const minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
        const secondsStr = seconds < 10 ? '0' + seconds : seconds.toString();

        const clockTime = `${hoursStr}:${minutesStr}:${secondsStr} ${ampm}`;
        document.getElementById('clock-time').innerText = clockTime;
    }

    initializeClock() {
        this.updateClock(); // Initial clock update
        setInterval(this.updateClock, 1000); // Update every second
    }

    initializeTooltips() {
        const tooltip = document.getElementById('tooltip');

        if (!tooltip) {
            console.error('Tooltip element not found');
            return;
        }

        const desktop = document.getElementById('desktop');
        if (!desktop) {
            console.error('Desktop element not found');
            return;
        }

        desktop.addEventListener('mouseover', function (event) {
            const iconElement = event.target.closest('.icon');
            if (iconElement) {
                const tooltipTextElement = iconElement.querySelector('p');
                if (tooltipTextElement && tooltipTextElement.innerText) {
                    tooltip.innerText = tooltipTextElement.innerText;
                    positionTooltip(iconElement);
                    showTooltip();
                } else {
                    console.warn('Tooltip text not found for:', iconElement);
                }
            }
        });

        desktop.addEventListener('mouseout', function (event) {
            const iconElement = event.target.closest('.icon');
            if (iconElement) {
                hideTooltip();
            }
        });

        function positionTooltip(element) {
            const rect = element.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();
            let top = rect.top + window.scrollY;
            let left = rect.left + window.scrollX;

            if (left + tooltipRect.width > window.innerWidth) {
                left = rect.left - tooltipRect.width - 10;
            } else {
                left = rect.left + 100;
            }

            if (top + tooltipRect.height > window.innerHeight) {
                top = window.innerHeight - tooltipRect.height - 10;
            }

            tooltip.style.top = top + "px";
            tooltip.style.left = (left + 50) + "px";
        }

        function showTooltip() {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        }

        function hideTooltip() {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        }
    }

    initializeStartMenu() {
        const startButton = document.getElementById("start-button");
        const startMenu = document.getElementById("start-menu");
      
        if (!startButton || !startMenu) {
          console.error("Start button or start menu element not found.");
          return;
        }
      
        startButton.addEventListener("click", () => {
            const isVisible = startMenu.style.display === "flex";
            startMenu.style.display = isVisible ? "none" : "flex"; // Toggle between none and flex
        });

      
        // Close the menu if clicking outside it
        document.addEventListener("click", (event) => {
          if (!startMenu.contains(event.target) && !startButton.contains(event.target)) {
            startMenu.style.display = "none";
            startButton.classList.remove("clicked");
          }
        });
    }

    populateElement( targetElement, directory ) {

        // Add directories to the target element
        for (let i = 0; i < directory.array_directories.length; i++) {
            const subDirectory = directory.array_directories[i];
    
            // Create and append the directory icon
            const icon = new Icon(subDirectory.string_id,subDirectory.string_name,"",subDirectory.string_iconSrc,subDirectory.string_description);
            subDirectory.dom_icon = icon.dom_htmlElement; // Associate the created icon
            targetElement.appendChild(subDirectory.dom_icon);
    
            // Create a taskbar entry if applicable
            const task = new Task(subDirectory, taskContainer);
            subDirectory.dom_task = task.dom_htmlElement; // Associate the task
    
            // Create a window for the directory
            const window = new Window(subDirectory, document.getElementById("pane"));
            subDirectory.dom_window = window.dom_htmlElement; // Associate the window
        }
    
        // Add files to the target element
        for (let i = 0; i < directory.array_files.length; i++) {

            const file = directory.array_files[i];
    
            // Create and append the file icon directly
            const icon = new Icon(file.string_id,file.string_name,file.string_path,file.string_iconSrc,file.string_description);
            file.dom_icon = icon.dom_htmlElement; // Associate the created icon
            targetElement.appendChild(file.dom_icon);
        }
    }
    


}

