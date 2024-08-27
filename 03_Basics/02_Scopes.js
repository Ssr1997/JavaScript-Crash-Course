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
