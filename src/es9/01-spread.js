
const user = { username: 'ks', age: 25, country: 'GT' };

const { username, ...values } = user;

console.log(username);

console.log(values);
