// javascript is an scripting languages NOT a program 

// types of Errors 
// 3 types of errors (compilation aga compiler fails to compile, runtime, logic)

// `try {...} catch (e) {...}`

console.log("First Example");
let userAge = 25; 
if (userAge == 25) {
    console.log('something else');
}
console.log('hi');
let userName = '';
try {  // this is a keyword from JS
    console.log('this is trying phase');
    //cool ();
    if(userName == '') throw 'Sorry, something went wrong';  // one condition and one throw error 
    console.log('this is the second phase');
} catch (err) {
console.log(`this error is` + err);
} finally {
    console.log('this will always run'); 
}
 // run type errors - when JS starts running application and there is an errors. 

 // try - to test a block of code
 // catch - to handle the error
 // throw - to create a custom errors
 // finally - will always run(even if i have an error or not)
 // cool(); this is a fake function will make an error

function display() {
    console.log('this is a cool function');
}
for ( let i = 0; i > 8; i ++){
    display()
};
//function self evoke as many times as we want
(function manyTimeCalledFunction(num){ 
    display();
    if (num > 1) manyTimeCalledFunction (num -1)
})(8);
function print() {
    console.log('Hi I am JS');
}
// this function will print after a time has been set (5 sec for ex)
const timerPrint = setTimeout(print, 5000);
const timerDisplay = setTimeout(() => console.log('cool that you have waited me'), 5000) ;
clearTimeout(timerDisplay);
