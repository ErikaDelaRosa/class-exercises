let str = "this is long text";
console.log(str.slice(3));
let str1 = "Hi";
let str2 = "ERika";

console.log(`${str1} ${str2}`);
console.log(str1.toUpperCase());
console.log(str2.toLowerCase());
console.log(str.includes("java"));

let x = true;
true ? console.log("cool") : console.log("nope");

// const: you can not change the value
const dr = 2;
//

// local Global

var global = "Hi I'm global";
console.log(global);
function sum() {
  let local = "Hi i'm local";
  console.log(global);
  console.log(local);
}
sum();

// Conditional assignment with the ternary operator
let kid = 2;
console.log(kid > 16 ? "Party" : "Home Party");
console.log(true ? "Hey thats nice" : "oh nooooo");

//bracket notation [0]

// '/' , '/"' , '/n'
console.log("Hi I am /n Erika");
// we use /n for a new line
// .trim()
let str4 = "Erika       ";
console.log(str4.trim());
function print(str) {
  console.log(str);
}
print("Hadi");
// numbers
let z = 3;
let w = 2;
console.log(z % w);

// integers vs floats

let int1 = 11;
let int2 = 1.5;
console.log(int1 + " " + int2);

// isNan
console.log(!isNaN(int1) ? "yeah it is" : "Nope sorry");

// converting strings into numbers: `parseInt()`, `parseFloat()`
let strInt = "1e";
let strInt2 = "2";
let result = strInt + strInt2;
let newNum = parseInt(strInt, 16);
console.log(newNum);

// Exercise:

let name = "Taylor";
let age = 22;
let longStr = name + age;
console.log(longStr);

// Check if the following numbers are even numbers. Highly requested by companies.
let numOdd = 30 % 2;
console.log(numOdd == 0 ? "is even" : "is odd");

///

let message = "This is Berlin";
let firstChr = message[0];
let lastChr = message[message.length - 1];
console.log(lastChr + message + firstChr);

/// integer

let integer = "1005";
let reallNum = parseInt(integer);
console.log(reallNum);

let float = "10.05";
let reallFloat = parseFloat(float);
console.log(reallFloat);

// Modulo '%'
let lastNum = 4 % 2;
console.log(lastNum);

// * + - / ** --

let q = 3;
let s = 4;
let suma = q + s;
let div = q / s;
let mul = q * s;
console.log(suma, div, mul);
console.log(q++);

// Exponentiation ** the power of (new added)

let power = 2 ** 2;
console.log(power);

// Math.floor()
let float1 = 1.1;
let realIni = Math.floor(float1);
console.log(realIni);

// math.ceil()
let realIni2 = Math.ceil(float1);
console.log(realIni2);

// Math.max ()
console.log(Math.max(800, 1, 3333.95));
console.log(Math.max(x, z, q, 101));

// Math.min()
console.log(Math.min(4, 5, 88, 9, 0.2, 299));

// exercise:
let strInt1 = "123";
console.log(parseInt(strInt1));

//

let strFloat1 = "130.7";
console.log(parseFloat(strFloat1));

//
let isDog = false;
console.log(isDog ? "pat pat" : "find me a dog to pat!");
//
let speedCheck = "80";
let speedLimit = "50";
console.log(
  speedCheck > speedLimit
    ? "you are going too fast"
    : "Your driving below your speed limit, Oma"
);
//
let aged = "15";
console.log(aged < 16 ? "serve butter beer" : "serve beer");
//
let Student = false;
console.log(Student ? "ticket cost 5 euro" : "ticket cost 12 euro");
//
let var9 = "okMarie";
str5 = "cake";
console.log(var9.includes("cake") ? "let them eat cake" : "oh, brother");
//
