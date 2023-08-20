/*31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
// const uesrNames = ["Hamza", "Ali", "Arslan", "Admin", "Ajmal"];
// for (const uesrName of uesrNames) {
//     if (uesrName === "Admin") {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${uesrName}, thank you for logging in again.`)
//     }
// }
// uesrNames.splice(0, uesrNames.length)
// if(!uesrNames.length){
//     console.log("We need to find some users!")
// }
var users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log("Current users:", users.join(", "));
    users = []; // Remove all usernames
    console.log("All usernames have been removed.");
}
