let timer = document.getElementById("timer");
var sec = 0;
var min = 0;
let milliseconds = 0;

function start() {
  milliseconds = milliseconds + 1;
  let secStr = sec;
  let minStr = min;
  let milliStr = milliseconds;
  if (milliseconds == 100) {
    sec = sec + 1;
    milliseconds = 0;
  }
  if (sec == 60) {
    min = min + 1;
    sec = 0;
  }
  if (milliseconds < 10) {
    milliStr = "0" + milliStr;
  }
  if (sec < 10) {
    secStr = "0" + secStr;
  }
  if (min < 10) {
    minStr = "0" + minStr;
  }
  timer.innerText = `${minStr}:${secStr}:${milliStr}`;
}
function run() {
  myinterval = setInterval(start, 10);
}

function reset() {
  clearInterval(myinterval);
  timer.innerText = `00:00:00`;
}

function stop() {
  clearInterval(myinterval);
}
