// swicth (<expression>){...}

const color = "black";
switch (color) {
  case "Pink":
    console.log("cool");
    break;
  case "black":
    console.log("Nice");
    break;
  case "White":
    console.log("sooo nice");
    break;
  default:
    // we use default when the solution is not listed
    console.log("Noo that is crazy");
}

const x = 10;
const month = 7;
switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("Apr");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("Jul");
    break;
  case 8:
    console.log("Aug");
    break;
  case 9:
    console.log("Sep");
    break;
  case 10:
    console.log("Oct");
    break;
  case 11:
    console.log("Nov");
    break;
  case 12:
    console.log("Dec");
    break;
  default:
    console.log("I love spring");
}

const a = 33;
switch (a) {
  case 1999.22:
    console.log("fine");
    break;
  case 22.22:
    console.log("this is wrong");
    break;
  default:
    console.log("so this is not fun anymore");
}

// switch vs else if

const num = 1;
if (num <= 10 && num >= 0) {
  console.log("it is number in the range of 0-10");
}
if (num == 4) {
  console.log(num);
}
if (num == 3) {
  console.log(num);
} else {
  console.log("it is new num");
}

const elements = 2;
switch (elements) {
  case 1:
    console.log("this is fire");
    break;
  case 2:
    console.log("water");
    break;
  default:
    console.log("The elements are fire, air, earth and wind");
}
/* exercise: Let’s play mini FizzBuzz! For any given number, if the number is:
divisible by 3, print “Fizz”.
divisible by “5", print “Buzz”.
divisible by both 3 and 5, print “FizzBuzz”.
That is, if any of the above conditions apply, print the above words instead of the number.
Otherwise, just print the number.*/

const number = 27;
if (number % 3 == 0 && number % 5 == 00) {
  console.log("FizzBuzz");
} else if (number % 3 == 0) {
  console.log("Fizz");
} else if (number % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(`Noooo ${number}`);
}

const numb = 500;
switch (numb) {
  case 1:
    numb / 3 == 0;
    console.log("Fizz");
    break;
  case 2:
    numb / 5 == 0;
    console.log("Buzz");
    break;
  case 3:
    numb / 3 == 0 && numb / 5 == 0;
    console.log("FizzBuzz");
  default:
    console.log(numb);
}

/* HOME EXERCISES */
/* Declare two variables: “a” with the value of true, and “b” with the value of false.
Check the result of:
a) a AND b.
b) a OR b.
c) NOT (a AND b).
Declare three more variables “x”, “y”, “z”. Give these variables number values.
Check the result of whether:
a) x is greater than z AND x is greater than y.
b) x is NOT equal to y.
c) z is less than y OR z is greater than x.
d) x is equal to z OR x is NOT equal to y.
e) x is greater than or equal to 10 AND y is less than or equal to 10.
f) x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.*/

let apple = true;
let banana = false;
console.log(apple && banana);
console.log(apple || banana);

let xi = 3;
let y = 5;
let z = 7;
// a
console.log(xi > z && xi > y);
//b
console.log(xi != y);
//c
console.log(z <= xi || z > xi);
//d
console.log(xi == z || xi !== y);
//e
console.log(xi >= 10 || xi <= 10);
//d
console.log(xi * z <= 100 || xi * y > 100);

/* Exercise : 1. Calculate the perimeter of a square. Assume each side is 4.75cm.
 2. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
 3. Calculate the area of a square. Each side is 5cm.
 4. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
 5. Calculate the volume of a cube. Length of each side is 9cm.
 6. Calculate the three bills including tips: €22.35 + 10% tip €26.67 + 15% tip €35.92 + 20% tip. */

//1
let side = 4.75;
let square = side * 4;
console.log(square);
//2
let trside1 = 5;
let trside2 = 6;
let trside3 = 7;
let triangle = trside1 + trside2 + trside3;
console.log(triangle);
//3
let sqside = 5;
console.log(sqside * sqside);
//4
let sumtrg = triangle / 2;
let trgarea = Math.sqrt(
  sumtrg * ((sumtrg - trside1) * (sumtrg - trside2) * (sumtrg - trside3))
);
console.log(trgarea);
//5
let cubeside = 9;
let cubevolume = cubeside * cubeside * cubeside;
console.log(cubevolume);
// 6
let bill1 = 22.35;
let bill2 = 26.67;
let bill3 = 35.92;

let percentagebill1 = (bill1 / 100) * 10;
let totalbill1 = percentagebill1 + bill1;
console.log(`The total amount from bill1 is ${totalbill1}`);

let percentagebill2 = (bill2 / 100) * 15;
let totalbill2 = percentagebill2 + bill2;
console.log(`The amount the table two paid is ${totalbill2}`);

let percentagebill3 = (bill3 / 100) * 20;
let totalbill3 = percentagebill3 + bill3;
console.log(`The amount paid for table number 3 is ${totalbill3}`);
