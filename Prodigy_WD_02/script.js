let hr = 0;
let min = 0;
let sec = 0;
let millisec = 0;
let timer = false;
let lapCount = 1;

function buttonStart() {
  timer = true;
  stopwatch();
}

function buttonStop() {
  timer = false;
}

function buttonRestart() {
  timer = false;
  millisec = 0;
  sec = 0;
  min = 0;
  hr = 0;
  lapCount = 1;

  updateDisplay();
  clearLapList();
}

function buttonLap() {
  if (timer) {
    const lapTime =
      formatTimeComponent(hr) +
      ":" +
      formatTimeComponent(min) +
      ":" +
      formatTimeComponent(sec) +
      "." +
      formatTimeComponent(millisec);

    appendToLapList(`Lap ${lapCount}: ${lapTime}`);
    lapCount++;
  }
}

function stopwatch() {
  millisec = millisec + 1;

  if (timer == true) {
    if (millisec == 100) {
      millisec = 0;
      sec = sec + 1;
    }

    if (sec == 60) {
      sec = 0;
      min = min + 1;
    }

    if (min == 60) {
      min = 0;
      hr = hr + 1;
    }

    updateDisplay();

    setTimeout(stopwatch, 10);
  }
}

function updateDisplay() {
  const millisecString = formatTimeComponent(millisec);
  const secString = formatTimeComponent(sec);
  const minString = formatTimeComponent(min);
  const hrString = formatTimeComponent(hr);

  document.getElementById("millisec").innerHTML = millisecString;
  document.getElementById("sec").innerHTML = secString;
  document.getElementById("min").innerHTML = minString;
  document.getElementById("hr").innerHTML = hrString;
}

function formatTimeComponent(time) {
  return time < 10 ? "0" + time : time;
}

function appendToLapList(text) {
  const lapList = document.getElementById("lapList");
  const listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.textContent = text;
  lapList.appendChild(listItem);
}

function clearLapList() {
  const lapList = document.getElementById("lapList");
  lapList.innerHTML = "";
}
