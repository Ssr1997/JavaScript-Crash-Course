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

