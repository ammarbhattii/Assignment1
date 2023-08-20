

/*41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.*/

const magician_names:string [] = ["john", "pattrick", "collin"];

function show_magic(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

show_magic(magician_names)