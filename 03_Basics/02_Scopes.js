let d = 300; // 'd' is declared in the global scope and is initialized to 300.

if (true) { // This block starts a new block scope.
    let d = 10; // A new 'd' is declared within this block. This 'd' is different from the global 'd'. 
                // It is scoped to this block, so it only exists inside the if statement.

    const e = 20; // 'e' is declared within the block scope using 'const'. 
                  // It is only accessible within this block.

    console.log("INNER d value : ", d); // Outputs: "INNER d value : 10"
                                        // Here, the inner 'd' (value 10) is accessed since it shadows the outer 'd'.
}

console.log(d); // Outputs: 300
// This logs the global 'd' (value 300) because the inner 'd' is block-scoped and doesn't affect the global 'd'.

// console.log(e); 
// This would result in an error if uncommented because 'e' is not defined in the global scope. 
// It's block-scoped and only accessible inside the if block above.

if (true) { // This block starts another block scope.
    let a = 10; // 'a' is block-scoped and only accessible within this block.

    const b = 20; // 'b' is also block-scoped and only accessible within this block.

    var c = 30; // 'c' is function-scoped (or globally scoped if not inside a function).
                // Even though it's declared inside a block, it will be accessible outside the block 
                // because 'var' does not have block scope.
}

console.log(c); // Outputs: 30
// 'c' is accessible here because 'var' is function-scoped (or globally scoped if declared outside any function).

// console.log(a); 
// This would result in an error if uncommented because 'a' is block-scoped and is not accessible outside the if block.

// console.log(b); 
// This would result in an error if uncommented because 'b' is block-scoped and is not accessible outside the if block.


// **************************************************************************************************************************//


function one() {
    // Declare a constant variable 'username' within the function 'one' with the value "Neha".
    const username = "Neha";

    // Define an inner function 'two'.
    function two() {
        // Declare a constant variable 'website' within the function 'two' with the value "youtube".
        const website = "youtube";
        
        // Log the value of 'username' to the console.
        // Since 'username' is declared in the outer function 'one', it is accessible here due to JavaScript's lexical scoping.
        console.log(username);
    }

    // Trying to access the variable 'website' here would throw an error because 'website' is declared in the inner function 'two'
    // and is not accessible outside its scope.
    // Uncommenting the next line would result in an error: "ReferenceError: website is not defined".
    // console.log(website);

    // Call the inner function 'two'.
    two();
}

// Call the outer function 'one'.
one();

// ***************************************************************************************************************** //

if (true) { 
    // The outer `if` block is always true, so the code inside this block will always run.

    // Declare a constant variable 'username' within this block with the value "AKANKSHA".
    const username = "AKANKSHA";

    // Check if the value of 'username' is equal to "AKANKSHA".
    if (username === "AKANKSHA") { 
        // If the condition is true, declare another constant variable 'website' with the value "\t Only Fans".
        // The "\t" adds a tab space before "Only Fans" for formatting.
        const website = "\t Only Fans";

        // Log the concatenated values of 'username' and 'website' to the console.
        console.log(username + website); // Output: "AKANKSHA    Only Fans"
    }

    // Trying to access 'website' here would throw an error because 'website' is only defined within the inner `if` block.
    // Uncommenting the next line would result in a "ReferenceError: website is not defined".
    // console.log(website);
}

// Trying to access 'username' here would also throw an error because 'username' is defined within the first `if` block,
// and is not accessible outside of that block.
// Uncommenting the next line would result in a "ReferenceError: username is not defined".
// console.log(username);


// ***************************************************************************************************************** //

// The first console.log attempts to call the function `addone` before it's defined.

// Function addone(5) call
console.log(addone(5)); // Output: 6

// Function declaration (hoisted).You can call them anywhere in their scope, even before they’re defined.

function addone(num) {
    // The function adds 1 to the input number and returns the result.
    return num + 1;
}

// The next console.log attempts to call the function `addtwo` before it's defined.

// Function addtwo(5) call.
// However, `addtwo` is defined using a function expression, which is not hoisted in the same way.
console.log(addtwo(5)); // This will throw a "ReferenceError: Cannot access 'addtwo' before initialization".

// Function expression (not hoisted like function declarations,are partially hoisted)

/* When you define a function using a function expression (i.e., assigning a function to a variable), 
only the variable itself is hoisted, not the function definition. 
The variable is hoisted but remains uninitialized until the assignment is reached in the code.
*/
const addtwo = function(num) {
    // The function adds 2 to the input number and returns the result.
    return num + 2;
}
