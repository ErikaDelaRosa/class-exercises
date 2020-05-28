//const print = require("./strars");
const fs = require("fs");
const args = process.argv.slice(2);
//The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched.
//print(args[0], args[1]);
function parseNum(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(`Sorry, ${arg} is not a number. Please try again`);
    process.exit();
  }
  return number;
}
function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0);
}
function avg(numArray) {
  return sum(numArray) / numArray.length;
}
//const [operation, ...rest] = args;

//const numbers = rest.map(parseNum);
// sum 3 5 6 kdfjb
// avg 45 6 67

// switch (operation) {
//   case "sum":
//     console.log(sum(numbers));
//     break;
//   case "avg":
//     console.log(avg(numbers));
//     break;
//   case "mid":
//     // console.log(mid(numbers));
//     break;
//   default:
//     console.log(
//       "I cannot do this, please type 'sum' to calculate Sum or 'avg' to calculate Avg"
//     );
// }
// create file
// writeFile will create or over write
fs.writeFile(
  "new.txt",
  "This is text done by NodeJs 😉 and some new add",
  (err) => {
    if (err) throw err;
    console.log("Done 👍🏻");
  }
);
// appendFile will create file
fs.appendFile("new2.txt", "Second file done by NodeJs 👌🏻", (err) => {
  if (err) throw err;
  console.log("Done 👍🏻");
});
// readFile will read file
fs.readFile("./longText.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

// rename file
// fs.rename("./hello.txt", "./hi.txt", (err) => {
//   if (err) throw err;
//   console.log("Done 👍🏻");
// });

// delete file
const filePathName = "./hi.txt";
fs.unlink(filePathName, (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

/* Today’s assessment
Add support for an additional operation, "med" to the switch (today’s index.js)
 which calculates the Median number in the set. To calculate the median you will have to follow the steps below:
Sort the set of numbers
Get the index of the middle number by dividing the last index of the set by two: <last index> / 2
If the resulting index is a whole number (e.g. 7) then the median of the set is the value in that index.
Otherwise (if num is a fraction, e.g. 7.5) then the median is calculated by adding the two values in the indexes around it (for 7.5 it would be 7, and 8 ) and dividing them by two. */

/*  the median is the value separating the higher half from the lower half of a data sample, a population or a probability distribution. For a data set, it may be thought of as the "middle" value. For example, the basic advantage of the median in describing data compared to the mean (often simply described as the "average") is that it is not skewed so much by a small proportion of extremely large or small values, and so it may give a better idea of a "typical" value.  */

function sum(numArray) {
    return numArray.reduce((sum, n) => sum + n, 0);
  }
  function avg(numArray) {
    return sum(numArray) / numArray.length;
  }
  let numArray = [4,6,2,7,8,9];

  //const [operation, ...rest] = args;
  
  //const numbers = rest.map(parseNum);
  // sum 3 5 6 kdfjb
  // avg 45 6 67
  
  //i have change the order to follow the logic: first find out the numbers in the middle, then make the sum, and last make the average only of those numbers. 
   /*switch (operation) {
     case "mid":
       console.log(mid(numbers));
       break;
       case "sum":
       console.log(sum(numbers));
       break;
          case "avg":
       console.log(avg(numbers));
       break;

     //default:
       //console.log(
       // "I cannot do this, please type 'sum' to calculate Sum or 'avg' to calculate Avg"
       //);
   };
   */
  /*
   let numbers = [5,7,8,9];
    //this is my first part of the exercise
   let calculateN = [7,5,3,6,7,9];
   //////////index=  0,1,2,3,4,5;
   var average = (calculateN / calculateN.length) * calculateN.length;
   console.log(average);

   for (var i = 0; i < calculateN.length; i++) {
       var average = (calculatedN / calculateN.length) * calculateN.length
   }
   console.log(average);

   const reduce = (accumulator, currentValue) => accumulator + currentValue;
   console.log(calculateN.reduce(reducer)); //how to create the sum of the numbers of the array.
   
   const result = reducer / currentValue; // reduce divide by amount of numbers to have average
   console.log(result);
*/

// module exports
//how to export functions from one file to another

const math = require("./math");
console.log(math);

let x = 5,
  y = 4;
console.log(`x + y = ${math.sum(x, y)}`);
console.log(`x + y = ${math.sub(x, y)}`);
console.log(`x + y = ${math.multi(x, y)}`);

fs.copyFile("original.txt","copyFromOg.txt",(err)=>{
    if (err) throw err;
    console.log('text copied done');
});

const data = fs.readFileSync()





