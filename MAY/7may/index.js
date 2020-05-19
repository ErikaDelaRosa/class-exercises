// Promise
const userStatus = new Promise((resolve, reject)=> {
    let hasKids = false;
    let hasDogs = false; 
    if (hasDog) {
        resolve ({
            status: 'User is cool ',
            emoji:'',
        })
    }
    else if (hasKids){
        resolve({
            status: 'User is cool ',
            emoji:'',
        })
    }
    else {
        reject ({
            status: 'User is cool ',
            emoji:'',
        });
    }
});

userStatus.then((obj)=> {
    document.querySelector('.result').innerHTML = `${obj.status} and he/she is ${user.emoji}`;

}) .catch ((err) => {
    document.querySelector (
        ".result"
    ).innerHTML = `${err.status} and he/she is ${err.emoji}`;
});

function stepOne (userName) {
    return new Promise ((resolve,reject)=>{
        console.log('User data being loaded');
        if (userName == 'Ali'){
            resolve('Welcome back');
        } else {
            reject ('sorry I do not know you');
        }
    });
}

function secondStep (response){
    return new Promise ((resolve) => {
        console.log('Still loading');
        resolve(`We have been waiting for you ${response}`)
    })
} 
stepOne("Hadi").then((response)=>{
    console.log("response just arrived")
    return secondStep(response);
}).then((secondResponse)=>{
    console.log(secondResponse);
}).catch((err)=> console.log(err));


// Async Await

async function startSomething(){
    try {
    const response = await stepOne("Hadi");
    console.log("response just arrive");
    const secondResponse = await secondStep(response);
    console.log(secondResponse);
} catch (err){
    console.log (err);
}
}

startSomething();
