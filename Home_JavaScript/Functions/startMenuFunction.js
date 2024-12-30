document.addEventListener("DOMContentLoaded", () => {
    initializeStartMenu();
    initializeSubmenus();
});

function initializeStartMenu() {
    const startButton = document.getElementById("start-button");
    const startMenu = document.getElementById("start-menu");


    startButton.addEventListener("click", () => {
        const isVisible = startMenu.style.display === "flex";
        startMenu.style.display = isVisible ? "none" : "flex";
    });

    document.addEventListener("click", (event) => {
        if (!startMenu.contains(event.target) && !startButton.contains(event.target)) {
            startMenu.style.display = "none";
            startButton.classList.remove("clicked");
        }
    });
}

function initializeSubmenus() {
    const menuItems = document.querySelectorAll("#start-menu > ul > li");

    function hideAllSubmenus() {
        const allSubmenus = document.querySelectorAll(".submenu");
        allSubmenus.forEach(submenu => (submenu.style.display = "none"));
    }

    menuItems.forEach(menuItem => {
        const submenu = menuItem.querySelector(".submenu");

        menuItem.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent event from propagating

            const isVisible = submenu.style.display === "block";
            hideAllSubmenus(); // Hide other submenus

            if (!isVisible) {
                const itemRect = menuItem.getBoundingClientRect();
                submenu.style.position = "absolute";
                submenu.style.top = `${itemRect.top - 575}px`; // Adjust position
                submenu.style.left = `${itemRect.left + 405}px`;
                submenu.style.display = "block";
            }
        });
    });

    document.addEventListener("click", hideAllSubmenus); // Close all submenus when clicking outside
}
