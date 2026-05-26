//your JS code here. If required.
const line = document.getElementById("line");
let deg = 0;

setInterval( function () {

	line.style.transform = `rotate(${deg}deg)`;
	deg +=2;
	
	
},20)