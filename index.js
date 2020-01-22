
//mathematical expressions: +, -, *, /, %
console.log(1 * 1);

//bolean expressions: comparison operators (===, !==, >=, <=, >)
console.log(1 === 4); 

// var
let x = 3;
let y = 3;
let str = "this is text";
let c = true;
let t ="3";


//typeof 
let result = 0;
let signIn = 
console.log(c);


// tenary condition ? expIfTrue : exprIfFalse

let kid = 15;
(kid>16)? console.log("Go Party"):console.log("Stay home");

let drive = 55;
drive > 18? console.log ("yeah drive now"): console.log ("nope");

//.length

let name = "Erika";
console.log (typeof name);// will print the type of var name
console.log (name.length);// will print how many characters
let lastName = "de la Rosa";
console.log(lastName.length);

//Str[0]
console.log (lastName[4]); // to see an specific char inside the var - starts counting from zero

let email = "xxxxxxxxx@gmail.com";
console.log(email[11]);
(lastName[0] == "R")? console.log ("cool") : console.log ("not cool");

//.substring
let restOfStr = lastName.substring (5); 
console.log(restOfStr); 

//. toUpperCase - transform the small case into upper case
let str3 = name.toUpperCase();
console.log(str3); 
console.log(name);

//. toLowerCase
let smallStr = str3.toLowerCase();
console.log(smallStr);
let userName = "erika";
let firstChr = userName [0];
let restOfNameChr = userName.substring(1).toLowerCase();
console.log(firstChr + restOfNameChr);

// comment 
/* 
lines of text
// lines
*/
let var1 = 0;
let var2 = null; //empty box
let var3 ; //undefined
let newvar = 20 ;
console.log(var1);
console.log(var2);

// cameCase vs snake case

let firstName ="erika";
//.includes

let text = firstName.includes("h");
let emailCheck = email.includes("@"); 

console.log(text);
console.log(emailCheck);

// 
let longText = "this is long text";
let subStr = longText.substring(2,4);
console.log (subStr); 


//Exercise

let longText3 = "I can walk in the park all day!";
let str22 = longText3.substring(17,22);
console.log(str22);
// exercise 2

let hello = "Hello world"; 
str = hello.toLocaleUpperCase();
console.log (hello);
console.log (str);

// exercise 3
let earth = "Earthlings";
str = earth.toLowerCase ();
console.log (earth);
console.log (str);

//exercise 4

let js = "JavaScript";
let smallText = js.substring (3,6); 
console.log(smallText);

//exercise 5
let longText2 = "nice shoes";
let textCheck = longText2.includes("L");
console.log (textCheck);

//exercise 6
let text111 = "door";
let firstChr1 = text111[0];
console.log (firstChr1+text111+firstChr1); 

//.length - num
let str44 = "this is longe str";
let shortStr = str44.substring(str44.length -3);
console.log (shortStr); 

//.slice
let shortStr2 = str44.slice(5);
console.log(shortStr2); 

// this is first name
let firstName1 = "Erikita";
let lastName2 = "DlR";
let address = "xxxx, 12222, Berlin"; 
let niceText = `Hi, i am &{firstName1} nice that you live in ${address}, my door has my family ${lastName2}`;
console.log(niceText);

// global vs local
console.log(x);
var globalVar = "this is global";
console.log(globalVar);

function sum() {
    let localVar = "this is local" ;
    console.log (globalVar);
    console.log(localVar);
}
sum();

// hoisting (var) - function or object declaration

var newHoisted = "text";
let notHoisted = "lalala";
console.log(newHoisted);
console.log(notHoisted);

// 
let num1 = 1; // num = 1
num1 = num1 + 1; // 1 +1 = 2
num1 = num1 + 1 ; // 2 +1 = 3
num1 += 4;// 
let i = 2 ; 
let xx = i ++; 
console.log(i);

//Exercise 7

let newStr = "Javascript";
let lastChr7 = newStr.slice(newStr.length-3)
let longStr1 = lastChr7 +  newStr + lastChr7; 
console.log ( longStr1) ;

// exercise 8

let newVar1 = "first month";
let newVarUpper = newVar1.toUpperCase();
console.log (newVarUpper);
let javacheck = newVarUpper.includes("java");
console.log (javacheck);

// Exercise 9

let newString = "Berlin is a big city";
let firstChr3 = newString [0];
let lastChr3 = newString [newString.length -1];
let shortStr3 = newString.substring(1, newString.length -1);
console.log (lastChr3 + newString + firstChr3);
console.log (shortStr3);
// exercise 10

let prenom = "Erika";
let nom = "De la Rose";
let adrese = "Rue du champagne";
console.log (`Bonjour, I am ${prenom} and I live in ${adrese}. My door says my family name ${nom}`);

// exercise 11

let varFox = "the quick brown fox";
let firstChr101 = varFox[0].toUpperCase;
let newUpdatedStr = varFox.slice(1);
console.log (firstChr101 + newUPdatedStr);
console.log (a); 

