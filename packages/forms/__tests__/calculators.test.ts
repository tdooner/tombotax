import US_1040 from '../src/forms/us_1040';
import US_1040_Calculator from '../src/calculators/us_1040_calculator';
import US_W2 from '../src/forms/us_w2';

const loadFixture = function(year, form) {
  if (year === 2018 && form === '1040') {
    return new US_1040('123');
  } else if (year === 2018 && form === 'W2') {
    return new US_W2(31952, 4400, 31952, 1981, 31952, 463, null, null, null,
      null, null, null, null, null, null, null, null, null, null, null, null);
  }
};

describe('doing calculations', () => {
  beforeEach(() => {
    this.w2 = loadFixture(2018, 'W2');
    this.calculator = new US_1040_Calculator();
  });

  it('loads correctly', () => {
    this.calculator.addForm(this.w2);
    expect(this.calculator.calculatedLine("1")).toEqual(31952);
    this.calculator.addForm(this.w2);
    expect(this.calculator.calculatedLine("1")).toEqual(31952 * 2);
  });
});
