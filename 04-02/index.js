// Almost anything on JS is object
let arr = [2,3];
console.log(typeof Object);

//keys, properties : value
const o = {
    1: 'Hadi',
    2: 'Ali',
    3: 'Olga'
}

let aliName = 'Ali';
let aliAdd = 'xxxsstrs';
let aliAge = 22;

const obj = {
name : 'Nancy',
lastName : 'saaaaaa',
age : 44,
add: 'strasse'
}
//the good thing about objects is that allowed me to store data in the SAME place, without the need to 
//declare the variables together. 

/* const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>} */
const car = {}; // this method is used when i do not know the type of data that will be stored.
console.log(car);
car['name'] = 'Ford'; // method used to create properties
console.log(car);
car ["year"] = 2020;
console.log(car);

// Accessing properties with dot notation 
car.age = 22;  // frequently used to modify properties
console.log(car);
car.age = 44;
console.log(car);
car["year"] = 1980; 
console.log(car.name); // object - name - dot = to access properties inside an object. 
console.log(car["name"]); // this is the same as above 

const save = new Object();
const arr1 = new Array();
console.log(save);
console.log(car.name);
console.log(car);

// cool for 
for (let prop in car) {// i am asking to show all the properties in the car object
console.log(`car.${prop} : ${car[prop]}`) ; // the first one prints variable - the second the object inside. 
} 

// Object.entries ()
const person = {
    name : "Zain",
    age : 20,
    birthYear : 2000,
    height: 120,
    weight: 80,
    print: function () { //now print is a method
        console.log(` The user ${person.name} has born in ${person.birthYear}`) ;
    }, // add coma after bracket to add a new one 
    old : () => {
        return 2020 - person.birthYear 
    }
}; 

//Object.keys - brings back an array
console.log(Object.keys(person)); 

//Object.values - brings back an array for each an individual value
console.log(Object.values(person));

//Object.entries() value + keys
for (let [key,value] of Object.entries(person)) { // i declare two variables inside the square brackets
console.log(`${key} : ${value}`); // for OF is used more with values(to modify them)
}
// Methods
person.print();
console.log(person.old());

// Exercise:
/*Object Person. Create an object named person. 
Loop through the object and print both the property and value of the object.*/ 

for (let prop in person ) {
    console.log(`person.${prop} : ${person[prop]}`);
}

// Object.assign 
const obj1 = { 1 : 2, 2 : 300} ; //kids
const obj2 = {1 :4 ,3 : 322}; // parents
const totalObj = Object.assign({5: 55 }, obj1, obj2,); //family. Will overwrite the assign - can write property name and value 
console.log(totalObj); 

//Get Values. Create a function that returns an array of all values of an object’s properties

const getValues = (object) => { 
    return Object.values(object);
}
console.log(getValues(person));
console.log(getValues(car));

 
/*Add A Method. Create an object and add a method to that object which prints the values of 
the objects in a string.*/
person.printOut = () => {
return `Hi ${person.name}, you are very short ${person.hight}, and also too old ${person.birthYear}`;
}; 
console.log(person.printOut());

//Object.defineProperty()
Object.defineProperty(person, "birthDay",{ //we can pass one property at the time
    value : 20,
    writable : true // only for javascript
}); 
console.log(person.birthDay); 

//Object.defineProperties () //you can only store one object or an array 
Object.defineProperties(person, {
    p1: {
        value : [],
        writable: true
    },
    p2 : {
        value : {},
        writable : false
    },
    p3 : {} // undefined 
});
console.log(person.p2);
console.log(Object.keys(person));

const getProperties = obj => {
    return Object.getOwnPropertyNames(obj);
};
console.log(Object.keys(person));
console.log(getProperties(person)); 

/*List Properties. Create a function that returns an array of properties of a javascript object.*/

const list = {
    1 : "apple",
    2 : "banana",
    3 : "cider"
} ; 
console.log(Object.getOwnPropertyNames(list));

const tortilla = {
    patatas : 6,
    cebolla : 1,
    salt : 1,
    huevo : 4
};
console.log(Object.getOwnPropertyNames(tortilla));

//Exercise - countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2 

function countLetters (str) {
    let arr = str.split('');
    let result = {};
    function countOccurrences (string, letter) {
        let counter = 0;
        for ( let i = 0; i < string.length; i++) {
            if (string[i] === letter) {
                counter ++;
            }
        }
    return counter; 
    }
for ( let i = 0; i < arr.length; i++) {
    let currentChar =  arr[i];
    result[currentChar] = countOccurrences(str, currentChar);
}
return result;
}
console.log(countLetters('amapola'));


