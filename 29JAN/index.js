//EXERCISES: repeat 3 previous exercises in a NEW creative way:

/*Create a function which calculates how old a dog is in doggie years. The function should accept one argument that 
is the puppy’s age in human years. Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog 
years.
i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”*/

function dogAge (dog) {
let currentAge = dog * 7;
console.log(`Your dog in human age is ${currentAge}`);
}
dogAge(3);

/* Create a function that takes a string and a word, and then returns true or false depending on whether the word 
starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true */

function grammar (letter) {
    let str = "waffles";
    if (str.startsWith());
    return true;
}
console.log(grammar("wa"));

/*A Lifetime Supply... Create a function to calculate how much you’ll actually be getting for a lifetime supply of your 
favorite snack. The function should accept two arguments: age and amount per day. The function should calculate the 
amount that "will" be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for 
amount per day and round the result.
i.e.
calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”*/ 

function chocolateForLife (maxAge) {
let currentAge = 20;
let dosis = 2;
let annualDosis = 2 * 365;
let restOfLife = maxAge - currentAge;
let suply = annualDosis * restOfLife;

}
