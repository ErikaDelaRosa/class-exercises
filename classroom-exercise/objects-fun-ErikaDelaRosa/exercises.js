/*1. Check if a number is within a given range. Write a program that checks if a number is within the 
range of an object's min and max properties. Assume min <= max is always true.

Examples:

4, { min: 0, max: 5 }) ➞ true
4, { min: 4, max: 5 }) ➞ true
4, { min: 6, max: 10 }) ➞ false
5, { min: 5, max: 5 }) ➞ true */

// Erika's solution

console.log("ex 1");

function sorteo (num, min, max) {
    if (num < min && max > num) {
      return false;   
} else {
    return true;
}
}; 
console.log(sorteo(4,0,5));
console.log(sorteo(4,4,5));
console.log(sorteo(4,6,10)); 
console.log(sorteo(5,5,5));

// class solution:

let objRa = {min:10, max:11};
function fun (num, obj) {
    return num >= obj.min && num <= obj.max; 
}
console.log(fun(4, {min : 0, max: 5}));


/*2. Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a 
player can earn from the tiles in their hand. Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, 
{ tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, 
{ tile: "E", score: 1 } ]

The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28 */ 
console.log("exercise 2");

let arr = 
[{ tile: "N", score: 1 }, 
{ tile: "K", score: 5 }, 
{ tile: "Z", score: 10 },
{ tile: "X", score: 8 },
{ tile: "D", score: 2 }, 
{ tile: "A", score: 1 }, 
{ tile: "E", score: 1 }];

function scrabble (){
    let box = 0;
for (let i = 0; i < arr.length; i++ ) {
   result = box += arr[i].score; 
}
console.log(`The player score is ${box}`);
};
scrabble(arr);

/*3. Is it an empty object? Write a program that returns true if an object is empty, and false if otherwise.

Examples:

{} ➞ true
{a: 1} ➞ false */

console.log("ex 3");

let object = [{}];

function bottle () { 
if (object === [{}]) {
   return true; 
} else {
    return false;
}
}; 
bottle ({});
console.log(bottle(object));

// class solution:

function isEmpty(obj) {
    return Object.keys(obj).length == 0;

}

/*4. Free Shipping. Create a function that determines whether an online order should get free shipping. An order gets 
free shipping if the total cost of items exceeds €50.

Examples:

freeShipping({ "Sponge": 3.50, "Soap": 5.99 }) ➞ false
freeShipping({ "Surround Sound Equipment": 499.99 }) ➞ true
freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }) ➞ false */ 
console.log("ex 4"); //half my solution, half class 

let values = [
    {"Sponge": 3.50 },
    { "Soap": 5.99 },
    { "Surround Sound Equipment": 499.99 },
    { "Wool": 13.99},
    {"Knitting Needles": 15.50},
    {"Bag": 13.99 }];

function freeShipping(obj){
    let values = Object.values(obj);
    let result = 0;
for ( i = 0; i < values.length ; i++){
    result += values[i];
}
return result > 50;
console.log(values);
};
console.log(freeShipping({Sponge: 3.50, Soap:5.99}));
console.log(freeShipping({Sponge: 40, Soap: 12 }));

/* 5. Programming Object.

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
Write the command to add the language "Go" to the end of the languages array.

Change the difficulty to the value of 7.

Using the delete keyword, write the command to remove the jokes key from the programming object.(need Google)

Write a command to add a new key called isFun and a value of true to the programming object.

Using a loop, iterate through the languages array and console.log all of the languages.

Using a loop, console.log all of the keys in the programming object.

Using a loop, console.log all of the values in the programming object.

Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning 
the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what 
is printed if we console.log an object method without calling it and why.

Bonus:

Make sure that any other code cannot delete or change properties of the object.(need Google)*/ 

console.log("exercise 5"); 
// class solution, I did not arrive to this exercise: 

programming.languages.push('Go');

programming.difficulty = 7 ;

delete programming.jokes;

programming.isFun = true;

programming['isFun'] = true;
let array = programming.languages; 
for (let i = 0; i < array.length; i++);
console.log(array[i]); 

let programmingKeys = Object.keys(programming);
 for (let key in programmingKeys) {
     console.log(key); 
 }; 

 let programmingKeys = Object.keys(programming);
 for (let [key,value] in programmingKeys) {
     console.log(value); 
 }; 

programming.is = function () {
    if(programming.isChallenging && programming.isRewarding) {
        return `Learning the programming languages ${programming.languages} is rewarding the challenging`; 
    } else {
        return `Sorry something went wrong`;
    }
}; 
console.log(programming.isTrue());

Object.freeze(programming); 