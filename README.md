npm install -g lerna


# development
lerna bootstrap

# running
in one tab, run `npm run serve`
in another tab, run `npm run watch`

# planning
Okay this is gonna be rough. Here's an idea of what the flow might look like.
Let's be guided by (but innovate on the design of) the VITA intake form:
https://www.irs.gov/pub/irs-pdf/f13614c.pdf

1. Filing Status
2. Dependent Entry
3. Input Income forms
4. Deduction Entry forms

Goals:
* MVP goal: Be able to do simplest taxes
* Goal #2: Halfway to tom
* Goal #3: Be able to handle Tom's taxes
* Stretch goal: Be able to handle all in-scope VITA situations.
* Efile goal: Actually be able to e-file a return rather than just printing it out.
* Ultimate goal: Be able to handle all situations that people use commercial
  tax prep software for.

MVP goal flow
* *Filing status* - Select your filing status (single, married jointly/separately, HoH)
* *Input Income* - W-2 only
* *Input Deductions* - None (standard deduction only)

Goal #2 flow:
* *Income* - 1099-INT, 1099-DIV, 1099-OID, 1099-B, 8949 (Cap Gains Income)
* *Tax* - Qualified Dividends/Cap Gains Worksheet
* *Deductions/Adjustments* - HSA, SALT

Goal #3 flow:
* *Payments* - Estimated Tax payments
* *Deductions/Adjustments* - Foreign Tax Credit, Nondeductible IRA, Capital Loss Carryover

# todo list
- [ ] input form: W-2
- [ ] input form: 1099-DIV
- [ ] input form: 1099-INT
- [ ] input form: 1099-OID
