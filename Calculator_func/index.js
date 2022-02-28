function Calculator2(num1, num2, symbol) {
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

module.exports = Calculator2;
