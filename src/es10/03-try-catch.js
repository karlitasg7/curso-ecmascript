
// before es10
try {
    hello();
} catch (error) {
    console.log(error);
}


// with es10
try {
    anotherFn();
} catch {
    console.log('This is an error');
}
