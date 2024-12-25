class File {
    
    name_string;
    path_string;
    iconSrc_string;
    description_string;

    constructor(new_name, new_path, new_iconSrc, new_description = "") {
        this.name_string = new_name;
        this.path_string = new_path;
        this.iconSrc_string = new_iconSrc;
        this.description_string = new_description;
    }
}
