const seconds = document.querySelector(".stopwatch__display-second");
const minutes = document.querySelector(".stopwatch__display-minute");
const hours = document.querySelector(".stopwatch__display-hour");
let secondCounter = 0;
let minuteCounter = 0;
let hourCounter = 0;

function clearClock() {
  // document.querySelector(".stopwatch__display-second").innerHTML = "00";
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  hours.innerHTML = "00";
}

function startTimer() {
  setInterval(() => {
    if (secondCounter < 60) {
      if (secondCounter < 10) {
        seconds.innerHTML = "0" + secondCounter;
        secondCounter++;
      } else if (secondCounter < 60) {
        seconds.innerHTML = secondCounter;
        secondCounter++;
      }
    } else {
      secondCounter = 0;
    }
  }, 1000);
}

// const startTimer = setInterval(() => {
// secondCounter++;
// if (secondCounter < 60) {
//   if (secondCounter < 10) {
//     seconds.innerHTML = "0" + secondCounter;
//   } else if (secondCounter < 60) {
//     seconds.innerHTML = secondCounter;
//   }
// } else {
//   secondCounter = 0;
// }
// }, 1000);

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("stopwatch__start")) {
    /// start button code
    startTimer();
  } else if (e.target.classList.contains("stopwatch__stop")) {
    // stop cutton code
    // stopClock();
  } else if (e.target.classList.contains("stopwatch__reset")) {
    //reset button code
    clearClock();
  }
});
