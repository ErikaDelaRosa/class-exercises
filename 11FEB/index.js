// NESTED ARRAYS

// NESTING AND ACCESSING ARRAYS WITHIN EACH OTHER 
const arr = [[2,3,4], [5,6,7],[8,9,10]];
console.log(arr[1][1]); // first group, and then element inside the group starting from 0
console.log(arr[2][1]);

// two loops connected :
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) { // when we do have one i, the second letter is j.
          console.log(arr[i][j]) ; // this is the second counter and will bring indv index
    }
};


let arrayNew = [];
for (let i = 0 ; i <= 5; i++) {
    for (let j = 0; j <= 2; j++) {
    arrayNew.push([i,j,44]); // pushing an array 
    }
};
arr.forEach(array => array.forEach(element => console.log(element))); 
/* FOR EACH - its a call back function. Will loop inside of this 
/* call back-  i have to pass a function in the parameter. 
is expected for me a function for the argument i am creating*/


//console.log(arrayNew);

let names = ['Ana','Marco','Karen']; 
names.forEach(name => console.log(name)); //this is an example
names.map(name => console.log(name)); //another example

let family = [['Ali',22,'teacher'],['Olga',40,'chef']];
for ( let i = 0; i < family.length ; i++) {
    for ( let j = 0; j < family[i].length; j++){
         console.log(family[i][j]);
    }
};
family.forEach(arr => arr.forEach(element => console.log(element)));

//our beloved FOR

//forEach
family.forEach(arr => arr.forEach(element => console.log(element))); 

//for in - 
for (let innerArray in family) {
    for ( let element in innerArray ){
        console.log(element)
    }
}; 

//for of 
for (let innerArray of family) {
    for ( let element of innerArray ){
        console.log(element)
    }
}; 

//NESTING AND ACCESSING OBJECTS IN OBJECTS

// this example reflects the reality of the online shops: we do have many sizes, colors of the same item. 

const tshirt = {
    color : 'red',
    size : ['s','m','l','xl'],
    country : {                                // we store as many entries inside this {} item as we need
        name: ['China','Thailand'],      //more than one item must be close by [] and separated by comas. 
        capital : ['Beijing','Bangkok'],
        obj : {
            one: 555,
            two: 9292,
            printOut : function (){
                console.log(this.one);
            }
            },
        display: function () {
            console.log(this.one);
        }
    },
    season : 'summer 20',
    fabric : 'cotton',
    method: function () { // we need to add this here in order to call the info outside the formula
       console.log (this.color); 
    }
};

console.log(tshirt.size[2]);
tshirt.country;
console.log(tshirt.country.capital[1]);
console.log(tshirt.country.obj.two);
console.log(tshirt.country.name[0]);
console.log(tshirt.color);
console.log(tshirt.size[3]);
console.log(tshirt.season);
console.log(tshirt.fabric);
// auto invoke, console.log is not needed.
tshirt.method(); // 1 inside tshirt
tshirt.country.display(); // inside countries 
tshirt.country.obj.printOut(); //inside countries -OBJ
let newShortWay = tshirt.country;
newShortWay.display();

// NESTING AND ACCESSING ARRAYS IN OBJECTS
let car = ['Ford',2000,'Oil','AC','7 seats']; 
let [carName, carYear, carMotor, ...rest] = car; // we can add new data and then check  ...rest- will show ONLY NEW entries
console.log(carName);
console.log(car[2]);
console.log(rest); 

//NESTING AND ITERATING OVER OBJECTS IN ARRAYS
 const object = {
     firstName : 'Ali',
     old : 22,
     country: 'Germany'
 }; 
 
({firstName, old, country} = object);  // they are all living in the same apartment 
console.log(firstName);
console.log(object);