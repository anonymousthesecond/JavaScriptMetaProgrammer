// CodeGenerator.js

const CodeTemplate = require('./CodeTemplate');
const CodeBuilder = require('./CodeBuilder');

class CodeGenerator {
  static generateFunction(name, args, body) {
    const template = new CodeTemplate('function $name($args) {\n$body\n}');
    template.setValue('name', name);
    template.setValue('args', args);
    template.setValue('body', body);
    return template.render();
  }

  static generateClass(name, attributes, methods) {
    const builder = new CodeBuilder();
    builder.addLine(`class ${name} {`);
    builder.addLine('constructor() {');
    builder.indent += 2;
    for (const attr of attributes) {
      builder.addLine(`this.${attr} = null;`);
    }
    builder.indent -= 2;
    builder.addLine('}');
    for (const method of methods) {
      builder.addLine(method);
    }
    builder.addLine('}');
    return builder.getGeneratedCode();
  }
}

module.exports = CodeGenerator;
