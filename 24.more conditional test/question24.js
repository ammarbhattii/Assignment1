// console.log("Hello World");
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
var city = "Karachi";
console.log("Is city === 'lahore' ? I predict True.");
console.log(city === "lahore");
console.log("Is city != 'lahore' ? I predict false.");
console.log(city != "lahore");
var number = 1;
console.log("Is number == '1' ? I predict True.");
console.log(number == 3);
console.log("Is number !== '2' ? I predict True.");
console.log(number !== 2);
console.log("Is number+number > '2' ? I predict False.");
console.log(number + number > 2);
console.log("Is number < '1' ? I predict False.");
console.log(number < 1);
console.log("Is number >= '1'  ? I predict True.");
console.log(number >= 1);
console.log("Is number <= '1'  ? I predict True.");
console.log(number <= 1);
console.log("Is number <= '1' || number >= '1' ? I predict True.");
console.log(number <= 1 || number >= 1);
console.log("Is  number <= '1' && number >= '1'  ? I predict True.");
console.log(number <= 1 && number >= 1);
var array = [1, 2, 3, 4, 5, 6];
console.log("Does array include 2? I predict True.");
console.log(array.indexOf(2) !== -1);
console.log("Does array include 2? I predict False.");
console.log(array.indexOf(2) === -1);
