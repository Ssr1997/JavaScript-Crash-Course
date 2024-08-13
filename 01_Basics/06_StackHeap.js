// Stack Memory (Primitive DataTypes)
/* Stack memory is a data structure used to manage the execution of functions and the storage of primitive data types like numbers, strings, and booleans. 
The stack operates in a Last-In, First-Out (LIFO) manner, meaning the last item added is the first one to be removed.
*/

let userName1 = "Shivam"

// This creates a copy of the value of username1 which is "Shivam" & assingn it to a new memory location in stack.
let userName2 = userName1

// Here, userName2 is reassigned to the string "Neha" means the copy of the value of username1 has been changed. 

userName2 = "Neha"

/*This change doesn't affect userName1 because strings in JavaScript are primitive data types,and when assigned,
they are copied by value.
*/

console.log(userName1);
console.log(userName2);

// Heap Memory (Non-Primitive DataTypes)
/*
   Heap memory is used for dynamic memory allocation. This means that memory is allocated as needed and can grow as required.
   Here when a function is called by reference, 
   it means that the function receives a reference to the variable rather than a copy of the variable. 
   This allows the function to modify the original variable's value.
*/

let userOne = {
    email : "abc@gmail.com",
    password : "123"
}

/* The variable userTwo is assigned the reference to the same object as userOne. 
This means userTwo and userOne point to the same object in memory.
*/

let userTwo = userOne

// Changing the email property of userTwo also affects userOne because both variables reference the same object.

userTwo.email = "xyz@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


