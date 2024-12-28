class File {

    string_id;          // Unique identifier for the file
    
    string_path;        // Path to the file
    dom_icon;           // DOM element created by the Icon class

    string_name;        // Name of the file
    string_iconSrc;     // Path to the file's icon
    string_description; // Description of the file
    

    constructor(new_id, new_name, new_path, new_iconSrc, new_description = "") {

        this.string_id = new_id;
        this.string_name = new_name;
        this.string_path = new_path;
        this.string_iconSrc = new_iconSrc;
        this.string_description = new_description;
        this.dom_icon = this.createIcon(); 
    }

    createIcon() {
        const icon = new Icon(this.string_id, this.string_name, this.string_path, this.string_iconSrc, this.string_description);
        return icon.dom_htmlElement; 
    }


}
