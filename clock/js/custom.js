window.addEventListener('load', startTime);

//PART 1
function startTime(){
  var buenosAires = document.getElementById("buenos-aires");
  var barcelona = document.getElementById("barcelona");
  var sydney = document.getElementById("sydney");

  buenosAires.innerHTML = new Date().toLocaleTimeString("en-US", {timeZone: "America/Buenos_Aires"});
  barcelona.innerHTML = new Date().toLocaleTimeString("en-US", {timeZone: "Europe/Madrid"});
  sydney.innerHTML = new Date().toLocaleTimeString("en-US", {timeZone: "Australia/Sydney"});

  var t = setTimeout(startTime, 500);
}

//PART 2
