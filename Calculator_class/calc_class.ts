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