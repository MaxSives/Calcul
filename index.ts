class Calculator {
  num1: number;
  num2: number;
  constructor(a: number, b: number) {
    this.num1 = a;
    this.num2 = b;
  }
  addition() {
    return this.num1 + this.num2;
  }
  division() {
    return this.num1 / this.num2;
  }
  subtraction() {
    return this.num1 - this.num2;
  }
  multiplication() {
    return this.num1 * this.num2;
  }
}

let calculator = new Calculator(10, 2);

console.log(calculator.addition());
console.log(calculator.subtraction());
console.log(calculator.multiplication());
console.log(calculator.division());

function Calculator2(num1: number, num2: number, symbol: string) {
  if (symbol === "+") {
    return num1 + num2;
  } else if (symbol === "-") {
    return num1 - num2;
  } else if (symbol === "*") {
    return num1 * num2;
  } else if (symbol === "/") {
    return num1 / num2;
  } else if (symbol === "/" && num2 === 0) {
    return "На ноль делить нельзя";
  } else {
    return "Неверная операция";
  }
}
console.log(Calculator2(3, 2, "*"));
