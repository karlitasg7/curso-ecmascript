// arrays destructuring

let fruits = ['Apple', 'Banana'];

let [a, b] = fruits;

console.log(a, b);

console.log(a, fruits[1]);


// object destructuring

let user = {
    username: 'karla',
    age: 20
};

let { username, age } = user;

console.log(username, age);

// without destructuring
console.log(user.username, user.age);

// spread operator (using ... to assign all properties from object to another)

let person = { name: 'karla', age: 22 };
let country = 'GT';

let data = { id: 1, ...person, country };

console.log(data);

