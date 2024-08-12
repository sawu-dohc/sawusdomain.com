class Timer {
    constructor(mins, secs) {
        this.mins = mins;
        this.secs = secs;
        this.timerRunning = false;
        this.timerID = null;
    }

    tick() {
        this.secs++;
        if (this.secs >= 60) {
            this.secs = 0;
            this.mins++;
        }
        document.getElementById('minutes').textContent = this.mins;
        document.getElementById('seconds').textContent = this.secs;
    }

    start() {
        if (this.timerRunning == false) {

            this.timerID = setInterval( () => this.tick(), 1000 ); //

            this.timerRunning = true;

            document.getElementById('controlButton').textContent = 'Pause';

        }
    }

    stop() {
        if (this.timerRunning) {

            clearInterval(this.timerID);

            this.timerID = null;

            this.timerRunning = false;

            document.getElementById('controlButton').textContent = 'Run';

        }
    }

    // this method toggles the timer between running and stopped.
    toggle() {
        if (this.timerRunning) {
            this.stop();
        }
        else {
            this.start();
        }
    }



}





let myTimer = new Timer(0, 0);

document.getElementById('controlButton').addEventListener('click', function() {
    myTimer.toggle();
});

// Initialize display
myTimer.updateDisplay();