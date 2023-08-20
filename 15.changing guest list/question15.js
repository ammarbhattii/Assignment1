// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
// let Friend: string[] =["Ali", "Assad", "Umar"];
// let messag=("you are invited to the dinner.");
// console.log(Friend[1] + " can not come to dinner.")
// let newFriendsList= Friend.splice(1,1,"Hassan")
// for (let i=0; i<Friend.length; i++){
//     console.log(`${Friend[i]}! ${[messag]}`);
// }
var Friend = ["Ali", "Assad", "Umar"];
var messag = ("you are invited to the dinner.");
console.log(Friend[1] + " can not come to dinner.");
Friend.splice(1, 1, "Hassan");
for (var _i = 0, Friend_1 = Friend; _i < Friend_1.length; _i++) {
    var Friendz = Friend_1[_i];
    console.log("".concat(Friendz, "! ").concat([messag]));
}
