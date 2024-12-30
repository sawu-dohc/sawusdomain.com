function minimizeWindow(windowId) {
    console.log( windowId + 'Minimize button clicked')
    const windowDiv = document.getElementById(`${windowId}_window`);
    if (windowDiv) {

    }
}
function maximizeWindow(windowId) {
    console.log( windowId + 'Maximize button clicked')
    const windowDiv = document.getElementById(`${windowId}_window`);
    if (windowDiv) {


    }
}
function closeWindow(windowId) {
    const windowDiv = document.getElementById(`${windowId}_Window`);
    if (windowDiv) {
        windowDiv.style.display = "none";
    }
}
