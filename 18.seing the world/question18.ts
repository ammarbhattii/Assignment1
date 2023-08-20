
/*Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.*/


let fvrtPlace:string []= ["paris","london","venice","istanbul","sydney"]

fvrtPlace.forEach(place => console.log(place));
console.log(fvrtPlace)
let unsortedFvrtPlace = [...fvrtPlace];


// • Print your array in alphabetical order without modifying the actual list.

let sortedFvrtPlace=fvrtPlace.sort()
console.log(sortedFvrtPlace)

// • Show that your array is still in its original order by printing it.
fvrtPlace = unsortedFvrtPlace;

console.log(fvrtPlace)

// • Print your array in reverse alphabetical order without changing the order of the original list.

let reverseFvrtPlace=sortedFvrtPlace.reverse()
fvrtPlace=sortedFvrtPlace
console.log(fvrtPlace)

// • Show that your array is still in its original order by printing it again.

fvrtPlace = unsortedFvrtPlace;

console.log(fvrtPlace)

// • Reverse the order of your list. Print the array to show that its order has changed.

fvrtPlace= fvrtPlace.reverse()
console.log(fvrtPlace)

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
fvrtPlace= fvrtPlace.reverse()
console.log(fvrtPlace)


// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
fvrtPlace =fvrtPlace.sort()
console.log(fvrtPlace)

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

fvrtPlace=fvrtPlace.reverse()
console.log(fvrtPlace)
