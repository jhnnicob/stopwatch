 
let milli = "00";
let sec = "00";
let min = "00";
let hour = "00";
let interval;

let startButton = "";
let stopButton = "";
let resetButton = "";

function start() {
    interval = setInterval(calculateTime, 10);
    startButton = document.querySelector(".start");
    startButton.classList.add("active");

    stopButton && stopButton.classList.remove("active");
    stopButton && resetButton.classList.remove("active");

    
    resetButton.disabled = false;
    stopButton.disabled = false;
    startButton.disabled = true;
}

function stop() {
    clearInterval(interval);

    stopButton = document.querySelector(".stop");
    stopButton.classList.add("active");

    startButton && startButton.classList.remove("active");
    resetButton && resetButton.classList.remove("active");

    stopButton.disabled = true;
    startButton.disabled = false;
    resetButton.disabled = false;
}

function reset() {
    milli = "00";
    sec = "00";
    min = "00";
    hour = "00";
    document.querySelector(".stopwatch__time")
        .innerHTML = hour + ":" + min + ":" + sec + ":" + milli;
        
    resetButton = document.querySelector(".reset");
    resetButton.classList.add("active");

    startButton.classList.remove("active");
    stopButton.classList.remove("active");

    resetButton.disabled = true;
    stopButton.disabled = false;
    startButton.disabled = false;
}

function calculateTime() {
    
    milli++

    if(milli > 99) {
        sec++;
        milli = "00";

        if(sec <= 9) {
            sec = "0" + sec; //concatinate or combine zero string if sec <= 9
        }
    }

    if(sec > 59) {
        min++;
        sec = "00";
    }

    if(min > 59) {
        hour++;
        min = "00";
    }


    document.querySelector(".stopwatch__time")
        .innerHTML = hour + ":" + min + ":" + sec + ":" + milli;
}




