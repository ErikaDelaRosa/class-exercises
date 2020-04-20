window.alert(`Guess a number between 1 -10:`);
let guessAnumber = window.prompt("enter your number");
var x = document.getElementById("guessNumber").value;
var y = Math.floor(Math.random()* 10 + 1);
var guess = 1;
document.getElementById("guessNumber").onclick = function guessAnumber(){
if(x == y) {
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
} else if(x > y){
guess++; alert("OOPS SORRY!! TRY A SMALLER NUMBER");
} else { guess++; alert("OOPS SORRY!! TRY A GREATER NUMBER");
 } else { 
     alert(`Sorry, you failed to guess the number in the three attempts. The number was ${guess}`);
 }
 } ;


