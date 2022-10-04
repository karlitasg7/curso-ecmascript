
// declaring a class
class User {

    // constructor with no parameters
    /*constructor() {
        console.log('New user');

        this.name = name;
    }
    */

    // this refers to father element, constructor with parameter
    constructor(name) {
        this.name = name;
    }

    // methods
    greeting() {
        return 'Hello Hello';
    }

    greetingWithName() {
        return `${this.speak()} ${this.name}`;
    }

    speak() {
        return 'Hello';
    }

    // getters and setters
    get sName() {
        return this.name;
    }

    set sName(name) {
        this.name = name;
    }

};

// create an instance
const newUser = new User();

console.log(newUser.greeting());

const newUserWithName = new User('uuuu');

console.log(newUserWithName.greetingWithName());

newUser.sName = 'new user';

console.log(newUser.greetingWithName());