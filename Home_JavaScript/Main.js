function Main() {
    const items = createItems(); // Array of all items

    const desktopTable = document.getElementById("desktop-table");

    // Step 1: Populate the desktop table with a 5x8 grid
    let currentRow = desktopTable.insertRow(); // Start with the first row
    let cellsInCurrentRow = 0;
    const maxRows = 5;
    const maxCellsPerRow = 8; // 8 cells per row

    items.forEach((item, index) => {
        if (cellsInCurrentRow >= maxCellsPerRow) {
            // Create a new row if the current row is full and the row limit is not exceeded
            if (desktopTable.rows.length < maxRows) {
                currentRow = desktopTable.insertRow();
                cellsInCurrentRow = 0;
            } 
            else {
                console.warn("Grid limit reached. Additional items cannot be added.");
                return; // Exit if the grid is full
            }
        }

        // Create a new cell in the current row and add the icon
        const cell = currentRow.insertCell();
        cell.appendChild(new Icon(item, index).element_icon);

        cellsInCurrentRow++;
    });

    // Step 2: Create and append Window objects for relevant items
    const windowPane = document.getElementById("pane");

    items.forEach((item, index) => {
        if (item instanceof App || item instanceof Dir) {
            const window = new Window(item, index);
            windowPane.appendChild(window.element_window);
        }
    });
}



document.addEventListener("DOMContentLoaded", Main);