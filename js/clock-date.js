function showTime(){                         //Clock
	var date = new Date();
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59
	var s = date.getSeconds(); // 0 - 59
	var session = "AM";
	if(h == 0){
		h = 12;
	}
	if(h > 12){
		h = h - 12;
		session = "PM";
	}
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;
	var time = h + ":" + m + ":" + s + " " + session;
	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay").textContent = time;
	setTimeout(showTime, 1000);
	}
showTime();

function makeArray() {                                //Date
	for (i = 0; i<makeArray.arguments.length; i++)
	this[i + 1] = makeArray.arguments[i];
}
var months = new makeArray('January','Fabruary','March','April','May',
'June','July','August','September','October','November','December');
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
var time = ( months[month]+ ", " +day + ",  " + year);
document.getElementById("MyDateDisplay").innerText = time;
document.getElementById("MyDateDisplay").innerContent = time;
makeArray();

var txt="hmmm :D >>";  //Title
var speed=600;
var refresh=null;
function action() {
	document.title=txt;
	txt=txt.substring(1,txt.length)+txt.charAt(0);
	refresh=setTimeout("action()",speed);}
action();

function confirm_alert() {    //Attention
	return confirm('Opss.... :*')
}
confirm();
