// An array of coding languages
const coding = ["js", "ruby", "java", "python", "cpp"]

// Using forEach to iterate over each item in the array
// forEach doesn't return a new array; it simply executes the provided function for each item
const values = coding.forEach((item) => {
    // This will log each item to the console
    // console.log(item);
    return item; // This return value is ignored by forEach
})
// values will be undefined because forEach does not return a new array
console.log(values);

// An array of numbers
const myNums = [1,2,3,4,5,6,7,8,9,10]

// Using filter to create a new array with elements greater than 5
const newnums = myNums.filter((nums) => nums > 5)
console.log(newnums); // Logs [6, 7, 8, 9, 10]

// Another array of numbers
const myNums2 = [11,12,13,14,15,16,17,18,19,20]

// Using filter to create a new array with elements less than 15
const newnums2 = myNums2.filter((num) => {
    return num < 15
})
console.log(newnums2); // Logs [11, 12, 13, 14]

// Creating an empty array
const mynums3 = []

// Using forEach to iterate over myNums2
// Adding numbers greater than or equal to 15 to mynums3
myNums2.forEach((num) => {
    if(num >= 15){
        mynums3.push(num)
    }
})
console.log(mynums3); // Logs [15, 16, 17, 18, 19, 20]

// Array of book objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]

// Filtering books to get only those in the Science genre
let userbooks = books.filter((bk) => bk.genre === "Science")
console.log(userbooks); // Logs books with genre 'Science'

// Filtering books to get those published after 1995 and in the History genre
userbooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userbooks); // Logs books with genre 'History' and published after 1995
