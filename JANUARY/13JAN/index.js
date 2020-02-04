let x = 33.33333;
console.log(x.toFixed(4));
let old, nice, crazy;
old = true;
nice = false;
crazy = !3 < 3;
console.log(crazy);
console.log(old !== nice);

// Boolean inversion

//givenName || firstname || "abc";

console.log("Abc");
let givenName, firstName;
firstName = "Erika";
console.log(givenName || firstName || "Abc"); // orders matter

// Nancy does 500 euro per week. How much does Nancy makes every year?
const nancySalary = 500 * 52;
console.log(nancySalary);
console.log(`Ǹancy salary ${nancySalary} euro in one year`);

const nancyHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
console.log(nancyHours);
console.log(nancyHours / 10);
console.log(`Nancy average hours worked per week is ${nancyHours / 10}`);

// if (<boolean>) { }
let a, b, c;
a = 1 === 4;
b = 20 < 100;
c = true;
let counter = 0;
let logIn = false;
if (a == b && c) {
  console.log("nice");
  counter = 2;
  logIn = true;
} else {
  console.log("not cool");
  counter = 3;
  logIn = false;
}
console.log(logIn, counter);

// Exercise.A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.

let totalTest = 85 * 6;
let total5th = 75 + 70 + 85 + 90 + 100;
let sixthTest = totalTest - total5th;
console.log(`The sixth test result is ${sixthTest}`);

// For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class?
//Expected output: James needs a minimum of --% to get an 80% average.
const firstTotalAve = 80 * 9;
const currentAve = 78 * 8;
let diffTotal = firstTotalAve - currentAve;
console.log(`James needs a minimum of ${diffTotal} to get 80% average.`);

//Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99).
//Print true if either of them are in the range.
let inte1 = 4;
let inte2 = 50;

if ((inte1 >= 50 && inte1 <= 99) || (inte2 >= 50 && inte2 <= 99)) {
  console.log("True"); //without string, is a boolean
}
//Check if three given integer values are in the range 50 to 99 (inclusive).
//Print true if one or more of them are in the range.

// exercise 3: Declare the variables a, b and c, and give them number values.
//Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let malaga = 35;
let madrid = 65;
let sevilla = 78;
console.log(Math.max(malaga, madrid, sevilla));

// exercise 4: Create a new string adding “Py” in front of a given string. If the given string begins with “Py” then print the original string.
let str = "Python";
if (str.substring(0, 2) === "Py") {
  console.log(str);
}

// exercise 5: Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let sumInt = inte1 + inte2;
console.log(sumInt);
if (sumInt > 50 && sumInt < 80) {
  console.log(65);
} else {
  console.log(80);
}

// exercise 6:Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

let int3 = 3;
let int4 = 5;
let numDiff = Math.abs(int3 - int4);
let numSum = int3 + int4;
console.log(numDiff);
if (numSum == 8 || numDiff == 8) {
  console.log(true);
}

// exercise 7: Check whether either one of two integers is 15, or if their sum is 15.
// If one of these is the case, print true.
let int5 = 5;
let int6 = 10;
let intSum = int5 + int6;
if (int5 == 15 || int6 == 15 || intSum == 15) {
  console.log(true);
}

// exercise 8:Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let numbr1 = 1;
let numbr2 = 7;
if (numbr1 % 7 == 0 || numbr1 % 1 == 0 || numbr2 % 7 == 0 || numbr2 % 7 == 0) {
  console.log(true);
}

let numbr = 11;
console.log(77 % numbr == 0 ? " multiple" : " nOt multiple");

// exercise 9:Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
let pasta = 300;
let sushi = 300;
let calories = (pasta + sushi) * 3;
if (pasta === sushi) {
  console.log(calories);
}

// exercise 10: Calculate the difference between a specified number and 19.
//Print double the difference if the specified number is greater than 19.
let s = 3;
let numDiff1 = Math.abs(s - 19);
let numDo = numDiff * 2;
if (numDiff1 > 19) {
  console.log(numDo);
}

// Make a variable for firstName and age and give each variable values.
// Create an if/else statement to check whether the person’s age is less than 13. If so, print “firstName is a child”.
// If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”. If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”.
// If none of these conditions apply, print “firstName is a adult”.

let firstNam;
firstNam = "Bruce";
let age = 35;
if (age > 13) {
  console.log(`${firstNam} is a child`);
  if (age => 13 && age < 20) {
    console.log("you are a teenager");
  }
} else {
  console.log(`${firstNam} are an adult`);
}
//Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).

// Store Mark’s and John’s mass and height in variables..

let markMass = 86;
let markHeight = 1.86;
let jhonMass = 96;
let jhonHeight = 1.9;

// Calculate both their BMIs and store their BMIs in variables.

console.log((markMass / markHeight) * 2);
console.log((jhonMass / jhonHeight) * 2);

let markBMI = (markMass / markHeight) * 2;
let jhonBMI = (jhonMass / jhonHeight) * 2;
// Create a boolean variable containing information about whether Mark has a higher BMI than John.

if (markBMI == jhonBMI) {
  console.log("you are doing great");
} else {
  console.log("great job - keep trainning");
}

// Print a string to the console containing the variable from step 3 using string interpolation.
//(e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).

let str1 = "Is Jhons BMI higher than Marks ? ";
let str2 = "why yes, it is";

console.log(str1 + str2 + jhonBMI + " it is");

// Create an if statement which prints the name and BMI of the person with the highest BMI

let BMI = 98;
if (BMI => 98) {
  console.log("Jhon");
} else {
  console.log("Mark");
}
