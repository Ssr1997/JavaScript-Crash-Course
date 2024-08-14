const name = "Shivam"
const repoCount = 1

/* Inside the template literal ` `, ${name} and ${repoCount} are placeholders,
 that are replaced by the values of the variables name and repoCount, respectively.
 */
console.log(`Hello my name is ${name} & my repository count is ${repoCount}`); // String Interpolation

/* new String("Shivam/Neha"): This creates a String object with the value "Shivam/Neha". 
Unlike a primitive string (e.g., "Shivam/Neha"), a String object has additional methods and properties.
*/
const string1 = new String("Shivam/Neha")

console.log(string1[6]);
console.log(string1.length);
console.log(string1.toUpperCase());
console.log(string1.charAt(3));
console.log(string1.indexOf("N"));
/* The prototype of a String object includes methods and properties available to all String instances. 
   It will display the prototype object, which typically includes methods like toString, charAt, concat, etc.
*/
console.log(string1.__proto__)

const subString = string1.substring(4,8);
console.log(subString);

const sliceString = string1.slice(-6,7);
console.log(sliceString);

const string2 = "    Neha/Shivam    "
const trimString2 = string2.trim()
console.log(trimString2);

const url = "https://urladblock%30off.com"
console.log(url.replace("%30","70%"));
console.log(url.includes("adblock"));
console.log(url.split("%"));




