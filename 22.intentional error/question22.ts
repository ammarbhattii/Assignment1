/*22. Intentional Error: If you haven’t received an array index error in one of your programs yet,
 try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program.*/



let array: number[] = [1, 2, 3, 4, 5];
// Trying to access an element at an index that is out of bounds
let errorIndex = array[10]; // This will cause an index error 
console.log(errorIndex);

let correctIndex =array[4]
console.log(correctIndex)
