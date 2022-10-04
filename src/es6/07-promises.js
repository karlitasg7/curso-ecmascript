
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey');
        } else {
            reject('Upsss');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    // .then() //we can add another then
    .catch(err => console.log(err));

