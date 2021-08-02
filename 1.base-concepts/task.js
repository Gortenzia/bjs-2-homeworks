use strict;

function solveEquation(a, b, c) {
  let arr = [];
  d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    arr === undefined;
  } else if (d === 0) {
    arr[0] = -b / (2 * a)
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a)
  };
  return arr;
}

solveEquation(2, 3, 4);

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
