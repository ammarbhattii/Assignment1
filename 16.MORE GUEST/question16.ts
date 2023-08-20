                 /* More Guests: You just found a bigger dinner table, so now more space is
                    available. Think of three more guests to invite to dinner
                    Start with your program from Exercise 15. Add a print statement to the end of your 
                    program informing people that you found a bigger dinner table.*/

                    let Frnd: string[] =["Ali", "Assad", "Umar"];
                
                    for (const Frndz of Frnd){
                    console.log(`${Frndz} I found a biger dinner table.`);
                    }
                    //                     // • Add one new guest to the beginning of your array.
                    Frnd.splice(0,0,"Awais")
                    console.log(Frnd);
                    //                             // Add one new guest to the middle of your array.
                    let newFriend= "Haider"
                    let middleindex:number= Math.floor(Frnd.length/2)
                    Frnd.splice(middleindex,0,newFriend)
                    console.log(Frnd)
                    //                          // Use append() to add one new guest to the end of your list.
                    
                    Frnd.push("Ashar")
                    console.log(Frnd)
                    //                      // Print a new set of invitation messages, one for each person in your list.
            
                    for (const list of Frnd ){
                        console.log(`${list! } you are invited to dinner.` )
                    }