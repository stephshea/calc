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



function addNumber(abby) {
    console.log("click");
    currentNum += abby;

displayHere.value = currentNum;
console.log(displayHere);
}


function operation(value) {
    if (storedNum !== "") {
        equals();
        operator = value;
      
    }
    else {
        
        operator = value;
        storedNum = currentNum;
        currentNum = "";
        displayHere.value = storedNum;
    }
    console.log(storedNum, operator);
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

}
// });

