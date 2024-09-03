// Loop 1: Using while loop to increment index by 2 until it reaches 10
let index = 0;
while(index < 10) {
    console.log(`Value of index is ${index}`); // Print the current value of 'index'
    index = index + 2; // Increment index by 2
}
// This loop will print: 0, 2, 4, 6, 8

// Loop 2: Iterating over an array using while loop
let myArray = ["Mia Malkova", "Sophie Dee", "Anhela White"];
let i = 0;
while(i < myArray.length) {
    console.log(`Value is ${myArray[i]}`); // Print the current element of the array
    i = i + 1; // Increment 'i' to move to the next element
}
// This loop will print each name in the array one by one

// Loop 3: Using do...while loop to execute code block at least once
let score = 11;
do {
    console.log(`Score is ${score}`); // Print the current value of 'score'
    score++; // Increment score by 1
}
while(score <= 10); // Continue loop as long as score is less than or equal to 10
// Since the initial score is 11, the condition is false, but the loop runs once due to 'do...while'
