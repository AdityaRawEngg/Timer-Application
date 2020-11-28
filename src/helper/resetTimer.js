import { timerID } from "./startTimer.js";

export const resetTimer = () => {
  //   resetbtn.classList.add("hide");
  document.getElementById("start").classList.remove("hide");
  document.getElementById("pause").classList.add("hide");
  document.getElementById("reset").classList.add("hide");
  clearInterval(timerID);
  document.getElementById("hour").innerHTML = 0;
  document.getElementById("min").innerHTML = 0;
  document.getElementById("sec").innerHTML = 0;
};
