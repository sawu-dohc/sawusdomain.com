function updateClock() {
    
    const date_object = new Date();

    let hours_int = date_object.getHours();
    let minutes_int = date_object.getMinutes();
    let seconds_int = date_object.getSeconds();

    // Determine AM or PM
    let ampm_str = 'AM';
    if (hours_int >= 12) {
        ampm_str = 'PM';
    }

    // Convert hours to 12-hour format
    if (hours_int > 12) {
        hours_int -= 12;
    } else if (hours_int === 0) {
        hours_int = 12;
    }

    // Convert hours, minutes, and seconds to strings with leading zeros if needed
    const hours_str = hours_int < 10 ? '0' + hours_int : hours_int.toString();
    const minutes_str = minutes_int < 10 ? '0' + minutes_int : minutes_int.toString();
    const seconds_str = seconds_int < 10 ? '0' + seconds_int : seconds_int.toString();

    // Construct the clock time string
    const clock_time_str = `${hours_str}:${minutes_str}:${seconds_str} ${ampm_str}`;

    // Display the clock time
    document.getElementById('clock-time').innerText = clock_time_str;
}

// Initialize the clock and set up automatic updates
function initializeClock() {

    updateClock(); // Update immediately

    setInterval(updateClock, 1000); // Update every second

}
