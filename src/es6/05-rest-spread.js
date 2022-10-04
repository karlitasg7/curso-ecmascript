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

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);

// cool example with emoji
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)

