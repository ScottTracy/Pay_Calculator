"use strict";

let hours = prompt("Please enter number of hours","(hours)")
let pay = prompt("Please enter wage","(wage)")
let product

product = pay * hours;

console.log(product);
if ((isNaN(hours)) || (isNaN(pay))) { 
	alert( "I need numbers to work!");}
else if (hours > 40) { product = pay * 40 + (hours - 40)*(pay * 1.5);
	alert("Wow, you worked too much to make just" + "$" + product)}
else if (product > 1000)	{alert("$" + product + " " + "is a lot of money!");}	
else {
  alert("Your total pay is" + " " + "$" + (product));}