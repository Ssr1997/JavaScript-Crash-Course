console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);

/* The == operator in JavaScript is known as the equality operator.
 It compares two values for equality after performing type coercion if necessary. 
 This means that before comparing, JavaScript will convert the values to the same type if they are not already.
 Type Coercion: The == operator converts the values being compared to a common type. 
 For example, "2" == 2 returns true because the string "2" is converted to the number 5 before the comparison.
 */
console.log("2"==2);

console.log(2!=1);

console.log("2">1);
console.log("02">1);

console.log(null>=0);
console.log(null<=0);
console.log(null==0);

console.log(undefined>=0);
console.log(undefined<=0);
console.log(undefined==0);

// The === operator in JavaScript is known as the strict equality operator.
// It only returns true if both the type and the value are identical.
// "2" === 2 returns false because one is a string and the other is a number, despite having the same value.
console.log("2" === 2);
