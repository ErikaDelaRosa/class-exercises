// compound object

const objects = [{
    name: "Ali",
    lastName : "see"
}];
[{
    name: "Ana",
    lastName: "Aton"
}];
[{
    name: 'Mary',
    lastName: 'Scotland'
}]; // every index is something else 

// first way to call
//objects[1].printOut();

// second way to call
//objects[1]["printOut"]();

// clones vs references
let str = 'Hi';
let newStr = str;
console.log(newStr); // cloning
 
str = "something else";
console.log(newStr);

// Object, array, function 
const names = ['Ann','Mary','Nicole','Tessa'];
let newArr = names;
console.log(newArr);
newArr[1] = "new";
console.log(names);
const car = {
    name : 'Ford',
    year: 2020,
    color: 'red',
};
const newObject = car;
newObject.name = 'BMW';
console.log(newObject.name);

//Shallow copy using... (spread operator)
let namesArr = ['Ann','Mary','Nicole','Tessa'];
let namesArr1 = [...namesArr]; // how to copy the full array using the dots. 
//newNamesArr[0]= "Nancy";
//console.log(newNamesArr);
console.log(namesArr);

// Shallow copy list using .concat()
let newNames2 = [].concat(namesArr);

// Shallow copy using .slice()
let newNames3 = namesArr.slice(0); // 0 because i will start from the very start element 
console.log(newNames3);

// Shallow copy using .assign() - for an object
const newObject2 = Object.assign(car); 
const newObject3 = {...car}; // every property will be clone 

// Infinity function call

// Recursion - 2 task for this function: calling itself and stop calling itself. we use for de-cloning. 
const factorial = function (num){
//console.log(num);
if ( num == 1) {
    return 1;
}
return num * factorial(num-1);
};
console.log(factorial(8));// iam calling the function with a value 
  
//Deep copy using recursion
function deepCopy (object) {
    if(typeof obj == 'object'){
        return Object.keys(obj)
        .map(key => ({ [key] : deepCopy(obj[key])})) // return a value and that value is an object
        .reduce((acc,cur) => Object.assign(acc,cur),{})
    } else if (typeof obj == "array"){
        return; // something
    }
    return obj;
}
const newObj = {1 : "hi", 2: "how are you",3: "today?", fun: () => console.log ("Hi")}; 
const superNewObj = deepCopy(newObj);
console.log(superNewObj);

// cool console 
console.log(console);
console.table(newObject);



