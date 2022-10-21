const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

// any return the first promise wich can resolve
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));