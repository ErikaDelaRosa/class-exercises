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
  /*
   switch (operation) {
     case "sum":
       console.log(sum(numbers));
       break;
     case "avg":
       console.log(avg(numbers));
       break;
     case "mid":
       console.log(mid(numbers));
       break;
     default:
       console.log(
        "I cannot do this, please type 'sum' to calculate Sum or 'avg' to calculate Avg"
       );
   }
   numbers(5,7,8,9);
   */

   var calculateN = [7,5,3,6,7,9];
   //////////index=  0,1,2,3,4,5;
   var average = (calculateN / calculateN.length) * calculateN.length;
   console.log(average);

   for (var i = 0; i < calculateN.length; i++) {
       var average = (calculatedN[3,4,5] / calculateN.length[3,4,5]) * calculateN.length
   }
   console.log(average);