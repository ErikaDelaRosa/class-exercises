// ARRAY topics
// reverse the string: "Javascript"

const str1 = "Javascript";
let strToArr = str1.split("");
strToArr.reverse();
let revStr = strToArr.join("");
console.log(revStr); 
// Add your pets names:
// Access one of your parents names:
//Update the name of one of your parents.
/*const parNames= ["Marta", "Elena"];
let bbfArray = 
let mom = bbfArray [2];
mom = "Kat";
parNames [2] =mom;
console.log(bffArray);*/

//FUNCTIONS
/* function exist between two brackets, as a local scope. */

function sum (x,y) {
    let fun ="Too in function";
console.log(fun);
} 
let fun = sum(2 + 4); // function call
console.log(fun); 

function age (x){
    if (x==30) {
        return "You are cool";
    } else {
        return "You are nice";
    }
}
console.log(age(20));

const numbers= [1,2,3,4,5,10,11,14];
function arrBig (array){
    let result = array.filter(num => num <= 5);
    return result;
}
console.log(arrBig(numbers));
console.log(arrBig(numbers)); 

function fourArrChar (array){
    let result = [];
    for (let i = 0; i< array.length; i ++){
        if (array[i].length == 4) {
            result.push(array[i])
        }
    }
    return result;
} // new function: 
function Och(array) {
let result =[]; 
for (let i = 0; i < array.length; i ++){
    if (array[i] [0] == "O"){
        result.push(array[i]); 
    }
}
return result;
}
const names2 = ["Ali", "Nancy","Marta", "Hadi"];
console.log(fourArrChar(names2));
console.log(Och (names2));
const monthNames = ["January","February", "March", "April","May", "Jun","July", "August","September", "October", "November", "December"];

function nameOfThatMonth (num) { 
    let result = "";
    switch (num) {
    }
    return result; 
        case 1: 
        console.log(monthNames[0]);
        break;
        case 2:
            console.log(monthNames[1]);
            break;
            case3 :
            console.log(monthNames[2]);
            break;
            case3 :
            console.log(monthNames[3]);
            break;
            case3 :
            console.log(monthNames[4]);
            break;
            case3 :
            console.log(monthNames[5]);
            break;
            case3 :
            console.log(monthNames[6]);
            break;
            case3 :
            console.log(monthNames[7]);
            break;
            case3 :
            console.log(monthNames[8]);
            break;
            case3 :
            console.log(monthNames[9]);
            break;
            case3 :
            console.log(monthNames[10]);
            break;
            case3 :
            console.log(monthNames[11]);
            break;
            default: "this is not a month";
    }

console.log(nameOfThatMonth(4));
console.log(nameOfThatMonth(3));

