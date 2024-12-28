class Task {
    obj_target; // Reference to the Directory object
    dom_htmlElement; // DOM element representing the taskbar entry

    constructor(target_directory, parentContainer) {
        this.obj_target = target_directory; // Reference the Directory object
        this.dom_htmlElement = this.createTaskbarEntry(); // Create the DOM element
    
        // Append the taskbar entry to the parent container
        if (parentContainer) {
            parentContainer.appendChild(this.dom_htmlElement);
        }
    
        this.attachEventListeners(); // Attach event listeners for toggling visibility
    }
    

    createTaskbarEntry() {
        const taskEntry = document.createElement("div");
        taskEntry.id = `${this.obj_target.string_id}_task`;
        taskEntry.className = "taskbar-entry";
    
        // Add task icon
        const taskIcon = document.createElement("img");
        taskIcon.src = this.obj_target.string_iconSrc; // Use the directory's icon source
        taskIcon.alt = `${this.obj_target.string_name} Icon`;
        taskIcon.className = "taskbar-entry-icon";
    
        // Add task label
        const taskLabel = document.createElement("span");
        taskLabel.textContent = this.obj_target.string_name; // Use the directory's name
    
        // Append icon and label to the task entry
        taskEntry.appendChild(taskIcon);
        taskEntry.appendChild(taskLabel);
    
        return taskEntry;
    }
    

    attachEventListeners() {
        this.dom_htmlElement.addEventListener("click", () => {
            const windowElement = document.getElementById(`${this.obj_target.string_id}_window`);
    
            // Bring the corresponding window to the front
            const allWindows = document.querySelectorAll(".window");
            allWindows.forEach(win => win.style.zIndex = 10); // Reset z-index for all windows
            windowElement.style.zIndex = 100; // Bring this window to the front
    
            // Ensure the window is visible
            windowElement.style.display = "flex";
    
            // Reset all taskbar entries
            const allTasks = document.querySelectorAll(".taskbar-entry");
            allTasks.forEach(task => task.classList.remove("active-taskbar-entry"));
    
            // Set this taskbar entry as active
            this.dom_htmlElement.classList.add("active-taskbar-entry");
        });
    }
    
    
    
}
