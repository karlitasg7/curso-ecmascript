// its a special function that remember a value or remember its state

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['david', 'oscar', 'ana', 'pedro', 'maria']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
