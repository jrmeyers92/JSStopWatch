const module = (function () {
    //variables 
    const display = document.querySelector(".display");
    let secondCounter = 0;
    let minuteCounter = 0;
    let hourCounter = 0;
    let circle = document.querySelector(".circle");
    let strokeArray1 = 0;
    let strokeArray2 = 188.49;
    let t;
    let j;


    // function that sets timout, calls function to manage timer variables, updates display, and calls itself

    function startClock() {
        t = setInterval(() => {
            add();
            updateDisplay();
        }, 1000);
    }
 

    // funtion to clear interval 
    function clearClockInterval(){
        clearInterval(t);
        clearInterval(j)
    }

    // function to manaage counter variables
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
    }

    // function to updaate display
   function updateDisplay(){
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
   }

   // function to clear display (set display back to 00:00:00)
   function clearDisplay() {
    display.innerHTML = "00:00:00";
    secondCounter = 0;
    minuteCounter = 0;
    hourCounter = 0;
  }

  // function to manage svg circle counters
  function increaseStrokCounters() {
    if (strokeArray1 < 188.49) {
        strokeArray1 += 3.1415;
        circle.style.strokeDasharray = strokeArray1 + " " + strokeArray2;
      } else {
        strokeArray1 = 0;
      }
  }
  


  // function to update svg 

  function updateSVGPercentage(SVGClass){
    SVGClass.style.strokeDasharray = strokeArray1 + " " + strokeArray2;
  }

  // function for svg timer {

  function startSVG() {
      j = setInterval(() => {
          increaseStrokCounters();
          updateSVGPercentage(circle);
      }, 1000);
  }

  // function to erease SVG

  function resetSVG(SVGClass){
    strokeArray1 = 0;
    strokeArray2 = 188.49;
    updateSVGPercentage(circle);
  }

   return {

    //    method used when start clock button clicked  
       startClock: function(){
        startClock();
        startSVG();
       },

    //    method used when stop clock button clicked 

       stopClock: function(){
        clearClockInterval();
       },

    //    method used when reset button clicked 
       clearDisplay: function(){
           clearDisplay();
           resetSVG();
       }
    
   }
   

    
})();


const startButton = document.querySelector(".stopwatch__start");
const resetButton = document.querySelector(".stopwatch__reset");
const stopButton = document.querySelector(".stopwatch__stop");

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("stopwatch__start")) {
      module.startClock();
    } else if (e.target.classList.contains("stopwatch__reset")) {
      module.clearDisplay();
    } else if (e.target.classList.contains("stopwatch__stop")) {
      module.stopClock();
    }
  });