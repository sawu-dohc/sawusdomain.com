class Dir {

    string_id;

    string_name;
    string_description;
    string_imgSrc = "Home_Assets/FileIcon.png";

    directory_parent; // not sure if id, a reference or a value
    array_directories;



    constructor(index, new_name, new_description, new_parent = null, new_directories) {
        this.string_id = `directory_${index}`; // Use index for ID consistency
        this.string_name = new_name;
        this.string_description = new_description;
        this.directory_parent = new_parent;
        this.array_directories = new_directories;
    }


}
