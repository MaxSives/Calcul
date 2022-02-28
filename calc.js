"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.addition = function (a, b) {
        return a + b;
    };
    Calculator.prototype.division = function (a, b) {
        return a / b;
    };
    Calculator.prototype.subtraction = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiplication = function (a, b) {
        return a * b;
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log(calculator.addition(10, 2));
console.log(calculator.subtraction(10, 2));
console.log(calculator.multiplication(10, 2));
console.log(calculator.division(10, 2));
exports["default"] = Calculator;
