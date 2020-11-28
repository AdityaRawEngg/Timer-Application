export let timerID;

export const startTimer = () => {
  document.getElementById("start").classList.add("hide");
  document.getElementById("pause").classList.remove("hide");
  document.getElementById("reset").classList.remove("hide");
  let hour = document.getElementById("hour").innerHTML;
  let min = document.getElementById("min").innerHTML;
  let sec = document.getElementById("sec").innerHTML;
  const timerDiv = document.getElementsByClassName("stop-watch");
  timerID = setInterval(() => {
    sec++;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    if (sec == 60) {
      sec = 0;
      min++;
    }
    if (min == 60) {
      min = 0;
      hour++;
    }
  }, 1000);
};
