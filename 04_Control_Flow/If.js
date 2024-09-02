const isuserLoggedIn = true
const temperature = 42

if(temperature === 41){
    console.log("Temperature is less tahn 50");
}
else{
    console.log("Temperature is greater than 50");
}
console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

const score = 200
if(score > 100){
    let power = "fly"
    console.log(`User power ${power}`);
}
// console.log(`User power ${power}`);

const balance = 1000

if(balance < 500){
    console.log("less than 500");
}
else if (balance < 300){
    console.log("less than 300");
}
else if (balance < 700){
    console.log("less than 700");
}
else {
    console.log("less than 1200");
}

const userLoggedin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedin && debitCard && 2==3){
    console.log("Allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In");
}