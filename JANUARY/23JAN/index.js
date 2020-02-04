// var, let, const

var montag = 1; 
let freitag = "3" ;/* is more flexible and i can declare a variable on the go.*/
const party =10; /*this one if fix and i am not able to change AFTER the semicoma*/

// increment
let a = 0;
a ++ ; /* every time i do so, a will be increase by one. As the same as a+=*/

// decrease
a--; /*the same will decrease by one, also -= */

// function <name> (<parameters>)
/*function is certain amount of code that will repeat over time. 
You can access this function among your page. Variables only inside the function. 
the function can run WITHOUT console.log */
function sum (x,y) {
let z = x + y;
return z; 
}
console.log(sum(2,3));
sum(10,3);

//variables in function 
/*while the x are local, are fine. the only thing a function can 
NOT DO ALONE is the function call*/
/*Console.log is only debugging*/

function fun () {
    const num = 3 ;
    const num2 =4 ;
    console.log(num + num2 );
}
fun (); 
 
let string = "I am beautiful today";
console.log(string[0]); // second character because start from -1
console.log(string.substring(0,4)); 
let newStr = string[0].toUpperCase()
//let newStr2 = string[0,1].toUpperCase() +string.substring(4).toLowercase();
console.log(newStr);
//console.log(newStr2);

const arr = [1,2,3];
console.log(typeof arr); // i can check if that is an object 
let blue = true;
console.log(blue ? `Nice to meet you`: `You are welcome`);
if (1 < 10) {
    arr.push(1);
} else if (1 !== 20 ) { // always mention the type and the value
    arr.unshift (1);
} else {
    arr.push(2);
    a++;
}
let color ="black";
switch(color){
    case "pink": // every case has its own breaks outside of the switch
    arr.push(1);
    break;
    case "black":
   console.log("hola");
     break; 
     default: // i need to have one, for all the other scenarios in which the user doesn't choose an option. 
    a++;
    console.log("Kepp trying");
    }


// local vs global
 
// const <function name> = (<paremeters>) => {...}
const div = (x,y) => {
    const you = num => { // i can have a function inside of a function 
        return num; 
    }
    return x /y;
};

div (3,9); // div is a variable and the value of it is a function. 
const names =["Ali","Marta","Maria"];
// array.includes ()
console.log(names.includes("Ali")); //true

//array.indexOF(<item>)
console.log(names.indexOf("Ali")); //which position on the index is

// Removing items:
//Array.pop() // removing the lasItem
//Array.shit ()// removing the first item
names.push("Zara");
names.unshift("xx"); 
names.shift();
names.pop();
console.log(names); 

// Array.slice()
// Array.split()
const arr1 = ["Hi","This","me"];
const arr2 = ["me","writing","you"];

//array.concat()
const arrTotal = arr1.concat(arr2); 
arrTotal.push ("nice to meet you"); 
console.log(arrTotal);
console.log(arrTotal.join("")); // now is not an array, is a string 

// Array.filter()
let newArr2 = names.filter(name => name.length == 3); // always with arrow 
console.log(newArr2);

// Array.find()
let arrCall = names.find(name => name.length == 1);
console.log(arrCall);

const numbers = [1,2,3,4,5];
let arrCall2 = numbers.find (num => num == 55);
console.log(arrCall2);

// reverse
const str3 = "Javascript";
let newRevStr = str3
.split("")
.reverse("")
.join("");
console.log(newRevStr); 

/* Exercise: c4n y0u r34d th15? Create a function that takes a string as an argument and returns 
a coded (h4ck3r 5p34k) version of the string. NB: for your program to work properly, the function 
should replace all ’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5.
Examples:
hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3r”*/

const hacking = (str) => { //step one, string as an argument
    let hackedArr = [];
    let toSmall = str.toLowerCase();
    let letters = toSmall.split(''); // i want to separate every letter even with space
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] == 'a') { // 0 
            letters[i] = 4 ;
            hackedArr.push(letters[i]);
        } else if (letters[i] == 'e') {
        letters[i] = 3;
        hackedArr.push(letters[i]);
    } else if (letters [i] == "i") {
        letters[i] = 4;
        hackedArr.push(letters[i]);
    } else if ( letters[i]); {
        letters [i] = 5;
    hackedArr.push(letters[i]);
    }
    let result = hackedArr.join("");
    return result;
}
};
let codeStr = "Hi i am nice ";
console.log(hacking(codeStr)); 

/* insert here the problem */

function isSymmetrical (num){
    let numToStr = num.toString ();
    let result = numToStr
    .split("")
    .reverse()
    .join('');
    if (numToStr == result) {
        return true;
    } else {
        return false;
    }
}
console.log(isSymmetrical(33333));
console.log(isSymmetrical(376863));

/* 
snake -case -> camelCase create a function to camelcase() that takes a single string in snake_case
and converts it into camelCase.

Examples:
toCamelCase("hello_world") - helloWorld
*/

const toCamelCase = str => {
    let splitStr = str.split('_'); // everything inside the brackets and " "
    let camelArray =[]; 
    for (let i= 0; i < splitStr.length; i++) {
        let firstChr, restStr;
         if(splitStr[i] == splitStr[0]) { // is every character from my loop is equal to the first one
            camelArray.push(splitStr[0]);
            continue;
        } else { 
            firstChr = splitStr[i].slice(0,1);
            restStr = splitStr [i].slice(1,splitStr[i].length);
        }
        let newWord = firstChr.toUpperCase() + restStr;
        camelArray.push(newWord);
}
let result = camelArray.join ("");
return result;
};
console.log(toCamelCase("snack_log_it"));

/* 
Pig Latin Translation. Create a function that takes a string of words and moves the first letter of each word to the end 
of it, then adds ‘ay’ to the end of the word. This is a basic form of “Pig Latin”.
Move the first letter of each word to the end of the word.
Add “ay” to the end of the word.
Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.
------------------------------------------------------------------------------
Extra Practice
Preserve proper capitalization as in the examples below.
Examples:
pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.”
pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”
*/


///

function pigLatin(str) {
    let translation = []; // array
    let lowerCase = str.toLowerCase(); // every character is small now 
    let splitStr1 = lowerCase.split('');
    const vowels = ["a","e","i","o","u"];
    for (let i = 0; i < splitStr1.length; i++){
        let firstCharacter = splitStr[i][0]; 
        console.log(firstCharacter);
        let restOfStr = splitStr[i].slice(1,splitStr.length);
        console.log(restOfStr + "restOfStr");
        const newString = restOfStr + firstCharacter +"ay";
        if (vowels.includes(firstCharacter.toLowerCase)){
            let firstCharacterVal = (i? firstCharacter : firstCharacter.toUpperCase()) + restOfStr + 'way'; 
        } else {
            if (i == 0) {
                let firstCharacterRan = restOfStr [0];
                let restOfRan = restOfStr.slice(1, restOfStr.length);
                restOfStr = firstCharacterRan.toUpperCase() + firstCharacterRan; 
            }
            const firstCharacterMain = restOfRan + firstCharacter + "ay" ;
            translation.push(firstCharacterMain);
        }

    }
    let result = translation.join();
    return result; 
}
const strPig = "Atscay areway reatgay etspay";