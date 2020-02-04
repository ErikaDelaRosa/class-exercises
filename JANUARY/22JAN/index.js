// second page of 22 JAN, the first is on my pc
/*Amplify the Multiples of 4. 
Create a function that 
takes an integer and returns an array of integers ascending from 1 to the given number, where:
For each number in the array that can be evenly divided by 4, that number is amplified by 10 
(i.e. return 10 times the number).
If the number can not be divided evenly by 4, simply return the number.
The given integer will always be equal to or greater than 1.
Include the given number (the number in the parameters).
Examples:
amplify(4) ➞ [1, 2, 3, 40]
amplify(3) ➞ [1, 2, 3]
amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
Examples:
unique([3, 3, 3, 7, 3, 3]) ➞ 7
unique([0, 0, 0.77, 0, 0]) ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0*/
/*
var number = 1;
var limitNumber = 40; 
var result = number * number;
function maths (result) {
    if (result !== 0 || result/ 4 == 0) {
return (number) ;
   } else {
return (result => 1) ; 
 }
}
    console.log(result); 
*/


    function amp(num){
        let result = [];
        let ampByTen = 0;
        for (let i = 1; i <= num ; i++){
            if (i % 4 == 0){
                ampByTen = i * 10;
                result.push(ampByTen);
            } else {
                result.push(i)
            }
        }
        return result;
    }
    console.log(amp(4));

    /*One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
Examples:
unique([3, 3, 3, 7, 3, 3]) ➞ 7
unique([0, 0, 0.77, 0, 0]) ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0 */ 

function unique(arr){
    let currentValue = 0;
    let current = []; //1, 1, 1
    let remainder = [];
    for (let i = 0; i < arr.length; i++){
        if (current.length === 0 || current [0] == arr [i]) {
            current.push(arr[i]); // i
            currentValue ++; // current value = current value +1
        } else if (current[0] !== arr[i]){
            remainder.push(arr[i]);
        }
    }
        if (currentValue === 1) {
            return currentValue [0];
        } else {
            return remainder [0];
        }
    }

let arr = [1,1,1,4,1,1,1,];
console.log(unique());