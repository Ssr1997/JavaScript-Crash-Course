// Define an object 'user' with properties and a method.
const user = {
    // Property 'username' with value "NEHA ARORA"
    username: "NEHA ARORA",
    // Property 'price' with value 999
    price: 999,

    // Method 'welcomeMessage' that logs a welcome message and the object itself.
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to this website`); // Uses 'this' to refer to the object's username property
        console.log(this); // Logs the entire object
    }
}

// Call the 'welcomeMessage' method for the first time
user.welcomeMessage(); // Outputs: "NEHA ARORA, welcome to this website" and the user object

// Update the 'username' property
user.username = "NEHA MRIG";

// Call the 'welcomeMessage' method again after the update
user.welcomeMessage(); // Outputs: "NEHA MRIG, welcome to this website" and the updated user object

// Log 'this' in the global context
console.log(this); // In non-strict mode, 'this' in the global context refers to the global object (window in browsers, global in Node.js). In strict mode, 'this' is undefined.

// Define a function 'momos' in the global scope
function momos() {
    // Local variable 'username' (not related to the object or global scope)
    let username = "NEHA";
    // Logs 'this.username' which refers to the global context's 'username'. 
    // If 'username' is not defined globally, this logs 'undefined'.
    console.log(this.username);
}
momos(); // Outputs: undefined (because 'this' in a function refers to the global object where 'username' isn't defined)

// Define a function expression 'momos1' using the function keyword
const momos1 = function () {
    let username = "NEHA";
    // Similar to the previous function, it logs 'this.username'.
    console.log(this.username);
}
momos1(); // Outputs: undefined for the same reasons as above.

// Define an arrow function 'add' that adds two numbers (with explicit return)
const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(3, 4)); // Outputs: 7

// Define an arrow function 'sub' that subtracts two numbers (with implicit return)
const sub = (num1, num2) => num1 - num2;
console.log(sub(3, 4)); // Outputs: -1

// Define an arrow function 'mul' that multiplies two numbers (with implicit return)
const mul = (num1, num2) => (num1 * num2);
console.log(mul(3, 4)); // Outputs: 12

// Define an arrow function 'div' that returns an object with a 'username' property
const div = (num1, num2) => ({ username: "NEHA" });
console.log(div(3 % 4)); // Outputs: { username: "NEHA" }

// Explanation of 'this' in the code:
// 1. In object methods (like 'welcomeMessage'), 'this' refers to the object itself.
// 2. In regular functions (like 'momos' and 'momos1'), 'this' refers to the global context (global object).
// 3. Arrow functions do not have their own 'this'; they inherit 'this' from the surrounding context.
