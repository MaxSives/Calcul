class Calculator {
  a: number;
  b: number;
  addition(a: number, b: number) {
    return a + b;
  }
  division(a: number, b: number) {
    return a / b;
  }
  subtraction(a: number, b: number) {
    return a - b;
  }
  multiplication(a: number, b: number) {
    return a * b;
  }
}

//let calculator = new Calculator();

//console.log(calculator.addition(10, 2));
//console.log(calculator.subtraction(10, 2));
//console.log(calculator.multiplication(10, 2));
//console.log(calculator.division(10, 2));

export default Calculator;
