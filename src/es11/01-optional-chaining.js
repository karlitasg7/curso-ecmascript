const users = {
    usr: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}

console.log(users.usr.country);

console.log(users.usr.age); // age not exists

console.log(users?.other?.country); // the ? validate if exists, to prevent errors
