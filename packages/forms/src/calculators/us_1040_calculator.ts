import US_W2 from '../forms/us_w2';

export default class {
  inputForms: Array<any>

  constructor() {
    this.inputForms = [];
  }

  addForm(form: any) {
    this.inputForms.push(form);
  }

  calculatedLine(lineNumber: string) {
    switch (lineNumber) {
      case '1': // wages, salaries, tips
        return this.inputForms
          .filter(f => f instanceof US_W2)
          .map(f => (f as US_W2).line1)
          .reduce((a, i) => a + i, 0)
    }
  }
}
