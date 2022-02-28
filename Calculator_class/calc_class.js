var Calculator = /** @class */ (function () {
  function Calculator(a, b) {
    this.num1 = a;
    this.num2 = b;
  }
  Calculator.prototype.addition = function () {
    return this.num1 + this.num2;
  };
  Calculator.prototype.division = function () {
    return this.num1 / this.num2;
  };
  Calculator.prototype.subtraction = function () {
    return this.num1 - this.num2;
  };
  Calculator.prototype.multiplication = function () {
    return this.num1 * this.num2;
  };
  return Calculator;
})();
var calculator = new Calculator(10, 2);
console.log(calculator.addition());
console.log(calculator.subtraction());
console.log(calculator.multiplication());
console.log(calculator.division());
