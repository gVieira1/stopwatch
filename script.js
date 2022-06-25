window.onload = function() {

    var seconds = 00
    var minutes = 00
    var appendSeconds = document.getElementById("seconds")
    var appendMinutes = document.getElementById("minutes")
    var buttonStart = document.getElementById("start")
    var buttonStop = document.getElementById("stop")
    var buttonReset = document.getElementById("reset")
    var Interval ;

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
   }
  
   buttonReset.onclick = function() {
    clearInterval(Interval);
   minutes = "00";
    seconds = "00";
   appendMinutes.innerHTML = minutes;
     appendSeconds.innerHTML = seconds;
 }

 function startTimer() {
    minutes++;

    if (minutes <= 9) {
        appendMinutes.innerHTML = "0" + minutes;
    }

    if (minutes > 9) {
        appendMinutes.innerHTML = minutes
    }

    if (minutes > 99) {
        console.log("Seconds")
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        minutes = 0;
        appendMinutes.innerHTML = "0" + 0
    }

    if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }

 }

}