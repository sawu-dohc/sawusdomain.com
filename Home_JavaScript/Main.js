


function Main() {
    //showIntro();

    initializeClock();
    initializeTooltips();



    const system0 = new System();

    // Declare directories 

    const directory0 = new Directory( "JavaScript",         "HTML pages demonstrating JavaScript functionalities",       "Home_Assets/FileIcon.png"              );
    const directory1 = new Directory( "HTMLProjects",       "Static web pages with CSS and a little JavaScript",         "Home_Assets/FileIcon.png"              );
    const directory2 = new Directory( "WebApplications",    "HTML, CSS, JavaScript, PHP, and SQL database projects",     "Home_Assets/FileIcon.png"              );
    const directory3 = new Directory( "MyComputer",         "Rig specs with links!",                                     "Home_Assets/MyComputerIcon.png"        );
    const directory4 = new Directory( "ReadMe",             "Welcome message.",                                          "Home_Assets/TextFileIcon.png"          );
    const directory5 = new Directory( "RecycleBin",         "",                                                          "Home_Assets/RecycleBinEmptyIcon.png"   );
    const directory6 = new Directory( "E-Mail",              "Send me an email!",                                         "Home_Assets/EmailIcon.png"            );
    const directory7 = new Directory( "CProjects",          "Link to my C projects on Git hub",                          "Home_Assets/FileIcon.png"              );
    const directory8 = new Directory( "JavaProjects",       "Link to my Java projects on Git hub",                       "Home_Assets/FileIcon.png"              );
    // Declare files                                              
                                                                                                                
    const file0  = new File( "Online order form",                          "Home_Assets/InternetExplorerIcon.png",        "Sites/FinalProject2/index.html",                                                       "Simple page that uses JS to calculate totals from selected items."                                                                           );
    const file1  = new File( "Using NASA API",                             "Home_Assets/InternetExplorerIcon.png",        "Sites/SamsJSproject11/index.html",                                                     "Webpage that uses NASA's API to show you a picture taken on a specified date."                                                               );
    const file2  = new File( "Temperature converter",                      "Home_Assets/InternetExplorerIcon.png",        "Sites/SamsJSproject2/index.html",                                                      "Simple JS project that targets input fields and manipulates the values."                                                                     );
    const file3  = new File( "Timed math quiz",                            "Home_Assets/InternetExplorerIcon.png",        "Sites/SamsJSproject5/index.html",                                                      "JS project that compares inputs with declared values and manipulates the HTML page to give the user feedback."                               );
    const file4  = new File( "Input validation",                           "Home_Assets/InternetExplorerIcon.png",        "Sites/SamsJSproject7/index.html",                                                      "This script demonstrates how to use JS to restrict user inputs."                                                                             );
    const file5  = new File( "Stopwatch",                                  "Home_Assets/InternetExplorerIcon.png",        "Sites/SamsJSproject8/index.html",                                                      "Webpage that uses NASA's API to show you a picture taken on a specified date."                                                               );
    const file6  = new File( "Utilizing string query",                     "Home_Assets/InternetExplorerIcon.png",        "Sites/SamsJSproject9/index.html",                                                      "This page uses string query technique to pass data from one page to another."                                                                );
    const file7  = new File( "Jigsaw puzzle",                              "Home_Assets/InternetExplorerIcon.png",        "Sites/SamsJSproject10/index.html",                                                     "Making elements draggable."                                                                                                                  );
    const file8  = new File( "Fulton County Payroll Deduction Form",       "Home_Assets/InternetExplorerIcon.png",        "Sites/FCGAFormProject/index.html",                                                     "Digitizing an onboarding payroll deduction form."                                                                                            );
   
    const file9  = new File( "Wild Rescues",                               "Home_Assets/InternetExplorerIcon.png",        "Sites/WildRescues/page1_index.html",                                                   "Website that utilizes HTML, CSS, and a little bit of JavaScript. Has media query for mobile devices."                                        );
    const file10 = new File( "Strike A Chord",                             "Home_Assets/InternetExplorerIcon.png",        "Sites/StrikeAChord/page1_index.html",                                                  "Website that utilizes HTML, CSS, and a little bit of JavaScript. Has media query for mobile devices."                                        );
  
    const file11 = new File( "GTC Hiring Partner Database.exe",            "Home_Assets/ApplicationIcon.png",             "Sites/SamsJSproject13/HTML/page0_ViewLogin.html",                                      "Database application that uses PHP and JavaScript to manage an SQL database. Features session tracking and user permission functionality."   );
    const file12 = new File( "GTC Hiring Partner Database Documentation",  "Home_Assets/InternetExplorerIcon.png",        "",                                                                                     "Link to a public google docs directory that contains documentation for my database application"                                              );
    const file13 = new File( "GTC Welding department Inventory System",    "Home_Assets/ApplicationIcon.png",             "Sites/InventoryDatabaseApp/HTML/page1_Home.html",                                      "Inventory database application (pls no bully, under construction)"                                                                           );
    const file14 = new File( "Digital Broker",                             "Home_Assets/ApplicationIcon.png",             "Sites/OnlineBroker/index.html",                                                        "Long term and short term divergence calculator, literally makes you rich!"                                                                   );

    // Add files to the Desktop directory


    // Add files to the JavaScript directory
    directory0.addFile(file0);  // Online order form
    directory0.addFile(file1);  // Using NASA API
    directory0.addFile(file2);  // Temperature converter
    directory0.addFile(file3);  // Timed math quiz
    directory0.addFile(file4);  // Input validation
    directory0.addFile(file5);  // Stopwatch
    directory0.addFile(file6);  // Utilizing string query
    directory0.addFile(file7);  // Jigsaw puzzle
    directory0.addFile(file8);  // Fulton County Payroll Deduction Form

    // Add files to the HTML Projects directory
    directory1.addFile(file9); // Wild Rescues
    directory1.addFile(file10); // Strike A Chord

    // Add files to the Web Apps directory
    directory2.addFile(file11); // GTC Hiring Partner Database.exe
    directory2.addFile(file12); // GTC Hiring Partner Database Documentation
    directory2.addFile(file13); // GTC Inventory System (under construction)
    directory2.addFile(file14); // Digital Broker

    system0.addDirectory(directory0);
    system0.addDirectory(directory1);
    system0.addDirectory(directory2);
    system0.addDirectory(directory3);
    system0.addDirectory(directory4);
    system0.addDirectory(directory5);
    system0.addDirectory(directory6);
    system0.addDirectory(directory7);
    system0.addDirectory(directory8);


    // Create all icons and hidden windows
    system0.createAllDirectoryIcons();
    // Add event listeners to icons
    system0.addClickListenersToIcons();


    system0.createWindowsForAllDirectories();


    system0.createTaskbarEntriesForDirectories();






    
}
// Run the main function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", Main);
