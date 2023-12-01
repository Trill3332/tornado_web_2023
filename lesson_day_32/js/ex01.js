let delayedHello = new Promise((resolve,reject) => {
    const condition = true;
    if (condition) {
        resolve(setTimeout(()=> {
            console.log('Hello World')
        },2000))
    } else {
        reject('Rejected')
    }
});

console.log(delayedHello);

delayedHello.then((res) => {
    console.log(res);
})

delayedHello.catch((err) => {
    console.log(err);
})


