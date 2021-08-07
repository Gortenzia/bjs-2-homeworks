// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[-1];
  let sum = //сумма всех элементов массива;
    let avg = Number((sum / arr.length).toFixed(2));
  for (i = 0, i < arr.length; i++) {

  }
  function getNumbersFromArr(...arr) {

    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    let avg = Number((sum / arr.length).toFixed(2));

    for (i = 0; i < arr.length; i++) {
      let result = arr[i];
      max = max < i ? max = i : max;
      min = min < i ? min = i : min;
      sum += result;
    }
    return { min: min, max: max, avg: avg };
  }



  // Задание 2
  function worker(arr) {
    let sum;

    // Ваш код

    return sum;
  }

  function makeWork(arrOfArr, func) {
    let max

    // Ваш кода
    // for ...

    return max
  }

  // Задание 3
  function worker2(arr) {
    // Ваш код
  }

