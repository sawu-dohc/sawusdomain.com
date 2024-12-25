class System {
    directory_array = [];

    constructor() {}

    addDirectory( new_directory ) {
        this.directory_array.push(new_directory);
    }

    createAllDirectoryIcons() {

        // Description
        // This method creates this series of elements for each directory object and inserts it into the desktop div.
        //
        //  <div id="exampleIcon" class="Icon ">
        //      <a href="https://example.com">
        //          <img src="Home_Assets/textFile.png" alt="Example Title">
        //      </a>
        //      <h2>Example Title</h2>
        //      <p>This is an example description.</p>
        //  </div>
        //


        const desktopDiv = document.getElementById("desktop");

        for (let i = 0; i < this.directory_array.length; i++) {
            const directory = this.directory_array[i];
        
            // Create the icon div
            const iconDiv = document.createElement("div");
            iconDiv.id = directory.name_string; 
            iconDiv.className = "icon";
        
            // Create the anchor element
            const linkElement = document.createElement("a");
            linkElement.href = "#"; // Placeholder link
        
            // Create the image element
            const imgElement = document.createElement("img");
            imgElement.src = directory.iconSrc_string;
            imgElement.alt = directory.name_string;
        
            // Create the title (h2) element
            const titleElement = document.createElement("h2");
            titleElement.textContent = directory.name_string;
        
            // Create the description (p) element
            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = directory.description_string;
        
            // Append elements together
            linkElement.appendChild(imgElement);
            iconDiv.appendChild(linkElement);
            iconDiv.appendChild(titleElement);
            iconDiv.appendChild(descriptionElement);
        
            // Append the icon to the desktop
            desktopDiv.appendChild(iconDiv);
        }
    }
    handleIconClick(event, icon) {
        if (event.target.tagName === "IMG") {
            const iconId = icon.id; // Get the ID of the clicked icon
            console.log(`Clicked on icon: ${iconId}`); // For debugging purposes
            this.createWindow(iconId); // Create a window for the clicked icon
        }
    }
    addClickListenersToIcons() {

        const iconsArray = document.querySelectorAll(".icon"); 
    
        for (let i = 0; i < iconsArray.length; i++) {

            const icon = iconsArray[i]; 

            icon.addEventListener("click", function (event) {

                if (event.target.tagName === "IMG") {

                    const windowDiv = document.getElementById(iconId);
    
                    windowDiv.style.display = "flex"; 
                    
                }
            });
        }
    }
    
    



    createWindowsForAllDirectories() {

        // Description
        // This method creates these window divs inside the desktop div
        //
        //  <div id="genericWindow" class="window">
        //      
        //       <!-- Title bar -->  
        //        <div class="title-bar">
        //            <span class="title-bar-text">
        //                <img id="window-icon" src="Home_Assets/defaultIcon.png"> 
        //                Generic Window Title
        //            </span>
        //            <div class="title-bar-controls">
        //                <button aria-label="Minimize">-</button> 
        //                <button aria-label="Maximize">□</button> 
        //                <button aria-label="Close" class="close-btn">x</button> 
        //            </div>
        //        </div>
        //
        //        <!-- Toolbar buttons -->
        //        <div class="toolbar"> 
        //            <button>File</button> 
        //            <button>Edit</button>
        //            <button>Search</button>
        //            <button>Help</button>
        //        </div>
        //
        //        <!-- Content of the window goes here -->
        //        <div class="window-body">
        //
        //        </div>
        //  </div>
        //   

        const paneDiv = document.getElementById("pane");

        for (let i = 0; i < this.directory_array.length; i++) {
            const directory = this.directory_array[i];
            console.log(`Creating window for directory: ${directory.name_string}`);
            const windowDiv = this.createWindowContainer(directory);
            paneDiv.appendChild(windowDiv);
            console.log(`Window created for directory: ${directory.name_string}`);
        }
            
    }
    
    createWindowContainer(directory) {
            const windowDiv = document.createElement("div");
            windowDiv.id = `${directory.name_string.replace(/\s+/g, "_")}Window`;
            windowDiv.className = "window";
            windowDiv.style.display = "none";
        
            const titleBar = this.createTitleBar(directory, windowDiv);
            const toolbar = this.createToolbar();
            const windowBody = this.createWindowBody(directory);
        
            windowDiv.appendChild(titleBar);
            windowDiv.appendChild(toolbar);
            windowDiv.appendChild(windowBody);
        
            return windowDiv;
    }
    
    createTitleBar(directory, windowDiv) {
            const titleBar = document.createElement("div");
            titleBar.className = "title-bar";
        
            const titleBarText = document.createElement("span");
            titleBarText.className = "title-bar-text";
        
            const iconImg = document.createElement("img");
            iconImg.id = "window-icon";
            iconImg.src = directory.iconSrc_string;
            titleBarText.appendChild(iconImg);
            titleBarText.append(` ${directory.name_string}`);
        
            const titleBarControls = this.createTitleBarControls(windowDiv);
            titleBar.appendChild(titleBarText);
            titleBar.appendChild(titleBarControls);
        
            return titleBar;
    }
    
    createTitleBarControls(windowDiv) {
            const titleBarControls = document.createElement("div");
            titleBarControls.className = "title-bar-controls";
        
            const minimizeButton = this.createMinimizeButton(windowDiv);
            const maximizeButton = this.createMaximizeButton(windowDiv);
            const closeButton = this.createCloseButton(windowDiv);
        
            titleBarControls.appendChild(minimizeButton);
            titleBarControls.appendChild(maximizeButton);
            titleBarControls.appendChild(closeButton);
        
            return titleBarControls;
    }
    
    createMinimizeButton(windowDiv) {
            const minimizeButton = document.createElement("button");
            minimizeButton.textContent = "-";
            minimizeButton.className = "minimize-btn";
            minimizeButton.addEventListener("click", () => {
                windowDiv.style.display = "none";
            });
            return minimizeButton;
    }
    
    createMaximizeButton(windowDiv) {
            const maximizeButton = document.createElement("button");
            maximizeButton.textContent = "□";
            maximizeButton.className = "maximize-btn";
        
            let isMaximized = false;
            let originalStyles = {};
        
            maximizeButton.addEventListener("click", () => {
                const taskbar = document.getElementById("taskbar");
                const taskbarHeight = taskbar ? taskbar.offsetHeight : 0;
                const titleBarHeight = 30;
                const toolbarHeight = 40;
        
                if (!isMaximized) {
                    originalStyles = {
                        width: windowDiv.style.width,
                        height: windowDiv.style.height,
                        top: windowDiv.style.top,
                        left: windowDiv.style.left,
                        transform: windowDiv.style.transform,
                    };
        
                    windowDiv.style.width = "100%";
                    windowDiv.style.height = `calc(100% - ${taskbarHeight}px)`;
                    windowDiv.style.top = "0";
                    windowDiv.style.left = "0";
                    windowDiv.style.transform = "none";
        
                    const windowBody = windowDiv.querySelector(".window-body");
                    if (windowBody) {
                        windowBody.style.height = `calc(100% - ${titleBarHeight}px - ${toolbarHeight}px)`;
                        windowBody.style.width = "100%";
                    }
        
                    isMaximized = true;
                } else {
                    windowDiv.style.width = originalStyles.width;
                    windowDiv.style.height = originalStyles.height;
                    windowDiv.style.top = originalStyles.top;
                    windowDiv.style.left = originalStyles.left;
                    windowDiv.style.transform = originalStyles.transform;
        
                    const windowBody = windowDiv.querySelector(".window-body");
                    if (windowBody) {
                        windowBody.style.height = "";
                        windowBody.style.width = "";
                    }
        
                    isMaximized = false;
                }
            });
        
            return maximizeButton;
    }
    
    createCloseButton(windowDiv) {
        const closeButton = document.createElement("button");
        closeButton.textContent = "x";
        closeButton.className = "close-btn";
    
        closeButton.addEventListener("click", () => {
            // Hide the window
            windowDiv.style.display = "none";
    
            // Hide the corresponding taskbar entry
            const taskbarEntryId = `${windowDiv.id.replace("Window", "TaskbarEntry")}`;
            const taskbarEntry = document.getElementById(taskbarEntryId);
            if (taskbarEntry) {
                taskbarEntry.style.display = "none";
            }
    
            console.log(`Hiding window: ${windowDiv.id} and taskbar entry: ${taskbarEntryId}`);
        });
    
        return closeButton;
    }
    
    
    createToolbar() {
            const toolbar = document.createElement("div");
            toolbar.className = "toolbar";
        
            const fileButton = document.createElement("button");
            fileButton.textContent = "File";
            toolbar.appendChild(fileButton);
        
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            toolbar.appendChild(editButton);
        
            const searchButton = document.createElement("button");
            searchButton.textContent = "Search";
            toolbar.appendChild(searchButton);
        
            const helpButton = document.createElement("button");
            helpButton.textContent = "Help";
            toolbar.appendChild(helpButton);
        
            return toolbar;
    }
    
    createWindowBody(directory) {
            const windowBody = document.createElement("div");
            windowBody.className = "window-body";
            windowBody.innerHTML = `<p>${directory.description_string}</p>`;
            return windowBody;
    }
    
    addClickListenersToIcons() {
        const iconsArray = document.querySelectorAll(".icon");
    
        for (let i = 0; i < iconsArray.length; i++) {
            const icon = iconsArray[i]; // Current icon in the loop
    
            icon.addEventListener("click", function (event) {
                const iconId = icon.id; // Get the ID of the clicked icon
                const windowId = `${iconId}Window`; // Derive the corresponding window ID
                const taskbarEntryId = `${iconId}TaskbarEntry`; // Derive the corresponding taskbar-entry ID
                const windowDiv = document.getElementById(windowId);
                const taskbarEntry = document.getElementById(taskbarEntryId);
    
                // Only open the window if it is not already visible
                if (windowDiv && (windowDiv.style.display === "none" || !windowDiv.style.display)) {
                    windowDiv.style.display = "flex"; // Show the window
                    if (taskbarEntry) {
                        taskbarEntry.style.display = "flex"; // Show the taskbar entry
                    }
                    console.log(`Opening window: ${windowId} and making taskbar entry visible: ${taskbarEntryId}`);
                }
            });
        }
    }
    
    createTaskbarEntriesForDirectories() {
        const taskbarDiv = document.getElementById("taskContainer");
    
        if (!taskbarDiv) {
            console.error("Taskbar div not found!");
            return;
        }
    
        for (let i = 0; i < this.directory_array.length; i++) {
            const directory = this.directory_array[i];
    
            const taskbarEntry = document.createElement("div");
            taskbarEntry.id = `${directory.name_string.replace(/\s+/g, "_")}TaskbarEntry`;
            taskbarEntry.className = "taskbar-entry";
            taskbarEntry.textContent = directory.name_string;
    
            taskbarEntry.addEventListener("click", () => {
                const windowId = `${directory.name_string.replace(/\s+/g, "_")}Window`;
                const windowDiv = document.getElementById(windowId);
    
                if (windowDiv) {
                    if (windowDiv.style.display === "none") {
                        windowDiv.style.display = "flex"; // Show the window
                    } else {
                        windowDiv.style.display = "none"; // Hide the window
                    }
                }
            });
    
            taskbarDiv.appendChild(taskbarEntry);
        }
    }
    
        
        
        
        



}
