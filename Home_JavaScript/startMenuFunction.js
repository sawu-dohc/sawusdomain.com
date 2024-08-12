document.addEventListener('DOMContentLoaded', () => {
    function toggleStartMenu() {
        const startMenu = document.getElementById('start-menu');
        if (startMenu.style.display === 'none' || startMenu.style.display === '') {
            startMenu.style.display = 'flex';
        } else {
            startMenu.style.display = 'none';
        }
    }

    // Event listener for the start button
    document.getElementById('start-button').addEventListener('click', function(event) {
        event.stopPropagation();
        toggleStartMenu();
    });

    // Close the start menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const startMenu = document.getElementById('start-menu');
        if (!startMenu.contains(event.target) && event.target.id !== 'start-button') {
            startMenu.style.display = 'none';
        }
    });
});
