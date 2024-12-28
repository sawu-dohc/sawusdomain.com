// Icon.js
class Icon {
    dom_htmlElement;

    constructor(new_id, new_name, new_path, new_iconSrc, new_description, targetObject) {
        this.dom_htmlElement = this.createIcon(new_id, new_name, new_iconSrc, new_description, targetObject); // Create and store the icon's DOM element
    }

    createIcon(new_id, new_name, new_iconSrc, new_description, targetObject) {
        const dom_iconDiv = document.createElement("div");
        dom_iconDiv.id = `${new_id}_icon`; // Use the ID to uniquely identify the icon
        dom_iconDiv.className = "icon";

        const dom_imgElement = document.createElement("img");
        dom_imgElement.src = new_iconSrc;
        dom_imgElement.alt = new_name;

        const dom_titleElement = document.createElement("h2");
        dom_titleElement.textContent = new_name;

        const dom_tooltipElement = document.createElement("p");
        dom_tooltipElement.textContent = new_description;
        dom_tooltipElement.style.display = "none"; // Initially hide the tooltip

        // Append child elements to the icon div
        dom_iconDiv.appendChild(dom_imgElement);
        dom_iconDiv.appendChild(dom_titleElement);
        dom_iconDiv.appendChild(dom_tooltipElement);

        // Pass targetObject to attachEventListeners
        this.attachEventListeners(dom_iconDiv, targetObject);

        return dom_iconDiv; // Return the fully constructed DOM element
    }

    attachEventListeners(dom_iconDiv) {
        dom_iconDiv.addEventListener("click", () => {
            const id = dom_iconDiv.id; // Extract the ID from the DOM element
            console.log(`Icon clicked: ${id}`);

            if (id.startsWith("directory")) {
                console.log("Object type: Directory");

                // Determine the corresponding window and task IDs
                const windowId = id.replace("_icon", "_window");
                const taskId = id.replace("_icon", "_task");

                // Get the corresponding window and task elements
                const windowElement = document.getElementById(windowId);
                const taskElement = document.getElementById(taskId);

                windowElement.style.display = "flex";
                taskElement.style.display = "flex";
                
                // Retrieve the directory object associated with this icon
                const directoryId = id.replace("_icon", "");
                const directory = system.getDirectoryById(directoryId);

                if (directory) {
                    // Populate the window with the directory's contents
                    system.populateElement(windowElement, directory);
                } else {
                    console.error(`Directory object not found for ID: ${directoryId}`);
                }
            } 
            else if (id.startsWith("file")) {
                console.log("Object type: File");

                // Navigate to the file's path
                const filePath = dom_iconDiv.getAttribute("data-path");
                if (filePath) {
                    window.location.href = filePath; // Navigate to the file link
                }
                else {
                    console.error("File path not set for this icon.");
                }
            }
        });
    }
}
