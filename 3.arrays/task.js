const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]);

function advancedFilter(arr) {
  let result1 = arr.filter(item => item > 0)
  let result2 = result1.filter(item => item % 3 === 0)
  let resultArr = result2.map((item) => {
    return item * 10;
  });
  return resultArr;
}