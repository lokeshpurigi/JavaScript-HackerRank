// Write your code below this line
/**
 * Write a simple JavaScript program to join all elements of the following array into a string.
Create a new array whose elements is in uppercase of words present in the original array.
Use the .map() method on the heros array to return a new array.

The new array should rename the 'name' key to 'hero'.
The 'name' key should not appear in the new array.
The new array should have a new key added called (id).
The key 'id' should be based on the index.
Write JavaScript statements that will produce the output mentioned in output format from array in input format
Input Format

let myColor = ["Red", "Green", "White", "Black"];
let strings = ["avengers", "captain america", "ironman", "black panther"];
const heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' } ];
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
 * 
 */




let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());
console.log(myColor.join('+'));



let strings = ["avengers", "captain america", "ironman", "black panther"];
console.log(strings.map(string => string.toUpperCase()));



// 2nd

const heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' } ];
const arr = heros.map((hero, index) => {
    return { id: index, hero: hero.name }
});
console.log(arr);

//3rd

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
console.log(inputWords.slice(3,7))
