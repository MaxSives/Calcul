class Calculator {
    num1: number;
    num2: number;
    constructor(a: number, b: number) {
      this.num1 = a;
      this.num2 = b;
    }
    sum() {
      return this.num1 + this.num2;
    }
  }
  
  let calculator = new Calculator(1, 2);
  
  console.log(calculator);
  
  function plus(num1: number, num2: number, symbol: string) {
    if (symbol === "+") {
      return num1 + num2;
    } else if (symbol === "-") {
      return num1 - num2;
    } else if (symbol === "*") {
      return num1 * num2;
    } else if (symbol === "/") {
      return num1 / num2;
    } else {
      return NaN;
    }
  }
  console.log(plus(3, 2, "*"));
  