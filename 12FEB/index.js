// DESTRUCTURING OBJECTS AS FUNCTION PARAMETERS
function fun (num, obj) {
    console.log(num);
    let firstName = obj.name; // or {name}; we can use BOTH formulas 
    console.log(firstName);
}

fun(22,{name: 'Ali'});

const userData = {
    firstName : "Hadi",
    lastName : "Nsreeny",
    get fullName () {
        console.log(`${this.firstName} ${this.lastName}`);
    },
    set fullName(str) {
let arr = str.split('');
this.firstName = arr [0];
this.lastName = arr[1];
    }
}; 

//GETTER - is GETTING me what i want it

//userData.printOut();
userData.firstName = 'Erika'; 


//SETTER - this will SET the value- We do not need  ()
userData.fullName = 'Paris Hilton'; // getting new data

//constructor ()- i will build a template for my object. then every time i send data it come back as an object
// we use this stuff EVERYWHERE, specially in REACT. 

function Person (name, age, activities ){ // name of function always with capital letter
    this.name = name;// this will refer to an empty object.
    this.age = age; 
    this.activities = activities;
};
let ali =  new Person('Ali','22',['party','dance']); // new is a keyword from javascript
    console.log(ali);
const obj = new Date();
console.log(obj); 

// Exercise
console.log('Exercise 1');

function Customer (name, address, phone, email ){
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
}
let Amparo = new Customer ( 'Amparo','Strasse','383737373773','ampa@gmail.com');
console.log(Amparo);
let Antonia = new Customer (' Antonia', 'avenida', '383838383','antonia@gmail.com');
console.log(Antonia);
let Marco = new Customer ('Marco','street sss','334402992','mark@uk.com');
console.log(Marco);

const customerData = {
    firstName : 'Paris',
    surName : 'Hilton',
    get fullName () {
        let arr = str.split('');
        console.log(`${this.firstName} ${this.surName}`);
    }
   }; 
/*
this.name = name;
this.age = age;
this.activities = activities;
this.printOut = function () {
    console.log(`${this.name} ${this.age} ${this.activities}`);
}; */
   
// class - the properties called instant properties and method, instant method

class Animals {
    //setting up constructor 
    constructor (_kind,_hometown,){
        this.kind = _kind;
        this.hometown = _hometown;
    }
    //now we build the method -inside of the class but outside of the constructor 
    display () {
        console.log(`it is a very cute ${this.kind} and  lives in ${this.hometown}`); 
    }
};
let casper = new Animals ("Dog","L.A"); 
console.log(casper.kind); // casper now is an object and belongs to the animal class 
casper.display(); // now it show the message stored on the console.log inside display
let sofi = new Animals ("Fish","Berlin");
const dyson = new Animals ("Fish","Berlin");

console.log(dyson);
console.log(sofi.kind);

//// class

class Color {
    constructor () {
        this.name = 'placeholder';
        this.age = 0; 
        this.birthday = 0;
    }
}
const red = new Color(); //now red is an object ready for me to add info
red.name ='red';
red.age =1212;
console.log(red); // my color is waiting for me to add properties and values into it. 


//the instance is when the user send the data and THEN is created on the go
// empty parameters or _parameters are the same .

/*Person Class
Create a class called Person which accepts the name of a person as a string, and his/her age as a number. 
The Person class should have a method called describe which returns a string with the following syntax: 
“name, age years old”. So, for example, if John is 19 years old, then the function describe of his object
 will return “John, 19 y7ears old”.*/ 

class Personita {
constructor () {
    this.name = 'name';
    this.age = 4;
}
}
const marta = new Personita();
marta.name = 'Marta';
marta.age = 2;
console.log(`hello ${marta.name} has ${marta.age} years old`);

/*TV Class
Create a TV class with properties like brand, channel and volume.
Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
Add methods to increase and decrease volume. Volume can’t never be below 0 or above 100.
Add a method to set the channel randomly. Let’s say the TV has only 50 channels.
Add a method to reset TV so it goes back to channel 1 and volume 50.
It’s useful to write a status, that returns info about the TV status like: “Panasonic at channel 8, volume 75”.*/

class Tv {
    constructor (brand, channel = 1, volume = 1){
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }
    increase() {
        if (this.volume < 100 ) {
            this.volume ++;
            console.log(this.volume);
        } else {
            this.volume--;
        };
    }
    decrease() {
        if (this.volume >= 0) {
            this.volume--;
            console.log(this.volume);
        } else {
            this.volume++;
        };
    }
    channel (){
        this.channel= Math.floor(Math.random()*51);
        console.log(this.channel);
    }
};

const newTv = new Tv ();
newTv.brand = 'Panasonic';
newTv.volume = 29;
newTv.channel = 4;
console.log(`The ${newTv.brand} at ${newTv.channel}, has ${newTv.volume} of volume`); 

console.log(newTv);
console.log(newTv.channel);
newTv.decrease();
newTv.increase();

// extends - means go to this class, take a copy and then pass it to kid. kid is also a class, but is sharing feautures
//from Person.

class Person1 {
    constructor (_name,_age){
         this.name = _name;
         this.age = _age;
    }
display () {
    console.log(`Hey ${this.name}`);
}
};
class Kid extends Person1  { // you can declare a new class, extending the class Person.
    constructor(_name,_age) {
   super(_name,_age);
   //this.height = _height; //if i have more things to add, i can do it this way.
}
show () {
    return `${this.name} is a ${this.age} years old`;
}
}
let zain = new Kid ("Zain",10);
zain.increment = function (){
console.log('Cool')
}

console.log(typeof zain);
zain.display();
console.log(zain.show());


// super - is for specific properties & features 

// Array.filter() - will come back with an array of the condition we want
let names = ['Ali','Jasmine','Raja'];
let result;
result = names.filter(name => name.length > 3 ); // this will have a call back function 
console.log(result);

// Array.find - only the first result that meets my requirements

result = names.find(name => name.length == 4 );
console.log(result);

//Array.map - return every individual index as strength

names.map( x => console.log(x));

//Array.reduce()

let letters = ['a','b','c','d','z','m'];
let numbers = [2,33,4,53,18,9];
result = numbers.reduce((acc,cur) => acc + cur) / numbers.length;
console.log(result);

//Array.sort() - will call for each an every part
letters.sort();
console.log(letters);
console.log(names); 
console.log(numbers);
