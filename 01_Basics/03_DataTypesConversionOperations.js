// ********************************************* Conversion ******************************************* //

let score1 = "57xyz"

console.log(typeof(score1));

let ValueInNumber1 = Number(score1)
console.log(typeof(ValueInNumber1),ValueInNumber1); // Nan means Not A Number.

/-----------------------------------------------------------------------------------------/

let score2 = null

console.log(typeof(score2));

let ValueInNumber2 = Number(score2)
console.log(typeof(ValueInNumber2),ValueInNumber2); // 0

/-----------------------------------------------------------------------------------------/

let score3 = undefined

console.log(typeof(score3));

let ValueInNumber3 = Number(score3)
console.log(typeof(ValueInNumber3),ValueInNumber3); // Nan

/-----------------------------------------------------------------------------------------/

let score4 = true

console.log(typeof(score4));

let ValueInNumber4 = Number(score4)
console.log(typeof(ValueInNumber4),ValueInNumber4); // 1

// "57" => 57
// "57xyz" => Nan
// true => 1 ; false => 0

/-----------------------------------------------------------------------------------------/

let isLoggedIn = true
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(typeof(booleanisLoggedIn),booleanisLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "Neha" => true

/-----------------------------------------------------------------------------------------/

let someNumber = 69
let StringNumber = String(someNumber)
console.log(typeof(StringNumber),StringNumber);


// ************************************************** Operations ***********************************************************//

let value = 69
let negvalue = -value
console.log("Negative Value is :",negvalue);

console.log(2+2,2*2,2-2,2**3,2/2,2%2);

let str1 = "Hello"
let str2 = "Shivam"
let str3 = str1 + str2
console.log("Concatenation of 2 strings : ",str3);

console.log(typeof("1"+2),"1"+2);
console.log(typeof(1+"2"),1+"2");
console.log(typeof("1"+"2"),"1"+"2");
console.log(typeof("1"+2+2),"1"+2+2);
console.log(typeof(1+2+"2"),1+2+"2");

console.log((3+4) * 5 % 8);

/*
In JavaScript, the + operator is used to convert a value to a number. 
When you use console.log(+true);, the + operator converts the boolean value true into the number 1.
So, the output of the below code will be 1.
*/
console.log(+true); 

/*
In JavaScript, the + operator is used to convert a value to a number. 
When you use console.log(+"");, the empty string "" is converted to a number.
Therefore, console.log(+""); will output 0 to the console.
*/
console.log(+"");

let counter = 100
/*
This is a pre-increment operation.
It increases the value of counter by 1 before using it in any expression.
The ++ before the variable name means the value of counter is increased by 1 before its current value is used in any expression.
After executing ++counter, the value of counter will be 101
*/
console.log("Pre Increment", ++counter);
/*
 This is the post-increment operation. 
 The ++ operator increases the value of counter by 1, but since it's post-increment (counter++),
 the current value of counter is used first before the increment.
 When counter++ is executed, the current value (100) is used, and then counter is incremented by 1.
 After this operation, the value of counter becomes 101.
*/
console.log("Current value of counter before Post Increment", counter++);
console.log("Actual value of counter after Post Increment",counter++);



