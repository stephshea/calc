/* global $*/
//$(document).ready(function(){
var total = 0;
var display = "";

// function updateDisplay() {
	
// }

//https://watchandcode.com/courses/60264/lectures/1027554 V8
//var addTodoTextInput = document.getElementById('addTodoTextInput');
//todoList.addTodo(addTodoTextInput.value);
//addTodoTextInout.value = '';
//https://watchandcode.com/courses/60264/lectures/1027557 V8
function toDisplay(val) {
	display = document.getElementById("displayHere").value += val;
}

// function multiply(a, b) {
// var result = a * b;
// return result;
// $("#total").html(eval(display));
// 	return total;
// // display = document.getElementById("displayHere").value += val;
// }



function clearLast() {
	display = display.substring(0, display.length - 1);
	//   display = display.replace(/.$/,'');
	//   $("displayHere").html(display);
	document.getElementById("displayHere").value = display;
	//using value rather than innerHTML fixed
}
// debugger;
function allClear() {
	document.getElementById("displayHere").value = "";
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

function equal() {
     //calculations current using eval, will remove eval and add own functions
	$("#total").html(eval(display));
	return total;
}
//  for (var i = 0; i < display.length; i++) {
// total = total + parseInt(display[i]);
// console.log(total);
//     }
//     return total;
//     document.getElementById('total').innerHTML = total;
//     console.log(total);
//     })
// });  
//     $( "button.equal" ).on( "click", function () {
//     for (var i = 0; i <display.length; i++) {
//     total = total + parseInt(display[i], 10);
//     console.log(display);
//   return total;
//     }
//     document.getElementById('total').innerHTML = total;
//     console.log(total);
//     });
// $( "button.zero" ).on( "click", function() {
//         console.log(0);
//     });
// $( "button.add" ).on( "click", function() {
// display = document.getElementById("displayHere").innerHTML += "+";