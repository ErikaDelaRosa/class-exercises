// Answer Sheet - all answers should go here 
const profileData = {
    name: "Erika",
    surname: "de la Rosa",
    age: 30,
    city: "Madrid"
}; 
console.log(profileData);
console.log(profileData.toString);

//const convert = {[
   // [name = "Erika"],
   // [surname= "de la Rosa"],
   // [age = 30],
   // [city= "Madrid"]
//]};
//console.log(convert);


const convertArrayData = (["coffee","tea","juice"]);
console.log(convertArrayData.pop()); // first i remove the last item
console.log(convertArrayData.reverse()); //i invert the order
console.log(convertArrayData.push("milk")); // i add a new item
console.log(convertArrayData); //i print it all together 


let arrayN = ["java","script"];
function createGrid (size, char) {
let i = 0;
for (let i= 0; i > arrayN.length ; i++) {
    for (let j= 0; j > arrayN.length[i]; j ++) {
    }
}
console.log(arrayN.length);
console.log(arrayN[i]);
}; 
console.log(createGrid(3,"hola"));



function wordConverter () {
const words = ["smart", "kind", "sweet", "small", "clear"];  //my intention was divide the words on the array and then add er
let newW = words.toString();
const newWo = words.slice(words);
console.log(newWords);  
const end = ("er");
console.log(newWords.concat(end));
//console.log(newWords.push(end)); // this is not working
}
console.log(wordConverter(newWords)); 


const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
function workingHours () {
    let sum = hourTracking.end[0][4] - hourTracking.start[0][4]; //i am trying to make the sum of the hours.
    console.log(sum);
}],



function capitalizeFirstLetter () {
var str = " ";    
let newStr = str[0].toUpperCase();
console.log(newStr); // i am trying to print the first letter using the index order
};
console.log(str("hello")); 




function validPin (pin) {
let pin = "";
let code = pin.length;
if (pin > 4 || pin < 0){
    return false;
}  if (pin !== 4) {
    return false;
} if (pin / 2 == 0 ) {
    return true;
} else {
    return `please enter a valid number`
}
};
    
console.log(validPin("3333"));




// Do not edit or answer below this line
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
//module.exports = {profileData, convertObjectToArray, convertArrayData, createGrid, wordConverter, calculateHours, Course, capitalizeFirstLetter, validPin};//