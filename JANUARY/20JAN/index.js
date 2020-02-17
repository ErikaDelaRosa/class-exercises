// <array name> = [<value 1>, <value2>]
let arrStr = ["Hi", "good morning", "hello"]; //1st way
console.log(arrStr);
let arrInt;
arrInt = []; // 2nd way
console.log(arrInt);
arrInt[0] = 42;
arrInt[1] = 22;
console.log(arrInt);

// Array (num) // to create array with num slots
let arrString = new Array();
let arrStr2 = Array("Hi", "welcome");
console.log(arrStr2);

// Array.of() creating array
let strArr = Array.of(3);
console.log(strArr);

// Accessing using square brackets
arrInt[2] = 33;
arrInt[3] = 23;

arrInt.push(663);
arrInt.push(333);
console.log(arrInt);

arrInt.unshift(435);
console.log(arrInt);
console.log(typeof arrInt);

// FInding Items:

// Array.indexOf (<item>)
var firstNameArr = ["Ali", "Olga", "Marta"];
console.log(firstNameArr.indexOf("Nancy")); // -1 results means it doesn't exist
console.log(firstNameArr.indexOf("Ali"));

let arrStringName = [];
for (let i = 0; i <= 10; i++) {
  // i= 0
  arrStringName[i] = `Xena the warrior princess ${i}`; // arr [0] = `Hadi 0`
}
console.log(arrStringName);

// Removing items:
let funArr = ["😎", "💪🏻", "😊"];
funArr.pop(); // the last element can be removed - we do not write numbers inside the brackets
funArr.shift(); // the first element can be removed
console.log(funArr);

//let lastName = []; // we can store multiple variables
let lastName1 = [0];
lastName1[0] = "Warrior";
lastName1[1] = "of the Dessert";
console.log(lastName1);

let x = 0; //vs const - i am not able to change the value at all.
x = 2 + 2;
console.log(x);
let names = ["Hadi", "Ali", "Nancy", "Dany"]; // Array
let name = `this is long text
second line
another line`;
console.log(names.length); // index of array
console.log(name.length); // jam

// Array.slice()
console.log(names.slice(3));
// substring
console.log(names.splice(1, 3));

// Array.split()
let stringToArray = name.split(" "); //every empty space will be cut, with /n (new line);
console.log(stringToArray);

/* Declare a variable named “euroCities” and assign an array to the variable e.g. 
[“Paris”, “London”, “Valletta”, “Prague”, “Rome”]. 
Declare another variable and assign the second item of the array as a value.
2 .Change the first item in the array to “Berlin”.
3.Print the length of the array “euroCities”.
4.Remove the last item of the array “euroCities”.
5.Use an array method to add “Budapest” to the euroCities array.
Create another variable named asianCities and assign an array of at least 5 cities to the variable.*/

let euroCities = ["Paris", "London", "Valetta", "Praga", "Roma"];
let euroCity = euroCities[1];
// 2
euroCities[0] = "Berlin";
console.log(euroCities);
// 3
console.log(euroCities.length);
// 4
euroCities.pop();
console.log(euroCities.pop());
// 5
euroCities.push("Budapest");

// 6
const asianCities = ["Hong Kong", "Tokyo", "Beijing", "Manila", "Angkor Wat"];
console.log(asianCities);
/* 7. Use an array method to select items 2-4 from the
 array of asianCities and store this in another variable.*/

let newArray = asianCities.splice(1, 3);
console.log(newArray);

// Array.join ()
const arrayString = ["This", "is", "array", "was", "string"];
let stringToarr = arrayString.join(" "); //with empty space you are able to read better
console.log(stringToarr);

/* Exercise:
1.sumOfNumbers. 
Create a program that adds up the numbers in an array (of at least 3 numbers). 
Bonus: Print to screen both the sum and the product of these numbers.

2.Hello Friend Create an array filled with your friends’ and family’s names. 
Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. 
Bonus: Print the indexes of each item in the array. 
Expected output example: Mike is at index 1 of my friends array.

3.City Names. Create an array of city names. 
Loop through the array and add the city names to a string. 
Example of expected output: “Berlin, Paris, Prague, Rome”. */

//1

let numbers1 = [2, 4, 6, 7, 9];
let sumNum = 0;
let product1 = 1;
for (let i = 0; i < numbers1.length; i++) {
  sumNum += numbers1[i];
  product1 *= numbers1[i];
}
console.log(`The sum of your array is ${sumNum} and the ${product1}`);

//2
let friendArr = ["Maria", "Casilda", "Rosina", "Geno", "Paula"];
for (let i = 0; i < friendArr.length; i++) {
  console.log(`Hello ${friendArr[i]}, and he is index ${i} of names array`);
}

//3

let SpainCities = ["Madrid", "Barcelona", "Sevilla", "Malaga", "Ibiza"];
let SpainCitiesStr = "";
for (let i = 0; i < SpainCities.lenght; i++) {
  SpainCitiesStr += SpainCities[i];
  if (i == cityNames.lenght - 1) {
    SpainCitiesStr += SpainCities[i];
  }
}

/* Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. 
Examples:[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
[6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
Capitalize. Create a program that capitalises the first letter of each element in an array of names. 
Examples:
[“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
[“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
[“cynthia”, “karen”, “jaNe”, “carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]*/
