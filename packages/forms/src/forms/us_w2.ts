interface LetteredCodes {
  [propName: string]: number;
}

interface OtherAmounts {
  [propName: string]: number;
}

interface W2Line13 {
  StatutoryEmployee?: boolean;
  RetirementPlan?: boolean;
  ThirdPartySickPay?: boolean;
}

export default class US_W2 {
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-useless-constructor */
  /* eslint-disable no-empty-function */
  constructor(
    public line1: number,
    public line2: number,
    public line3: number,
    public line4: number,
    public line5: number,
    public line6: number | null,
    public line7: number | null,
    public line8: number | null,
    public line9: number | null,
    public line10: number | null,
    public line11: number | null,
    public line12: LetteredCodes | null,
    public line13: W2Line13,
    public line14: OtherAmounts | null,
    public line15state: string | null,
    public line15id: string | null,
    public line16: number | null,
    public line17: number | null,
    public line18: number | null,
    public line19: number | null,
    public line20: number | null,
  ) {
  }
}
