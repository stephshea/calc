/*global $*/
// $(document).ready(function(){
// console.log("linked");


var displayHere = "";
// displayHere = $("#displayHere");
displayHere = document.getElementById("displayHere");
var storedNum= '';
var currentNum = '';
var operator ='';
var runningTotal='';



function addNumber(num) {
    console.log("clicked AddNumber. currentNum: " + currentNum + 'num:' + num);
    currentNum += num;

displayHere.value = currentNum;
console.log("displayHere" + displayHere + "currentNum " + currentNum);
}


function operation(value) {
    if (storedNum !== "") {
        equals();
        operator = value;
      console.log("stored num" + storedNum);
    }
    else {
        
        operator = value;
        storedNum = currentNum;
        currentNum = "";
        displayHere.value = storedNum;
    }
    console.log("result of operation function:" + storedNum, operator);
}


// $("#operator").click(function() {
// currentNum += $(this).text();	
// currentNum = storedNum;
// storedNum = '';
// display.text("0");
// });

function equals() {
//operations
console.log("equals");

if (operator === "+") {
runningTotal = parseFloat(storedNum, 10) + parseFloat(currentNum, 10);
console.log("plus: storedNum " + storedNum + "currentNum " + currentNum);
}

if (operator === "-") {
runningTotal = parseFloat(storedNum, 10) - parseFloat(currentNum, 10);

}

if (operator === "*") {
runningTotal = parseFloat(storedNum, 10) * parseFloat(currentNum, 10);

}

if (operator === "/") {
runningTotal = parseFloat(storedNum, 10) / parseFloat(currentNum, 10);
}

storedNum = runningTotal;
    currentNum = "";
    operator = "";
    displayHere.value = runningTotal;
}

	
function clearEntry() {
	currentNum='';
	displayHere.value = runningTotal;
	console.log("CE, displayHere, runningTotal: " + displayHere.value + ',' + runningTotal);
 //   display = display.replace(/.$/,'');
//  $("displayHere").html(display);
// document.getElementById("displayHere").value = displayHere;
// 	using value rather than innerHTML fixed
}

function allClear() {
    currentNum='';
    storedNum='';
    runningTotal='';
document.getElementById("displayHere").value ='';
console.log("AC, displayHere: " + displayHere.value);
}
// });

