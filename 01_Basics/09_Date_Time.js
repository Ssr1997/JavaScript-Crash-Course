let myDate = new Date()

console.log(typeof(myDate));

console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toISOString());

console.log(myDate.toLocaleString('default',{
    weekday : "long",
    month : "short"
}));

console.log(myDate.toString());
console.log(myDate.toUTCString());

let myCustomDate1 = new Date(2024, 5 , 15)
console.log(myCustomDate1.toString());

let myCustomDate2 = new Date("09-05-2024")
console.log(myCustomDate2.toUTCString());
console.log(myCustomDate2.getTime());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let myCustomDate3 = new Date()
console.log(myCustomDate3.getMonth());
console.log(myCustomDate3.getDay());
console.log(myCustomDate3.getFullYear());
console.log(`Today's date is ${myCustomDate3.getUTCDate()} and month is ${myCustomDate3.getMonth()} and year is ${myCustomDate3.getFullYear()}`);



