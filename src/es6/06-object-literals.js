
// before
function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    };
}

// with es6
function newUser2(user, age, country) {
    return {
        user,
        age,
        country
    };
}

console.log(newUser('user1', 10, 'mx'));
console.log(newUser('user2', 20, 'gt'));
