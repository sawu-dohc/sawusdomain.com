class Directory {
    
    string_id;               // Unique identifier for the directory
    
    array_files = [];        // Array of file objects
    array_directories = [];  // Array of subdirectory objects

    dom_window;              // DOM element created by the Window class
    dom_icon;                // DOM element created by the Icon class
    dom_task;
     
    string_name;             // Name of the directory
    string_iconSrc;          // Path to the directory's icon
    string_description;      // Description of the directory


    constructor(new_id, new_name, new_description, new_iconSrc, new_files = [], new_directories = []) {

        this.string_id = new_id;
        this.string_name = new_name;
        this.string_description = new_description;
        this.string_iconSrc = new_iconSrc;

        this.array_files = new_files; // Ensure files are an array
        this.array_directories = new_directories; // Ensure directories are an array

    }


    
}
