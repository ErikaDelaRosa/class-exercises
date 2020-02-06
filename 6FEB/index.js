// 
function newUser (fname, lname, age, nope) { //outer function 
    let result = {
firstName: fname , // object. The second part I am assigning parameters 
lastName: lname, 
old: age,
funThingsToDo: nope,

printOut : function (){ // this is  FUCKING method! // inner function as method. Method always inside of and object
    // inner function as method 
return `${this.firstName} you are very young ${this.old}` // this means THIS current object i'm dealing with 
}
    }
    //this is the inner function call  
    return result.printOut(); // we are executing the method from that object 
}

// this is function call
let x = newUser("Ali","Smith",45,"cooking"); 
console.log("this is x");
console.log(x);
console.log(x.old); 

// here i call the function . 
console.log(newUser("Ann","Queen",33,"dance")); 

// arrays of objects
/*let arr = {
    {1: "Ali", age: 22}, 
};
console.log(arr);*/
let newArr = [1,3,4,5,6];

newArr.filter((value,index)=> {console.log(value, ' is at index', index)});

newArr.reduce((result, current) => {console.log('sum so far:', result);return result + current;},0);

/*Exercise: .find() and .filter()
1. Which is the first animal with more than 3 letters?
2. Find all animals with more than 3 letters. */

const animals = ['cat','dog','horse','leopard','tiger'];
console.log(animals.filter(animal => animal.length >3)); //i always need something in front of the arrow. 
console.log(animals.find(animal=> animal.length >3));

let arr = [
    { 1: "Ali", age: 22}, 
    { 2: "Anne", age: 23},
    { 
        1: "Olga",
        sum: function () {
            return "Hi beautiful";
        }
    }
];
console.log(arr[2].sum());

let arr2 = [
    {
        2: "Cafe",
        sum : function () {
            return "Good morning";
        }
    }
];
console.log(arr2[0].sum());

/*Switch Keys and Values. Create a function to get a copy of an object. 
The copy must switch the keys and values.*/

let person = {
    name: "John", 
    job: "teacher"
  };
function keysToValue (obj) {
    const keysToValuesPair = Object.entries(obj)
    console.log(keysToValuesPair);
    let reverseArr = []
    for (let i = 0; i < keysToValuesPair.length; i++) {
reverseArr.push(keysToValuesPair[i].reverse())
    }
    return Object.fromEntries(reverseArr);// we take an array and make it object 
}
keysToValue(person);

// first, i distract my object and make it an array 
// then i declare an empty array, to use it as changing box situation
// then i started my loop - it's a method also
// i call my empty array and push
// then i push my index but REVERSE
// then i use return 





