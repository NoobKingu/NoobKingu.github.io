function contrastView() {
	let Clist = document.querySelectorAll("*");
	for (let i=0; i<Clist.length; i++) {
		Clist[i].style.background = "black";
		Clist[i].style.color = "#c6ebff";
	}
}

function defaultView() {
	let Dlist = document.querySelectorAll("*");
	for (let i=0; i<Dlist.length; i++) {
		Dlist[i].style.background = null;
		Dlist[i].style.color = null;
	}
}

function vividView() {
	let Vlist = document.querySelectorAll("*");
	for (let i=0; i<Vlist.length; i++) {
		Vlist[i].style.background = null;
		Vlist[i].style.color = null;
	}
	
	Vlist = document.querySelectorAll(".general, .captext, body, html"); //cream
	for (let i=0; i<Vlist.length; i++) {
		Vlist[i].style.background = "#f7f3e3";
	}
	Vlist = document.querySelectorAll("a, .navlink, .captext"); // silver
	for (let i=0; i<Vlist.length; i++) {
		Vlist[i].style.color = "#B3B6B7";
	}
	Vlist = document.querySelectorAll("p, li, input, textarea,  .nav"); //brown
	for (let i=0; i<Vlist.length; i++) {
		Vlist[i].style.color = "#2B2118";
	}
	Vlist = document.querySelectorAll(".extlinks, h2, h1"); //red
	for (let i=0; i<Vlist.length; i++) {
		Vlist[i].style.color = "#6F1A07";
	}
	Vlist = document.querySelectorAll("input, textarea, .navcur"); //light brown
	for (let i=0; i<Vlist.length; i++) {
		Vlist[i].style.background = "#AF9164";
	}
	Vlist = document.querySelectorAll(".nav, .captext"); //brown
	for (let i=0; i<Vlist.length; i++) {
		Vlist[i].style.background = "#2B2118";
	}
}


function submitFunc() {
	let firstName = document.getElementById("firstname").value.trim();
	let lastName = document.getElementById("lastname").value.trim();
	let message = document.getElementById("message").value.trim();
	
	if (firstName=="" || lastName=="" || message=="") {
		alert("ERROR: all fields are required!");
	}
	else {
		alert("success");
		document.getElementById("firstname").value = "";
		document.getElementById("lastname").value = "";
		document.getElementById("message").value = "";
	}
}

const DButton = document.getElementById("default");
const HButton = document.getElementById("highcontrast");
const IButton = document.getElementById("invert");

DButton.addEventListener("click", defaultView);
HButton.addEventListener("click", contrastView);
IButton.addEventListener("click", vividView);

