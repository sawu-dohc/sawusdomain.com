class App{

    string_id;

    string_name;
    string_description;
    string_imgSrc = "Home_Assets/ApplicationIcon.png";

    //just gonna be a bunch of custom functions
    //gonna need a function to return a window body



    constructor(index, new_name, new_description) {
        this.string_id = `application_${index}`; // Use index for ID consistency
        this.string_name = new_name;
        this.string_description = new_description;
    }
    // this class should have an install method to basically initialize all those functions in the current xxx folder
    // img source will need to vary for things like my computer and read mes
    
}
