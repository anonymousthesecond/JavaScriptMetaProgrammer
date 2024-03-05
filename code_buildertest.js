// CodeBuilder.test.js

const CodeBuilder = require('./CodeBuilder');

test('generates indented code', () => {
  const builder = new CodeBuilder(2);
  builder.addLine('console.log("Indented code");');
  expect(builder.getGeneratedCode()).toBe('  console.log("Indented code");');
});

test('adds control flow with body', () => {
  const builder = new CodeBuilder();
  builder.addControlFlow('if', 'condition', 'console.log("Body");');
  expect(builder.getGeneratedCode()).toBe('if (condition) {\n  console.log("Body");\n}');
});

test('adds control flow without body', () => {
  const builder = new CodeBuilder();
  builder.addControlFlow('while', 'true');
  expect(builder.getGeneratedCode()).toBe('while (true) {\n}');
});
