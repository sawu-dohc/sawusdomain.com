function createGrid(desktopTable) {
    
    const rows = 5; // Number of rows
    const cols = 10; // Number of columns

    for (let y = 0; y < rows; y++) {
        const tr = document.createElement("tr");

        for (let x = 0; x < cols; x++) {
            const td = document.createElement("td");
            td.id = `x${x}-y${y}`; // Assign ID in "x{col}-y{row}" format
            tr.appendChild(td);
        }

        desktopTable.appendChild(tr);
    }
}

function createItems() {
    
    return [
            
        new App(   0   ,"My Computer"                                  , "Rig specs with links!"                                                                                                                                                                                               ),
        new App(   1   ,"Read Me"                                      , "Welcome message."                                                                                                                                                                                                    ),
        new App(   2   ,"NASA's API.exe"                               , "Webpage that uses NASA's API."                                                                                                                                                                                       ),
        new App(   3   ,"Temperature Converter.exe"                    , "Simple JS project that does some calculations."                                                                                                                                                                      ),
        new App(   4   ,"Time Converter.exe"                           , "Experimenting with time manipulation."                                                                                                                                                                               ),
        new App(   5   ,"TimerStopwatch.exe"                           , "Timer and stopwatch function."                                                                                                                                                                                       ),
        new Dir(   6   ,"C Projects"                                   , "Link to my C projects on GitHub"                                                                                                , null, null                                                                         ),
        new Dir(   7   ,"Java Projects"                                , "Link to my Java projects on GitHub"                                                                                             , null, null                                                                         ),                                                                   
        new Link(  8   ,"E-Mail"                                       , "Send me an email!"                                                                                                              , "mailto:example@example.com"                                                       ),                                   
        new Link(  9   ,"Fulton County Payroll Deduction Form"         , "Digitizing an onboarding payroll deduction form."                                                                               , "Sites/FCGAFormProject/index.html"                                                 ),                                   
        new Link(  10  ,"Wild Rescues"                                 , "Website that utilizes HTML, CSS, and a little bit of JavaScript. Has media query for mobile devices."                           , "Sites/WildRescues/page1_index.html"                                               ),
        new Link(  11  ,"Strike A Chord"                               , "Website that utilizes HTML, CSS, and a little bit of JavaScript. Has media query for mobile devices."                           , "Sites/StrikeAChord/page1_index.html"                                              ),                                   
        new Link(  12  ,"Sam Welds"                                    , "Check out Sam's welds!"                                                                                                         , "Sites/Weld/index.html"                                                            ),                                    
        new Link(  13  ,"Online order form"                            , "Simple page that uses JS to calculate totals from selected items."                                                              , "Sites/FinalProject2/index.html"                                                   ),
        new Link(  14  ,"Timed math quiz"                              , "JS project that compares inputs with declared values and manipulates the HTML page to give the user feedback."                  , "Sites/SamsJSproject5/index.html"                                                  ),                                   
        new Link(  15  ,"GTC Hiring Partner Database Documentation"    , "Link to a public Google Docs directory that contains documentation for my database application."                                , "https://drive.google.com/drive/folders/1dxXinOgHsTGpP_dAxbSq6UeskfoGcGb-?ths=true"),  
        new Link(  16  ,"Input validation"                             , "This script demonstrates how to use JS to restrict user inputs."                                                                , "Sites/SamsJSproject7/index.html"                                                  ),
        new Link(  17  ,"Utilizing string query"                       , "This page uses string query technique to pass data from one page to another."                                                   , "Sites/SamsJSproject9/index.html"                                                  ),
        new Link(  18  ,"GTC Hiring Partner Database"                  , "Database application, uses PHP and JS to manage an SQL database. Features session tracking and user permission functionality."  , "Sites/SamsJSproject13/HTML/page0_ViewLogin.html"                                  ),
        new Link(  19  ,"GTC Welding department Inventory System"      , "Inventory database (UNDER CONSTRUCTION)."                                                                                       , "Sites/InventoryDatabaseApp/HTML/page1_Home.html"                                  ),
        new Link(  20  ,"Digital Broker"                               , "Long-term and short-term divergence calculator, literally makes you rich!"                                                      , "Sites/OnlineBroker/index.html"                                                    ),
            
                                      
];
}