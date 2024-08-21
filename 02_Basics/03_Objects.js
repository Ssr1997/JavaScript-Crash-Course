//  Object literal is a way to create a new object using a set of key-value pairs. 
//  It's a simple and straightforward way to group related data together.

// const mySymb = Symbol("Neha"); creates a unique symbol with the description "Neha". 
const mySymb = Symbol("Neha")

// Object declaration , here JsUser is the object with the below properties.

const JsUser = {
    name: "Shivam",
    age: 27,
    "nick name": "Lallu Lal",
    mySymb: "Generous",
    [mySymb]: "Generous", // Symbol-Key Declaration [mySymb]: "Generous" uses the Symbol(Neha) as a property key in JsUser object.
    location: "Delhi",
    isLoggedIn: false,
    email: "shivam.rawat@tripjack.com",
    lastLoginDays: ["Saturday","Sunday"],
    isStudent: false
}
console.log(JsUser.email);
console.log(JsUser["isStudent"]);
console.log(JsUser["nick name"]);


console.log(typeof(JsUser[mySymb]),JsUser[mySymb]); 
console.log(JsUser);

/*
 Object.freeze() is a method that prevents modifications to an object. 
 It only applies to the top level of the object. Nested objects are not frozen. 
 This means if your object contains other objects as properties, those nested objects can still be modified unless they are also frozen.
*/

const person = {
    name: "Alice",
    age: 25,
    address: {
      city: "Wonderland",
      zip: "12345"
    }
  };
  
  // Freezing the person object
  Object.freeze(person);
  
  // Attempting to modify the object
  person.name = "Bob"; // This will not change the name property
  person.address.city = "New City"; // This will still change the nested object
  
  console.log(person.name); // Output: Alice
  console.log(person.address.city); // Output: New City

// Inserting functions inside Objects

// Define a new property on the JsUser object: a method named `greeting`
JsUser.greeting = function() {
    console.log("Hello JsUser");
}
console.log(JsUser.greeting());

// Define another new property on the JsUser object: a method named `greetingTwo`
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser , ${this.name}`); // This method logs a greeting message including the `name` property of the JsUser object.
}
/*
  The method `greetingTwo` uses the `this` keyword to access the `name` property of the `JsUser` object
  Since `this` refers to the `JsUser` object, it correctly logs the name "Shivam"
*/
console.log(JsUser.greetingTwo());
