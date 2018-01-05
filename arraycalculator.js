/*global $*/
// $(document).ready(function(){
// console.log("linked");


var displayHere = "";
// displayHere = $("#displayHere");
displayHere = document.getElementById("displayHere");
var firstNum= '';
var secondNum = '';
var operator ='';
var runningTotal='';



function addNumber(abby) {
    console.log("click");
    secondNum += abby;

displayHere.value = secondNum;
console.log(displayHere);
}


function operation(value) {
    console.log("click op");
    if (firstNum !== "") {
        console.log("equals()");
        equals();
        operator = value;
      
    }
    else {
        console.log("else");
        operator = value;
        firstNum = secondNum;
        secondNum = "";
        displayHere.value = firstNum;
    }
    console.log(firstNum, operator);
}


// $("#operator").click(function() {
// secondNum += $(this).text();	
// secondNum = firstNum;
// firstNum = '';
// display.text("0");
// });


// // function toDisplay(val) {
// // firstNum = document.getElementById("displayHere").value += val;

// // }

function equals() {
//operations
console.log("equals");

if (operator === "+") {
runningTotal = parseFloat(firstNum, 10) + parseFloat(secondNum, 10);
}

if (operator === "-") {
runningTotal = parseFloat(firstNum, 10) - parseFloat(secondNum, 10);

}

if (operator === "*") {
runningTotal = parseFloat(firstNum, 10) * parseFloat(secondNum, 10);

}

if (operator === "/") {
runningTotal = parseFloat(firstNum, 10) / parseFloat(secondNum, 10);
}

firstNum = runningTotal;
    secondNum = "";
    operator = "";
    displayHere.value = runningTotal;
}

// function clearLast() {
// 	display = display.slice(0, - 1);
// 	//   display = display.replace(/.$/,'');
// 	//   $("displayHere").html(display);
// 	document.getElementById("displayHere").value = display;
// 	//using value rather than innerHTML fixed
// }

// function allClear() {
// 	document.getElementById("displayHere").value =[];
// 	$("#total").html("");
// }
// });

