import { startTimer } from "../helper/startTimer.js";
import { pauseTimer } from "../helper/pauseTimer.js";
import { resetTimer } from "../helper/resetTimer.js";

export const displayTimer = () => {
  const rootDiv = document.getElementById("root");
  rootDiv.innerHTML = "";
  const timerDiv = document.createElement("div");
  timerDiv.classList.add("display");
  const hourPara = document.createElement("p");
  const minPara = document.createElement("p");
  const secPara = document.createElement("p");
  const spanHour = document.createElement("span");
  spanHour.innerText = "h";
  const spanMin = document.createElement("span");
  spanMin.innerText = "m";
  const spanSec = document.createElement("span");
  spanSec.innerText = "S";
  hourPara.innerText = 0;
  hourPara.id = "hour";
  minPara.innerText = 0;
  minPara.id = "min";
  secPara.innerText = 0;
  secPara.id = "sec";
  timerDiv.appendChild(hourPara);
  timerDiv.appendChild(spanHour);
  timerDiv.appendChild(minPara);
  timerDiv.appendChild(spanMin);
  timerDiv.appendChild(secPara);
  timerDiv.appendChild(spanSec);
  const timerBtnDiv = document.createElement("div");
  timerBtnDiv.classList.add("stop-watch-handler");
  const startImg = document.createElement("img");
  startImg.src =
    "https://raw.githubusercontent.com/AdityaRawEngg/Timer-Application/main/resource/image/play.png";
  startImg.alt = "Start Button";
  startImg.id = "start";
  startImg.addEventListener("click", (event) => {
    event.preventDefault();
    startTimer();
  });
  const pauseImg = document.createElement("img");
  pauseImg.id = "pause";
  pauseImg.src =
    "https://raw.githubusercontent.com/AdityaRawEngg/Timer-Application/main/resource/image/pause.png";
  pauseImg.alt = "Pause Button";
  pauseImg.classList.add("hide");
  pauseImg.addEventListener("click", (event) => {
    event.preventDefault();
    pauseTimer();
  });
  const resetImg = document.createElement("img");
  resetImg.id = "reset";
  resetImg.src =
    "https://raw.githubusercontent.com/AdityaRawEngg/Timer-Application/main/resource/image/stop-button.png";
  resetImg.alt = "reset Button";
  resetImg.classList.add("hide");
  resetImg.addEventListener("click", (event) => {
    event.preventDefault();
    resetTimer();
  });
  timerBtnDiv.appendChild(startImg);
  timerBtnDiv.appendChild(pauseImg);
  timerBtnDiv.appendChild(resetImg);
  rootDiv.appendChild(timerDiv);
  rootDiv.appendChild(timerBtnDiv);
};
