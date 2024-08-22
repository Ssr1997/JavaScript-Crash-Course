
// const tinderUser = new Object ()

const tinderUser = {}

tinderUser.id = "6534"
tinderUser.name = "Lakshay"
tinderUser.isLoggedIn = false

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLogged"));


const regularUse = {
    email : "xyz@gmail.com",
    fullname:{
        userfullname: {
            firstname : "Shyam",
            lastname: "Kumar"
        }
    }
}
console.log(regularUse.fullname.userfullname.lastname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"d",4:"f"}

const obj3 = Object.assign({},obj1,obj2);  // Use Object.assign to merge obj1 and obj2 into a new object
console.log(obj3);

// Define an array of user objects

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "def@gmail.com"
    },
    {
        id: 3,
        email: "hij@gmail.com"
    }
]
// Access the email property of the second user object in the users array
console.log(users[1].email);



