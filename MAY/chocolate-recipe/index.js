
function makeHotChocolate(callback) {
    setTimeout(() => {
        let water = "boiled";
        callback(water, callback2);
    },1000);
}

function callback(water, callback2) {
    if (water == "boiled") {
        let chocolate = "added";
        callback2(chocolate, callback3);
    }
}

function callback2(chocolate, callback3){
    if (chocolate == "added") {
        let rum = "added";
        callback3(rum);
    }
}

function callback3(rum, callback4) {
    if (rum == "added") {
        let mint = "added";
        callback4(mint);
    }
}

function callback4(mint, callback5) {
    if ( mint == "added") {
        let topping = "added";
        callback5(topping);
    }
}

function callback5 (topping) {
    if (topping == "added") {
        console.log("Your chocolate drink is ready, enjoy!");
    }
}

makeHotChocolate(callback);