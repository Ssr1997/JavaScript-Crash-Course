// Immediattely Invoked Function Expression

/* Immediately Invoked Function Expression (IIFE): A function that is defined and immediately executed.

Named IIFE: The first function has a name name, but it's still immediately executed.
Anonymous IIFE: The second function is an anonymous arrow function, meaning it doesn't have a name but is still immediately executed.
Arrow Function: The second example uses an arrow function, which is a shorter syntax for writing functions in JavaScript.

The IIFE's pattern is commonly used to create a private scope, avoiding polluting the global namespace.
They are used to avoid polluting the global scope,run code immediately,and protect variables from being accessed outside of the function.
*/

// This is an Immediately Invoked Function Expression (IIFE)
// The function is defined and immediately executed.


(function name() {
    // The code inside the function runs right after the function is defined.
    // This line prints "NEHA ARORA" to the console.
    console.log("NEHA ARORA");

    // Since the function is immediately invoked, 
    // it doesn't have to be called explicitly.
})();

// ************************************************************************************//

// This is another IIFE, but this time using an arrow function.
// The function is defined and immediately executed with the argument "NEHA MRIG".
((username) => {
    // The argument "username" is passed as "NEHA MRIG".
    // This line prints "NEHA MRIG" to the console.
    console.log(`${username}`);

    // The arrow function syntax makes the code more concise.
})("NEHA MRIG");


// **************************************************************************************************//

/*

The working of the JavaScript works on three phases:
1. Global Execution Context
2. Memory phase / Creation phase
3. Execution phase

Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

Phase 2: Memory phase
During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

Phase 3: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
1. Memory phase 
2. Execution phase 
The return value of the 'Function Execution' context is passed to the Global Execution Context.

*/