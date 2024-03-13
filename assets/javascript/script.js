let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startPause() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startPause").innerText = "Resume";
    } else {
        timer = setInterval(updateTime, 10); // Update every 10 milliseconds
        document.getElementById("startPause").innerText = "Pause";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("startPause").innerText = "Start";
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    const lapTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${milliseconds}`;
    const lapElement = document.createElement("div");
    lapElement.innerText = `Lap ${document.getElementById("laps").childElementCount + 1}: ${lapTime}`;
    document.getElementById("laps").appendChild(lapElement);
}

function updateTime() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${milliseconds}`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

reset(); // Initialize display
