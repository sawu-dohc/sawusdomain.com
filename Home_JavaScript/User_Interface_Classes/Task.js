class Task {

    string_divID;
    string_imgSrc;
    string_title;
    element_task;






    constructor( sourceObject, index ) {

        this.sourceObject = sourceObject;

        this.string_divID = `task-${index}`; // Use index for consistent ID management
        this.string_imgSrc = sourceObject.string_imgSrc;
        this.string_title = sourceObject.string_title;
        
        this.element_task = this.createTaskElement(); // Automatically create the task HTML element

        this.element_task.style.display = "none";

    }



    createTaskElement() {
        // Create the main task div
        const taskDiv = document.createElement("div");
        taskDiv.id = this.string_divID;
        taskDiv.className = "taskbar-entry";

        // Set visibility based on string_visible
        taskDiv.style.display = this.string_visible;

        // Create the task icon (image)
        const taskImg = document.createElement("img");
        taskImg.src = this.string_imgSrc;
        taskImg.alt = this.string_title;

        // Create the task title (span)
        const taskTitle = document.createElement("span");
        taskTitle.textContent = this.string_title;

        // Append the image and title to the task div
        taskDiv.appendChild(taskImg);
        taskDiv.appendChild(taskTitle);

        return taskDiv;
    }

    toggleVisibility() {
        // Toggle visibility of the task
        this.string_visible = this.string_visible === "flex" ? "none" : "flex";
        this.element_task.style.display = this.string_visible;
    }
}



// IDEAL HTML     

// <div id="task-ID" class="taskbar-entry" >
//     <img src="Home_Assets/ApplicationIcon.png">
//     <span> Task Title </span>
// </div>
