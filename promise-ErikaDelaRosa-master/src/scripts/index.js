// Blocking code
/*window.setTimeout(() => {
    alert("You've been on the site for 60 seconds! Cool!")}
     ,60);
*/
let createPromise = new Promise ((resolve) => {
    let x = true;
    if(x){
        resolve("You've been on the site for 60 seconds! Cool!");
    } 
});
// then is the same as resolve
// catch is the same as reject 
createPromise
.then ((message)=> {
    console.log(`I am then and ${message}`);
});
//.catch((message) => {
 //   console.log(`I am catch and ${message}`); 
//});

// Promise setTimeout
function delay (ms){
    return createPromise ((resolve) => {
        setTimeout(() =>{
            resolve();
        },ms);
    });
    };
    
    let ms=60;
    delay(ms).then(myFunction);


/*
    function myFunction () {
        let text = document.querySelector('.text');
        text.innerHTML=`it took me ${ms} ms to be done.`;
    }
    */