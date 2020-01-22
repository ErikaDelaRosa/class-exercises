// Array.isArray(arr)
const names = ["Ali", "Hadi", "Olga"];
let x = 1;
console.log(Array.isArray(names)); //ask if it is an array

// Array.includes ()
console.log(names.includes("Hadi")); // if there is included
console.log(names.indexOf("Hadi")); // show where is located

//Array.reverse () // Reverse the order of the things, i can use it on array and nomal strings
let rev = names.reverse();
console.log(rev); // reverse the whole index

//Array.concat()
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arrTotal = arr1.concat(arr2);
console.log(arrTotal);

// Array.filter() //
let result1 = names.filter(name => name.length == 4);
console.log(result1);

//Array.find() //return to the value of the first element
let result2 = names.find(name => name[0] == "A");
console.log(result2);

//Array.map // creates new array
const intArray = [2, 3, 4, 5, 6];
let result3 = intArray.map(x => x + 1);
console.log(result3);

/*Reverse the string: “JavaScript”.
Make an array of your siblings’ names or your favorite movie characters’ names.
Make an array of your parents’ names.
Combine these two arrays.
Add your pets’ names.
Reverse the order of the array.
Access one of your parents’ names.
Update the name of one of your parents.*/

let movies = ["Aladdin", "Snowwhite", "Frozen"];
let papas = ["Paco", "Isabel"];
let combine = movies.concat(papas);
console.log(combine);
let pets = ["Simba", "Tavi"];
let rev1 = pets.reverse();
console.log(rev1);
let result4 = papas.find(papas => papas[1] == "I");
console.log(result4);

///////
