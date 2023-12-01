const addRandomNumber = (num) => {
    return new Promise((resolve,reject) => {
        const condition = true;
        if (condition) {
            resolve(num+Math.floor(Math.random() * 10) + 1)
        } else {
            reject('Error')
        }
    })
}

addRandomNumber(5)
                .then(res => {
                    console.log('First Addition', res);
                    return addRandomNumber(res);
                })
                .then(res => {
                    console.log('Second Addition', res);
                    return addRandomNumber(res);
                })
                .then(res => {
                    console.log('Third Addition', res);
                })
                .catch(error => {
                    console.error("Error in Promise Chain", error)
                });

