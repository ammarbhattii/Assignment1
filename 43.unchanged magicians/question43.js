/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// const magicians_names = ["john", "eric", "max"];
// function show_magicians(magicians){
//     for(const magician of magicians){
//         console.log(magician);
//     }
// }
// function make_great(magicians){
//   for(let i = 0; i < magicians.length; i++){
//     magicians[i] = magicians[i] + " the Great";
//   }
// }
// const great_magicians = [...magicians_names]
// make_great(great_magicians)
// show_magicians(magicians_names)
// show_magicians(great_magicians)
var magicianName = ["john", "pattrick", "collins"];
// Function to add "the Great" to each magician's name
function makegreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
// Function to display the list of magicians
function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var Magician = __spreadArray([], magicianName, true);
makegreat(magicianName);
show_magician(Magician);
show_magician(magicianName);
