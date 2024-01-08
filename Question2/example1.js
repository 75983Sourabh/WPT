// array having 5 string elements
let array = ['apple', 'banana', 'cherry', 'Mango', 'elderberry'];

//  on index 1 (banana) and index 4 (date) in two variables v1 and v2 using array destructuring
let [, v1, , , v2] = array;

// Display v1 and v2
console.log(v1); // Output: banana
console.log(v2); // Output: date