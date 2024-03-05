// main.js

const CodeGenerator = require('./CodeGenerator');

// Generate function definition
const functionDefinition = CodeGenerator.generateFunction('add', 'a, b', 'return a + b;');
console.log('Function Definition:');
console.log(functionDefinition);

// Generate class definition
const classDefinition = CodeGenerator.generateClass('Person', ['name', 'age'], ['sayHi() { console.log("Hi!"); }']);
console.log('\nClass Definition:');
console.log(classDefinition);
