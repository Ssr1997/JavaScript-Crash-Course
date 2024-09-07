// An array of numbers
const myNums = [1, 2, 3]

// Using reduce with a function to accumulate values
const myTotal = myNums.reduce(function(acc, curval) {
    // Logging the current state of the accumulator and the current value
    console.log(`accumulator : ${acc} & currentvalue : ${curval}`);
    
    // Accumulating the sum by adding the current value to the accumulator
    return acc + curval
}, 69) // Initial value of the accumulator is set to 69
console.log(myTotal); // Logs the final accumulated value

// Alternative syntax: Using an arrow function for the reduce operation
const myTotal2 = myNums.reduce((acc, curval) => acc + curval, 0)
// Initial value of the accumulator is set to 0
console.log(myTotal2); // Logs the final accumulated value

// An array of objects representing items in a shopping cart
const shoppingCart = [
    { itemName: "js course", price: 999 },
    { itemName: "python", price: 2999 },
    { itemName: "data science", price: 5999 }
]

// Using reduce to calculate the total price of all items in the cart
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
// Initial value of the accumulator is set to 0
console.log(priceToPay); // Logs the total price of all items
