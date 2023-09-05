const slightlyStressedPeriod = 10 * 1000;
const reallyStressedPeriod = slightlyStressedPeriod + 5 * 1000;
const timerIncrement = 10;

let timer = 0;
let chimesRang = 0;
let interval;

const renderTimer = () => {
  document.getElementById("timer").innerHTML = timer;
};

const stopTimer = () => {
  clearInterval(interval);

  timer = 0;
  chimesRang = 0;
  interval = null;

  renderTimer();
};

const incrementTimer = () => {
  if (timer == reallyStressedPeriod) {
    stopTimer();
    return;
  }

  timer += timerIncrement;

  renderTimer();
};

const playSound = () => {
  const minuteCount = timer / (1 * 1000);
  if (chimesRang >= minuteCount) return;

  // play sound => depending on where in slightly stressed it is.
  // increment chimes Rang
};

const handleIncrement = () => {
  incrementTimer();
  playSound();
};

const startTimer = () => {
  document.getElementById("state").innerHTML =
    timer !== 0 ? "timer running" : "timer stopped";

  interval = setInterval(handleIncrement, timerIncrement);
};

document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);
