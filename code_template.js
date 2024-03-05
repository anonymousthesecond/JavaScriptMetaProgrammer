// CodeTemplate.js

class CodeTemplate {
  constructor(template) {
    this.template = template;
    this.values = {};
  }

  setValue(key, value) {
    this.values[key] = value;
  }

  render() {
    let renderedTemplate = this.template;
    for (const key in this.values) {
      if (Object.hasOwnProperty.call(this.values, key)) {
        const regex = new RegExp('\\$' + key, 'g');
        renderedTemplate = renderedTemplate.replace(regex, this.values[key]);
      }
    }
    return renderedTemplate;
  }
}

module.exports = CodeTemplate;
