function Main() {


    const system = new System(); 

    system.initializeData();
    system.initializeClock();
    system.initializeTooltips();
    system.initializeStartMenu();

    system.populateElement(document.getElementById("desktop"), system.root_directory);








    
}


document.addEventListener("DOMContentLoaded", Main);
