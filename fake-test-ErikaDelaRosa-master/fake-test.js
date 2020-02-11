/* first-fake-test
Return Keys and Values. Write a program that takes an object and returns an array which contains two 
arrays: one for the keys of the object and the other for the values of the object.*/

const Simba = {
    name : 'Simba',
    breed : 'Mainecoon'
}; 
console.log(Simba);
console.log(`My favorite cat is ${Simba.name} and is one of the biggest ${Simba.breed} in the world`);




/*Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if 
he's not.

Examples:

isWaldoHere("is there wal here ?") ➞ false isWaldoHere("I found you Waldo!") ➞ true isWaldoHere
("is wally here?") ➞ false isWaldoHere("waldo is here") ➞ true */

function isWaldoHere (text) { 
let str = "is Waldo here";
if (str == text) {
    return 'I found you Waldo!';
} else {
    return 'false';
}
};
console.log(isWaldoHere("waldo waldo"));
console.log(isWaldoHere("is Waldo here"));

/*isPrime? Create a function that returns true if a number is prime and false if it's not. NB: a 
prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: 
itself and 1. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.
Examples:

isPrime(7) ➞ true isPrime(9) ➞ false isPrime(10) ➞ false*/

const primeNumbers = ["2",3,5,7,11,13,17,19,23,29];
let number = "";
function isPrime (number) {
if ( number / primeNumbers.length == 1 || number / 1 == number) {
    return true;
} else {
    return false;
}
}; 
console.log(isPrime("3"));
console.log(isPrime("4"));


/*For the longest word. Create a function to find the longest word in a given string.
i.e. longestWord("this is a web development course") ➞ "development"*/ 

// Erika you have to make pieces of the array, then count each word of the array, them compare them and print the longest.

const str = "";

function longestWord (str) {
    for (let i = 0; i > str.split; i++) {
    return str.split;
    }
};

longestWord("this is a web development course");

