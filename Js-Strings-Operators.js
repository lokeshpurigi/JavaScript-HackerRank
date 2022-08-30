/**
 * 
 * 1.Javascript Operators Assign two numeric variables a and b Initialise values as 5 and 10 respectively and console log in same order the following:

Create a variable add and assign it the sum of a and b.
Create a variable sub and assign it result of b subtracted from a.
Create a variable mul and assign it the product of a and b.
Create a variable div and assign it the result of of a divided by b.
Create a variable inc and assign it the preincremented value of a.
Create a variable dec and assign it the predecremented value of b.
Javascript String Assign "Learning Javascript with AlmaBetter" to variable test and perform following

2.Console log the length of string
Extract "AlmaBetter" from string using slice() and console log it
Replace "Javascript" with "Web3.0" in test and console log it
Convert test to upper case using built in function and console log it
Concat "Web3.0 is future" to test and console log it
 */



var a= 5
var b = 10
add = a+b
sub = b-a
mul = a*b
div = a/b
inc = ++a
dec = --b

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log(inc);
console.log(dec);

var test = "Learning Javascript with AlmaBetter";
console.log(test.length);
console.log(test.slice(25,35));
console.log(test.replace("Javascript", "Web3.0"));
console.log(test.toUpperCase());
console.log(test.concat("Web3.0 is future"));