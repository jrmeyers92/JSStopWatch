const display = document.querySelector(".display");
const startButton = document.querySelector(".stopwatch__start");
const resetButton = document.querySelector(".stopwatch__reset");
const stopButton = document.querySelector(".stopwatch__stop");
let secondCounter = 0;
let minuteCounter = 0;
let hourCounter = 0;

// function to stop stop watch and clear counter
function clearDisplay() {
  display.innerHTML = "00:00:00";
  secondCounter = 0;
  minuteCounter = 0;
  hourCounter = 0;
}

// function that sets timeout and calls add function (keeps track out the counter variables and updates the display)
function timer() {
  t = setTimeout((add) => {}, 1000);
}

// function that updates the counter variables and updates display. Calls the timer function that waits a second and calls this one again
function add() {
  if (secondCounter < 60) {
    secondCounter++;
  } else {
    secondCounter = 0;
    if (minuteCounter < 59) {
      minuteCounter++;
    } else {
      minuteCounter = 0;
      hourCounter++;
    }
  }
  display.textContent =
    (hourCounter ? (hourCounter > 9 ? hourCounter : "0" + hourCounter) : "00") +
    ":" +
    (minuteCounter
      ? minuteCounter > 9
        ? minuteCounter
        : "0" + minuteCounter
      : "00") +
    ":" +
    (secondCounter
      ? secondCounter > 9
        ? secondCounter
        : "0" + secondCounter
      : "00");

  timer();
}

function startClock() {
  i = setInterval(() => {
    add();
    // startClock();
  }, 1000);
}

function stopClock() {
  clearTimeout(t);
  clearInterval(i);
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("stopwatch__start")) {
    startClock();
  } else if (e.target.classList.contains("stopwatch__reset")) {
    clearDisplay();
  } else if (e.target.classList.contains("stopwatch__stop")) {
    stopClock();
  }
});
