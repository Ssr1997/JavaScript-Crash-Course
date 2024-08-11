const accountId = 75462 // const is a keyword used to declare a varibale that is constant.

let accountEmail = "shivamsrawat@gmail.com" // let = can be re-assigned a value but can't be declared again (block scope {are only accessible within the block}).

var accountPassword = "123456"  // var = it can be re-assigned a value and it can also be declared again  (Global scoped).

accountCity = "New Delhi"

let accountState; // accountState variable defined without any value.

// accountId = 47589  // const = can't be re-assigned a value and can't be declared again (block scope)

accountEmail = "nehaarora@gmail.com"
accountPassword = "987654"
accountCity = "Las Vegas"

console.log(accountId); // console.log() is a function used to print output/messages to the browser's console/terminal window.

// Prefer not to use Var becoz of issue in block scope and functional scope.

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) //console.table([group of variables to show in tabular form]).