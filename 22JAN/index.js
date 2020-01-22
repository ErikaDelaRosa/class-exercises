//
const names = ["Xena", "Gabriel", "Ares", "Afrodite"];
//const newArr = names.map();

// array.reduce - is a call back function
// accumulator is the box
// current value
const numArr = [1, 2, 3, 4, 5];
const reducer = (acc, cur) => acc + cur; // acc = 0, cur = 1
console.log(numArr.reduce(reducer)); // if i mention a number (), that will be my acc instead of starting from zero.
//call back is a function inside a parameter

//call stack
function first(callback) {
  return callback;
}
function callback(callTwo) {
  return callTwo;
}
function callTwo() {
  return "HI";
}
console.log(first(callback(callTwo())));

// our best friend
function display(str) {
  console.log(str);
}
const print = str => console.log(str);
print("Hadi");

/* funciton <name> - the order of the variables must be the same 
as you planned */
function yellow(val, val2) {
  const x = 100;
  const y = 200;
  console.log(x / y + val + val2);
}
yellow(2, 3);
function pink(name, age = 10, array) {
  // 10 is the value if the user doesnt enter info

  console.log(`hi ${name}, you are a very young ${age}`);
}
pink("Ali", 20);

/*Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:
For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
If the number cannot be divided evenly by 4, simply return the number.
The given integer will always be equal to or greater than 1.
Include the given number (the number in the parameters).
Examples:
amplify(4) ➞ [1, 2, 3, 40]
amplify(3) ➞ [1, 2, 3]
amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
11:18
One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
Examples:
unique([3, 3, 3, 7, 3, 3]) ➞ 7
unique([0, 0, 0.77, 0, 0]) ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0*/
