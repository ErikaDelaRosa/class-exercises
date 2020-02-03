//functions inside functions
function main (num, num2){ //outer function
function second (n){ // inner function. I am only available to use second INSIDE of main. 
    return n * n; // 3 * 3 = 9
}
return second (num) + second(num2);
}
console.log(main(3,4));

//Nested scopes: Accessing outer global variables
var nice = true;
const outerFunction = (x,y) => {
    let big = true; // any function outside of this function is accessible though out the scope.
    console.log (big + ' outerFunction');
    const innerFunction = (num) => {
        big = false;
        nice = false;
        console.log(big+ ' innerFunction');
        return x + 10 
    };
    return innerFunction (x) + innerFunction(y);
};
console.log(outerFunction(3,4)); 

//closure
var number = 10; // global var MUST be outside. Used to secure your code. 
function fun () {
    return number + number;
}
console.log(fun());
console.log(number);

//invoking == calling 
const add = (()=> {
let counter = 0;
return ()=> {
    counter++;
    return counter;
};
})();
add ();//1
add ();//2
add ();//3
console.log(add()); 
console.log(add());

// this is how we secure the function, outside of the global scope. 
// and you run for now one time. 
(function display (){
    let x = 0;
    console.log("Hi");
    return () => x++; 
    return x;
})();// this parentesis is invoking or calling the function. 
// you can have self invoking anonymous functions.

//Self-Invoke anonymous function.(SIAF)
(function display(){ // no one can access or change anything on it because it is SECURE. 
    console.log("Good Morning");
})(); 

// Inmediately-invoke function expression. we use it when we deal with greeting, shopping carts...I am just
// getting the value of it. 
const sum = ((x)=> {
    return x;
})(4); //this is the function call 
console.log(sum);

// -------------------- break this topic, refresh all ones from here
//Loops

for (let i = 0; i<= 10; i++) {
    let result = i * 3;
    console.log(`${i} *3 = ${result}`);
}

//IF- ELSE 
let num = 10;
if (num == 20) {
    console.log("20 is cool");
} else {
    console.log("nooooooooo");
}

// ARRAY is multiple values in one variable. 
const arr = [3,4,5,6,7];
console.log(arr[2]); // always start counting from zero

/* Write a function add that uses a closure 
that performs addition on arguments in two separate function calls.*/

function add2 (a){
    return function (b){
        return a +b; 
    };
}
console.log(add2(2)(3));

/*Write a function multiplier that uses a closure to perform multiplication. 
However, the outer function should be stored in a variable which is then called.*/

function multiplier (num) {
    return x => x * num;
};
const times = multiplier(2);
console.log(times(5));

var all = 3 ;
(function () {
    var all = "Hi";
})(); 
console.log(all);

/* (() => { - how start an anonymous function self invoke*/

/*
Write a function that accepts several parameters and calculates the number of money that will have been saved as pension 
until a person retires. The function should be self invoked and should have the following parameters:
The current age of the person // e.g. 40
The retirement age of the person // e.g. 60
The monthly wage the person earns // e.g. 1000
The percentage (as integer) that the person saves each month // e.g. 10%
If the person has already retired then the message ‘You’re already retired!’ should be printed. If not, then the program 
should calculate how many years remain until the person retires, the monthly income and take a specific percent of this 
income every month as saved money.
Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money
 will she have saved until she retires?
Output: $30000 */ 

((cAge, rAge, mWage, perc) => {
    if (cAge >= rAge) {
      console.log(`You are already retired`);  
    } else {
        let workingYears =   rAge - cAge ;
        console.log(`You still need ${workingYears} until retirement`);
        let saving = (mWage * perc ) / 100;
        let totalAmount = (workingYears * 12) 
        let totalSaving = totalAmount * saving; // 24000.
        console.log(totalSaving);
    }
})(20,40,1000,10);

// trim ()
let str = '    Hi     ';
console.log(str.trim()) ; 
// trimEnd - remove the end part 
console.log(str.trimEnd());
// trimStart()
console.log(str.trimStart()); 
// startsWith()
let text = 'Hi we will have fun';
console.log(text.startsWith("Hi")); 
// endsWith()
console.log(text.endsWith("we",5));// string + character location 

// charCodeAt ()
let chr = 'A'; // UTF-16
console.log(chr.charCodeAt(0));

// codePointAr ()
const icons = "👷‍♀️";

console.log(icons.codePointAt(0)); 
