const userEmail = [];

// Check if userEmail is truthy or falsy
if(userEmail){
    console.log("Got mail ID");
}
else{
    console.log("Did not receive mail ID");
}

// In JavaScript, an empty array is considered a truthy value, so the first condition is true.
// However, if you want to check if the array is empty, you should check the length of the array.

if(userEmail.length === 0){
    console.log("Array is empty");   
}

// The above condition checks if the length of the array is 0, which means the array is empty. 
// Since userEmail is an empty array, this condition is true, and "Array is empty" will be logged.

const emptyObj = {};

// Check if the object is empty by checking the length of its keys
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

// The Object.keys() method returns an array of the object's own property names.
// If the length of this array is 0, the object is empty.
// Since emptyObj is an empty object, this condition is true, and "Object is Empty" will be logged.

// Nullish Coalescing Operator (??) 
// It returns the right-hand side operand when the left-hand side is null or undefined.

let val1;
let val2;
let val3;
let val4;

val1 = 5 ?? 10;
// val1 is assigned 5 because 5 is not null or undefined.

val2 = null ?? 15;
// val2 is assigned 15 because the left-hand side (null) is null.

val3 = undefined ?? 20;
// val3 is assigned 20 because the left-hand side (undefined) is undefined.

val4 = null ?? 30 ?? undefined  ?? 50;
// val4 is assigned 30 because null is null, and the next value (30) is used.
// The rest of the values are ignored because 30 is not null or undefined.

console.log(val1); // Output: 5
console.log(val2); // Output: 15
console.log(val3); // Output: 20
console.log(val4); // Output: 30

// Ternary Operator
// This is a shorthand for an if-else statement. It checks a condition and returns one of two values.

const iceTeaPrice = 100;

iceTeaPrice <= 80 
    ? console.log("Price is less than 80") 
    : console.log("Price is more than 80");

// The ternary operator checks if iceTeaPrice is less than or equal to 80.
// Since iceTeaPrice is 100, the condition is false, so "Price is more than 80" is logged.
