// Primitive Data Types
// 7 Types : String , Number, Boolean, Null , Undefined, Symbol , BigInt

const score = 100
const scoreValue = 157.89

const isLoggedIn = false
const outsideTemp = null
let userName;

/* 
   Symbol is a unique and immutable primitive data type. 
   Symbols are primarily used to create unique identifiers for object properties, ensuring that no two symbols are the same,
   even if they have the same description.
   This makes them particularly useful for avoiding name collisions in objects.
*/

const id1 = Symbol("123")
const id2 = Symbol("123")
console.log(id1 === id2);

const bigNumber = 981492564392146426452n // Declaration of BigInt.
console.log(typeof(bigNumber));


// Non - Primitive DataTypes
// Arrays , Objects , Functions

const pornstars = ["Mia Malkova" , "Dani Daniels" , "Ava Addams"] // Array Declaration
let myObj = {
    name : "Shivam",
    age : 27
}
console.log(typeof(pornstars));

const myFunction = function() {             // Function Declaration inside Variable myFunction.
    console.log("Function Declaration");
}
console.log(typeof(myFunction));


