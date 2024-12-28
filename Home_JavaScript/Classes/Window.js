class Window {
    
    obj_target; // Reference to the Directory object
    dom_htmlElement; // DOM element representing the window
    width= "60%"; // Default width of the window
    height= "60%"; // Default height of the window

    constructor(target_directory, parentContainer) {

        this.obj_target = target_directory; // Store the reference to the Directory

        this.dom_htmlElement = this.createWindow(); // Create the DOM representation

        // Automatically append the window to the specified container
        if (parentContainer) {
            parentContainer.appendChild(this.dom_htmlElement);
        }
    }

    createWindow() {
        const windowDiv = document.createElement("div");
        windowDiv.id = `${this.obj_target.string_id}_window`;
        windowDiv.className = "window";

        // Set default size
        windowDiv.style.width = this.width;
        windowDiv.style.height = this.height;

        // Add title bar, toolbar, and body
        const titleBar = this.createTitleBar();
        const toolbar = this.createToolbar();
        const windowBody = this.createWindowBody();

        // Assemble the window
        windowDiv.appendChild(titleBar);
        windowDiv.appendChild(toolbar);
        windowDiv.appendChild(windowBody);

        return windowDiv;
    }

    createTitleBar() {
        const titleBar = document.createElement("div");
        titleBar.className = "title-bar";
    
        // Title container (to include icon and text together)
        const titleContainer = document.createElement("div");
        titleContainer.className = "title-container";
    
        // Window icon
        const titleIcon = document.createElement("img");
        titleIcon.className = "title-bar-icon";
        titleIcon.src = this.obj_target.string_iconSrc; // Use the directory's icon source
        titleIcon.alt = `${this.obj_target.string_name} Icon`;
    
        // Title text
        const titleText = document.createElement("span");
        titleText.className = "title-bar-text";
        titleText.textContent = this.obj_target.string_name;
    
        // Append icon and text to the title container
        titleContainer.appendChild(titleIcon);
        titleContainer.appendChild(titleText);
    
        // Control buttons
        const controls = this.createControlButtons();
    
        // Append title container and controls to the title bar
        titleBar.appendChild(titleContainer);
        titleBar.appendChild(controls);
    
        return titleBar;
    }
    
    createControlButtons() {
        const controls = document.createElement("div");
        controls.className = "title-bar-controls";
    
        // Minimize button
        const minimizeButton = this.createMinimizeButton();
    
        // Maximize button
        const maximizeButton = this.createMaximizeButton();
    
        // Close button
        const closeButton = this.createCloseButton();
    
        // Append buttons to the controls container
        controls.appendChild(minimizeButton);
        controls.appendChild(maximizeButton);
        controls.appendChild(closeButton);
    
        return controls;
    }
    
    createMinimizeButton() {
        const button = document.createElement("button");
        button.textContent = "_";
        button.addEventListener("click", () => {
            const windowDiv = document.getElementById(`${this.obj_target.string_id}_window`);
            windowDiv.style.display = "none";
        });
        return button;
    }
    createMaximizeButton() {
        const button = document.createElement("button");
        button.textContent = "🗖";
        button.addEventListener("click", () => {
            const windowDiv = document.getElementById(`${this.obj_target.string_id}_window`);
            const isMaximized = windowDiv.classList.contains("maximized");
    
            windowDiv.classList.toggle("maximized", !isMaximized);
            windowDiv.style.width = isMaximized ? this.width : "100vw";
            windowDiv.style.height = isMaximized ? this.height : "calc(100vh - 4.5rem)";
            windowDiv.style.top = isMaximized ? "50%" : "0";
            windowDiv.style.left = isMaximized ? "50%" : "0";
            windowDiv.style.transform = isMaximized ? "translate(-50%, -50%)" : "none";
            windowDiv.style.position = isMaximized ? "absolute" : "fixed";
        });
        return button;
    }
    createCloseButton() {
        const button = document.createElement("button");
        button.textContent = "X";
        button.addEventListener("click", () => {
            const windowDiv = document.getElementById(`${this.obj_target.string_id}_window`);
            const taskDiv = document.getElementById(`${this.obj_target.string_id}_task`);
            windowDiv.style.display = "none";
            taskDiv.style.display = "none";
        });
        return button;
    }
    createToolbar() {
        const toolbar = document.createElement("div");
        toolbar.className = "toolbar";

        // Create classic toolbar buttons
        const fileButton = this.createToolbarButton("File", () => {
            console.log("File menu clicked");
        });

        const editButton = this.createToolbarButton("Edit", () => {
            console.log("Edit menu clicked");
        });

        const viewButton = this.createToolbarButton("View", () => {
            console.log("View menu clicked");
        });

        const helpButton = this.createToolbarButton("Help", () => {
            console.log("Help menu clicked");
        });

        // Append buttons to the toolbar
        toolbar.appendChild(fileButton);
        toolbar.appendChild(editButton);
        toolbar.appendChild(viewButton);
        toolbar.appendChild(helpButton);

        return toolbar;
    }
    createToolbarButton(label, onClick) {
        const button = document.createElement("button");
        button.textContent = label;
        button.addEventListener("click", onClick);
        return button;
    }
    createWindowBody() {
        const bodyDiv = document.createElement("div");
        bodyDiv.className = "window-body";
        bodyDiv.textContent = `Contents of ${this.obj_target.string_name}`;
        return bodyDiv;
    }
}
