// CodeBuilder.js

class CodeBuilder {
  constructor(indent = 0) {
    this.codeLines = [];
    this.indent = indent;
  }

  addLine(line) {
    this.codeLines.push(' '.repeat(this.indent) + line);
  }

  addControlFlow(statement, condition = null, body = null) {
    if (condition) {
      this.addLine(`${statement} (${condition}) {`);
    } else {
      this.addLine(`${statement} {`);
    }
    if (body instanceof CodeBuilder) {
      body.indent += 2;
      this.codeLines = this.codeLines.concat(body.codeLines);
    } else if (typeof body === 'string') {
      this.addLine(body);
    }
    this.addLine('}');
  }

  getGeneratedCode() {
    return this.codeLines.join('\n');
  }
}

module.exports = CodeBuilder;
