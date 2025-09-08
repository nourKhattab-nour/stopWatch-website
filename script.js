let mins = 0;
let sec = 0;
let tens = 0;
let interval;

let appendMin = document.querySelector(".min");
let appendSec = document.querySelector(".sec");
let appendTens = document.querySelector(".tens");

let BtnStart = document.querySelector(".btn-start");
let BtnStop = document.querySelector(".btn-pause");
let BtnReset = document.querySelector(".btn-reset");
let BtnLap = document.querySelector(".btn-lap");

let lapsContainer = document.querySelector(".lap-times");
let lapCount = 0;

const setTimer = () => {
  tens++;
  if (tens <= 9) appendTens.innerHTML = "0" + tens;
  else appendTens.innerHTML = tens;

  if (tens > 99) {
    sec++;
    appendSec.innerHTML = sec <= 9 ? "0" + sec : sec;
    tens = 0;
    appendTens.innerHTML = "00";
  }

  if (sec > 59) {
    mins++;
    appendMin.innerHTML = mins <= 9 ? "0" + mins : mins;
    sec = 0;
    appendSec.innerHTML = "00";
  }
};

// Start button
BtnStart.onclick = () => {
  clearInterval(interval);
  interval = setInterval(setTimer, 10);
};

// Pause button
BtnStop.onclick = () => {
  clearInterval(interval);
};

// Reset button
BtnReset.onclick = () => {
  clearInterval(interval);
  tens = 0;
  sec = 0;
  mins = 0;
  appendTens.innerHTML = "00";
  appendSec.innerHTML = "00";
  appendMin.innerHTML = "00";
  lapsContainer.innerHTML = ""; // clear laps
  lapCount = 0;
};

// Lap button
BtnLap.onclick = () => {
  lapCount++;
  const lapTime = `${appendMin.innerHTML}:${appendSec.innerHTML}.${appendTens.innerHTML}`;

  let lapRow = document.createElement("div");
  lapRow.classList.add("lap-row");
  lapRow.innerHTML = `
    <span class="lap-number">Lap ${lapCount}</span>
    <span class="lap-time">${lapTime}</span>
  `;

  lapsContainer.prepend(lapRow);
};
