// CodeTemplate.test.js

const CodeTemplate = require('./CodeTemplate');

test('renders template with values', () => {
  const template = new CodeTemplate('Hello, $name!');
  template.setValue('name', 'World');
  expect(template.render()).toBe('Hello, World!');
});

test('renders template with multiple values', () => {
  const template = new CodeTemplate('$name1 + $name2 = $result');
  template.setValue('name1', '2');
  template.setValue('name2', '3');
  template.setValue('result', '5');
  expect(template.render()).toBe('2 + 3 = 5');
});
