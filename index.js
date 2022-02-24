function plus() {
  let num1 = document.getElementById("1").value;
  num1 = parseInt(num1);
  let num2 = document.getElementById("2").value;
  num2 = parseInt(num2);
  result = num1 + num2;
  document.getElementById("rez").innerHTML = result;
}

function minus() {
  let num1 = document.getElementById("1").value;
  num1 = parseInt(num1);
  let num2 = document.getElementById("2").value;
  num2 = parseInt(num2);
  result = num1 - num2;
  document.getElementById("rez").innerHTML = result;
}

function multy() {
  let num1 = document.getElementById("1").value;
  num1 = parseInt(num1);
  let num2 = document.getElementById("2").value;
  num2 = parseInt(num2);
  result = num1 * num2;
  document.getElementById("rez").innerHTML = result;
}

function del() {
  let num1 = document.getElementById("1").value;
  num1 = parseInt(num1);
  let num2 = document.getElementById("2").value;
  num2 = parseInt(num2);
  result = num1 / num2;
  document.getElementById("rez").innerHTML = result;
}
