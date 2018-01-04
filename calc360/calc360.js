/*global $*/
$(document).ready(function(){
console.log("linked");
//strores inputs to calculate for later use -- memory
var inputs = [""];

//stores current input
var totalString;

//operators with . for validation
var operators1 = ["=", "-", "*", "/"];

// . operator for validation
var operators2 = ["."];

//numbers for validation
var numbers = [0,1,2,3,4,5,6,7,8,9];

function getValue(input){
    
    if(operators2.includes(inputs[inputs.length -1]===true && input===".")) {
        console.log("duplicate decimal");
    }
    
    else if(inputs.length===1 && operators1.includes(input)===false){
        inputs.push(input);
        console.log("first else if" + input);
        console.log("first else if" + inputs);
    }
    
    else if(operators1.includes(inputs[inputs.length-1])===false){
        inputs.push(input);
        console.log("2nd else operators1 if" + input);
        console.log("2nd else operators1 if" + inputs);
    }
    
    else if(numbers.includes(Number(input))){
        inputs.push(input);
        console.log("3rd else Number if" + input);
        console.log("3rd else Number if" + inputs);
    }
    
    update();
}

function update() {
    totalString = inputs.join("")
    $("#steps").html(totalString);
    console.log(totalString);
}

function getTotal() {
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
}

$("a").on("click", function(){
    
    if(this.id==="deleteAll"){
        inputs=[""];
        console.log("AC" + inputs);
        update();
    }
    else if(this.id==="backOne"){
        inputs.pop();
        console.log("CE" + inputs);
        update();
    }
    else if(this.id==="total"){
        getTotal();
        console.log("eval" + inputs);
    }
    
    else {
        if(inputs[inputs.length-1].indexOf("+","-","*","/",".")===-1) {
        getValue(this.id);
    }
    
    
    else {
        getValue(this.id);
    }
    }
  });

});