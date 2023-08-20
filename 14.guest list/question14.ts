
// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let Friends14: string[] =["Ali", "Assad", "Umar"];
let messg=("you are invited to the dinner.");



for (let i=0; i<Friends14.length; i++){

    console.log(`${Friends14[i]}! ${[messg]}`);

}