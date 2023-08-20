
/*42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/

const magicianName = ["john", "pattrick", "collins"];

// Function to add "the Great" to each magician's name
function makegreat(magicians){
  for(let i = 0; i < magicians.length; i++){
    magicians[i] = magicians[i] + " the Great";
  }
}

// Function to display the list of magicians
function show_magician(magicians){
    for(const magician of magicians){
        console.log(magician);
    }
  }



makegreat(magicianName)
show_magician(magicianName)