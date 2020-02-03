
/* 1.Create a function that looks inside a givin string if it has the word (JavaScript) 
if so print "I know it's crazy 😉".*/

function includes (str) {
    var str = "I know it is crazy"; 
    var word = str.includes("JavaScript");
    if (str.includes("Javascript")){
    console.log("I know it is crazy");
    } else {
        return false; // this was not requested on the problem
    }
}
console.log(includes("JavaScript"));

/* 2-Create a function that calculates the user age e.g. 2000 -> 20.*/

function age (num) {
    var actualYear = 2020; // new Date().getFullYear();
    actualAge = actualYear - num;
    console.log(`Your age is ${actualAge}`); // add an extra step; return num < year && num > 1900 
}
age(1999)

/*// Create a function that accepts a text from user and check if the user has entered a month name, 
if so print out that month and in which season it is.*/

function seasonality (month) {
    var winter = ["November","December","January"];
    var spring = ["February","March","April"];
    var summer = ["May","Jun","July"];
    var autumn = ["August","September","October"];
console.log(month)
if (winter.includes(month)) {
console.log('yes its winter')
} else if (spring.includes(month)) {
    console.log('yes, it is spring')
    } else if (summer.includes(month)) {
        console.log('yes its summer')
        }else if (autumn.includes(month)) {
            console.log('yes it is autumn')
            }
    }

    console.log(seasonality("November"))

/* // Create a function that takes a string and a word, and then returns true or false depending on whether the word 
starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true */

function dictionary () {
    var str2 = "button";
    var str3 = "triple";
    if (str2.startsWith("bu") || (str3.startsWith("tri"))) {
        true;
    } else {
        false;
    }
    alert ();
}
console.log()
/* // Complete the function below so that it returns "Two for me and one for you" when no arguments are passed*/

const twofer = who => {
  return `Two for me and one for ${who}`;
};
console.log(twofer("Ali")); // -> "Two for me and one for Ali"
console.log(twofer("you")); // -> "Two for me and one for you"

/* // Create a function will calculate a student degrees for 6 subjects,
//if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+) */ 


function newaverage (...degrees){
    var numberOfnumbers = degrees.length;
    var sumDegrees = degrees.reduce((total,currentNumber)=>total +currentNumber);
    var average = sumDegrees / numberOfnumbers;
    var result = " "; 
    if (average <= 70){
        result = "F";
    }
    if (average > 70 && average < 80){
        result = "C";
    } 
    if (average > 80 && average < 85){
        result ="B";
    }
    if (average > 85 && average < 90){
        result ="A";
    }
    if (average >90 ){
        result = "A+";
    }
return "student points average is: " +average + " degree is :" + result;
}
console.log(newaverage(55,77,88,99,65,78));


/*// Create a function that accepts the (user name, age, address and unlimited number of activities the 
user enjoy doing)
/* print all the user input adding the greeting part and more text turning that input into a readable 
text.
/* If one of his activities was dance ￼or party print "you are cool".*/

function profile (user) {
    var user = Ana;
    var userAge = 40;
    var userActivities = ["dance","swim","sing"];
    var userPreferences = user.length;
    if (profile.includes("dance")) {
return "You are cool";
    }
}
console.log(profile);
// sum = args.reduce ((acc,cur) => acc +cur);
// for (let i = 0; i< args.length; i++) - this is a loop (arg for all the arguments and length for the largo of the equation)
// when you have all your if, you NEED an else for the "default" answer. 

