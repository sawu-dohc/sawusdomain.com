class Icon {

    string_divID;
    string_imgSrc;
    string_title;
    element_icon;     

    string_link; 
    string_description; // for hover function


    constructor(item, index) {
        this.string_divID = `icon-${index}`;
        this.string_imgSrc = item.string_imgSrc || "default_icon.png";
        this.string_title = item.string_name || "Untitled";
        this.string_description = item.string_description || "No description available.";
        this.string_link = item instanceof Link ? item.string_url : null;

        // Generate the HTML element
        this.element_icon = this.createIconElement();

        // Add click listener for interaction
        this.element_icon.addEventListener("click", () => this.handleIconClick(item, index));
    }

    createIconElement() {
        const container = document.createElement("div"); // Use a <div> for internal content
        container.id = this.string_divID;
        container.classList.add("icon-container"); // Add a class for styling
    
        const img = document.createElement("img");
        img.src = this.string_imgSrc;
        img.alt = this.string_title;
        container.appendChild(img);
    
        const h2 = document.createElement("h2");
        h2.textContent = this.string_title;
        container.appendChild(h2);
    
        const description = document.createElement("p");
        description.textContent = this.string_description; // Add the description text
        container.appendChild(description);
    
        return container;
    }
    

    handleIconClick(sourceObject, index) {
        console.log(`${this.string_title} clicked!`);
    
        if (sourceObject instanceof Link) {
            // Handle Link objects
            window.open(this.string_link, "_blank");
        } 
        else if (sourceObject instanceof App || sourceObject instanceof Dir) {
            // Handle App and Directory objects
            const associatedWindow = document.getElementById(`window-${index}`);
            const associatedTask = document.getElementById(`task-${index}`);
    
            if (associatedWindow) {
                // Make the window visible
                associatedWindow.style.display = "flex";
    
                // Bring the window to the front
                this.bringWindowToFront(associatedWindow);
    
                // Make the associated task visible
                if (associatedTask) {
                    associatedTask.style.display = "flex";
                } else {
                    console.warn(`No task found for ${sourceObject.constructor.name} with index: task-${index}`);
                }
            } else {
                console.warn(`No window found for ${sourceObject.constructor.name} with index: window-${index}`);
            }
        } 
        else {
            // Handle any other type of source object
            console.warn(`Unhandled sourceObject type for: ${this.string_title}`);
        }
    }
    
    bringWindowToFront(windowElement) {
        // Reset z-index for all windows
        const allWindows = document.querySelectorAll(".window");
        allWindows.forEach(win => {
            win.style.zIndex = 1; // Send all windows to the background
        });
    
        // Bring the selected window to the front
        windowElement.style.zIndex = 1000;
    }
    
    
    
}
// IDEAL HTML     

// <td id="icon_ID" >
//   <img src="/Home_Assets/ApplicationIcon.png" >
//   <h2> Icon Title </h2>
//   <p></p>
// </td>
