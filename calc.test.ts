import Calculator from "./calc";
const calc = new Calculator();

describe("Calculator class:", () => {
  test("add in Typescript", () => {
    expect(calc.addition(10, 2)).toBe(12);
  });

  test("subtraction in Typescript", () => {
    expect(calc.subtraction(10, 2)).toBe(8);
  });

  test("multiplication in Typescript", () => {
    expect(calc.multiplication(10, 2)).toBe(20);
  });

  test("division in Typescript", () => {
    expect(calc.division(10, 2)).toBe(5);
  });

  test("Дробные числа - деление(больше чем)", () => {
    expect(calc.division(100, 64)).toBeGreaterThan(1.5);
  });

  test("Дробные числа - вычитание", () => {
    expect(calc.subtraction(4, 2.4)).toBe(1.6);
  });
});
