// before ES6
function newUser(name, age, country) {
    var name = name || 'No name';
    var age = age || 0;
    var country = country || 'GT';

    console.log(name, age, country);
}

newUser();
newUser('User', 15, 'MX');


// with ES6, the code is more friendly
function newAdmin(name = 'No Name', age = 0, country = 'GT') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');
