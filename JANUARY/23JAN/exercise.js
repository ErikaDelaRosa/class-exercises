/*function pigLatin(str) {
let translation = [];
const vowels =["a"];
let lowerCase = str.toLowerCase ();
let splitStr = lowerCase.split (" ");
for (let i = 0; i <  splitStr.length; i++) {
    let firstChr = splitStr [i][0];
    console.log.log(firstChr + "first chr");
    let remainder = splitStr[i].slice(1, splitStr[i].length);
    console.log(remainder + "remainder");

    (i ? firstChr : firstChr.toUpperCase ()) +remainder + "way";
    translation.push(firstChrVal);
} else {
    if (i == 0) {
        let firstCharRem = remainder [0];
        let wordRemainder = remainder.slice (1, splitStr[i].length);
        console.log( remainder * "remainder"); 
    }
}
}*/

// Second exercise
/*1. Multiply - Function Declaration
Create a function that multiples a number by another number.
2. Multiply - Function Declarations as Values
Rework the syntax of the above function so that the function declaration is stored as a value.
3. Multiply - Arrow Function
Rework the syntax of the function declaration so that is uses the arrow function shorthand.
4. Declarations
Create functions (using all three declarations) to check the remainder of division given two numbers.*/

let coffee = 2;
let people = 3;

function multiply (coffee , people) {   
 console.log(multiply);
};

// 
const multiply2 = function (coffee,people) {
 console.log(coffee * people);   
};

// 
const multiply3 = (coffee, people) =>  coffee * people;
   console.log (multiply3(4,9)); 
//
function div (a, b) {
    console.log(a % b);
}
div (4,2);
div(3,5); 

/*Print Exponential Values
Write a function that accepts two numbers and validate that they are numbers.
After that, the function should print y exponential values starting from x.
For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential 
values of 3.
function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

2. Fruits
Create a function named printFavoriteFruit. Declare a variable outside of the function and store your 
favorite fruit as a value. Reassign the variable within the function and print “My favorite fruit is: x”.
3. Multiply a Number by Itself
Create a function named exponent that takes two numbers as parameters. The second parameter defines how 
many times the first number should be multiplied by itself. Save the output in a variable named result.
Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not?
Comment your answer in the index.js file.*/

/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function numbers () {
    numbers = 4, 9;
    var expoValues = numbers.toExponential(3);
}
console.log(expoValues);
/* class solution*/

function printValue (x,y){
    if ((typeof x == "number") && typeof y == "number") {
        console.log(true);
        let result = 1;
        let values = "";
        for (let i = 0; i < y; i++){
            result *= x;
            values += `${result}`;
            return values;
        } 
    } else {
        console.log (false);
    }
}
console.log(printValue(4, 3));


let favFruit = 'pear'; 
function printFavoriteFruit () {
favFruit =  'watermelon';
console.log(`my favorite fruit is: ${favFruit}`) ;
}
printFavoriteFruit();

// 
function exponent (starterNum, exponent) {
    let result = 0;
    let multi = starterNum * starterNum;
    for (let i = 0; i < exponent; i ++){
        result += multi;
    }
    return result;
}
console.log(exponent(2,4));

// Spread syntax ...
let array = [1,2,34,6];
let arrayCopy = [...array]; // iam copying a variable with the 3 dots
console.log(arrayCopy); 

function sum (...args) {  // iam copying arguments 
    let array = args; 
    let result = 0; 
    for (let i = 0; i<array.length; i ++) {
        result += args [i]; 
    }
    return `the sum is ${result}`;
}
console.log(sum(3,4,5,6,7)); //if i remove 0, it will copy the array */
console.log(sum (3,4,5));
console.log(sum (8,3,4));

// create a function howManyArgs which returns the total amount of arguments passed to it

const howManyArgs = (...args) => console.log(args.length);
howManyArgs(3,4,56,6,23);

// cool functions 
(function add () {
    console.log("Hi");
})();
/*add ();*/

//// Create a function  average which accepts any amount of numbers and returns their mean average.
/*var numb = [2,3,4,5];
var sumNumb = 0;
var numbCount = numb.length;
console.log(numbCount);
var average = sumNumb / numbCnt;*/

function average (...args){
var result = 0;
for ( i = 0; i< args.length;i ++)
{ result = args[i] + result}
return result / args.length;
}


console.log(average (2,4,5,6,3));