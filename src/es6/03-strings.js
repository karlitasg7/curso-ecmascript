// template literals

let hello = 'Hello';
let world = 'World';

let beforeES6 = hello + ' ' + world + '!';

console.log(beforeES6);

let withTemplateLiterals = `${hello} ${world}!`;

console.log(withTemplateLiterals);

// multi-line strings

let lorem = 'this is a string \n ' + 'this is another line';
console.log(lorem);

let loremES6 = `This is another phrase
and this is another line`;

console.log(loremES6);