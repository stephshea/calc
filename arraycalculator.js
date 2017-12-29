/* global $*/
//$(document).ready(function(){
var total = 0;
var display = [];
var a;
var b;
switch (operator) {
          case "add":
            total+= (a + b);
            break;
          case "div":
            alert(firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber));
            break;
          case "mod":
            alert(firstNumber + " % " + secondNumber + " = " + (firstNumber % secondNumber));
            break;
          case "multiply":
            alert(firstNumber + " * " + secondNumber + " = " + (firstNumber * secondNumber));
            break;
          case "subtract":
            alert(firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber));
            break;
        }// function updateDisplay() {
	

function toDisplay(val) {

	display = document.getElementById("displayHere").value += val;
		var a = val;
}

switch(equals) {
          case "add":
            total += a + b;
            break;
          case "div":
            alert(firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber));
            break;
          case "multiply":
            alert(firstNumber + " * " + secondNumber + " = " + (firstNumber * secondNumber));
            break;
          case "subtract":
            alert(firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber));
            break;
        }


// function multiply() {
// event	
// // for(var i = 0; i < display.length; i++) {
// // var result = (i * i);
// console.log(display.split());
// }
// total+= result;   
// total = $("#total").html(display);



// 	return total;
// // display = document.getElementById("displayHere").value += val;
// }

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

// function calculate(num1, num2) {
	
// 	if (add clicked) {
// 		num1 + num2);
// 	}
	
// 	else if (subtract clicked) {
// 		num1 - num2);
// 	}
// }

// function equal() {
//      //calculations current using eval, will remove eval and add own functions
// 	total = $("#total").html(eval(display));
// 	return total;
    
// }