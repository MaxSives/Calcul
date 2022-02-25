var Calculator = /** @class */ (function () {
  function Calculator(a, b) {
    this.num1 = a;
    this.num2 = b;
  }
  Calculator.prototype.sum = function () {
    return this.num1 + this.num2;
  };
  return Calculator;
})();

var calculator = new Calculator(1, 2);

console.log(calculator);

function plus(num1, num2, symbol) {
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
