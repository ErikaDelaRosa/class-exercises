// iterative algorithms
let x = 3;
while (x <= 10) {
  console.log(`Sam`);
  x++;
}
let y = 1;
let result = 3;
while (y <= 10) {
  result = y * 9;
  console.log(`${y} * 9 ${result}`);
  y++;
}
let count = 10;
while (count >= 0) {
  console.log(`this is num ${count}`);
  count--;
}

let a = 3;
do {
  console.log(a);
  a++;
} while (a <= 100);

let zara = 100;
do {
  console.log(`there is ${zara} on the line`);
  zara--;
} while (zara >= 0);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// print only odd numbers

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 100; i <= 1000; ) {
  console.log(i);
  i += 100;
}

// for (..) {}

for (let i = 0; i <= 100; i++) {
  if (i == 30) {
    break;
  }
  console.log(i);
}
for (let w = 0; w <= 10; w++) {
  if (w % 2 == 0 && w == 8) {
    console.log(w);
    break;
  }
}
let xxx = false;
for (let w = 0; w <= 100; w++) {
  if (xxx) {
    console.log(`that is it`);
    break;
  }
  if (w == 20) {
    xxx = true;
  }
}
let result2 = 0;
for (let i = 1; i < 10; i++) {
  // i = 3
  for (let j = 1; j <= 10; j++) {
    // j = 3
    result2 = i * j;
    console.log(`${i} * ${j} = ${result2}`);
  }
}

let str = `This is a long text`;
for (let i = 0; i <= str.length; i++) {
  console.log(`The  ${i} letter is ${str[i]}`);
}
/* Addition. Write a program to add up the numbers 1 to 20.
1 - There are i bottles of beer on the wall. Write a program that will output, 
“There is one bottle of beer on the wall.”
 “There are two bottles of beer on the wall” up until there are five bottles.
2 -The odd/even reporter. Write a program that will iterate from 0 to 20. 
For each iteration, it will check if the current number is even or odd, 
and report that to the screen (e.g. “2 is even”).*/

let indio = 1;
do {
  console.log(indio);
  indio++;
} while (indio <= 20);

let str1 = " of beer on the wall";
for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    console.log(`There is ${i} bottles ${str1}`);
  } else {
    console.log(`There are ${i} bottle ${str1}`);
  }
}

let k = 0;
for (let k = 0; k <= 20; k++) {
  if (k % 2 == 0) {
    console.log(`The ${k} is an even number`);
  }
}
let s = 0;
for (let s = 0; s <= 20; s++) {
  if (s % 2 == 1) {
    console.log(`The ${s} is an odd number`);
  }
}
console.log(`thank you for your inquiry`);

//YYYYY

let box = ``;
for (let i = 0; i <= 4; i++) {
  box += "YY\n YY\n";
}
console.log(box);

/*// 1, 2, 4, 8... 128
// 0, 2, 4... 10
// 3, 6, 9 ... 15
// 9, 8, 7... 0
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 */

//1, 2, 4, 8... 128

for (let i = 1; i <= 128; i++) {
  console.log(i);
}

// 2 - 0, 2, 4... 10

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//3
let wi = 0;
for (let wi = 0; wi <= 20; wi++) {
  if (wi % 3 == 1) {
    console.log(`the ${wi} is an even number`);
  }
}

// 4
/**
 * 

let count1 = 10;
while (count1 >= 0) {
  console.log(`this is num ${count1}`);
  count1--;
}
 */
//5
let box1 = ``;
for (let i = 0; i <= 0; i++) {
  box1 += "111";
}
console.log(box1);

let box2 = ``;
for (let i = 0; i <= 0; i++) {
  box2 += "222";
}
console.log(box2);

let box3 = ``;
for (let i = 0; i <= 0; i++) {
  box3 += "333";
}
console.log(box3);

let box4 = ``;
for (let i = 0; i <= 0; i++) {
  box4 += "444";
}

console.log(box1 + box2 + box2 + box4);

//6
let box5 = ``;
for (let i = 0; i <= 0; i++) {
  box5 = `0123`;
}
console.log(box5 + box5 + box5);

let box6 = ``;
for (let i = 0; i <= 0; i++) {
  box6 += `T`;
}

let box7 = ``;
for (let i = 0; i <= 0; i++) {
  box7 += "T";
}

console.log(box6 + box7);

// var, let,  const
let firstName = "Hadi";
let firstName1 = "Ali";
let firstName2 = "Olga";
let arrVar = [firstName, firstName1, firstName2];
let arr = ["Hadi", "Olga", "Ali"];
console.log(arr[2]);
let arrInt = [1, 2, 3, 4, 5, 6];
console.log(arrInt[3]);

//console.log (arrNum.length);
let arrNum = ["one", "two", "three", "four"];
for (let i = 0; i < arrNum.length; i++) {
  console.log(`${i} is the ${arrNum[i]}`);
}

let arrSt = [];
for (let i = 0; i <= 10; i++) {
  arrSt[i] = 2 + i; // arrStr[0] = 2 + 0
  console.log(arrSt);
}

/* piramide
ttttt
tttt
ttt
tt
t


/* 
@@@@@
@@@
@@
@
*/

let tbox2 = "@@@@@";
for (let i = 0; i <= 5; i++) {
  console.log(tbox2.slice(i));
}
