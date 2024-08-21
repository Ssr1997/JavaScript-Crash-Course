const accountId = 75462 // const: Cannot be re-declared or updated in the same scope. Once assigned, the value cannot be changed.

/*
    let : Block-scoped. Accessible only within the block (like inside a loop or an if statement) where they are defined. 
          Cannot be re-declared in the same scope, but can be updated.
*/
let accountEmail = "shivamsrawat@gmail.com" 


/*
    var: Function-scoped. Accessible within the entire function or globally if declared outside a function.
          Can be re-declared and updated within the same scope.
*/
var accountPassword = "123456"  // var = it can be re-assigned a value and it can also be declared again  (Global scoped).

accountCity = "New Delhi"

let accountState; // accountState variable defined without any value.

// accountId = 47589  // const = can't be re-assigned a value and can't be declared again (block scope)

accountEmail = "nehaarora@gmail.com"
accountPassword = "987654"
accountCity = "Las Vegas"

console.log(accountId); // console.log() is a function used to print output/messages to the browser's console/terminal window.

// Prefer not to use Var becoz of issue in block scope and functional scope.

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) 
//console.table([group of variables to show in tabular form]).