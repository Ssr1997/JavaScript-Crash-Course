// Loop 1: Basic for loop iterating from 0 to 9
for(let i = 0; i < 10; i++) {
    const element = i; // Assign the current value of i to 'element'
    
    // Check if the element is 5
    if(element == 5) {
        console.log("5 is the best number"); // If it is 5, print this message
    }
    
    console.log(element); // Print the current value of 'element'
}

// Loop 2: Nested for loop to generate a multiplication table
for(let i = 1; i <= 10; i++) {
    console.log(`Outer loop i value is : ${i}`); // Print the current value of 'i'
    
    for(let j = 1; j <= 10; j++) { // Inner loop for 'j' from 1 to 10
        console.log(`Inner loop value of i is ${i} and j is ${j}`); // Print values of 'i' and 'j'
        console.log(i + `*` + j + `=` + i * j); // Print multiplication result
    }
}

// Working with an array
let myArray = ["Mia Malkova", "Angela White", "Sophie Dee"];

console.log(`Length of Array is : ${myArray.length}`); // Print the length of the array

for(let i = 0; i < myArray.length; i++) {
    const element = myArray[i]; // Assign current array element to 'element'
    console.log(element); // Print the current element
}

// Loop 3: Using break
for(let index = 1; index <= 20; index++) {
    if(index == 10) {
        console.log("Detected 10"); // Print message when index is 10
        break; // Exit the loop when index is 10
    }
    console.log(`Value of i is ${index}`); // Print current index value
}

// Loop 4: Using continue
for(let index = 1; index <= 20; index++) {
    if(index == 10) {
        console.log("Detected 10"); // Print message when index is 10
        continue; // Skip the rest of the loop when index is 10
    }
    console.log(`Value of i is ${index}`); // Print current index value
}
