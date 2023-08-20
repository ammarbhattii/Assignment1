// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var Name3 = "Ammar";
console.log(Name3.toLowerCase());
console.log(Name3.toUpperCase());
console.log(Name3.split(' ').map(function (word) { return word[0].toUpperCase() + word.slice(1); }).join(' '));
