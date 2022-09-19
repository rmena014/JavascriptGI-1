// MATH FUNCTIONS

let multiply = function (num1, num2) {
  return num1 * num2;
};

let add = function (num1, num2) {
  return num1 + num2;
};

let subtraction = function (num1, num2) {
  return num1 - num2;
};

let divide = function (num1, num2) {
  return num1 / num2;
};

// Functions
let num1 = Number(prompt("Input a number please"));
let num2 = Number(prompt("Input another number please"));

let operator = prompt("What is your operator?");

let operatorOption = function (operator, num1, num2) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  } else {
    alert("No operator detected");
  }
};

console.log(
  `${num1} ${operator} ${num2} = ${operatorOption(operator, num1, num2)}`
);
