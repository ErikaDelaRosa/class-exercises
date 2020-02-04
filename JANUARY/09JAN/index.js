let x, y, z; // decleare variable
x = 3; //assign value to variable
y = 4;
z = x + y;
console.log(x); //

console.log(Math.min(33, 55, 6, 0.4));
function display(str) {
  console.log(str);
}
display("Hi this is a new function");
let strInt = "1233";
let strInt2 = "33";
console.log(strInt + strInt2);
console.log(parseInt(strInt) + parseInt(strInt2));
let strFloat = "333.333";
console.log(parseFloat(strFloat));
let float1 = 2.4;
console.log(Math.ceil(float1));
console.log(Math.floor(float1));
let str1 = "this is new text";
console.log(str1.toUpperCase());

// addition
// x + z + y

console.log((x + y / (z + 2.3)) * 29 + x);

// String + Number
let d, f, r;
d = 5;
f = "Hi I am Mary ";
console.log(f + d);

// String + Boolean
r = false;
console.log(r + d); // r = 0 and d= 5 and result is 5(if false) and 6 if true

// String + string
let = str2 = "Hi ";
let str3 = "I am Jasmine princess ";
console.log(str2 + str3);

// typeof (objects, functions, console..)
console.log(typeof str3);
console.log(typeof x);
console.log(typeof console);
console.log(typeof Math);
console.log(typeof console.log);
console.log(typeof null);

// console.log(m);

// (0.1 * 0.2)
let floatNum = 0.1;
let floatNum1 = 0.2;
let result = floatNum * floatNum1;
let lastResult = result.toFixed(3);
console.log(lastResult);
console.log((floatNum * floatNum1).toFixed(3)); // toFIxed is used to selec the amount of decimals we need

// cube root calculation

console.log(Math.cbrt(64));

// 1.23e+5 - E stands for a very long number

// x = 3.444;
let intStr = "2nd";
let floatStr = "1033.3 Hi this is nooooo";
console.log(parseInt(intStr));
console.log(parseFloat(floatStr));

// && ||  and / or - one of both of
let var1 = 1 > 4; // false
let var2 = true;
let var3 = true;
console.log(var1 && var2 && var3 ? "cool" : "not cool"); // if both are true
console.log(var1 || var2 || var3 ? "cool" : "not cool"); // if both are true

// = Assigning

console.log(ohNo);
var ohNo;
let xx = "1";
ohNo = 1;
console.log(ohNo);

// == VS === we can use it to check password
console.log(x == ohNo ? "yeah it is " : "nope it is not");

// truthy and falsy values: false, undefined, null, 0, ""
console.log(true ? "yes" : "nooooo");
console.log(1 ? "true" : "false");
console.log(null ? "yes" : "nooooooooo");
console.log(display ? "yes" : " nope");

let prefix = "deutchland";
let deutchland = "49";
console.log(deutchland ? "yes" : " another country");

// Math.random
console.log(Math.random());

console.log(Math.random() * 10 + 1);
console.log(Math.floor() * 100);

// exercise 1: minimum and maximum

let s = -1;
let e = 0;
let p = 1;
let g = 2;
let m = 3;
let k = 4;

console.log(Math.min(s, e, p, g, m, k));
console.log(Math.max(s, e, p, g, m, k));

// rounding:

console.log(Math.round(3321));
console.log(Math.round(326.76));
console.log(Math.round(-9.78));
console.log(Math.round(43342));

console.log(Math.floor(3321));
console.log(Math.floor(326.76));
console.log(Math.floor(76788.7));
console.log(Math.floor(-9.78));

console.log(Math.random() * 6 + 1);
