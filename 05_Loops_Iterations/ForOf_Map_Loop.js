// Define an array with elements 1 through 5
const arr1 = [1, 2, 3, 4, 5];

// Iterate over each element in the array using a for...of loop
for (const num of arr1) {
    console.log(num);  // Log each element (num) in the array to the console
}

/////////////////////////////////////

// Define a string variable containing the text "Neha Arora"
const greetings = "Neha Arora";

// Attempt to iterate over each character in the string using a for...of loop
// IMPORTANT: The loop variable should be declared with 'const' or 'let'
for (index of greetings) {
    // Attempt to log the character and a message to the console
    // The use of `${index}` requires a template literal (backticks) 
    // around the entire string to be valid
    console.log(`${index} is a Backend Developer`);
}

/////////////////////////////////////

// Create a new Map object, which is a collection of key-value pairs
const map = new Map();

// Add key-value pairs to the map using the set method
map.set("IN", "INDIA");  // Adds the key "IN" with value "INDIA"
map.set("FN", "FRANCE"); // Adds the key "FN" with value "FRANCE"
map.set("USA", "United States Of America"); // Adds the key "USA" with value "United States Of America"
map.set("IN", "INDIA");  // Sets the key "IN" again with the value "INDIA", overwriting the previous value

// Log the entire map object to the console
console.log(map);

/////////////////////////////////////

// Iterate over each key-value pair in the map using a for...of loop
for (const [key, value] of map) {
    // Log the key and value to the console in the format "key :- value"
    console.log(key, ':-', value);
}

/////////////////////////////////////

// Define an object with two key-value pairs
const myObj = {
    NEHAARORA: 'BACKEND',  // The key "NEHAARORA" has the value "BACKEND"
    NEHAMRIG: 'PM'         // The key "NEHAMRIG" has the value "PM"
};

// Attempt to iterate over the object using a for...of loop
// NOTE: This will cause an error because objects are not directly iterable with for...of
for (const [key, value] of myObj) {
    console.log(key, ':-', value);  // Intended to log the key-value pairs, but will throw an error
}

// To correctly iterate over an object, use Object.entries() as shown below:

/* Corrected version:
for (const [key, value] of Object.entries(myObj)) {
    console.log(key, ':-', value);  // This will correctly log each key-value pair in the object
}
*/
