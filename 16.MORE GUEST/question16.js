/* More Guests: You just found a bigger dinner table, so now more space is
   available. Think of three more guests to invite to dinner
   Start with your program from Exercise 15. Add a print statement to the end of your
   program informing people that you found a bigger dinner table.*/
var Frnd = ["Ali", "Assad", "Umar"];
for (var _i = 0, Frnd_1 = Frnd; _i < Frnd_1.length; _i++) {
    var Frndz = Frnd_1[_i];
    console.log("".concat(Frndz, " I found a biger dinner table."));
}
//                     // • Add one new guest to the beginning of your array.
Frnd.splice(0, 0, "Awais");
console.log(Frnd);
//                             // Add one new guest to the middle of your array.
var newFriend = "Haider";
var middleindex = Math.floor(Frnd.length / 2);
Frnd.splice(middleindex, 0, newFriend);
console.log(Frnd);
//                          // Use append() to add one new guest to the end of your list.
Frnd.push("Ashar");
console.log(Frnd);
//                      // Print a new set of invitation messages, one for each person in your list.
for (var _a = 0, Frnd_2 = Frnd; _a < Frnd_2.length; _a++) {
    var list = Frnd_2[_a];
    console.log("".concat(list, " you are invited to dinner."));
}
