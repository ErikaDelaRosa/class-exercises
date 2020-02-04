// reverse name


const str1 = "Javascript";
let strToArr = str1.split("");
strToArr.reverse();
let revStr = strToArr.join("");
console.log(revStr);

//reverse names : 4 functions
const reverseNames = ["Erika","Xena"]; 
function reverseNames (arr) {
let newArray = [];
let strToArr ="";
let str ="";
let revStr= "";
for (let i = 0; i < arr.length; i++) {
    str =arr [i];// e r i k a
    strToArr = str.split ("");
    strToArr.reverse(); // a k i r e
    revStr = strToArr.join ("");
    newArray.push(revStr);
}
return newArray; 
}

/// 

/* function reverseNames(arr) {
    let newArray = [];
    let str ="";
    for (let i = 0; i < arr.length; i++) {
        str = arr [i]
        .split("")
        .
    }
} */ 