/* global $*/
//$(document).ready(function(){
var runningTotal = "";
var display = document.getElementById("displayHere");
var operator = "";
var storedNum= "";
var currentNum = '';

function toDisplay(val) {
// display.push(val);
storedNum = document.getElementById("displayHere").value += val;

}

function equals() {


//operations

if (operator === "+") {
runningTotal = parseFloat(storedNum) + parseFloat(currentNum);
return runningTotal;
}

if (operator === "-") {
runningTotal = parseFloat(storedNum) - parseFloat(currentNum);
return runningTotal;
}

if (operator === "*") {
runningTotal = parseFloat(storedNum) * parseFloat(currentNum);
return runningTotal;
}

if (operator === "/") {
runningTotal = parseFloat(storedNum) / parseFloat(currentNum);
return runningTotal;
}

}

function clearLast() {
	display = display.slice(0, - 1);
	//   display = display.replace(/.$/,'');
	//   $("displayHere").html(display);
	document.getElementById("displayHere").value = display;
	//using value rather than innerHTML fixed
}

function allClear() {
	document.getElementById("displayHere").value =[];
	$("#total").html("");
}


