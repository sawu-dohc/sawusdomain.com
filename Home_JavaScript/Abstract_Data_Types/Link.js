class Link {

    string_id;

    string_name;
    string_description; 
    string_imgSrc = "Home_Assets/InternetExplorerIcon.png"

    string_url;


    
    constructor(index, new_name, new_description, new_url) {
        this.string_id = `link_${index}`; // Use index for ID consistency
        this.string_name = new_name;
        this.string_description = new_description;
        this.string_url = new_url;
    }
    // used to create an icon
    // needs to send user to wherever

}
