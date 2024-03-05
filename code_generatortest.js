// CodeGenerator.test.js

const CodeGenerator = require('./CodeGenerator');

test('generates function definition', () => {
  const result = CodeGenerator.generateFunction('add', 'a, b', 'return a + b;');
  expect(result).toBe('function add(a, b) {\nreturn a + b;\n}');
});

test('generates class definition', () => {
  const result = CodeGenerator.generateClass('Person', ['name', 'age'], ['sayHi() { console.log("Hi!"); }']);
  expect(result).toBe('class Person {\nconstructor() {\nthis.name = null;\nthis.age = null;\n}\nsayHi() { console.log("Hi!"); }\n}');
});
