


                    // 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
                    //  and you have space for only two guests.

                    // Start with your program from Exercise 16.
                    //  Add a new line that prints a message saying that you can invite only two people for dinner.

let Frind: string[] =["Awais","Ali", "Haider", "Umar", "Ashar" ];

    console.log(`I can invite only two people for dinner.`);
    

             /* Remove guests from your list one at a time until only two names remain in your list.
                 Each time you pop a name from your list, print a message to that person letting them know
                  you’re sorry you can’t invite them to dinner.*/

while(Frind.length>2){
    const removedPerson=Frind.pop()
    if (removedPerson){
        console.log(`sorry ${removedPerson} i cant invite you to the dinner.`)
    }
}

// // // Print a message to each of the two people still on your list, letting them know they’re still invited.
for(const person of Frind)
console.log(`${person } you are still invited to the dinner`)

//                         /*Remove the last two names from your list, so you have an empty list. 
//                        Print your list to make sure you actually have an empty list at the end
//                        of your program.*/

Frind.splice(0,2)
console.log(Frind)