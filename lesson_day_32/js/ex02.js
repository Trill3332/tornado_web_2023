const isEvenOdd = (num) => {
    return  new Promise((resolve,reject) => {
        if (num % 2 === 0) {
            resolve('Even')
        } else {
            reject('Odd')
        }
    })
}
isEvenOdd(10).then((res) => {
    console.log(res)
})
isEvenOdd(11).then((err) => {
    console.log(err)
})
isEvenOdd(12).then((res) => {
    console.log(res)
})