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

