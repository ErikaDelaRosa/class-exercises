/*Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count 
the number of occurrences of that letter in the string.
i.e. countOccurrences(“this is a string”, “i”) ➞ 3*/

function arg (...args) {
    var str = " ";
    var letter = " ";
    arg(str.count(" "));
}
    

/*Create a function which calculates how old a dog is in doggie years. The function should accept one argument that 
is the puppy’s age in human years. Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog 
years.
i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”*/

function toCalculate (dog) {
    const human = 7;
    dogage = human * dog;
    console.log(`Panda's age is ${dogage}`);
}
toCalculate(4);

/*A Lifetime Supply... Create a function to calculate how much you’ll actually be getting for a lifetime supply of your 
favorite snack. The function should accept two arguments: age and amount per day. The function should calculate the 
amount that will be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for 
amount per day and round the result.
i.e.
calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”*/ 

function lifeSupply () {
const age = "";
const limitAge = 100; 
const amount = 2;
dailyDosis = age * amount;
var totalDosis = dailyDosis * limitAge;
console.log(`The person needs ${totalDosis} of kitkat until he is ${limitAge}`);
}
  


/*Pie. Create a function that determines whether or not it’s possible to split a pie fairly given these three parameters:
Total number of slices.
Number of recipients.
How many slices each person gets.
Examples:
equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
equalSlices(8, 3, 2) ➞ true
equalSlices(8, 3, 3) ➞ false
equalSlices(24, 12, 2) ➞ true*/

/*function equalSlices (...portion) {
    var totalNumber = portion.length;
    var slicePer = totalNumber / recipients;
    var recipients = "";
    if (slicePer => 1) {
       return true;
    } else {
        return false;
    }
}
console.log(equalSlices(11,5,3));
console.log(equalSlices(3,2,2));
console.log(equalSlices(8,3,3));
console.log(equalSlices(24,12,2));*/

function equalSlices (...portion) {
    var totalNumber = portion.length;
    var slicePer = "";
    var recipients = "";
    if (slicePer * recipients <= totalNumber) {
        return true;
    } else {
        (slicePer * recipients >= totalNumber) 
        return false;  
    }
}
console.log(equalSlices(11,5,3));
console.log(equalSlices(3,2,2));
console.log(equalSlices(8,3,3));
console.log(equalSlices(24,12,2));


/*XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and 
returns either true or false.
Notes:
Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.
Examples:
XO(“ooxx”) ➞ true
XO(“xooxx”) ➞ false
XO(“ooxXm”) ➞ true (case insensitive)
XO(“zpzpzpp”) ➞ true (returns true if no x and o)
XO(“zzoo”) ➞ false*/

function checks (...contains) {
    let str = " ";
    var check = str.includes("x"); 
    var check2 = str.includes("o");
if (str){
    return true;
} else {
    return false;
}
}


/*Validate Email. Create a function that takes a string, checks if it’s a valid email address, and then accordingly 
returns either true or false.
The string must contain an “@” character.
The string must contain a “.” character.
The “@” must have at least one character in front of it.
e.g. “john@example.com” is valid while “@example.com” is invalid.
The “.” and the “@” must be in the appropriate places.
e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.*/ 


/*Write a function that checks whether the user has entered a valid German bank account.
Note: German bank accounts should starts with and has 20 number.
DExxxxxxxxxxxxxxxxxxxx */
const bankChecker = str => {
    let result ="";
    let counter = 0;
    let strToArr = str.toLowerCase().split(""); //"" for empty space
    console.log(strToArr);
    for (let i = 0; i<strToArr.length; i++){
        let firstTwoChar = strToArr[i].slice(0,2); //i will take the first two Characters of every piece of the index
        console.log(firstTwoChar);
        let remainderStr =strToArr[i].slice(2,strToArr[i].length); // i will take the remainder from the 2nd character. 
        console.log(remainderStr);


    }
}