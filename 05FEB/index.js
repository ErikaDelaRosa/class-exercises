// object literal context 
const  o =  {
    name: "Ali",
    age: 20,
    add: "strasse"
}

//Property accessors


// Dot notation object.property
o.name;
o.age;

// Bracket notation object[`property`]
o['add'] = "see str";

// Object.keys - i call the object and then add the method KEYS
console.log(Object.keys(o)); 

// Object.values 
console.log(Object.values(o));

// Methods 
o.print= function (){
    console.log(`hi ${this.name} you are very old ${this.age}`);/*JS can change the object name for THIS, so knows
    it is working with an object inside. REPLACE OBJECT NAME */
};
o.print();

function userData(name, address, age){
    const obj = {
        name : userName,
        age: userAge, 
        address : userAddress,
        outPut : function () {
            console.log('holaaaaaaa');
        }
    };
    return obj;
}

//this 

// Object.prototype.hasOwnProperty()
const dress = {
    color: 343,
    size: 'M',
    city: 'Madrid',
};
console.log(dress.hasOwnProperty("sss"));
console.log(dress.hasOwnProperty("size")); 

//Exercise
/*Merge. Create a function that takes two objects as its parameters and merges 
them together into a new object.*/

const fun = (x,v) => {
return Object.assign(x,v); 
};
const o1 = {name : 'Ali'};
const o2 = {surName : "zas"};
console.log(fun (o1,o2)); //this is THE FUNCTION CALL. where i receive the info 
console.log(fun({name:'Ali'},{surName:'zas'}));//another way to call the function and PASS PARAMETERS. 

const fun2 = (x,o)=>{
    let result ={ ...x,...o}; // this will copy and object and array. I can use for parameters and functions.
    return result; 
}; 

/* ...x,..y is equal to Object.assign(x);
return Object.assign(x) 
return {...x, ...y, ...m} ; ->this one with curly brackets ALWAYS. */

/* create an  object will receive user name, birth date, birth month, birth year.*/

//this is an OBJECT: 

function zodiac (name, day, month, year) {
const user = {
    yourName : name,
    birthDate : day,
    birthMon : month,
    birthYear : year
};
function result (birthDate, birthMon) {
    const horoscope = {
    Capricorn : birthDate => 22 && birthMon == 12 || birthDate <= 20 && birthMon == 1,
   /* Acuario : birthDate => 20 && birthMon == 2 || birthDate <= 20 && birthMon == 3,
    Piscis : birthDate => 21 && birthMon == 3 || birthDate <= 20 && birthMon == 4,
    Aries : birthDate => 21 && birthMon == 4 || birthDate <= 21 && birthMon == 5,
    Tauro : birthDate => 22 && birthMon == 5 || birthDate <= 21 && birthMon == 6,
    Geminis :birthDate => 22 && birthMon == 6 || birthDate <= 23 && birthMon == 7,
    Cancer :birthDate => 24 && birthMon == 7 || birthDate <= 23 &&  birthMon == 8,
    Leo : birthDate => 24 && birthMon == 8 || birthDate <= 23 && birthMon == 9,
    Virgo : birthDate => 24 && birthMon == 9 || birthDate <= 23 && birthMon == 10,
    Libra : birthDate => 24 && birthMon == 10 || birthDate <= 22 && birthMon == 11,
    Escorpio :birthDate  => 23 && birthMon == 11 || birthDate <= 21 && birthMon == 12,
    Sagitario : birthDate => 22 && birthMon == 12 || birthDate <= 21 && birthMon == 1,*/
}
};
for (let i = 0; i <= 31; i++){
    for (let m = 0; i <12; i++)
return `You are a ${user.result}` 
}
};
console.log(zodiac("Mary",22,12,1945));

/*if ( user.birthDate && user.birthMon == result.horoscope) {
    return `You are a ${result.horoscope} in the zodiacal signs`; 
} else {
    return `Please correct your data, the month must be entered with numbers`,}}*/