import Calculator from "./calc";
const calc = new Calculator();

describe("Calculator class:", () => {
  test("add in Typescript", () => {
    expect(calc.addition(10, 2)).toBe(12);
  });
});
