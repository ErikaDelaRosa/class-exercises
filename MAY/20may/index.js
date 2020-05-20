//callbacks one more time
//async and callbacks are same thing

// let's make hot chocolate

function prepareHotChocolate(callback){
    // first step
    setTimeout(()=>{
        let milk = 'boiled';
        // once milk boiled start next  step
        callback(milk,callback2)
    },2000);
}

function callback(milk,callback2){
    if(milk== 'boiled'){
        let chocolate =  'added';
        //once chocolate boiled start next step
        callback2(chocolate,callback3);
    }
}

function callback2(chocolate,callback3) {
    if (chocolate == 'added') {
        let marshmallow = 'added';
        // once marshmallow boiled start next step
        callback3(marshmallow);
    }
}

function callback3(marshmallow){
    if (mashmallow == 'added') {
        console.log("Cool your drink is ready");
    }
}

//calling the function
