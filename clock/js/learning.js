var now = new Date();
var milliseconds = new Date(100000000000); //from Jan 1, 1970
var dateString = new Date("October 13, 2014 11:13:00");
var total = new Date(99, 5, 24, 11, 33, 30, 0); //year, month, day, hours, minutes, seconds, milliseconds
console.log('milliseconds: ' + milliseconds);
console.log('dateString: ' + dateString);
console.log('total: ' + total);


function setDate() {
  var seconds = now.getSeconds();
}

setInterval(setDate, 1000);

//METHODS

//.toString() --> converted to a string
//document.getElementById("newDate").innerHTML = new Date();
//document.getElementById("newDateToString").innerHTML = new Date().toString();

//.toUTCString()
console.log('toUTCString(): ' + new Date().toUTCString());

//.toDateString() method converts a date to a more readable format
console.log('toDateString(): ' + new Date().toDateString());

//.getHours()
console.log('getHours(): ' + new Date().getHours());

//.setHours()
console.log('setHours(): ' + new Date().setHours(3));


/*
new Date().toLocaleString("en-US", {timeZone: "America/New_York"})

var time = new Date();
console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

var d = new Date();
var n = d.toLocaleTimeString();

date1 = new Date ();
date1.setDate(-1);
date1.setMonth(-1);*/
