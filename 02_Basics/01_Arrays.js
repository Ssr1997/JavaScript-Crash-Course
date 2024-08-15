/* An array is a linear data structure that holds a collection of elements, all of the same data type, 
arranged in a sequential manner. 
Each element in an array is identified by an index or a key, allowing for efficient access and modification of data.
Arrays can contain elements of various data types, including numbers, strings, objects, and even other arrays. 

Dynamic Sizing: Arrays in JavaScript are dynamic, meaning their size can be adjusted at runtime.
Index-Based Access: Elements are accessed using numerical indices, starting from 0.
Flexible Element Types: Arrays can hold different types of elements simultaneously, such as numbers and strings.
*/

const arr1 = [5,8,3,7,9,4]
console.log(arr1);
console.log("Element at 4rth index is : ",arr1[4]);
console.log("Length of arr1 is :", arr1.length);
arr1.push(6,1)
arr1.pop()      // Pops the last element of array, here in this case which is 1.
arr1.unshift(2)  // Adds the element at the start of array.
console.log(arr1);

const arr2 = new Array(3,8,4,3,9)
arr2.shift()   // Adds the first element of array.
console.log(arr2);
console.log(arr2.includes(4));
console.log(arr2.indexOf(3));

// Array Join
const arr3 = arr2.join()
console.log(arr3 , typeof(arr3));

// Array Slice vs Array Splice

arr4 = [6,3,7,8,1,9,5]
console.log("Original Array:", arr4);

// Array Slice : Used to extract a portion of a string or array without modifying the original string or array.
const arr5 = arr4.slice(2,5)
console.log("Sliced arr5 is :", arr5);
console.log("Array after slice:", arr4);

// Array Splice : Used to modify arrays by adding, removing, or replacing elements.
const arr6 = arr4.splice(2,5)
console.log("Spliced arr6 is :", arr6);
console.log("Array after splice:", arr4);

