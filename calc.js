/* global $*/
$(document).ready(function(){

    
    var display;

// var one = document.getElementById("one").value;
// document.getElementById("display").innerHTML;

var t = 0;
var n;

function add(t, n) {
 t += (t + n);
 console.log("yay");
//  return t;
} 
 
t = document.getElementById("display").innerHTML;

var input = document.getElementById("input").value;
document.getElementById("display").innerHTML += input;
document.getElementById("input").value = ('');


 
  $( "button.one" ).on( "click", function() {
        document.getElementById("displayHere").innerHTML = display;
        console.log(1);
 
});    
 

 

// if(document.getElementById('add').clicked == true) {
// add();
//  }
 
});
 