arr1 = ["Syndicate", "Rogue", "Black Flag"]
arr2= ["Origins", "Odessey", "Valhalla"]

// push: Adds items to the end of an existing array. It changes the original array & tells you how many items are now in the array.
arr1.push(arr2)
console.log(arr1);
console.log(arr1[3][2]);

// concat: Combines two or more arrays into a new array. 
//It doesn’t change the original arrays; instead, it creates and returns a new array with all the items combined.

arr3 = ["Syndicate", "Rogue", "Black Flag"]
arr4= ["Origins", "Odessey", "Valhalla"]
const arr5 = arr3.concat(arr4)
console.log(arr5);

// Spread Operator :It allows you to "spread" the elements of an array into another array, function call, or object.
// copying arrays , expanding arrays , combining multiple arrays

arr6 = [2,4,5,7,8]
const arr6_copy = [...arr6] // copy is [2,4,5,7,8], original remains unchanged
console.log(arr6,arr6_copy);

arr6 = [2,4,5,7,8]
arr7 = [23,56,87,69]
arr8 = [...arr6,...arr7]  // Combining arr6 & arr7 into arr8.
console.log(arr8);

// The flat method in JavaScript is used to flatten nested arrays into a single-level array.
// By default, flat() flattens an array one level deep.
const complex_array = [3,2,5,[7,5,8,4],1,8,5,[13,76,43,[89,6,43,78]]]
const simplified_array = complex_array.flat(Infinity)
console.log(simplified_array);

console.log(Array.isArray("Shivam"));
// Creates an array from an iterable object.
console.log(Array.from("Shivam"));

/* The object {"name":"Shivam"} is not iterable and does not have the standard array-like properties (like a length property or numeric keys).
 Array.from() will attempt to convert the object to an array by treating its keys as array indices.
 The output in this case will be an array containing only the string "name" because,
 Array.from() treats the object as an array-like object and includes only its keys.
 */
console.log(Array.from({"name":"Shivam"}));

let num1 = 45
let num2 = 56
let num3 = 65

console.log(Array.of(num1,num2,num3));

