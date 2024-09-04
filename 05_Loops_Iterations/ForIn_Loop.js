// Define an object with key-value pairs where the keys are abbreviations and the values are programming languages
const myObj = {
    js: "JavaScript",  // "js" is the abbreviation for "JavaScript"
    rb: "Ruby",        // "rb" is the abbreviation for "Ruby"
    cj: "Clojure",     // "cj" is the abbreviation for "Clojure"
    go: "Go"           // "go" is the abbreviation for "Go"
};

// Use a for...in loop to iterate over the keys of the object
for (const key in myObj) {
    // For each key in the object, log a string that shows the key and its corresponding value
    console.log(`${key} is shortcut for ${myObj[key]}`);
    // Example output: "js is shortcut for JavaScript"
}

/////////////////////////////////////

// Define an array with elements representing programming language abbreviations
const programming = ["js", "rb", "c++", "clojure"];

// Use a for...in loop to iterate over the indices of the array
for (const key in programming) {
    // Log the element at the current index (key) to the console
    console.log(programming[key]);
    // Example output: "js", "rb", "c++", "clojure"
}
