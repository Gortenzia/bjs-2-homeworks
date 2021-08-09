// Задание 1

function getArrayParams(arr, ...rest) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let result = arr[i];
    max = max < result ? result : max;
    min = min > result ? result : min;
    sum += result;

  }
  return { max: max, min: min, avg: Number((sum / arr.length).toFixed(2)) };
}



// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let result = arr[i];
    sum += result;
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    max = max < func(arrOfArr[i]) ? func(arrOfArr[i]) : max;
  }
  return max;
};

// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}
