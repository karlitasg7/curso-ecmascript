
// before ES6
var lastName = 'David'; // create a variable
lastName = 'Oscar'; // reasign

console.log(lastName);

// in ES6

// let 
let fruit = 'Apple';
fruit = 'Kiwi';

console.log(fruit);

// const
const animal = 'Dog';
animal = 'Cat'; // can't reasign
console.log(animal);


const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);

}

fruits();
