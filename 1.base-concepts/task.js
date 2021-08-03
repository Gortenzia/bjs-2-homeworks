function solveEquation(a, b, c) {
  let arr = [];
  D = Math.pow(b, 2) - 4 * a * c;
  console.log(D);
  if (D < 0) {
    arr === undefined;
  } else if (D === 0) {
    arr[0] = Math.floor(-b / (2 * a));
  } else if (D > 0) {
    arr[0] = Math.floor((-b + Math.sqrt(D)) / (2 * a));
    arr[1] = Math.floor((-b - Math.sqrt(D)) / (2 * a));
  };
  return arr;
}

solveEquation();

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь, но позже)

  return totalAmount;
}
