/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
var current_users = ["Hamza", "Ali", "Arslan", "Muneeb", "Imran"];
var new_users = ["Hamza", "ALI", "Muneeb", "Hassan", "Ajmal"];
var _loop_1 = function (name_1) {
    var regExp = new RegExp(name_1, 'i');
    var isDuplicate = current_users.some(function (curr_user) { return regExp.test(curr_user); });
    if (isDuplicate) {
        console.log(name_1 + " will need to enter a new username.");
    }
    else {
        console.log("The username " + name_1 + " is available.");
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var name_1 = new_users_1[_i];
    _loop_1(name_1);
}
