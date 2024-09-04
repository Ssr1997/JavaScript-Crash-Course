// Define an array of programming languages
const coding = ["js", "python", "c++", "swift", "ruby"];

// Use forEach to iterate over each element in the array with an anonymous function
coding.forEach(function(val) {
    // Log the current element (val) to the console
    console.log(val);
});

// Use forEach to iterate over each element in the array with an arrow function
coding.forEach((item) => {
    // Log the current element (item) to the console
    console.log(item);
});

// Define a function named 'index' that logs the passed item to the console
function index(item) {
    console.log(item);
}

// Use the 'index' function as the callback for forEach to iterate over the array
coding.forEach(index);

// Use forEach to iterate over each element in the array with multiple parameters
coding.forEach((item, index, arr) => {
    // Log the current element (item), its index (index), and the entire array (arr) to the console
    console.log(item, index, arr);
});

// Define an array of objects, each representing a programming language
const myCoding = [
    {
        languageName: "javascript",   // First object with language name and file extension
        languageFileName: "js"
    },
    {
        languageName: "java",         // Second object with language name and file extension
        languageFileName: "java"
    },
    {
        languageName: "python",       // Third object with language name and file extension
        languageFileName: "py"
    },
];

// Use forEach to iterate over each object in the array
myCoding.forEach((item) => {
    // Log the value of the 'languageName' property of the current object (item)
    console.log(item.languageName);
});
