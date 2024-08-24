// Function to add two numbers and log the result
function add(num1, num2) {
    // Add num1 and num2, and print the result to the console
    console.log(num1 + num2);    
}

// Example usage of the add function
add(3, 4);       // Prints 7 to the console (3 + 4)
add(3, "");      // Prints "3" to the console (3 + empty string "" results in "3")
add(3, null);    // Prints 3 to the console (3 + null is treated as 3 + 0 in numeric context)


// Function to subtract num2 from num1 and return the result
function sub(num1, num2) {
    // Calculate the result of num1 - num2
    let result = num1 - num2;
    // Return the result
    return result;
}

// Example usage of the sub function
const result = sub(17, 19);  // result will be -2 (17 - 19)
console.log("Result is :", result);  // Prints "Result is : -2" to the console


// Function to divide num1 by num2 and return the result
function div(num1, num2) {
    // Calculate the result of num1 / num2
    return num1 / num2;
}

// Example usage of the div function
const result1 = div(35, 7);  // result1 will be 5 (35 / 7)
console.log("Result1 is :", result1);  // Prints "Result1 is : 5" to the console


// Function to check if a user is logged in and return a message
function loggedinUser(username) {
    // Check if the username is falsy (e.g., empty string, null, undefined, etc.)
    if (!username) {
        // If no username is provided, print a message asking for a username
        console.log("Please enter a username");
        // Exit the function early
        return;        
    } else {
        // If a username is provided, return a login message
        return `${username} just logged in to the DB system`;
    }
}

// Example usage of the loggedinUser function
console.log(loggedinUser("Neha"));  // Prints "Neha just logged in to the DB system"
console.log(loggedinUser(""));      // Prints "Please enter a username" because an empty string is falsy
