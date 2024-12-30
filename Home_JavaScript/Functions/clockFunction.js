function updateClock() {
    const date_object = new Date();

    let hours = date_object.getHours();
    let minutes = date_object.getMinutes();
    let seconds = date_object.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';

    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }

    const hoursStr = hours < 10 ? '0' + hours : hours.toString();
    const minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
    const secondsStr = seconds < 10 ? '0' + seconds : seconds.toString();

    const clockTime = `${hoursStr}:${minutesStr}:${secondsStr} ${ampm}`;
    document.getElementById('clock-time').innerText = clockTime;
}

function initializeClock() {
    updateClock(); // Initial clock update
    setInterval(updateClock, 1000); // Update every second
}

// Automatically run initializeClock when the page loads
document.addEventListener('DOMContentLoaded', initializeClock);
