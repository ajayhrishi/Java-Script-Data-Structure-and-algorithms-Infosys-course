let a = [];
console.log(a.length);

let string = "Hello there. This string is for just testing the string split function in a different way";
let wordarray = string.split(" "); /*will split the string to an array */

console.log([...wordarray]);

let joined = wordarray.join();/* will joine the array elements to a string using the , */

console.log(joined); 

let tostring = wordarray.toString();
console.log(tostring);/* will joine the array elements to a string using the , same as the join function*/


let wordarray2 = "This is the second array I am creating to test the .concat();"
wordarray2 = wordarray2.split(" ");

console.log([...wordarray2]);

let combained = wordarray.concat(wordarray2);
console.log([...combained]);



let numbers = [2,1,4,55,64,3,6,87,34,56];

console.log(wordarray.toString());/* will output the array like a string without converting it. */
