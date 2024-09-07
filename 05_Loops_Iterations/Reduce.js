const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(acc,curval){
    console.log(`accumulator : ${acc} & currentvalue : ${curval}`);
    
    return acc + curval
},69)
console.log(myTotal);

const myTotal2 = myNums.reduce((acc,curval) => acc+curval,0)
console.log(myTotal2);

const shoppingCart = [
    { itemName: "js course",
      price: "999"
    },
    { itemName: "python",
      price: "2999"
    },
    { itemName: "data science",
      price: "5999"
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay);
