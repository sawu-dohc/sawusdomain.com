document.addEventListener('DOMContentLoaded', function() {

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
        } 
        else if (hours_int === 0) {
            hours_int = 12;
        }

        // Convert hours, minutes, and seconds to strings with leading zeros if needed
        let hours_str = hours_int.toString();
        let minutes_str = minutes_int.toString();
        let seconds_str = seconds_int.toString();

        if (hours_int < 10) {
            hours_str = '0' + hours_str;
        }

        if (minutes_int < 10) {
            minutes_str = '0' + minutes_str;
        }

        if (seconds_int < 10) {
            seconds_str = '0' + seconds_str;
        }

        // Construct the clock time string
        const clock_time_str = `${hours_str}:${minutes_str}:${seconds_str} ${ampm_str}`;

        // Display the clock time
        document.getElementById('clock-time').innerText = clock_time_str;
    }

    // Update the clock every second (1000 milliseconds)
    setInterval(updateClock, 1000);

    // Initialize the clock immediately
    updateClock();
});
