import US_W2 from '../src/forms/us_w2';

describe('ATS scenario 1', () => {
  // https://www.irs.gov/pub/irs-utl/1040_mef_ats_scenario_1_form_1040_09242018.pdf
  beforeEach(() => {
    this.testForm = new US_W2(
      31952,
      4400,
      31952,
      1981,
      31952,
      463,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    );
  });

  it('sets the values', () => {
    expect(this.testForm.line1).toEqual(31952);
  });
});

describe('similar to Toms', () => {
  beforeEach(() => {
    this.testForm = new US_W2(
      12345,
      4567,
      12345,
      2345,
      12345,
      1234,
      null,
      null,
      null,
      null,
      null,
      { "C": 12.34, "D": 11.11, "DD": 22.22, "W": 10.10 },
      { "RetirementPlan": true },
      { "CASDI": 123.45 },
      "CA",
      "311-0582-8",
      90394,
      5868,
      null,
      null,
      null,
    );
  });

  it('sets the values', () => {
    expect(this.testForm.line1).toEqual(12345);
  });
});
