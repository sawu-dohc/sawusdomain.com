class Directory{

    name_string;
    files_array;
    iconSrc_string;
    description_string;

    constructor( new_name, new_description, new_iconSrc ) {
        this.name_string = new_name;
        this.description_string = new_description;
        this.files_array = [];
        this.iconSrc_string = new_iconSrc;
    }

    addFile( new_file ) {

        this.files_array.push(new_file);
    }
}
