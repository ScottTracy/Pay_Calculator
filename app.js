"use strict";

let hours = prompt("Please enter number of hours","(hours)")
let pay = prompt("Please enter wage","(wage)")

let product = pay * hours;

console.log(product);
if ((isNaN(hours)) || (isNaN(pay))) { 
	alert( "I need numbers to work!");}
else if (product > 1000)	{alert("$" + product + " " + "is a lot of money!");}
else {
alert("Your total pay is" + " " + "$" + (product));}