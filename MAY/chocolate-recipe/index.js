//this is the hot chocolate & rum recipe
//water as people is lactose intolerant
//rum because life is short and have to always upgrade everything we do!

function makeHotChocolate(callback1){
    setTimeout(() => {
        let water = "boiled";
        callback1(water, callback2);
    },1000);
}

function callback2(water, callback2){
    if (water == "boiled") {
        let chocolate = "added";
        callback2(chocolate, callback3);
    }
}

function callback3(chocolate, callback4){
    if (chocolate == "added") {
        let rum = "added";
        callback3(rum);
    }
}

function callback4(rum, callback5){
    if (rum == "added") {
        let mint = "added";
        callback4(mint);
    }
}

function callback5(mint, callback6){
    if ( mint == "added") {
        let topping = "added";
        callback6(topping);
    }
}

function callback6 (topping){
    if (topping == "added") {
        console.log("Your chocolate drink is ready, enjoy!");
    }
}

makeHotChocolate(callback1);

/*function milkCheck(response) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (response == "heated") {
        resolve("your milk is hot now add chocolate");
      }
    }, 3000);
  });
}
function chocolateCheck(response) {
  return new Promise((resolve) => {
    resolve(` ${response} now add marshmallow`);
  });
}
function marshmallowCheck(response) {
  return new Promise((resolve) => {
    resolve(` ${response} now your drink is ready`);
  });
}
async function prepareHotCocoa() {
  const step1 = await milkCheck("heated");
  console.log(step1);
  const step2 = await chocolateCheck(step1);
  console.log(step2);
  const step3 = await marshmallowCheck(step2);
  console.log(step3);
}
prepareHotCocoa();
*/