document.addEventListener('DOMContentLoaded', function() {

    const icons = document.querySelectorAll('.Icon a');
    const closeButtons = document.querySelectorAll('.close-btn');
    const windows = document.querySelectorAll('.window');
    

    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener('click', handleIconClick);
    }
    for (let i = 0; i < windows.length; i++) {
        windows[i].addEventListener('click', handleWindowClick);
    }
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', handleCloseButtonClick);
    }


    function handleCloseButtonClick() {
        closeWindow(this.closest('.window').id);
    }
    function handleWindowClick( event ) {
        event.stopPropagation();
    }
    function handleIconClick( event ) {

        const iconElement = this.closest('.Icon');
        const windowId = iconElement.id;

        if (iconElement.classList.contains('Link')) {
            return; // Allow default behavior for links
        }

        event.preventDefault();

        openWindow(windowId.replace('Icon', 'Window'));
    }



});

function openWindow(id) {
    const windowElement = document.getElementById(id);
    windowElement.style.visibility = 'visible';
    windowElement.style.display = 'flex';
}

function closeWindow(id) {
    const windowElement = document.getElementById(id);
    windowElement.style.visibility = 'hidden';

}
