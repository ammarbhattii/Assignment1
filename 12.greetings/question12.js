// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
var myFriend = ["Ali", "Imran", "Usama", "Farhan"];
for (var i = 0; i < myFriend.length; i++) {
    console.log("Hi,".concat(myFriend[i], " ! have a good Day."));
}
