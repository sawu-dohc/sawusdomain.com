
function addDirectory(parentDirectory, newDirectory) {
    parentDirectory.array_directories.push(newDirectory);
}

function addFile(parentDirectory, newFile) {
    parentDirectory.array_files.push(newFile);
}


    function initializeData(){

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
        const file16 = new File( "file16"     , "GTC Hiring Partner Database"                 , "Sites/SamsJSproject13/HTML/page0_ViewLogin.html"                            , "Home_Assets/ApplicationIcon.png"                   , "Database application that uses PHP and JavaScript to manage an SQL database. Features session tracking and user permission functionality."   );
        const file17 = new File( "file17"     , "GTC Hiring Partner Database Documentation"   , ""                                                                           , "Home_Assets/InternetExplorerIcon.png"              , "Link to a public google docs directory that contains documentation for my database application"                                              );
        const file18 = new File( "file18"     , "GTC Welding department Inventory System"     , "Sites/InventoryDatabaseApp/HTML/page1_Home.html"                            , "Home_Assets/ApplicationIcon.png"                   , "Inventory database application (pls no bully, under construction)"                                                                           );
        const file19 = new File( "file19"     , "Digital Broker"                              , "Sites/OnlineBroker/index.html"                                              , "Home_Assets/ApplicationIcon.png"                   , "Long term and short term divergence calculator, literally makes you rich!"                                                                   );

//                                        string_id    string_name          string_description                                        string_iconSrc                         array_files    array_directories
        const directory0 = new Directory( "directory0"     , "HTML Projects"    , "Static web pages with CSS and a little JavaScript"     , "Home_Assets/FileIcon.png"            , []           , []               );
        const directory1 = new Directory( "directory1"     , "JavaScript"       , "HTML pages demonstrating JavaScript functionalities"   , "Home_Assets/FileIcon.png"            , []           , []               );
        const directory2 = new Directory( "directory2"     , "Web Applications" , "HTML, CSS, JavaScript, PHP, and SQL database projects" , "Home_Assets/FileIcon.png"            , []           , []               );
        const directory3 = new Directory( "directory3"     , "Recycle Bin"      , " "                                                     , "Home_Assets/RecycleBinEmptyIcon.png" , []           , []               );


        // Add files and directories to their parents
        addDirectory(rootDirectory, directory0);
        addDirectory(rootDirectory, directory1);
        addDirectory(rootDirectory, directory2);
        addDirectory(rootDirectory, directory3);

        addFile(rootDirectory, file0);
        addFile(rootDirectory, file1);
        addFile(rootDirectory, file2);
        addFile(rootDirectory, file3);
        addFile(rootDirectory, file4);

        addFile(directory0, file5);
        addFile(directory0, file6);

        addFile(directory1, file7);
        addFile(directory1, file8);
        addFile(directory1, file9);
        addFile(directory1, file10);
        addFile(directory1, file11);
        addFile(directory1, file12);
        addFile(directory1, file13);
        addFile(directory1, file14);

        addFile(directory2, file16); // GTC Hiring Partner Database.exe
        addFile(directory2, file17); // GTC Hiring Partner Database Documentation
        addFile(directory2, file18); // GTC Welding department Inventory System
        addFile(directory2, file19); // Digital Broker



    }

    function createAllDirectoryIcons(parentDirectory, targetElement) {
        // Iterate through all directories in the parent directory
        for (let i = 0; i < parentDirectory.array_directories.length; i++) {
            const directory = parentDirectory.array_directories[i];
    
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
    
            // Append the icon to the target element
            targetElement.appendChild(iconDiv);
        }
    }
    


    function setupIconClickListener(targetContainer) {

        targetContainer.addEventListener("click", (event) => {
            // Check if the clicked element is an icon or inside an icon
            const icon = event.target.closest(".icon");
            if (!icon) return; // Exit if the click wasn't on an icon
    
            const iconId = icon.id;
            const windowId = iconId.replace("_Icon", "_Window");
            const windowDiv = document.getElementById(windowId);
    
            if (windowDiv) {
                windowDiv.style.display = "flex";
            } else {
                console.error(`No window found for ID: ${windowId}`);
            }
        });
    }
    







    function populateElement(targetElement, directory) {
        const taskContainer = document.getElementById("taskContainer");
    
        // Add directories to the target element
        for (let i = 0; i < directory.array_directories.length; i++) {
            const subDirectory = directory.array_directories[i];
    
            // Create and append the directory icon
            const icon = new Icon(subDirectory.string_id, subDirectory.string_name, "", subDirectory.string_iconSrc, subDirectory.string_description);
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
            const icon = new Icon(file.string_id, file.string_name, file.string_path, file.string_iconSrc, file.string_description);
            file.dom_icon = icon.dom_htmlElement; // Associate the created icon
            targetElement.appendChild(file.dom_icon);
        }
    }
    




