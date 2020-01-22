// create an array

const fruitStore = ["apple", "watermelon", "kiwi", " pears"];
console.log(fruitStore.length);

//find an element inside the array

var find = fruitStore[0];
console.log(find);
var last = fruitStore[fruitStore.length[3]];
console.log(last);

// add an element at the end

const newFruits = fruitStore.push("Orange");
console.log(newFruits);
console.log(fruitStore);

// delete an element at the end

const remFruits = fruitStore.pop();
console.log(fruitStore);

// add an element at the beginning

const newArrivals = fruitStore.unshift("Banana");
console.log(fruitStore);

// delete an element at the beginning

const badFruit = fruitStore.shift();
console.log(fruitStore);

// find an element in the index

var position = fruitStore.indexOf("apple");
console.log(position);

// delete elements with index

var vegetables = ["tomatoes", "onion", "garlic", "zuchini", "pepper"];
var badVegetables = vegetables.splice(2, 3);
console.log(badVegetables);

var copyVegetables = vegetables.slice(1);
console.log(copyVegetables);

// Array includes

var dessert = ["tiramisu", "gelato", "cake", "biscuit", "cream"];
console.log(dessert.includes("tiramisu"));

// array reverse. Reverse the order of things

let reverse = dessert.reverse();
console.log(reverse);

// Array concat. creates a chain

var starter = ["pasta", "soup", "burger"];
var main = ["tortilla", "nachos", "fajitas"];
var sweet = ["cheese", "pudding", "biscuits"];
let menuComplete = starter.concat(main);
console.log(menuComplete);
let menuAndsweet = menuComplete.concat(sweet);
console.log(menuAndsweet);

// array filter - like in the shops

var fabMeal = starter.filter(starter => main.lenht == 5);
console.log(fabMeal);

// array find - return to the value of the first element

let sweetEx = sweet.find(sweet => sweet[2] == "i");
console.log(sweetEx);
