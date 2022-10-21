class User {

    constructor(name) {
        this.name = name;
    }

    greeting() {
        return 'Hello Hello';
    }

    greetingWithName() {
        return `${this.speak()} ${this.name}`;
    }

    #speak() {
        return 'Hello';
    }

    // getters and setters
    get #sName() {
        return this.name;
    }

    set #sName(name) {
        this.name = name;
    }

};

// adding # the method change to private, and only can use inside the class

const newUser = new User();
console.log(newUser.greeting());
console.log(newUser.speak()); // return error because the method is private
