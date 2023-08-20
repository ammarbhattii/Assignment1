// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var Friends14 = ["Ali", "Assad", "Umar"];
var messg = ("you are invited to the dinner.");
for (var i = 0; i < Friends14.length; i++) {
    console.log("".concat(Friends14[i], "! ").concat([messg]));
}
