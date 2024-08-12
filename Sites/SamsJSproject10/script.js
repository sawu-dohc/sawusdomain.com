document.addEventListener('DOMContentLoaded', (event) => {

    const fixedPositions = [
        { left: '200px', top: '650px' }, 
        { left: '400px', top: '650px' }, 
        { left: '600px', top: '650px' }, 
        { left: '200px', top: '850px' }, 
        { left: '400px', top: '850px' }, 
        { left: '600px', top: '850px' }  
    ];
    // select all elements that should be draggable:
    const draggables = document.querySelectorAll('.draggable');


    draggables.forEach((draggable, index) => {

        const position = fixedPositions[index];

        // apply the fixed position to the element:
        draggable.style.position = 'absolute'; // necessary for positioning
        draggable.style.left = position.left;
        draggable.style.top = position.top;
    });


    // function to handle the entire process of making an element draggable
function makeElementDraggable(element) {
    // this function will be called whenever the user starts dragging the element
    function onDragStart(event) {
        // prevent the default browser behavior (such as selecting text) from happening
        event.preventDefault();

        // get the position of the mouse relative to the top-left corner of the draggable element
        let offsetX = event.clientX - element.getBoundingClientRect().left;
        let offsetY = event.clientY - element.getBoundingClientRect().top;

        // function to be called whenever the mouse is moved
        function onDragMove(moveEvent) {
            // calculate the new position of the element by taking into account
            // 1. the current mouse position (moveEvent.clientX, moveEvent.clientY)
            // 2. the initial offsets (offsetX, offsetY)
            element.style.left = (moveEvent.clientX - offsetX) + 'px';
            element.style.top = (moveEvent.clientY - offsetY) + 'px';
        }

        // function to be called when the mouse button is released, ending the drag
        function onDragEnd() {
            // stop listening for mouse movement and mouse button release
            window.removeEventListener('mousemove', onDragMove);
            window.removeEventListener('mouseup', onDragEnd);
        }

        // start listening for mouse movement and mouse button release
        window.addEventListener('mousemove', onDragMove);
        window.addEventListener('mouseup', onDragEnd);
    }

    // make the element respond to mouse down events (start of drag)
    element.addEventListener('mousedown', onDragStart);
}

// select all elements that should be draggable and apply the drag functionality to them
document.querySelectorAll('.draggable').forEach(makeElementDraggable);

});
